import { useState } from "react"





const allToppings = [
{ name: "Скругление углов", checked: false,   cost: 200,  info: "Скругление 4-х углов изделия" },
{ name: "УФ печать", checked: false, cost: 100,  info: "Листовая печать, не рулонная. УФ печать белой краской, лаком и cmyk, максимальный размер печати 600х900мм " },
  // { name: "Golden Corn", checked: false },
  // { name: "Paneer", checked: false },
  // { name: "Tomato", checked: false },
  // { name: "Mushroom", checked: false },
  // { name: "Onion", checked: false },
  // { name: "Black Olives", checked: false },
]



export const Checkbox = ({ isChecked, label, checkHandler, index }) => {
  return (
    <div>
      <input
        type="checkbox"
        id={`checkbox-${index}`}
        checked={isChecked}
        onChange={checkHandler}
      />
      <label htmlFor={`checkbox-${index}`}>{label}</label>
    </div>
  )
}

function AddCheckbox() {
  const [toppings, setToppings] = useState(allToppings)
  toppings.map((toping)=> {console.log( toping.name, toping.checked, toping.cost, toping.info)});

  const updateCheckStatus = index => {
    setToppings(
      toppings.map((topping, currentIndex) =>
        currentIndex === index
          ? { ...topping, checked: !topping.checked }
          : topping
      )
    )

  }

  return (
    <div className="">
      {toppings.map((topping, index) => (
        <Checkbox
          key={topping.name}
          isChecked={topping.checked}
          checkHandler={() => updateCheckStatus(index)}
          label={topping.name}
          index={index}
        />
      ))}
      <p>

      </p>
    </div>
  )
}

export default AddCheckbox