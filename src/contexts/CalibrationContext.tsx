import { createContext, useContext, useMemo, useState } from "react";
import { ICalibrationResults } from "../components/CalibrationResults/calibrationResults.interface";
import { ICalibrationSettings } from "../components/CalibrationSettings/calibrationSettings.interface";
import { notifications } from '@mantine/notifications';

interface ICalibrationContext {
    results: ICalibrationResults | null;
    setResults: React.Dispatch<React.SetStateAction<ICalibrationResults | null>>;
    settings: ICalibrationSettings | null;
    setSettings: React.Dispatch<React.SetStateAction<ICalibrationSettings | null>>;
    canRun: boolean;
    setCanRun: React.Dispatch<React.SetStateAction<boolean>>;
    errors: string[];
    setErrors: React.Dispatch<React.SetStateAction<string[]>>;
    apiSetCalibration: (values: ICalibrationSettings) => Promise<void>;
    apiRunCalibration: () => Promise<void>;
};

const CalibrationContext = createContext<ICalibrationContext>({
    results: null,
    setResults: () => null,
    settings: null,
    setSettings: () => null,
    canRun: false,
    setCanRun: () => false,
    errors: [],
    setErrors: () => [],
    apiSetCalibration: async () => { },
    apiRunCalibration: async () => { }
});

export const useCalibration = () => useContext(CalibrationContext);

const CalibrationProvider = ({ children }: { children: React.ReactNode }) => {
    const [showRun, setShowRun] = useState<boolean>(false);
    const [calibrationResults, setCalibrationResults] = useState<ICalibrationResults | null>(null);
    const [calibrationSettings, setCalibrationSettings] = useState<ICalibrationSettings | null>(null);
    const [errors, setErrors] = useState<string[]>([]);

    const apiSetCalibration = async (values: ICalibrationSettings) => {
        await fetch(`${import.meta.env.VITE_APP_API_URL}/calibration/settings`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values),
        }).then((response) => {
            if (!response.ok) {
                return response.json().then(errorData => {
                    throw errorData;
                });
            }
            return response.json();
        })
        .then((results) => {
            setCalibrationSettings({ ...results });
            setErrors([]);
            setCalibrationResults(null);
            setShowRun(true);

            notifications.show({ title: 'Success', message: 'Calibration settings successfully set', color: 'green' });
        }).catch((error) => {
            setErrors(error.message);
            setShowRun(false);

            notifications.show({ title: 'Error', message: 'Calibration settings failed to set', color: 'red' });
        });
    };

    const apiRunCalibration = async () => {
        await fetch(`${import.meta.env.VITE_APP_API_URL}/calibration/run`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((response) => {
            if (!response.ok) {
                return response.json().then(errorData => {
                    throw errorData;
                });
            }
            return response.json();
        })
        .then((results) => {
            setCalibrationResults({ ...results });
            setErrors([]);

            notifications.show({ title: 'Success', message: 'Calibration tests successfully run', color: 'green' });
        }).catch((error) => {
            setErrors(error.message);
            setCalibrationSettings(null);
            notifications.show({ title: 'Error', message: 'Calibration tests failed to run', color: 'red' });
        }).finally(() => {
            setShowRun(false);
        });
    }
    
    const context = useMemo(() => ({
        results: calibrationResults,
        setResults: setCalibrationResults,
        settings: calibrationSettings,
        setSettings: setCalibrationSettings,
        canRun: showRun,
        setCanRun: setShowRun,
        errors,
        setErrors,
        apiSetCalibration,
        apiRunCalibration
    }), [calibrationResults,
        calibrationSettings,
        showRun,
        errors
    ]);

    return (
        <CalibrationContext.Provider value={context}>
            {children}
        </CalibrationContext.Provider>
    );
}


export default CalibrationProvider;




