export type SessionItemProps = {
  id: string;
  title: string;
  summary: string;
  image: string;
};

export function SessionItem({ id, title, summary, image }: SessionItemProps) {
  return (
    <article className={"session-item"}>
      <img src={`${image}`} alt={title} />
      <div className={"session-data"}>
        <h2>{title}</h2>
        <p>{summary}</p>
        <button>Learn more</button>
      </div>
    </article>
  );
}
