import React from 'react'
import styled from 'styled-components'
const Details=()=>{
    return (
        <Container>
            <BackgroundContainer>
                <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg' alt='image2'/>                
            </BackgroundContainer>
            <ImgTitle>
            <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78' alt='image1'/>
            </ImgTitle>
            <Controls>
                <PlayButton>
                    <img src='/images/play-icon-black.png' alt='image3'/>
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                <img src='/images/play-icon-white.png' alt='image4'/>
                <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src='/images/group-icon.png' alt='image5'/>
                </GroupWatchButton>
            </Controls>
            <SubTitle>
                2018 . 7m . Family, Fantasy, Kids, Animation
            </SubTitle>
            <Description>
                An ageing Chinese Mom gets another chance at motherhood 
                <br/>when one of her dumplings springs to life as a lively, 
                <br/>giggly dumpling boy.
            </Description>
        </Container>
    )
}

export default Details


const Container = styled.div`
    min-height: 100%;
    padding: 0 calc(3.5vw + 5px);
    position:relative;
`

const BackgroundContainer = styled.div`
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    z-index:-1;
    opacity:0.8;
    img{
        width:100%;
        object-fit:cover;
        
    }
`

const ImgTitle = styled.div`
    height: 30vh;
    min-height:170px;
    width: 35vw;
    min-width:200px;
    margin-top:30px;
    img{
        height:100%;
        width:100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
display:flex;
align-items:center;
margin-top:30px;
`

const PlayButton = styled.button`
    display:flex;
    align-items:center;
    padding: 0 24px;
    margin-right:24px;
    letter-spacing:1.8px;
    cursor:pointer; 
    border-radius:4px;
    font-size:15px;
    height:56px;
    border:none;
    background:rgb(249,249,249);

    &:hover{
        background:rgb(198,198,198);
    }
`

const TrailerButton = styled(PlayButton)`
    background: rgba(0 , 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249 , 249);
`

const AddButton = styled.button`
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:50%;
    background-color: rgba(0, 0, 0 , 0.6);
    margin-right:24px;
    width:44px;
    height:44px;
    border:2px solid white;
    cursor:pointer;
    span{
        font-size:30px;
        color:white;
    }

`

const GroupWatchButton = styled(AddButton)`
    background:rgb(0,0,0);
`
const SubTitle = styled.div`
    margin-top:20px;
    color:rgba(249,249,249);
    font-size:15px;
    min-height:20px;
    
`

const Description = styled.div`
    margin-top:20px;
    color:rgba(249,249,249);
    font-size:15px;
    line-height:1.4;
    min-height:20px;
`