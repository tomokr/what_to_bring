import React from 'react';

interface Props {
    onClick?: any;
    className?: string;
}

const FavButton : React.FC<Props> = ({
    onClick,
    className,
    ...props
  }: Props) => {
    return (
    <>
        <a href="#" onClick={onClick} className={className}>Fav</a><br />
    </>
    );

};

export default FavButton;