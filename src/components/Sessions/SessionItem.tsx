import Button from "../UI/Button.tsx";

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
        <Button to={id}>Learn more</Button>
      </div>
    </article>
  );
}
