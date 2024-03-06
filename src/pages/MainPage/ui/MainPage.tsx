import { useTranslation } from 'react-i18next';

import png from 'shared/assets/icons/user.png';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <div>
            <img src={png} alt="" />
            {t('Главная страница')}
        </div>
    )
};

export default MainPage