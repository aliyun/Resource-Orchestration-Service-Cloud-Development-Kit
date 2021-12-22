"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDifferences = void 0;
const colors = require("colors/safe");
const util_1 = require("util");
const diff_template_1 = require("./diff-template");
const util_2 = require("./diff/util");
const format_table_1 = require("./format-table");
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
        if (collection.differenceCount === 0) {
            return;
        }
        this.printSectionHeader(title);
        collection.forEachDifference((id, diff) => formatter(entryType, id, diff));
        this.printSectionFooter();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZm9ybWF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUFzQztBQUN0QywrQkFBOEI7QUFDOUIsbURBQXVHO0FBRXZHLHNDQUF3QztBQUN4QyxpREFBNkM7QUFHN0MsY0FBYztBQUNkLE1BQU0saUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7QUFFNUMsMERBQTBEO0FBQzFELDJDQUEyQztBQUMzQyxNQUFNLEVBQUUsZUFBZSxFQUFFLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBTzVDOzs7Ozs7OztHQVFHO0FBQ0gsU0FBZ0IsaUJBQWlCLENBQy9CLE1BQW9CLEVBQ3BCLFlBQTBCLEVBQzFCLG1CQUFvRCxFQUFFLEVBQ3RELFVBQWtCLENBQUM7SUFFbkIsTUFBTSxTQUFTLEdBQUcsSUFBSSxTQUFTLENBQUMsTUFBTSxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUVqRixTQUFTLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzVFLFNBQVMsQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkUsU0FBUyxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0RSxTQUFTLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzVFLFNBQVMsQ0FBQyxhQUFhLENBQ3JCLFdBQVcsRUFDWCxVQUFVLEVBQ1YsWUFBWSxDQUFDLFNBQVMsRUFDdEIsU0FBUyxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FDbkQsQ0FBQztJQUNGLFNBQVMsQ0FBQyxhQUFhLENBQUMsU0FB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b0JBQ04sTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsUUFBUSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQzlELE1BQU07Z0JBQ1IsS0FBSyxHQUFHO29CQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUMzRCxNQUFNO2dCQUNSO29CQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMsMkJBQTJCLE1BQU0sZ0JBQWdCLElBQUksR0FBRyxDQUFDLENBQUM7YUFDN0U7U0FDRjtLQUNGO0lBQ0QsT0FBTyxNQUFNLENBQUM7SUFFZCxTQUFTLFdBQVcsQ0FBQyxLQUFlO1FBQ2xDLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztRQUNyQyxLQUFLLE1BQU0sSUFBSSxJQUFJLEtBQUssRUFBRTtZQUN4QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDcEMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtvQkFDMUIsTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7b0JBQ3pDLE1BQU07aUJBQ1A7YUFDRjtTQUNGO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjb2xvcnMgZnJvbSAnY29sb3JzL3NhZmUnO1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAndXRpbCc7XG5pbXBvcnQgeyBEaWZmZXJlbmNlLCBpc1Byb3BlcnR5RGlmZmVyZW5jZSwgUmVzb3VyY2VEaWZmZXJlbmNlLCBSZXNvdXJjZUltcGFjdCB9IGZyb20gJy4vZGlmZi10ZW1wbGF0ZSc7XG5pbXBvcnQgeyBEaWZmZXJlbmNlQ29sbGVjdGlvbiwgVGVtcGxhdGVEaWZmIH0gZnJvbSAnLi9kaWZmL3R5cGVzJztcbmltcG9ydCB7IGRlZXBFcXVhbCB9IGZyb20gJy4vZGlmZi91dGlsJztcbmltcG9ydCB7IGZvcm1hdFRhYmxlIH0gZnJvbSAnLi9mb3JtYXQtdGFibGUnO1xuaW1wb3J0IHsgU2VjdXJpdHlHcm91cENoYW5nZXMgfSBmcm9tICcuL25ldHdvcmsvc2VjdXJpdHktZ3JvdXAtY2hhbmdlcyc7XG5cbi8vIGZyb20gY3gtYXBpXG5jb25zdCBQQVRIX01FVEFEQVRBX0tFWSA9ICdhbGl5dW46cm9zOnBhdGgnO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tcmVxdWlyZS1pbXBvcnRzICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tdmFyLXJlcXVpcmVzXG5jb25zdCB7IHN0cnVjdHVyZWRQYXRjaCB9ID0gcmVxdWlyZSgnZGlmZicpO1xuLyogZXNsaW50LWVuYWJsZSAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1hdFN0cmVhbSBleHRlbmRzIE5vZGVKUy5Xcml0YWJsZVN0cmVhbSB7XG4gIGNvbHVtbnM/OiBudW1iZXI7XG59XG5cbi8qKlxuICogUmVuZGVycyB0ZW1wbGF0ZSBkaWZmZXJlbmNlcyB0byB0aGUgcHJvY2VzcycgY29uc29sZS5cbiAqXG4gKiBAcGFyYW0gc3RyZWFtICAgICAgICAgICBUaGUgSU8gc3RyZWFtIHdoZXJlIHRvIG91dHB1dCB0aGUgcmVuZGVyZWQgZGlmZi5cbiAqIEBwYXJhbSB0ZW1wbGF0ZURpZmYgICAgIFRlbXBsYXRlRGlmZiB0byBiZSByZW5kZXJlZCB0byB0aGUgY29uc29sZS5cbiAqIEBwYXJhbSBsb2dpY2FsVG9QYXRoTWFwIEEgbWFwIGZyb20gbG9naWNhbCBJRCB0byBjb25zdHJ1Y3QgcGF0aC4gVXNlZnVsIGluXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHRoZXJlIGlzIG5vIGFsaXl1bjpyb3M6cGF0aCBtZXRhZGF0YSBpbiB0aGUgdGVtcGxhdGUuXG4gKiBAcGFyYW0gY29udGV4dCAgICAgICAgICB0aGUgbnVtYmVyIG9mIGNvbnRleHQgbGluZXMgdG8gdXNlIGluIGFyYml0cmFyeSBKU09OIGRpZmYgKGRlZmF1bHRzIHRvIDMpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGlmZmVyZW5jZXMoXG4gIHN0cmVhbTogRm9ybWF0U3RyZWFtLFxuICB0ZW1wbGF0ZURpZmY6IFRlbXBsYXRlRGlmZixcbiAgbG9naWNhbFRvUGF0aE1hcDogeyBbbG9naWNhbElkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9LFxuICBjb250ZXh0OiBudW1iZXIgPSAzLFxuKSB7XG4gIGNvbnN0IGZvcm1hdHRlciA9IG5ldyBGb3JtYXR0ZXIoc3RyZWFtLCBsb2dpY2FsVG9QYXRoTWFwLCB0ZW1wbGF0ZURpZmYsIGNvbnRleHQpO1xuXG4gIGZvcm1hdHRlci5mb3JtYXRTZWN0aW9uKCdQYXJhbWV0ZXJzJywgJ1BhcmFtZXRlcicsIHRlbXBsYXRlRGlmZi5wYXJhbWV0ZXJzKTtcbiAgZm9ybWF0dGVyLmZvcm1hdFNlY3Rpb24oJ01ldGFkYXRhJywgJ01ldGFkYXRhJywgdGVtcGxhdGVEaWZmLm1ldGFkYXRhKTtcbiAgZm9ybWF0dGVyLmZvcm1hdFNlY3Rpb24oJ01hcHBpbmdzJywgJ01hcHBpbmcnLCB0ZW1wbGF0ZURpZmYubWFwcGluZ3MpO1xuICBmb3JtYXR0ZXIuZm9ybWF0U2VjdGlvbignQ29uZGl0aW9ucycsICdDb25kaXRpb24nLCB0ZW1wbGF0ZURpZmYuY29uZGl0aW9ucyk7XG4gIGZvcm1hdHRlci5mb3JtYXRTZWN0aW9uKFxuICAgICdSZXNvdXJjZXMnLFxuICAgICdSZXNvdXJjZScsXG4gICAgdGVtcGxhdGVEaWZmLnJlc291cmNlcyxcbiAgICBmb3JtYXR0ZXIuZm9ybWF0UmVzb3VyY2VEaWZmZXJlbmNlLmJpbmQoZm9ybWF0dGVyKSxcbiAgKTtcbiAgZm9ybWF0dGVyLmZvcm1hdFNlY3Rpb24oJ091dHB1dHMnLCAnT3V0cHV0JywgdGVtcGxhdGVEaWZmLm91dHB1dHMpO1xuICBmb3JtYXR0ZXIuZm9ybWF0U2VjdGlvbignT3RoZXIgQ2hhbmdlcycsICdVbmtub3duJywgdGVtcGxhdGVEaWZmLnVua25vd24pO1xufVxuXG5jb25zdCBBRERJVElPTiA9IGNvbG9ycy5ncmVlbignWytdJyk7XG5jb25zdCBDT05URVhUID0gY29sb3JzLmdyZXkoJ1sgXScpO1xuY29uc3QgVVBEQVRFID0gY29sb3JzLnllbGxvdygnW35dJyk7XG5jb25zdCBSRU1PVkFMID0gY29sb3JzLnJlZCgnWy1dJyk7XG5cbmNsYXNzIEZvcm1hdHRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgc3RyZWFtOiBGb3JtYXRTdHJlYW0sXG4gICAgcHJpdmF0ZSByZWFkb25seSBsb2dpY2FsVG9QYXRoTWFwOiB7IFtsb2dpY2FsSWQ6IHN0cmluZ106IHN0cmluZyB9LFxuICAgIGRpZmY/OiBUZW1wbGF0ZURpZmYsXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb250ZXh0OiBudW1iZXIgPSAzLFxuICApIHtcbiAgICAvLyBSZWFkIGFkZGl0aW9uYWwgY29uc3RydWN0IHBhdGhzIGZyb20gdGhlIGRpZmYgaWYgaXQgaXMgc3VwcGxpZWRcbiAgICBpZiAoZGlmZikge1xuICAgICAgdGhpcy5yZWFkQ29uc3RydWN0UGF0aHNGcm9tKGRpZmYpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBwcmludChmbXQ6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICB0aGlzLnN0cmVhbS53cml0ZShjb2xvcnMud2hpdGUoZm9ybWF0KGZtdCwgLi4uYXJncykpICsgJ1xcbicpO1xuICB9XG5cbiAgcHVibGljIHdhcm5pbmcoZm10OiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgdGhpcy5zdHJlYW0ud3JpdGUoY29sb3JzLnllbGxvdyhmb3JtYXQoZm10LCAuLi5hcmdzKSkgKyAnXFxuJyk7XG4gIH1cblxuICBwdWJsaWMgZm9ybWF0U2VjdGlvbjxWLCBUIGV4dGVuZHMgRGlmZmVyZW5jZTxWPj4oXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICBlbnRyeVR5cGU6IHN0cmluZyxcbiAgICBjb2xsZWN0aW9uOiBEaWZmZXJlbmNlQ29sbGVjdGlvbjxWLCBUPixcbiAgICBmb3JtYXR0ZXI6ICh0eXBlOiBzdHJpbmcsIGlkOiBzdHJpbmcsIGRpZmY6IFQpID0+IHZvaWQgPSB0aGlzLmZvcm1hdERpZmZlcmVuY2UuYmluZCh0aGlzKSxcbiAgKSB7XG4gICAgaWYgKGNvbGxlY3Rpb24uZGlmZmVyZW5jZUNvdW50ID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wcmludFNlY3Rpb25IZWFkZXIodGl0bGUpO1xuICAgIGNvbGxlY3Rpb24uZm9yRWFjaERpZmZlcmVuY2UoKGlkLCBkaWZmKSA9PiBmb3JtYXR0ZXIoZW50cnlUeXBlLCBpZCwgZGlmZikpO1xuICAgIHRoaXMucHJpbnRTZWN0aW9uRm9vdGVyKCk7XG4gIH1cblxuICBwdWJsaWMgcHJpbnRTZWN0aW9uSGVhZGVyKHRpdGxlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnByaW50KGNvbG9ycy51bmRlcmxpbmUoY29sb3JzLmJvbGQodGl0bGUpKSk7XG4gIH1cblxuICBwdWJsaWMgcHJpbnRTZWN0aW9uRm9vdGVyKCkge1xuICAgIHRoaXMucHJpbnQoJycpO1xuICB9XG5cbiAgLyoqXG4gICAqIFByaW50IGEgc2ltcGxlIGRpZmZlcmVuY2UgZm9yIGEgZ2l2ZW4gbmFtZWQgZW50aXR5LlxuICAgKlxuICAgKiBAcGFyYW0gbG9naWNhbElkIHRoZSBuYW1lIG9mIHRoZSBlbnRpdHkgdGhhdCBpcyBkaWZmZXJlbnQuXG4gICAqIEBwYXJhbSBkaWZmIHRoZSBkaWZmZXJlbmNlIHRvIGJlIHJlbmRlcmVkLlxuICAgKi9cbiAgcHVibGljIGZvcm1hdERpZmZlcmVuY2UodHlwZTogc3RyaW5nLCBsb2dpY2FsSWQ6IHN0cmluZywgZGlmZjogRGlmZmVyZW5jZTxhbnk+IHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKCFkaWZmIHx8ICFkaWZmLmlzRGlmZmVyZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHZhbHVlO1xuXG4gICAgY29uc3Qgb2xkVmFsdWUgPSB0aGlzLmZvcm1hdFZhbHVlKGRpZmYub2xkVmFsdWUsIGNvbG9ycy5yZWQpO1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5mb3JtYXRWYWx1ZShkaWZmLm5ld1ZhbHVlLCBjb2xvcnMuZ3JlZW4pO1xuICAgIGlmIChkaWZmLmlzQWRkaXRpb24pIHtcbiAgICAgIHZhbHVlID0gbmV3VmFsdWU7XG4gICAgfSBlbHNlIGlmIChkaWZmLmlzVXBkYXRlKSB7XG4gICAgICB2YWx1ZSA9IGAke29sZFZhbHVlfSB0byAke25ld1ZhbHVlfWA7XG4gICAgfSBlbHNlIGlmIChkaWZmLmlzUmVtb3ZhbCkge1xuICAgICAgdmFsdWUgPSBvbGRWYWx1ZTtcbiAgICB9XG5cbiAgICB0aGlzLnByaW50KGAke3RoaXMuZm9ybWF0UHJlZml4KGRpZmYpfSAke2NvbG9ycy5jeWFuKHR5cGUpfSAke3RoaXMuZm9ybWF0TG9naWNhbElkKGxvZ2ljYWxJZCl9OiAke3ZhbHVlfWApO1xuICB9XG5cbiAgLyoqXG4gICAqIFByaW50IGEgcmVzb3VyY2UgZGlmZmVyZW5jZSBmb3IgYSBnaXZlbiBsb2dpY2FsIElELlxuICAgKlxuICAgKiBAcGFyYW0gbG9naWNhbElkIHRoZSBsb2dpY2FsIElEIG9mIHRoZSByZXNvdXJjZSB0aGF0IGNoYW5nZWQuXG4gICAqIEBwYXJhbSBkaWZmICAgICAgdGhlIGNoYW5nZSB0byBiZSByZW5kZXJlZC5cbiAgICovXG4gIHB1YmxpYyBmb3JtYXRSZXNvdXJjZURpZmZlcmVuY2UoX3R5cGU6IHN0cmluZywgbG9naWNhbElkOiBzdHJpbmcsIGRpZmY6IFJlc291cmNlRGlmZmVyZW5jZSkge1xuICAgIGlmICghZGlmZi5pc0RpZmZlcmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc291cmNlVHlwZSA9IGRpZmYuaXNSZW1vdmFsID8gZGlmZi5vbGRSZXNvdXJjZVR5cGUgOiBkaWZmLm5ld1Jlc291cmNlVHlwZTtcblxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICB0aGlzLnByaW50KFxuICAgICAgYCR7dGhpcy5mb3JtYXRQcmVmaXgoZGlmZil9ICR7dGhpcy5mb3JtYXRWYWx1ZShyZXNvdXJjZVR5cGUsIGNvbG9ycy5jeWFuKX0gJHt0aGlzLmZvcm1hdExvZ2ljYWxJZChcbiAgICAgICAgbG9naWNhbElkLFxuICAgICAgKX0gJHt0aGlzLmZvcm1hdEltcGFjdChkaWZmLmNoYW5nZUltcGFjdCl9YCxcbiAgICApO1xuXG4gICAgaWYgKGRpZmYuaXNVcGRhdGUpIHtcbiAgICAgIGNvbnN0IGRpZmZlcmVuY2VDb3VudCA9IGRpZmYuZGlmZmVyZW5jZUNvdW50O1xuICAgICAgbGV0IHByb2Nlc3NlZENvdW50ID0gMDtcbiAgICAgIGRpZmYuZm9yRWFjaERpZmZlcmVuY2UoKF8sIG5hbWUsIHZhbHVlcykgPT4ge1xuICAgICAgICBwcm9jZXNzZWRDb3VudCArPSAxO1xuICAgICAgICB0aGlzLmZvcm1hdFRyZWVEaWZmKG5hbWUsIHZhbHVlcywgcHJvY2Vzc2VkQ291bnQgPT09IGRpZmZlcmVuY2VDb3VudCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZm9ybWF0UHJlZml4PFQ+KGRpZmY6IERpZmZlcmVuY2U8VD4pIHtcbiAgICBpZiAoZGlmZi5pc0FkZGl0aW9uKSB7XG4gICAgICByZXR1cm4gQURESVRJT047XG4gICAgfVxuICAgIGlmIChkaWZmLmlzVXBkYXRlKSB7XG4gICAgICByZXR1cm4gVVBEQVRFO1xuICAgIH1cbiAgICBpZiAoZGlmZi5pc1JlbW92YWwpIHtcbiAgICAgIHJldHVybiBSRU1PVkFMO1xuICAgIH1cbiAgICByZXR1cm4gY29sb3JzLndoaXRlKCdbP10nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gdmFsdWUgdGhlIHZhbHVlIHRvIGJlIGZvcm1hdHRlZC5cbiAgICogQHBhcmFtIGNvbG9yIHRoZSBjb2xvciB0byBiZSB1c2VkLlxuICAgKlxuICAgKiBAcmV0dXJucyB0aGUgZm9ybWF0dGVkIHN0cmluZywgd2l0aCBjb2xvciBhcHBsaWVkLlxuICAgKi9cbiAgcHVibGljIGZvcm1hdFZhbHVlKHZhbHVlOiBhbnksIGNvbG9yOiAoc3RyOiBzdHJpbmcpID0+IHN0cmluZykge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGNvbG9yKHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbG9yKEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIGltcGFjdCB0aGUgaW1wYWN0IHRvIGJlIGZvcm1hdHRlZFxuICAgKiBAcmV0dXJucyBhIHVzZXItZnJpZW5kbHksIGNvbG9yZWQgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgaW1wYWN0LlxuICAgKi9cbiAgcHVibGljIGZvcm1hdEltcGFjdChpbXBhY3Q6IFJlc291cmNlSW1wYWN0KSB7XG4gICAgc3dpdGNoIChpbXBhY3QpIHtcbiAgICAgIGNhc2UgUmVzb3VyY2VJbXBhY3QuTUFZX1JFUExBQ0U6XG4gICAgICAgIHJldHVybiBjb2xvcnMuaXRhbGljKGNvbG9ycy55ZWxsb3coJ21heSBiZSByZXBsYWNlZCcpKTtcbiAgICAgIGNhc2UgUmVzb3VyY2VJbXBhY3QuV0lMTF9SRVBMQUNFOlxuICAgICAgICByZXR1cm4gY29sb3JzLml0YWxpYyhjb2xvcnMuYm9sZChjb2xvcnMucmVkKCdyZXBsYWNlJykpKTtcbiAgICAgIGNhc2UgUmVzb3VyY2VJbXBhY3QuV0lMTF9ERVNUUk9ZOlxuICAgICAgICByZXR1cm4gY29sb3JzLml0YWxpYyhjb2xvcnMuYm9sZChjb2xvcnMucmVkKCdkZXN0cm95JykpKTtcbiAgICAgIGNhc2UgUmVzb3VyY2VJbXBhY3QuV0lMTF9PUlBIQU46XG4gICAgICAgIHJldHVybiBjb2xvcnMuaXRhbGljKGNvbG9ycy55ZWxsb3coJ29ycGhhbicpKTtcbiAgICAgIGNhc2UgUmVzb3VyY2VJbXBhY3QuV0lMTF9VUERBVEU6XG4gICAgICBjYXNlIFJlc291cmNlSW1wYWN0LldJTExfQ1JFQVRFOlxuICAgICAgY2FzZSBSZXNvdXJjZUltcGFjdC5OT19DSEFOR0U6XG4gICAgICAgIHJldHVybiAnJzsgLy8gbm8gZXh0cmEgaW5mbyBpcyBnYWluZWQgaGVyZVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXJzIGEgdHJlZSBvZiBkaWZmZXJlbmNlcyB1bmRlciBhIHBhcnRpY3VsYXIgbmFtZS5cbiAgICogQHBhcmFtIG5hbWUgICAgdGhlIG5hbWUgb2YgdGhlIHJvb3Qgb2YgdGhlIHRyZWUuXG4gICAqIEBwYXJhbSBkaWZmICAgIHRoZSBkaWZmZXJlbmNlIG9uIHRoZSB0cmVlLlxuICAgKiBAcGFyYW0gbGFzdCAgICB3aGV0aGVyIHRoaXMgaXMgdGhlIGxhc3Qgbm9kZSBvZiBhIHBhcmVudCB0cmVlLlxuICAgKi9cbiAgcHVibGljIGZvcm1hdFRyZWVEaWZmKG5hbWU6IHN0cmluZywgZGlmZjogRGlmZmVyZW5jZTxhbnk+LCBsYXN0OiBib29sZWFuKSB7XG4gICAgbGV0IGFkZGl0aW9uYWxJbmZvID0gJyc7XG4gICAgaWYgKGlzUHJvcGVydHlEaWZmZXJlbmNlKGRpZmYpKSB7XG4gICAgICBpZiAoZGlmZi5jaGFuZ2VJbXBhY3QgPT09IFJlc291cmNlSW1wYWN0Lk1BWV9SRVBMQUNFKSB7XG4gICAgICAgIGFkZGl0aW9uYWxJbmZvID0gJyAobWF5IGNhdXNlIHJlcGxhY2VtZW50KSc7XG4gICAgICB9IGVsc2UgaWYgKGRpZmYuY2hhbmdlSW1wYWN0ID09PSBSZXNvdXJjZUltcGFjdC5XSUxMX1JFUExBQ0UpIHtcbiAgICAgICAgYWRkaXRpb25hbEluZm8gPSAnIChyZXF1aXJlcyByZXBsYWNlbWVudCknO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnByaW50KCcgJXPilIAgJXMgJXMlcycsIGxhc3QgPyAn4pSUJyA6ICfilJwnLCB0aGlzLmNoYW5nZVRhZyhkaWZmLm9sZFZhbHVlLCBkaWZmLm5ld1ZhbHVlKSwgbmFtZSwgYWRkaXRpb25hbEluZm8pO1xuICAgIHJldHVybiB0aGlzLmZvcm1hdE9iamVjdERpZmYoZGlmZi5vbGRWYWx1ZSwgZGlmZi5uZXdWYWx1ZSwgYCAke2xhc3QgPyAnICcgOiAn4pSCJ31gKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXJzIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdHdvIG9iamVjdHMsIGxvb2tpbmcgZm9yIHRoZSBkaWZmZXJlbmNlcyBhcyBkZWVwIGFzIHBvc3NpYmxlLFxuICAgKiBhbmQgcmVuZGVyaW5nIGEgdHJlZSBncmFwaCBvZiB0aGUgcGF0aCB1bnRpbCB0aGUgZGlmZmVyZW5jZSBpcyBmb3VuZC5cbiAgICpcbiAgICogQHBhcmFtIG9sZE9iamVjdCAgdGhlIG9sZCBvYmplY3QuXG4gICAqIEBwYXJhbSBuZXdPYmplY3QgIHRoZSBuZXcgb2JqZWN0LlxuICAgKiBAcGFyYW0gbGluZVByZWZpeCBhIHByZWZpeCAoaW5kZW50LWxpa2UpIHRvIGJlIHVzZWQgb24gZXZlcnkgbGluZS5cbiAgICovXG4gIHB1YmxpYyBmb3JtYXRPYmplY3REaWZmKG9sZE9iamVjdDogYW55LCBuZXdPYmplY3Q6IGFueSwgbGluZVByZWZpeDogc3RyaW5nKSB7XG4gICAgaWYgKFxuICAgICAgdHlwZW9mIG9sZE9iamVjdCAhPT0gdHlwZW9mIG5ld09iamVjdCB8fFxuICAgICAgQXJyYXkuaXNBcnJheShvbGRPYmplY3QpIHx8XG4gICAgICB0eXBlb2Ygb2xkT2JqZWN0ID09PSAnc3RyaW5nJyB8fFxuICAgICAgdHlwZW9mIG9sZE9iamVjdCA9PT0gJ251bWJlcidcbiAgICApIHtcbiAgICAgIGlmIChvbGRPYmplY3QgIT09IHVuZGVmaW5lZCAmJiBuZXdPYmplY3QgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAodHlwZW9mIG9sZE9iamVjdCA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIG5ld09iamVjdCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjb25zdCBvbGRTdHIgPSBKU09OLnN0cmluZ2lmeShvbGRPYmplY3QsIG51bGwsIDIpO1xuICAgICAgICAgIGNvbnN0IG5ld1N0ciA9IEpTT04uc3RyaW5naWZ5KG5ld09iamVjdCwgbnVsbCwgMik7XG4gICAgICAgICAgY29uc3QgZGlmZiA9IF9kaWZmU3RyaW5ncyhvbGRTdHIsIG5ld1N0ciwgdGhpcy5jb250ZXh0KTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpZmYubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMucHJpbnQoJyVzICAgJXMgJXMnLCBsaW5lUHJlZml4LCBpID09PSAwID8gJ+KUlOKUgCcgOiAnICAnLCBkaWZmW2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5wcmludCgnJXMgICDilJzilIAgJXMgJXMnLCBsaW5lUHJlZml4LCBSRU1PVkFMLCB0aGlzLmZvcm1hdFZhbHVlKG9sZE9iamVjdCwgY29sb3JzLnJlZCkpO1xuICAgICAgICAgIHRoaXMucHJpbnQoJyVzICAg4pSU4pSAICVzICVzJywgbGluZVByZWZpeCwgQURESVRJT04sIHRoaXMuZm9ybWF0VmFsdWUobmV3T2JqZWN0LCBjb2xvcnMuZ3JlZW4pKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChvbGRPYmplY3QgIT09IHVuZGVmaW5lZCAvKiAmJiBuZXdPYmplY3QgPT09IHVuZGVmaW5lZCAqLykge1xuICAgICAgICB0aGlzLnByaW50KCclcyAgIOKUlOKUgCAlcycsIGxpbmVQcmVmaXgsIHRoaXMuZm9ybWF0VmFsdWUob2xkT2JqZWN0LCBjb2xvcnMucmVkKSk7XG4gICAgICB9IC8qIGlmIChvbGRPYmplY3QgPT09IHVuZGVmaW5lZCAmJiBuZXdPYmplY3QgIT09IHVuZGVmaW5lZCkgKi8gZWxzZSB7XG4gICAgICAgIHRoaXMucHJpbnQoJyVzICAg4pSU4pSAICVzJywgbGluZVByZWZpeCwgdGhpcy5mb3JtYXRWYWx1ZShuZXdPYmplY3QsIGNvbG9ycy5ncmVlbikpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBrZXlTZXQgPSBuZXcgU2V0KE9iamVjdC5rZXlzKG9sZE9iamVjdCkpO1xuICAgIE9iamVjdC5rZXlzKG5ld09iamVjdCkuZm9yRWFjaCgoaykgPT4ga2V5U2V0LmFkZChrKSk7XG4gICAgY29uc3Qga2V5cyA9IG5ldyBBcnJheSguLi5rZXlTZXQpLmZpbHRlcigoaykgPT4gIWRlZXBFcXVhbChvbGRPYmplY3Rba10sIG5ld09iamVjdFtrXSkpLnNvcnQoKTtcbiAgICBjb25zdCBsYXN0S2V5ID0ga2V5c1trZXlzLmxlbmd0aCAtIDFdO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgIGNvbnN0IG9sZFZhbHVlID0gb2xkT2JqZWN0W2tleV07XG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IG5ld09iamVjdFtrZXldO1xuICAgICAgY29uc3QgdHJlZVByZWZpeCA9IGtleSA9PT0gbGFzdEtleSA/ICfilJQnIDogJ+KUnCc7XG4gICAgICBpZiAob2xkVmFsdWUgIT09IHVuZGVmaW5lZCAmJiBuZXdWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMucHJpbnQoXG4gICAgICAgICAgJyVzICAgJXPilIAgJXMgJXM6JyxcbiAgICAgICAgICBsaW5lUHJlZml4LFxuICAgICAgICAgIHRyZWVQcmVmaXgsXG4gICAgICAgICAgdGhpcy5jaGFuZ2VUYWcob2xkVmFsdWUsIG5ld1ZhbHVlKSxcbiAgICAgICAgICBjb2xvcnMuYmx1ZShgLiR7a2V5fWApLFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmZvcm1hdE9iamVjdERpZmYob2xkVmFsdWUsIG5ld1ZhbHVlLCBgJHtsaW5lUHJlZml4fSAgICR7a2V5ID09PSBsYXN0S2V5ID8gJyAnIDogJ+KUgid9YCk7XG4gICAgICB9IGVsc2UgaWYgKG9sZFZhbHVlICE9PSB1bmRlZmluZWQgLyogJiYgbmV3VmFsdWUgPT09IHVuZGVmaW5lZCAqLykge1xuICAgICAgICB0aGlzLnByaW50KCclcyAgICVz4pSAICVzIFJlbW92ZWQ6ICVzJywgbGluZVByZWZpeCwgdHJlZVByZWZpeCwgUkVNT1ZBTCwgY29sb3JzLmJsdWUoYC4ke2tleX1gKSk7XG4gICAgICB9IC8qIGlmIChvbGRWYWx1ZSA9PT0gdW5kZWZpbmVkICYmIG5ld1ZhbHVlICE9PSB1bmRlZmluZWQgKi8gZWxzZSB7XG4gICAgICAgIHRoaXMucHJpbnQoJyVzICAgJXPilIAgJXMgQWRkZWQ6ICVzJywgbGluZVByZWZpeCwgdHJlZVByZWZpeCwgQURESVRJT04sIGNvbG9ycy5ibHVlKGAuJHtrZXl9YCkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gb2xkVmFsdWUgdGhlIG9sZCB2YWx1ZSBvZiBhIGRpZmZlcmVuY2UuXG4gICAqIEBwYXJhbSBuZXdWYWx1ZSB0aGUgbmV3IHZhbHVlIG9mIGEgZGlmZmVyZW5jZS5cbiAgICpcbiAgICogQHJldHVybnMgYSB0YWcgdG8gYmUgcmVuZGVyZWQgaW4gdGhlIGRpZmYsIHJlZmxlY3Rpbmcgd2hldGhlciB0aGUgZGlmZmVyZW5jZVxuICAgKiAgICAgIHdhcyBhbiBBRERJVElPTiwgVVBEQVRFIG9yIFJFTU9WQUwuXG4gICAqL1xuICBwdWJsaWMgY2hhbmdlVGFnKG9sZFZhbHVlOiBhbnkgfCB1bmRlZmluZWQsIG5ld1ZhbHVlOiBhbnkgfCB1bmRlZmluZWQpOiBzdHJpbmcge1xuICAgIGlmIChvbGRWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIG5ld1ZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBVUERBVEU7XG4gICAgfSBlbHNlIGlmIChvbGRWYWx1ZSAhPT0gdW5kZWZpbmVkIC8qICYmIG5ld1ZhbHVlID09PSB1bmRlZmluZWQqLykge1xuICAgICAgcmV0dXJuIFJFTU9WQUw7XG4gICAgfSAvKiBpZiAob2xkVmFsdWUgPT09IHVuZGVmaW5lZCAmJiBuZXdWYWx1ZSAhPT0gdW5kZWZpbmVkKSAqLyBlbHNlIHtcbiAgICAgIHJldHVybiBBRERJVElPTjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmluZCAnYWxpeXVuOnJvczpwYXRoJyBtZXRhZGF0YSBpbiB0aGUgZGlmZiBhbmQgYWRkIGl0IHRvIHRoZSBsb2dpY2FsVG9QYXRoTWFwXG4gICAqXG4gICAqIFRoZXJlIGFyZSBtdWx0aXBsZSBzb3VyY2VzIG9mIGxvZ2ljYWxJRCAtPiBwYXRoIG1hcHBpbmdzOiBzeW50aCBtZXRhZGF0YVxuICAgKiBhbmQgcmVzb3VyY2UgbWV0YWRhdGEsIGFuZCB3ZSBjb21iaW5lIGFsbCBzb3VyY2VzIGludG8gYSBzaW5nbGUgbWFwLlxuICAgKi9cbiAgcHVibGljIHJlYWRDb25zdHJ1Y3RQYXRoc0Zyb20odGVtcGxhdGVEaWZmOiBUZW1wbGF0ZURpZmYpIHtcbiAgICBmb3IgKGNvbnN0IFtsb2dpY2FsSWQsIHJlc291cmNlRGlmZl0gb2YgT2JqZWN0LmVudHJpZXModGVtcGxhdGVEaWZmLnJlc291cmNlcykpIHtcbiAgICAgIGlmICghcmVzb3VyY2VEaWZmKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBvbGRQYXRoTWV0YWRhdGEgPVxuICAgICAgICByZXNvdXJjZURpZmYub2xkVmFsdWUgJiYgcmVzb3VyY2VEaWZmLm9sZFZhbHVlLk1ldGFkYXRhICYmIHJlc291cmNlRGlmZi5vbGRWYWx1ZS5NZXRhZGF0YVtQQVRIX01FVEFEQVRBX0tFWV07XG4gICAgICBpZiAob2xkUGF0aE1ldGFkYXRhICYmICEobG9naWNhbElkIGluIHRoaXMubG9naWNhbFRvUGF0aE1hcCkpIHtcbiAgICAgICAgdGhpcy5sb2dpY2FsVG9QYXRoTWFwW2xvZ2ljYWxJZF0gPSBvbGRQYXRoTWV0YWRhdGE7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5ld1BhdGhNZXRhZGF0YSA9XG4gICAgICAgIHJlc291cmNlRGlmZi5uZXdWYWx1ZSAmJiByZXNvdXJjZURpZmYubmV3VmFsdWUuTWV0YWRhdGEgJiYgcmVzb3VyY2VEaWZmLm5ld1ZhbHVlLk1ldGFkYXRhW1BBVEhfTUVUQURBVEFfS0VZXTtcbiAgICAgIGlmIChuZXdQYXRoTWV0YWRhdGEgJiYgIShsb2dpY2FsSWQgaW4gdGhpcy5sb2dpY2FsVG9QYXRoTWFwKSkge1xuICAgICAgICB0aGlzLmxvZ2ljYWxUb1BhdGhNYXBbbG9naWNhbElkXSA9IG5ld1BhdGhNZXRhZGF0YTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZm9ybWF0TG9naWNhbElkKGxvZ2ljYWxJZDogc3RyaW5nKSB7XG4gICAgLy8gaWYgd2UgaGF2ZSBhIHBhdGggaW4gdGhlIG1hcCwgcmV0dXJuIGl0XG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IHRoaXMubm9ybWFsaXplZExvZ2ljYWxJZFBhdGgobG9naWNhbElkKTtcblxuICAgIGlmIChub3JtYWxpemVkKSB7XG4gICAgICByZXR1cm4gYCR7bm9ybWFsaXplZH0gJHtjb2xvcnMuZ3JheShsb2dpY2FsSWQpfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxvZ2ljYWxJZDtcbiAgfVxuXG4gIHB1YmxpYyBub3JtYWxpemVkTG9naWNhbElkUGF0aChsb2dpY2FsSWQ6IHN0cmluZyk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgLy8gaWYgd2UgaGF2ZSBhIHBhdGggaW4gdGhlIG1hcCwgcmV0dXJuIGl0XG4gICAgY29uc3QgcGF0aCA9IHRoaXMubG9naWNhbFRvUGF0aE1hcFtsb2dpY2FsSWRdO1xuICAgIHJldHVybiBwYXRoID8gbm9ybWFsaXplUGF0aChwYXRoKSA6IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIFBhdGggaXMgc3VwcG9zZWQgdG8gc3RhcnQgd2l0aCBcIi9zdGFjay1uYW1lXCIuIElmIHRoaXMgaXMgdGhlIGNhc2UgKGkuZS4gcGF0aCBoYXMgbW9yZSB0aGFuXG4gICAgICogdHdvIGNvbXBvbmVudHMsIHdlIHJlbW92ZSB0aGUgZmlyc3QgcGFydC4gT3RoZXJ3aXNlLCB3ZSBqdXN0IHVzZSB0aGUgZnVsbCBwYXRoLlxuICAgICAqIEBwYXJhbSBwXG4gICAgICovXG4gICAgZnVuY3Rpb24gbm9ybWFsaXplUGF0aChwOiBzdHJpbmcpIHtcbiAgICAgIGlmIChwLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICBwID0gcC5zdWJzdHIoMSk7XG4gICAgICB9XG5cbiAgICAgIGxldCBwYXJ0cyA9IHAuc3BsaXQoJy8nKTtcbiAgICAgIGlmIChwYXJ0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHBhcnRzID0gcGFydHMuc2xpY2UoMSk7XG5cbiAgICAgICAgLy8gcmVtb3ZlIHRoZSBsYXN0IGNvbXBvbmVudCBpZiBpdCdzIFwiUmVzb3VyY2VcIiBvciBcIkRlZmF1bHRcIiAoaWYgd2UgaGF2ZSBtb3JlIHRoYW4gYSBzaW5nbGUgY29tcG9uZW50KVxuICAgICAgICBpZiAocGFydHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIGNvbnN0IGxhc3QgPSBwYXJ0c1twYXJ0cy5sZW5ndGggLSAxXTtcbiAgICAgICAgICBpZiAobGFzdCA9PT0gJ1Jlc291cmNlJyB8fCBsYXN0ID09PSAnRGVmYXVsdCcpIHtcbiAgICAgICAgICAgIHBhcnRzID0gcGFydHMuc2xpY2UoMCwgcGFydHMubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcCA9IHBhcnRzLmpvaW4oJy8nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBmb3JtYXRTZWN1cml0eUdyb3VwQ2hhbmdlcyhjaGFuZ2VzOiBTZWN1cml0eUdyb3VwQ2hhbmdlcykge1xuICAgIGlmICghY2hhbmdlcy5oYXNDaGFuZ2VzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5wcmludFNlY3Rpb25IZWFkZXIoJ1NlY3VyaXR5IEdyb3VwIENoYW5nZXMnKTtcbiAgICB0aGlzLnByaW50KGZvcm1hdFRhYmxlKHRoaXMuZGVlcFN1YnN0aXR1dGVCcmFjZWRMb2dpY2FsSWRzKGNoYW5nZXMuc3VtbWFyaXplKCkpLCB0aGlzLnN0cmVhbS5jb2x1bW5zKSk7XG4gIH1cblxuICBwdWJsaWMgZGVlcFN1YnN0aXR1dGVCcmFjZWRMb2dpY2FsSWRzKHJvd3M6IHN0cmluZ1tdW10pOiBzdHJpbmdbXVtdIHtcbiAgICByZXR1cm4gcm93cy5tYXAoKHJvdykgPT4gcm93Lm1hcCh0aGlzLnN1YnN0aXR1dGVCcmFjZWRMb2dpY2FsSWRzLmJpbmQodGhpcykpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJzdGl0dXRlIGFsbCBzdHJpbmdzIGxpa2UgJHtMb2dJZC54eHh9IHdpdGggdGhlIHBhdGggaW5zdGVhZCBvZiB0aGUgbG9naWNhbCBJRFxuICAgKi9cbiAgcHVibGljIHN1YnN0aXR1dGVCcmFjZWRMb2dpY2FsSWRzKHNvdXJjZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gc291cmNlLnJlcGxhY2UoL1xcJFxceyhbXi59XSspKC5bXn1dKyk/XFx9L2dpLCAoX21hdGNoLCBsb2dJZCwgc3VmZml4KSA9PiB7XG4gICAgICByZXR1cm4gJyR7JyArICh0aGlzLm5vcm1hbGl6ZWRMb2dpY2FsSWRQYXRoKGxvZ0lkKSB8fCBsb2dJZCkgKyAoc3VmZml4IHx8ICcnKSArICd9JztcbiAgICB9KTtcbiAgfVxufVxuXG4vKipcbiAqIEEgcGF0Y2ggYXMgcmV0dXJuZWQgYnkgYGBkaWZmLnN0cnVjdHVyZWRQYXRjaGBgLlxuICovXG5pbnRlcmZhY2UgUGF0Y2gge1xuICAvKipcbiAgICogSHVua3MgaW4gdGhlIHBhdGNoLlxuICAgKi9cbiAgaHVua3M6IFJlYWRvbmx5QXJyYXk8UGF0Y2hIdW5rPjtcbn1cblxuLyoqXG4gKiBBIGh1bmsgaW4gYSBwYXRjaCBwcm9kdWNlZCBieSBgYGRpZmYuc3RydWN0dXJlZFBhdGNoYGAuXG4gKi9cbmludGVyZmFjZSBQYXRjaEh1bmsge1xuICBvbGRTdGFydDogbnVtYmVyO1xuICBvbGRMaW5lczogbnVtYmVyO1xuICBuZXdTdGFydDogbnVtYmVyO1xuICBuZXdMaW5lczogbnVtYmVyO1xuICBsaW5lczogc3RyaW5nW107XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHVuaWZpZWQgZGlmZiBvZiB0d28gc3RyaW5ncy5cbiAqXG4gKiBAcGFyYW0gb2xkU3RyICB0aGUgXCJvbGRcIiB2ZXJzaW9uIG9mIHRoZSBzdHJpbmcuXG4gKiBAcGFyYW0gbmV3U3RyICB0aGUgXCJuZXdcIiB2ZXJzaW9uIG9mIHRoZSBzdHJpbmcuXG4gKiBAcGFyYW0gY29udGV4dCB0aGUgbnVtYmVyIG9mIGNvbnRleHQgbGluZXMgdG8gdXNlIGluIGFyYml0cmFyeSBKU09OIGRpZmYuXG4gKlxuICogQHJldHVybnMgYW4gYXJyYXkgb2YgZGlmZiBsaW5lcy5cbiAqL1xuZnVuY3Rpb24gX2RpZmZTdHJpbmdzKG9sZFN0cjogc3RyaW5nLCBuZXdTdHI6IHN0cmluZywgY29udGV4dDogbnVtYmVyKTogc3RyaW5nW10ge1xuICBjb25zdCBwYXRjaDogUGF0Y2ggPSBzdHJ1Y3R1cmVkUGF0Y2gobnVsbCwgbnVsbCwgb2xkU3RyLCBuZXdTdHIsIG51bGwsIG51bGwsIHsgY29udGV4dCB9KTtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5PHN0cmluZz4oKTtcbiAgZm9yIChjb25zdCBodW5rIG9mIHBhdGNoLmh1bmtzKSB7XG4gICAgcmVzdWx0LnB1c2goY29sb3JzLm1hZ2VudGEoYEBAIC0ke2h1bmsub2xkU3RhcnR9LCR7aHVuay5vbGRMaW5lc30gKyR7aHVuay5uZXdTdGFydH0sJHtodW5rLm5ld0xpbmVzfSBAQGApKTtcbiAgICBjb25zdCBiYXNlSW5kZW50ID0gX2ZpbmRJbmRlbnQoaHVuay5saW5lcyk7XG4gICAgZm9yIChjb25zdCBsaW5lIG9mIGh1bmsubGluZXMpIHtcbiAgICAgIC8vIERvbid0IGNhcmUgYWJvdXQgdGVybWluYXRpb24gbmV3bGluZS5cbiAgICAgIGlmIChsaW5lID09PSAnXFxcXCBObyBuZXdsaW5lIGF0IGVuZCBvZiBmaWxlJykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG1hcmtlciA9IGxpbmUuY2hhckF0KDApO1xuICAgICAgY29uc3QgdGV4dCA9IGxpbmUuc2xpY2UoMSArIGJhc2VJbmRlbnQpO1xuICAgICAgc3dpdGNoIChtYXJrZXIpIHtcbiAgICAgICAgY2FzZSAnICc6XG4gICAgICAgICAgcmVzdWx0LnB1c2goYCR7Q09OVEVYVH0gJHt0ZXh0fWApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICByZXN1bHQucHVzaChjb2xvcnMuYm9sZChgJHtBRERJVElPTn0gJHtjb2xvcnMuZ3JlZW4odGV4dCl9YCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICByZXN1bHQucHVzaChjb2xvcnMuYm9sZChgJHtSRU1PVkFMfSAke2NvbG9ycy5yZWQodGV4dCl9YCkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBkaWZmIG1hcmtlcjogJHttYXJrZXJ9IChmdWxsIGxpbmU6ICR7bGluZX0pYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG5cbiAgZnVuY3Rpb24gX2ZpbmRJbmRlbnQobGluZXM6IHN0cmluZ1tdKTogbnVtYmVyIHtcbiAgICBsZXQgaW5kZW50ID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XG4gICAgZm9yIChjb25zdCBsaW5lIG9mIGxpbmVzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxpbmUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGxpbmUuY2hhckF0KGkpICE9PSAnICcpIHtcbiAgICAgICAgICBpbmRlbnQgPSBpbmRlbnQgPiBpIC0gMSA/IGkgLSAxIDogaW5kZW50O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpbmRlbnQ7XG4gIH1cbn1cbiJdfQ==