import React, { useEffect, useState } from 'react';
import * as Updates from 'expo-updates';

// -----------------------------------------------------------------------------
// Update Context
// -----------------------------------------------------------------------------

type UpdatesContextType = {
    updateAvailable: boolean;
    updateManifest: null | Updates.Manifest;
    updateError: null | string;
    reloadApp: () => void;
};

export const UpdatesContext = React.createContext<UpdatesContextType>({
    updateAvailable: false,
    updateManifest: null,
    updateError: null,
    reloadApp: () => {}
});

export const useUpdates = () => React.useContext(UpdatesContext);

// -----------------------------------------------------------------------------
// Auth Context Provider
// -----------------------------------------------------------------------------

const UpdatesProvider: React.FC = ({ children }) => {
    const [manifest, setManifest] = useState(null as null | Updates.Manifest);
    const [error, setError] = useState(null as null | string);

    useEffect(() => {
        const update_handler = Updates.addListener(event => {
            setError(event.type === Updates.UpdateEventType.ERROR ? event.message : null);
            setManifest(
                event.type === Updates.UpdateEventType.UPDATE_AVAILABLE ? event.manifest : null
            );

            return () => {
                update_handler.remove();
            };
        });
    }, []);

    return (
        <UpdatesContext.Provider
            value={{
                updateAvailable: manifest !== null,
                updateManifest: manifest,
                updateError: error,
                reloadApp: () => {
                    Updates.reloadAsync();
                }
            }}>
            {children}
        </UpdatesContext.Provider>
    );
};

export default UpdatesProvider;
