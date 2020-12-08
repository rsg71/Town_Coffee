import React from "react"
import "./CoffeeBanner.css"

function CoffeeBanner() {
    return(
        <>
          <img src={process.env.PUBLIC_URL+"/imgs/coffee_white.jpg"} className="coffeeJumbotron" alt="coffee background" />

        </>
    )
}

export default CoffeeBanner;