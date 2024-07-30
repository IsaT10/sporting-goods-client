import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type TStockProps = {
  byStock: string;
  setByStock: React.Dispatch<React.SetStateAction<string>>;
};

export default function SortByStock({ byStock, setByStock }: TStockProps) {
  return (
    <Select value={byStock} onValueChange={(value) => setByStock(value)}>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Sort by stock' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sort By Stock</SelectLabel>

          <SelectItem value='stock'>Low to High</SelectItem>
          <SelectItem value='-stock'>High to Low</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
