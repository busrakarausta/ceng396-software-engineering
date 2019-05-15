import React, { Component } from "react";
import { View, Text, TouchableHighlight,Image } from "react-native";

export default class Card extends Component {
  render() {
    const {
      title,
      subtitle,
      date,
      time,
      status,
      bordercolor,
      onPress,
      background
    } = this.props;

    return (
      <TouchableHighlight
        style={[styles.containerStyle, { borderColor: bordercolor }]}
        //onPress={onPress}    
          >
      
          <View style={styles.innerContainer}>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Image
          style={{width: 50, height: 80}}
          source={{uri: 'http://www.soidergi.com/wp-content/uploads/pn/png-cartoon-person-illustration-vector-cartoon-materia.jpg'}}
           />
            <Text style={{ fontSize: 18, fontWeight:"bold" }} numberOfLines={10}>{title} </Text>

            <Text style={{ fontSize: 18, color: "#191818" }}>{subtitle}</Text>
        
           </View>
        
            <View
              style={{ flexDirection: "row", justifiyContent: "flex-end" , marginTop:10 }}
            />
            <Text style={{ fontSize: 16, color: bordercolor }}> {status}</Text>
            <View style={{ marginBottom: 5 }}>{this.props.children}</View>
          </View>
      </TouchableHighlight>
    );
  }
}

const styles = {
  containerStyle: {
    alignItems: "stretch",
    backgroundColor: "#fffbf7",
    borderRadius: 15,
    borderLeftWidth: 3,
    borderRightWidth:3,
    borderWidth: 0,
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
    shadowOffset: {
      width: 5,
      height: 1,
      elevation   : 5
    },
    shadowRadius: 5,
    shadowOpacity: 0.7,
    shadowColor: "#fffbf7",
    elevation: 3
  },
  innerContainer: {
    alignItem: "stretch",
    justifyContent: "space-evenly",
    top: 20,
    left: 20,
    right: 40,
    paddingBottom: 20
  }
};
