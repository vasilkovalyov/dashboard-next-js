import { Pages } from '@/constnts/routes';
import { NavbarMenuItem } from '../Navbar';

export const headerMenu: NavbarMenuItem[] = [
  {
    id: '1',
    path: Pages.HOME,
    name: 'Home',
  },
  {
    id: '2',
    path: Pages.POSTS,
    name: 'Posts',
  },
];
