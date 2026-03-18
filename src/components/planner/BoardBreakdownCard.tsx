import { Divider, Stack, Typography } from '@mui/material';
import { DetailRow } from './DetailRow';
import { SectionCard } from './SectionCard';
import type { CedarPlanterBuildPlan } from '../../types/planner';

type BoardBreakdownCardProps = {
    buildPlan: CedarPlanterBuildPlan | null;
};

export const BoardBreakdownCard = ({ buildPlan }: BoardBreakdownCardProps) => {
    return (
        <SectionCard title="Board Breakdown">
            {buildPlan ? (
                <Stack spacing={1.25}>
                    <DetailRow label="Side Boards" value={String(buildPlan.sideBoardCount)} />
                    <DetailRow label="Bottom Boards" value={String(buildPlan.bottomBoardCount)} />
                    <DetailRow label="Leg Boards" value={String(buildPlan.legBoardCount)} />
                    <DetailRow label="Support Boards" value={String(buildPlan.supportBoardCount)} />
                    <Divider />
                    <DetailRow label="Total Boards" value={String(buildPlan.boardCount)} />
                </Stack>
            ) : (
                <Typography color="text.secondary">Board totals will appear here.</Typography>
            )}
        </SectionCard>
    );
};