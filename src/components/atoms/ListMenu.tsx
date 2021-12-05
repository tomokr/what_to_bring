import React from 'react';

interface Props {
    listName: string;
    listId: number;
    onClick?: any;
    className?: string;
}

const ListMenu : React.FC<Props> = ({
    listName,
    listId,
    onClick,
    className,
    ...props
  }: Props) => {
    const link = "/list/"+listId+"/"+listName;
    return (
    <>
        <a href={link} onClick={onClick} className={className}>{listName}</a><br />
    </>
    );

};

export default ListMenu;