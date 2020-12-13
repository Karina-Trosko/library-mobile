import React, { useState } from 'react';
import { View } from "react-native";
import { Bunner } from "../../combo";
import { Button, Page, InputWithHint, Link, SubTitle } from "../../common";
import { sighInFields } from '../../config/const';
import { bookApi } from '../../services/api';
import { account } from '../../styles';

export const SignIn = ({  }) => {
    const [value, setValue] = useState('');
    return (
    <Page>
        <Bunner title="SIGN IN" />
        <View style={account.contentContainer}>
            {sighInFields.map(e => <InputWithHint hint={e.id} key={e.id} />)}
            <Button title='signIn' style={{ marginHorizontal: 0 }} onPress={() => {
bookApi.getBooks((data)=>setValue(data));
                }
            }/>
        </View>
        <SubTitle>{value}</SubTitle>
        <Link title='Sign up' style={{ textAlign: 'center', marginTop: 20 }} />
    </Page>
)};