import { useEffect } from "react"

export function Alert (props) {

   const {name ='', handleCloseAlert=Function.prototype} = props

   useEffect(()=>{
      const timerid = setTimeout(handleCloseAlert,3000);
      
      return () =>{
         clearTimeout(timerid);
      }
   // eslint-disable-next-line
   },[name])

   return ( 
      <div id="toast-container">
         <div className="toast green draken-3">{name} Добавлен в корзину</div>
      </div>
   );
}