import { useState } from 'react';
import { SearchBar } from './SearchBar';
import { StringList } from './StringList';
type Props = {
  list: string[];
};

export function SearchableList({ list }: Props) {
  const [input, setInput] = useState('');
  return (
    <div className="flex flex-col mt-5 ml-4">
      <SearchBar input={input} setInput={setInput} />
      <StringList list={list} input={input} />
    </div>
  );
}
