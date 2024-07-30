import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type TCategoryProps = {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
};

export default function FilterdByCategory({
  category,
  setCategory,
}: TCategoryProps) {
  return (
    <Select value={category} onValueChange={(value) => setCategory(value)}>
      <SelectTrigger className='w-[180px] '>
        <SelectValue placeholder='Filter by category' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Categories</SelectLabel>
          <SelectItem value='all'>All</SelectItem>
          <SelectItem value='Football'>Football</SelectItem>
          <SelectItem value='Cricket'>Cricket</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
