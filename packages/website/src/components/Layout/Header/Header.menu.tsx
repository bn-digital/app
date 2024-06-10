import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Menu from '@/components/Menu';
import { routes } from '@/routes';
import styled from '@emotion/styled';

const StyledMenu = styled(Menu)`
  flex: 1;
`;

export function HeaderMenu() {
  const pathname = usePathname();

  return (
    <StyledMenu
      activeKey={pathname || undefined}
      items={[
        {
          key: routes.home,
          label: <Link href={routes.home}>Home</Link>,
        },
        {
          key: routes.about,
          label: <Link href={routes.about}>About</Link>,
        },
      ]}
    />
  );
}
