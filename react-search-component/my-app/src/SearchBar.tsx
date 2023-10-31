import { FaMagnifyingGlass } from 'react-icons/fa6';
type Props = {
  input: string;
  setInput: (input: string) => void;
};

export function SearchBar({ input, setInput }: Props) {
  return (
    <div className="rounded-lg border-2 flex gap-1 items-center max-w-xs">
      <FaMagnifyingGlass />
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="search"
        className="text-sm w-80"></input>
    </div>
  );
}
