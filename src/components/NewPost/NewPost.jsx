import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useState } from 'react';
import './NewPost.scss';

const NewPost = () => {
    const [clicked, setClicked] = useState([false, false, false, false, false]);
    
    const handleStarClick = (e, index) => {
      e.preventDefault();
      let clickStates = [...clicked];
      for (let i = 0; i < 5; i++) {
        if (i <= index) clickStates[i] = true;
        else clickStates[i] = false;
      }
  
      setClicked(clickStates);
    };
    
    return(
     <div className={'rating'}>
    
      <div>
        <FaStar
          onClick={(e) => handleStarClick(e, 0)}
          className={clicked[0] ? 'clickedstar' : null}
        />
        <FaStar
          onClick={(e) => handleStarClick(e, 1)}
          className={clicked[1] ? 'clickedstar' : null}
        />
        <FaStar
          onClick={(e) => handleStarClick(e, 2)}
          className={clicked[2] ? 'clickedstar' : null}
        />
        <FaStar
          onClick={(e) => handleStarClick(e, 3)}
          className={clicked[3] ? 'clickedstar' : null}
        />
        <FaStar
          onClick={(e) => handleStarClick(e, 4)}
          className={clicked[4] ? 'clickedstar' : null}
        />
      </div>
    </div> 
    );
};

export default NewPost;