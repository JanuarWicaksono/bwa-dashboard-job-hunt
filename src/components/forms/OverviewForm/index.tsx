"use client";

import TitleForm from "@/components/atoms/TitleForm";
import CKEditor from "@/components/organisms/CKEditor";
import CustomUpload from "@/components/organisms/CustomUpload";
import FieldInput from "@/components/organisms/FieldInput";
import InputSkills from "@/components/organisms/InputSkills";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { EMPLOYEE_OPTIONS, LOCATION_OPTIONS, optionType } from "@/constants";
import { overviewFormSchema } from "@/lib/form-schema";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import React, { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface OverviewFormProps {}

const OverviewForm: FC<OverviewFormProps> = ({}) => {
    const [editorLoaded, setEditorLoaded] = useState<boolean>(false)

    const form = useForm<z.infer<typeof overviewFormSchema>>({
        resolver: zodResolver(overviewFormSchema)
    })

    const onSubmit = (val: z.infer<typeof overviewFormSchema>) => {
        console.log(val);
    }

    useEffect(() => {
        setEditorLoaded(true)
    }, [])

    return (
        <div>
            <div className="my-5">
                <TitleForm title="Basic Information" subtitle="This is company information that you can update anytime"></TitleForm>
            </div>

            <Separator className="mb-7"></Separator>

            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-7"
                >
                    <FieldInput
                        title="Company Logo"
                        subtitle="This image will be shown publicly as company logo"
                    >
                        <CustomUpload form={form} name="image"></CustomUpload>
                    </FieldInput>

                    <FieldInput title="Company Details" subtitle="Introduce your company core info quickly to users by fill up company details">
                        <div className="space-y-5">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Company Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="w-[450px]"
                                                placeholder="Twitter"
                                                {...field}
                                            ></Input>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            ></FormField>

                            <FormField
                                control={form.control}
                                name="website"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Website</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="w-[450px]"
                                                placeholder="https://www.google.com"
                                                {...field}
                                            ></Input>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            ></FormField>

                            <FormField
                                control={form.control}
                                name="location"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Location</FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger className="w-[450px]">
                                                    <SelectValue placeholder="Location"></SelectValue>
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {LOCATION_OPTIONS.map(
                                                    (item: optionType, i: number) => (
                                                        <SelectItem
                                                            key={item.id + i}
                                                            value={item.id}
                                                        > {item.label}</SelectItem>
                                                    )
                                                )}
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                            ></FormField>

                            <div className="w-[450px] grid grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="employee"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Employee</FormLabel>
                                            <Select
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                            >
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Employee"></SelectValue>
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {EMPLOYEE_OPTIONS.map(
                                                        (item: optionType, i: number) => (
                                                            <SelectItem
                                                                key={item.id + i}
                                                                value={item.id}
                                                            > {item.label}</SelectItem>
                                                        )
                                                    )}
                                                </SelectContent>
                                            </Select>
                                        </FormItem>
                                    )}
                                ></FormField>

                                <FormField
                                    control={form.control}
                                    name="industry"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Industry</FormLabel>
                                            <Select
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                            >
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Industry"></SelectValue>
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {LOCATION_OPTIONS.map(
                                                        (item: optionType, i: number) => (
                                                            <SelectItem
                                                                key={item.id + i}
                                                                value={item.id}
                                                            > {item.label}</SelectItem>
                                                        )
                                                    )}
                                                </SelectContent>
                                            </Select>
                                        </FormItem>
                                    )}
                                ></FormField>
                            </div>

                            <FormField
                                control={form.control}
                                name="dateFounded"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col">
                                    <FormLabel>Date of birth</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-[450px] pl-3 text-left font-normal",
                                                !field.value && "text-muted-foreground"
                                            )}
                                            >
                                            {field.value ? (
                                                format(field.value, "PPP")
                                            ) : (
                                                <span>Pick a date</span>
                                            )}
                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                        </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={field.value}
                                            onSelect={field.onChange}
                                            disabled={(date) =>
                                            date > new Date() || date < new Date("1900-01-01")
                                            }
                                            initialFocus
                                        />
                                        </PopoverContent>
                                    </Popover>
                                    <FormDescription>
                                        Your date of birth is used to calculate your age.
                                    </FormDescription>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            ></FormField>

                            <InputSkills form={form} name="requiredSkills" label="Add Tech Stack"></InputSkills>
                        </div>
                        
                    </FieldInput>

                    <FieldInput title="About Company" subtitle="Brief description for your company. URLs are hyperlinked">
                        <CKEditor form={form} name="description" editorLoaded={editorLoaded}></CKEditor>
                    </FieldInput>

                    <div className="flex justify-end">
                        <Button size="lg"> Save Changes</Button>
                    </div>
                </form>
            </Form>



        </div>
    )
}

export default OverviewForm;