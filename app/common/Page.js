import React, { Component } from "react";
import { SafeAreaView } from "react-navigation";
import { StatusBar, View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

export class Page extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <SafeAreaView>
                <StatusBar barStyle="light-content" backgroundColor={EStyleSheet.value('$primaryDark')}/>
                <View style={{ backgroundColor: EStyleSheet.value('$white') }}>
                    {this.props.children}
                </View>
           </SafeAreaView>
        );
    }
}