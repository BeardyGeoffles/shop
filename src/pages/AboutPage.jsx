import React from "react";
import Card from "../components/Card";
import ItemsData from "../itemsData.json"


export default function AboutPage() {
    return (
        <div className="shopPage">
            <h2>Our Plants</h2>
            <div className="shop-grid">
                {ItemsData.map((item)=>(
                <Card
                id = {item.id}
                imageUrl = {item.imageUrl}
                name = {item.name}
                price = {item.price}
                />
                ))}

            </div>
        </div>

        
    )
}