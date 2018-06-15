import React,{Component} from 'react';
import {View,Text} from 'react-native';
import firebase from 'firebase';
import {Header,Button,Spinner,CardSection} from './components/common';
import LoginForm from './components/LoginForm';
class App extends Component{
    state ={loggedIn:null};
    componentWillMount(){
        firebase.initializeApp({
            apiKey: 'AIzaSyDPGCAb_JvUtP-D0QWjrVmtV3giBGj_AOU',
            authDomain: 'auth-bcfab.firebaseapp.com',
            databaseURL: 'https://auth-bcfab.firebaseio.com',
            projectId: 'auth-bcfab',
            storageBucket: 'auth-bcfab.appspot.com',
            messagingSenderId: '524161976274'
          });

          firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({loggedIn:true});

            } else{
                this.setState({loggedIn:false});
            }
        });
    }

    renderContent(){
        switch(this.state.loggedIn){
            case true:
                return <CardSection><Button onPress={()=>firebase.auth().signOut()}>Log Out</Button></CardSection>
            case false:
                return <LoginForm />
            default:
                return <Spinner size="large" />
        }
    }

    render(){
        return(
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;