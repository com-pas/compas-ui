import { cyrb64 } from './cyrb64.js';

export type Plugin<T> = {
  name: string;
  translations?: Record<string, string>;
  src: string;
  icon: string;
  requireDoc?: boolean;
  active?: boolean;
  configuration?: {
    [key: string]: unknown;
  };
  settings?: T;
};

type SettingType = 'text' | 'select' | 'boolean';

interface BaseSetting<T> {
  type: SettingType;
  name: string;
  description: string;
  default?: T;
}

interface TextSetting extends BaseSetting<string> {
  type: 'text';
}

interface SelectSetting extends BaseSetting<string> {
  type: 'select';
  options: string[] | { key: string; label: string }[];
}

interface BooleanSetting extends BaseSetting<boolean> {
  type: 'boolean';
  checked: boolean;
}

export type Setting = TextSetting | SelectSetting | BooleanSetting;

export type PluginSet = { menu: Plugin<unknown>[]; editor: Plugin<unknown>[] };

const pluginTags = new Map<string, string>();

/** @returns a valid customElement tagName containing the URI hash. */
export function pluginTag(uri: string): string {
  if (!pluginTags.has(uri)) pluginTags.set(uri, `oscd-p${cyrb64(uri)}`);
  return pluginTags.get(uri)!;
}
