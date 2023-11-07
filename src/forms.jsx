export function SimpleForm(props) {
  return (
    <div className="group w-full rounded border border-solid border-neutral-500 caret-twitter-blue focus-within:border-twitter-blue">
      <legend className="absolute -mt-2 ml-3 bg-black px-1 text-xs text-neutral-500 group-focus-within:text-twitter-blue">
        {props.title}
      </legend>
      <div className="flex justify-between px-2 py-3">
        <input
          className="w-full bg-transparent focus:outline-none"
          type={props.type}
          name={props.title}
          id={props.title}
          placeholder={`Enter your ${props.title}`}
        />
        <img
          className="hidden text-end group-focus-within:inline"
          src="../public/images/correct.svg"
          alt="correct"
          width={20}
        />
      </div>
    </div>
  );
}
