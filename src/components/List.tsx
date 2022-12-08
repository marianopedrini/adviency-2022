import list from '../data/list.js';
import { DeleteButton } from './DeleteButton.js';
import { Input } from './Input.js';
import { ListItem } from './ListItem';

type Props = {
  children: any;
};

const List = () => {
  return (
    <div className='list-container'>
      <h1>Listado</h1>
      <Input />
      <ul>
        {list.map((item, i) => (
          <ListItem key={i} item={item} />
        ))}
      </ul>
      <DeleteButton />
    </div>
  );
};
export default List;
