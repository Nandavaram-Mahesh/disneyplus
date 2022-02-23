import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const Navbar=()=> {
    return (
        <Nav>
            <Logo src='/images/logo.svg'/>
            <NavMenu>
                <Link to='/'>
                <li>
                    <img alt='image' src='/images/home-icon.svg'/>
                    <span>HOME</span>
                </li>
                </Link>
                <li>
                    <img alt='image' src='/images/search-icon.svg'/>
                    <span>SEARCH</span>
                </li>
                <li >
                    <img alt='image' src='/images/watchlist-icon.svg'/>
                    <span>WATCHLIST</span>
                </li>
                <li >
                    <img alt='image' src='/images/original-icon.svg'/>
                    <span>ORIGINALS</span>
                </li> 
                <li >
                    <img alt='image' src='/images/movie-icon.svg'/>
                    <span>MOVIES</span>
                </li>
                <li >
                    <img alt='image' src='/images/series-icon.svg'/>
                    <span>SERIES</span>
                </li>              
            </NavMenu>
            <UserImg  alt='image' src='/images/pexels-nathan-cowley.jpg'/>
        </Nav>
    )
}

export default Navbar

const Nav = styled.div`
    display:flex;
    align-items:center;
    height:70px;
    background-color:#090b13;
    padding-top:5px; 
    padding-left: 36px;
    padding-right: 36px;
    width:100vw;
    
`
const Logo = styled.img`
    width:80px;
`

const NavMenu=styled.ul`
    display:flex;
    flex:1;
    justify-content:center;
    align-items:center;
    margin-left:30px;
    
    li{
        display:flex;
        align-items:center;
        padding:0 20px;
        cursor:pointer;
        margin-left:20px;
        color:white;
        text-decoration:none;
        img{
            height:20px;
        }
        span{
            font-size:12px;
            letter-spacing:1.6px;
            position:relative;

            &:after{
                content:"";
                height:2px;
                background-color:#ffffff;
                position:absolute;
                left:0;
                right:0;
                bottom:-6px;
                opacity:0;
                transform-origin:right center;
                transform:scaleX(0);
                transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
            }
        }
        &:hover{
            span:after{
                transform:scaleX(1);
                opacity:1;
            }
        }
    }
`
const UserImg = styled.img`
    width:50px;
    height:50px;
    border-radius:50%;
    cursor:pointer;
    `