import React from 'react';

interface Props {
    listName: string;
    onClick?: any;
    className?: string;
}

const ListMenu : React.FC<Props> = ({
    listName,
    onClick,
    className,
    ...props
  }: Props) => {
    return (
    <>
        <a href="/listPage" onClick={onClick} className={className}>{listName}</a><br />
    </>
    );

};

export default ListMenu;