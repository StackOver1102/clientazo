// import { NavItem } from 'types';

import { NavItem } from "../../types";

export type Product = {
  photo_url: string;
  name: string;
  description: string;
  created_at: string;
  price: number;
  id: number;
  category: string;
  updated_at: string;
};

export type Order = {
  id: number;
  photo_url: string;
  name: string;
  status: string;
  created_at: string;
  updated_at: string;
  description: string;
  price: number;
};

//Info: The following data is used for the sidebar navigation and Cmd K bar.
export const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    url: '/dashboard/overview',
    icon: 'dashboard',
    isActive: false,
    shortcut: ['d', 'd'],
    items: [] // Empty array as there are no child items for Dashboard
  },
  {
    title: 'Product',
    url: '/dashboard/product',
    icon: 'product',
    shortcut: ['p', 'p'],
    isActive: false,
    items: [] // No child items
  },
  {
    title: 'Order',
    url: '/dashboard/order',
    icon: 'order',
    shortcut: ['o', 'o'],
    isActive: false,
    items: [] // No child items
  },
  {
    title: 'Deposit',
    url: '/dashboard/deposit',
    icon: 'deposit',
    shortcut: ['d', 'd'],
    isActive: false,
    items: [] // No child items
  },
  {
    title: 'Request',
    url: '/dashboard/request',
    icon: 'appWindowMac',
    shortcut: ['r', 'r'],
    isActive: false,
    items: [] // No child items
  },
  {
    title: 'History',
    url: '/dashboard/history',
    icon: 'history',
    shortcut: ['h', 'h'],
    isActive: false,
    items: [] // No child items
  },
  {
    title: 'Account',
    url: '#', // Placeholder as there is no direct link for the parent
    icon: 'billing',
    isActive: true,

    items: [
      {
        title: 'Profile',
        url: '/dashboard/profile',
        icon: 'userPen',
        shortcut: ['m', 'm']
      }

    ]
  },
  {
    title: 'Kanban',
    url: '/dashboard/kanban',
    icon: 'kanban',
    shortcut: ['k', 'k'],
    isActive: false,
    items: [] // No child items
  }
];
