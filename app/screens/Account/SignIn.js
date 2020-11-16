import React from 'react';
import { View } from "react-native";
import { Bunner } from "../../combo";
import { Button, Page, InputWithHint, Link } from "../../common";
import { sighInFields } from '../../config/const';
import { account } from '../../styles';

export const SignIn = () => (
    <Page>
        <Bunner title="SIGN IN" />
        <View style={account.contentContainer}>
            {sighInFields.map(e => <InputWithHint hint={e.id} key={e.id} />)}
            <Button title='signIn' style={{ marginHorizontal: 0 }} />
        </View>
        <Link title='Sign up' style={{ textAlign: 'center', marginTop: 20 }} />
    </Page>
);