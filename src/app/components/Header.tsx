import { useTranslations } from 'next-intl';
const Header = () => {
     const t = useTranslations('Header');
  return (
    <div>
        <h1 className='text-5xl'>{t('name')}</h1>
    </div>
  )
}

export default Header