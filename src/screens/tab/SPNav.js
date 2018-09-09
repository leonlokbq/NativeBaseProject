import React, { Component } from "react";
import { Platform } from "react-native";
import { Content, Card, CardItem, Text, Body, List, ListItem, Left,
  Right,
  Button,
  Icon, Title } from "native-base";
import { StackNavigator, DrawerNavigator } from "react-navigation";

import RecordDetail from "./recordDetail";
import TabOne from "./tabOne";
import TabTwo from "./tabTwo";
import TabThree from "./tabThree";

export default class SPNav extends Component {
  constructor(props, tabname) {
    super(props);
    this.state = {
      tab: tabname
    };
    //getTabName(() => {return tab});
  }
  render() {
    return (
      <SPNavigator tab={this.state.tab} />
    );
  }
}

const SPNavigator = StackNavigator(
  {
    TabOne: { screen: TabOne },
    RecordDetail: { screen: RecordDetail }
  },
  {
    initialRouteName: this.tab,
    headerMode: "none",
    contentComponent: props => <TabOne {...props} />
  }
);
