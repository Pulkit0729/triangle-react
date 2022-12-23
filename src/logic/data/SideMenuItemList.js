import { MenuItemClass } from '../modals/MenuItem';

import Dashboard from '../../routes/tc/Dashboard';
import ClientsScreen from '../../routes/tc/Clients/index';
import Team from '../../routes/tc/Team';
import Insights from '../../routes/tc/Insights';
import Settings from '../../routes/tc/Settings';
import WorkSchedule from '../../routes/tc/WorkSchedule';

import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';
import SettingsIcon from '@mui/icons-material/Settings';

export const sideMenuItems = [
    new MenuItemClass('dashboard', <Dashboard />, DashboardRoundedIcon, 'Dashboard' ),
    new MenuItemClass('workSchedule', <WorkSchedule />, WorkRoundedIcon, 'Work Schedule'),
    new MenuItemClass("clients", <ClientsScreen />, GroupRoundedIcon, 'Clients'),
    new MenuItemClass('team', <Team />, GroupsRoundedIcon, 'Team'),
    new MenuItemClass('insights', <Insights />, InsightsRoundedIcon, 'Insights'),
    new MenuItemClass('settings', <Settings />, SettingsIcon, 'Settings'),
]