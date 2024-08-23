import { Box, Card, Group, Stack, Text } from "@mantine/core";
import { useCalibration } from "../../contexts/CalibrationContext";
import DisplayItem from "../CalibrationSettings/DisplayItem";



const CaliborationResults = () => {
    const { results } = useCalibration();
    
    if (!results) return null;

    return (
        <Card withBorder shadow="sm" radius="md">
            <Card.Section withBorder inheritPadding py="xs">
                <Group justify="space-between">
                <Text fw={500}>Calibration Test Results</Text>
                </Group>
            </Card.Section>

            <Text mt="sm" c="dimmed" size="sm">
                <Stack>
                    {results ? (
                        <>
                        <Box>
                            <DisplayItem title="No. Tests:" text={results.rotations} />
                        </Box>
                        <Box>
                            <DisplayItem title="Total Distance:" text={`${results.totalDistance}%`} />
                        </Box>
                        </>
                    ) : null}
                </Stack>
            </Text>
        </Card>
    );
}
    
export default CaliborationResults;