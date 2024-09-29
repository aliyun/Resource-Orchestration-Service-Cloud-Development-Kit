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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZm9ybWF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUFzQztBQUN0QywrQkFBOEI7QUFDOUIsbURBQXVHO0FBRXZHLHNDQUF3QztBQUN4QyxpREFBNkM7QUFFN0MsbUNBQW1DO0FBRW5DLGNBQWM7QUFDZCxNQUFNLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO0FBRTVDLDBEQUEwRDtBQUMxRCwyQ0FBMkM7QUFDM0MsTUFBTSxFQUFFLGVBQWUsRUFBRSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQU81Qzs7Ozs7Ozs7R0FRRztBQUNILFNBQWdCLGlCQUFpQixDQUMvQixNQUFvQixFQUNwQixZQUEwQixFQUMxQixtQkFBb0QsRUFBRSxFQUN0RCxVQUFrQixDQUFDO0lBRW5CLE1BQU0sU0FBUyxHQUFHLElBQUksU0FBUyxDQUFDLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDakYsSUFBSSxZQUFZLENBQUMsV0FBVyxFQUFFO1FBQzVCLFNBQVMsQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDakY7SUFDRCxTQUFTLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzVFLFNBQVMsQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkUsU0FBUyxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0RSxTQUFTLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzVFLFNBQVMsQ0FBQyxhQUFhLENBQ3JCLFdB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QUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDcEMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtvQkFDMUIsTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7b0JBQ3pDLE1BQU07aUJBQ1A7YUFDRjtTQUNGO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjb2xvcnMgZnJvbSAnY29sb3JzL3NhZmUnO1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAndXRpbCc7XG5pbXBvcnQgeyBEaWZmZXJlbmNlLCBpc1Byb3BlcnR5RGlmZmVyZW5jZSwgUmVzb3VyY2VEaWZmZXJlbmNlLCBSZXNvdXJjZUltcGFjdCB9IGZyb20gJy4vZGlmZi10ZW1wbGF0ZSc7XG5pbXBvcnQgeyBEaWZmZXJlbmNlQ29sbGVjdGlvbiwgVGVtcGxhdGVEaWZmIH0gZnJvbSAnLi9kaWZmL3R5cGVzJztcbmltcG9ydCB7IGRlZXBFcXVhbCB9IGZyb20gJy4vZGlmZi91dGlsJztcbmltcG9ydCB7IGZvcm1hdFRhYmxlIH0gZnJvbSAnLi9mb3JtYXQtdGFibGUnO1xuaW1wb3J0IHsgU2VjdXJpdHlHcm91cENoYW5nZXMgfSBmcm9tICcuL25ldHdvcmsvc2VjdXJpdHktZ3JvdXAtY2hhbmdlcyc7XG5pbXBvcnQgKiBhcyByb3NEaWZmIGZyb20gXCIuL2luZGV4XCI7XG5cbi8vIGZyb20gY3gtYXBpXG5jb25zdCBQQVRIX01FVEFEQVRBX0tFWSA9ICdhbGl5dW46cm9zOnBhdGgnO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tdmFyLXJlcXVpcmVzXG5jb25zdCB7IHN0cnVjdHVyZWRQYXRjaCB9ID0gcmVxdWlyZSgnZGlmZicpO1xuLyogZXNsaW50LWVuYWJsZSAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1hdFN0cmVhbSBleHRlbmRzIE5vZGVKUy5Xcml0YWJsZVN0cmVhbSB7XG4gIGNvbHVtbnM/OiBudW1iZXI7XG59XG5cbi8qKlxuICogUmVuZGVycyB0ZW1wbGF0ZSBkaWZmZXJlbmNlcyB0byB0aGUgcHJvY2VzcycgY29uc29sZS5cbiAqXG4gKiBAcGFyYW0gc3RyZWFtICAgICAgICAgICBUaGUgSU8gc3RyZWFtIHdoZXJlIHRvIG91dHB1dCB0aGUgcmVuZGVyZWQgZGlmZi5cbiAqIEBwYXJhbSB0ZW1wbGF0ZURpZmYgICAgIFRlbXBsYXRlRGlmZiB0byBiZSByZW5kZXJlZCB0byB0aGUgY29uc29sZS5cbiAqIEBwYXJhbSBsb2dpY2FsVG9QYXRoTWFwIEEgbWFwIGZyb20gbG9naWNhbCBJRCB0byBjb25zdHJ1Y3QgcGF0aC4gVXNlZnVsIGluXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHRoZXJlIGlzIG5vIGFsaXl1bjpyb3M6cGF0aCBtZXRhZGF0YSBpbiB0aGUgdGVtcGxhdGUuXG4gKiBAcGFyYW0gY29udGV4dCAgICAgICAgICB0aGUgbnVtYmVyIG9mIGNvbnRleHQgbGluZXMgdG8gdXNlIGluIGFyYml0cmFyeSBKU09OIGRpZmYgKGRlZmF1bHRzIHRvIDMpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGlmZmVyZW5jZXMoXG4gIHN0cmVhbTogRm9ybWF0U3RyZWFtLFxuICB0ZW1wbGF0ZURpZmY6IFRlbXBsYXRlRGlmZixcbiAgbG9naWNhbFRvUGF0aE1hcDogeyBbbG9naWNhbElkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9LFxuICBjb250ZXh0OiBudW1iZXIgPSAzLFxuKSB7XG4gIGNvbnN0IGZvcm1hdHRlciA9IG5ldyBGb3JtYXR0ZXIoc3RyZWFtLCBsb2dpY2FsVG9QYXRoTWFwLCB0ZW1wbGF0ZURpZmYsIGNvbnRleHQpO1xuICBpZiAodGVtcGxhdGVEaWZmLmRlc2NyaXB0aW9uKSB7XG4gICAgZm9ybWF0dGVyLmZvcm1hdFNlY3Rpb24oJ0Rlc2NyaXB0aW9uJywgJ0Rlc2NyaXB0aW9uJywgdGVtcGxhdGVEaWZmLmRlc2NyaXB0aW9uKTtcbiAgfVxuICBmb3JtYXR0ZXIuZm9ybWF0U2VjdGlvbignUGFyYW1ldGVycycsICdQYXJhbWV0ZXInLCB0ZW1wbGF0ZURpZmYucGFyYW1ldGVycyk7XG4gIGZvcm1hdHRlci5mb3JtYXRTZWN0aW9uKCdNZXRhZGF0YScsICdNZXRhZGF0YScsIHRlbXBsYXRlRGlmZi5tZXRhZGF0YSk7XG4gIGZvcm1hdHRlci5mb3JtYXRTZWN0aW9uKCdNYXBwaW5ncycsICdNYXBwaW5nJywgdGVtcGxhdGVEaWZmLm1hcHBpbmdzKTtcbiAgZm9ybWF0dGVyLmZvcm1hdFNlY3Rpb24oJ0NvbmRpdGlvbnMnLCAnQ29uZGl0aW9uJywgdGVtcGxhdGVEaWZmLmNvbmRpdGlvbnMpO1xuICBmb3JtYXR0ZXIuZm9ybWF0U2VjdGlvbihcbiAgICAnUmVzb3VyY2VzJyxcbiAgICAnUmVzb3VyY2UnLFxuICAgIHRlbXBsYXRlRGlmZi5yZXNvdXJjZXMsXG4gICAgZm9ybWF0dGVyLmZvcm1hdFJlc291cmNlRGlmZmVyZW5jZS5iaW5kKGZvcm1hdHRlciksXG4gICk7XG4gIGZvcm1hdHRlci5mb3JtYXRTZWN0aW9uKCdPdXRwdXRzJywgJ091dHB1dCcsIHRlbXBsYXRlRGlmZi5vdXRwdXRzKTtcbiAgZm9ybWF0dGVyLmZvcm1hdFNlY3Rpb24oJ090aGVyIENoYW5nZXMnLCAnVW5rbm93bicsIHRlbXBsYXRlRGlmZi51bmtub3duKTtcbn1cblxuY29uc3QgQURESVRJT04gPSBjb2xvcnMuZ3JlZW4oJ1srXScpO1xuY29uc3QgQ09OVEVYVCA9IGNvbG9ycy5ncmV5KCdbIF0nKTtcbmNvbnN0IFVQREFURSA9IGNvbG9ycy55ZWxsb3coJ1t+XScpO1xuY29uc3QgUkVNT1ZBTCA9IGNvbG9ycy5yZWQoJ1stXScpO1xuXG5jbGFzcyBGb3JtYXR0ZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IHN0cmVhbTogRm9ybWF0U3RyZWFtLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgbG9naWNhbFRvUGF0aE1hcDogeyBbbG9naWNhbElkOiBzdHJpbmddOiBzdHJpbmcgfSxcbiAgICBkaWZmPzogVGVtcGxhdGVEaWZmLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgY29udGV4dDogbnVtYmVyID0gMyxcbiAgKSB7XG4gICAgLy8gUmVhZCBhZGRpdGlvbmFsIGNvbnN0cnVjdCBwYXRocyBmcm9tIHRoZSBkaWZmIGlmIGl0IGlzIHN1cHBsaWVkXG4gICAgaWYgKGRpZmYpIHtcbiAgICAgIHRoaXMucmVhZENvbnN0cnVjdFBhdGhzRnJvbShkaWZmKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcHJpbnQoZm10OiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgdGhpcy5zdHJlYW0ud3JpdGUoY29sb3JzLndoaXRlKGZvcm1hdChmbXQsIC4uLmFyZ3MpKSArICdcXG4nKTtcbiAgfVxuXG4gIHB1YmxpYyB3YXJuaW5nKGZtdDogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgIHRoaXMuc3RyZWFtLndyaXRlKGNvbG9ycy55ZWxsb3coZm9ybWF0KGZtdCwgLi4uYXJncykpICsgJ1xcbicpO1xuICB9XG5cbiAgcHVibGljIGZvcm1hdFNlY3Rpb248ViwgVCBleHRlbmRzIERpZmZlcmVuY2U8Vj4+KFxuICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgZW50cnlUeXBlOiBzdHJpbmcsXG4gICAgY29sbGVjdGlvbjogRGlmZmVyZW5jZUNvbGxlY3Rpb248ViwgVD4gfCBEaWZmZXJlbmNlPHN0cmluZz4sXG4gICAgZm9ybWF0dGVyOiAodHlwZTogc3RyaW5nLCBpZDogc3RyaW5nLCBkaWZmOiBUKSA9PiB2b2lkID0gdGhpcy5mb3JtYXREaWZmZXJlbmNlLmJpbmQodGhpcyksXG4gICkge1xuICAgIGlmIChyb3NEaWZmLmlzRGlmZmVyZW5jZUluc3RhbmNlKGNvbGxlY3Rpb24pKSB7XG4gICAgICBpZiAoIWNvbGxlY3Rpb24uaXNEaWZmZXJlbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnByaW50U2VjdGlvbkhlYWRlcih0aXRsZSk7XG4gICAgICB0aGlzLmZvcm1hdERpZmZlcmVuY2UoZW50cnlUeXBlLCAnJywgY29sbGVjdGlvbik7XG4gICAgICB0aGlzLnByaW50U2VjdGlvbkZvb3RlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY29sbGVjdGlvbi5kaWZmZXJlbmNlQ291bnQgPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnByaW50U2VjdGlvbkhlYWRlcih0aXRsZSk7XG4gICAgICBjb2xsZWN0aW9uLmZvckVhY2hEaWZmZXJlbmNlKChpZCwgZGlmZikgPT4gZm9ybWF0dGVyKGVudHJ5VHlwZSwgaWQsIGRpZmYpKTtcbiAgICAgIHRoaXMucHJpbnRTZWN0aW9uRm9vdGVyKCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHByaW50U2VjdGlvbkhlYWRlcih0aXRsZTogc3RyaW5nKSB7XG4gICAgdGhpcy5wcmludChjb2xvcnMudW5kZXJsaW5lKGNvbG9ycy5ib2xkKHRpdGxlKSkpO1xuICB9XG5cbiAgcHVibGljIHByaW50U2VjdGlvbkZvb3RlcigpIHtcbiAgICB0aGlzLnByaW50KCcnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmludCBhIHNpbXBsZSBkaWZmZXJlbmNlIGZvciBhIGdpdmVuIG5hbWVkIGVudGl0eS5cbiAgICpcbiAgICogQHBhcmFtIGxvZ2ljYWxJZCB0aGUgbmFtZSBvZiB0aGUgZW50aXR5IHRoYXQgaXMgZGlmZmVyZW50LlxuICAgKiBAcGFyYW0gZGlmZiB0aGUgZGlmZmVyZW5jZSB0byBiZSByZW5kZXJlZC5cbiAgICovXG4gIHB1YmxpYyBmb3JtYXREaWZmZXJlbmNlKHR5cGU6IHN0cmluZywgbG9naWNhbElkOiBzdHJpbmcsIGRpZmY6IERpZmZlcmVuY2U8YW55PiB8IHVuZGVmaW5lZCkge1xuICAgIGlmICghZGlmZiB8fCAhZGlmZi5pc0RpZmZlcmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCB2YWx1ZTtcblxuICAgIGNvbnN0IG9sZFZhbHVlID0gdGhpcy5mb3JtYXRWYWx1ZShkaWZmLm9sZFZhbHVlLCBjb2xvcnMucmVkKTtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMuZm9ybWF0VmFsdWUoZGlmZi5uZXdWYWx1ZSwgY29sb3JzLmdyZWVuKTtcbiAgICBpZiAoZGlmZi5pc0FkZGl0aW9uKSB7XG4gICAgICB2YWx1ZSA9IG5ld1ZhbHVlO1xuICAgIH0gZWxzZSBpZiAoZGlmZi5pc1VwZGF0ZSkge1xuICAgICAgdmFsdWUgPSBgJHtvbGRWYWx1ZX0gdG8gJHtuZXdWYWx1ZX1gO1xuICAgIH0gZWxzZSBpZiAoZGlmZi5pc1JlbW92YWwpIHtcbiAgICAgIHZhbHVlID0gb2xkVmFsdWU7XG4gICAgfVxuXG4gICAgdGhpcy5wcmludChgJHt0aGlzLmZvcm1hdFByZWZpeChkaWZmKX0gJHtjb2xvcnMuY3lhbih0eXBlKX0gJHt0aGlzLmZvcm1hdExvZ2ljYWxJZChsb2dpY2FsSWQpfTogJHt2YWx1ZX1gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmludCBhIHJlc291cmNlIGRpZmZlcmVuY2UgZm9yIGEgZ2l2ZW4gbG9naWNhbCBJRC5cbiAgICpcbiAgICogQHBhcmFtIGxvZ2ljYWxJZCB0aGUgbG9naWNhbCBJRCBvZiB0aGUgcmVzb3VyY2UgdGhhdCBjaGFuZ2VkLlxuICAgKiBAcGFyYW0gZGlmZiAgICAgIHRoZSBjaGFuZ2UgdG8gYmUgcmVuZGVyZWQuXG4gICAqL1xuICBwdWJsaWMgZm9ybWF0UmVzb3VyY2VEaWZmZXJlbmNlKF90eXBlOiBzdHJpbmcsIGxvZ2ljYWxJZDogc3RyaW5nLCBkaWZmOiBSZXNvdXJjZURpZmZlcmVuY2UpIHtcbiAgICBpZiAoIWRpZmYuaXNEaWZmZXJlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCByZXNvdXJjZVR5cGUgPSBkaWZmLmlzUmVtb3ZhbCA/IGRpZmYub2xkUmVzb3VyY2VUeXBlIDogZGlmZi5uZXdSZXNvdXJjZVR5cGU7XG5cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgdGhpcy5wcmludChcbiAgICAgIGAke3RoaXMuZm9ybWF0UHJlZml4KGRpZmYpfSAke3RoaXMuZm9ybWF0VmFsdWUocmVzb3VyY2VUeXBlLCBjb2xvcnMuY3lhbil9ICR7dGhpcy5mb3JtYXRMb2dpY2FsSWQoXG4gICAgICAgIGxvZ2ljYWxJZCxcbiAgICAgICl9ICR7dGhpcy5mb3JtYXRJbXBhY3QoZGlmZi5jaGFuZ2VJbXBhY3QpfWAsXG4gICAgKTtcblxuICAgIGlmIChkaWZmLmlzVXBkYXRlKSB7XG4gICAgICBjb25zdCBkaWZmZXJlbmNlQ291bnQgPSBkaWZmLmRpZmZlcmVuY2VDb3VudDtcbiAgICAgIGxldCBwcm9jZXNzZWRDb3VudCA9IDA7XG4gICAgICBkaWZmLmZvckVhY2hEaWZmZXJlbmNlKChfLCBuYW1lLCB2YWx1ZXMpID0+IHtcbiAgICAgICAgcHJvY2Vzc2VkQ291bnQgKz0gMTtcbiAgICAgICAgdGhpcy5mb3JtYXRUcmVlRGlmZihuYW1lLCB2YWx1ZXMsIHByb2Nlc3NlZENvdW50ID09PSBkaWZmZXJlbmNlQ291bnQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGZvcm1hdFByZWZpeDxUPihkaWZmOiBEaWZmZXJlbmNlPFQ+KSB7XG4gICAgaWYgKGRpZmYuaXNBZGRpdGlvbikge1xuICAgICAgcmV0dXJuIEFERElUSU9OO1xuICAgIH1cbiAgICBpZiAoZGlmZi5pc1VwZGF0ZSkge1xuICAgICAgcmV0dXJuIFVQREFURTtcbiAgICB9XG4gICAgaWYgKGRpZmYuaXNSZW1vdmFsKSB7XG4gICAgICByZXR1cm4gUkVNT1ZBTDtcbiAgICB9XG4gICAgcmV0dXJuIGNvbG9ycy53aGl0ZSgnWz9dJyk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHZhbHVlIHRoZSB2YWx1ZSB0byBiZSBmb3JtYXR0ZWQuXG4gICAqIEBwYXJhbSBjb2xvciB0aGUgY29sb3IgdG8gYmUgdXNlZC5cbiAgICpcbiAgICogQHJldHVybnMgdGhlIGZvcm1hdHRlZCBzdHJpbmcsIHdpdGggY29sb3IgYXBwbGllZC5cbiAgICovXG4gIHB1YmxpYyBmb3JtYXRWYWx1ZSh2YWx1ZTogYW55LCBjb2xvcjogKHN0cjogc3RyaW5nKSA9PiBzdHJpbmcpIHtcbiAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBjb2xvcih2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBjb2xvcihKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBpbXBhY3QgdGhlIGltcGFjdCB0byBiZSBmb3JtYXR0ZWRcbiAgICogQHJldHVybnMgYSB1c2VyLWZyaWVuZGx5LCBjb2xvcmVkIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIGltcGFjdC5cbiAgICovXG4gIHB1YmxpYyBmb3JtYXRJbXBhY3QoaW1wYWN0OiBSZXNvdXJjZUltcGFjdCkge1xuICAgIHN3aXRjaCAoaW1wYWN0KSB7XG4gICAgICBjYXNlIFJlc291cmNlSW1wYWN0Lk1BWV9SRVBMQUNFOlxuICAgICAgICByZXR1cm4gY29sb3JzLml0YWxpYyhjb2xvcnMueWVsbG93KCdtYXkgYmUgcmVwbGFjZWQnKSk7XG4gICAgICBjYXNlIFJlc291cmNlSW1wYWN0LldJTExfUkVQTEFDRTpcbiAgICAgICAgcmV0dXJuIGNvbG9ycy5pdGFsaWMoY29sb3JzLmJvbGQoY29sb3JzLnJlZCgncmVwbGFjZScpKSk7XG4gICAgICBjYXNlIFJlc291cmNlSW1wYWN0LldJTExfREVTVFJPWTpcbiAgICAgICAgcmV0dXJuIGNvbG9ycy5pdGFsaWMoY29sb3JzLmJvbGQoY29sb3JzLnJlZCgnZGVzdHJveScpKSk7XG4gICAgICBjYXNlIFJlc291cmNlSW1wYWN0LldJTExfT1JQSEFOOlxuICAgICAgICByZXR1cm4gY29sb3JzLml0YWxpYyhjb2xvcnMueWVsbG93KCdvcnBoYW4nKSk7XG4gICAgICBjYXNlIFJlc291cmNlSW1wYWN0LldJTExfVVBEQVRFOlxuICAgICAgY2FzZSBSZXNvdXJjZUltcGFjdC5XSUxMX0NSRUFURTpcbiAgICAgIGNhc2UgUmVzb3VyY2VJbXBhY3QuTk9fQ0hBTkdFOlxuICAgICAgICByZXR1cm4gJyc7IC8vIG5vIGV4dHJhIGluZm8gaXMgZ2FpbmVkIGhlcmVcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVycyBhIHRyZWUgb2YgZGlmZmVyZW5jZXMgdW5kZXIgYSBwYXJ0aWN1bGFyIG5hbWUuXG4gICAqIEBwYXJhbSBuYW1lICAgIHRoZSBuYW1lIG9mIHRoZSByb290IG9mIHRoZSB0cmVlLlxuICAgKiBAcGFyYW0gZGlmZiAgICB0aGUgZGlmZmVyZW5jZSBvbiB0aGUgdHJlZS5cbiAgICogQHBhcmFtIGxhc3QgICAgd2hldGhlciB0aGlzIGlzIHRoZSBsYXN0IG5vZGUgb2YgYSBwYXJlbnQgdHJlZS5cbiAgICovXG4gIHB1YmxpYyBmb3JtYXRUcmVlRGlmZihuYW1lOiBzdHJpbmcsIGRpZmY6IERpZmZlcmVuY2U8YW55PiwgbGFzdDogYm9vbGVhbikge1xuICAgIGxldCBhZGRpdGlvbmFsSW5mbyA9ICcnO1xuICAgIGlmIChpc1Byb3BlcnR5RGlmZmVyZW5jZShkaWZmKSkge1xuICAgICAgaWYgKGRpZmYuY2hhbmdlSW1wYWN0ID09PSBSZXNvdXJjZUltcGFjdC5NQVlfUkVQTEFDRSkge1xuICAgICAgICBhZGRpdGlvbmFsSW5mbyA9ICcgKG1heSBjYXVzZSByZXBsYWNlbWVudCknO1xuICAgICAgfSBlbHNlIGlmIChkaWZmLmNoYW5nZUltcGFjdCA9PT0gUmVzb3VyY2VJbXBhY3QuV0lMTF9SRVBMQUNFKSB7XG4gICAgICAgIGFkZGl0aW9uYWxJbmZvID0gJyAocmVxdWlyZXMgcmVwbGFjZW1lbnQpJztcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wcmludCgnICVz4pSAICVzICVzJXMnLCBsYXN0ID8gJ+KUlCcgOiAn4pScJywgdGhpcy5jaGFuZ2VUYWcoZGlmZi5vbGRWYWx1ZSwgZGlmZi5uZXdWYWx1ZSksIG5hbWUsIGFkZGl0aW9uYWxJbmZvKTtcbiAgICByZXR1cm4gdGhpcy5mb3JtYXRPYmplY3REaWZmKGRpZmYub2xkVmFsdWUsIGRpZmYubmV3VmFsdWUsIGAgJHtsYXN0ID8gJyAnIDogJ+KUgid9YCk7XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVycyB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHR3byBvYmplY3RzLCBsb29raW5nIGZvciB0aGUgZGlmZmVyZW5jZXMgYXMgZGVlcCBhcyBwb3NzaWJsZSxcbiAgICogYW5kIHJlbmRlcmluZyBhIHRyZWUgZ3JhcGggb2YgdGhlIHBhdGggdW50aWwgdGhlIGRpZmZlcmVuY2UgaXMgZm91bmQuXG4gICAqXG4gICAqIEBwYXJhbSBvbGRPYmplY3QgIHRoZSBvbGQgb2JqZWN0LlxuICAgKiBAcGFyYW0gbmV3T2JqZWN0ICB0aGUgbmV3IG9iamVjdC5cbiAgICogQHBhcmFtIGxpbmVQcmVmaXggYSBwcmVmaXggKGluZGVudC1saWtlKSB0byBiZSB1c2VkIG9uIGV2ZXJ5IGxpbmUuXG4gICAqL1xuICBwdWJsaWMgZm9ybWF0T2JqZWN0RGlmZihvbGRPYmplY3Q6IGFueSwgbmV3T2JqZWN0OiBhbnksIGxpbmVQcmVmaXg6IHN0cmluZykge1xuICAgIGlmIChcbiAgICAgIHR5cGVvZiBvbGRPYmplY3QgIT09IHR5cGVvZiBuZXdPYmplY3QgfHxcbiAgICAgIEFycmF5LmlzQXJyYXkob2xkT2JqZWN0KSB8fFxuICAgICAgdHlwZW9mIG9sZE9iamVjdCA9PT0gJ3N0cmluZycgfHxcbiAgICAgIHR5cGVvZiBvbGRPYmplY3QgPT09ICdudW1iZXInXG4gICAgKSB7XG4gICAgICBpZiAob2xkT2JqZWN0ICE9PSB1bmRlZmluZWQgJiYgbmV3T2JqZWN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvbGRPYmplY3QgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBuZXdPYmplY3QgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY29uc3Qgb2xkU3RyID0gSlNPTi5zdHJpbmdpZnkob2xkT2JqZWN0LCBudWxsLCAyKTtcbiAgICAgICAgICBjb25zdCBuZXdTdHIgPSBKU09OLnN0cmluZ2lmeShuZXdPYmplY3QsIG51bGwsIDIpO1xuICAgICAgICAgIGNvbnN0IGRpZmYgPSBfZGlmZlN0cmluZ3Mob2xkU3RyLCBuZXdTdHIsIHRoaXMuY29udGV4dCk7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWZmLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnByaW50KCclcyAgICVzICVzJywgbGluZVByZWZpeCwgaSA9PT0gMCA/ICfilJTilIAnIDogJyAgJywgZGlmZltpXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucHJpbnQoJyVzICAg4pSc4pSAICVzICVzJywgbGluZVByZWZpeCwgUkVNT1ZBTCwgdGhpcy5mb3JtYXRWYWx1ZShvbGRPYmplY3QsIGNvbG9ycy5yZWQpKTtcbiAgICAgICAgICB0aGlzLnByaW50KCclcyAgIOKUlOKUgCAlcyAlcycsIGxpbmVQcmVmaXgsIEFERElUSU9OLCB0aGlzLmZvcm1hdFZhbHVlKG5ld09iamVjdCwgY29sb3JzLmdyZWVuKSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAob2xkT2JqZWN0ICE9PSB1bmRlZmluZWQgLyogJiYgbmV3T2JqZWN0ID09PSB1bmRlZmluZWQgKi8pIHtcbiAgICAgICAgdGhpcy5wcmludCgnJXMgICDilJTilIAgJXMnLCBsaW5lUHJlZml4LCB0aGlzLmZvcm1hdFZhbHVlKG9sZE9iamVjdCwgY29sb3JzLnJlZCkpO1xuICAgICAgfSAvKiBpZiAob2xkT2JqZWN0ID09PSB1bmRlZmluZWQgJiYgbmV3T2JqZWN0ICE9PSB1bmRlZmluZWQpICovIGVsc2Uge1xuICAgICAgICB0aGlzLnByaW50KCclcyAgIOKUlOKUgCAlcycsIGxpbmVQcmVmaXgsIHRoaXMuZm9ybWF0VmFsdWUobmV3T2JqZWN0LCBjb2xvcnMuZ3JlZW4pKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qga2V5U2V0ID0gbmV3IFNldChPYmplY3Qua2V5cyhvbGRPYmplY3QpKTtcbiAgICBPYmplY3Qua2V5cyhuZXdPYmplY3QpLmZvckVhY2goKGspID0+IGtleVNldC5hZGQoaykpO1xuICAgIGNvbnN0IGtleXMgPSBuZXcgQXJyYXkoLi4ua2V5U2V0KS5maWx0ZXIoKGspID0+ICFkZWVwRXF1YWwob2xkT2JqZWN0W2tdLCBuZXdPYmplY3Rba10pKS5zb3J0KCk7XG4gICAgY29uc3QgbGFzdEtleSA9IGtleXNba2V5cy5sZW5ndGggLSAxXTtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICBjb25zdCBvbGRWYWx1ZSA9IG9sZE9iamVjdFtrZXldO1xuICAgICAgY29uc3QgbmV3VmFsdWUgPSBuZXdPYmplY3Rba2V5XTtcbiAgICAgIGNvbnN0IHRyZWVQcmVmaXggPSBrZXkgPT09IGxhc3RLZXkgPyAn4pSUJyA6ICfilJwnO1xuICAgICAgaWYgKG9sZFZhbHVlICE9PSB1bmRlZmluZWQgJiYgbmV3VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnByaW50KFxuICAgICAgICAgICclcyAgICVz4pSAICVzICVzOicsXG4gICAgICAgICAgbGluZVByZWZpeCxcbiAgICAgICAgICB0cmVlUHJlZml4LFxuICAgICAgICAgIHRoaXMuY2hhbmdlVGFnKG9sZFZhbHVlLCBuZXdWYWx1ZSksXG4gICAgICAgICAgY29sb3JzLmJsdWUoYC4ke2tleX1gKSxcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5mb3JtYXRPYmplY3REaWZmKG9sZFZhbHVlLCBuZXdWYWx1ZSwgYCR7bGluZVByZWZpeH0gICAke2tleSA9PT0gbGFzdEtleSA/ICcgJyA6ICfilIInfWApO1xuICAgICAgfSBlbHNlIGlmIChvbGRWYWx1ZSAhPT0gdW5kZWZpbmVkIC8qICYmIG5ld1ZhbHVlID09PSB1bmRlZmluZWQgKi8pIHtcbiAgICAgICAgdGhpcy5wcmludCgnJXMgICAlc+KUgCAlcyBSZW1vdmVkOiAlcycsIGxpbmVQcmVmaXgsIHRyZWVQcmVmaXgsIFJFTU9WQUwsIGNvbG9ycy5ibHVlKGAuJHtrZXl9YCkpO1xuICAgICAgfSAvKiBpZiAob2xkVmFsdWUgPT09IHVuZGVmaW5lZCAmJiBuZXdWYWx1ZSAhPT0gdW5kZWZpbmVkICovIGVsc2Uge1xuICAgICAgICB0aGlzLnByaW50KCclcyAgICVz4pSAICVzIEFkZGVkOiAlcycsIGxpbmVQcmVmaXgsIHRyZWVQcmVmaXgsIEFERElUSU9OLCBjb2xvcnMuYmx1ZShgLiR7a2V5fWApKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIG9sZFZhbHVlIHRoZSBvbGQgdmFsdWUgb2YgYSBkaWZmZXJlbmNlLlxuICAgKiBAcGFyYW0gbmV3VmFsdWUgdGhlIG5ldyB2YWx1ZSBvZiBhIGRpZmZlcmVuY2UuXG4gICAqXG4gICAqIEByZXR1cm5zIGEgdGFnIHRvIGJlIHJlbmRlcmVkIGluIHRoZSBkaWZmLCByZWZsZWN0aW5nIHdoZXRoZXIgdGhlIGRpZmZlcmVuY2VcbiAgICogICAgICB3YXMgYW4gQURESVRJT04sIFVQREFURSBvciBSRU1PVkFMLlxuICAgKi9cbiAgcHVibGljIGNoYW5nZVRhZyhvbGRWYWx1ZTogYW55IHwgdW5kZWZpbmVkLCBuZXdWYWx1ZTogYW55IHwgdW5kZWZpbmVkKTogc3RyaW5nIHtcbiAgICBpZiAob2xkVmFsdWUgIT09IHVuZGVmaW5lZCAmJiBuZXdWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gVVBEQVRFO1xuICAgIH0gZWxzZSBpZiAob2xkVmFsdWUgIT09IHVuZGVmaW5lZCAvKiAmJiBuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKi8pIHtcbiAgICAgIHJldHVybiBSRU1PVkFMO1xuICAgIH0gLyogaWYgKG9sZFZhbHVlID09PSB1bmRlZmluZWQgJiYgbmV3VmFsdWUgIT09IHVuZGVmaW5lZCkgKi8gZWxzZSB7XG4gICAgICByZXR1cm4gQURESVRJT047XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgJ2FsaXl1bjpyb3M6cGF0aCcgbWV0YWRhdGEgaW4gdGhlIGRpZmYgYW5kIGFkZCBpdCB0byB0aGUgbG9naWNhbFRvUGF0aE1hcFxuICAgKlxuICAgKiBUaGVyZSBhcmUgbXVsdGlwbGUgc291cmNlcyBvZiBsb2dpY2FsSUQgLT4gcGF0aCBtYXBwaW5nczogc3ludGggbWV0YWRhdGFcbiAgICogYW5kIHJlc291cmNlIG1ldGFkYXRhLCBhbmQgd2UgY29tYmluZSBhbGwgc291cmNlcyBpbnRvIGEgc2luZ2xlIG1hcC5cbiAgICovXG4gIHB1YmxpYyByZWFkQ29uc3RydWN0UGF0aHNGcm9tKHRlbXBsYXRlRGlmZjogVGVtcGxhdGVEaWZmKSB7XG4gICAgZm9yIChjb25zdCBbbG9naWNhbElkLCByZXNvdXJjZURpZmZdIG9mIE9iamVjdC5lbnRyaWVzKHRlbXBsYXRlRGlmZi5yZXNvdXJjZXMpKSB7XG4gICAgICBpZiAoIXJlc291cmNlRGlmZikge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgb2xkUGF0aE1ldGFkYXRhID1cbiAgICAgICAgcmVzb3VyY2VEaWZmLm9sZFZhbHVlICYmIHJlc291cmNlRGlmZi5vbGRWYWx1ZS5NZXRhZGF0YSAmJiByZXNvdXJjZURpZmYub2xkVmFsdWUuTWV0YWRhdGFbUEFUSF9NRVRBREFUQV9LRVldO1xuICAgICAgaWYgKG9sZFBhdGhNZXRhZGF0YSAmJiAhKGxvZ2ljYWxJZCBpbiB0aGlzLmxvZ2ljYWxUb1BhdGhNYXApKSB7XG4gICAgICAgIHRoaXMubG9naWNhbFRvUGF0aE1hcFtsb2dpY2FsSWRdID0gb2xkUGF0aE1ldGFkYXRhO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBuZXdQYXRoTWV0YWRhdGEgPVxuICAgICAgICByZXNvdXJjZURpZmYubmV3VmFsdWUgJiYgcmVzb3VyY2VEaWZmLm5ld1ZhbHVlLk1ldGFkYXRhICYmIHJlc291cmNlRGlmZi5uZXdWYWx1ZS5NZXRhZGF0YVtQQVRIX01FVEFEQVRBX0tFWV07XG4gICAgICBpZiAobmV3UGF0aE1ldGFkYXRhICYmICEobG9naWNhbElkIGluIHRoaXMubG9naWNhbFRvUGF0aE1hcCkpIHtcbiAgICAgICAgdGhpcy5sb2dpY2FsVG9QYXRoTWFwW2xvZ2ljYWxJZF0gPSBuZXdQYXRoTWV0YWRhdGE7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGZvcm1hdExvZ2ljYWxJZChsb2dpY2FsSWQ6IHN0cmluZykge1xuICAgIC8vIGlmIHdlIGhhdmUgYSBwYXRoIGluIHRoZSBtYXAsIHJldHVybiBpdFxuICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSB0aGlzLm5vcm1hbGl6ZWRMb2dpY2FsSWRQYXRoKGxvZ2ljYWxJZCk7XG5cbiAgICBpZiAobm9ybWFsaXplZCkge1xuICAgICAgcmV0dXJuIGAke25vcm1hbGl6ZWR9ICR7Y29sb3JzLmdyYXkobG9naWNhbElkKX1gO1xuICAgIH1cblxuICAgIHJldHVybiBsb2dpY2FsSWQ7XG4gIH1cblxuICBwdWJsaWMgbm9ybWFsaXplZExvZ2ljYWxJZFBhdGgobG9naWNhbElkOiBzdHJpbmcpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIC8vIGlmIHdlIGhhdmUgYSBwYXRoIGluIHRoZSBtYXAsIHJldHVybiBpdFxuICAgIGNvbnN0IHBhdGggPSB0aGlzLmxvZ2ljYWxUb1BhdGhNYXBbbG9naWNhbElkXTtcbiAgICByZXR1cm4gcGF0aCA/IG5vcm1hbGl6ZVBhdGgocGF0aCkgOiB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBQYXRoIGlzIHN1cHBvc2VkIHRvIHN0YXJ0IHdpdGggXCIvc3RhY2stbmFtZVwiLiBJZiB0aGlzIGlzIHRoZSBjYXNlIChpLmUuIHBhdGggaGFzIG1vcmUgdGhhblxuICAgICAqIHR3byBjb21wb25lbnRzLCB3ZSByZW1vdmUgdGhlIGZpcnN0IHBhcnQuIE90aGVyd2lzZSwgd2UganVzdCB1c2UgdGhlIGZ1bGwgcGF0aC5cbiAgICAgKiBAcGFyYW0gcFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG5vcm1hbGl6ZVBhdGgocDogc3RyaW5nKSB7XG4gICAgICBpZiAocC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgcCA9IHAuc3Vic3RyKDEpO1xuICAgICAgfVxuXG4gICAgICBsZXQgcGFydHMgPSBwLnNwbGl0KCcvJyk7XG4gICAgICBpZiAocGFydHMubGVuZ3RoID4gMSkge1xuICAgICAgICBwYXJ0cyA9IHBhcnRzLnNsaWNlKDEpO1xuXG4gICAgICAgIC8vIHJlbW92ZSB0aGUgbGFzdCBjb21wb25lbnQgaWYgaXQncyBcIlJlc291cmNlXCIgb3IgXCJEZWZhdWx0XCIgKGlmIHdlIGhhdmUgbW9yZSB0aGFuIGEgc2luZ2xlIGNvbXBvbmVudClcbiAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBjb25zdCBsYXN0ID0gcGFydHNbcGFydHMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgaWYgKGxhc3QgPT09ICdSZXNvdXJjZScgfHwgbGFzdCA9PT0gJ0RlZmF1bHQnKSB7XG4gICAgICAgICAgICBwYXJ0cyA9IHBhcnRzLnNsaWNlKDAsIHBhcnRzLmxlbmd0aCAtIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHAgPSBwYXJ0cy5qb2luKCcvJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcDtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZm9ybWF0U2VjdXJpdHlHcm91cENoYW5nZXMoY2hhbmdlczogU2VjdXJpdHlHcm91cENoYW5nZXMpIHtcbiAgICBpZiAoIWNoYW5nZXMuaGFzQ2hhbmdlcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucHJpbnRTZWN0aW9uSGVhZGVyKCdTZWN1cml0eSBHcm91cCBDaGFuZ2VzJyk7XG4gICAgdGhpcy5wcmludChmb3JtYXRUYWJsZSh0aGlzLmRlZXBTdWJzdGl0dXRlQnJhY2VkTG9naWNhbElkcyhjaGFuZ2VzLnN1bW1hcml6ZSgpKSwgdGhpcy5zdHJlYW0uY29sdW1ucykpO1xuICB9XG5cbiAgcHVibGljIGRlZXBTdWJzdGl0dXRlQnJhY2VkTG9naWNhbElkcyhyb3dzOiBzdHJpbmdbXVtdKTogc3RyaW5nW11bXSB7XG4gICAgcmV0dXJuIHJvd3MubWFwKChyb3cpID0+IHJvdy5tYXAodGhpcy5zdWJzdGl0dXRlQnJhY2VkTG9naWNhbElkcy5iaW5kKHRoaXMpKSk7XG4gIH1cblxuICAvKipcbiAgICogU3Vic3RpdHV0ZSBhbGwgc3RyaW5ncyBsaWtlICR7TG9nSWQueHh4fSB3aXRoIHRoZSBwYXRoIGluc3RlYWQgb2YgdGhlIGxvZ2ljYWwgSURcbiAgICovXG4gIHB1YmxpYyBzdWJzdGl0dXRlQnJhY2VkTG9naWNhbElkcyhzb3VyY2U6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHNvdXJjZS5yZXBsYWNlKC9cXCRcXHsoW14ufV0rKSguW159XSspP1xcfS9naSwgKF9tYXRjaCwgbG9nSWQsIHN1ZmZpeCkgPT4ge1xuICAgICAgcmV0dXJuICckeycgKyAodGhpcy5ub3JtYWxpemVkTG9naWNhbElkUGF0aChsb2dJZCkgfHwgbG9nSWQpICsgKHN1ZmZpeCB8fCAnJykgKyAnfSc7XG4gICAgfSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBIHBhdGNoIGFzIHJldHVybmVkIGJ5IGBgZGlmZi5zdHJ1Y3R1cmVkUGF0Y2hgYC5cbiAqL1xuaW50ZXJmYWNlIFBhdGNoIHtcbiAgLyoqXG4gICAqIEh1bmtzIGluIHRoZSBwYXRjaC5cbiAgICovXG4gIGh1bmtzOiBSZWFkb25seUFycmF5PFBhdGNoSHVuaz47XG59XG5cbi8qKlxuICogQSBodW5rIGluIGEgcGF0Y2ggcHJvZHVjZWQgYnkgYGBkaWZmLnN0cnVjdHVyZWRQYXRjaGBgLlxuICovXG5pbnRlcmZhY2UgUGF0Y2hIdW5rIHtcbiAgb2xkU3RhcnQ6IG51bWJlcjtcbiAgb2xkTGluZXM6IG51bWJlcjtcbiAgbmV3U3RhcnQ6IG51bWJlcjtcbiAgbmV3TGluZXM6IG51bWJlcjtcbiAgbGluZXM6IHN0cmluZ1tdO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSB1bmlmaWVkIGRpZmYgb2YgdHdvIHN0cmluZ3MuXG4gKlxuICogQHBhcmFtIG9sZFN0ciAgdGhlIFwib2xkXCIgdmVyc2lvbiBvZiB0aGUgc3RyaW5nLlxuICogQHBhcmFtIG5ld1N0ciAgdGhlIFwibmV3XCIgdmVyc2lvbiBvZiB0aGUgc3RyaW5nLlxuICogQHBhcmFtIGNvbnRleHQgdGhlIG51bWJlciBvZiBjb250ZXh0IGxpbmVzIHRvIHVzZSBpbiBhcmJpdHJhcnkgSlNPTiBkaWZmLlxuICpcbiAqIEByZXR1cm5zIGFuIGFycmF5IG9mIGRpZmYgbGluZXMuXG4gKi9cbmZ1bmN0aW9uIF9kaWZmU3RyaW5ncyhvbGRTdHI6IHN0cmluZywgbmV3U3RyOiBzdHJpbmcsIGNvbnRleHQ6IG51bWJlcik6IHN0cmluZ1tdIHtcbiAgY29uc3QgcGF0Y2g6IFBhdGNoID0gc3RydWN0dXJlZFBhdGNoKG51bGwsIG51bGwsIG9sZFN0ciwgbmV3U3RyLCBudWxsLCBudWxsLCB7IGNvbnRleHQgfSk7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XG4gIGZvciAoY29uc3QgaHVuayBvZiBwYXRjaC5odW5rcykge1xuICAgIHJlc3VsdC5wdXNoKGNvbG9ycy5tYWdlbnRhKGBAQCAtJHtodW5rLm9sZFN0YXJ0fSwke2h1bmsub2xkTGluZXN9ICske2h1bmsubmV3U3RhcnR9LCR7aHVuay5uZXdMaW5lc30gQEBgKSk7XG4gICAgY29uc3QgYmFzZUluZGVudCA9IF9maW5kSW5kZW50KGh1bmsubGluZXMpO1xuICAgIGZvciAoY29uc3QgbGluZSBvZiBodW5rLmxpbmVzKSB7XG4gICAgICAvLyBEb24ndCBjYXJlIGFib3V0IHRlcm1pbmF0aW9uIG5ld2xpbmUuXG4gICAgICBpZiAobGluZSA9PT0gJ1xcXFwgTm8gbmV3bGluZSBhdCBlbmQgb2YgZmlsZScpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBjb25zdCBtYXJrZXIgPSBsaW5lLmNoYXJBdCgwKTtcbiAgICAgIGNvbnN0IHRleHQgPSBsaW5lLnNsaWNlKDEgKyBiYXNlSW5kZW50KTtcbiAgICAgIHN3aXRjaCAobWFya2VyKSB7XG4gICAgICAgIGNhc2UgJyAnOlxuICAgICAgICAgIHJlc3VsdC5wdXNoKGAke0NPTlRFWFR9ICR7dGV4dH1gKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgcmVzdWx0LnB1c2goY29sb3JzLmJvbGQoYCR7QURESVRJT059ICR7Y29sb3JzLmdyZWVuKHRleHQpfWApKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgcmVzdWx0LnB1c2goY29sb3JzLmJvbGQoYCR7UkVNT1ZBTH0gJHtjb2xvcnMucmVkKHRleHQpfWApKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgZGlmZiBtYXJrZXI6ICR7bWFya2VyfSAoZnVsbCBsaW5lOiAke2xpbmV9KWApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xuXG4gIGZ1bmN0aW9uIF9maW5kSW5kZW50KGxpbmVzOiBzdHJpbmdbXSk6IG51bWJlciB7XG4gICAgbGV0IGluZGVudCA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xuICAgIGZvciAoY29uc3QgbGluZSBvZiBsaW5lcykge1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBsaW5lLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChsaW5lLmNoYXJBdChpKSAhPT0gJyAnKSB7XG4gICAgICAgICAgaW5kZW50ID0gaW5kZW50ID4gaSAtIDEgPyBpIC0gMSA6IGluZGVudDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaW5kZW50O1xuICB9XG59XG4iXX0=