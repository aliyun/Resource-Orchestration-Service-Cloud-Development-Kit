/// <reference types="node" />
import { TemplateDiff } from './diff/types';
export interface FormatStream extends NodeJS.WritableStream {
    columns?: number;
}
/**
 * Renders template differences to the process' console.
 *
 * @param stream           The IO stream where to output the rendered diff.
 * @param templateDiff     TemplateDiff to be rendered to the console.
 * @param logicalToPathMap A map from logical ID to construct path. Useful in
 *                         case there is no aliyun:ros:path metadata in the template.
 * @param context          the number of context lines to use in arbitrary JSON diff (defaults to 3).
 */
export declare function formatDifferences(stream: FormatStream, templateDiff: TemplateDiff, logicalToPathMap?: {
    [logicalId: string]: string;
}, context?: number): void;
