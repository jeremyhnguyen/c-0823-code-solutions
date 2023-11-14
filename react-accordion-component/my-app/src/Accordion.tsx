import { useState } from 'react';

type Topic = {
  id: number;
  title: string;
  content: string;
};

type AccordionProps = {
  topics: Topic[];
};

export function Accordion({ topics }: AccordionProps) {
  const [active, setActive] = useState<Topic>();

  function handleClick(clicked: Topic) {
    if (clicked === active) {
      setActive(undefined);
    } else {
      setActive(clicked);
    }
  }
  return (
    <div className="m-20">
      {topics.map((topic) => (
        <Topic topic={topic} view={active === topic} onClick={handleClick} />
      ))}
    </div>
  );
}

type TopicProps = {
  topic: Topic;
  view: boolean;
  onClick: (topic: Topic) => void;
};

function Topic({ topic, view, onClick }: TopicProps) {
  return (
    <div className="border-black border-2">
      <div
        onClick={() => onClick(topic)}
        className="p-1.5 bg-zinc-300 text-3xl">
        {topic.title}
      </div>
      {view ? (
        <div className="p-1.5 text-med">{topic.content}</div>
      ) : (
        <div className="hidden">{topic.content}</div>
      )}
    </div>
  );
}
