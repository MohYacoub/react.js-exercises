import React from 'react';
import "./App.css";
import { FaEdit, FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Card(props) {

    return (
        <div class="wrapper">
            <div class="img-area">
                <div class="inner-area">
                    <img src={props.img} alt=""></img>
                </div>
            </div>
            <div class="icon arrow"><i class="fas fa-arrow-left"></i></div>
            <div class="icon dots"><i class="fas fa-ellipsis-v"></i></div>
            <div class="name">{props.name}</div>
            <div class="about">{props.job}</div>
            <div class="social-icons">
                <a href={props.Facebook} class="fb"><i class="fab fa-facebook-f"></i></a>
                <a href={props.twitter} class="twitter"><i class="fab fa-twitter"></i></a>
                <a href={props.github} class="insta"><i class="fab fa-github"></i></a>
            </div>

        </div>

    );

}

export default Card;