
import { Container, Divider, Paper, Title, Grid, SimpleGrid } from '@mantine/core';
import CalibrationForm from './components/CalibrationForm';
import ErrorPanel from './components/ErrorPanel';
import CalibrationSettings from './components/CalibrationSettings';
import CaliborationResults from './components/CalibrationResults';
import RunButton from './components/RunButton';
import InfoPanel from './components/InfoPanel';


const App = () => (
  <Container size="md">
    <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
      <Paper radius="md" p="xl" shadow="xs">
        <Title order={2}>
          Battleship Turret Calibration
        </Title>
        <Divider label="Turret Calibration Settings" labelPosition="center" my="lg" />
        <CalibrationForm />
         <InfoPanel />
        <ErrorPanel />
      </Paper>
      <Grid gutter="md" mt={'xl'} pt={'md'}>
        <Grid.Col>
          <CalibrationSettings />
        </Grid.Col>
        <Grid.Col>
          <CaliborationResults />
          <RunButton />
        </Grid.Col>
      </Grid>
        
    </SimpleGrid>
  </Container>
);

export default App
