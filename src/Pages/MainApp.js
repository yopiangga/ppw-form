
import innovation from '../assets/images/innovation.png';
import {FaDribbbleSquare, FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaPinterestSquare, FaTwitterSquare} from 'react-icons/fa';
import $ from 'jquery';
import { useState } from 'react';

export function MainApp() {

    const [data, setData] = useState(1);

    const handleMedia = (event) => {
        switch(event){
            case 1:
                $('.facebook').toggleClass('active');
                break;
            case 2:
                $('.instagram').toggleClass('active');
                break;
            case 3:
                $('.twitter').toggleClass('active');
                break;
            case 4:
                $('.linkedin').toggleClass('active');
                break;
            case 5:
                $('.pinterest').toggleClass('active');
                break;
            case 6:
                $('.dribbble').toggleClass('active');
                break;
        }
    }

    const handleBtn = (event) => {
        switch(event) {
            case 1 :
                $('.form-body-1').removeClass('right');
                $('.form-body-2').removeClass('right');
                $('.form-body-1').addClass('left');
                $('.form-body-2').addClass('left');
                break;
        }
        setData(event + 1);
    }

    const handleBack = (event) => {
        switch(event-1) {
            case 1 :
                $('.form-body-1').removeClass('left');
                $('.form-body-2').removeClass('left');
                $('.form-body-2').addClass('right');
                $('.form-body-2').addClass('right');
                break;
        }
        setData(event - 1);
    }

    return (
        <div className="main-app">
            <div className="content">
                <div className="header-content">
                    <h1><span>Y</span>opiangga</h1>
                </div>
                <div className="body-content">
                    <div className="content-left">
                        <div className="form">
                            <div className="form-body-1">
                                <div className="icon">
                                    <img src={innovation} />
                                </div>
                                <h2>Configuring Your <span>Project</span></h2>
                                <div className="form-group">
                                    <label>Name Project</label>
                                    <input type="text" />
                                </div>
                                <h3>Share Project</h3>
                                <div className="media-social">
                                    <div className="item facebook" onClick={() => {handleMedia(1)}}>
                                        <div className="box">
                                            <FaFacebookSquare />
                                        </div>
                                        <h4>Facaebook</h4>
                                    </div>
                                    <div className="item instagram" onClick={() => {handleMedia(2)}}>
                                        <div className="box">
                                            <FaInstagramSquare />
                                        </div>
                                        <h4>Instagram</h4>
                                    </div>
                                    <div className="item twitter" onClick={() => {handleMedia(3)}}>
                                        <div className="box">
                                            <FaTwitterSquare />
                                        </div>
                                        <h4>Twitter</h4>
                                    </div>
                                    <div className="item linkedin" onClick={() => {handleMedia(4)}}>
                                        <div className="box">
                                            <FaLinkedin />
                                        </div>
                                        <h4>Linked In</h4>
                                    </div>
                                    <div className="item pinterest" onClick={() => {handleMedia(5)}}>
                                        <div className="box">
                                            <FaPinterestSquare />
                                        </div>
                                        <h4>Pinterest</h4>
                                    </div>
                                    <div className="item dribbble" onClick={() => {handleMedia(6)}}>
                                        <div className="box">
                                            <FaDribbbleSquare />
                                        </div>
                                        <h4>Dribbble</h4>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="form-body-2">
                                <div className="icon">
                                    <img src={innovation} />
                                </div>
                                <h2>Owner and Date <span>Settings</span> </h2>
                                <div className="form-input">    
                                    <h4>Owner</h4>
                                    <div className="row">
                                        <div className="form-group">
                                            <label>Full Name</label>
                                            <input type="text" />
                                        </div>
                                        <div className="form-group">
                                            <label>Status</label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="text" />
                                        </div>
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-input">    
                                    <h4>Date</h4>
                                    <div className="row">
                                        <div className="form-group">
                                            <label>Start Date</label>
                                            <input type="text" />
                                        </div>
                                        <div className="form-group">
                                            <label>End Date</label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className="navigation">
                                <div className="navigation-left">
                                    <h4 onClick={() => {handleBack(data)}}>Back</h4>
                                </div>
                                <div className="navigation-right">
                                    <button className="btn-next" onClick={() => {handleBtn(data)}}>Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-right">
                        <div className="items-group">
                            <div className="item done">
                                <div className="item-left">
                                    <div className="circle">
                                        <h4>1</h4>
                                    </div>
                                </div>
                                <div className="item-right">
                                    <h4>Configure your project</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. sit amet consectetur neque accusamus dicta!</p>
                                </div>
                            </div>
                            <div className="item active">
                                <div className="item-left">
                                    <div className="circle">
                                        <h4>2</h4>
                                    </div>
                                </div>
                                <div className="item-right">
                                    <h4>Configure your project</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. neque distinctio fugit sit amet consectetur!</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item-left">
                                    <div className="circle">
                                        <h4>3</h4>
                                    </div>
                                </div>
                                <div className="item-right">
                                    <h4>Configure your project</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. neque sit amet consectetur fugit accusamus!</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}