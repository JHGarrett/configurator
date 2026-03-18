import { Button, Stack, Typography } from '@mui/material';
import type { ProductDefinition } from '../../types/planner';
import { SectionCard } from './SectionCard';

type ProductSelectorProps = {
    products: ProductDefinition[];
    selectedId: string;
    onSelect: (id: string) => void;
};

export const ProductSelector = ({
                                    products,
                                    selectedId,
                                    onSelect,
                                }: ProductSelectorProps) => {
    return (
        <SectionCard title="Product">
            <Stack spacing={1}>
                {products.map((product) => {
                    const isSelected = product.id === selectedId;

                    return (
                        <Button
                            key={product.id}
                            variant={isSelected ? 'contained' : 'outlined'}
                            color={isSelected ? 'primary' : 'inherit'}
                            onClick={() => onSelect(product.id)}
                            sx={{
                                justifyContent: 'flex-start',
                                alignItems: 'flex-start',
                                py: 1.5,
                                px: 1.5,
                                borderColor: 'divider',
                            }}
                        >
                            <Stack alignItems="flex-start" spacing={0.25}>
                                <Typography sx={{ fontWeight: 700 }}>{product.label}</Typography>
                                <Typography
                                    variant="caption"
                                    sx={{ color: isSelected ? 'rgba(255,255,255,0.85)' : 'text.secondary' }}
                                >
                                    {product.description}
                                </Typography>
                            </Stack>
                        </Button>
                    );
                })}
            </Stack>
        </SectionCard>
    );
};