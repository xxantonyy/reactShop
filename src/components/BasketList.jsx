import { BasketItem } from "./BasketItem"

export function Basketlist(props) {
   const { order = [],
      handleBasketShow = Function.prototype,
      basketDeleteItem = Function.prototype,
      basketPlusMinus = Function.prototype,
   } = props

   const totalPrice = order.reduce((summ, element) => {
      return summ + (element.price * element.quantity)
   }, 0);

   return <ul className="collection basket__list">
      <li className="collection-item active green draken-3">Корзина</li>
      {
         order.length ? order.map((item) => (
            <BasketItem
               key={item.id}
               basketDeleteItem={basketDeleteItem}
               basketPlusMinus={basketPlusMinus}
               {...item} />
         )) : <li className="collection-item">Корзина Пустая</li>
      }
      <li className="collection-item active green draken-3">Общая стоимость =  {totalPrice} Рублей
         <button className="btn-small green darken-1">Оформить</button>
      </li>

      <i className="material-icons basketList__close" onClick={handleBasketShow}>close</i>
   </ul>
}