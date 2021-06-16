import React, { useEffect, useState } from 'react';
import db from '../firebase';
import "./PlanScreen.css";
function PlanScreen() {
    const plans=["Premium","Basic","Standard"];
    
   /* const [products,setProducts]=useState([]);
    useEffect(()=>{
        db.collection("products").where("active","==",true)
        .get().then(querySnapshot=>{
            const products={};
            querySnapshot.forEach(async productDoc=>{
                products[productDoc.id]=productDoc.data();
                const priceSnap=await productDoc.ref.collection("prices").get(); 
                priceSnap.docs.forEach(price=>{
                    products[productDoc.id].prices={
                        priceId:price.id,
                        priceData:price.data()
                    }

                })
            });
            setProducts(products);
        });
    },[])
    */
  
    return( 
        
        <div className="planScreen">
        {
            plans.map((name,index)=>{
            return(
               
                        <div className="planScreen__plan">
                        <div className="planScreen__info">
                        
                            <h5>{name}</h5>
                            
                        </div>

                        <buttton className="planScreen__btn">
                            Subscribe
                        </buttton>
                        </div>
            );
            })
        }
            
                    
                
            
        </div>
        
    );
  
}

export default PlanScreen
