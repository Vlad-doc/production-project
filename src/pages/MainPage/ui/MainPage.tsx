import { BugButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';

import png from 'shared/assets/icons/user.png';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <div>
            <img src={png} alt="" />
            {t('Главная страница')}
            <BugButton />
        </div>
    );
};

export default MainPage;
