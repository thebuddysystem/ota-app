import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { expo } from '../app.json';

import { useUpdates } from './UpdateProvider';
import { TextButton } from './TextButton';

export const HomeScreen = () => {
    const { updateAvailable, updateManifest, reloadApp } = useUpdates();

    const buttonText = updateAvailable
        ? `Update Available: v.${updateManifest?.version} - Update & Reload App`
        : `No Update Available - Reload App`;

    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'flex-start' }}>
                <StatusBar style='auto' />
                <Text>OTA Test App</Text>
                <Text>Current Version: {`${expo.version}`}</Text>
                <Text>{`Update available: ${updateAvailable}`}</Text>
                <TextButton text={buttonText} style={styles.button} onPress={reloadApp} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        borderWidth: 1,
        borderColor: 'grey',
        backgroundColor: 'pink',
        marginVertical: 16
    }
});
