import { Box, Stack, Typography } from '@mui/material';

export const PlannerHeader = () => {
    return (
        <Box sx={{ pt: 3, pb: 1 }}>
            <Stack spacing={0.5}>
                <Typography variant="h4">Build Planner</Typography>
                <Typography variant="body2" color="text.secondary">
                    Internal quote, material, and cut list tool
                </Typography>
            </Stack>
        </Box>
    );
};