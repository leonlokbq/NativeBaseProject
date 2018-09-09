import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  List,
  ListItem,
  Text,
  View
} from "native-base";

const datas = [
  {
    route: "AccordionDefault",
    text: "Default Accordion"
  },
  {
    route: "AccordionIcon",
    text: "Icon and Expanded Icon"
  },
  {
    route: "AccordionIconStyle",
    text: "Icon and Expanded Icon style"
  },
  {
    route: "AccordionHeaderContentStyle",
    text: "Header and Content style"
  },
  {
    route: "AccordionCustomHeaderContent",
    text: "Custom Header and Content"
  }
];

class GPSPage extends Component
{
constructor(props) {
  super(props);

  this.state = {
    latitude: null,
    longitude: null,
    error: null,
  };
}
componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
            transparent
            onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
            <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>GPS</Title>
          </Body>
          <Right />
        </Header>

        <Content padder style={{ backgroundColor: "white" }}>
        <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Latitude: {this.state.latitude}</Text>
          <Text>Longitude: {this.state.longitude}</Text>
          {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
        </View>
        </Content>
      </Container>
    );
  }
}

export default GPSPage;
