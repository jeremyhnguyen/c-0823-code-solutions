type Props = {
  list: string[];
  input: string;
};
export function StringList({ list, input }: Props) {
  const filteredSearch = list.filter((quotes) =>
    quotes.toLowerCase().includes(input.toLowerCase())
  );
  const searchList = filteredSearch.map((quotes, i) => (
    <li key={i}>{quotes}</li>
  ));
  return (
    <ul className="list-disc text-sm">
      {filteredSearch.length > 0 ? (
        searchList
      ) : (
        <li>No items match the filter.</li>
      )}
    </ul>
  );
}
