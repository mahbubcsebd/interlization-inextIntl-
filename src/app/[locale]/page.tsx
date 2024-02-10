import { useTranslations } from 'next-intl';

export default function Index() {
  const t = useTranslations('Index');
  return <h1 className='text-5xl'>{t('title')}</h1>;
}