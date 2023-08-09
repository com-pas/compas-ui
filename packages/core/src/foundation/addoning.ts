import { Setting } from './plugging.js';

export interface Addon {
  name: string;
  src: string;
  active?: boolean;
  configuration?: { [key: string]: unknown };
  settings?: Setting;
}
