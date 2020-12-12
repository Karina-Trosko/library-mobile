import React, { Component } from "react";
import { SafeAreaView } from "react-navigation";
import { StatusBar, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import EStyleSheet from "react-native-extended-stylesheet";
import { list } from '../styles';

export class Page extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <SafeAreaView>
                <StatusBar barStyle="light-content" backgroundColor={EStyleSheet.value('$primaryDark')} />
                <View style={list.listContainer}>
                    {this.props.noScroll ? 
                    this.props.children :
                    <KeyboardAwareScrollView>
                        <View>
                            {this.props.children}
                        </View>
                    </KeyboardAwareScrollView>
                    }
                    {this.props.footer}
                </View>
            </SafeAreaView>
        );
    }
} 