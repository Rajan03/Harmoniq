import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Button,
  Form,
  FormControl,
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
import { NetworkFormData, networkSchema } from "../schema";

export function NetworkForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<NetworkFormData>({
    resolver: zodResolver(networkSchema),
    disabled: isLoading,
    defaultValues: {
      name: "",
      description: "",
      address: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: NetworkFormData) {
    setIsLoading(true);
    console.log(values);
    setIsLoading(false);
    toast({
      title: "Network added successfully",
      description: "Your new network has been added to the system.",
    });
    form.reset();
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
