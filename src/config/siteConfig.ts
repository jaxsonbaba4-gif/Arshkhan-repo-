/**
 * Re-exports the central template configuration.
 * Anyone customizing this project can edit either:
 * - /src/template.config.ts (the dedicated easy-edit template file)
 * - or this file directly.
 */

import { templateConfig } from '../template.config';

export const siteConfig = templateConfig;
export type SiteConfig = typeof siteConfig;
