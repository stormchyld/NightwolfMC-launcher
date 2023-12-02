import defaultUrl from '@renderer/index.html'
import { InstalledAppManifest } from '@xmcl/runtime-api'
import { platform } from 'os'
import { darkIco, darkIcon, darkTray, lightIco, lightIcon, lightTray } from './utils/icons'
import { HAS_DEV_SERVER } from './constant'

const manifest: InstalledAppManifest = {
  name: 'NightwolfMC Launcher',
  description: 'The default launcher UI for NightwolfMC Servers',
  url: HAS_DEV_SERVER ? defaultUrl : 'http://app/index.html',
  backgroundColor: '0x424242',
  minWidth: 800,
  minHeight: 620,
  vibrancy: false,
  iconSets: {
    icon: platform() === 'win32' ? lightIco : lightIcon,
    darkIcon: platform() === 'win32' ? darkIco : darkIcon,

    trayIcon: lightTray,
    darkTrayIcon: darkTray,

    dockIcon: lightIcon,
    darkDockIcon: darkIcon,
  },
  screenshots: [],
  ratio: false,
  iconUrls: {
    icon: platform() === 'win32' ? lightIco : lightIcon,
    darkIcon: platform() === 'win32' ? darkIco : darkIcon,

    trayIcon: lightTray,
    darkTrayIcon: darkTray,

    dockIcon: lightIcon,
    darkDockIcon: darkIcon,
  },
}

export default manifest
