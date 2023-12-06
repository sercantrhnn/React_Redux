import React from 'react'
import { BsChevronUp, BsChevronDown } from 'react-icons/bs'
import { removeItem,increase,decrease } from '../control/cardSlice'
import {useDispatch } from 'react-redux';

function CourseItems({id,title,price,img,quantity}) {
    const dispatch = useDispatch();
  return (
    <>
        <div className="cartItem">
            <img src={img} alt="" />
            <div className="cartInfo">
                <h4>{title}</h4>
                <h4>{price}TL</h4>
                <div>
                    <button className="cartQuantityButton" onClick={()=> dispatch(increase(id))}>
                        <BsChevronUp/>
                    </button >
                    <p>{quantity}</p>
                    <button className="cartQuantityButton" onClick={()=> dispatch(decrease(id))}>
                        <BsChevronDown/>
                    </button>
                </div>
                <button  className="cartDeleteButtton" onClick={()=>dispatch(removeItem(id))}>
                Sil
            </button>
            </div>
            
        </div>
    </>
  )
}

export default CourseItems