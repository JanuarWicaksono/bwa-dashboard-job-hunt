"use client"

import FieldInput from '@/components/organisms/FieldInput';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { socialMediaFormSchema } from '@/lib/form-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { FC } from 'react'
import { useForm } from 'react-hook-form';
import { z } from "zod";

interface SocialMediaFormProps {

}

const SocialMediaForm: FC<SocialMediaFormProps> = ({  }) => {
    const form = useForm<z.infer<typeof socialMediaFormSchema>>({
        resolver: zodResolver(socialMediaFormSchema)
    })

    const onSubmit = (val : z.infer<typeof socialMediaFormSchema>) => {
        console.log(val)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-7'>
                <FieldInput title='Basic Information' subtitle='Add elsewhere links to your company profile. You can add only username without full https links.'>
                    <div className='space-y-5'>
                        <FormField 
                            control={form.control}
                            name="facebook"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Facebook</FormLabel>
                                    <FormControl>
                                        <Input
                                            className='w-[450px]'
                                            placeholder='https://facebook.com/twitter'
                                            {...field}
                                        ></Input>
                                    </FormControl>
                                </FormItem>
                            )}
                        >
                        </FormField>

                        <FormField 
                            control={form.control}
                            name="instagram"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Insagram</FormLabel>
                                    <FormControl>
                                        <Input
                                            className='w-[450px]'
                                            placeholder='https://instagram.com/twitter'
                                            {...field}
                                        ></Input>
                                    </FormControl>
                                </FormItem>
                            )}
                        >
                        </FormField>

                        <FormField 
                            control={form.control}
                            name="linkedin"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Linkedin</FormLabel>
                                    <FormControl>
                                        <Input
                                            className='w-[450px]'
                                            placeholder='https://linkedin.com/linkedin'
                                            {...field}
                                        ></Input>
                                    </FormControl>
                                </FormItem>
                            )}
                        >
                        </FormField>

                        <FormField 
                            control={form.control}
                            name="youtube"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Youtube</FormLabel>
                                    <FormControl>
                                        <Input
                                            className='w-[450px]'
                                            placeholder='https://youtube.com/linkedin'
                                            {...field}
                                        ></Input>
                                    </FormControl>
                                </FormItem>
                            )}
                        >
                        </FormField>
                    </div>
                </FieldInput>
                <div className='flex justify-end'>
                    <Button size='lg'>Save Changes</Button>
                </div>
            </form>
        </Form>
    )
}

export default SocialMediaForm;