export type PlannerFormValues = {
    customerName: string;
    projectName: string;
    width: string;
    depth: string;
    planterHeight: string;
    legHeight: string;
    notes: string;
};

export type CedarPlanterDimensions = {
    width: number;
    depth: number;
    planterHeight: number;
};

export type CedarBoardStock = {
    label: string;
    boardLength: number;
    boardCost: number;
};

export type CedarPlanterEstimate = {
    boardStock: CedarBoardStock;
    sideBoardCount: number;
    bottomBoardCount: number;
    legBoardCount: number;
    supportBoardCount: number;
    boardCount: number;
    materialCost: number;
    wasteAdjustedMaterialCost: number;
    overheadCost: number;
    finalEstimate: number;
};

export type CutListItem = {
    label: string;
    quantity: number;
    length: number;
};

export type CedarPlanterBuildPlan = CedarPlanterEstimate & {
    rowsPerFace: number;
    bottomSlatCount: number;
    cutList: CutListItem[];
    legHeight: number;
    totalBuildHeight: number;
};

export type ProductDefinition = {
    id: string;
    label: string;
    description: string;
};