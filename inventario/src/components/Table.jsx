import React from 'react'
import '../components/styles.css'

const Table = () => {
  return (
    <>
    <h1>INVENTARIO</h1>
<div className='alinear'>
<div className="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
  <label htmlFor="floatingInput">Buscar</label>
</div>
<br />
<br />


 <table className="table ">
  <thead>
    <tr className='table-dark'>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">No.Parte</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Precios</th>
      <th scope="col" className='uii'></th>
    </tr>
  </thead>
  <tbody>
    <tr >
      <th className="alena-btn" scope="row">1</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td className='btn-2'> 
         <button type="button" class="btn btn-outline-primary">ver</button>
            <button id='btn1' type="button" class="btn btn-outline-success">Ventas</button>
      </td>

    </tr>

  </tbody>
</table>

</div>
 
    </>
    
  )
}

export default Table
