interface PropType {
  date: string;
  condition: string;
}

const Condition = ({ date, condition }: PropType) => {
  return (
    <li>
      <div>
        <span>{condition}</span>
        <span>{date}</span>
      </div>
    </li>
  );
};

export default Condition;
