/**
 * Renders a star rating element.
 */
import { useMemo } from 'react';
import "../styles/StarRating.css";

interface StarRatingProps {
  numStars: number;
}

const TOTAL_POSSIBLE_STARS = 5;

const StarRating: React.FC<StarRatingProps> = ({ numStars }: StarRatingProps) => {
  
  // Ensures range of 0 to 5
  const clampedNumStars = Math.min(Math.max(0, numStars), TOTAL_POSSIBLE_STARS);

  // Constructs JSX to fill stars based on rating
  const stars = useMemo(() => {
    const starsArray: JSX.Element[] = [];
    for (let i = 0; i < TOTAL_POSSIBLE_STARS; i++) {
      const starClass = i < clampedNumStars ? "star-filled" : "star";
      starsArray.push(<div key={i} className={starClass}></div>);
    }
    return starsArray;
  }, [clampedNumStars]);

  return <div className="station-rating">{stars}</div>;
};

export default StarRating;
