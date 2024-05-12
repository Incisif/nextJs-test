"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  ProductType,
  ProductSchema,
  GRADIENTS_CLASSES,
} from "./product.schema";
import {
  useZodForm,
  Form,
  FormField,
  FormLabel,
  FormItem,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { SelectValue } from "@radix-ui/react-select";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import { createProductAction } from "./product.action";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export type ProductFormProps = {
  defaultValues?: ProductType;
};

export const ProductForm = (props: ProductFormProps) => {
  const form = useZodForm({
    schema: ProductSchema,
    defaultValues: props.defaultValues,
  });

  const isCreate = !props.defaultValues;
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async (values: ProductType) => {
      console.log("Submitting form values:", values);
      const { data, serverError } = await createProductAction(values);

      if (serverError || !data) {
        toast.error(serverError);
        return;
      }
      toast.success(`Product created`);
      console.log(data);

      router.push(`/products/${data?.id}`);
    },
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {isCreate
            ? "Create produt"
            : `Edit product ${props.defaultValues?.name}`}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form
          className="flex flex-col gap-4"
          form={form}
          onSubmit={async (values) => {
            await mutation.mutateAsync(values);
          }}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <input
                    {...field}
                    className="w-full rounded-md border p-1"
                    placeholder="Product name"
                  />
                </FormControl>
                <FormDescription>The name of the product.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="slug"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Slug</FormLabel>
                <FormControl>
                  <input
                    {...field}
                    className="w-full rounded-md border p-1"
                    placeholder="Product name"
                    onChange={(e) => {
                      const value = e.target.value
                        .replaceAll(" ", "-")
                        .toLowerCase();
                      field.onChange(value);
                    }}
                  />
                </FormControl>
                <FormDescription>The name of the product.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="backgroundColor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Backgroud color</FormLabel>
                <FormControl>
                  <Select
                    value={field.value ?? ""}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger>
                      <SelectValue></SelectValue>
                      <SelectContent>
                        {GRADIENTS_CLASSES.map((gradient) => (
                          <SelectItem
                            key={gradient}
                            value={gradient}
                            className="flex"
                          >
                            <span
                              className={cn(
                                gradient,
                                "block w-80 h-8 rounded-md flex-1"
                              )}
                            ></span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </SelectTrigger>
                  </Select>
                </FormControl>
                <FormDescription>
                  The review page background color.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button>{isCreate ? "Create product" : "Save product"}</Button>
        </Form>
      </CardContent>
    </Card>
  );
};
