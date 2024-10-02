import React from 'react';
import NavigationBar from '../components/nav';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  return <>
  <h1>{t('home_page')}</h1>
  <NavigationBar current="/"/>
  </>;
};

export default Home;