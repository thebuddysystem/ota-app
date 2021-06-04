import React from 'react';
import { HomeScreen } from './src/HomeScreen';
import UpdatesProvider from './src/UpdateProvider';

export default function App() {
    return (
        <UpdatesProvider>
            <HomeScreen />
        </UpdatesProvider>
    );
}
