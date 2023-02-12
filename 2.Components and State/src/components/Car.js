import { useState } from "react"

export const Car = (props) => {

const [brand, setBrand] = useState(props.brand);
const [year, setYear] = useState(props.year);
const [color, setColor] = useState(props.color);


return(

  <li>My car is {brand}. Year: {year}. Color: {color}</li>
)

}