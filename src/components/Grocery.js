import { Suspense } from "react";
import { useLoaderData,Await } from "react-router-dom";
const Grocery=()=>{
    const data=useLoaderData();
    const {critical,itemPromise}=data;
    return(
        <div className="grocery-page">
            <h2>{critical}</h2>
        <Suspense fallback={<div>Loading..grocery</div>}>
            <Await resolve={itemPromise} errorElement={<div>error while laoding data</div>}>
    
                {(items) => (
                        <>
                            <h3>Available Items:</h3>
                            <ul>
                                {items.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </>
                    )}
           
            </Await>
        </Suspense>
        </div>
    );
}
export default Grocery;