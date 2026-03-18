import { Box, Button, Stack, Typography } from '@mui/material';
import type { CedarPlanterBuildPlan } from '../../types/planner';

type MobileSummaryBarProps = {
    buildPlan: CedarPlanterBuildPlan | null;
};

export const MobileSummaryBar = ({ buildPlan }: MobileSummaryBarProps) => {
    if (!buildPlan) return null;

    return (
        <Box
            sx={{
                position: 'sticky',
                bottom: 12,
                zIndex: 10,
                mt: 2,
            }}
        >
            <Box
                sx={{
                    border: '1px solid',
                    borderColor: 'divider',
                    bgcolor: 'background.paper',
                    borderRadius: 3,
                    px: 2,
                    py: 1.5,
                    boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                }}
            >
                <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                    <Box>
                        <Typography variant="caption" color="text.secondary">
                            Estimated price
                        </Typography>
                        <Typography variant="h6">${buildPlan.finalEstimate}</Typography>
                    </Box>

                    <Button
                        variant="outlined"
                        size="small"
                        onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                    >
                        Top
                    </Button>
                </Stack>
            </Box>
        </Box>
    );
};