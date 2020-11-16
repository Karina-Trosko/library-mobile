import React from 'react';
import { View } from "react-native";
import { Bunner } from "../../combo";
import { Button, Page, InputWithHint, Link } from "../../common";
import { signUpFields } from '../../config/const';
import { account } from '../../styles';

export const SignUp = () => (
    <Page>
        <Bunner title="Registration" />
        <View style={account.contentContainer}>
            {signUpFields.map(e => <InputWithHint hint={e.id} key={e.id} />)}
            <Button title='signUp' style={{ marginHorizontal: 0 }} />
        </View>
    </Page>
);