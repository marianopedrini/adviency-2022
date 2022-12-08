type Props = {
  item: string;
};

export const ListItem = ({ item }: Props) => {
  return <li className="list-item"><p>{item}</p> <span>X</span></li>;
};
