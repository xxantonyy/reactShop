import { useState, useEffect } from "react"
import { API_KEY, API_URL } from '../config'
import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { Basketlist } from "./BasketList";
import { Alert } from "./Alert";


export function Shop() {

   const [goods, setGoods] = useState([]);
   const [loading, setLoading] = useState(true)
   const [order, setOrder] = useState([])
   const [isBasketShow, setBasketShow] = useState(false)
   const [alertName,setAlertName] = useState('')


   const handleBuy = (id, name, price) => {
      const findItemCart = order.findIndex(orderItem => orderItem.id === id);
      if (findItemCart === -1) {
         const newOrder = { id: id, name: name, price: price, quantity: 1 }
         setOrder([...order, newOrder]);
      } else {
         const updatedOrder = order.map((orderItem, index) => {
            if (findItemCart === index) {
               return {
                  ...orderItem,
                  quantity: orderItem.quantity + 1
               }
            } else {
               return orderItem;
            }
         });
         setOrder(updatedOrder);
      }
      setAlertName(name);
   };

   const handleBasketShow = () => {
      setBasketShow(!isBasketShow)
   }

   const basketDeleteItem = (id) => {
      const newOrder = order.filter(el => el.id !== id);
      setOrder(newOrder)
   }

   const basketPlusMinus = (bolian, id)=>{
      if (bolian) {
         const newOrder = order.map((item)=>{
            if(item.id === id) return {
               ...item,
               quantity: item.quantity + 1
            }
            else {
               return item
            } 
         });
         setOrder(newOrder);
      };
      if (!bolian) {
         const newOrder = order.map((item)=>{
           if(item.id === id) {
             if (item.quantity <= 1) {
               basketDeleteItem(item.id);
               return null;
             } else {
               return {
                 ...item,
                 quantity: item.quantity - 1
               };
             }
           } else {
             return item;
           } 
         }).filter((item) => item !== null);
         setOrder(newOrder);
       }
   };

   const handleCloseAlert = () =>{
      setAlertName('');
   }

   useEffect(() => {
      fetch(API_URL, {
         headers: {
            "Authorization": `${API_KEY}`,
         }
      })
         .then(response => response.json())
         .then(data => {
            data.featured && setGoods(data.featured);
            setLoading(false);
         })
   }, []);


   return <main className="container content">
      <Cart quantity={order} handleBasketShow={handleBasketShow} />
      {loading ? <Preloader /> : <GoodsList goods={goods} handleBuy={handleBuy} />}
      {isBasketShow && <Basketlist order={order} handleBasketShow={handleBasketShow} basketDeleteItem={basketDeleteItem} basketPlusMinus={basketPlusMinus} />}
      {
         alertName && <Alert name={alertName} handleCloseAlert={handleCloseAlert}/>
      }
   </main>
}
