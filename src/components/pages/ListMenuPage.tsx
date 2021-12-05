import React, { useState } from 'react';
import ListMenu from '../atoms/ListMenu';

function ListMenuPage(){
    const listItems = [
        'list1',
        'list2',
        'list3'
      ]
      const [, setTitle] = useState<string>('default');
      const menuClicked = (event: React.MouseEvent<HTMLElement>) => {
        setTitle(event.currentTarget.className);
      }
    return (<>{
      listItems.map((list, idx)=>
        <li>
          <ListMenu listName={list} listId={idx+1} onClick={menuClicked} className={list} />
        </li>
      )
    }</>
    )};

export default ListMenuPage;