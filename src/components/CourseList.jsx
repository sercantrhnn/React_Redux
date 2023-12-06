import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import CourseItems from './CourseItems';
import { clearCard } from '../control/cardSlice';
function CourseList() {
    const dispatch = useDispatch();
    const { cardItems,quantity,total } = useSelector((store) => store.card);
  return (
    <>
        {
            quantity < 1 ? (
                <section className="cart">
                    <header>
                        <h3>Sepetim</h3>
                        <p>Boş</p>
                    </header>
                </section>
            ):(
                <section className="cart">
                    <header>
                        <h2>Sepetim</h2>
                    </header>
                    <div>
                        {cardItems.map((item)=> {
                            return <CourseItems key={item.id} {...item}/>
                        })}
                    </div>
                    <footer>
                        <hr />
                        <div>
                            <h4>Toplam Tutar <span>{total}TL</span></h4>
                        </div>
                        <button className="cartClearButton" onClick={()=>dispatch(clearCard())}>Temizle</button>
                    </footer>
                </section>
            )
        }
    </>
  )
}

export default CourseList