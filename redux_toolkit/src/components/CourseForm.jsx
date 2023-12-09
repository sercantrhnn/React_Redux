import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeName,changeDescription, changeCost} from '../store/silces/formSlice';
import { addCourse } from '../store/silces/CourseSlice';

function CourseForm() {
  const dispatch = useDispatch();  //usedispatch ile inputlardaki değişiklik algılanır. formsliceda atama yapılır.
  const { name, description, cost } = useSelector((state) => {
    return {                                          //formslice değerlerine burdan erişim sağlanır.
      name: state.form.name,    
      description: state.form.description,
      cost: state.form.cost,
    };
  });
  //console.log(name, description, cost);

  const handleSubmit = (e)=>{
    e.preventDefault()
    dispatch(addCourse({name, description, cost}))  //coursesliceda obje olarak ayarlandı.
  }

  return (
    <div className="courseForm panel">
      <h4 className="subtitle is-3">Kurs Ekle</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Ad</label>
            <input className="input is-expanded" onChange={(e)=>{dispatch(changeName(e.target.value))}} value={name}/>
          </div>
          <div className="field">
            <label className="label">Açıklama</label>
            <textarea className="input is-expanded" onChange={(e)=>{dispatch(changeDescription(e.target.value))}} value={description} />
          </div>
          <div className="field">
            <label className="label">Fiyat</label>
            <input className="input is-expanded" type="number" onChange={(e)=>{dispatch(changeCost(parseInt(e.target.value)))}} value={cost}/>
          </div>
        </div>
        <div className="field">
          <button className="button is-primary">Kaydet</button>
        </div>
      </form>
    </div>
  );
}

export default CourseForm;
