import { Stack, NumberInput, Radio, Group, Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import { ICalibrationSettings } from "../CalibrationSettings/calibrationSettings.interface";
import { useCalibration } from "../../contexts/CalibrationContext";

const CalibrationForm = () => {
  const { apiSetCalibration } = useCalibration();
  const form = useForm<ICalibrationSettings>({
    mode: 'uncontrolled',
    initialValues: {
      caliber: 102,
      rotationStart: 0,
      rotationEnd: 0,
      location: 'Bow',
      rotations: 1
    },

    validate: {}, // exclude UI validation to showcase API DTO Validation
  });
  return (
    <form onSubmit={form.onSubmit(apiSetCalibration)}>
      <Stack>
        <NumberInput
          description="Min: 102mm, Max: 450mm"
          label="Caliber"
          key={form.key('caliber')}
          {...form.getInputProps('caliber')}
        />
        <Radio.Group
          name="location"
          label="Location"
          key={form.key('location')}
          {...form.getInputProps('location', { defaultValue: 'Bow' })}
        >
          <Group mt="xs">
            <Radio value="Bow" label="Bow" />
            <Radio value="Stern" label="Stern" />
          </Group>
        </Radio.Group>
        <NumberInput
          description="Min: 0%, Max: 180%"
          min={0}
          max={180}
          label="Rotation Start"
          key={form.key('rotationStart')}
          {...form.getInputProps('rotationStart')}
        />
        <NumberInput
          description="Min: 0%, Max: 180%"
          min={0}
          max={180}
          label="Rotation End"
          key={form.key('rotationEnd')}
          {...form.getInputProps('rotationEnd')}
        />
        <NumberInput
          description="Min: 1"
          label="Rotations"
          key={form.key('rotations')}
          {...form.getInputProps('rotations')}
        />
              
      </Stack>
      <Group justify="flex-end" mt="md">
        <Button type="submit">Set Calibration Settings</Button>
      </Group>
    </form>
  )
};

export default CalibrationForm;