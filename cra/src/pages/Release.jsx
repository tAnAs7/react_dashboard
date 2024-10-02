import React from 'react';
import NavigationBar from '../components/nav';
import ReleaseNavigationBar from '../components/nav/release';
import { useTranslation } from 'react-i18next';

const Release = () => {
  const { t } = useTranslation();
  return <>
  <h1>{t('release_page')}</h1>
  <NavigationBar current="/release"/>
  <ReleaseNavigationBar/>
  </>;
};

export default Release;