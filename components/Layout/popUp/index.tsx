import React from 'react';
import Popup from 'reactjs-popup';
import { FC } from 'react'; 
import { Form } from '../MsgForm/index'

export const PopUp: FC = () => {
  return(
    <Popup trigger={<button> Questions</button>} >
      <div> <Form /> </div>
    </Popup>)
  };


