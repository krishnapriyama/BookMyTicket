import axios from "axios";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

import userAxios from '../../../confic/axiosUser'

const colors = {
   orange: "#FFBA5A",
   grey: "#a9a9a9"

};


const Rate = (props) => {
   const token = localStorage.getItem('userToken')
   const [ratings, setratings] = useState([]);
   const [ratingvalue, setRatingvalue] = useState([]);
   const [hoverValue, setHoverValue] = useState(undefined);
   const [currentValue, setCurrentValue] = useState(0);
   const stars = Array(5).fill(0)

   useEffect(() => {
      userAxios.get('/star-ratingvalue', {
         params: {
            movieName: props.moviename,
         }
      }).then((resp) => {
         setRatingvalue(resp.data)
         setCurrentValue(resp.data.user.ratings[0].value)
      }).catch((err) => {
         console.log(err);
      });
   }, []);

   const handleClick = (value, moviename) => {
      setCurrentValue(value)
      userAxios.post('/update-rate', { rating: value, moviename: moviename }, {
         
      })
         .then(response => {
            setratings(response.data.ratings)
         })
         .catch(error => {
            console.log(error);
         });
   }

   const handleMouseOver = newHoverValue => {
      setHoverValue(newHoverValue)
   };

   const handleMouseLeave = () => {
      setHoverValue(undefined)
   }


   return (
      <div style={styles.container}>
         <div style={styles.stars}>
            {stars.map((_, index) => {
               return (
                  <FaStar
                     key={index}
                     size={24}
                     onClick={() => handleClick(index + 1, props.moviename)}
                     onMouseOver={() => handleMouseOver(index + 1)}
                     onMouseLeave={handleMouseLeave}
                     color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                     style={{
                        marginRight: 10,
                        cursor: "pointer"
                     }}
                  />
               )
            })}
         </div>

      </div>
   );
};


const styles = {
   container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: 10
   },
   stars: {
      display: "flex",
      flexDirection: "row",
   },
   textarea: {
      border: "1px solid #a9a9a9",
      borderRadius: 5,
      padding: 10,
      margin: "20px 0",
      minHeight: 100,
      width: 300
   },
   button: {
      border: "1px solid #a9a9a9",
      borderRadius: 5,
      width: 300,
      padding: 10,
   }

};

export default Rate;