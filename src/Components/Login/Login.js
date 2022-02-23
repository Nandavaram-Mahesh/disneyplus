import React from 'react'
import styled from 'styled-components'

const Login=()=> {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" alt='logo-image'/>
                <SignUp>
                    GET ALL THERE
                </SignUp>
                <Description>
                Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription.
                As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png" alt='logo-image1'/>
            </CTA>
        </Container>
    )
}

export default Login

const Container = styled.div`
    position:relative;
    height:calc(100vh - 70px);
    
    display:flex;
    justify-content:center;
    align-items:center;
    
    &:before{
        position:absolute;
        content:"";
        top:0;
        left:0;
        right:0;
        bottom:0;
        opacity:0.8;
        background-image:url('/images/login-background.jpg');
        z-index:-1;
    }
`

const CTA = styled.div`
    width:90%;
    max-width:650px;
    padding:80px 40px;
    display:flex;
    flex-direction:column;
`

const CTALogoOne = styled.img`

`

const SignUp = styled.a`
    width:100%;
    background-color:#0063e5;
    font-weight:bold;
    padding:17px 0;
    color:#f9f9f9;
    border-radius:4px;
    text-align:center;
    font-size:18px;
    cursor:pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 10px;
    margin-bottom:12px;
    &:hover{
        background-color: #0483ee;
    }
`

const Description = styled.p`
    font-size:11px;
    letter-spacing:1.5px;
    text-align:center;
    line-height:1.5;
`
const CTALogoTwo = styled.img``