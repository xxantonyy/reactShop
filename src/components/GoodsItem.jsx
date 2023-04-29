export function GoodsItem (props) {
   const {
      id,
      name,
      description,
      price,
      full_background,
      handleBuy,
   }=props;

   return  <div className="card" id={id}>
   <div className="card-image waves-effect waves-block waves-light">
     <img src={full_background} alt={name} />
   </div>
   <div className="card-content">
     <span className="card__use card-title activator grey-text text-darken-4">{name}</span>
     <span className="span_descr">{description}</span>
     
   </div>
   <div className="card-action">
      <button className="btn green" onClick={()=>handleBuy(id,name,price)}>Купить</button> 
      <p className="right">{price} Рублей</p>
   </div>
 </div>
}


