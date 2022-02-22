import React from 'react'
import { useState } from 'react';
import {RiShareLine, RiWhatsappLine, RiInstagramLine, RiTwitterLine, RiFacebookCircleFill, RiLinkedinBoxFill} from 'react-icons/ri';
import './SocialMedia.scss';

const SocialMedia = () => {
    const [isShareOptionsVisible, setShareOptionsVisibility] = useState(false); 
    
    const toggleShareOptionsVisibility = () => {
        setShareOptionsVisibility(!isShareOptionsVisible);
    };
      
    return (
        <div className="container__media">
            <button className={"share__btn " + (isShareOptionsVisible ? " active" : "")}>
                <RiShareLine onClick={toggleShareOptionsVisibility} />
            </button>
            <div className={"share__options" + (isShareOptionsVisible ? " active" : "")}>
                <p className="title">share</p>
                <div className="social__media">
                    <button className="social__media__btn">
                        <a target="_blank" href="https://wa.me/">
                        <RiWhatsappLine /> 
                        </a>   
                    </button> 
                    <button className="social__media__btn">
                        <a target="_blank" href="https://www.instagram.com/">
                        <RiInstagramLine />
                        </a>
                    </button>
                    <button className="social__media__btn">
                        <a target="_blank" href="https://twitter.com/intent/tweet?text=">
                        <RiTwitterLine />  
                        </a>  
                    </button>
                    <button className="social__media__btn">
                        <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse">
                        <RiFacebookCircleFill />
                        </a>  
                    </button>
                    <button className="social__media__btn">
                        <a target="_blank" href="https://www.linkedin.com/shareArticle?mini=true&url=">
                        <RiLinkedinBoxFill /> 
                        </a>   
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SocialMedia;