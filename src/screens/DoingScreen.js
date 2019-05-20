import React, { Component } from "react";
import CalendarHeatmap from "react-native-calendar-heatmap";
import { View, Text, Platform } from "react-native";

export default class DoingScreen extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <CalendarHeatmap
        endDate={new Date("2016-02-01")}
        numDays={50}
        values={[
          { date: "2016-01-01" },
          { date: "2016-01-22" },
          { date: "2016-01-28" }
        ]}
      />
    );
  }
}
