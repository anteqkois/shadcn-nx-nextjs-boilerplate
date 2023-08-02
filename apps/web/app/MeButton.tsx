'use client';

import { Button } from '@my-project/ui-components';
import { GitHubLogoIcon } from '@radix-ui/react-icons';

export const MeButton = () => {
  return (
    <Button size="lg">
      <a href="https://github.com/anteqkois" className="flex items-center">
        <GitHubLogoIcon className="mr-2 h-4 w-4" />
        Thanks ! ❤️ @anteqkois
      </a>
    </Button>
  );
};
