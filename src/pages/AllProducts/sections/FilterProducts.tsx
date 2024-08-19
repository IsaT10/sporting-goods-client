import { Button } from '@/components/ui/button';
import React from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Star } from 'lucide-react';
import { Input } from '@/components/ui/input';

type TFiltersProps = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  byPrice: string;
  setByPrice: React.Dispatch<React.SetStateAction<string>>;
  category: string;
  setCategory: (value: string) => void;
  brand: string;
  setBrand: React.Dispatch<React.SetStateAction<string>>;
  byRating: string;
  setByRating: React.Dispatch<React.SetStateAction<string>>;
  handleResetAll: () => void;
};

export default function FilterProducts({
  searchTerm,
  setSearchTerm,
  byPrice,
  setByPrice,
  category,
  setCategory,
  brand,
  setBrand,
  byRating,
  setByRating,
  handleResetAll,
}: TFiltersProps) {
  const handleResetAllFilters = () => {
    setCategory('all');
    handleResetAll();
  };
  return (
    <div className='space-y-6'>
      <div>
        <div className='flex justify-between border-b border-stone-300 pb-4'>
          <h2 className='font-bold  text-xl mb-4'>Filter By</h2>
          <Button onClick={handleResetAllFilters} variant='outline'>
            Reset all
          </Button>
        </div>

        <h2 className='font-semibold  text-lg py-4 '>Find your products</h2>
        <Input
          value={searchTerm}
          type='text'
          placeholder='Search by name...'
          onChange={(e) => setSearchTerm(e.target.value)}
          className=''
        />
      </div>
      <Select value={byPrice} onValueChange={(value) => setByPrice(value)}>
        <SelectTrigger className=''>
          <SelectValue placeholder='Sort by price' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value='price'>Low to High</SelectItem>
            <SelectItem value='-price'>High to Low</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <div>
        <p className='font-semibold text-lg mb-4 '>Categories</p>
        <RadioGroup
          value={category}
          onValueChange={(value) => setCategory(value)}
          className='ml-6 space-y-2'
        >
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='all' id='r1' />
            <Label htmlFor='r1'>All</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='Cricket' id='r2' />
            <Label htmlFor='r2'>Cricket</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='Football' id='r3' />
            <Label htmlFor='r3'>Football</Label>
          </div>
        </RadioGroup>
      </div>
      <div>
        <p className='font-semibold text-lg mb-4 '>Brands</p>
        <RadioGroup
          onValueChange={(value) => setBrand(value)}
          className='ml-6 space-y-2'
          value={brand}
        >
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='all' id='r1' />
            <Label htmlFor='r1'>All</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='Nike' id='r2' />
            <Label htmlFor='r2'>Nike</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='SS' id='r3' />
            <Label htmlFor='r3'>SS</Label>
          </div>
        </RadioGroup>
      </div>

      <div>
        <p className='font-semibold text-lg mb-4 '>Ratings</p>
        <RadioGroup
          onValueChange={(value) => setByRating(value)}
          value={byRating}
          className='ml-6 space-y-2'
        >
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='all' id='r1' />
            <Label htmlFor='r1'>All</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='5' id='r2' />
            <Label htmlFor='r2'>
              <div className='flex'>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </Label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='4' id='r2' />
            <Label htmlFor='r2'>
              <div className='flex'>
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
            </Label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='3' id='r2' />
            <Label htmlFor='r2'>
              <div className='flex'>
                <Star />
                <Star />
                <Star />
              </div>
            </Label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='2' id='r2' />
            <Label htmlFor='r2'>
              <div className='flex'>
                <Star />

                <Star />
              </div>
            </Label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='1' id='r2' />
            <Label htmlFor='r2'>
              <div className='flex'>
                <Star />
              </div>
            </Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}
