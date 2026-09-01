import * as cxschema from '@alicloud/ros-cdk-assembly-schema';
import * as rosDiff from '@alicloud/ros-cdk-template-diff';

import * as cxapi from '@alicloud/ros-cdk-cxapi';
import * as colors from 'colors/safe';
import { print } from './logging';

/**
 * Pretty-prints the differences between two template states to the console.
 *
 * @param oldTemplate the old/current state of the stack.
 * @param newTemplate the new/target state of the stack.
 * @param strict      do not filter out ALIYUN::CDK::Metadata
 * @param context     lines of context to use in arbitrary JSON diff
 *
 * @returns the count of differences that were rendered.
 */
export function printStackDiff(
  oldTemplate: any,
  newTemplate: cxapi.RosStackArtifact,
  context: number,
  stream?: rosDiff.FormatStream,
): number {
  const diff = rosDiff.diffTemplate(oldTemplate, newTemplate.template);

  if (!diff.isEmpty) {
    rosDiff.formatDifferences(stream || process.stderr, diff, buildLogicalToPathMap(newTemplate), context);
  } else {
    print(colors.green('There were no differences'));
  }

  return diff.differenceCount;
}

function buildLogicalToPathMap(stack: cxapi.RosStackArtifact) {
  const map: { [id: string]: string } = {};
  for (const md of stack.findMetadataByType(cxschema.ArtifactMetadataEntryType.LOGICAL_ID)) {
    map[md.data as string] = md.path;
  }
  return map;
}
