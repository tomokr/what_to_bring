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
      listItems.map((list)=>
        <li>
          <ListMenu listName={list} onClick={menuClicked} className={list} />
        </li>
      )
    }</>
    )};

export default ListMenuPage;