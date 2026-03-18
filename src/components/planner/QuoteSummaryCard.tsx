import { Divider, Stack, Typography } from '@mui/material';
import { DetailRow } from './DetailRow';
import { SectionCard } from './SectionCard';
import type { CedarPlanterBuildPlan, PlannerFormValues } from '../../types/planner';

const formatMoney = (value: number) => `$${value.toFixed(2)}`;

type QuoteSummaryCardProps = {
    values: PlannerFormValues;
    buildPlan: CedarPlanterBuildPlan | null;
};

export const QuoteSummaryCard = ({ values, buildPlan }: QuoteSummaryCardProps) => {
    return (
        <SectionCard title="Quote Summary">
            {buildPlan ? (
                <Stack spacing={1.25}>
                    <DetailRow label="Customer" value={values.customerName || 'Not entered'} />
                    <DetailRow label="Project" value={values.projectName} />
                    <DetailRow label="Board Stock" value={buildPlan.boardStock.label} />
                    <DetailRow label="Material Cost" value={formatMoney(buildPlan.materialCost)} />
                    <DetailRow label="Waste Adjusted" value={formatMoney(buildPlan.wasteAdjustedMaterialCost)} />
                    <DetailRow label="Hardware Overhead" value={formatMoney(buildPlan.overheadCost)} />
                    <Divider />
                    <DetailRow label="Total Build Height" value={`${buildPlan.totalBuildHeight}"`} />
                    <Typography variant="h4">${buildPlan.finalEstimate}</Typography>
                </Stack>
            ) : (
                <Typography color="text.secondary">Enter valid dimensions to generate the quote.</Typography>
            )}
        </SectionCard>
    );
};