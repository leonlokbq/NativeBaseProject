import React, { Component } from "react";
import { Platform, SegmentedControlIOS } from "react-native";
import { Container, Content, Header, Title, Card, CardItem, Text, Body, ListItem, Left,
  Right,
  Button,
  Icon, Item, Label, Form,  Segment, Input,
  DatePicker,
  Textarea

 } from "native-base";

 import IconM from 'react-native-vector-icons/Entypo'

 import styles from "./styles";

export default class RecordDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seg: 0,
      seg2: 0,
      seg3: 0,
      selectedIndex: 0
    };
  }

  render() {
    return (
      <Container>
      <Header hasTabs>
        <Left>
          <Button
          transparent
          onPress={() => this.props.navigation.navigate("NHTab")}
          >
          <IconM name="chevron-thin-left" size={30} />
          </Button>
        </Left>
        <Body style={{ flex: 3 }}>
          <Title>SharePoint</Title>
        </Body>
        <Right>
          <Button
          transparent
          onPress={() => this.props.navigation.navigate("NHTab")}
          >
          <IconM name="save" size={30} />
          </Button>
        </Right>
      </Header>
      <Content padder>
        <Form>
          <Item stackedLabel>
            <Label>Title</Label>
            <Input />
          </Item>
          <Item stackedLabel>
            <Label>Occurrence Date Time</Label>
            <DatePicker
              defaultDate={new Date(2018, 4, 4)}
              minimumDate={new Date(2018, 1, 1)}
              maximumDate={new Date(2018, 12, 31)}
              locale={"en"}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={"fade"}
              androidMode={"default"}
              placeHolderText="Select date"
            />
          </Item>
          <Item stackedLabel>
            <Label>Contact</Label>
            <Input />
          </Item>
          <Item stackedLabel style={styles.listitemLoc}>
            <Label>Location</Label>
            <Segment style={styles.seg}>
              <Button
                first
                active={this.state.seg === 1 ? true : false}
                onPress={() => this.setState({ seg: 1 })}
              >
                <Text>ET</Text>
              </Button>
              <Button
                active={this.state.seg === 2 ? true : false}
                onPress={() => this.setState({ seg: 2 })}
              >
                <Text>EC</Text>
              </Button>
              <Button
                active={this.state.seg === 3 ? true : false}
                onPress={() => this.setState({ seg: 3 })}
              >
                <Text>HKEC</Text>
              </Button>
              <Button
                active={this.state.seg === 4? true : false}
                onPress={() => this.setState({ seg: 4 })}
              >
                <Text>LPS</Text>
              </Button>
              <Button
                last
                active={this.state.seg === 5 ? true : false}
                onPress={() => this.setState({ seg: 5 })}
              >
                <Text>Others</Text>
              </Button>
            </Segment>
            <Label>'If "Others", Please Specify in Location Details'</Label>
            </Item>
          <Item stackedLabel>

            <Label>Location Details</Label>
            <Input />
          </Item>
          <Item stackedLabel>
            <Label>Description</Label>
            <Input />
          </Item>
          <Item stackedLabel style={styles.listitem}>
            <Label>Division</Label>
            <Segment style={styles.seg}>
              <Button
                first
                active={this.state.seg2 === 1 ? true : false}
                onPress={() => this.setState({ seg2: 1 })}
              >
                <Text>GEN</Text>
              </Button>
              <Button
                active={this.state.seg2 === 2 ? true : false}
                onPress={() => this.setState({ seg2: 2 })}
              >
                <Text>'T&D'</Text>
              </Button>
              <Button
                active={this.state.seg2 === 3 ? true : false}
                onPress={() => this.setState({ seg2: 3 })}
              >
                <Text>PD</Text>
              </Button>
              <Button
                last
                active={this.state.seg2 === 4 ? true : false}
                onPress={() => this.setState({ seg2: 4 })}
              >
                <Text>Others</Text>
              </Button>
            </Segment>
          </Item>
          <Item stackedLabel>
            <Label>Progress Remark</Label>
            <Input />
          </Item>
          <Item stackedLabel style={styles.listitemRes}>
            <Label>Responsible Party</Label>
            <Segment style={styles.seg}>
              <Button
                first
                active={this.state.seg3 === 1 ? true : false}
                onPress={() => this.setState({ seg3: 1 })}
              >
                <Text>GEN</Text>
              </Button>
              <Button
                active={this.state.seg3 === 2 ? true : false}
                onPress={() => this.setState({ seg3: 2 })}
              >
                <Text>PD</Text>
              </Button>
              <Button
                last
                active={this.state.seg3 === 3 ? true : false}
                onPress={() => this.setState({ seg3: 3 })}
              >
                <Text>Others</Text>
              </Button>
            </Segment>
            <Label>'If "Others", Please Specify in Responsible Details'</Label>
          </Item>

          <Item stackedLabel>
            <Label>Responsible Details</Label>
            <Input />
          </Item>
          <Item stackedLabel>
            <Label>Risk Level</Label>
            <Input />
          </Item>
          <Item stackedLabel>
            <Label>Remark</Label>
            <Input />
          </Item>
          <Item stackedLabel>
            <Label>Assigned To</Label>
            <Input />
          </Item>
        </Form>
      </Content>
      </Container>
    );
  }
}
