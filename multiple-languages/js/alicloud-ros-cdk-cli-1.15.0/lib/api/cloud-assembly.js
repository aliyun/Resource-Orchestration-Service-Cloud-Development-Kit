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
        (0, logging_1.print)('Including depending stacks: %s', colors.bold(added.join(', ')));
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
        (0, logging_1.print)('Including dependency stacks: %s', colors.bold(added.join(', ')));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWQtYXNzZW1ibHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjbG91ZC1hc3NlbWJseS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxpREFBaUQ7QUFDakQsc0NBQXNDO0FBQ3RDLHVDQUF1QztBQUN2Qyx3Q0FBbUQ7QUFFbkQsSUFBWSxnQkFnQlg7QUFoQkQsV0FBWSxnQkFBZ0I7SUFDMUI7O09BRUc7SUFDSCxpQ0FBYSxDQUFBO0lBRWI7OztPQUdHO0lBQ0gseUNBQXFCLENBQUE7SUFFckI7O09BRUc7SUFDSCxxQ0FBaUIsQ0FBQTtBQUNuQixDQUFDLEVBaEJXLGdCQUFnQixHQUFoQix3QkFBZ0IsS0FBaEIsd0JBQWdCLFFBZ0IzQjtBQWVEOztHQUVHO0FBQ0gsSUFBWSxzQkFlWDtBQWZELFdBQVksc0JBQXNCO0lBQ2hDOztPQUVHO0lBQ0gsbUVBQUksQ0FBQTtJQUVKOztPQUVHO0lBQ0gsMkVBQVEsQ0FBQTtJQUVSOztPQUVHO0lBQ0gsK0VBQVUsQ0FBQTtBQUNaLENBQUMsRUFmVyxzQkFBc0IsR0FBdEIsOEJBQXNCLEtBQXRCLDhCQUFzQixRQWVqQztBQUVEOztHQUVHO0FBQ0gsTUFBYSxhQUFhO0lBTXhCLFlBQTRCLFFBQTZCO1FBQTdCLGFBQVEsR0FBUixRQUFRLENBQXFCO1FBQ3ZELElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQztJQUN0QyxDQUFDO0lBRU0sS0FBSyxDQUFDLFlBQVksQ0FBQyxTQUFtQixFQUFFLE9BQTRCO1FBQ3pFLFNBQVMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyx3QkFBd0I7UUFFeEUsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDcEMsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN2QixNQUFNLElBQUks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LEdBQUcsS0FBSyxDQUFDO1FBRXJCLEtBQUssTUFBTSxLQUFLLElBQUksY0FBYyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQzNDLElBQUksS0FBSyxDQUFDLFlBQVksS0FBSyxTQUFTO2dCQUFFLFNBQVM7WUFDL0MsbUhBQW1IO1lBQ25ILEtBQUssTUFBTSxZQUFZLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFDOUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBRTtvQkFDcEUsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDekIsY0FBYyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUUsQ0FBQyxDQUFDO29CQUMvRCxZQUFZLEdBQUcsSUFBSSxDQUFDO2lCQUNyQjthQUNGO1NBQ0Y7S0FDRjtJQUVELElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDcEIsSUFBQSxlQUFLLEVBQUMsaUNBQWlDLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN6RTtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjeGFwaSBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jeGFwaSc7XG5pbXBvcnQgKiBhcyBjb2xvcnMgZnJvbSAnY29sb3JzL3NhZmUnO1xuaW1wb3J0ICogYXMgbWluaW1hdGNoIGZyb20gJ21pbmltYXRjaCc7XG5pbXBvcnQgeyBlcnJvciwgcHJpbnQsIHdhcm5pbmcgfSBmcm9tICcuLi9sb2dnaW5nJztcblxuZXhwb3J0IGVudW0gRGVmYXVsdFNlbGVjdGlvbiB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGVtcHR5IHNlbGVjdGlvbiBpbiBjYXNlIHRoZXJlIGFyZSBubyBzZWxlY3RvcnMuXG4gICAqL1xuICBOb25lID0gJ25vbmUnLFxuXG4gIC8qKlxuICAgKiBJZiB0aGUgYXBwIGluY2x1ZGVzIGEgc2luZ2xlIHN0YWNrLCByZXR1cm5zIGl0LiBPdGhlcndpc2UgdGhyb3dzIGFuIGV4Y2VwdGlvbi5cbiAgICogVGhpcyBiZWhhdmlvciBpcyB1c2VkIGJ5IFwiZGVwbG95XCIuXG4gICAqL1xuICBPbmx5U2luZ2xlID0gJ3NpbmdsZScsXG5cbiAgLyoqXG4gICAqIElmIG5vIHNlbGVjdG9ycyBhcmUgcHJvdmlkZWQsIHJldHVybnMgYWxsIHN0YWNrcyBpbiB0aGUgYXBwLlxuICAgKi9cbiAgQWxsU3RhY2tzID0gJ2FsbCcsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VsZWN0U3RhY2tzT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBFeHRlbmQgdGhlIHNlbGVjdGlvbiB0byB1cHN0cmVhZC9kb3duc3RyZWFtIHN0YWNrc1xuICAgKiBAZGVmYXVsdCBFeHRlbmRlZFN0YWNrU2VsZWN0aW9uLk5vbmUgb25seSBzZWxlY3QgdGhlIHNwZWNpZmllZCBzdGFja3MuXG4gICAqL1xuICBleHRlbmQ/OiBFeHRlbmRlZFN0YWNrU2VsZWN0aW9uO1xuXG4gIC8qKlxuICAgKiBUaGUgYmVoYXZpb3IgaWYgaWYgbm8gc2VsZWN0b3JzIGFyZSBwcml2aWRlZC5cbiAgICovXG4gIGRlZmF1bHRCZWhhdmlvcjogRGVmYXVsdFNlbGVjdGlvbjtcbn1cblxuLyoqXG4gKiBXaGVuIHNlbGVjdGluZyBzdGFja3MsIHdoYXQgb3RoZXIgc3RhY2tzIHRvIGluY2x1ZGUgYmVjYXVzZSBvZiBkZXBlbmRlbmNpZXNcbiAqL1xuZXhwb3J0IGVudW0gRXh0ZW5kZWRTdGFja1NlbGVjdGlvbiB7XG4gIC8qKlxuICAgKiBEb24ndCBzZWxlY3QgYW55IGV4dHJhIHN0YWNrc1xuICAgKi9cbiAgTm9uZSxcblxuICAvKipcbiAgICogSW5jbHVkZSBzdGFja3MgdGhhdCB0aGlzIHN0YWNrIGRlcGVuZHMgb25cbiAgICovXG4gIFVwc3RyZWFtLFxuXG4gIC8qKlxuICAgKiBJbmNsdWRlIHN0YWNrcyB0aGF0IGRlcGVuZCBvbiB0aGlzIHN0YWNrXG4gICAqL1xuICBEb3duc3RyZWFtLFxufVxuXG4vKipcbiAqIEEgc2luZ2xlIENsb3VkIEFzc2VtYmx5IGFuZCB0aGUgb3BlcmF0aW9ucyB3ZSBkbyBvbiBpdCB0byBkZXBsb3kgdGhlIGFydGlmYWN0cyBpbnNpZGVcbiAqL1xuZXhwb3J0IGNsYXNzIENsb3VkQXNzZW1ibHkge1xuICAvKipcbiAgICogVGhlIGRpcmVjdG9yeSB0aGlzIENsb3VkQXNzZW1ibHkgd2FzIHJlYWQgZnJvbVxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGRpcmVjdG9yeTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBhc3NlbWJseTogY3hhcGkuQ2xvdWRBc3NlbWJseSkge1xuICAgIHRoaXMuZGlyZWN0b3J5ID0gYXNzZW1ibHkuZGlyZWN0b3J5O1xuICB9XG5cbiAgcHVibGljIGFzeW5jIHNlbGVjdFN0YWNrcyhzZWxlY3RvcnM6IHN0cmluZ1tdLCBvcHRpb25zOiBTZWxlY3RTdGFja3NPcHRpb25zKTogUHJvbWlzZTxTdGFja0NvbGxlY3Rpb24+IHtcbiAgICBzZWxlY3RvcnMgPSBzZWxlY3RvcnMuZmlsdGVyKChzKSA9PiBzICE9IG51bGwpOyAvLyBmaWx0ZXIgbnVsbC91bmRlZmluZWRcblxuICAgIGNvbnN0IHN0YWNrcyA9IHRoaXMuYXNzZW1ibHkuc3RhY2tzO1xuICAgIGlmIChzdGFja3MubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgYXBwIGNvbnRhaW5zIG5vIHN0YWNrcycpO1xuICAgIH1cblxuICAgIGlmIChzZWxlY3RvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICBzd2l0Y2ggKG9wdGlvbnMuZGVmYXVsdEJlaGF2aW9yKSB7XG4gICAgICAgIGNhc2UgRGVmYXVsdFNlbGVjdGlvbi5BbGxTdGFja3M6XG4gICAgICAgICAgcmV0dXJuIG5ldyBTdGFja0NvbGxlY3Rpb24odGhpcywgc3RhY2tzKTtcbiAgICAgICAgY2FzZSBEZWZhdWx0U2VsZWN0aW9uLk5vbmU6XG4gICAgICAgICAgcmV0dXJuIG5ldyBTdGFja0NvbGxlY3Rpb24odGhpcywgW10pO1xuICAgICAgICBjYXNlIERlZmF1bHRTZWxlY3Rpb24uT25seVNpbmdsZTpcbiAgICAgICAgICBpZiAoc3RhY2tzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTdGFja0NvbGxlY3Rpb24odGhpcywgc3RhY2tzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAnU2luY2UgdGhpcyBhcHAgaW5jbHVkZXMgbW9yZSB0aGFuIGEgc2luZ2xlIHN0YWNrLCBzcGVjaWZ5IHdoaWNoIHN0YWNrcyB0byB1c2UgKHdpbGRjYXJkcyBhcmUgc3VwcG9ydGVkKVxcbicgK1xuICAgICAgICAgICAgICAgIGBTdGFja3M6ICR7c3RhY2tzLm1hcCgoeCkgPT4geC5pZCkuam9pbignICcpfWAsXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFsaWQgZGVmYXVsdCBiZWhhdmlvcjogJHtvcHRpb25zLmRlZmF1bHRCZWhhdmlvcn1gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhbGxTdGFja3MgPSBuZXcgTWFwPHN0cmluZywgY3hhcGkuUm9zU3RhY2tBcnRpZmFjdD4oKTtcbiAgICBmb3IgKGNvbnN0IHN0YWNrIG9mIHN0YWNrcykge1xuICAgICAgYWxsU3RhY2tzLnNldChzdGFjay5pZCwgc3RhY2spO1xuICAgIH1cblxuICAgIC8vIEZvciBldmVyeSBzZWxlY3RvciBhcmd1bWVudCwgcGljayBzdGFja3MgZnJvbSB0aGUgbGlzdC5cbiAgICBjb25zdCBzZWxlY3RlZFN0YWNrcyA9IG5ldyBNYXA8c3RyaW5nLCBjeGFwaS5Sb3NTdGFja0FydGlmYWN0PigpO1xuICAgIGZvciAoY29uc3QgcGF0dGVybiBvZiBzZWxlY3RvcnMpIHtcbiAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuXG4gICAgICBmb3IgKGNvbnN0IHN0YWNrIG9mIHN0YWNrcykge1xuICAgICAgICBpZiAobWluaW1hdGNoKHN0YWNrLmlkLCBwYXR0ZXJuKSAmJiAhc2VsZWN0ZWRTdGFja3MuaGFzKHN0YWNrLmlkKSkge1xuICAgICAgICAgIHNlbGVjdGVkU3RhY2tzLnNldChzdGFjay5pZCwgc3RhY2spO1xuICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gc3RhY2sgZm91bmQgbWF0Y2hpbmcgJyR7cGF0dGVybn0nLiBVc2UgXCJsaXN0XCIgdG8gcHJpbnQgbWFuaWZlc3RgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBleHRlbmQgPSBvcHRpb25zLmV4dGVuZCB8fCBFeHRlbmRlZFN0YWNrU2VsZWN0aW9uLk5vbmU7XG4gICAgc3dpdGNoIChleHRlbmQpIHtcbiAgICAgIGNhc2UgRXh0ZW5kZWRTdGFja1NlbGVjdGlvbi5Eb3duc3RyZWFtOlxuICAgICAgICBpbmNsdWRlRG93bnN0cmVhbVN0YWNrcyhzZWxlY3RlZFN0YWNrcywgYWxsU3RhY2tzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEV4dGVuZGVkU3RhY2tTZWxlY3Rpb24uVXBzdHJlYW06XG4gICAgICAgIGluY2x1ZGVVcHN0cmVhbVN0YWNrcyhzZWxlY3RlZFN0YWNrcywgYWxsU3RhY2tzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgLy8gRmlsdGVyIG9yaWdpbmFsIGFycmF5IGJlY2F1c2UgaXQgaXMgaW4gdGhlIHJpZ2h0IG9yZGVyXG4gICAgY29uc3Qgc2VsZWN0ZWRMaXN0ID0gc3RhY2tzLmZpbHRlcigocykgPT4gc2VsZWN0ZWRTdGFja3MuaGFzKHMuaWQpKTtcblxuICAgIHJldHVybiBuZXcgU3RhY2tDb2xsZWN0aW9uKHRoaXMsIHNlbGVjdGVkTGlzdCk7XG4gIH1cblxuICAvKipcbiAgICogU2VsZWN0IGEgc2luZ2xlIHN0YWNrIGJ5IGl0cyBJRFxuICAgKi9cbiAgcHVibGljIHN0YWNrQnlJZChzdGFja0lkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmV3IFN0YWNrQ29sbGVjdGlvbih0aGlzLCBbdGhpcy5hc3NlbWJseS5nZXRTdGFja0FydGlmYWN0KHN0YWNrSWQpXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBIGNvbGxlY3Rpb24gb2Ygc3RhY2tzIGFuZCByZWxhdGVkIGFydGlmYWN0c1xuICpcbiAqIEluIHByYWN0aWNlLCBub3QgYWxsIGFydGlmYWN0cyBpbiB0aGUgQ2xvdWRBc3NlbWJseSBhcmUgY3JlYXRlZCBlcXVhbDtcbiAqIHN0YWNrcyBjYW4gYmUgc2VsZWN0ZWQgaW5kZXBlbmRlbnRseSwgYnV0IG90aGVyIGFydGlmYWN0cyBzdWNoIGFzIGFzc2V0XG4gKiBidW5kbGVzIGNhbm5vdC5cbiAqL1xuZXhwb3J0IGNsYXNzIFN0YWNrQ29sbGVjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBhc3NlbWJseTogQ2xvdWRBc3NlbWJseSwgcHVibGljIHJlYWRvbmx5IHN0YWNrQXJ0aWZhY3RzOiBjeGFwaS5Sb3NTdGFja0FydGlmYWN0W10pIHt9XG5cbiAgcHVibGljIGdldCBzdGFja0NvdW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YWNrQXJ0aWZhY3RzLmxlbmd0aDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZmlyc3RTdGFjaygpIHtcbiAgICBpZiAodGhpcy5zdGFja0NvdW50IDwgMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdTdGFja0NvbGxlY3Rpb24gY29udGFpbnMgbm8gc3RhY2sgYXJ0aWZhY3RzICh0cnlpbmcgdG8gYWNjZXNzIHRoZSBmaXJzdCBvbmUpJyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnN0YWNrQXJ0aWZhY3RzWzBdO1xuICB9XG5cbiAgcHVibGljIGdldCBzdGFja0lkcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhY2tBcnRpZmFjdHMubWFwKChzKSA9PiBzLmlkKTtcbiAgfVxuXG4gIHB1YmxpYyByZXZlcnNlZCgpIHtcbiAgICBjb25zdCBhcnRzID0gWy4uLnRoaXMuc3RhY2tBcnRpZmFjdHNdO1xuICAgIGFydHMucmV2ZXJzZSgpO1xuICAgIHJldHVybiBuZXcgU3RhY2tDb2xsZWN0aW9uKHRoaXMuYXNzZW1ibHksIGFydHMpO1xuICB9XG5cbiAgcHVibGljIHByb2Nlc3NNZXRhZGF0YU1lc3NhZ2VzKG9wdGlvbnM6IE1ldGFkYXRhTWVzc2FnZU9wdGlvbnMgPSB7fSkge1xuICAgIGxldCB3YXJuaW5ncyA9IGZhbHNlO1xuICAgIGxldCBlcnJvcnMgPSBmYWxzZTtcblxuICAgIGZvciAoY29uc3Qgc3RhY2sgb2YgdGhpcy5zdGFja0FydGlmYWN0cykge1xuICAgICAgZm9yIChjb25zdCBtZXNzYWdlIG9mIHN0YWNrLm1lc3NhZ2VzKSB7XG4gICAgICAgIHN3aXRjaCAobWVzc2FnZS5sZXZlbCkge1xuICAgICAgICAgIGNhc2UgY3hhcGkuU3ludGhlc2lzTWVzc2FnZUxldmVsLldBUk5JTkc6XG4gICAgICAgICAgICB3YXJuaW5ncyA9IHRydWU7XG4gICAgICAgICAgICBwcmludE1lc3NhZ2Uod2FybmluZywgJ1dhcm5pbmcnLCBtZXNzYWdlLmlkLCBtZXNzYWdlLmVudHJ5KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgY3hhcGkuU3ludGhlc2lzTWVzc2FnZUxldmVsLkVSUk9SOlxuICAgICAgICAgICAgZXJyb3JzID0gdHJ1ZTtcbiAgICAgICAgICAgIHByaW50TWVzc2FnZShlcnJvciwgJ0Vycm9yJywgbWVzc2FnZS5pZCwgbWVzc2FnZS5lbnRyeSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIGN4YXBpLlN5bnRoZXNpc01lc3NhZ2VMZXZlbC5JTkZPOlxuICAgICAgICAgICAgcHJpbnRNZXNzYWdlKHByaW50LCAnSW5mbycsIG1lc3NhZ2UuaWQsIG1lc3NhZ2UuZW50cnkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZXJyb3JzICYmICFvcHRpb25zLmlnbm9yZUVycm9ycykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3VuZCBlcnJvcnMnKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5zdHJpY3QgJiYgd2FybmluZ3MpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRm91bmQgd2FybmluZ3MgKC0tc3RyaWN0IG1vZGUpJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJpbnRNZXNzYWdlKGxvZ0ZuOiAoczogc3RyaW5nKSA9PiB2b2lkLCBwcmVmaXg6IHN0cmluZywgaWQ6IHN0cmluZywgZW50cnk6IGN4YXBpLk1ldGFkYXRhRW50cnkpIHtcbiAgICAgIGxvZ0ZuKGBbJHtwcmVmaXh9IGF0ICR7aWR9XSAke2VudHJ5LmRhdGF9YCk7XG5cbiAgICAgIGlmIChvcHRpb25zLnZlcmJvc2UgJiYgZW50cnkudHJhY2UpIHtcbiAgICAgICAgbG9nRm4oYCAgJHtlbnRyeS50cmFjZS5qb2luKCdcXG4gICcpfWApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1ldGFkYXRhTWVzc2FnZU9wdGlvbnMge1xuICAvKipcbiAgICogV2hldGhlciB0byBiZSB2ZXJib3NlXG4gICAqXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICB2ZXJib3NlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogRG9uJ3Qgc3RvcCBvbiBlcnJvciBtZXRhZGF0YVxuICAgKlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKi9cbiAgaWdub3JlRXJyb3JzPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogVHJlYXQgd2FybmluZ3MgaW4gbWV0YWRhdGEgYXMgZXJyb3JzXG4gICAqXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqL1xuICBzdHJpY3Q/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIENhbGN1bGF0ZSB0aGUgdHJhbnNpdGl2ZSBjbG9zdXJlIG9mIHN0YWNrIGRlcGVuZGVudHMuXG4gKlxuICogTW9kaWZpZXMgYHNlbGVjdGVkU3RhY2tzYCBpbi1wbGFjZS5cbiAqL1xuZnVuY3Rpb24gaW5jbHVkZURvd25zdHJlYW1TdGFja3MoXG4gIHNlbGVjdGVkU3RhY2tzOiBNYXA8c3RyaW5nLCBjeGFwaS5Sb3NTdGFja0FydGlmYWN0PixcbiAgYWxsU3RhY2tzOiBNYXA8c3RyaW5nLCBjeGFwaS5Sb3NTdGFja0FydGlmYWN0Pixcbikge1xuICBjb25zdCBhZGRlZCA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XG5cbiAgbGV0IG1hZGVQcm9ncmVzcztcbiAgZG8ge1xuICAgIG1hZGVQcm9ncmVzcyA9IGZhbHNlO1xuXG4gICAgZm9yIChjb25zdCBbaWQsIHN0YWNrXSBvZiBhbGxTdGFja3MpIHtcbiAgICAgIC8vIFNlbGVjdCB0aGlzIHN0YWNrIGlmIGl0J3Mgbm90IHNlbGVjdGVkIHlldCBBTkQgaXQgZGVwZW5kcyBvbiBhIHN0YWNrIHRoYXQncyBpbiB0aGUgc2VsZWN0ZWQgc2V0XG4gICAgICBpZiAoIXNlbGVjdGVkU3RhY2tzLmhhcyhpZCkgJiYgKHN0YWNrLmRlcGVuZGVuY2llcyB8fCBbXSkuc29tZSgoZGVwKSA9PiBzZWxlY3RlZFN0YWNrcy5oYXMoZGVwLmlkKSkpIHtcbiAgICAgICAgc2VsZWN0ZWRTdGFja3Muc2V0KGlkLCBzdGFjayk7XG4gICAgICAgIGFkZGVkLnB1c2goaWQpO1xuICAgICAgICBtYWRlUHJvZ3Jlc3MgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSB3aGlsZSAobWFkZVByb2dyZXNzKTtcblxuICBpZiAoYWRkZWQubGVuZ3RoID4gMCkge1xuICAgIHByaW50KCdJbmNsdWRpbmcgZGVwZW5kaW5nIHN0YWNrczogJXMnLCBjb2xvcnMuYm9sZChhZGRlZC5qb2luKCcsICcpKSk7XG4gIH1cbn1cblxuLyoqXG4gKiBDYWxjdWxhdGUgdGhlIHRyYW5zaXRpdmUgY2xvc3VyZSBvZiBzdGFjayBkZXBlbmRlbmNpZXMuXG4gKlxuICogTW9kaWZpZXMgYHNlbGVjdGVkU3RhY2tzYCBpbi1wbGFjZS5cbiAqL1xuZnVuY3Rpb24gaW5jbHVkZVVwc3RyZWFtU3RhY2tzKFxuICBzZWxlY3RlZFN0YWNrczogTWFwPHN0cmluZywgY3hhcGkuUm9zU3RhY2tBcnRpZmFjdD4sXG4gIGFsbFN0YWNrczogTWFwPHN0cmluZywgY3hhcGkuUm9zU3RhY2tBcnRpZmFjdD4sXG4pIHtcbiAgY29uc3QgYWRkZWQgPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuICBsZXQgbWFkZVByb2dyZXNzID0gdHJ1ZTtcbiAgd2hpbGUgKG1hZGVQcm9ncmVzcykge1xuICAgIG1hZGVQcm9ncmVzcyA9IGZhbHNlO1xuXG4gICAgZm9yIChjb25zdCBzdGFjayBvZiBzZWxlY3RlZFN0YWNrcy52YWx1ZXMoKSkge1xuICAgICAgaWYgKHN0YWNrLmRlcGVuZGVuY2llcyA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcbiAgICAgIC8vIFNlbGVjdCBhbiBhZGRpdGlvbmFsIHN0YWNrIGlmIGl0J3Mgbm90IHNlbGVjdGVkIHlldCBhbmQgYSBkZXBlbmRlbmN5IG9mIGEgc2VsZWN0ZWQgc3RhY2sgKGFuZCBleGlzdHMsIG9idmlvdXNseSlcbiAgICAgIGZvciAoY29uc3QgZGVwZW5kZW5jeUlkIG9mIHN0YWNrLmRlcGVuZGVuY2llcy5tYXAoKHgpID0+IHguaWQpKSB7XG4gICAgICAgIGlmICghc2VsZWN0ZWRTdGFja3MuaGFzKGRlcGVuZGVuY3lJZCkgJiYgYWxsU3RhY2tzLmhhcyhkZXBlbmRlbmN5SWQpKSB7XG4gICAgICAgICAgYWRkZWQucHVzaChkZXBlbmRlbmN5SWQpO1xuICAgICAgICAgIHNlbGVjdGVkU3RhY2tzLnNldChkZXBlbmRlbmN5SWQsIGFsbFN0YWNrcy5nZXQoZGVwZW5kZW5jeUlkKSEpO1xuICAgICAgICAgIG1hZGVQcm9ncmVzcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoYWRkZWQubGVuZ3RoID4gMCkge1xuICAgIHByaW50KCdJbmNsdWRpbmcgZGVwZW5kZW5jeSBzdGFja3M6ICVzJywgY29sb3JzLmJvbGQoYWRkZWQuam9pbignLCAnKSkpO1xuICB9XG59XG4iXX0=