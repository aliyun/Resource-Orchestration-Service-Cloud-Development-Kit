"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDifferences = void 0;
const colors = require("colors/safe");
const util_1 = require("util");
const diff_template_1 = require("./diff-template");
const util_2 = require("./diff/util");
const format_table_1 = require("./format-table");
const rosDiff = require("./index");
// from cx-api
const PATH_METADATA_KEY = 'aliyun:ros:path';
/* eslint-disable @typescript-eslint/no-require-imports */
// tslint:disable-next-line:no-var-requires
const { structuredPatch } = require('diff');
/**
 * Renders template differences to the process' console.
 *
 * @param stream           The IO stream where to output the rendered diff.
 * @param templateDiff     TemplateDiff to be rendered to the console.
 * @param logicalToPathMap A map from logical ID to construct path. Useful in
 *                         case there is no aliyun:ros:path metadata in the template.
 * @param context          the number of context lines to use in arbitrary JSON diff (defaults to 3).
 */
function formatDifferences(stream, templateDiff, logicalToPathMap = {}, context = 3) {
    const formatter = new Formatter(stream, logicalToPathMap, templateDiff, context);
    if (templateDiff.description) {
        formatter.formatSection('Description', 'Description', templateDiff.description);
    }
    formatter.formatSection('Parameters', 'Parameter', templateDiff.parameters);
    formatter.formatSection('Metadata', 'Metadata', templateDiff.metadata);
    formatter.formatSection('Mappings', 'Mapping', templateDiff.mappings);
    formatter.formatSection('Rules', 'Rule', templateDiff.rules);
    formatter.formatSection('Conditions', 'Condition', templateDiff.conditions);
    formatter.formatSection('Resources', 'Resource', templateDiff.resources, formatter.formatResourceDifference.bind(formatter));
    formatter.formatSection('Outputs', 'Output', templateDiff.outputs);
    formatter.formatSection('Other Changes', 'Unknown', templateDiff.unknown);
}
exports.formatDifferences = formatDifferences;
const ADDITION = colors.green('[+]');
const CONTEXT = colors.grey('[ ]');
const UPDATE = colors.yellow('[~]');
const REMOVAL = colors.red('[-]');
class Formatter {
    constructor(stream, logicalToPathMap, diff, context = 3) {
        this.stream = stream;
        this.logicalToPathMap = logicalToPathMap;
        this.context = context;
        // Read additional construct paths from the diff if it is supplied
        if (diff) {
            this.readConstructPathsFrom(diff);
        }
    }
    print(fmt, ...args) {
        this.stream.write(colors.white(util_1.format(fmt, ...args)) + '\n');
    }
    warning(fmt, ...args) {
        this.stream.write(colors.yellow(util_1.format(fmt, ...args)) + '\n');
    }
    formatSection(title, entryType, collection, formatter = this.formatDifference.bind(this)) {
        if (rosDiff.isDifferenceInstance(collection)) {
            if (!collection.isDifferent) {
                return;
            }
            this.printSectionHeader(title);
            this.formatDifference(entryType, '', collection);
            this.printSectionFooter();
        }
        else {
            if (collection.differenceCount === 0) {
                return;
            }
            this.printSectionHeader(title);
            collection.forEachDifference((id, diff) => formatter(entryType, id, diff));
            this.printSectionFooter();
        }
    }
    printSectionHeader(title) {
        this.print(colors.underline(colors.bold(title)));
    }
    printSectionFooter() {
        this.print('');
    }
    /**
     * Print a simple difference for a given named entity.
     *
     * @param logicalId the name of the entity that is different.
     * @param diff the difference to be rendered.
     */
    formatDifference(type, logicalId, diff) {
        if (!diff || !diff.isDifferent) {
            return;
        }
        let value;
        const oldValue = this.formatValue(diff.oldValue, colors.red);
        const newValue = this.formatValue(diff.newValue, colors.green);
        if (diff.isAddition) {
            value = newValue;
        }
        else if (diff.isUpdate) {
            value = `${oldValue} to ${newValue}`;
        }
        else if (diff.isRemoval) {
            value = oldValue;
        }
        this.print(`${this.formatPrefix(diff)} ${colors.cyan(type)} ${this.formatLogicalId(logicalId)}: ${value}`);
    }
    /**
     * Print a resource difference for a given logical ID.
     *
     * @param logicalId the logical ID of the resource that changed.
     * @param diff      the change to be rendered.
     */
    formatResourceDifference(_type, logicalId, diff) {
        if (!diff.isDifferent) {
            return;
        }
        const resourceType = diff.isRemoval ? diff.oldResourceType : diff.newResourceType;
        // tslint:disable-next-line:max-line-length
        this.print(`${this.formatPrefix(diff)} ${this.formatValue(resourceType, colors.cyan)} ${this.formatLogicalId(logicalId)} ${this.formatImpact(diff.changeImpact)}`);
        if (diff.isUpdate) {
            const differenceCount = diff.differenceCount;
            let processedCount = 0;
            diff.forEachDifference((_, name, values) => {
                processedCount += 1;
                this.formatTreeDiff(name, values, processedCount === differenceCount);
            });
        }
    }
    formatPrefix(diff) {
        if (diff.isAddition) {
            return ADDITION;
        }
        if (diff.isUpdate) {
            return UPDATE;
        }
        if (diff.isRemoval) {
            return REMOVAL;
        }
        return colors.white('[?]');
    }
    /**
     * @param value the value to be formatted.
     * @param color the color to be used.
     *
     * @returns the formatted string, with color applied.
     */
    formatValue(value, color) {
        if (value == null) {
            return undefined;
        }
        if (typeof value === 'string') {
            return color(value);
        }
        return color(JSON.stringify(value));
    }
    /**
     * @param impact the impact to be formatted
     * @returns a user-friendly, colored string representing the impact.
     */
    formatImpact(impact) {
        switch (impact) {
            case diff_template_1.ResourceImpact.MAY_REPLACE:
                return colors.italic(colors.yellow('may be replaced'));
            case diff_template_1.ResourceImpact.WILL_REPLACE:
                return colors.italic(colors.bold(colors.red('replace')));
            case diff_template_1.ResourceImpact.WILL_DESTROY:
                return colors.italic(colors.bold(colors.red('destroy')));
            case diff_template_1.ResourceImpact.WILL_ORPHAN:
                return colors.italic(colors.yellow('orphan'));
            case diff_template_1.ResourceImpact.WILL_UPDATE:
            case diff_template_1.ResourceImpact.WILL_CREATE:
            case diff_template_1.ResourceImpact.NO_CHANGE:
                return ''; // no extra info is gained here
        }
    }
    /**
     * Renders a tree of differences under a particular name.
     * @param name    the name of the root of the tree.
     * @param diff    the difference on the tree.
     * @param last    whether this is the last node of a parent tree.
     */
    formatTreeDiff(name, diff, last) {
        let additionalInfo = '';
        if (diff_template_1.isPropertyDifference(diff)) {
            if (diff.changeImpact === diff_template_1.ResourceImpact.MAY_REPLACE) {
                additionalInfo = ' (may cause replacement)';
            }
            else if (diff.changeImpact === diff_template_1.ResourceImpact.WILL_REPLACE) {
                additionalInfo = ' (requires replacement)';
            }
        }
        this.print(' %s─ %s %s%s', last ? '└' : '├', this.changeTag(diff.oldValue, diff.newValue), name, additionalInfo);
        return this.formatObjectDiff(diff.oldValue, diff.newValue, ` ${last ? ' ' : '│'}`);
    }
    /**
     * Renders the difference between two objects, looking for the differences as deep as possible,
     * and rendering a tree graph of the path until the difference is found.
     *
     * @param oldObject  the old object.
     * @param newObject  the new object.
     * @param linePrefix a prefix (indent-like) to be used on every line.
     */
    formatObjectDiff(oldObject, newObject, linePrefix) {
        if (typeof oldObject !== typeof newObject ||
            Array.isArray(oldObject) ||
            typeof oldObject === 'string' ||
            typeof oldObject === 'number') {
            if (oldObject !== undefined && newObject !== undefined) {
                if (typeof oldObject === 'object' || typeof newObject === 'object') {
                    const oldStr = JSON.stringify(oldObject, null, 2);
                    const newStr = JSON.stringify(newObject, null, 2);
                    const diff = _diffStrings(oldStr, newStr, this.context);
                    for (let i = 0; i < diff.length; i++) {
                        this.print('%s   %s %s', linePrefix, i === 0 ? '└─' : '  ', diff[i]);
                    }
                }
                else {
                    this.print('%s   ├─ %s %s', linePrefix, REMOVAL, this.formatValue(oldObject, colors.red));
                    this.print('%s   └─ %s %s', linePrefix, ADDITION, this.formatValue(newObject, colors.green));
                }
            }
            else if (oldObject !== undefined /* && newObject === undefined */) {
                this.print('%s   └─ %s', linePrefix, this.formatValue(oldObject, colors.red));
            } /* if (oldObject === undefined && newObject !== undefined) */
            else {
                this.print('%s   └─ %s', linePrefix, this.formatValue(newObject, colors.green));
            }
            return;
        }
        const keySet = new Set(Object.keys(oldObject));
        Object.keys(newObject).forEach((k) => keySet.add(k));
        const keys = new Array(...keySet).filter((k) => !util_2.deepEqual(oldObject[k], newObject[k])).sort();
        const lastKey = keys[keys.length - 1];
        for (const key of keys) {
            const oldValue = oldObject[key];
            const newValue = newObject[key];
            const treePrefix = key === lastKey ? '└' : '├';
            if (oldValue !== undefined && newValue !== undefined) {
                this.print('%s   %s─ %s %s:', linePrefix, treePrefix, this.changeTag(oldValue, newValue), colors.blue(`.${key}`));
                this.formatObjectDiff(oldValue, newValue, `${linePrefix}   ${key === lastKey ? ' ' : '│'}`);
            }
            else if (oldValue !== undefined /* && newValue === undefined */) {
                this.print('%s   %s─ %s Removed: %s', linePrefix, treePrefix, REMOVAL, colors.blue(`.${key}`));
            } /* if (oldValue === undefined && newValue !== undefined */
            else {
                this.print('%s   %s─ %s Added: %s', linePrefix, treePrefix, ADDITION, colors.blue(`.${key}`));
            }
        }
    }
    /**
     * @param oldValue the old value of a difference.
     * @param newValue the new value of a difference.
     *
     * @returns a tag to be rendered in the diff, reflecting whether the difference
     *      was an ADDITION, UPDATE or REMOVAL.
     */
    changeTag(oldValue, newValue) {
        if (oldValue !== undefined && newValue !== undefined) {
            return UPDATE;
        }
        else if (oldValue !== undefined /* && newValue === undefined*/) {
            return REMOVAL;
        } /* if (oldValue === undefined && newValue !== undefined) */
        else {
            return ADDITION;
        }
    }
    /**
     * Find 'aliyun:ros:path' metadata in the diff and add it to the logicalToPathMap
     *
     * There are multiple sources of logicalID -> path mappings: synth metadata
     * and resource metadata, and we combine all sources into a single map.
     */
    readConstructPathsFrom(templateDiff) {
        for (const [logicalId, resourceDiff] of Object.entries(templateDiff.resources)) {
            if (!resourceDiff) {
                continue;
            }
            const oldPathMetadata = resourceDiff.oldValue && resourceDiff.oldValue.Metadata && resourceDiff.oldValue.Metadata[PATH_METADATA_KEY];
            if (oldPathMetadata && !(logicalId in this.logicalToPathMap)) {
                this.logicalToPathMap[logicalId] = oldPathMetadata;
            }
            const newPathMetadata = resourceDiff.newValue && resourceDiff.newValue.Metadata && resourceDiff.newValue.Metadata[PATH_METADATA_KEY];
            if (newPathMetadata && !(logicalId in this.logicalToPathMap)) {
                this.logicalToPathMap[logicalId] = newPathMetadata;
            }
        }
    }
    formatLogicalId(logicalId) {
        // if we have a path in the map, return it
        const normalized = this.normalizedLogicalIdPath(logicalId);
        if (normalized) {
            return `${normalized} ${colors.gray(logicalId)}`;
        }
        return logicalId;
    }
    normalizedLogicalIdPath(logicalId) {
        // if we have a path in the map, return it
        const path = this.logicalToPathMap[logicalId];
        return path ? normalizePath(path) : undefined;
        /**
         * Path is supposed to start with "/stack-name". If this is the case (i.e. path has more than
         * two components, we remove the first part. Otherwise, we just use the full path.
         * @param p
         */
        function normalizePath(p) {
            if (p.startsWith('/')) {
                p = p.substr(1);
            }
            let parts = p.split('/');
            if (parts.length > 1) {
                parts = parts.slice(1);
                // remove the last component if it's "Resource" or "Default" (if we have more than a single component)
                if (parts.length > 1) {
                    const last = parts[parts.length - 1];
                    if (last === 'Resource' || last === 'Default') {
                        parts = parts.slice(0, parts.length - 1);
                    }
                }
                p = parts.join('/');
            }
            return p;
        }
    }
    formatSecurityGroupChanges(changes) {
        if (!changes.hasChanges) {
            return;
        }
        this.printSectionHeader('Security Group Changes');
        this.print(format_table_1.formatTable(this.deepSubstituteBracedLogicalIds(changes.summarize()), this.stream.columns));
    }
    deepSubstituteBracedLogicalIds(rows) {
        return rows.map((row) => row.map(this.substituteBracedLogicalIds.bind(this)));
    }
    /**
     * Substitute all strings like ${LogId.xxx} with the path instead of the logical ID
     */
    substituteBracedLogicalIds(source) {
        return source.replace(/\$\{([^.}]+)(.[^}]+)?\}/gi, (_match, logId, suffix) => {
            return '${' + (this.normalizedLogicalIdPath(logId) || logId) + (suffix || '') + '}';
        });
    }
}
/**
 * Creates a unified diff of two strings.
 *
 * @param oldStr  the "old" version of the string.
 * @param newStr  the "new" version of the string.
 * @param context the number of context lines to use in arbitrary JSON diff.
 *
 * @returns an array of diff lines.
 */
function _diffStrings(oldStr, newStr, context) {
    const patch = structuredPatch(null, null, oldStr, newStr, null, null, { context });
    const result = new Array();
    for (const hunk of patch.hunks) {
        result.push(colors.magenta(`@@ -${hunk.oldStart},${hunk.oldLines} +${hunk.newStart},${hunk.newLines} @@`));
        const baseIndent = _findIndent(hunk.lines);
        for (const line of hunk.lines) {
            // Don't care about termination newline.
            if (line === '\\ No newline at end of file') {
                continue;
            }
            const marker = line.charAt(0);
            const text = line.slice(1 + baseIndent);
            switch (marker) {
                case ' ':
                    result.push(`${CONTEXT} ${text}`);
                    break;
                case '+':
                    result.push(colors.bold(`${ADDITION} ${colors.green(text)}`));
                    break;
                case '-':
                    result.push(colors.bold(`${REMOVAL} ${colors.red(text)}`));
                    break;
                default:
                    throw new Error(`Unexpected diff marker: ${marker} (full line: ${line})`);
            }
        }
    }
    return result;
    function _findIndent(lines) {
        let indent = Number.MAX_SAFE_INTEGER;
        for (const line of lines) {
            for (let i = 1; i < line.length; i++) {
                if (line.charAt(i) !== ' ') {
                    indent = indent > i - 1 ? i - 1 : indent;
                    break;
                }
            }
        }
        return indent;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZm9ybWF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUFzQztBQUN0QywrQkFBOEI7QUFDOUIsbURBQXVHO0FBRXZHLHNDQUF3QztBQUN4QyxpREFBNkM7QUFFN0MsbUNBQW1DO0FBRW5DLGNBQWM7QUFDZCxNQUFNLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO0FBRTVDLDBEQUEwRDtBQUMxRCwyQ0FBMkM7QUFDM0MsTUFBTSxFQUFFLGVBQWUsRUFBRSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQU81Qzs7Ozs7Ozs7R0FRRztBQUNILFNBQWdCLGlCQUFpQixDQUMvQixNQUFvQixFQUNwQixZQUEwQixFQUMxQixtQkFBb0QsRUFBRSxFQUN0RCxVQUFrQixDQUFDO0lBRW5CLE1BQU0sU0FBUyxHQUFHLElBQUksU0FBUyxDQUFDLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDakYsSUFBSSxZQUFZLENBQUMsV0FBVyxFQUFFO1FBQzVCLFNBQVMsQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDakY7SUFDRCxTQUFTLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzVFLFNBQVMsQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkUsU0FBUyxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0RSxTQUFTLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdELFNBQVMsQ0FBQyxhQUFhLENBQUMsWUFB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QUFJLElBQUksS0FBSyxFQUFFO1lBQ3hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNwQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO29CQUMxQixNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztvQkFDekMsTUFBTTtpQkFDUDthQUNGO1NBQ0Y7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNvbG9ycyBmcm9tICdjb2xvcnMvc2FmZSc7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICd1dGlsJztcbmltcG9ydCB7IERpZmZlcmVuY2UsIGlzUHJvcGVydHlEaWZmZXJlbmNlLCBSZXNvdXJjZURpZmZlcmVuY2UsIFJlc291cmNlSW1wYWN0IH0gZnJvbSAnLi9kaWZmLXRlbXBsYXRlJztcbmltcG9ydCB7IERpZmZlcmVuY2VDb2xsZWN0aW9uLCBUZW1wbGF0ZURpZmYgfSBmcm9tICcuL2RpZmYvdHlwZXMnO1xuaW1wb3J0IHsgZGVlcEVxdWFsIH0gZnJvbSAnLi9kaWZmL3V0aWwnO1xuaW1wb3J0IHsgZm9ybWF0VGFibGUgfSBmcm9tICcuL2Zvcm1hdC10YWJsZSc7XG5pbXBvcnQgeyBTZWN1cml0eUdyb3VwQ2hhbmdlcyB9IGZyb20gJy4vbmV0d29yay9zZWN1cml0eS1ncm91cC1jaGFuZ2VzJztcbmltcG9ydCAqIGFzIHJvc0RpZmYgZnJvbSBcIi4vaW5kZXhcIjtcblxuLy8gZnJvbSBjeC1hcGlcbmNvbnN0IFBBVEhfTUVUQURBVEFfS0VZID0gJ2FsaXl1bjpyb3M6cGF0aCc7XG5cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1yZXF1aXJlLWltcG9ydHMgKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby12YXItcmVxdWlyZXNcbmNvbnN0IHsgc3RydWN0dXJlZFBhdGNoIH0gPSByZXF1aXJlKCdkaWZmJyk7XG4vKiBlc2xpbnQtZW5hYmxlICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9ybWF0U3RyZWFtIGV4dGVuZHMgTm9kZUpTLldyaXRhYmxlU3RyZWFtIHtcbiAgY29sdW1ucz86IG51bWJlcjtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRlbXBsYXRlIGRpZmZlcmVuY2VzIHRvIHRoZSBwcm9jZXNzJyBjb25zb2xlLlxuICpcbiAqIEBwYXJhbSBzdHJlYW0gICAgICAgICAgIFRoZSBJTyBzdHJlYW0gd2hlcmUgdG8gb3V0cHV0IHRoZSByZW5kZXJlZCBkaWZmLlxuICogQHBhcmFtIHRlbXBsYXRlRGlmZiAgICAgVGVtcGxhdGVEaWZmIHRvIGJlIHJlbmRlcmVkIHRvIHRoZSBjb25zb2xlLlxuICogQHBhcmFtIGxvZ2ljYWxUb1BhdGhNYXAgQSBtYXAgZnJvbSBsb2dpY2FsIElEIHRvIGNvbnN0cnVjdCBwYXRoLiBVc2VmdWwgaW5cbiAqICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgdGhlcmUgaXMgbm8gYWxpeXVuOnJvczpwYXRoIG1ldGFkYXRhIGluIHRoZSB0ZW1wbGF0ZS5cbiAqIEBwYXJhbSBjb250ZXh0ICAgICAgICAgIHRoZSBudW1iZXIgb2YgY29udGV4dCBsaW5lcyB0byB1c2UgaW4gYXJiaXRyYXJ5IEpTT04gZGlmZiAoZGVmYXVsdHMgdG8gMykuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREaWZmZXJlbmNlcyhcbiAgc3RyZWFtOiBGb3JtYXRTdHJlYW0sXG4gIHRlbXBsYXRlRGlmZjogVGVtcGxhdGVEaWZmLFxuICBsb2dpY2FsVG9QYXRoTWFwOiB7IFtsb2dpY2FsSWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge30sXG4gIGNvbnRleHQ6IG51bWJlciA9IDMsXG4pIHtcbiAgY29uc3QgZm9ybWF0dGVyID0gbmV3IEZvcm1hdHRlcihzdHJlYW0sIGxvZ2ljYWxUb1BhdGhNYXAsIHRlbXBsYXRlRGlmZiwgY29udGV4dCk7XG4gIGlmICh0ZW1wbGF0ZURpZmYuZGVzY3JpcHRpb24pIHtcbiAgICBmb3JtYXR0ZXIuZm9ybWF0U2VjdGlvbignRGVzY3JpcHRpb24nLCAnRGVzY3JpcHRpb24nLCB0ZW1wbGF0ZURpZmYuZGVzY3JpcHRpb24pO1xuICB9XG4gIGZvcm1hdHRlci5mb3JtYXRTZWN0aW9uKCdQYXJhbWV0ZXJzJywgJ1BhcmFtZXRlcicsIHRlbXBsYXRlRGlmZi5wYXJhbWV0ZXJzKTtcbiAgZm9ybWF0dGVyLmZvcm1hdFNlY3Rpb24oJ01ldGFkYXRhJywgJ01ldGFkYXRhJywgdGVtcGxhdGVEaWZmLm1ldGFkYXRhKTtcbiAgZm9ybWF0dGVyLmZvcm1hdFNlY3Rpb24oJ01hcHBpbmdzJywgJ01hcHBpbmcnLCB0ZW1wbGF0ZURpZmYubWFwcGluZ3MpO1xuICBmb3JtYXR0ZXIuZm9ybWF0U2VjdGlvbignUnVsZXMnLCAnUnVsZScsIHRlbXBsYXRlRGlmZi5ydWxlcyk7XG4gIGZvcm1hdHRlci5mb3JtYXRTZWN0aW9uKCdDb25kaXRpb25zJywgJ0NvbmRpdGlvbicsIHRlbXBsYXRlRGlmZi5jb25kaXRpb25zKTtcbiAgZm9ybWF0dGVyLmZvcm1hdFNlY3Rpb24oXG4gICAgJ1Jlc291cmNlcycsXG4gICAgJ1Jlc291cmNlJyxcbiAgICB0ZW1wbGF0ZURpZmYucmVzb3VyY2VzLFxuICAgIGZvcm1hdHRlci5mb3JtYXRSZXNvdXJjZURpZmZlcmVuY2UuYmluZChmb3JtYXR0ZXIpLFxuICApO1xuICBmb3JtYXR0ZXIuZm9ybWF0U2VjdGlvbignT3V0cHV0cycsICdPdXRwdXQnLCB0ZW1wbGF0ZURpZmYub3V0cHV0cyk7XG4gIGZvcm1hdHRlci5mb3JtYXRTZWN0aW9uKCdPdGhlciBDaGFuZ2VzJywgJ1Vua25vd24nLCB0ZW1wbGF0ZURpZmYudW5rbm93bik7XG59XG5cbmNvbnN0IEFERElUSU9OID0gY29sb3JzLmdyZWVuKCdbK10nKTtcbmNvbnN0IENPTlRFWFQgPSBjb2xvcnMuZ3JleSgnWyBdJyk7XG5jb25zdCBVUERBVEUgPSBjb2xvcnMueWVsbG93KCdbfl0nKTtcbmNvbnN0IFJFTU9WQUwgPSBjb2xvcnMucmVkKCdbLV0nKTtcblxuY2xhc3MgRm9ybWF0dGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBzdHJlYW06IEZvcm1hdFN0cmVhbSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxvZ2ljYWxUb1BhdGhNYXA6IHsgW2xvZ2ljYWxJZDogc3RyaW5nXTogc3RyaW5nIH0sXG4gICAgZGlmZj86IFRlbXBsYXRlRGlmZixcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbnRleHQ6IG51bWJlciA9IDMsXG4gICkge1xuICAgIC8vIFJlYWQgYWRkaXRpb25hbCBjb25zdHJ1Y3QgcGF0aHMgZnJvbSB0aGUgZGlmZiBpZiBpdCBpcyBzdXBwbGllZFxuICAgIGlmIChkaWZmKSB7XG4gICAgICB0aGlzLnJlYWRDb25zdHJ1Y3RQYXRoc0Zyb20oZGlmZik7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHByaW50KGZtdDogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgIHRoaXMuc3RyZWFtLndyaXRlKGNvbG9ycy53aGl0ZShmb3JtYXQoZm10LCAuLi5hcmdzKSkgKyAnXFxuJyk7XG4gIH1cblxuICBwdWJsaWMgd2FybmluZyhmbXQ6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICB0aGlzLnN0cmVhbS53cml0ZShjb2xvcnMueWVsbG93KGZvcm1hdChmbXQsIC4uLmFyZ3MpKSArICdcXG4nKTtcbiAgfVxuXG4gIHB1YmxpYyBmb3JtYXRTZWN0aW9uPFYsIFQgZXh0ZW5kcyBEaWZmZXJlbmNlPFY+PihcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIGVudHJ5VHlwZTogc3RyaW5nLFxuICAgIGNvbGxlY3Rpb246IERpZmZlcmVuY2VDb2xsZWN0aW9uPFYsIFQ+IHwgRGlmZmVyZW5jZTxzdHJpbmc+LFxuICAgIGZvcm1hdHRlcjogKHR5cGU6IHN0cmluZywgaWQ6IHN0cmluZywgZGlmZjogVCkgPT4gdm9pZCA9IHRoaXMuZm9ybWF0RGlmZmVyZW5jZS5iaW5kKHRoaXMpLFxuICApIHtcbiAgICBpZiAocm9zRGlmZi5pc0RpZmZlcmVuY2VJbnN0YW5jZShjb2xsZWN0aW9uKSkge1xuICAgICAgaWYgKCFjb2xsZWN0aW9uLmlzRGlmZmVyZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5wcmludFNlY3Rpb25IZWFkZXIodGl0bGUpO1xuICAgICAgdGhpcy5mb3JtYXREaWZmZXJlbmNlKGVudHJ5VHlwZSwgJycsIGNvbGxlY3Rpb24pO1xuICAgICAgdGhpcy5wcmludFNlY3Rpb25Gb290ZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNvbGxlY3Rpb24uZGlmZmVyZW5jZUNvdW50ID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5wcmludFNlY3Rpb25IZWFkZXIodGl0bGUpO1xuICAgICAgY29sbGVjdGlvbi5mb3JFYWNoRGlmZmVyZW5jZSgoaWQsIGRpZmYpID0+IGZvcm1hdHRlcihlbnRyeVR5cGUsIGlkLCBkaWZmKSk7XG4gICAgICB0aGlzLnByaW50U2VjdGlvbkZvb3RlcigpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBwcmludFNlY3Rpb25IZWFkZXIodGl0bGU6IHN0cmluZykge1xuICAgIHRoaXMucHJpbnQoY29sb3JzLnVuZGVybGluZShjb2xvcnMuYm9sZCh0aXRsZSkpKTtcbiAgfVxuXG4gIHB1YmxpYyBwcmludFNlY3Rpb25Gb290ZXIoKSB7XG4gICAgdGhpcy5wcmludCgnJyk7XG4gIH1cblxuICAvKipcbiAgICogUHJpbnQgYSBzaW1wbGUgZGlmZmVyZW5jZSBmb3IgYSBnaXZlbiBuYW1lZCBlbnRpdHkuXG4gICAqXG4gICAqIEBwYXJhbSBsb2dpY2FsSWQgdGhlIG5hbWUgb2YgdGhlIGVudGl0eSB0aGF0IGlzIGRpZmZlcmVudC5cbiAgICogQHBhcmFtIGRpZmYgdGhlIGRpZmZlcmVuY2UgdG8gYmUgcmVuZGVyZWQuXG4gICAqL1xuICBwdWJsaWMgZm9ybWF0RGlmZmVyZW5jZSh0eXBlOiBzdHJpbmcsIGxvZ2ljYWxJZDogc3RyaW5nLCBkaWZmOiBEaWZmZXJlbmNlPGFueT4gfCB1bmRlZmluZWQpIHtcbiAgICBpZiAoIWRpZmYgfHwgIWRpZmYuaXNEaWZmZXJlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgdmFsdWU7XG5cbiAgICBjb25zdCBvbGRWYWx1ZSA9IHRoaXMuZm9ybWF0VmFsdWUoZGlmZi5vbGRWYWx1ZSwgY29sb3JzLnJlZCk7XG4gICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLmZvcm1hdFZhbHVlKGRpZmYubmV3VmFsdWUsIGNvbG9ycy5ncmVlbik7XG4gICAgaWYgKGRpZmYuaXNBZGRpdGlvbikge1xuICAgICAgdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICB9IGVsc2UgaWYgKGRpZmYuaXNVcGRhdGUpIHtcbiAgICAgIHZhbHVlID0gYCR7b2xkVmFsdWV9IHRvICR7bmV3VmFsdWV9YDtcbiAgICB9IGVsc2UgaWYgKGRpZmYuaXNSZW1vdmFsKSB7XG4gICAgICB2YWx1ZSA9IG9sZFZhbHVlO1xuICAgIH1cblxuICAgIHRoaXMucHJpbnQoYCR7dGhpcy5mb3JtYXRQcmVmaXgoZGlmZil9ICR7Y29sb3JzLmN5YW4odHlwZSl9ICR7dGhpcy5mb3JtYXRMb2dpY2FsSWQobG9naWNhbElkKX06ICR7dmFsdWV9YCk7XG4gIH1cblxuICAvKipcbiAgICogUHJpbnQgYSByZXNvdXJjZSBkaWZmZXJlbmNlIGZvciBhIGdpdmVuIGxvZ2ljYWwgSUQuXG4gICAqXG4gICAqIEBwYXJhbSBsb2dpY2FsSWQgdGhlIGxvZ2ljYWwgSUQgb2YgdGhlIHJlc291cmNlIHRoYXQgY2hhbmdlZC5cbiAgICogQHBhcmFtIGRpZmYgICAgICB0aGUgY2hhbmdlIHRvIGJlIHJlbmRlcmVkLlxuICAgKi9cbiAgcHVibGljIGZvcm1hdFJlc291cmNlRGlmZmVyZW5jZShfdHlwZTogc3RyaW5nLCBsb2dpY2FsSWQ6IHN0cmluZywgZGlmZjogUmVzb3VyY2VEaWZmZXJlbmNlKSB7XG4gICAgaWYgKCFkaWZmLmlzRGlmZmVyZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmVzb3VyY2VUeXBlID0gZGlmZi5pc1JlbW92YWwgPyBkaWZmLm9sZFJlc291cmNlVHlwZSA6IGRpZmYubmV3UmVzb3VyY2VUeXBlO1xuXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgIHRoaXMucHJpbnQoXG4gICAgICBgJHt0aGlzLmZvcm1hdFByZWZpeChkaWZmKX0gJHt0aGlzLmZvcm1hdFZhbHVlKHJlc291cmNlVHlwZSwgY29sb3JzLmN5YW4pfSAke3RoaXMuZm9ybWF0TG9naWNhbElkKFxuICAgICAgICBsb2dpY2FsSWQsXG4gICAgICApfSAke3RoaXMuZm9ybWF0SW1wYWN0KGRpZmYuY2hhbmdlSW1wYWN0KX1gLFxuICAgICk7XG5cbiAgICBpZiAoZGlmZi5pc1VwZGF0ZSkge1xuICAgICAgY29uc3QgZGlmZmVyZW5jZUNvdW50ID0gZGlmZi5kaWZmZXJlbmNlQ291bnQ7XG4gICAgICBsZXQgcHJvY2Vzc2VkQ291bnQgPSAwO1xuICAgICAgZGlmZi5mb3JFYWNoRGlmZmVyZW5jZSgoXywgbmFtZSwgdmFsdWVzKSA9PiB7XG4gICAgICAgIHByb2Nlc3NlZENvdW50ICs9IDE7XG4gICAgICAgIHRoaXMuZm9ybWF0VHJlZURpZmYobmFtZSwgdmFsdWVzLCBwcm9jZXNzZWRDb3VudCA9PT0gZGlmZmVyZW5jZUNvdW50KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBmb3JtYXRQcmVmaXg8VD4oZGlmZjogRGlmZmVyZW5jZTxUPikge1xuICAgIGlmIChkaWZmLmlzQWRkaXRpb24pIHtcbiAgICAgIHJldHVybiBBRERJVElPTjtcbiAgICB9XG4gICAgaWYgKGRpZmYuaXNVcGRhdGUpIHtcbiAgICAgIHJldHVybiBVUERBVEU7XG4gICAgfVxuICAgIGlmIChkaWZmLmlzUmVtb3ZhbCkge1xuICAgICAgcmV0dXJuIFJFTU9WQUw7XG4gICAgfVxuICAgIHJldHVybiBjb2xvcnMud2hpdGUoJ1s/XScpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB2YWx1ZSB0aGUgdmFsdWUgdG8gYmUgZm9ybWF0dGVkLlxuICAgKiBAcGFyYW0gY29sb3IgdGhlIGNvbG9yIHRvIGJlIHVzZWQuXG4gICAqXG4gICAqIEByZXR1cm5zIHRoZSBmb3JtYXR0ZWQgc3RyaW5nLCB3aXRoIGNvbG9yIGFwcGxpZWQuXG4gICAqL1xuICBwdWJsaWMgZm9ybWF0VmFsdWUodmFsdWU6IGFueSwgY29sb3I6IChzdHI6IHN0cmluZykgPT4gc3RyaW5nKSB7XG4gICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gY29sb3IodmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gY29sb3IoSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gaW1wYWN0IHRoZSBpbXBhY3QgdG8gYmUgZm9ybWF0dGVkXG4gICAqIEByZXR1cm5zIGEgdXNlci1mcmllbmRseSwgY29sb3JlZCBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBpbXBhY3QuXG4gICAqL1xuICBwdWJsaWMgZm9ybWF0SW1wYWN0KGltcGFjdDogUmVzb3VyY2VJbXBhY3QpIHtcbiAgICBzd2l0Y2ggKGltcGFjdCkge1xuICAgICAgY2FzZSBSZXNvdXJjZUltcGFjdC5NQVlfUkVQTEFDRTpcbiAgICAgICAgcmV0dXJuIGNvbG9ycy5pdGFsaWMoY29sb3JzLnllbGxvdygnbWF5IGJlIHJlcGxhY2VkJykpO1xuICAgICAgY2FzZSBSZXNvdXJjZUltcGFjdC5XSUxMX1JFUExBQ0U6XG4gICAgICAgIHJldHVybiBjb2xvcnMuaXRhbGljKGNvbG9ycy5ib2xkKGNvbG9ycy5yZWQoJ3JlcGxhY2UnKSkpO1xuICAgICAgY2FzZSBSZXNvdXJjZUltcGFjdC5XSUxMX0RFU1RST1k6XG4gICAgICAgIHJldHVybiBjb2xvcnMuaXRhbGljKGNvbG9ycy5ib2xkKGNvbG9ycy5yZWQoJ2Rlc3Ryb3knKSkpO1xuICAgICAgY2FzZSBSZXNvdXJjZUltcGFjdC5XSUxMX09SUEhBTjpcbiAgICAgICAgcmV0dXJuIGNvbG9ycy5pdGFsaWMoY29sb3JzLnllbGxvdygnb3JwaGFuJykpO1xuICAgICAgY2FzZSBSZXNvdXJjZUltcGFjdC5XSUxMX1VQREFURTpcbiAgICAgIGNhc2UgUmVzb3VyY2VJbXBhY3QuV0lMTF9DUkVBVEU6XG4gICAgICBjYXNlIFJlc291cmNlSW1wYWN0Lk5PX0NIQU5HRTpcbiAgICAgICAgcmV0dXJuICcnOyAvLyBubyBleHRyYSBpbmZvIGlzIGdhaW5lZCBoZXJlXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgYSB0cmVlIG9mIGRpZmZlcmVuY2VzIHVuZGVyIGEgcGFydGljdWxhciBuYW1lLlxuICAgKiBAcGFyYW0gbmFtZSAgICB0aGUgbmFtZSBvZiB0aGUgcm9vdCBvZiB0aGUgdHJlZS5cbiAgICogQHBhcmFtIGRpZmYgICAgdGhlIGRpZmZlcmVuY2Ugb24gdGhlIHRyZWUuXG4gICAqIEBwYXJhbSBsYXN0ICAgIHdoZXRoZXIgdGhpcyBpcyB0aGUgbGFzdCBub2RlIG9mIGEgcGFyZW50IHRyZWUuXG4gICAqL1xuICBwdWJsaWMgZm9ybWF0VHJlZURpZmYobmFtZTogc3RyaW5nLCBkaWZmOiBEaWZmZXJlbmNlPGFueT4sIGxhc3Q6IGJvb2xlYW4pIHtcbiAgICBsZXQgYWRkaXRpb25hbEluZm8gPSAnJztcbiAgICBpZiAoaXNQcm9wZXJ0eURpZmZlcmVuY2UoZGlmZikpIHtcbiAgICAgIGlmIChkaWZmLmNoYW5nZUltcGFjdCA9PT0gUmVzb3VyY2VJbXBhY3QuTUFZX1JFUExBQ0UpIHtcbiAgICAgICAgYWRkaXRpb25hbEluZm8gPSAnIChtYXkgY2F1c2UgcmVwbGFjZW1lbnQpJztcbiAgICAgIH0gZWxzZSBpZiAoZGlmZi5jaGFuZ2VJbXBhY3QgPT09IFJlc291cmNlSW1wYWN0LldJTExfUkVQTEFDRSkge1xuICAgICAgICBhZGRpdGlvbmFsSW5mbyA9ICcgKHJlcXVpcmVzIHJlcGxhY2VtZW50KSc7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucHJpbnQoJyAlc+KUgCAlcyAlcyVzJywgbGFzdCA/ICfilJQnIDogJ+KUnCcsIHRoaXMuY2hhbmdlVGFnKGRpZmYub2xkVmFsdWUsIGRpZmYubmV3VmFsdWUpLCBuYW1lLCBhZGRpdGlvbmFsSW5mbyk7XG4gICAgcmV0dXJuIHRoaXMuZm9ybWF0T2JqZWN0RGlmZihkaWZmLm9sZFZhbHVlLCBkaWZmLm5ld1ZhbHVlLCBgICR7bGFzdCA/ICcgJyA6ICfilIInfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlcnMgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0d28gb2JqZWN0cywgbG9va2luZyBmb3IgdGhlIGRpZmZlcmVuY2VzIGFzIGRlZXAgYXMgcG9zc2libGUsXG4gICAqIGFuZCByZW5kZXJpbmcgYSB0cmVlIGdyYXBoIG9mIHRoZSBwYXRoIHVudGlsIHRoZSBkaWZmZXJlbmNlIGlzIGZvdW5kLlxuICAgKlxuICAgKiBAcGFyYW0gb2xkT2JqZWN0ICB0aGUgb2xkIG9iamVjdC5cbiAgICogQHBhcmFtIG5ld09iamVjdCAgdGhlIG5ldyBvYmplY3QuXG4gICAqIEBwYXJhbSBsaW5lUHJlZml4IGEgcHJlZml4IChpbmRlbnQtbGlrZSkgdG8gYmUgdXNlZCBvbiBldmVyeSBsaW5lLlxuICAgKi9cbiAgcHVibGljIGZvcm1hdE9iamVjdERpZmYob2xkT2JqZWN0OiBhbnksIG5ld09iamVjdDogYW55LCBsaW5lUHJlZml4OiBzdHJpbmcpIHtcbiAgICBpZiAoXG4gICAgICB0eXBlb2Ygb2xkT2JqZWN0ICE9PSB0eXBlb2YgbmV3T2JqZWN0IHx8XG4gICAgICBBcnJheS5pc0FycmF5KG9sZE9iamVjdCkgfHxcbiAgICAgIHR5cGVvZiBvbGRPYmplY3QgPT09ICdzdHJpbmcnIHx8XG4gICAgICB0eXBlb2Ygb2xkT2JqZWN0ID09PSAnbnVtYmVyJ1xuICAgICkge1xuICAgICAgaWYgKG9sZE9iamVjdCAhPT0gdW5kZWZpbmVkICYmIG5ld09iamVjdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb2xkT2JqZWN0ID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgbmV3T2JqZWN0ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNvbnN0IG9sZFN0ciA9IEpTT04uc3RyaW5naWZ5KG9sZE9iamVjdCwgbnVsbCwgMik7XG4gICAgICAgICAgY29uc3QgbmV3U3RyID0gSlNPTi5zdHJpbmdpZnkobmV3T2JqZWN0LCBudWxsLCAyKTtcbiAgICAgICAgICBjb25zdCBkaWZmID0gX2RpZmZTdHJpbmdzKG9sZFN0ciwgbmV3U3RyLCB0aGlzLmNvbnRleHQpO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGlmZi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5wcmludCgnJXMgICAlcyAlcycsIGxpbmVQcmVmaXgsIGkgPT09IDAgPyAn4pSU4pSAJyA6ICcgICcsIGRpZmZbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnByaW50KCclcyAgIOKUnOKUgCAlcyAlcycsIGxpbmVQcmVmaXgsIFJFTU9WQUwsIHRoaXMuZm9ybWF0VmFsdWUob2xkT2JqZWN0LCBjb2xvcnMucmVkKSk7XG4gICAgICAgICAgdGhpcy5wcmludCgnJXMgICDilJTilIAgJXMgJXMnLCBsaW5lUHJlZml4LCBBRERJVElPTiwgdGhpcy5mb3JtYXRWYWx1ZShuZXdPYmplY3QsIGNvbG9ycy5ncmVlbikpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG9sZE9iamVjdCAhPT0gdW5kZWZpbmVkIC8qICYmIG5ld09iamVjdCA9PT0gdW5kZWZpbmVkICovKSB7XG4gICAgICAgIHRoaXMucHJpbnQoJyVzICAg4pSU4pSAICVzJywgbGluZVByZWZpeCwgdGhpcy5mb3JtYXRWYWx1ZShvbGRPYmplY3QsIGNvbG9ycy5yZWQpKTtcbiAgICAgIH0gLyogaWYgKG9sZE9iamVjdCA9PT0gdW5kZWZpbmVkICYmIG5ld09iamVjdCAhPT0gdW5kZWZpbmVkKSAqLyBlbHNlIHtcbiAgICAgICAgdGhpcy5wcmludCgnJXMgICDilJTilIAgJXMnLCBsaW5lUHJlZml4LCB0aGlzLmZvcm1hdFZhbHVlKG5ld09iamVjdCwgY29sb3JzLmdyZWVuKSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGtleVNldCA9IG5ldyBTZXQoT2JqZWN0LmtleXMob2xkT2JqZWN0KSk7XG4gICAgT2JqZWN0LmtleXMobmV3T2JqZWN0KS5mb3JFYWNoKChrKSA9PiBrZXlTZXQuYWRkKGspKTtcbiAgICBjb25zdCBrZXlzID0gbmV3IEFycmF5KC4uLmtleVNldCkuZmlsdGVyKChrKSA9PiAhZGVlcEVxdWFsKG9sZE9iamVjdFtrXSwgbmV3T2JqZWN0W2tdKSkuc29ydCgpO1xuICAgIGNvbnN0IGxhc3RLZXkgPSBrZXlzW2tleXMubGVuZ3RoIC0gMV07XG4gICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgY29uc3Qgb2xkVmFsdWUgPSBvbGRPYmplY3Rba2V5XTtcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gbmV3T2JqZWN0W2tleV07XG4gICAgICBjb25zdCB0cmVlUHJlZml4ID0ga2V5ID09PSBsYXN0S2V5ID8gJ+KUlCcgOiAn4pScJztcbiAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIG5ld1ZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5wcmludChcbiAgICAgICAgICAnJXMgICAlc+KUgCAlcyAlczonLFxuICAgICAgICAgIGxpbmVQcmVmaXgsXG4gICAgICAgICAgdHJlZVByZWZpeCxcbiAgICAgICAgICB0aGlzLmNoYW5nZVRhZyhvbGRWYWx1ZSwgbmV3VmFsdWUpLFxuICAgICAgICAgIGNvbG9ycy5ibHVlKGAuJHtrZXl9YCksXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuZm9ybWF0T2JqZWN0RGlmZihvbGRWYWx1ZSwgbmV3VmFsdWUsIGAke2xpbmVQcmVmaXh9ICAgJHtrZXkgPT09IGxhc3RLZXkgPyAnICcgOiAn4pSCJ31gKTtcbiAgICAgIH0gZWxzZSBpZiAob2xkVmFsdWUgIT09IHVuZGVmaW5lZCAvKiAmJiBuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkICovKSB7XG4gICAgICAgIHRoaXMucHJpbnQoJyVzICAgJXPilIAgJXMgUmVtb3ZlZDogJXMnLCBsaW5lUHJlZml4LCB0cmVlUHJlZml4LCBSRU1PVkFMLCBjb2xvcnMuYmx1ZShgLiR7a2V5fWApKTtcbiAgICAgIH0gLyogaWYgKG9sZFZhbHVlID09PSB1bmRlZmluZWQgJiYgbmV3VmFsdWUgIT09IHVuZGVmaW5lZCAqLyBlbHNlIHtcbiAgICAgICAgdGhpcy5wcmludCgnJXMgICAlc+KUgCAlcyBBZGRlZDogJXMnLCBsaW5lUHJlZml4LCB0cmVlUHJlZml4LCBBRERJVElPTiwgY29sb3JzLmJsdWUoYC4ke2tleX1gKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBvbGRWYWx1ZSB0aGUgb2xkIHZhbHVlIG9mIGEgZGlmZmVyZW5jZS5cbiAgICogQHBhcmFtIG5ld1ZhbHVlIHRoZSBuZXcgdmFsdWUgb2YgYSBkaWZmZXJlbmNlLlxuICAgKlxuICAgKiBAcmV0dXJucyBhIHRhZyB0byBiZSByZW5kZXJlZCBpbiB0aGUgZGlmZiwgcmVmbGVjdGluZyB3aGV0aGVyIHRoZSBkaWZmZXJlbmNlXG4gICAqICAgICAgd2FzIGFuIEFERElUSU9OLCBVUERBVEUgb3IgUkVNT1ZBTC5cbiAgICovXG4gIHB1YmxpYyBjaGFuZ2VUYWcob2xkVmFsdWU6IGFueSB8IHVuZGVmaW5lZCwgbmV3VmFsdWU6IGFueSB8IHVuZGVmaW5lZCk6IHN0cmluZyB7XG4gICAgaWYgKG9sZFZhbHVlICE9PSB1bmRlZmluZWQgJiYgbmV3VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIFVQREFURTtcbiAgICB9IGVsc2UgaWYgKG9sZFZhbHVlICE9PSB1bmRlZmluZWQgLyogJiYgbmV3VmFsdWUgPT09IHVuZGVmaW5lZCovKSB7XG4gICAgICByZXR1cm4gUkVNT1ZBTDtcbiAgICB9IC8qIGlmIChvbGRWYWx1ZSA9PT0gdW5kZWZpbmVkICYmIG5ld1ZhbHVlICE9PSB1bmRlZmluZWQpICovIGVsc2Uge1xuICAgICAgcmV0dXJuIEFERElUSU9OO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kICdhbGl5dW46cm9zOnBhdGgnIG1ldGFkYXRhIGluIHRoZSBkaWZmIGFuZCBhZGQgaXQgdG8gdGhlIGxvZ2ljYWxUb1BhdGhNYXBcbiAgICpcbiAgICogVGhlcmUgYXJlIG11bHRpcGxlIHNvdXJjZXMgb2YgbG9naWNhbElEIC0+IHBhdGggbWFwcGluZ3M6IHN5bnRoIG1ldGFkYXRhXG4gICAqIGFuZCByZXNvdXJjZSBtZXRhZGF0YSwgYW5kIHdlIGNvbWJpbmUgYWxsIHNvdXJjZXMgaW50byBhIHNpbmdsZSBtYXAuXG4gICAqL1xuICBwdWJsaWMgcmVhZENvbnN0cnVjdFBhdGhzRnJvbSh0ZW1wbGF0ZURpZmY6IFRlbXBsYXRlRGlmZikge1xuICAgIGZvciAoY29uc3QgW2xvZ2ljYWxJZCwgcmVzb3VyY2VEaWZmXSBvZiBPYmplY3QuZW50cmllcyh0ZW1wbGF0ZURpZmYucmVzb3VyY2VzKSkge1xuICAgICAgaWYgKCFyZXNvdXJjZURpZmYpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG9sZFBhdGhNZXRhZGF0YSA9XG4gICAgICAgIHJlc291cmNlRGlmZi5vbGRWYWx1ZSAmJiByZXNvdXJjZURpZmYub2xkVmFsdWUuTWV0YWRhdGEgJiYgcmVzb3VyY2VEaWZmLm9sZFZhbHVlLk1ldGFkYXRhW1BBVEhfTUVUQURBVEFfS0VZXTtcbiAgICAgIGlmIChvbGRQYXRoTWV0YWRhdGEgJiYgIShsb2dpY2FsSWQgaW4gdGhpcy5sb2dpY2FsVG9QYXRoTWFwKSkge1xuICAgICAgICB0aGlzLmxvZ2ljYWxUb1BhdGhNYXBbbG9naWNhbElkXSA9IG9sZFBhdGhNZXRhZGF0YTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbmV3UGF0aE1ldGFkYXRhID1cbiAgICAgICAgcmVzb3VyY2VEaWZmLm5ld1ZhbHVlICYmIHJlc291cmNlRGlmZi5uZXdWYWx1ZS5NZXRhZGF0YSAmJiByZXNvdXJjZURpZmYubmV3VmFsdWUuTWV0YWRhdGFbUEFUSF9NRVRBREFUQV9LRVldO1xuICAgICAgaWYgKG5ld1BhdGhNZXRhZGF0YSAmJiAhKGxvZ2ljYWxJZCBpbiB0aGlzLmxvZ2ljYWxUb1BhdGhNYXApKSB7XG4gICAgICAgIHRoaXMubG9naWNhbFRvUGF0aE1hcFtsb2dpY2FsSWRdID0gbmV3UGF0aE1ldGFkYXRhO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBmb3JtYXRMb2dpY2FsSWQobG9naWNhbElkOiBzdHJpbmcpIHtcbiAgICAvLyBpZiB3ZSBoYXZlIGEgcGF0aCBpbiB0aGUgbWFwLCByZXR1cm4gaXRcbiAgICBjb25zdCBub3JtYWxpemVkID0gdGhpcy5ub3JtYWxpemVkTG9naWNhbElkUGF0aChsb2dpY2FsSWQpO1xuXG4gICAgaWYgKG5vcm1hbGl6ZWQpIHtcbiAgICAgIHJldHVybiBgJHtub3JtYWxpemVkfSAke2NvbG9ycy5ncmF5KGxvZ2ljYWxJZCl9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gbG9naWNhbElkO1xuICB9XG5cbiAgcHVibGljIG5vcm1hbGl6ZWRMb2dpY2FsSWRQYXRoKGxvZ2ljYWxJZDogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAvLyBpZiB3ZSBoYXZlIGEgcGF0aCBpbiB0aGUgbWFwLCByZXR1cm4gaXRcbiAgICBjb25zdCBwYXRoID0gdGhpcy5sb2dpY2FsVG9QYXRoTWFwW2xvZ2ljYWxJZF07XG4gICAgcmV0dXJuIHBhdGggPyBub3JtYWxpemVQYXRoKHBhdGgpIDogdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogUGF0aCBpcyBzdXBwb3NlZCB0byBzdGFydCB3aXRoIFwiL3N0YWNrLW5hbWVcIi4gSWYgdGhpcyBpcyB0aGUgY2FzZSAoaS5lLiBwYXRoIGhhcyBtb3JlIHRoYW5cbiAgICAgKiB0d28gY29tcG9uZW50cywgd2UgcmVtb3ZlIHRoZSBmaXJzdCBwYXJ0LiBPdGhlcndpc2UsIHdlIGp1c3QgdXNlIHRoZSBmdWxsIHBhdGguXG4gICAgICogQHBhcmFtIHBcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBub3JtYWxpemVQYXRoKHA6IHN0cmluZykge1xuICAgICAgaWYgKHAuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgIHAgPSBwLnN1YnN0cigxKTtcbiAgICAgIH1cblxuICAgICAgbGV0IHBhcnRzID0gcC5zcGxpdCgnLycpO1xuICAgICAgaWYgKHBhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgcGFydHMgPSBwYXJ0cy5zbGljZSgxKTtcblxuICAgICAgICAvLyByZW1vdmUgdGhlIGxhc3QgY29tcG9uZW50IGlmIGl0J3MgXCJSZXNvdXJjZVwiIG9yIFwiRGVmYXVsdFwiIChpZiB3ZSBoYXZlIG1vcmUgdGhhbiBhIHNpbmdsZSBjb21wb25lbnQpXG4gICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgY29uc3QgbGFzdCA9IHBhcnRzW3BhcnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGlmIChsYXN0ID09PSAnUmVzb3VyY2UnIHx8IGxhc3QgPT09ICdEZWZhdWx0Jykge1xuICAgICAgICAgICAgcGFydHMgPSBwYXJ0cy5zbGljZSgwLCBwYXJ0cy5sZW5ndGggLSAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwID0gcGFydHMuam9pbignLycpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHA7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGZvcm1hdFNlY3VyaXR5R3JvdXBDaGFuZ2VzKGNoYW5nZXM6IFNlY3VyaXR5R3JvdXBDaGFuZ2VzKSB7XG4gICAgaWYgKCFjaGFuZ2VzLmhhc0NoYW5nZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnByaW50U2VjdGlvbkhlYWRlcignU2VjdXJpdHkgR3JvdXAgQ2hhbmdlcycpO1xuICAgIHRoaXMucHJpbnQoZm9ybWF0VGFibGUodGhpcy5kZWVwU3Vic3RpdHV0ZUJyYWNlZExvZ2ljYWxJZHMoY2hhbmdlcy5zdW1tYXJpemUoKSksIHRoaXMuc3RyZWFtLmNvbHVtbnMpKTtcbiAgfVxuXG4gIHB1YmxpYyBkZWVwU3Vic3RpdHV0ZUJyYWNlZExvZ2ljYWxJZHMocm93czogc3RyaW5nW11bXSk6IHN0cmluZ1tdW10ge1xuICAgIHJldHVybiByb3dzLm1hcCgocm93KSA9PiByb3cubWFwKHRoaXMuc3Vic3RpdHV0ZUJyYWNlZExvZ2ljYWxJZHMuYmluZCh0aGlzKSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnN0aXR1dGUgYWxsIHN0cmluZ3MgbGlrZSAke0xvZ0lkLnh4eH0gd2l0aCB0aGUgcGF0aCBpbnN0ZWFkIG9mIHRoZSBsb2dpY2FsIElEXG4gICAqL1xuICBwdWJsaWMgc3Vic3RpdHV0ZUJyYWNlZExvZ2ljYWxJZHMoc291cmNlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBzb3VyY2UucmVwbGFjZSgvXFwkXFx7KFteLn1dKykoLltefV0rKT9cXH0vZ2ksIChfbWF0Y2gsIGxvZ0lkLCBzdWZmaXgpID0+IHtcbiAgICAgIHJldHVybiAnJHsnICsgKHRoaXMubm9ybWFsaXplZExvZ2ljYWxJZFBhdGgobG9nSWQpIHx8IGxvZ0lkKSArIChzdWZmaXggfHwgJycpICsgJ30nO1xuICAgIH0pO1xuICB9XG59XG5cbi8qKlxuICogQSBwYXRjaCBhcyByZXR1cm5lZCBieSBgYGRpZmYuc3RydWN0dXJlZFBhdGNoYGAuXG4gKi9cbmludGVyZmFjZSBQYXRjaCB7XG4gIC8qKlxuICAgKiBIdW5rcyBpbiB0aGUgcGF0Y2guXG4gICAqL1xuICBodW5rczogUmVhZG9ubHlBcnJheTxQYXRjaEh1bms+O1xufVxuXG4vKipcbiAqIEEgaHVuayBpbiBhIHBhdGNoIHByb2R1Y2VkIGJ5IGBgZGlmZi5zdHJ1Y3R1cmVkUGF0Y2hgYC5cbiAqL1xuaW50ZXJmYWNlIFBhdGNoSHVuayB7XG4gIG9sZFN0YXJ0OiBudW1iZXI7XG4gIG9sZExpbmVzOiBudW1iZXI7XG4gIG5ld1N0YXJ0OiBudW1iZXI7XG4gIG5ld0xpbmVzOiBudW1iZXI7XG4gIGxpbmVzOiBzdHJpbmdbXTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgdW5pZmllZCBkaWZmIG9mIHR3byBzdHJpbmdzLlxuICpcbiAqIEBwYXJhbSBvbGRTdHIgIHRoZSBcIm9sZFwiIHZlcnNpb24gb2YgdGhlIHN0cmluZy5cbiAqIEBwYXJhbSBuZXdTdHIgIHRoZSBcIm5ld1wiIHZlcnNpb24gb2YgdGhlIHN0cmluZy5cbiAqIEBwYXJhbSBjb250ZXh0IHRoZSBudW1iZXIgb2YgY29udGV4dCBsaW5lcyB0byB1c2UgaW4gYXJiaXRyYXJ5IEpTT04gZGlmZi5cbiAqXG4gKiBAcmV0dXJucyBhbiBhcnJheSBvZiBkaWZmIGxpbmVzLlxuICovXG5mdW5jdGlvbiBfZGlmZlN0cmluZ3Mob2xkU3RyOiBzdHJpbmcsIG5ld1N0cjogc3RyaW5nLCBjb250ZXh0OiBudW1iZXIpOiBzdHJpbmdbXSB7XG4gIGNvbnN0IHBhdGNoOiBQYXRjaCA9IHN0cnVjdHVyZWRQYXRjaChudWxsLCBudWxsLCBvbGRTdHIsIG5ld1N0ciwgbnVsbCwgbnVsbCwgeyBjb250ZXh0IH0pO1xuICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuICBmb3IgKGNvbnN0IGh1bmsgb2YgcGF0Y2guaHVua3MpIHtcbiAgICByZXN1bHQucHVzaChjb2xvcnMubWFnZW50YShgQEAgLSR7aHVuay5vbGRTdGFydH0sJHtodW5rLm9sZExpbmVzfSArJHtodW5rLm5ld1N0YXJ0fSwke2h1bmsubmV3TGluZXN9IEBAYCkpO1xuICAgIGNvbnN0IGJhc2VJbmRlbnQgPSBfZmluZEluZGVudChodW5rLmxpbmVzKTtcbiAgICBmb3IgKGNvbnN0IGxpbmUgb2YgaHVuay5saW5lcykge1xuICAgICAgLy8gRG9uJ3QgY2FyZSBhYm91dCB0ZXJtaW5hdGlvbiBuZXdsaW5lLlxuICAgICAgaWYgKGxpbmUgPT09ICdcXFxcIE5vIG5ld2xpbmUgYXQgZW5kIG9mIGZpbGUnKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgY29uc3QgbWFya2VyID0gbGluZS5jaGFyQXQoMCk7XG4gICAgICBjb25zdCB0ZXh0ID0gbGluZS5zbGljZSgxICsgYmFzZUluZGVudCk7XG4gICAgICBzd2l0Y2ggKG1hcmtlcikge1xuICAgICAgICBjYXNlICcgJzpcbiAgICAgICAgICByZXN1bHQucHVzaChgJHtDT05URVhUfSAke3RleHR9YCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgIHJlc3VsdC5wdXNoKGNvbG9ycy5ib2xkKGAke0FERElUSU9OfSAke2NvbG9ycy5ncmVlbih0ZXh0KX1gKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgIHJlc3VsdC5wdXNoKGNvbG9ycy5ib2xkKGAke1JFTU9WQUx9ICR7Y29sb3JzLnJlZCh0ZXh0KX1gKSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGRpZmYgbWFya2VyOiAke21hcmtlcn0gKGZ1bGwgbGluZTogJHtsaW5lfSlgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcblxuICBmdW5jdGlvbiBfZmluZEluZGVudChsaW5lczogc3RyaW5nW10pOiBudW1iZXIge1xuICAgIGxldCBpbmRlbnQgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcbiAgICBmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGluZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAobGluZS5jaGFyQXQoaSkgIT09ICcgJykge1xuICAgICAgICAgIGluZGVudCA9IGluZGVudCA+IGkgLSAxID8gaSAtIDEgOiBpbmRlbnQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGluZGVudDtcbiAgfVxufVxuIl19