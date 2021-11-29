import {
  ChartPieIcon,
  TicketIcon,
  LightBulbIcon,
  UsersIcon,
  UserTieIcon,
  BookIcon,
  SettingsIcon,
  MedalIcon
} from '../../ui/icons'

export const SidebarData = [
  {
    title: 'Visão geral',
    path: '/overview',
    icon: <ChartPieIcon />
  },
  {
    title: 'Lojas',
    path: '/shops',
    icon: <TicketIcon />
  },
  {
    title: 'Vendas',
    path: '/sales',
    icon: <LightBulbIcon />
  },
  {
    title: 'Clientes',
    path: '/customers',
    icon: <UsersIcon />
  },
  {
    title: 'Produtos',
    path: '/products',
    icon: <UserTieIcon />
  },
  {
    title: 'Planos e Metas',
    path: '/plans-goals',
    icon: <BookIcon />
  },
  {
    title: 'Configurações',
    path: '/settings',
    icon: <SettingsIcon />
  },
  {
    title: 'Sair',
    path: '/exit',
    icon: <MedalIcon />
  }
]
