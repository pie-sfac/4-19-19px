import { useState } from "react";

const CommentSection = () => {
  const [starPoint, setStarPoint] = useState<number>(0);
  const [review, setReview] = useState<string>("");

  const onChangeReview = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { value },
    } = event;
    setReview(value);
  };

  const onClickStarPoint = (point: number) => {
    setStarPoint(point);
  };
  return (
    <section>
      <div>만족도 및 후기</div>
      <div>
        <form>
          <div>
            <label htmlFor="star1">{starPoint > 0 ? "★" : "☆"}</label>
            <input
              type="radio"
              id="star1"
              onClick={() => onClickStarPoint(1)}
            />
            <label htmlFor="star2">{starPoint > 1 ? "★" : "☆"}</label>
            <input
              type="radio"
              id="star2"
              onClick={() => onClickStarPoint(2)}
            />
            <label htmlFor="star3">{starPoint > 2 ? "★" : "☆"}</label>
            <input
              type="radio"
              id="star3"
              onClick={() => onClickStarPoint(3)}
            />
            <label htmlFor="star4">{starPoint > 3 ? "★" : "☆"}</label>
            <input
              type="radio"
              id="star4"
              onClick={() => onClickStarPoint(4)}
            />
            <label htmlFor="star5">{starPoint > 4 ? "★" : "☆"}</label>
            <input
              type="radio"
              id="star5"
              onClick={() => onClickStarPoint(5)}
            />
          </div>
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            onChange={onChangeReview}
          ></textarea>
          <span>{review.length}/800자</span>
          <input type="submit" value={"만족도 및 후기 발송"} />
        </form>
      </div>
    </section>
  );
};

export default CommentSection;
