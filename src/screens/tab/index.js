import React, { Component } from "react";
import { Platform } from "react-native";
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Tabs,
  Tab,
  Text,
  Right,
  Left,
  Body,
  TabHeading,
  List,
  ListItem
} from "native-base";
import TabOne from "./tabOne";
import TabTwo from "./tabTwo";
import TabThree from "./tabThree";
import SPNav from "./SPNav";

import IconF from 'react-native-vector-icons/FontAwesome'
import IconFF from 'react-native-vector-icons/Feather'
import IconM from 'react-native-vector-icons/Entypo'

import RecordDetail from "./recordDetail";

  const datas = [
    {
      route: "RecordDetail",
      text: "Record 1",
      icon: "upload"
    },
    {
      route: "RecordDetail",
      text: "Record 2",
      icon: "upload"
    },
    {
      route: "RecordDetail",
      text: "Record 3",
      icon: "upload"
    },
    {
      route: "RecordDetail",
      text: "Record 4",
      icon: "upload"
    },
    {
      route: "RecordDetail",
      text: "Record 5",
      icon: "upload"
    },
    {
      route: "RecordDetail",
      text: "Record 6",
      icon: "upload"
    }
  ];

  const datas2 = [
    {
      route: "RecordDetail",
      text: "Record 1",
      icon: "upload"
    },
    {
      route: "RecordDetail",
      text: "Record 2",
      icon: "upload"
    },
    {
      route: "RecordDetail",
      text: "Record 3",
      icon: "upload"
    },
    {
      route: "RecordDetail",
      text: "Record 4",
      icon: "upload"
    },
    {
      route: "RecordDetail",
      text: "Record 5",
      icon: "upload"
    },
    {
      route: "RecordDetail",
      text: "Record 6",
      icon: "upload"
    }
  ];

  const datas3 = [
    {
      route: "RecordDetail",
      text: "Record 1",
      icon: "download-cloud"
    },
    {
      route: "RecordDetail",
      text: "Record 2",
      icon: "download-cloud"
    },
    {
      route: "RecordDetail",
      text: "Record 3",
      icon: "download-cloud"
    },
    {
      route: "RecordDetail",
      text: "Record 4",
      icon: "download-cloud"
    },
    {
      route: "RecordDetail",
      text: "Record 5",
      icon: "download-cloud"
    },
    {
      route: "RecordDetail",
      text: "Record 6",
      icon: "download-cloud"
    }
  ];

class ConfigTab extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
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
            <Title>SharePoint</Title>
          </Body>
          <Right>
          <Button
          transparent
          onPress={() => this.props.navigation.navigate("RecordDetail")}
          >
          <IconM name="plus" size={30} />
          </Button>
          </Right>
        </Header>
        <Tabs tabBarPosition="bottom" style={{ elevation: 3 }}>
          <Tab
            heading={
              <TabHeading>
                <Text>All</Text>
              </TabHeading>
            }
          >
          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                onPress={() => this.props.navigation.navigate('RecordDetail')}
              >
                <Left>

                  <IconFF
                    active
                    name={data.icon}
                    style={{ color: "#777", fontSize: 26, width: 30 }}
                  />

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
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Text>Pending</Text>
              </TabHeading>
            }
          >
          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                onPress={() => this.props.navigation.navigate('RecordDetail')}
              >
                <Left>
                <IconFF
                  active
                  name={data.icon}
                  style={{ color: "#777", fontSize: 26, width: 30 }}
                />
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
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Text>Uploaded</Text>
              </TabHeading>
            }
          >
          <List
            dataArray={datas3}
            renderRow={data =>
              <ListItem
                button
                onPress={() => this.props.navigation.navigate('RecordDetail')}
              >
                <Left>
                <IconFF
                  active
                  name={data.icon}
                  style={{ color: "#777", fontSize: 26, width: 30 }}
                />
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
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default ConfigTab;
