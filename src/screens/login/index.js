import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import { Container, Header, Left, Icon, Body, Title, Right, Button, H3, Item,
Form,
Label,
Input,
Text,
Toast } from "native-base";
import { Field,reduxForm } from 'redux-form';

import styles from "./styles";

const launchscreenBg = require("../../../assets/hkebg.png");
const launchscreenLogo = require("../../../assets/HKE_logo.png");
const BASE_SP_URL = "https://exp.hkelectric.com/sites/HealthCheckDev";
const BASE_SP_Host = "exp.hkelectric.com";

const required = value => value ? undefined : 'Required';
const validate2 = values => {
  const error= {};
  error.username= '';
  error.tbxPassword= '';
  var ema = values.username;
  var nm = values.tbxPassword;
  if(values.username === undefined){
    ema = '';
  }
  if(values.tbxPassword === undefined){
    nm = '';
  }
  if(ema.length < 8 && ema !== ''){
    error.username= 'too short';
  }
  if(!ema.includes('@') && ema !== ''){
    error.username= '@ not included';
  }
  if(nm.length > 8){
    error.tbxPassword= 'max 8 characters';
  }
  //alert(1);
  return error;
};

   // function

class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state={
      isReady: false
    };
    this.renderInput = this.renderInput.bind(this);
  }

	async componentWillMount() {
      //await Expo.Font.loadAsync({
      //  'Roboto': require('native-base/Fonts/Roboto.ttf'),
      //  'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      //});
      this.setState({isReady: true});
    }

	login(){
		//alert(username);
  /*  var soapEnv = "<soap:Envelope xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:xsd='http://www.w3.org/2001/XMLSchema' xmlns:soap='http://schemas.xmlsoap.org/soap/envelope/'> \
<soap:Body> \
<Login xmlns='http://schemas.microsoft.com/sharepoint/soap/'> \
<username>ditzms01</username> \
<password>!23456qwerty</password> \
</Login> \
</soap:Body> \
</soap:Envelope>";

$.ajax({
       url: BASE_SP_URL + "/_vti_bin/authentication.asmx",
       type: "POST",
       dataType: "xml",
       data: soapEnv,
       complete: callback,
       contentType: "text/xml; charset=\"utf-8\""
     });*/

var obj = {
  method: 'POST',
  headers: {
    'Accept': 'application/xml',
    'Content-Type': 'application/xml',
    'Origin': '',
    'Host': BASE_SP_Host
  },
  body: "<soap:Envelope xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:xsd='http://www.w3.org/2001/XMLSchema' xmlns:soap='http://schemas.xmlsoap.org/soap/envelope/'> \
        <soap:Body> \
        <Login xmlns='http://schemas.microsoft.com/sharepoint/soap/'> \
        <username>ditzms01</username> \
        <password>@34567wertyu</password> \
        </Login> \
        </soap:Body> \
        </soap:Envelope>"
  }


    fetch(BASE_SP_URL + "/_vti_bin/authentication.asmx", obj)
      .then(response => response.text())
      .then(function(res) {
        alert(res);
        var parser, xmlDoc;
        parser = new DOMParser();
        xmlDoc = parser.parseFromString(xData.responseText,"text/xml");
        if(status == "success"){
            var errorCode = xmlDoc.getElementsByTagName("ErrorCode")[0].childNodes[0].nodeValue;
            if(errorCode == "NoError"){

                HidePanel();
                progress.hide();
            }else{
                alert(errorCode);
                progress.hide();
            }
        }       else{
            alert(xmlDoc.getElementsByTagName("faultstring")[0].childNodes[0].nodeValue);
            progress.hide();
        }
        return res;//res.json();
       })
      .then(function(resJson) {
        return resJson;
       })
	}

	renderInput({ input, label, type, meta: { touched, error, warning } }){
		var hasError= false;
		if(error !== undefined){
		  hasError= true;
		}
		//alert(2);
		return(
		  <Item error= {hasError}>
			<Input {...input} />
			<Label>{hasError ? <Text>{error}</Text> : <Text />}</Label>
		  </Item>
		)
	}

  render() {
	const { handleSubmit, reset, login, pristine, submitting } = this.props;
     if (!this.state.isReady) {
       Toast.show({
                text: "Wrong password!",
                buttonText: "Okay",
                duration: 3000
              })
		 return false
      //return <Expo.AppLoading />;
    }

    return (

      <Container>
        <StatusBar barStyle="light-content" />
        <Header hasTabs>
          <Left>
            <Button
            transparent
            onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
            <Icon name="menu" />
            </Button>
          </Left>
          <Body style={{ flex: 3 }}>
            <Title>SharePoint Login</Title>
          </Body>
          <Right />
        </Header>
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
          <View style={styles.logoContainer}>
            <ImageBackground source={launchscreenLogo} style={styles.logo} />
          </View>
          <View
            style={{
              alignItems: "center",
              marginBottom: 30,
              backgroundColor: "transparent"
            }}
          >
          </View>
          <View style={styles.loginform}>
			<Form onSubmit={this.handleSubmit}>
				<Item floatingLabel style={styles.loginfields}>
				  <Label>Username</Label>
				  <Field name="username" component={this.renderInput} />
				</Item>
				<Item floatingLabel middle style={styles.loginfields}>
				  <Label>Password</Label>
				  <Field name="tbxPassword" secureTextEntry component={this.renderInput} />
				</Item>
			</Form>
            <Button
              style={styles.loginbutton}
              onPress={this.login}
            >
              <Text>Login</Text>
            </Button>
          </View>
        </ImageBackground>
      </Container>

    );
  }
}

export default reduxForm({
	form: 'test',
	validate: validate2
})(LoginForm);
