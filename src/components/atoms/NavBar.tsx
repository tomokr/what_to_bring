import React from 'react';

function NavBar(){
    return (
    <>
<div className='navbar'>
<ul>
  <li><a className="active" href="/">Home</a></li>
  <li><a href="/listPage">list</a></li>
  <li><a href="/about">About</a></li>
  {/* <li><a href="#contact">Contact</a></li> */}
</ul>
</div>
</>
)
};


export default NavBar;