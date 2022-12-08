type Props = {
  onSubmit: (message: string) => void;
};

export const Input = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input className="add-input" type="text" placeholder="Agregar regalo..." />
      <button className="add-btn" type="submit">
        Agregar
      </button>
    </form>
  );
};
