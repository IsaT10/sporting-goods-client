import { FormControl, FormField, FormItem, FormMessage } from './ui/form';
import { Input } from './ui/input';

type TFormField = {
  name: string;
  placeholder: string;
};

export default function FormInputFiled({ name, placeholder }: TFormField) {
  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input placeholder={placeholder} {...field} />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
