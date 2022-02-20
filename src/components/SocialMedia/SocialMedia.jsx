import React from 'react'
import { useState } from 'react';
import { set } from 'react-hook-form';
import {RiShareLine, RiFolderLine, RiWhatsappLine, RiInstagramLine, RiTwitterLine, RiFacebookCircleFill, RiLinkedinBoxFill} from 'react-icons/ri';
import './SocialMedia.scss';

const SocialMedia = () => {
    const [isShareOptionsVisible, setShareOptionsVisibility] = useState(false); 
    
    const toggleShareOptionsVisibility = () => {
        setShareOptionsVisibility(!isShareOptionsVisible);
    };
      
    return (
        <div className="container">
            <button className={"share-btn " + (isShareOptionsVisible ? " active" : "")}>
                <RiShareLine onClick={toggleShareOptionsVisibility} />
            </button>
            <div className={"share-options" + (isShareOptionsVisible ? " active" : "")}>
                <p className="title">share</p>
                <div className="social-media">
                    <button className="social-media-btn">
                        <RiFolderLine />    
                    </button>
                    <button className="social-media-btn">
                        <RiWhatsappLine />    
                    </button>
                    <button className="social-media-btn">
                        <RiInstagramLine />    
                    </button>
                    <button className="social-media-btn">
                        <RiTwitterLine />    
                    </button>
                    <button className="social-media-btn">
                        <RiFacebookCircleFill />    
                    </button>
                    <button className="social-media-btn">
                        <RiLinkedinBoxFill />    
                    </button>
                    <div className="link-container">
                        <p className="link">https://example.com/share</p>
                        <button className="copy-btn">copy</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialMedia;