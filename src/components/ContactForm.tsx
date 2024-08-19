import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from './ui/textarea';
import FormInputFiled from './FormInputFiled';
import { toast } from './ui/use-toast';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required!'),
  email: z
    .string()
    .min(1, 'Email is required!')
    .email({ message: 'Invalid email address' }),
  message: z.string().min(1, 'Message is required!'),
});

const defaultValues = {
  name: '',
  email: '',
  message: '',
};

export function ContactForm() {
  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      ...defaultValues,
    },
  });

  //   const { isSubmitting } = form.formState;

  /* const { fields, append } = useFieldArray({
    name: "urls",
    control: form.control,
  }) */

  function onSubmit(values: z.infer<typeof contactSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setTimeout(() => {
      // Show a success toast after the delay
      toast({
        title: 'Success',
        description: 'Form submit succesfully',
        variant: 'default',
      });
    }, 1000);

    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormInputFiled placeholder={'Name'} name={'name'} />
        <FormInputFiled placeholder={'Email'} name={'email'} />

        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder='Message'
                  className='resize-none'
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type='submit'
          className='bg-brightOrange  hover:bg-brightOrange/90'
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
