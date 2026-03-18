import { Box, Button, Stack, Typography } from '@mui/material';
import type { CedarPlanterBuildPlan } from '../../types/planner';

type MobileSummaryBarProps = {
    buildPlan: CedarPlanterBuildPlan | null;
};

export const MobileSummaryBar = ({ buildPlan }: MobileSummaryBarProps) => {
    if (!buildPlan) {
        return null;
    }

    return (
        <Box
            sx={{
                position: 'sticky',
                bottom: 0,
                zIndex: 20,
                pt: 1,
                pb: 'calc(env(safe-area-inset-bottom, 0px) + 12px)',
                background:
                    'linear-gradient(to top, rgba(245,245,244,1) 70%, rgba(245,245,244,0))',
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
                        variant="contained"
                        size="small"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        Top
                    </Button>
                </Stack>
            </Box>
        </Box>
    );
};