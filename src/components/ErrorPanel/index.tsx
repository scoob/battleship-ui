import { Alert, Stack, Text, rem } from "@mantine/core";
import { IconXboxXFilled } from "@tabler/icons-react";
import { useCalibration } from "../../contexts/CalibrationContext";

const ErrorPanel = () => {
    const { errors, setErrors } = useCalibration();
    const xIcon = <IconXboxXFilled style={{ width: rem(20), height: rem(20) }} />;
    
    if (!errors.length) return null;

    return (
        <Alert  
            title="Error"
            color="red"
            icon={xIcon}
            withCloseButton
            onClose={() => setErrors([])}
            mt="md"
        >
            <Stack>
            {errors.map((error, index) => (
                <Text key={index}>{error}</Text>
            ))}
            </Stack>
        </Alert>
    );
}
    

export default ErrorPanel;