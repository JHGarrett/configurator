import { useEffect, useMemo, useState } from 'react';
import { Box, Container, Stack } from '@mui/material';
import { PRODUCTS, INITIAL_VALUES, STORAGE_KEY } from '../../data/products';
import { ProductSelector } from '../../components/planner/ProductSelector';
import { ProjectDetailsForm } from '../../components/planner/ProjectDetailsForm';
import { QuoteSummaryCard } from '../../components/planner/QuoteSummaryCard';
import { BoardBreakdownCard } from '../../components/planner/BoardBreakdownCard';
import { CutListCard } from '../../components/planner/CutListCard';
import { NotesCard } from '../../components/planner/NotesCard';
import { PlannerHeader } from '../../components/planner/PlannerHeader';
import { MobileSummaryBar } from '../../components/planner/MobileSummaryBar';
import { calculateCedarPlanterBuildPlan } from '../../lib/planner/calculateCedarPlanterBuildPlan';
import type { PlannerFormValues } from '../../types/planner';

const getLengthError = (value: string) => {
    if (!value.trim()) return 'Enter a length.';
    const numericValue = Number(value);

    if (Number.isNaN(numericValue) || numericValue <= 0) {
        return 'Length must be greater than 0.';
    }

    if (numericValue > 96) {
        return 'This planner currently supports lengths up to 96 inches.';
    }

    return '';
};

const getDepthError = (value: string) => {
    if (!value.trim()) return 'Enter a depth.';
    const numericValue = Number(value);

    if (Number.isNaN(numericValue) || numericValue <= 0) {
        return 'Depth must be greater than 0.';
    }

    if (numericValue > 96) {
        return 'This planner currently supports depths up to 96 inches.';
    }

    return '';
};

const getPlanterHeightError = (value: string) => {
    if (!value.trim()) return 'Enter a planter height.';
    const numericValue = Number(value);

    if (Number.isNaN(numericValue) || numericValue <= 0) {
        return 'Planter height must be greater than 0.';
    }

    return '';
};

const getLegHeightError = (value: string) => {
    if (!value.trim()) return 'Enter a leg height.';
    const numericValue = Number(value);

    if (Number.isNaN(numericValue) || numericValue < 0) {
        return 'Leg height must be 0 or greater.';
    }

    return '';
};

export const PlannerDashboard = () => {
    const [selectedProductId, setSelectedProductId] = useState(PRODUCTS[0].id);

    const [values, setValues] = useState<PlannerFormValues>(() => {
        const saved = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null;

        if (!saved) {
            return INITIAL_VALUES;
        }

        try {
            return JSON.parse(saved) as PlannerFormValues;
        } catch {
            return INITIAL_VALUES;
        }
    });

    useEffect(() => {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
    }, [values]);

    const lengthError = useMemo(() => getLengthError(values.width), [values.width]);
    const depthError = useMemo(() => getDepthError(values.depth), [values.depth]);
    const planterHeightError = useMemo(
        () => getPlanterHeightError(values.planterHeight),
        [values.planterHeight],
    );
    const legHeightError = useMemo(() => getLegHeightError(values.legHeight), [values.legHeight]);

    const buildPlan = useMemo(() => {
        if (selectedProductId !== 'cedar-planter') {
            return null;
        }

        const width = Number(values.width);
        const depth = Number(values.depth);
        const planterHeight = Number(values.planterHeight);
        const legHeight = Number(values.legHeight);

        if (!width || !depth || !planterHeight) {
            return null;
        }

        if (lengthError || depthError || planterHeightError || legHeightError) {
            return null;
        }

        try {
            return calculateCedarPlanterBuildPlan({
                width,
                depth,
                planterHeight,
                legHeight,
            });
        } catch {
            return null;
        }
    }, [selectedProductId, values, lengthError, depthError, planterHeightError, legHeightError]);

    const updateValue = <K extends keyof PlannerFormValues>(
        key: K,
        value: PlannerFormValues[K],
    ) => {
        setValues((current) => ({
            ...current,
            [key]: value,
        }));
    };

    const handleReset = () => {
        setValues(INITIAL_VALUES);
    };

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', pb: 2 }}>
            <Container maxWidth="sm" sx={{ px: 2 }}>
                <PlannerHeader />

                <Stack spacing={1.5} sx={{ pb: 2 }}>
                    <ProductSelector
                        products={PRODUCTS}
                        selectedId={selectedProductId}
                        onSelect={setSelectedProductId}
                    />

                    <ProjectDetailsForm
                        values={values}
                        lengthError={lengthError}
                        depthError={depthError}
                        planterHeightError={planterHeightError}
                        legHeightError={legHeightError}
                        onChange={updateValue}
                        onReset={handleReset}
                    />

                    <QuoteSummaryCard values={values} buildPlan={buildPlan} />
                    <BoardBreakdownCard buildPlan={buildPlan} />
                    <CutListCard buildPlan={buildPlan} />
                    <NotesCard notes={values.notes} />
                    <MobileSummaryBar buildPlan={buildPlan} />
                </Stack>
            </Container>
        </Box>
    );
};