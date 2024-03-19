'use client';

import isAuth from '@/components/isAuth';
import { PageTitle } from '@/components/page-title';
import { SettingsView } from '@/components/settings-view';

type Props = {};

const SettingsPage = ({}: Props) => {
  return (
    <div className="flex flex-col gap-5 w-full mx-auto max-w-screen-xl">
      <PageTitle title="Settings" />
      <SettingsView />
    </div>
  );
};

export default isAuth(SettingsPage);
