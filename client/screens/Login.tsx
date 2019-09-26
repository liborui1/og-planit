import React, { useState } from 'react';
import firebase from 'firebase';
import { Container, Text, Button, Content, Form, Item, Input, Icon } from 'native-base';

export default function Login(props){
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    /**Sign in a user with given email and password combo. */
    const signIn = () => {
        setLoading(true);

        // Try logging in via Firebase
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => alert("Logged in!"))
        .catch(resp => {
            alert("Error trying to login. " + resp.message)
        })
        .catch(res => alert("Error loggin in. No additional info can be provided at the moment."));

        setLoading(false);
    }

    /**Handle signing up a user */
    const signUp = () => {
        
        alert("Clicked sign up");
    }

    /**Update username entered by user */
    const handleUsernameChange = (newEmail) => {
        setEmail(newEmail.nativeEvent.text);
    }

    /**Update password entered by user */
    const handlePasswordChange = (newPass) => {
        setPassword(newPass.nativeEvent.text);
    }

    return(
        <Container style={styles.container}>
            <Content padder>
                <Form>
                    <Item floatingLabel>
                        <Input value={email} onChange={text => handleUsernameChange(text)} placeholder="Email" />
                    </Item>

                    <Item floatingLabel>
                        <Input value={password} onChange={text => handlePasswordChange(text)} placeholder="Password" />
                    </Item>

                    <Button disabled={loading} primary rounded full style={styles.button} onPress={() => signIn()}>
                        <Text>Login</Text>
                    </Button>

                    <Button disabled={loading} light rounded full style={styles.button} onPress={() => signUp()}>
                        <Text>Sign Up</Text>
                    </Button>
                </Form>
            </Content>
        </Container>
    );
}

const styles = {
    container: {
        flex: 1, 
        justifyContent: 'center', 
        flexDirection: 'row',
        width: '100%',
        height: '100%',
    },
    body: {
        width: '100%'
    },
    button: {
        width: 100,
        marginTop: 20,
    }
}