import { FormControl, FormField, FormItem, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Label } from './ui/label';

type TFormField = {
  name: string;
  placeholder: string;
  isUpdate?: boolean;
};

export default function FormInputFiled({
  isUpdate,
  name,
  placeholder,
}: TFormField) {
  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <div className='space-y-1.5'>
              {isUpdate && <Label htmlFor={name}>{placeholder}</Label>}
              <Input placeholder={placeholder} {...field} />
            </div>
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
