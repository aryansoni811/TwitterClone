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
