import { CssBaseline, ThemeProvider } from '@mui/material';
import { PlannerDashboard } from './features/planner/PlannerDashboard';
import { theme } from './theme';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <PlannerDashboard />
        </ThemeProvider>
    );
};

export default App;