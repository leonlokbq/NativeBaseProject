import React, { Component } from "react";
import { ImageBackground, View, StatusBar,
NativeModules
//  NativeAppEventEmitter,
//  NativeEventEmitter
//
 } from "react-native";
import { Container, Button, H3, Item,
Form,
Label,
Input,
Text,
Toast } from "native-base";

import styles from "./styles";
import BleManager from 'react-native-ble-manager';

const BleManagerModule = NativeModules.BleManager;
//const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

   // function 

class BLEPage extends Component {
  constructor(props){
    super(props);
    this.state={
      isReady: false
    };
  }

	async componentWillMount() {
      //await Expo.Font.loadAsync({
      //  'Roboto': require('native-base/Fonts/Roboto.ttf'),
      //  'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      //});
      this.setState({isReady: true});
    }

	scan(){
		//alert(username);
		BleManager.start({showAlert: false})
		  .then(() => {
			// Success code
			alert('Module initialized');
		  });
		
	}
	
	
	return (
      <View style={styles.container}>
        <TouchableHighlight style={{marginTop: 40,margin: 20, padding:20, backgroundColor:'#ccc'}} onPress={() => this.startScan() }>
          <Text>Scan Bluetooth ({this.state.scanning ? 'on' : 'off'})</Text>
        </TouchableHighlight>
        <TouchableHighlight style={{marginTop: 0,margin: 20, padding:20, backgroundColor:'#ccc'}} onPress={() => this.retrieveConnected() }>
          <Text>Retrieve connected peripherals</Text>
        </TouchableHighlight>
        <ScrollView style={styles.scroll}>
          {(list.length == 0) &&
            <View style={{flex:1, margin: 20}}>
              <Text style={{textAlign: 'center'}}>No peripherals</Text>
            </View>
          }
          <ListView
            enableEmptySections={true}
            dataSource={dataSource}
            renderRow={(item) => {
              const color = item.connected ? 'green' : '#fff';
              return (
                <TouchableHighlight onPress={() => this.test(item) }>
                  <View style={[styles.row, {backgroundColor: color}]}>
                    <Text style={{fontSize: 12, textAlign: 'center', color: '#333333', padding: 10}}>{item.name}</Text>
                    <Text style={{fontSize: 8, textAlign: 'center', color: '#333333', padding: 10}}>{item.id}</Text>
                  </View>
                </TouchableHighlight>
              );
            }}
          />
        </ScrollView>
      </View>
    );	
	
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
          <View
            style={{
              alignItems: "center",
              marginBottom: 30,
              backgroundColor: "transparent"
            }}
          >
            <Button
              style={styles.loginbutton}
              onPress={this.scan}
            >
              <Text>Scan</Text>
            </Button>
          </View>
      </Container>

    );
  }
}

export default BLEPage;