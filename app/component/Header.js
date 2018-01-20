import React, { Component } from 'react';
import emoji from 'react-easy-emoji';

export const Header = (props) => {
  return(
    <div className='col-12'>
      <h1 className='text-center'>{emoji("Conway's Game of Life ❤️ ")}</h1> 
    </div>
  );
};