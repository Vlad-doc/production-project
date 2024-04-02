import { fireEvent, screen } from '@testing-library/react';

import renderWithTranslation from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';

describe('Sidebar', () => {
    test('in the document', () => {
        renderWithTranslation(<Sidebar />);

        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('toggle sidebar', () => {
        renderWithTranslation(<Sidebar />);

        const button = screen.getByTestId('btn');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(button);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
