import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import App from './App.tsx'
import { createTheme, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import CalibrationProvider from './contexts/CalibrationContext.tsx';

const theme = createTheme({ /** Put your mantine theme override here */ });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Notifications />
      <main className="dark text-foreground bg-background">
        <CalibrationProvider>
          <App />
        </CalibrationProvider>
      </main>
    </MantineProvider>
  </StrictMode>,
)
