
import ItemsCard from "./ItemsCard"
const RestaurantCategory=({data,showItem,setshowItem,dummy})=>{
  const hadleClick=()=>{
setshowItem();
  }
    return(
       <div>
    <div className="w-6/12 mx-auto bg-gray-50 shadow-lg my-2 p-4 ">
    <div className="flex justify-between cursor-pointer" onClick={hadleClick}>
       <span className="text-black text-lg">{data.card.card.title}({data?.card?.card?.itemCards?.length})</span>
        <span > ⬇️</span>
      </div>
    {showItem&&<ItemsCard  items={data?.card?.card?.itemCards} className="text-center" dummy={dummy}/>}
    </div>
    </div>

    );
}
export default RestaurantCategory;