import React, { useState } from 'react';
import firebase from 'firebase';
import SignUp from './SignUp';
import { Container, Text, Button, Content, Form, Item, Input, Header, Left, Body, Right, Title, Subtitle } from 'native-base';
import { View } from 'react-native';

export default function Login(props){
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signUpModalOpen, setSignUpModalOpen] = useState(false);

    /**Sign in a user with given email and password combo. */
    const signIn = () => {
        setLoading(true);

        // Try logging in via Firebase
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            setLoading(false);
            console.log(res);
            props.navigation.navigate('App');
            alert("Logged in!");
        
        })
        .catch(resp => {
            alert("Error trying to login. " + resp.message);
            setLoading(false);
        })
        .catch(res => {
            alert("Error loggin in. No additional info can be provided at the moment. Check console log for details.");
            console.log(res);
            setLoading(false);
        });
    }

    /**Update username entered by user */
    const handleUsernameChange = (newEmail) => {
        setEmail(newEmail.nativeEvent.text);
    }

    /**Update password entered by user */
    const handlePasswordChange = (newPass) => {
        setPassword(newPass.nativeEvent.text);
    }

    /**Open or close the signup modal */
    const setModalOpen = (val: boolean) => {
        setSignUpModalOpen(val);
    }

    return(
        <View style={styles.container}>
            <Container>
                <Header noLeft>
                    <Left/>

                    <Body>
                        <Title>
                            Login
                        </Title>
                        <Subtitle>
                            Login below to continue, or make a new account.
                        </Subtitle>
                    </Body>
                </Header>
                <Content padder>
                    <Form>
                        <Item floatingLabel>
                            <Input keyboardType="email-address" value={email} onChange={text => handleUsernameChange(text)} placeholder="Email" />
                        </Item>

                        <Item floatingLabel>
                            <Input secureTextEntry={true} value={password} onChange={text => handlePasswordChange(text)} placeholder="Password" />
                        </Item>

                        <Button disabled={loading} primary rounded full style={styles.button} onPress={() => signIn()}>
                            <Text>Login</Text>
                        </Button>

                        <Button disabled={loading} light rounded full style={styles.button} onPress={() => setModalOpen(true)}>
                            <Text>Sign Up</Text>
                        </Button>
                    </Form>
                </Content>

                {signUpModalOpen && <SignUp open={signUpModalOpen} setModal={setModalOpen}/>}
            </Container>
        </View>
    );
}

const styles = {
    container: {
        flex: 1, 
        justifyContent: 'center', 
        flexDirection: 'row',
    },
    button: {
        width: 100,
        marginTop: 20,
    }
}