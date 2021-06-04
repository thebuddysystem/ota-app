import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

// -----------------------------------------------------------------------------

type Props = {
    text?: string;
    size?: number;
    style?: {};
    onPress?: () => void;
};

// ----------------------------------------------------------------------------

export const TextButton = ({ text, style, onPress }: Props) => {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress} disabled={!onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

// ----------------------------------------------------------------------------

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        height: 32
    },
    text: {
        paddingHorizontal: 16
    }
});
