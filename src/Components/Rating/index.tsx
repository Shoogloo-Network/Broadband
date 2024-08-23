import styles from './Rating.module.scss';

import { BsStarFill, BsStarHalf,BsStar } from "react-icons/bs";
const RatingGenrate = ({rating}:any)=>{
    const ratingNumber = rating || 0
    const fullStars = Math.floor(ratingNumber);
    const hasHalfStar = ratingNumber % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    return(
        <div className={styles.rating}>
            <span className={styles.ratingTxt}>{rating}</span>
            {Array.from({ length: fullStars }, (_, index) => (
                <span key={index} className={styles.star}><BsStarFill /></span>
            ))}
            {hasHalfStar && <span className={styles.starHalf}><BsStarHalf /></span>}
            {Array.from({ length: emptyStars }, (_, index) => (
                <span key={index} className={styles.starEmpty}><BsStar /></span>
            ))}
        </div>
    )
}

export default RatingGenrate;