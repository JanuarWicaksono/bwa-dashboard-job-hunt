"use client"

import React, { FC } from 'react'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { PlusIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { teamFormSchema } from '@/lib/form-schema';
import { useForm } from 'react-hook-form';
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

interface DialogAddTeamProps {

}

const DialogAddTeam: FC<DialogAddTeamProps> = ({ }) => {
    const form = useForm<z.infer<typeof teamFormSchema>>({
        resolver: zodResolver(teamFormSchema)
    })

    const onSubmit = (val: z.infer<typeof teamFormSchema>) => {
        console.log(val)
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>
                    <PlusIcon className='h-4 w-4 mr-2'></PlusIcon>
                    Add member
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogTitle>Add new team</DialogTitle>
                <DialogDescription>
                    Fill the field to add new team
                </DialogDescription>
                </DialogHeader>

                <Separator />

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className='space-y-5'
                    >
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
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
                            name="position"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Position</FormLabel>
                                    <FormControl>
                                        <Input 
                                            placeholder='Position'
                                            {...field}   
                                        ></Input>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        ></FormField>
                        <div className='grid grid-cols-2 gap-3'>
                            <FormField
                                control={form.control}
                                name="instagram"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Instagram</FormLabel>
                                        <FormControl>
                                            <Input 
                                                placeholder='Instagram'
                                                {...field}   
                                            ></Input>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            ></FormField>
                            <FormField
                                control={form.control}
                                name="linkedin"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Linkedin</FormLabel>
                                        <FormControl>
                                            <Input 
                                                placeholder='Linkedin'
                                                {...field}   
                                            ></Input>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            ></FormField>
                        </div>
                        <Button>Save</Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}

export default DialogAddTeam;