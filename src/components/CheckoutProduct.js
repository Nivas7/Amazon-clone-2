import { Star } from "heroicons-react";
import Image from "next/image";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

const CheckoutProduct = ({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,
}) => {
  const dispatch = useDispatch();

  const addItemtoBasket = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime,
    };
    // Push item to basket
    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="grid grid-cols-5 ">
      <Image
        className=""
        src={image}
        height={200}
        width={200}
        objectFit="contain"
      />
      {/* Middle */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <Star key={i} className="h-5 text-yellow-500" />
            ))}
        </div>

        <p className="text-xs my-2 line-clamp-3 ">{description}</p>
        <Currency currency="GBP" quantity={price} />

        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              className="w-12"
              loading="lazy"
              src="https://links.papareact.com/fdw"
            />
            <p className=" text-xs text-gray-500 ">Free Next Day Deleivery</p>
          </div>
        )}
      </div>
      {/* Right add and remove buttons */}
      <div className="flex flex-col space-y-2 my-auto justify-end">
        <button className="button" onClick={addItemtoBasket}>
          Add More to Basket
        </button>
        <button className="button" onClick={removeItemFromBasket}>
          Remove from basket{" "}
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;