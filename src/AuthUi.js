import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react'


class AuthUi extends React.Component {

    render() {
        return (
            <div className='row'></div>
        )
    }
}
export default withAuthenticator(AuthUi)