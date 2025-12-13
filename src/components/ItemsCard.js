import {RES_LOGO} from "../utils/constants"
const ItemsCard=({items,dummy})=>{
    console.log(dummy);
 return(
items.map((item)=>{
    return(
    <div key={item.card.info.id} className="py-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"> 
    <div className="w-9/12">
    <div className="py-2">
     <span>{item?.card?.info?.name}</span>
      <span> -₹{item.card.info.price? item.card.info.price/100  :item.card.info.defaultPrice}</span>
      </div>
     <p className="text-xs">{item.card.info.description}</p>
     </div>
     <div className="p-4 w-3/12">
     <div className="absolute">
        <button className="p-2 mx-16 bg-black text-white rounded-lg shadow-lg">
            Add +
        </button>
     </div>
     <img src={RES_LOGO+item.card.info.imageId} className="w-full"/>
     </div>
     </div>)
}
 )

 )
}
export default  ItemsCard;