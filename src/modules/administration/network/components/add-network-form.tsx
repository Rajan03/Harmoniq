import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Textarea,
} from "@/components/ui";
import { toast } from "@/hooks/use-toast";

const networkSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters." }),
  address: z
    .string()
    .min(5, { message: "Address must be at least 5 characters." }),
  city: z.string().min(2, { message: "City must be at least 2 characters." }),
  state: z.string().min(2, { message: "State must be at least 2 characters." }),
  zipCode: z
    .string()
    .regex(/^\d{5}(-\d{4})?$/, { message: "Invalid zip code format." }),
  country: z
    .string()
    .min(2, { message: "Country must be at least 2 characters." }),
  phoneNumber: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format." }),
  email: z.string().email({ message: "Invalid email address." }),
  website: z.string().url({ message: "Invalid website URL." }),
});

type NetworkFormData = z.infer<typeof networkSchema>;

export function NetworkForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<NetworkFormData>({
    resolver: zodResolver(networkSchema),
    defaultValues: {
      name: "",
      description: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
      phoneNumber: "",
      email: "",
      website: "",
    },
  });

  function onSubmit(values: NetworkFormData) {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log(values);
      toast({
        title: "Network added successfully",
        description: "Your new network has been added to the system.",
      });
      form.reset();
    }, 2000);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Network Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {Object.keys(networkSchema.shape).map((field) => (
              <FormField
                key={field}
                control={form.control}
                name={field as keyof NetworkFormData}
                render={({ field: fieldProps }) => (
                  <FormItem>
                    <FormLabel>
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </FormLabel>
                    <FormControl>
                      {field === "description" ? (
                        <Textarea
                          placeholder={`Enter ${field}`}
                          className="resize-none"
                          {...fieldProps}
                        />
                      ) : (
                        <Input
                          placeholder={`Enter ${field}`}
                          type={field === "email" ? "email" : "text"}
                          {...fieldProps}
                        />
                      )}
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <FormItem>
              <FormLabel>Logo</FormLabel>
              <FormDescription>Upload a logo for the network</FormDescription>
              <Input id="logo" type="file" />
            </FormItem>
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Adding Network..." : "Add Network"}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
