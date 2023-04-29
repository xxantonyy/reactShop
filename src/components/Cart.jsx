export function Cart (props) {
   const {quantity = [], handleBasketShow = Function.prototype} = props


   return <div className="cart blue darken-3 white-text" onClick={handleBasketShow}>
      <i className="material-icons">shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity.length}</span> : null}
   </div>
}