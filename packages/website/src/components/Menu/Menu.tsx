import { Menu as AntdMenu, MenuProps as AntdMenuProps } from 'antd';

export type MenuProps = Omit<AntdMenuProps, 'items'> & {
  items: AntdMenuProps['items']
};

export function Menu(props: MenuProps) {
  return (
    <AntdMenu
      mode="horizontal"
      {...props}
    />
  );
}
