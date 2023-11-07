//Base for all pages
export function Base({ children }) {
  return (
    <>
      <div className="font-inter bg-neutral-1000 text-neutral-50 h-screen ">
        {children}
      </div>
    </>
  );
}

export function StepHeader(props) {
  return (
    <>
      <header className="flex items-center gap-5 py-3">
        <a href="../src/index.html">
          {/*Links to be added */}
          <button>
            <img src="./images/cancel.svg" alt="cancel" />
          </button>
        </a>
        <h4 className="text-sm2 font-bold">Step {props.num} of 4</h4>
      </header>
      <h3 className="pb-2 text-2xl font-bold">{props.title}</h3>
    </>
  );
}
