export function BasketItem (props) {
   const {
      id,
      name,
      price,
      quantity,
      basketDeleteItem = Function.prototype,
      basketPlusMinus = Function.prototype
   } = props;


   return (
      <li className="collection-item">
         {name} - {price} x {quantity} = {price * quantity} <i className="material-icons btn__plus-plus" onClick={()=> basketPlusMinus(true,id)}>exposure_plus_1</i> <i className="material-icons btn__plus-minus" onClick={()=> basketPlusMinus(false,id)}>exposure_neg_1</i>
         <span className="secondary-content" onClick={()=> basketDeleteItem(id)}>
            <i className="material-icons basketItem__delete" >close</i>
         </span>
      </li>
   )
}