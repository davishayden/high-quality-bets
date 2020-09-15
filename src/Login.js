import React from 'react';
import AuthUi from "./AuthUi";
import {AmplifySignOut} from "@aws-amplify/ui-react";
//import { withAuthenticator } from '@aws-amplify/ui-react'


class Login extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <AuthUi />
                        <AmplifySignOut />

                    </div>
                </div>
            </div>
        )
    }
}
export default Login