/**
 * Renders a star rating element.
 */
import {useMemo} from 'react'
import "../styles/StarRating.css"

const TOTAL_POSSIBLE_STARS = 5;

interface StarRatingProps {
  numStars: number;
}

const StarRating = ({ numStars }: StarRatingProps) => {

  //ensures range of 0 to 5
  const clampedNumStars = Math.min(Math.max(0, numStars), TOTAL_POSSIBLE_STARS);

  //constructs a JSX to fill stars based on rating
  const stars = useMemo(() => {
    const starsArray = []
    for (let i= 0; i < TOTAL_POSSIBLE_STARS; i++) {
      const starClass = i < clampedNumStars ? "star-filled" : "star";
      starsArray.push(<div key={i} className={starClass}></div>)
    }
    return starsArray
  }, [clampedNumStars])
  


  return <div className="station-rating">{stars}</div>;
};

export default StarRating;
