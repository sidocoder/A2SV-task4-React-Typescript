interface TodotextProps {
  text: string;
  completed: boolean;
}

function Todotext({ text, completed }: TodotextProps) {
  return (
    <span
      style={{
        textDecoration: completed ? 'line-through' : 'none',
        color: completed ? '#bbbbbb' : 'white', // light gray if completed, white otherwise
        opacity: completed ? 0.6 : 1,
        fontSize: '1.1rem',
        fontWeight: 500,
      }}
    >
      {text}
    </span>
  );
}

export default Todotext;
