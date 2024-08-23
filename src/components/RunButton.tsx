import { Button, rem } from "@mantine/core";
import { useCalibration } from "../contexts/CalibrationContext";
import { IconPlayerPlayFilled } from "@tabler/icons-react";



const RunButton = () => {
    const { apiRunCalibration, canRun } = useCalibration();
    const playIcon = <IconPlayerPlayFilled style={{ width: rem(20), height: rem(20) }} />;

    if (!canRun) return null;
    
    return (
        <Button variant="light" fullWidth onClick={() => apiRunCalibration()} leftSection={playIcon}>Run Calibration</Button>
    );
}


export default RunButton;