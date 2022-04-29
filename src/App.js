import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <div className="App" style={{
      backgroundColor: 'blue',
      width: '100vw',
      height: '100vh'
    }}>
      <>
        <h1>Hello {user.username}</h1>
        <button onClick={signOut}>Sign out</button>
      </>
    </div>
  );
}

export default withAuthenticator(App);
