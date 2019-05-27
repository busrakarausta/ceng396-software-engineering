import {
  StyleSheet,
  View,
  TouchableHighlight,
  Dimensions,
  Animated,
  Text,
  Image
} from "react-native";
import React, { Component } from "react";

import Svg, {
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop
} from "react-native-svg";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedPath = Animated.createAnimatedComponent(Path);

class TabBarItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let child = this.props.children;

    if (child.length && child.length > 0) {
      throw new Error(
        "onlyChild must be passed a children with exactly one child."
      );
    }

    return <View style={{ backgroundColor: "transparent" }}>{child}</View>;
  }
}

export default class StaticBar extends Component {
  constructor(props) {
    super(props);
    this._navigateTo = this._navigateTo.bind(this);
    if (this.props.children.length != 3) {
      throw new Error("Three tab should be work.");
    }
    this.state = {
      selectedIndex: 1,
      defaultPage: 1,
      navFontSize: 12,
      navTextColor: "rgb(148, 148, 148)",
      navTextColorSelected: "rgb(51, 163, 244)",
      circleRadius: new Animated.Value(530),
      pathD: new Animated.Value(357),
      pathX: "357",
      pathY: "675",
      pathA: "689",
      pathB: "706",
      showIcon: true
    };

    this.state.circleRadius.addListener(circleRadius => {
      this._myCircle.setNativeProps({ cx: circleRadius.value.toString() });
    });

    this.state.pathD.addListener(a => {
      this.setState({
        pathX: a.value.toString(),
        pathY: (318 + parseInt(a.value)).toString(),
        pathA: (330 + parseInt(a.value)).toString(),
        pathB: (350 + parseInt(a.value)).toString()
      });
    });
  }

  _navigateTo(i) {
    if (i == 0) this.props.navigation.navigate("Doing");
    if (i == 1) this.props.navigation.navigate("Discover");
    if (i == 2) this.props.navigation.navigate("Done");
  }

  render() {
    const { children } = this.props;
    const {
      selectedIndex,
      navFontSize,
      navTextColor,
      navTextColorSelected,
      showIcon
    } = this.state;

    let _d;
    if (
      this.state.pathY == "" &&
      this.state.pathA == "" &&
      this.state.pathB == ""
    ) {
      _d = `1c-1.1-17.2,12.7-31.7,29.9-31.7h21.3c16.6`;
    } else {
      _d = `M30,60h${
        this.state.pathX
      }.3c17.2,0,31,14.4,30,31.6c-0.2,2.7-0.3,5.5-0.3,8.2c0,71.2,58.1,129.6,129.4,130c72.1,0.3,130.6-58,130.6-130c0-2.7-0.1-5.4-0.2-8.1c-1.1-17.2,12.7-31.7,29.9-31.7h21.3c16.6,0,30,13.4,30,30v94c0,42-34,76-76,76H76c-42,0-76-34-76-76V90C0,73.4,13.4,60,30,60z`;
    }

    return (
      <View style={[styles.content]}>
        <View style={styles.subContent}>
          {React.Children.map(children, (child, i) => {
            const imgSrc =
              selectedIndex == i && showIcon ? (
                <TouchableHighlight
                  onPress={() =>
                    this.props.navigation.navigate("CreateProject")
                  }
                  style={styles.circle}
                >
                  <Image
                    style={styles.navImage}
                    resizeMode="cover"
                    source={child.props.selectedIcon}
                  />
                </TouchableHighlight>
              ) : (
                <Image
                  style={styles.navImage}
                  resizeMode="cover"
                  source={child.props.icon}
                />
              );
            return (
              <TouchableHighlight
                key={i}
                onPressOut={() => this._navigateTo(i)}
                underlayColor={"transparent"}
                style={styles.navItem}
                onPress={() => this.update(i)}
              >
                {imgSrc}
              </TouchableHighlight>
            );
          })}
        </View>
        <Svg
          version="1.1"
          id="bottom-bar"
          x="0px"
          y="0px"
          width="100%"
          height="100"
          viewBox="0 0 1092 260"
          space="preserve"
        >
          <Defs>
            <LinearGradient id="grad" x1="0" y1="0" x2="750" y2="0">
              <Stop
                offset="0"
                stopColor="rgba(252,183,12,0.65)"
                stopOpacity="1"
              />
              <Stop offset="1" stopColor="rgba(255,92,108,1)" stopOpacity="1" />
            </LinearGradient>
          </Defs>
          <AnimatedPath
            fill="url(#grad)"
            d={`M30,60h${
              this.state.pathX
            }.3c17.2,0,31,14.4,30,20.6c-0.2,2.7-0.3,5.5-0.3,8.2c0,71.2,58.1,129.6,129.4,130c72.1,0.3,130.6-58,130.6-130c0-2.7-0.1-5.4-0.2-8.1C${
              this.state.pathY
            }.7,74.5,${this.state.pathA}.5,60,${
              this.state.pathB
            }.7,60H1062c16.6,0,30,13.4,30,40v94c0,42-34,76-76,76H76c-42,0-76-34-76-76V90C0,73.4,13.4,60,30,60z`}
          />
          <AnimatedCircle
            ref={ref => (this._myCircle = ref)}
            fill="rgba(252,183,12,0.3)"
            cx="546"
            cy="100"
            r="90"
          />
        </Svg>
      </View>
    );
  }
  update(index) {
    let that = this;
    that.setState({
      selectedIndex: index,
      showIcon: false
    });
    if (index == 0) {
      Animated.spring(that.state.pathD, {
        toValue: 22,
        duration: 10,
        friction: 10
      }).start();
      setTimeout(function() {
        that.setState({
          showIcon: true
        });
      }, 100);
      Animated.spring(that.state.circleRadius, {
        toValue: 211,
        friction: 10
      }).start();
    } else if (index == 2) {
      Animated.spring(that.state.pathD, {
        toValue: 691,
        duration: 10,
        friction: 10
      }).start();

      setTimeout(function() {
        that.setState({
          showIcon: true
        });
      }, 100);
      Animated.spring(that.state.circleRadius, {
        toValue: 880,
        friction: 10
      }).start();
    } else {
      Animated.spring(that.state.pathD, {
        toValue: 357,
        duration: 10,
        friction: 10
      }).start();

      setTimeout(function() {
        that.setState({
          showIcon: true
        });
      }, 100);
      Animated.spring(that.state.circleRadius, {
        toValue: 546,
        friction: 10
      }).start();
    }
  }
}
StaticBar.Item = TabBarItem;
const styles = StyleSheet.create({
  content: {
    backgroundColor: "transparent",
    flexDirection: "column",
    zIndex: -1,
    width: "100%",
    marginBottom: "-5%",
    left: "0%",
    right: "0%"
  },
  subContent: {
    backgroundColor: "transparent",
    flexDirection: "row",
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
    zIndex: 1,
    position: "absolute",
    bottom: 5
  },
  navItem: {
    flex: 1,
    alignSelf: "center",
    left: 1,
    paddingBottom: 20,
    alignItems: "center",
    zIndex: 0
  },
  navImage: {
    width: 30,
    height: 30
  },
  circle: {
    justifyContent: "center",
    alignItems: "center",
    bottom: 10
  }
});
