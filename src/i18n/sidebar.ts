import { type LanguageKeys } from '@/i18n/ui'

type SidebarSchema = {
  [Lang in LanguageKeys]: {
    introduction: string
    'getting-started': string
    'sidebar-config': string
    'writing-docs': string
    'styling-config': string
  }
}

export const SIDEBAR: SidebarSchema = {
  en: {
    introduction: 'Introduction',
    'getting-started': 'CV',
    'sidebar-config': 'Research',
    'writing-docs': 'Academics',
    'styling-config': 'Hobbies',
  },
}
