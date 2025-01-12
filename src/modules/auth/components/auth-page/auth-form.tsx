import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/components/ui";
import { useAuth } from "../../hooks/auth";

export function AuthForm() {
  const { form, login } = useAuth();
  return (
    <Form {...form}>
      <form onSubmit={login} className={"space-y-4"}>
        <FormField
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="example@yopmail.com"
                  type={"email"}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          name={"email"}
        />

        <Button type={"submit"} className={"w-full"}>
          Send Magic Link
        </Button>
      </form>
    </Form>
  );
}
