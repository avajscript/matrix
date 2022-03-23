import styled from 'styled-components';

const ContentHolder = styled.div`
    display:grid;
    gap:4rem;
    width:90%;
    margin:4rem auto 0;
    grid-template-areas: 
    'about about creators'
    'resources resources creators';

    @media screen and (max-width:991px){
        grid-template-areas:
        'about'
        'resources'
        'creators';
    }

`;
const LeftContent = styled.div`
    position:relative;
    border: 3px solid white;
    &:nth-of-type(1){
        grid-area:about;
    }
    &:nth-of-type(2){
        grid-area:resources;
    }
`;

const RightContent = styled.div`
    position:relative;
    border:3px solid white;
    grid-area: creators;
`;

const Title = styled.div`
    position:absolute;
    background-color:white;
    left:-3px;
    top:-50px;
    height:50px;
    display:flex;
    align-items: center;
    padding:0 10px;
    box-shadow: 0px 0px 5px 1px rgba(255,255,255,.5);
    h2{
        color: #000;
        font-weight:600;
    }
`;

const about = () => {
  return (
    <ContentHolder>
        <LeftContent>
            <Title><h2>ABOUT</h2></Title>
            <p>About</p>>
        </LeftContent>

        <LeftContent>
        <Title><h2>RESOURCES</h2></Title>
        <p> Resources </p>
        </LeftContent>

        <RightContent>
            <Title><h2>CREATORS</h2></Title>
            <p>Creators</p>>
        </RightContent>
    </ContentHolder>
  )
}

export default about