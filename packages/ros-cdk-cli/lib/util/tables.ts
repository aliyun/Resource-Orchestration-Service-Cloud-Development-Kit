import * as rosDiff from '@ros-cdk/ros-template-diff';

export function renderTable(cells: string[][], columns?: number) {
  // The rosDiff module has logic for terminal-width aware table
  // formatting (and nice colors), let's just reuse that.
  return rosDiff.formatTable(cells, columns);
}
