"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackCollection = exports.CloudAssembly = exports.ExtendedStackSelection = exports.DefaultSelection = void 0;
const cxapi = require("@alicloud/ros-cdk-cxapi");
const colors = require("colors/safe");
const minimatch = require("minimatch");
const logging_1 = require("../logging");
var DefaultSelection;
(function (DefaultSelection) {
    /**
     * Returns an empty selection in case there are no selectors.
     */
    DefaultSelection["None"] = "none";
    /**
     * If the app includes a single stack, returns it. Otherwise throws an exception.
     * This behavior is used by "deploy".
     */
    DefaultSelection["OnlySingle"] = "single";
    /**
     * If no selectors are provided, returns all stacks in the app.
     */
    DefaultSelection["AllStacks"] = "all";
})(DefaultSelection = exports.DefaultSelection || (exports.DefaultSelection = {}));
/**
 * When selecting stacks, what other stacks to include because of dependencies
 */
var ExtendedStackSelection;
(function (ExtendedStackSelection) {
    /**
     * Don't select any extra stacks
     */
    ExtendedStackSelection[ExtendedStackSelection["None"] = 0] = "None";
    /**
     * Include stacks that this stack depends on
     */
    ExtendedStackSelection[ExtendedStackSelection["Upstream"] = 1] = "Upstream";
    /**
     * Include stacks that depend on this stack
     */
    ExtendedStackSelection[ExtendedStackSelection["Downstream"] = 2] = "Downstream";
})(ExtendedStackSelection = exports.ExtendedStackSelection || (exports.ExtendedStackSelection = {}));
/**
 * A single Cloud Assembly and the operations we do on it to deploy the artifacts inside
 */
class CloudAssembly {
    constructor(assembly) {
        this.assembly = assembly;
        this.directory = assembly.directory;
    }
    async selectStacks(selectors, options) {
        selectors = selectors.filter((s) => s != null); // filter null/undefined
        const stacks = this.assembly.stacks;
        if (stacks.length === 0) {
            throw new Error('This app contains no stacks');
        }
        if (selectors.length === 0) {
            switch (options.defaultBehavior) {
                case DefaultSelection.AllStacks:
                    return new StackCollection(this, stacks);
                case DefaultSelection.None:
                    return new StackCollection(this, []);
                case DefaultSelection.OnlySingle:
                    if (stacks.length === 1) {
                        return new StackCollection(this, stacks);
                    }
                    else {
                        throw new Error('Since this app includes more than a single stack, specify which stacks to use (wildcards are supported)\n' +
                            `Stacks: ${stacks.map((x) => x.id).join(' ')}`);
                    }
                default:
                    throw new Error(`invalid default behavior: ${options.defaultBehavior}`);
            }
        }
        const allStacks = new Map();
        for (const stack of stacks) {
            allStacks.set(stack.id, stack);
        }
        // For every selector argument, pick stacks from the list.
        const selectedStacks = new Map();
        for (const pattern of selectors) {
            let found = false;
            for (const stack of stacks) {
                if (minimatch(stack.id, pattern) && !selectedStacks.has(stack.id)) {
                    selectedStacks.set(stack.id, stack);
                    found = true;
                }
            }
            if (!found) {
                throw new Error(`No stack found matching '${pattern}'. Use "list" to print manifest`);
            }
        }
        const extend = options.extend || ExtendedStackSelection.None;
        switch (extend) {
            case ExtendedStackSelection.Downstream:
                includeDownstreamStacks(selectedStacks, allStacks);
                break;
            case ExtendedStackSelection.Upstream:
                includeUpstreamStacks(selectedStacks, allStacks);
                break;
        }
        // Filter original array because it is in the right order
        const selectedList = stacks.filter((s) => selectedStacks.has(s.id));
        return new StackCollection(this, selectedList);
    }
    /**
     * Select a single stack by its ID
     */
    stackById(stackId) {
        return new StackCollection(this, [this.assembly.getStackArtifact(stackId)]);
    }
}
exports.CloudAssembly = CloudAssembly;
/**
 * A collection of stacks and related artifacts
 *
 * In practice, not all artifacts in the CloudAssembly are created equal;
 * stacks can be selected independently, but other artifacts such as asset
 * bundles cannot.
 */
class StackCollection {
    constructor(assembly, stackArtifacts) {
        this.assembly = assembly;
        this.stackArtifacts = stackArtifacts;
    }
    get stackCount() {
        return this.stackArtifacts.length;
    }
    get firstStack() {
        if (this.stackCount < 1) {
            throw new Error('StackCollection contains no stack artifacts (trying to access the first one)');
        }
        return this.stackArtifacts[0];
    }
    get stackIds() {
        return this.stackArtifacts.map((s) => s.id);
    }
    reversed() {
        const arts = [...this.stackArtifacts];
        arts.reverse();
        return new StackCollection(this.assembly, arts);
    }
    processMetadataMessages(options = {}) {
        let warnings = false;
        let errors = false;
        for (const stack of this.stackArtifacts) {
            for (const message of stack.messages) {
                switch (message.level) {
                    case cxapi.SynthesisMessageLevel.WARNING:
                        warnings = true;
                        printMessage(logging_1.warning, 'Warning', message.id, message.entry);
                        break;
                    case cxapi.SynthesisMessageLevel.ERROR:
                        errors = true;
                        printMessage(logging_1.error, 'Error', message.id, message.entry);
                        break;
                    case cxapi.SynthesisMessageLevel.INFO:
                        printMessage(logging_1.print, 'Info', message.id, message.entry);
                        break;
                }
            }
        }
        if (errors && !options.ignoreErrors) {
            throw new Error('Found errors');
        }
        if (options.strict && warnings) {
            throw new Error('Found warnings (--strict mode)');
        }
        function printMessage(logFn, prefix, id, entry) {
            logFn(`[${prefix} at ${id}] ${entry.data}`);
            if (options.verbose && entry.trace) {
                logFn(`  ${entry.trace.join('\n  ')}`);
            }
        }
    }
}
exports.StackCollection = StackCollection;
/**
 * Calculate the transitive closure of stack dependents.
 *
 * Modifies `selectedStacks` in-place.
 */
function includeDownstreamStacks(selectedStacks, allStacks) {
    const added = new Array();
    let madeProgress;
    do {
        madeProgress = false;
        for (const [id, stack] of allStacks) {
            // Select this stack if it's not selected yet AND it depends on a stack that's in the selected set
            if (!selectedStacks.has(id) && (stack.dependencies || []).some((dep) => selectedStacks.has(dep.id))) {
                selectedStacks.set(id, stack);
                added.push(id);
                madeProgress = true;
            }
        }
    } while (madeProgress);
    if (added.length > 0) {
        logging_1.print('Including depending stacks: %s', colors.bold(added.join(', ')));
    }
}
/**
 * Calculate the transitive closure of stack dependencies.
 *
 * Modifies `selectedStacks` in-place.
 */
function includeUpstreamStacks(selectedStacks, allStacks) {
    const added = new Array();
    let madeProgress = true;
    while (madeProgress) {
        madeProgress = false;
        for (const stack of selectedStacks.values()) {
            if (stack.dependencies === undefined)
                continue;
            // Select an additional stack if it's not selected yet and a dependency of a selected stack (and exists, obviously)
            for (const dependencyId of stack.dependencies.map((x) => x.id)) {
                if (!selectedStacks.has(dependencyId) && allStacks.has(dependencyId)) {
                    added.push(dependencyId);
                    selectedStacks.set(dependencyId, allStacks.get(dependencyId));
                    madeProgress = true;
                }
            }
        }
    }
    if (added.length > 0) {
        logging_1.print('Including dependency stacks: %s', colors.bold(added.join(', ')));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWQtYXNzZW1ibHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjbG91ZC1hc3NlbWJseS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxpREFBaUQ7QUFDakQsc0NBQXNDO0FBQ3RDLHVDQUF1QztBQUN2Qyx3Q0FBbUQ7QUFFbkQsSUFBWSxnQkFnQlg7QUFoQkQsV0FBWSxnQkFBZ0I7SUFDMUI7O09BRUc7SUFDSCxpQ0FBYSxDQUFBO0lBRWI7OztPQUdHO0lBQ0gseUNBQXFCLENBQUE7SUFFckI7O09BRUc7SUFDSCxxQ0FBaUIsQ0FBQTtBQUNuQixDQUFDLEVBaEJXLGdCQUFnQixHQUFoQix3QkFBZ0IsS0FBaEIsd0JBQWdCLFFBZ0IzQjtBQWVEOztHQUVHO0FBQ0gsSUFBWSxzQkFlWDtBQWZELFdBQVksc0JBQXNCO0lBQ2hDOztPQUVHO0lBQ0gsbUVBQUksQ0FBQTtJQUVKOztPQUVHO0lBQ0gsMkVBQVEsQ0FBQTtJQUVSOztPQUVHO0lBQ0gsK0VBQVUsQ0FBQTtBQUNaLENBQUMsRUFmVyxzQkFBc0IsR0FBdEIsOEJBQXNCLEtBQXRCLDhCQUFzQixRQWVqQztBQUVEOztHQUVHO0FBQ0gsTUFBYSxhQUFhO0lBTXhCLFlBQTRCLFFBQTZCO1FBQTdCLGFBQVEsR0FBUixRQUFRLENBQXFCO1FBQ3ZELElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQztJQUN0QyxDQUFDO0lBRU0sS0FBSyxDQUFDLFlBQVksQ0FBQyxTQUFtQixFQUFFLE9BQTRCO1FBQ3pFLFNBQVMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyx3QkFBd0I7UUFFeEUsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDcEMsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN2QixNQUFNLElBQUks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LEtBQUssQ0FBQztRQUVyQixLQUFLLE1BQU0sS0FBSyxJQUFJLGNBQWMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUMzQyxJQUFJLEtBQUssQ0FBQyxZQUFZLEtBQUssU0FBUztnQkFBRSxTQUFTO1lBQy9DLG1IQUFtSDtZQUNuSCxLQUFLLE1BQU0sWUFBWSxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQzlELElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUU7b0JBQ3BFLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ3pCLGNBQWMsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFFLENBQUMsQ0FBQztvQkFDL0QsWUFBWSxHQUFHLElBQUksQ0FBQztpQkFDckI7YUFDRjtTQUNGO0tBQ0Y7SUFFRCxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ3BCLGVBQUssQ0FBQyxpQ0FBaUMsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3pFO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGN4YXBpIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWN4YXBpJztcclxuaW1wb3J0ICogYXMgY29sb3JzIGZyb20gJ2NvbG9ycy9zYWZlJztcclxuaW1wb3J0ICogYXMgbWluaW1hdGNoIGZyb20gJ21pbmltYXRjaCc7XHJcbmltcG9ydCB7IGVycm9yLCBwcmludCwgd2FybmluZyB9IGZyb20gJy4uL2xvZ2dpbmcnO1xyXG5cclxuZXhwb3J0IGVudW0gRGVmYXVsdFNlbGVjdGlvbiB7XHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBhbiBlbXB0eSBzZWxlY3Rpb24gaW4gY2FzZSB0aGVyZSBhcmUgbm8gc2VsZWN0b3JzLlxyXG4gICAqL1xyXG4gIE5vbmUgPSAnbm9uZScsXHJcblxyXG4gIC8qKlxyXG4gICAqIElmIHRoZSBhcHAgaW5jbHVkZXMgYSBzaW5nbGUgc3RhY2ssIHJldHVybnMgaXQuIE90aGVyd2lzZSB0aHJvd3MgYW4gZXhjZXB0aW9uLlxyXG4gICAqIFRoaXMgYmVoYXZpb3IgaXMgdXNlZCBieSBcImRlcGxveVwiLlxyXG4gICAqL1xyXG4gIE9ubHlTaW5nbGUgPSAnc2luZ2xlJyxcclxuXHJcbiAgLyoqXHJcbiAgICogSWYgbm8gc2VsZWN0b3JzIGFyZSBwcm92aWRlZCwgcmV0dXJucyBhbGwgc3RhY2tzIGluIHRoZSBhcHAuXHJcbiAgICovXHJcbiAgQWxsU3RhY2tzID0gJ2FsbCcsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VsZWN0U3RhY2tzT3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kIHRoZSBzZWxlY3Rpb24gdG8gdXBzdHJlYWQvZG93bnN0cmVhbSBzdGFja3NcclxuICAgKiBAZGVmYXVsdCBFeHRlbmRlZFN0YWNrU2VsZWN0aW9uLk5vbmUgb25seSBzZWxlY3QgdGhlIHNwZWNpZmllZCBzdGFja3MuXHJcbiAgICovXHJcbiAgZXh0ZW5kPzogRXh0ZW5kZWRTdGFja1NlbGVjdGlvbjtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGJlaGF2aW9yIGlmIGlmIG5vIHNlbGVjdG9ycyBhcmUgcHJpdmlkZWQuXHJcbiAgICovXHJcbiAgZGVmYXVsdEJlaGF2aW9yOiBEZWZhdWx0U2VsZWN0aW9uO1xyXG59XHJcblxyXG4vKipcclxuICogV2hlbiBzZWxlY3Rpbmcgc3RhY2tzLCB3aGF0IG90aGVyIHN0YWNrcyB0byBpbmNsdWRlIGJlY2F1c2Ugb2YgZGVwZW5kZW5jaWVzXHJcbiAqL1xyXG5leHBvcnQgZW51bSBFeHRlbmRlZFN0YWNrU2VsZWN0aW9uIHtcclxuICAvKipcclxuICAgKiBEb24ndCBzZWxlY3QgYW55IGV4dHJhIHN0YWNrc1xyXG4gICAqL1xyXG4gIE5vbmUsXHJcblxyXG4gIC8qKlxyXG4gICAqIEluY2x1ZGUgc3RhY2tzIHRoYXQgdGhpcyBzdGFjayBkZXBlbmRzIG9uXHJcbiAgICovXHJcbiAgVXBzdHJlYW0sXHJcblxyXG4gIC8qKlxyXG4gICAqIEluY2x1ZGUgc3RhY2tzIHRoYXQgZGVwZW5kIG9uIHRoaXMgc3RhY2tcclxuICAgKi9cclxuICBEb3duc3RyZWFtLFxyXG59XHJcblxyXG4vKipcclxuICogQSBzaW5nbGUgQ2xvdWQgQXNzZW1ibHkgYW5kIHRoZSBvcGVyYXRpb25zIHdlIGRvIG9uIGl0IHRvIGRlcGxveSB0aGUgYXJ0aWZhY3RzIGluc2lkZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENsb3VkQXNzZW1ibHkge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBkaXJlY3RvcnkgdGhpcyBDbG91ZEFzc2VtYmx5IHdhcyByZWFkIGZyb21cclxuICAgKi9cclxuICBwdWJsaWMgcmVhZG9ubHkgZGlyZWN0b3J5OiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBhc3NlbWJseTogY3hhcGkuQ2xvdWRBc3NlbWJseSkge1xyXG4gICAgdGhpcy5kaXJlY3RvcnkgPSBhc3NlbWJseS5kaXJlY3Rvcnk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgc2VsZWN0U3RhY2tzKHNlbGVjdG9yczogc3RyaW5nW10sIG9wdGlvbnM6IFNlbGVjdFN0YWNrc09wdGlvbnMpOiBQcm9taXNlPFN0YWNrQ29sbGVjdGlvbj4ge1xyXG4gICAgc2VsZWN0b3JzID0gc2VsZWN0b3JzLmZpbHRlcigocykgPT4gcyAhPSBudWxsKTsgLy8gZmlsdGVyIG51bGwvdW5kZWZpbmVkXHJcblxyXG4gICAgY29uc3Qgc3RhY2tzID0gdGhpcy5hc3NlbWJseS5zdGFja3M7XHJcbiAgICBpZiAoc3RhY2tzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgYXBwIGNvbnRhaW5zIG5vIHN0YWNrcycpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzZWxlY3RvcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHN3aXRjaCAob3B0aW9ucy5kZWZhdWx0QmVoYXZpb3IpIHtcclxuICAgICAgICBjYXNlIERlZmF1bHRTZWxlY3Rpb24uQWxsU3RhY2tzOlxyXG4gICAgICAgICAgcmV0dXJuIG5ldyBTdGFja0NvbGxlY3Rpb24odGhpcywgc3RhY2tzKTtcclxuICAgICAgICBjYXNlIERlZmF1bHRTZWxlY3Rpb24uTm9uZTpcclxuICAgICAgICAgIHJldHVybiBuZXcgU3RhY2tDb2xsZWN0aW9uKHRoaXMsIFtdKTtcclxuICAgICAgICBjYXNlIERlZmF1bHRTZWxlY3Rpb24uT25seVNpbmdsZTpcclxuICAgICAgICAgIGlmIChzdGFja3MubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgU3RhY2tDb2xsZWN0aW9uKHRoaXMsIHN0YWNrcyk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICAgICAgJ1NpbmNlIHRoaXMgYXBwIGluY2x1ZGVzIG1vcmUgdGhhbiBhIHNpbmdsZSBzdGFjaywgc3BlY2lmeSB3aGljaCBzdGFja3MgdG8gdXNlICh3aWxkY2FyZHMgYXJlIHN1cHBvcnRlZClcXG4nICtcclxuICAgICAgICAgICAgICAgIGBTdGFja3M6ICR7c3RhY2tzLm1hcCgoeCkgPT4geC5pZCkuam9pbignICcpfWAsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgaW52YWxpZCBkZWZhdWx0IGJlaGF2aW9yOiAke29wdGlvbnMuZGVmYXVsdEJlaGF2aW9yfWApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWxsU3RhY2tzID0gbmV3IE1hcDxzdHJpbmcsIGN4YXBpLlJvc1N0YWNrQXJ0aWZhY3Q+KCk7XHJcbiAgICBmb3IgKGNvbnN0IHN0YWNrIG9mIHN0YWNrcykge1xyXG4gICAgICBhbGxTdGFja3Muc2V0KHN0YWNrLmlkLCBzdGFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRm9yIGV2ZXJ5IHNlbGVjdG9yIGFyZ3VtZW50LCBwaWNrIHN0YWNrcyBmcm9tIHRoZSBsaXN0LlxyXG4gICAgY29uc3Qgc2VsZWN0ZWRTdGFja3MgPSBuZXcgTWFwPHN0cmluZywgY3hhcGkuUm9zU3RhY2tBcnRpZmFjdD4oKTtcclxuICAgIGZvciAoY29uc3QgcGF0dGVybiBvZiBzZWxlY3RvcnMpIHtcclxuICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XHJcblxyXG4gICAgICBmb3IgKGNvbnN0IHN0YWNrIG9mIHN0YWNrcykge1xyXG4gICAgICAgIGlmIChtaW5pbWF0Y2goc3RhY2suaWQsIHBhdHRlcm4pICYmICFzZWxlY3RlZFN0YWNrcy5oYXMoc3RhY2suaWQpKSB7XHJcbiAgICAgICAgICBzZWxlY3RlZFN0YWNrcy5zZXQoc3RhY2suaWQsIHN0YWNrKTtcclxuICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghZm91bmQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIHN0YWNrIGZvdW5kIG1hdGNoaW5nICcke3BhdHRlcm59Jy4gVXNlIFwibGlzdFwiIHRvIHByaW50IG1hbmlmZXN0YCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBleHRlbmQgPSBvcHRpb25zLmV4dGVuZCB8fCBFeHRlbmRlZFN0YWNrU2VsZWN0aW9uLk5vbmU7XHJcbiAgICBzd2l0Y2ggKGV4dGVuZCkge1xyXG4gICAgICBjYXNlIEV4dGVuZGVkU3RhY2tTZWxlY3Rpb24uRG93bnN0cmVhbTpcclxuICAgICAgICBpbmNsdWRlRG93bnN0cmVhbVN0YWNrcyhzZWxlY3RlZFN0YWNrcywgYWxsU3RhY2tzKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBFeHRlbmRlZFN0YWNrU2VsZWN0aW9uLlVwc3RyZWFtOlxyXG4gICAgICAgIGluY2x1ZGVVcHN0cmVhbVN0YWNrcyhzZWxlY3RlZFN0YWNrcywgYWxsU3RhY2tzKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICAvLyBGaWx0ZXIgb3JpZ2luYWwgYXJyYXkgYmVjYXVzZSBpdCBpcyBpbiB0aGUgcmlnaHQgb3JkZXJcclxuICAgIGNvbnN0IHNlbGVjdGVkTGlzdCA9IHN0YWNrcy5maWx0ZXIoKHMpID0+IHNlbGVjdGVkU3RhY2tzLmhhcyhzLmlkKSk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBTdGFja0NvbGxlY3Rpb24odGhpcywgc2VsZWN0ZWRMaXN0KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlbGVjdCBhIHNpbmdsZSBzdGFjayBieSBpdHMgSURcclxuICAgKi9cclxuICBwdWJsaWMgc3RhY2tCeUlkKHN0YWNrSWQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIG5ldyBTdGFja0NvbGxlY3Rpb24odGhpcywgW3RoaXMuYXNzZW1ibHkuZ2V0U3RhY2tBcnRpZmFjdChzdGFja0lkKV0pO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEEgY29sbGVjdGlvbiBvZiBzdGFja3MgYW5kIHJlbGF0ZWQgYXJ0aWZhY3RzXHJcbiAqXHJcbiAqIEluIHByYWN0aWNlLCBub3QgYWxsIGFydGlmYWN0cyBpbiB0aGUgQ2xvdWRBc3NlbWJseSBhcmUgY3JlYXRlZCBlcXVhbDtcclxuICogc3RhY2tzIGNhbiBiZSBzZWxlY3RlZCBpbmRlcGVuZGVudGx5LCBidXQgb3RoZXIgYXJ0aWZhY3RzIHN1Y2ggYXMgYXNzZXRcclxuICogYnVuZGxlcyBjYW5ub3QuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU3RhY2tDb2xsZWN0aW9uIHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgYXNzZW1ibHk6IENsb3VkQXNzZW1ibHksIHB1YmxpYyByZWFkb25seSBzdGFja0FydGlmYWN0czogY3hhcGkuUm9zU3RhY2tBcnRpZmFjdFtdKSB7fVxyXG5cclxuICBwdWJsaWMgZ2V0IHN0YWNrQ291bnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGFja0FydGlmYWN0cy5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IGZpcnN0U3RhY2soKSB7XHJcbiAgICBpZiAodGhpcy5zdGFja0NvdW50IDwgMSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1N0YWNrQ29sbGVjdGlvbiBjb250YWlucyBubyBzdGFjayBhcnRpZmFjdHMgKHRyeWluZyB0byBhY2Nlc3MgdGhlIGZpcnN0IG9uZSknKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnN0YWNrQXJ0aWZhY3RzWzBdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBzdGFja0lkcygpOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGFja0FydGlmYWN0cy5tYXAoKHMpID0+IHMuaWQpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHJldmVyc2VkKCkge1xyXG4gICAgY29uc3QgYXJ0cyA9IFsuLi50aGlzLnN0YWNrQXJ0aWZhY3RzXTtcclxuICAgIGFydHMucmV2ZXJzZSgpO1xyXG4gICAgcmV0dXJuIG5ldyBTdGFja0NvbGxlY3Rpb24odGhpcy5hc3NlbWJseSwgYXJ0cyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcHJvY2Vzc01ldGFkYXRhTWVzc2FnZXMob3B0aW9uczogTWV0YWRhdGFNZXNzYWdlT3B0aW9ucyA9IHt9KSB7XHJcbiAgICBsZXQgd2FybmluZ3MgPSBmYWxzZTtcclxuICAgIGxldCBlcnJvcnMgPSBmYWxzZTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IHN0YWNrIG9mIHRoaXMuc3RhY2tBcnRpZmFjdHMpIHtcclxuICAgICAgZm9yIChjb25zdCBtZXNzYWdlIG9mIHN0YWNrLm1lc3NhZ2VzKSB7XHJcbiAgICAgICAgc3dpdGNoIChtZXNzYWdlLmxldmVsKSB7XHJcbiAgICAgICAgICBjYXNlIGN4YXBpLlN5bnRoZXNpc01lc3NhZ2VMZXZlbC5XQVJOSU5HOlxyXG4gICAgICAgICAgICB3YXJuaW5ncyA9IHRydWU7XHJcbiAgICAgICAgICAgIHByaW50TWVzc2FnZSh3YXJuaW5nLCAnV2FybmluZycsIG1lc3NhZ2UuaWQsIG1lc3NhZ2UuZW50cnkpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgY3hhcGkuU3ludGhlc2lzTWVzc2FnZUxldmVsLkVSUk9SOlxyXG4gICAgICAgICAgICBlcnJvcnMgPSB0cnVlO1xyXG4gICAgICAgICAgICBwcmludE1lc3NhZ2UoZXJyb3IsICdFcnJvcicsIG1lc3NhZ2UuaWQsIG1lc3NhZ2UuZW50cnkpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgY3hhcGkuU3ludGhlc2lzTWVzc2FnZUxldmVsLklORk86XHJcbiAgICAgICAgICAgIHByaW50TWVzc2FnZShwcmludCwgJ0luZm8nLCBtZXNzYWdlLmlkLCBtZXNzYWdlLmVudHJ5KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGVycm9ycyAmJiAhb3B0aW9ucy5pZ25vcmVFcnJvcnMpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3VuZCBlcnJvcnMnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAob3B0aW9ucy5zdHJpY3QgJiYgd2FybmluZ3MpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3VuZCB3YXJuaW5ncyAoLS1zdHJpY3QgbW9kZSknKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwcmludE1lc3NhZ2UobG9nRm46IChzOiBzdHJpbmcpID0+IHZvaWQsIHByZWZpeDogc3RyaW5nLCBpZDogc3RyaW5nLCBlbnRyeTogY3hhcGkuTWV0YWRhdGFFbnRyeSkge1xyXG4gICAgICBsb2dGbihgWyR7cHJlZml4fSBhdCAke2lkfV0gJHtlbnRyeS5kYXRhfWApO1xyXG5cclxuICAgICAgaWYgKG9wdGlvbnMudmVyYm9zZSAmJiBlbnRyeS50cmFjZSkge1xyXG4gICAgICAgIGxvZ0ZuKGAgICR7ZW50cnkudHJhY2Uuam9pbignXFxuICAnKX1gKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNZXRhZGF0YU1lc3NhZ2VPcHRpb25zIHtcclxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIGJlIHZlcmJvc2VcclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGZhbHNlXHJcbiAgICovXHJcbiAgdmVyYm9zZT86IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIERvbid0IHN0b3Agb24gZXJyb3IgbWV0YWRhdGFcclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGZhbHNlXHJcbiAgICovXHJcbiAgaWdub3JlRXJyb3JzPzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogVHJlYXQgd2FybmluZ3MgaW4gbWV0YWRhdGEgYXMgZXJyb3JzXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBmYWxzZVxyXG4gICAqL1xyXG4gIHN0cmljdD86IGJvb2xlYW47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDYWxjdWxhdGUgdGhlIHRyYW5zaXRpdmUgY2xvc3VyZSBvZiBzdGFjayBkZXBlbmRlbnRzLlxyXG4gKlxyXG4gKiBNb2RpZmllcyBgc2VsZWN0ZWRTdGFja3NgIGluLXBsYWNlLlxyXG4gKi9cclxuZnVuY3Rpb24gaW5jbHVkZURvd25zdHJlYW1TdGFja3MoXHJcbiAgc2VsZWN0ZWRTdGFja3M6IE1hcDxzdHJpbmcsIGN4YXBpLlJvc1N0YWNrQXJ0aWZhY3Q+LFxyXG4gIGFsbFN0YWNrczogTWFwPHN0cmluZywgY3hhcGkuUm9zU3RhY2tBcnRpZmFjdD4sXHJcbikge1xyXG4gIGNvbnN0IGFkZGVkID0gbmV3IEFycmF5PHN0cmluZz4oKTtcclxuXHJcbiAgbGV0IG1hZGVQcm9ncmVzcztcclxuICBkbyB7XHJcbiAgICBtYWRlUHJvZ3Jlc3MgPSBmYWxzZTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IFtpZCwgc3RhY2tdIG9mIGFsbFN0YWNrcykge1xyXG4gICAgICAvLyBTZWxlY3QgdGhpcyBzdGFjayBpZiBpdCdzIG5vdCBzZWxlY3RlZCB5ZXQgQU5EIGl0IGRlcGVuZHMgb24gYSBzdGFjayB0aGF0J3MgaW4gdGhlIHNlbGVjdGVkIHNldFxyXG4gICAgICBpZiAoIXNlbGVjdGVkU3RhY2tzLmhhcyhpZCkgJiYgKHN0YWNrLmRlcGVuZGVuY2llcyB8fCBbXSkuc29tZSgoZGVwKSA9PiBzZWxlY3RlZFN0YWNrcy5oYXMoZGVwLmlkKSkpIHtcclxuICAgICAgICBzZWxlY3RlZFN0YWNrcy5zZXQoaWQsIHN0YWNrKTtcclxuICAgICAgICBhZGRlZC5wdXNoKGlkKTtcclxuICAgICAgICBtYWRlUHJvZ3Jlc3MgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSB3aGlsZSAobWFkZVByb2dyZXNzKTtcclxuXHJcbiAgaWYgKGFkZGVkLmxlbmd0aCA+IDApIHtcclxuICAgIHByaW50KCdJbmNsdWRpbmcgZGVwZW5kaW5nIHN0YWNrczogJXMnLCBjb2xvcnMuYm9sZChhZGRlZC5qb2luKCcsICcpKSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ2FsY3VsYXRlIHRoZSB0cmFuc2l0aXZlIGNsb3N1cmUgb2Ygc3RhY2sgZGVwZW5kZW5jaWVzLlxyXG4gKlxyXG4gKiBNb2RpZmllcyBgc2VsZWN0ZWRTdGFja3NgIGluLXBsYWNlLlxyXG4gKi9cclxuZnVuY3Rpb24gaW5jbHVkZVVwc3RyZWFtU3RhY2tzKFxyXG4gIHNlbGVjdGVkU3RhY2tzOiBNYXA8c3RyaW5nLCBjeGFwaS5Sb3NTdGFja0FydGlmYWN0PixcclxuICBhbGxTdGFja3M6IE1hcDxzdHJpbmcsIGN4YXBpLlJvc1N0YWNrQXJ0aWZhY3Q+LFxyXG4pIHtcclxuICBjb25zdCBhZGRlZCA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XHJcbiAgbGV0IG1hZGVQcm9ncmVzcyA9IHRydWU7XHJcbiAgd2hpbGUgKG1hZGVQcm9ncmVzcykge1xyXG4gICAgbWFkZVByb2dyZXNzID0gZmFsc2U7XHJcblxyXG4gICAgZm9yIChjb25zdCBzdGFjayBvZiBzZWxlY3RlZFN0YWNrcy52YWx1ZXMoKSkge1xyXG4gICAgICBpZiAoc3RhY2suZGVwZW5kZW5jaWVzID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xyXG4gICAgICAvLyBTZWxlY3QgYW4gYWRkaXRpb25hbCBzdGFjayBpZiBpdCdzIG5vdCBzZWxlY3RlZCB5ZXQgYW5kIGEgZGVwZW5kZW5jeSBvZiBhIHNlbGVjdGVkIHN0YWNrIChhbmQgZXhpc3RzLCBvYnZpb3VzbHkpXHJcbiAgICAgIGZvciAoY29uc3QgZGVwZW5kZW5jeUlkIG9mIHN0YWNrLmRlcGVuZGVuY2llcy5tYXAoKHgpID0+IHguaWQpKSB7XHJcbiAgICAgICAgaWYgKCFzZWxlY3RlZFN0YWNrcy5oYXMoZGVwZW5kZW5jeUlkKSAmJiBhbGxTdGFja3MuaGFzKGRlcGVuZGVuY3lJZCkpIHtcclxuICAgICAgICAgIGFkZGVkLnB1c2goZGVwZW5kZW5jeUlkKTtcclxuICAgICAgICAgIHNlbGVjdGVkU3RhY2tzLnNldChkZXBlbmRlbmN5SWQsIGFsbFN0YWNrcy5nZXQoZGVwZW5kZW5jeUlkKSEpO1xyXG4gICAgICAgICAgbWFkZVByb2dyZXNzID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChhZGRlZC5sZW5ndGggPiAwKSB7XHJcbiAgICBwcmludCgnSW5jbHVkaW5nIGRlcGVuZGVuY3kgc3RhY2tzOiAlcycsIGNvbG9ycy5ib2xkKGFkZGVkLmpvaW4oJywgJykpKTtcclxuICB9XHJcbn1cclxuIl19