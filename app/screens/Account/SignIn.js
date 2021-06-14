import React, { useState } from 'react';
import { View } from "react-native";
import { Bunner } from "../../combo";
import { Button, Page, InputWithHint, Link, SubTitle } from "../../common";
import { sighInFields } from '../../config/const';
import { userApi } from '../../services/api';
import { account } from '../../styles';
import actions from '../../actions';

export const SignIn = ({ navigation }) => {
    const [value, setValue] = useState('');
    const [data, setData] = useState({});
    return (
    <Page>
        <Bunner title="SIGN IN" />
        <View style={account.contentContainer}>
            {sighInFields.map(e => <InputWithHint hint={e.id} key={e.id} onChange={(v) => { setData({ ...data, [e.id]: v}) }} />)}
            <Button title='signIn' style={{ marginHorizontal: 0 }} onPress={() =>{
                console.log('data: ', data);
                userApi.signIn({
                    username: data?.userName,
                    password: data?.password
                }, (res) => {
                    if (res?.username) {
                        actions.setupAuthUser(res);
                        navigation.navigate('Home');
                    } else {
                        console.log('res: ', res);
                        setValue(res);
                    }
                });
                // navigation.navigate('Home'); 
                }}/>
        </View>
        <SubTitle>{value}</SubTitle>
        <Link title='Sign up' style={{ textAlign: 'center', marginTop: 20 }} onPress={() => navigation.navigate('SignUp')} />
    </Page>
)};