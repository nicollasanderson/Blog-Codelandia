import { useState } from "react";
import { MainDivCard } from "./style";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const PostCard = ({ date, title, description }) => {
  const [buttonClick, setButtonClick] = useState(false);
  const onButtonClick = () => {
    setButtonClick(!buttonClick);
  };

  return (
    <MainDivCard>
      <div className="date_heart__line">
        <h2>{date}</h2>
        {buttonClick === true ? (
          <button onClick={onButtonClick}>
            <FaHeart />
          </button>
        ) : (
          <button>
            <FaRegHeart onClick={onButtonClick} />
          </button>
        )}
      </div>
      <h1>{title}</h1>
      <p>{description}</p>
    </MainDivCard>
  );
};

export default PostCard;
