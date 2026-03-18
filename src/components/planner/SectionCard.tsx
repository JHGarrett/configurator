import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import type { ReactNode } from 'react';

type SectionCardProps = {
    title: string;
    children: ReactNode;
    action?: ReactNode;
};

export const SectionCard = ({ title, children, action }: SectionCardProps) => {
    return (
        <Card>
            <CardContent sx={{ p: 2 }}>
                <Stack spacing={2}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: 2,
                        }}
                    >
                        <Typography variant="h6">{title}</Typography>
                        {action}
                    </Box>

                    {children}
                </Stack>
            </CardContent>
        </Card>
    );
};