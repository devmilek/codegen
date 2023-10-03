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
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const formSchema = z.object({
  networkName: z.string(),
  networkType: z.enum(["WEP", "nopass", "WPA"]),
  password: z.string().min(2),
  hidden: z.boolean(),
});

const Page = () => {
  const { value, setValue } = useQrStore();

  const networkTypes = [
    {
      label: "WEP",
      value: "WEP",
    },
    {
      label: "WPA/WPA2",
      value: "WPA",
    },
    {
      label: "No encryption",
      value: "nopass",
    },
  ];

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      networkName: undefined,
      networkType: undefined,
      password: "",
      hidden: false,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setValue(
      `WIFI:T:${values.networkType};S:${values.networkName};${
        values.networkType !== "nopass" ? `P:${values.password};` : ""
      }H:${values.hidden};`
    );
  };
  return (
    <div>
      <h1 className="font-semibold text-2xl mb-4">Enter your WIFI details</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <FormField
              control={form.control}
              name="networkName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Network name</FormLabel>
                  <FormControl>
                    <Input placeholder="SSID" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="networkType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Network type</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Network type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        {networkTypes.map((item) => (
                          <SelectItem key={item.value} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            name="hidden"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hidden</FormLabel>
                <FormControl>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="hidden"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                    <Label htmlFor="hidden">Is WIDI hidden</Label>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          <div className="mt-4 flex justify-end">
            <Button type="submit">Generate</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Page;
