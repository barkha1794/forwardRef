export const HeaderComponent = ({ primaryRef }) => {
  return (
    <header className="header">
      <button
        onClick={() => {
          primaryRef.current.focus();
        }}
      >
        Prev
      </button>
      <button>Next</button>
    </header>
  );
};
