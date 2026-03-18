import type { ProductDefinition, PlannerFormValues } from '../types/planner';

export const PRODUCTS: ProductDefinition[] = [
    {
        id: 'cedar-planter',
        label: 'Cedar Planter',
        description: 'Estimate materials, board count, and cut list for cedar planter builds.',
    },
];

export const INITIAL_VALUES: PlannerFormValues = {
    customerName: '',
    projectName: 'Cedar Planter',
    width: '',
    depth: '',
    planterHeight: '15',
    legHeight: '33',
    notes: '',
};

export const STORAGE_KEY = 'frontline-crafted-internal-planner';