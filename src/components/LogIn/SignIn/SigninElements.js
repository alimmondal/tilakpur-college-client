import styled from "styled-components";
import { Link } from "react-router-dom";



export const Container = styled.div`
    min-height: 692px;
    background: #049C59;
    padding-top: 80px;
    padding-bottom: 80px;
//     position: fixed;
//     bottom: 0px;
//     left: 0;
//     top: 0;
//     z-index: 0;
//     overflow: hidden;
    // background: linear-gradient(
    //     108deg,
    //     rgba(1, 147, 86, 1) 0%,
    //     rgba(10, 201, 122, 1) 100%,
    //     );

    @media screen and (max-width: 768px) {
        // padding: 80px 0;
        // width:80%;
    }
`;

export const FormWrap = styled.div`
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        // align-items: center;

        @media screen and (max-width:480px) {
            height: 30%;
        //     width:80%;

        }
`;

export const Icon = styled(Link)`
        margin-Left: 32px;
        margin-top: 32px;
        text-decoration: none;
        color: #fff;
        font-weight: 700;
        font-size: 32px;

        @media screen and (max-width: 480px) {
            margin-left: 16px;
            margin-top: 8px;
            width:80%;
        }
`;

export const FormContent = styled.div`
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        @media screen and (max-width: 480px) {
            padding: 10px;
        //     width:80%;
        }
`;

export const Form = styled.form`
        background: #010101;
        max-width: 400px;
        height: auto;
        width: 100%;
        z-index: 1;
        display: grid;
        margin: 0 auto;
        padding:80px 32px;
        border-radius: 4px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

        @media screen and (max-width: 480px) {
            padding: 32px 32px;
        //     width:300px;
        }
`;

export const FormH1 = styled.h1`
        margin-bottom: 40px;
        color: #fff;
        font-size: 20px;
        font-weight: 400;
        text-align: center;
`;

export const FormLabel = styled.label`
        margin-bottom: 8px;
        font-size: 14px;
        color: #fff;
`;

export const FormInput = styled.input`
        padding: 16px 0px;
        margin-bottom: 32px;
        border: none;
        border-radius: 4px;
        color: #fff;
        font-size: 20px;
        cursor: pointer;
`;

export const FormButton = styled.button`
        background: #01bf71;
        padding:16px 0;
        border: none;
        border-radius: 4px;
        color: #fff;
        font-size: 20px;
        cursor: pointer;
`;

export const Text = styled.span`
        text-align: center;
        margin-top:24px;
        color: #fff;
        font-size: 14px;
`;















