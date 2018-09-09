const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  imageContainer: {
    flex: 1,
    width: null,
    height: null
  },
  logoContainer: {
    flex: 1,
    marginTop: deviceHeight / 8,
    marginBottom: 30
  },
  logo: {
    position: "absolute",
    left: (deviceWidth - 210) / 2,
    top: Platform.OS === "android" ? 35 : 60,
    width: 210,
    height: 145
  },
  text: {
    color: "#D8D8D8",
    bottom: 6,
    marginTop: 5
  },
  loginform:{
	width: 300,
	marginTop: 10,
	marginBottom: 100,
	left: (deviceWidth - 300) / 2,
	backgroundColor: "#FFF",
	justifyContent: 'center',
    alignItems: 'center'
  },
  loginfields:{
	width: 230

  },
  loginbutton:{
	backgroundColor: "#cc0013",
	alignSelf: "center",
	marginTop: 30,
	marginBottom: 30,
	width: 230,
	height: 40,
	flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
};
