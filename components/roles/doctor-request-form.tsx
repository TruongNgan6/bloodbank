"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon, CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "@/components/ui/use-toast";
import { format } from "date-fns";

const accountFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(30, {
      message: "Name must not be longer than 30 characters.",
    }),
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
  language: z.string({
    required_error: "Please select a language.",
  }),
});

type AccountFormValues = z.infer<typeof accountFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<AccountFormValues> = {
  // name: "Your name",
  // dob: new Date("2023-01-23"),
};

export function DoctorsRequestForm() {
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues,
  });

  function onSubmit(data: AccountFormValues) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormItem>
            <FormLabel>Hospital Name</FormLabel>
            <FormControl>
              <Input placeholder="Your hospital name" />
            </FormControl>
            <FormDescription>
              This is the name that will be displayed on your request and in
              emails.
            </FormDescription>
            <FormMessage />
          </FormItem>
          <FormItem>
            <FormLabel>Doctor ID</FormLabel>
            <FormControl>
              <Input placeholder="Your ID" />
            </FormControl>
            <FormDescription>
              This is the name that will be displayed on your request and in
              emails.
            </FormDescription>
            <FormMessage />
          </FormItem>
          <FormItem>
            <FormLabel>Moblie</FormLabel>
            <FormControl>
              <Input placeholder="Hotline of Hospital" />
            </FormControl>
            <FormMessage />
          </FormItem>
          <FormItem>
            <FormLabel>Type of Blood</FormLabel>
            <FormControl>
              <Input placeholder="Type" />
            </FormControl>
            <FormMessage />
          </FormItem>
          <FormItem>
            <FormLabel>How many Bags?</FormLabel>
            <FormControl>
              <Input placeholder="1 or 2 bags" />
            </FormControl>
            <FormMessage />
          </FormItem>
          <Button type="submit" id="send-request">
            Send Request
          </Button>
        </form>
      </Form>
    </>
  );
}
