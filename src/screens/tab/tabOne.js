import React, { Component } from "react";
import { Platform } from "react-native";
import { Content, Card, CardItem, Text, Body, List, ListItem, Left,
  Right,
  Button,
  Icon, Title } from "native-base";
import { StackNavigator, DrawerNavigator } from "react-navigation";

import RecordDetail from "./recordDetail";

  const datas = [
    {
      route: "RecordDetail",
      text: "Record 1"
    },
    {
      route: "RecordDetail",
      text: "Record 2"
    },
    {
      route: "RecordDetail",
      text: "Record 3"
    },
    {
      route: "RecordDetail",
      text: "Record 4"
    },
    {
      route: "RecordDetail",
      text: "Record 5"
    },
    {
      route: "RecordDetail",
      text: "Record 6"
    }
  ];




export default class TabOne extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Content padder>
      <List
        dataArray={datas}
        renderRow={data =>
          <ListItem
            button
            onPress={() => this.props.navigation.navigate('RecordDetail')}
          >
            <Left>
              <Button style={{ backgroundColor: "#00FF00" }}>
                <Icon active name="ios-checkmark-circle" />
              </Button>
            </Left>
            <Body>
              <Text>{data.text}</Text>
            </Body>
            <Right>
              <Text></Text>
              {Platform.OS === "ios" && <Icon active name="arrow-forward" />}
            </Right>
          </ListItem>}
      />
      </Content>
    );
  }
}
