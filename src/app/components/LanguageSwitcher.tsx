'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

export default function LocalSwitcher() {
  const router = useRouter();
  const localActive = useLocale();

  const languageHandler = () => {
    if (localActive === 'en') {
      router.push('/bn');
    } else {
      router.push('/en');
    }
  }

  return (
    <div>
        <button onClick={languageHandler}>{localActive === 'en' ? 'বাংলা' : 'English'}</button>
    </div>
  );
}
