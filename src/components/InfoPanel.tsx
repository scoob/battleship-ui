import { Alert, rem } from "@mantine/core";
import { useCalibration } from "../contexts/CalibrationContext";
import { IconAlertCircleFilled } from "@tabler/icons-react";

const InfoPanel = () => {
    const { canRun, results } = useCalibration();
    const alertIcon = <IconAlertCircleFilled style={{ width: rem(20), height: rem(20) }} />;
    if (canRun || results) return null;
    return (
        <Alert
            mt={'xl'}
            title="Info"
            color="blue"
            icon={alertIcon}
        >
            Set calibration settings and run calibration to view results
        </Alert>
    );
}
    
    export default InfoPanel;