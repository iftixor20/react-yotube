import CenterTop from "./Top/top";
import CenterDollie from "./Dolli/Dolli";
import CenterRecommended from "./Recomendent/recomendent";
import FoodAndDrink from "./Food-drink/food-drink";


const Center = () => {
  return (
    <div className="center p-3">
      <div className="row">
        <div className="col-12">{<CenterTop />}</div>
      </div>

      <div className="row">
        <div className="col-12">{<CenterDollie />}</div>
      </div>
      <div className="row">
        <div className="col-12">{<CenterRecommended />}</div>
      </div>
      <div className="row">
        <div className="col-12">{<FoodAndDrink />}</div>
      </div>
    </div>
  );
}

export default Center;
