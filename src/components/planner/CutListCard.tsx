import { Box, Divider, Stack, Typography } from '@mui/material';
import { SectionCard } from './SectionCard';
import type { CedarPlanterBuildPlan } from '../../types/planner';

type CutListCardProps = {
    buildPlan: CedarPlanterBuildPlan | null;
};

export const CutListCard = ({ buildPlan }: CutListCardProps) => {
    return (
        <SectionCard title="Cut List">
            {buildPlan ? (
                <Stack spacing={1.5}>
                    {buildPlan.cutList.map((item) => (
                        <Box
                            key={`${item.label}-${item.length}`}
                            sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}
                        >
                            <Typography>{item.label}</Typography>
                            <Typography sx={{ fontWeight: 700 }}>
                                {item.quantity} @ {item.length}"
                            </Typography>
                        </Box>
                    ))}

                    <Divider />

                    <Typography variant="body2" color="text.secondary">
                        Leg and support board counts are included above. Exact leg and support cut sizes can be
                        added next once you define your shop rules.
                    </Typography>
                </Stack>
            ) : (
                <Typography color="text.secondary">Cut list will appear here.</Typography>
            )}
        </SectionCard>
    );
};