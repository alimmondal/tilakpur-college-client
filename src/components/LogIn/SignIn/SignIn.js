import React from 'react';
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './SigninElements'
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <Container>
            <FormWrap>
                <Icon to="/">tCollege</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor="for">Email</FormLabel>
                        <FormInput type="email" required />
                        <FormLabel htmlFor="for">Password</FormLabel>
                        <FormInput type="password" />
                        <FormButton type="submit">Continue</FormButton>
                        <Text>Forgot Password?</Text>
                        <Link to="/signUp">
                            <h5 className="text-white text-center mt-4">Don't have an account? <span className="text-primary">sign up</span> </h5>
                        </Link>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    );
};

export default SignIn;