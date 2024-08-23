import { Stack, Box, Card, Group, Text } from "@mantine/core";
import { useCalibration } from "../../contexts/CalibrationContext";
import DisplayItem from "./DisplayItem";

const CalibrationSettings = () => {
  const { settings } = useCalibration();
  if (!settings) return null;
  return (
    <Card withBorder shadow="sm" radius="md">
      <Card.Section withBorder inheritPadding py="xs">
        <Group justify="space-between">
          <Text fw={500}>Calibration Settings</Text>
        </Group>
      </Card.Section>

        <Stack>
          <Box>
            <DisplayItem title="Caliber:" text={`${settings?.caliber}mm`} />
          </Box>
          <Box>
            <DisplayItem title="Location:" text={settings?.location} />
          </Box>
          <Box>
            <DisplayItem title="Rotation Start:" text={`${settings?.rotationStart}%`} />
          </Box>
          <Box>
            <DisplayItem title="Rotation End:" text={`${settings?.rotationEnd}%`} />
          </Box>
          <Box>
            <DisplayItem title="Rotations:" text={settings?.rotations} />
          </Box>
        </Stack>
    </Card>
  )
};

export default CalibrationSettings;