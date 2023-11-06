export default function Buttons(props) {
  const base =
    "px-6 py-2 rounded-full font-bold items-center disabled:opacity-50 disabled:pointer-events-none";

  const variant = {
    blue: "text-neutral-50 bg-twitter-blue hover:bg-twitter-blue-2",
    white: " text-neutral-1000 bg-neutral-50 hover:bg-neutral-200",
    outline:
      "text-twitter-blue bg-neutral-1000 hover:bg-neutral-900 border-blue-wash border-2",
  };
  const sizes = {
    sm: "",
    md: "w-20",
    lg: "w-full",
  };

  const classes = `${base} ${variant[props.variant]} ${sizes[props.size]}`;
  console.log("disabled ", props.disabled);
  return (
    <button className={classes} disabled={props.disabled}>
      {props.text}
    </button>
  );
}
