import { Typography } from '@mui/material';
import { SectionCard } from './SectionCard';

type NotesCardProps = {
    notes: string;
};

export const NotesCard = ({ notes }: NotesCardProps) => {
    return (
        <SectionCard title="Job Notes">
            <Typography color={notes ? 'text.primary' : 'text.secondary'}>
                {notes || 'Add build notes, finish details, or customer preferences.'}
            </Typography>
        </SectionCard>
    );
};