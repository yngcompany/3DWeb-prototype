// src/styles/Layout.js
import styled from "styled-components";


export const Container = styled.div`
    width: 100vw;
    height: 400vh;
    font-family: "Arial", sans-serif;
    color: #000000;
    background: transparent;
    overflow: hidden;
`;

export const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 5rem;
    width: auto;
    height: 100vh;
    background: ${({ bg }) => bg || "transparent"};
    transition: background 0.8s ease;

    @media (max-width: 768px) {
        padding: 0 1.25rem;
    }
`;

export const FadeSection = styled(Section)`
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 1s ease-out;
`;

export const Title = styled.h1`
    font-size: 3rem;
    letter-spacing: -0.025em;
    text-transform: uppercase;

    @media (max-width: 520px) {
        font-size: 1.5rem;
    }
`;

export const FadeTitle = styled.div`
    letter-spacing: -0.025em;
    line-height: 1.5rem;    

    h2 {font-size: 1.35rem; }
    dt {
        margin-top: 1.25rem; padding-bottom: 0.5rem; font-size: 1.25rem; border-bottom: 1px solid #888;
        &::before {content: '#'; padding-right: 0.5rem;}
    }
    dd {
        margin: 0 0 0.35rem 0; padding: 0.75rem 0;
        span {
        padding: 0.25rem 0.55rem; border: 1px solid #888; border-radius: 100px; white-space: nowrap;
        &:hover {border: 1px solid #0095ffff; background-color: #00c8ffff;}
        }
    }

    div {
        display: flex; flex-direction: column;
        p {font-size: 1.25rem; font-weight: bold; color: #250604ff;}
        span {color: #250604ff; word-break: keep-all;}
    }
    
    @media (max-width: 768px) {
        dd {
            span {display: inline-block; margin-bottom: 0.2rem;}
        }
    }
    
    @media (max-width: 500px) {
        line-height: 1rem;
        h2 {font-size: 1rem;}
        dt {margin-top: 0.5rem; font-size: 1rem;}
        dd {
            margin: 0 0 0.35rem 0; padding: 0.35rem 0;
            span {font-size: 0.75rem;}
        }
        div {
            p {font-size: 1rem;}
            span {font-size: 0.75rem;}
        }
    }
`;