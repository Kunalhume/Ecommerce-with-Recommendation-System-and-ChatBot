import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  incrementAsync,
  
} from './counterSlice';

export default function Order() {
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        {/* We will use to show orders on Admin Page */}
      </div>
    </div>
  );
}
