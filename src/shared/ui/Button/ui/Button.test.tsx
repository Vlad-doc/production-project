import { render, screen } from '@testing-library/react';

import { Button, ThemeButton } from 'shared/ui/Button/ui/Button';

test('Button', () => {
    // ARRANGE
    render(<Button theme={ThemeButton.CLEAR}>TEXT</Button>);

    // ASSERT
    expect(screen.getByText('TEXT')).toHaveClass('clear');
});
