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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWQtYXNzZW1ibHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjbG91ZC1hc3NlbWJseS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxpREFBaUQ7QUFDakQsc0NBQXNDO0FBQ3RDLHVDQUF1QztBQUN2Qyx3Q0FBbUQ7QUFFbkQsSUFBWSxnQkFnQlg7QUFoQkQsV0FBWSxnQkFBZ0I7SUFDMUI7O09BRUc7SUFDSCxpQ0FBYSxDQUFBO0lBRWI7OztPQUdHO0lBQ0gseUNBQXFCLENBQUE7SUFFckI7O09BRUc7SUFDSCxxQ0FBaUIsQ0FBQTtBQUNuQixDQUFDLEVBaEJXLGdCQUFnQixHQUFoQix3QkFBZ0IsS0FBaEIsd0JBQWdCLFFBZ0IzQjtBQWVEOztHQUVHO0FBQ0gsSUFBWSxzQkFlWDtBQWZELFdBQVksc0JBQXNCO0lBQ2hDOztPQUVHO0lBQ0gsbUVBQUksQ0FBQTtJQUVKOztPQUVHO0lBQ0gsMkVBQVEsQ0FBQTtJQUVSOztPQUVHO0lBQ0gsK0VBQVUsQ0FBQTtBQUNaLENBQUMsRUFmVyxzQkFBc0IsR0FBdEIsOEJBQXNCLEtBQXRCLDhCQUFzQixRQWVqQztBQUVEOztHQUVHO0FBQ0gsTUFBYSxhQUFhO0lBTXhCLFlBQTRCLFFBQTZCO1FBQTdCLGFBQVEsR0FBUixRQUFRLENBQXFCO1FBQ3ZELElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQztJQUN0QyxDQUFDO0lBRU0sS0FBSyxDQUFDLFlBQVksQ0FBQyxTQUFtQixFQUFFLE9BQTRCO1FBQ3pFLFNBQVMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyx3QkFBd0I7UUFFeEUsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDcEMsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN2QixNQUFNLElBQUks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LEtBQUssQ0FBQztRQUVyQixLQUFLLE1BQU0sS0FBSyxJQUFJLGNBQWMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUMzQyxJQUFJLEtBQUssQ0FBQyxZQUFZLEtBQUssU0FBUztnQkFBRSxTQUFTO1lBQy9DLG1IQUFtSDtZQUNuSCxLQUFLLE1BQU0sWUFBWSxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQzlELElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUU7b0JBQ3BFLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ3pCLGNBQWMsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFFLENBQUMsQ0FBQztvQkFDL0QsWUFBWSxHQUFHLElBQUksQ0FBQztpQkFDckI7YUFDRjtTQUNGO0tBQ0Y7SUFFRCxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ3BCLGVBQUssQ0FBQyxpQ0FBaUMsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3pFO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGN4YXBpIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWN4YXBpJztcbmltcG9ydCAqIGFzIGNvbG9ycyBmcm9tICdjb2xvcnMvc2FmZSc7XG5pbXBvcnQgKiBhcyBtaW5pbWF0Y2ggZnJvbSAnbWluaW1hdGNoJztcbmltcG9ydCB7IGVycm9yLCBwcmludCwgd2FybmluZyB9IGZyb20gJy4uL2xvZ2dpbmcnO1xuXG5leHBvcnQgZW51bSBEZWZhdWx0U2VsZWN0aW9uIHtcbiAgLyoqXG4gICAqIFJldHVybnMgYW4gZW1wdHkgc2VsZWN0aW9uIGluIGNhc2UgdGhlcmUgYXJlIG5vIHNlbGVjdG9ycy5cbiAgICovXG4gIE5vbmUgPSAnbm9uZScsXG5cbiAgLyoqXG4gICAqIElmIHRoZSBhcHAgaW5jbHVkZXMgYSBzaW5nbGUgc3RhY2ssIHJldHVybnMgaXQuIE90aGVyd2lzZSB0aHJvd3MgYW4gZXhjZXB0aW9uLlxuICAgKiBUaGlzIGJlaGF2aW9yIGlzIHVzZWQgYnkgXCJkZXBsb3lcIi5cbiAgICovXG4gIE9ubHlTaW5nbGUgPSAnc2luZ2xlJyxcblxuICAvKipcbiAgICogSWYgbm8gc2VsZWN0b3JzIGFyZSBwcm92aWRlZCwgcmV0dXJucyBhbGwgc3RhY2tzIGluIHRoZSBhcHAuXG4gICAqL1xuICBBbGxTdGFja3MgPSAnYWxsJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZWxlY3RTdGFja3NPcHRpb25zIHtcbiAgLyoqXG4gICAqIEV4dGVuZCB0aGUgc2VsZWN0aW9uIHRvIHVwc3RyZWFkL2Rvd25zdHJlYW0gc3RhY2tzXG4gICAqIEBkZWZhdWx0IEV4dGVuZGVkU3RhY2tTZWxlY3Rpb24uTm9uZSBvbmx5IHNlbGVjdCB0aGUgc3BlY2lmaWVkIHN0YWNrcy5cbiAgICovXG4gIGV4dGVuZD86IEV4dGVuZGVkU3RhY2tTZWxlY3Rpb247XG5cbiAgLyoqXG4gICAqIFRoZSBiZWhhdmlvciBpZiBpZiBubyBzZWxlY3RvcnMgYXJlIHByaXZpZGVkLlxuICAgKi9cbiAgZGVmYXVsdEJlaGF2aW9yOiBEZWZhdWx0U2VsZWN0aW9uO1xufVxuXG4vKipcbiAqIFdoZW4gc2VsZWN0aW5nIHN0YWNrcywgd2hhdCBvdGhlciBzdGFja3MgdG8gaW5jbHVkZSBiZWNhdXNlIG9mIGRlcGVuZGVuY2llc1xuICovXG5leHBvcnQgZW51bSBFeHRlbmRlZFN0YWNrU2VsZWN0aW9uIHtcbiAgLyoqXG4gICAqIERvbid0IHNlbGVjdCBhbnkgZXh0cmEgc3RhY2tzXG4gICAqL1xuICBOb25lLFxuXG4gIC8qKlxuICAgKiBJbmNsdWRlIHN0YWNrcyB0aGF0IHRoaXMgc3RhY2sgZGVwZW5kcyBvblxuICAgKi9cbiAgVXBzdHJlYW0sXG5cbiAgLyoqXG4gICAqIEluY2x1ZGUgc3RhY2tzIHRoYXQgZGVwZW5kIG9uIHRoaXMgc3RhY2tcbiAgICovXG4gIERvd25zdHJlYW0sXG59XG5cbi8qKlxuICogQSBzaW5nbGUgQ2xvdWQgQXNzZW1ibHkgYW5kIHRoZSBvcGVyYXRpb25zIHdlIGRvIG9uIGl0IHRvIGRlcGxveSB0aGUgYXJ0aWZhY3RzIGluc2lkZVxuICovXG5leHBvcnQgY2xhc3MgQ2xvdWRBc3NlbWJseSB7XG4gIC8qKlxuICAgKiBUaGUgZGlyZWN0b3J5IHRoaXMgQ2xvdWRBc3NlbWJseSB3YXMgcmVhZCBmcm9tXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgZGlyZWN0b3J5OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IGFzc2VtYmx5OiBjeGFwaS5DbG91ZEFzc2VtYmx5KSB7XG4gICAgdGhpcy5kaXJlY3RvcnkgPSBhc3NlbWJseS5kaXJlY3Rvcnk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgc2VsZWN0U3RhY2tzKHNlbGVjdG9yczogc3RyaW5nW10sIG9wdGlvbnM6IFNlbGVjdFN0YWNrc09wdGlvbnMpOiBQcm9taXNlPFN0YWNrQ29sbGVjdGlvbj4ge1xuICAgIHNlbGVjdG9ycyA9IHNlbGVjdG9ycy5maWx0ZXIoKHMpID0+IHMgIT0gbnVsbCk7IC8vIGZpbHRlciBudWxsL3VuZGVmaW5lZFxuXG4gICAgY29uc3Qgc3RhY2tzID0gdGhpcy5hc3NlbWJseS5zdGFja3M7XG4gICAgaWYgKHN0YWNrcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhpcyBhcHAgY29udGFpbnMgbm8gc3RhY2tzJyk7XG4gICAgfVxuXG4gICAgaWYgKHNlbGVjdG9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgIHN3aXRjaCAob3B0aW9ucy5kZWZhdWx0QmVoYXZpb3IpIHtcbiAgICAgICAgY2FzZSBEZWZhdWx0U2VsZWN0aW9uLkFsbFN0YWNrczpcbiAgICAgICAgICByZXR1cm4gbmV3IFN0YWNrQ29sbGVjdGlvbih0aGlzLCBzdGFja3MpO1xuICAgICAgICBjYXNlIERlZmF1bHRTZWxlY3Rpb24uTm9uZTpcbiAgICAgICAgICByZXR1cm4gbmV3IFN0YWNrQ29sbGVjdGlvbih0aGlzLCBbXSk7XG4gICAgICAgIGNhc2UgRGVmYXVsdFNlbGVjdGlvbi5Pbmx5U2luZ2xlOlxuICAgICAgICAgIGlmIChzdGFja3MubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFN0YWNrQ29sbGVjdGlvbih0aGlzLCBzdGFja3MpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICdTaW5jZSB0aGlzIGFwcCBpbmNsdWRlcyBtb3JlIHRoYW4gYSBzaW5nbGUgc3RhY2ssIHNwZWNpZnkgd2hpY2ggc3RhY2tzIHRvIHVzZSAod2lsZGNhcmRzIGFyZSBzdXBwb3J0ZWQpXFxuJyArXG4gICAgICAgICAgICAgICAgYFN0YWNrczogJHtzdGFja3MubWFwKCh4KSA9PiB4LmlkKS5qb2luKCcgJyl9YCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgaW52YWxpZCBkZWZhdWx0IGJlaGF2aW9yOiAke29wdGlvbnMuZGVmYXVsdEJlaGF2aW9yfWApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFsbFN0YWNrcyA9IG5ldyBNYXA8c3RyaW5nLCBjeGFwaS5Sb3NTdGFja0FydGlmYWN0PigpO1xuICAgIGZvciAoY29uc3Qgc3RhY2sgb2Ygc3RhY2tzKSB7XG4gICAgICBhbGxTdGFja3Muc2V0KHN0YWNrLmlkLCBzdGFjayk7XG4gICAgfVxuXG4gICAgLy8gRm9yIGV2ZXJ5IHNlbGVjdG9yIGFyZ3VtZW50LCBwaWNrIHN0YWNrcyBmcm9tIHRoZSBsaXN0LlxuICAgIGNvbnN0IHNlbGVjdGVkU3RhY2tzID0gbmV3IE1hcDxzdHJpbmcsIGN4YXBpLlJvc1N0YWNrQXJ0aWZhY3Q+KCk7XG4gICAgZm9yIChjb25zdCBwYXR0ZXJuIG9mIHNlbGVjdG9ycykge1xuICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XG5cbiAgICAgIGZvciAoY29uc3Qgc3RhY2sgb2Ygc3RhY2tzKSB7XG4gICAgICAgIGlmIChtaW5pbWF0Y2goc3RhY2suaWQsIHBhdHRlcm4pICYmICFzZWxlY3RlZFN0YWNrcy5oYXMoc3RhY2suaWQpKSB7XG4gICAgICAgICAgc2VsZWN0ZWRTdGFja3Muc2V0KHN0YWNrLmlkLCBzdGFjayk7XG4gICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBzdGFjayBmb3VuZCBtYXRjaGluZyAnJHtwYXR0ZXJufScuIFVzZSBcImxpc3RcIiB0byBwcmludCBtYW5pZmVzdGApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGV4dGVuZCA9IG9wdGlvbnMuZXh0ZW5kIHx8IEV4dGVuZGVkU3RhY2tTZWxlY3Rpb24uTm9uZTtcbiAgICBzd2l0Y2ggKGV4dGVuZCkge1xuICAgICAgY2FzZSBFeHRlbmRlZFN0YWNrU2VsZWN0aW9uLkRvd25zdHJlYW06XG4gICAgICAgIGluY2x1ZGVEb3duc3RyZWFtU3RhY2tzKHNlbGVjdGVkU3RhY2tzLCBhbGxTdGFja3MpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRXh0ZW5kZWRTdGFja1NlbGVjdGlvbi5VcHN0cmVhbTpcbiAgICAgICAgaW5jbHVkZVVwc3RyZWFtU3RhY2tzKHNlbGVjdGVkU3RhY2tzLCBhbGxTdGFja3MpO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICAvLyBGaWx0ZXIgb3JpZ2luYWwgYXJyYXkgYmVjYXVzZSBpdCBpcyBpbiB0aGUgcmlnaHQgb3JkZXJcbiAgICBjb25zdCBzZWxlY3RlZExpc3QgPSBzdGFja3MuZmlsdGVyKChzKSA9PiBzZWxlY3RlZFN0YWNrcy5oYXMocy5pZCkpO1xuXG4gICAgcmV0dXJuIG5ldyBTdGFja0NvbGxlY3Rpb24odGhpcywgc2VsZWN0ZWRMaXN0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWxlY3QgYSBzaW5nbGUgc3RhY2sgYnkgaXRzIElEXG4gICAqL1xuICBwdWJsaWMgc3RhY2tCeUlkKHN0YWNrSWQ6IHN0cmluZykge1xuICAgIHJldHVybiBuZXcgU3RhY2tDb2xsZWN0aW9uKHRoaXMsIFt0aGlzLmFzc2VtYmx5LmdldFN0YWNrQXJ0aWZhY3Qoc3RhY2tJZCldKTtcbiAgfVxufVxuXG4vKipcbiAqIEEgY29sbGVjdGlvbiBvZiBzdGFja3MgYW5kIHJlbGF0ZWQgYXJ0aWZhY3RzXG4gKlxuICogSW4gcHJhY3RpY2UsIG5vdCBhbGwgYXJ0aWZhY3RzIGluIHRoZSBDbG91ZEFzc2VtYmx5IGFyZSBjcmVhdGVkIGVxdWFsO1xuICogc3RhY2tzIGNhbiBiZSBzZWxlY3RlZCBpbmRlcGVuZGVudGx5LCBidXQgb3RoZXIgYXJ0aWZhY3RzIHN1Y2ggYXMgYXNzZXRcbiAqIGJ1bmRsZXMgY2Fubm90LlxuICovXG5leHBvcnQgY2xhc3MgU3RhY2tDb2xsZWN0aW9uIHtcbiAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IGFzc2VtYmx5OiBDbG91ZEFzc2VtYmx5LCBwdWJsaWMgcmVhZG9ubHkgc3RhY2tBcnRpZmFjdHM6IGN4YXBpLlJvc1N0YWNrQXJ0aWZhY3RbXSkge31cblxuICBwdWJsaWMgZ2V0IHN0YWNrQ291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhY2tBcnRpZmFjdHMubGVuZ3RoO1xuICB9XG5cbiAgcHVibGljIGdldCBmaXJzdFN0YWNrKCkge1xuICAgIGlmICh0aGlzLnN0YWNrQ291bnQgPCAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1N0YWNrQ29sbGVjdGlvbiBjb250YWlucyBubyBzdGFjayBhcnRpZmFjdHMgKHRyeWluZyB0byBhY2Nlc3MgdGhlIGZpcnN0IG9uZSknKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc3RhY2tBcnRpZmFjdHNbMF07XG4gIH1cblxuICBwdWJsaWMgZ2V0IHN0YWNrSWRzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5zdGFja0FydGlmYWN0cy5tYXAoKHMpID0+IHMuaWQpO1xuICB9XG5cbiAgcHVibGljIHJldmVyc2VkKCkge1xuICAgIGNvbnN0IGFydHMgPSBbLi4udGhpcy5zdGFja0FydGlmYWN0c107XG4gICAgYXJ0cy5yZXZlcnNlKCk7XG4gICAgcmV0dXJuIG5ldyBTdGFja0NvbGxlY3Rpb24odGhpcy5hc3NlbWJseSwgYXJ0cyk7XG4gIH1cblxuICBwdWJsaWMgcHJvY2Vzc01ldGFkYXRhTWVzc2FnZXMob3B0aW9uczogTWV0YWRhdGFNZXNzYWdlT3B0aW9ucyA9IHt9KSB7XG4gICAgbGV0IHdhcm5pbmdzID0gZmFsc2U7XG4gICAgbGV0IGVycm9ycyA9IGZhbHNlO1xuXG4gICAgZm9yIChjb25zdCBzdGFjayBvZiB0aGlzLnN0YWNrQXJ0aWZhY3RzKSB7XG4gICAgICBmb3IgKGNvbnN0IG1lc3NhZ2Ugb2Ygc3RhY2subWVzc2FnZXMpIHtcbiAgICAgICAgc3dpdGNoIChtZXNzYWdlLmxldmVsKSB7XG4gICAgICAgICAgY2FzZSBjeGFwaS5TeW50aGVzaXNNZXNzYWdlTGV2ZWwuV0FSTklORzpcbiAgICAgICAgICAgIHdhcm5pbmdzID0gdHJ1ZTtcbiAgICAgICAgICAgIHByaW50TWVzc2FnZSh3YXJuaW5nLCAnV2FybmluZycsIG1lc3NhZ2UuaWQsIG1lc3NhZ2UuZW50cnkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBjeGFwaS5TeW50aGVzaXNNZXNzYWdlTGV2ZWwuRVJST1I6XG4gICAgICAgICAgICBlcnJvcnMgPSB0cnVlO1xuICAgICAgICAgICAgcHJpbnRNZXNzYWdlKGVycm9yLCAnRXJyb3InLCBtZXNzYWdlLmlkLCBtZXNzYWdlLmVudHJ5KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgY3hhcGkuU3ludGhlc2lzTWVzc2FnZUxldmVsLklORk86XG4gICAgICAgICAgICBwcmludE1lc3NhZ2UocHJpbnQsICdJbmZvJywgbWVzc2FnZS5pZCwgbWVzc2FnZS5lbnRyeSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChlcnJvcnMgJiYgIW9wdGlvbnMuaWdub3JlRXJyb3JzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZvdW5kIGVycm9ycycpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLnN0cmljdCAmJiB3YXJuaW5ncykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3VuZCB3YXJuaW5ncyAoLS1zdHJpY3QgbW9kZSknKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcmludE1lc3NhZ2UobG9nRm46IChzOiBzdHJpbmcpID0+IHZvaWQsIHByZWZpeDogc3RyaW5nLCBpZDogc3RyaW5nLCBlbnRyeTogY3hhcGkuTWV0YWRhdGFFbnRyeSkge1xuICAgICAgbG9nRm4oYFske3ByZWZpeH0gYXQgJHtpZH1dICR7ZW50cnkuZGF0YX1gKTtcblxuICAgICAgaWYgKG9wdGlvbnMudmVyYm9zZSAmJiBlbnRyeS50cmFjZSkge1xuICAgICAgICBsb2dGbihgICAke2VudHJ5LnRyYWNlLmpvaW4oJ1xcbiAgJyl9YCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWV0YWRhdGFNZXNzYWdlT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIGJlIHZlcmJvc2VcbiAgICpcbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIHZlcmJvc2U/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBEb24ndCBzdG9wIG9uIGVycm9yIG1ldGFkYXRhXG4gICAqXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBpZ25vcmVFcnJvcnM/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBUcmVhdCB3YXJuaW5ncyBpbiBtZXRhZGF0YSBhcyBlcnJvcnNcbiAgICpcbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICovXG4gIHN0cmljdD86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlIHRoZSB0cmFuc2l0aXZlIGNsb3N1cmUgb2Ygc3RhY2sgZGVwZW5kZW50cy5cbiAqXG4gKiBNb2RpZmllcyBgc2VsZWN0ZWRTdGFja3NgIGluLXBsYWNlLlxuICovXG5mdW5jdGlvbiBpbmNsdWRlRG93bnN0cmVhbVN0YWNrcyhcbiAgc2VsZWN0ZWRTdGFja3M6IE1hcDxzdHJpbmcsIGN4YXBpLlJvc1N0YWNrQXJ0aWZhY3Q+LFxuICBhbGxTdGFja3M6IE1hcDxzdHJpbmcsIGN4YXBpLlJvc1N0YWNrQXJ0aWZhY3Q+LFxuKSB7XG4gIGNvbnN0IGFkZGVkID0gbmV3IEFycmF5PHN0cmluZz4oKTtcblxuICBsZXQgbWFkZVByb2dyZXNzO1xuICBkbyB7XG4gICAgbWFkZVByb2dyZXNzID0gZmFsc2U7XG5cbiAgICBmb3IgKGNvbnN0IFtpZCwgc3RhY2tdIG9mIGFsbFN0YWNrcykge1xuICAgICAgLy8gU2VsZWN0IHRoaXMgc3RhY2sgaWYgaXQncyBub3Qgc2VsZWN0ZWQgeWV0IEFORCBpdCBkZXBlbmRzIG9uIGEgc3RhY2sgdGhhdCdzIGluIHRoZSBzZWxlY3RlZCBzZXRcbiAgICAgIGlmICghc2VsZWN0ZWRTdGFja3MuaGFzKGlkKSAmJiAoc3RhY2suZGVwZW5kZW5jaWVzIHx8IFtdKS5zb21lKChkZXApID0+IHNlbGVjdGVkU3RhY2tzLmhhcyhkZXAuaWQpKSkge1xuICAgICAgICBzZWxlY3RlZFN0YWNrcy5zZXQoaWQsIHN0YWNrKTtcbiAgICAgICAgYWRkZWQucHVzaChpZCk7XG4gICAgICAgIG1hZGVQcm9ncmVzcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9IHdoaWxlIChtYWRlUHJvZ3Jlc3MpO1xuXG4gIGlmIChhZGRlZC5sZW5ndGggPiAwKSB7XG4gICAgcHJpbnQoJ0luY2x1ZGluZyBkZXBlbmRpbmcgc3RhY2tzOiAlcycsIGNvbG9ycy5ib2xkKGFkZGVkLmpvaW4oJywgJykpKTtcbiAgfVxufVxuXG4vKipcbiAqIENhbGN1bGF0ZSB0aGUgdHJhbnNpdGl2ZSBjbG9zdXJlIG9mIHN0YWNrIGRlcGVuZGVuY2llcy5cbiAqXG4gKiBNb2RpZmllcyBgc2VsZWN0ZWRTdGFja3NgIGluLXBsYWNlLlxuICovXG5mdW5jdGlvbiBpbmNsdWRlVXBzdHJlYW1TdGFja3MoXG4gIHNlbGVjdGVkU3RhY2tzOiBNYXA8c3RyaW5nLCBjeGFwaS5Sb3NTdGFja0FydGlmYWN0PixcbiAgYWxsU3RhY2tzOiBNYXA8c3RyaW5nLCBjeGFwaS5Sb3NTdGFja0FydGlmYWN0Pixcbikge1xuICBjb25zdCBhZGRlZCA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XG4gIGxldCBtYWRlUHJvZ3Jlc3MgPSB0cnVlO1xuICB3aGlsZSAobWFkZVByb2dyZXNzKSB7XG4gICAgbWFkZVByb2dyZXNzID0gZmFsc2U7XG5cbiAgICBmb3IgKGNvbnN0IHN0YWNrIG9mIHNlbGVjdGVkU3RhY2tzLnZhbHVlcygpKSB7XG4gICAgICBpZiAoc3RhY2suZGVwZW5kZW5jaWVzID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xuICAgICAgLy8gU2VsZWN0IGFuIGFkZGl0aW9uYWwgc3RhY2sgaWYgaXQncyBub3Qgc2VsZWN0ZWQgeWV0IGFuZCBhIGRlcGVuZGVuY3kgb2YgYSBzZWxlY3RlZCBzdGFjayAoYW5kIGV4aXN0cywgb2J2aW91c2x5KVxuICAgICAgZm9yIChjb25zdCBkZXBlbmRlbmN5SWQgb2Ygc3RhY2suZGVwZW5kZW5jaWVzLm1hcCgoeCkgPT4geC5pZCkpIHtcbiAgICAgICAgaWYgKCFzZWxlY3RlZFN0YWNrcy5oYXMoZGVwZW5kZW5jeUlkKSAmJiBhbGxTdGFja3MuaGFzKGRlcGVuZGVuY3lJZCkpIHtcbiAgICAgICAgICBhZGRlZC5wdXNoKGRlcGVuZGVuY3lJZCk7XG4gICAgICAgICAgc2VsZWN0ZWRTdGFja3Muc2V0KGRlcGVuZGVuY3lJZCwgYWxsU3RhY2tzLmdldChkZXBlbmRlbmN5SWQpISk7XG4gICAgICAgICAgbWFkZVByb2dyZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChhZGRlZC5sZW5ndGggPiAwKSB7XG4gICAgcHJpbnQoJ0luY2x1ZGluZyBkZXBlbmRlbmN5IHN0YWNrczogJXMnLCBjb2xvcnMuYm9sZChhZGRlZC5qb2luKCcsICcpKSk7XG4gIH1cbn1cbiJdfQ==