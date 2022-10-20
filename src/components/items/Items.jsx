import TotalItems from "./TotalItems";
import ItemsList from "./ItemsList";
import ItemAdd from "./ItemAdd";
import HoursToSentence from "../../helpers/HoursToSentence";
import { useState } from "react";

const Items = () => {
  const [itemsList, updateItemsList] = useState([]);
  const [itemsSummary, updateItemsSummary] = useState([
    {
      totalItems: 0,
      totalPrice: 0,
      totalPurchasingPower: 0,
      workTotal: 0,
    },
  ]);

  const updateItemsListHandler = (newItem) => {
    updateItemsList((prevState) => [newItem, ...prevState]);
    updateItemsSummary((prevState) => {
      let prev = prevState[0];
      let total = prev.totalItems + 1;
      let totalPrice = parseFloat(prev.totalPrice) + parseFloat(newItem.price);
      let minWage = 1210;
      let hoursMonth = 200;
      let totalHours = totalPrice / (minWage / hoursMonth);
      return [
        {
          totalItems: total,
          totalPrice: totalPrice,
          totalPurchasingPower: (totalPrice / 1210) * 100,
          workTotal: HoursToSentence(totalHours),
          workTotalHours: totalHours,
        },
      ];
    });
  };

  return (
    <div>
      <ItemAdd addItem={updateItemsListHandler} />
      <ItemsList items={itemsList} />
      <TotalItems items={itemsSummary} />
    </div>
  );
};

export default Items;
