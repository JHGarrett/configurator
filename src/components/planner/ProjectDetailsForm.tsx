import { Button, Stack, TextField } from '@mui/material';
import { SectionCard } from './SectionCard';
import type { PlannerFormValues } from '../../types/planner';

type ProjectDetailsFormProps = {
    values: PlannerFormValues;
    lengthError: string;
    depthError: string;
    planterHeightError: string;
    legHeightError: string;
    onChange: <K extends keyof PlannerFormValues>(key: K, value: PlannerFormValues[K]) => void;
    onReset: () => void;
};

export const ProjectDetailsForm = ({
                                       values,
                                       lengthError,
                                       depthError,
                                       planterHeightError,
                                       legHeightError,
                                       onChange,
                                       onReset,
                                   }: ProjectDetailsFormProps) => {
    return (
        <SectionCard
            title="Build Inputs"
            action={
                <Button size="small" onClick={onReset}>
                    Reset
                </Button>
            }
        >
            <Stack spacing={2}>
                <TextField
                    label="Customer Name"
                    value={values.customerName}
                    onChange={(event) => onChange('customerName', event.target.value)}
                    fullWidth
                />

                <TextField
                    label="Project Name"
                    value={values.projectName}
                    onChange={(event) => onChange('projectName', event.target.value)}
                    fullWidth
                />

                <TextField
                    label="Length"
                    type="number"
                    value={values.width}
                    onChange={(event) => onChange('width', event.target.value)}
                    error={Boolean(lengthError)}
                    helperText={lengthError || 'Interior length in inches'}
                    inputProps={{ min: 1, max: 96 }}
                    fullWidth
                />

                <TextField
                    label="Depth"
                    type="number"
                    value={values.depth}
                    onChange={(event) => onChange('depth', event.target.value)}
                    error={Boolean(depthError)}
                    helperText={depthError || 'Interior depth in inches'}
                    inputProps={{ min: 1, max: 96 }}
                    fullWidth
                />

                <TextField
                    label="Planter Box Height"
                    type="number"
                    value={values.planterHeight}
                    onChange={(event) => onChange('planterHeight', event.target.value)}
                    error={Boolean(planterHeightError)}
                    helperText={planterHeightError || 'Box height only, not legs'}
                    inputProps={{ min: 1 }}
                    fullWidth
                />

                <TextField
                    label="Leg Height"
                    type="number"
                    value={values.legHeight}
                    onChange={(event) => onChange('legHeight', event.target.value)}
                    error={Boolean(legHeightError)}
                    helperText={legHeightError || 'Used for total build height'}
                    inputProps={{ min: 0 }}
                    fullWidth
                />

                <TextField
                    label="Notes"
                    value={values.notes}
                    onChange={(event) => onChange('notes', event.target.value)}
                    multiline
                    minRows={4}
                    fullWidth
                />
            </Stack>
        </SectionCard>
    );
};