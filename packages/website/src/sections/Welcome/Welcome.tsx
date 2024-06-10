import { WelcomeServer } from '@/sections/Welcome/Welcome.server';

import { WelcomeClient } from './Welcome.client';

export function Welcome() {
  return (
    <WelcomeClient>
      <WelcomeServer />
    </WelcomeClient>
  );
}
