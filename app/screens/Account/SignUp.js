import React, { useState } from 'react';
import { View } from "react-native";
import { Bunner } from "../../combo";
import { Button, Page, InputWithHint, SubTitle } from "../../common";
import { signUpFields } from '../../config/const';
import { userApi } from '../../services/api';
import { account } from '../../styles';
import actions from '../../actions';

export const SignUp = ({ navigation }) => {
    const [value, setValue] = useState('');
    const [data, setData] = useState({});
    return(
    <Page>
        <Bunner title="Registration" />
        <View style={account.contentContainer}>
            {signUpFields.map(e => <InputWithHint hint={e.id} key={e.id} onChange={(v) => { setData({ ...data, [e.id]: v}) }} />)}
            <SubTitle>{value}</SubTitle>
            <Button title='signUp' style={{ marginHorizontal: 0 }} onPress={() => {
                userApi.signUp(
                    {
                        username: data?.userName,
                        password: data?.password,
                        name: data?.FirstName,
                        surname: data?.Surname,
                        contactDetails: data?.contactDetails,
                    }, (res) => {
                        if (res?.username) {
                            console.log('reees: ', res);
                            actions.setupAuthUser(res);
                            navigation.navigate('Home');
                        } else {
                            console.log('res: ', res);
                            setValue(res);
                        }
                    }
                );
            }} />
        </View>
    </Page>
)};