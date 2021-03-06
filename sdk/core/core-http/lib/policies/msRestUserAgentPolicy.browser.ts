// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/*
 * NOTE: When moving this file, please update "browser" section in package.json
 * and "plugins" section in webpack.testconfig.ts.
 */

import { TelemetryInfo } from "./userAgentPolicy";

interface NavigatorEx extends Navigator {
  readonly oscpu: string | undefined;
}

export function getDefaultUserAgentKey(): string {
  return "x-ms-command-name";
}

export function getPlatformSpecificData(): TelemetryInfo[] {
  const navigator = window.navigator as NavigatorEx;
  const osInfo = {
    key: "OS",
    value: (navigator.oscpu || navigator.platform).replace(" ", "")
  };

  return [osInfo];
}
