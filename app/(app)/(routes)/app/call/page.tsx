"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useQrStore } from "@/hooks/use-qr-store";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import codes from "@/assets/CountryCodes.json";
import { ScrollArea } from "@/components/ui/scroll-area";

const formSchema = z.object({
  phoneNumber: z.string().regex(new RegExp("^[0-9]*$")).trim().min(8, {
    message: "Enter valid phone number",
  }),
  dialCode: z.string(),
});

const Page = () => {
  const { value, setValue } = useQrStore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      phoneNumber: undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setValue(`TEL:${values.dialCode}${values.phoneNumber}`);
  };
  return (
    <div>
      <h1 className="font-semibold text-2xl mb-4">Enter your phone number</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="dialCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country code</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a country code" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <ScrollArea className="h-[300px]">
                          {codes.map((code) => (
                            <SelectItem value={code.dial_code}>
                              {code.name}{" "}
                              <span className="text-xs opacity-40">
                                {code.dial_code}
                              </span>
                            </SelectItem>
                          ))}
                        </ScrollArea>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="mt-4 flex justify-end">
            <Button type="submit">Generate</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Page;
