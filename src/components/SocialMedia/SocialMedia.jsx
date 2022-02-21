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
        <div className="container">
            <button className={"share__btn " + (isShareOptionsVisible ? " active" : "")}>
                <RiShareLine onClick={toggleShareOptionsVisibility} />
            </button>
            <div className={"share__options" + (isShareOptionsVisible ? " active" : "")}>
                <p className="title">share</p>
                <div className="social__media">
                    <button className="social__media__btn">
                        <a href="https://wa.me/">
                        <RiWhatsappLine /> 
                        </a>   
                    </button> 
                    <button className="social__media__btn">
                        <RiInstagramLine />    
                    </button>
                    <button className="social__media__btn">
                        <a href="https://twitter.com/intent/tweet?text=">
                        <RiTwitterLine />  
                        </a>  
                    </button>
                    <button className="social__media__btn">
                        <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse">
                        <RiFacebookCircleFill />
                        </a>  
                    </button>
                    <button className="social__media__btn">
                        <a href="https://www.linkedin.com/shareArticle?mini=true&url=">
                        <RiLinkedinBoxFill /> 
                        </a>   
                    </button>
                    <div className="link__container">
                        <p className="link">https://example.com/share</p>
                        <button className="copy__btn">copy</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialMedia;