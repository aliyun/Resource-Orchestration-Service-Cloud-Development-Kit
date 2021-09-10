import * as rosDiff from '@alicloud/ros-cdk-template-diff';
import * as cxapi from '@alicloud/ros-cdk-cxapi';
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
export declare function printStackDiff(oldTemplate: any, newTemplate: cxapi.RosStackArtifact, context: number, stream?: rosDiff.FormatStream): number;
