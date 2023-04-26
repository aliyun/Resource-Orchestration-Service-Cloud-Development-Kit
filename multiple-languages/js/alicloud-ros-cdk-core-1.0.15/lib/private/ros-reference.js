"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosReference = void 0;
const stack_1 = require("../stack");
const reference_1 = require("../reference");
const token_1 = require("../token");
const ROS_REFERENCE_SYMBOL = Symbol.for("ros-cdk-core.RosReference");
/**
 * A Token that represents a ROS reference to another resource
 *
 * Additionally, the dependency between the stacks will be recorded, and the toolkit
 * will make sure to deploy producing stack before the consuming stack.
 *
 * This magic happens in the prepare() phase, where consuming stacks will call
 * `consumeFromStack` on these Tokens and if they happen to be exported by a different
 * Stack, we'll register the dependency.
 */
class RosReference extends reference_1.Reference {
    constructor(value, displayName, target) {
        // prepend scope path to display name
        super(value, target, displayName);
        this.replacementTokens = new Map();
        this.targetStack = stack_1.Stack.of(target);
        Object.defineProperty(this, ROS_REFERENCE_SYMBOL, { value: true });
    }
    /**
     * Check whether this is actually a Reference
     */
    static isRosReference(x) {
        return ROS_REFERENCE_SYMBOL in x;
    }
    /**
     * Return the RosReference for the indicated target
     *
     * Will make sure that multiple invocations for the same target and intrinsic
     * return the same RosReference. Because RosReferences accumulate state in
     * the prepare() phase (for the purpose of cross-stack references), it's
     * important that the state isn't lost if it's lazily created, like so:
     *
     *     Lazy.stringValue({ produce: () => new RosReference(...) })
     */
    static for(target, attribute) {
        return RosReference.singletonReference(target, attribute, () => {
            const rosIntrinsic = attribute === "Ref"
                ? { Ref: target.logicalId }
                : { "Fn::GetAtt": [target.logicalId, attribute] };
            return new RosReference(rosIntrinsic, attribute, target);
        });
    }
    /**
     * Return a RosReference that references a pseudo referencd
     */
    static forPseudo(pseudoName, scope) {
        return RosReference.singletonReference(scope, `Pseudo:${pseudoName}`, () => {
            const rosIntrinsic = { Ref: pseudoName };
            return new RosReference(rosIntrinsic, pseudoName, scope);
        });
    }
    /**
     * Get or create the table
     */
    static singletonReference(target, attribKey, fresh) {
        let attribs = RosReference.referenceTable.get(target);
        if (!attribs) {
            attribs = new Map();
            RosReference.referenceTable.set(target, attribs);
        }
        let ref = attribs.get(attribKey);
        if (!ref) {
            ref = fresh();
            attribs.set(attribKey, ref);
        }
        return ref;
    }
    resolve(context) {
        // If we have a special token for this consuming stack, resolve that. Otherwise resolve as if
        // we are in the same stack.
        const consumingStack = stack_1.Stack.of(context.scope);
        const token = this.replacementTokens.get(consumingStack);
        // if (!token && this.isCrossStackReference(consumingStack) && !context.preparing) {
        // tslint:disable-next-line:max-line-length
        //   throw new Error(`Cross-stack reference (${context.scope.node.path} -> ${this.target.node.path}) has not been assigned a value--call prepare() first`);
        // }
        if (token) {
            return token.resolve(context);
        }
        else {
            return super.resolve(context);
        }
    }
    hasValueForStack(stack) {
        if (stack === this.targetStack) {
            return true;
        }
        return this.replacementTokens.has(stack);
    }
    assignValueForStack(stack, value) {
        if (stack === this.targetStack) {
            throw new Error("cannot assign a value for the same stack");
        }
        if (this.hasValueForStack(stack)) {
            throw new Error("Cannot assign a reference value twice to the same stack. Use hasValueForStack to check first");
        }
        this.replacementTokens.set(stack, value);
    }
    /**
     * Implementation of toString() that will use the display name
     */
    toString() {
        return token_1.Token.asString(this, {
            displayHint: `${this.target.node.id}.${this.displayName}`,
        });
    }
}
exports.RosReference = RosReference;
/**
 * Static table where we keep singleton RosReference instances
 */
RosReference.referenceTable = new Map();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9zLXJlZmVyZW5jZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvcy1yZWZlcmVuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsb0NBQWlDO0FBRWpDLDRDQUF5QztBQUV6QyxvQ0FBaUM7QUFHakMsTUFBTSxvQkFBb0IsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7QUFFckU7Ozs7Ozs7OztHQVNHO0FBQ0gsTUFBYSxZQUFhLFNBQVEscUJBQVM7SUE2RXpDLFlBQXNCLEtBQVUsRUFBRSxXQUFtQixFQUFFLE1BQWtCO1FBQ3ZFLHFDQUFxQztRQUNyQyxLQUFLLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztRQUVsQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxHQUFHLEVBQXNCLENBQUM7UUFDdkQsSUFBSSxDQUFDLFdBQVcsR0FBRyxhQUFLLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXBDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQXBGRDs7T0FFRztJQUNJLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBYztRQUN6QyxPQUFPLG9CQUFvQixJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQ7Ozs7Ozs7OztPQVNHO0lBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFrQixFQUFFLFNBQWlCO1FBQ3JELE9BQU8sWUFBWSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFO1lBQzdELE1BQU0sWUFBWSxHQUNoQixTQUFTLEtBQUssS0FBSztnQkFDakIsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQyxTQUFTLEVBQUU7Z0JBQzNCLENBQUMsQ0FBQyxFQUFFLFlBQVksRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQztZQUN0RCxPQUFPLElBQUksWUFBWSxDQUFDLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDM0QsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQWtCLEVBQUUsS0FBZ0I7UUFDMUQsT0FBTyxZQUFZLENBQUMsa0JBQWtCLENBQ3BDLEtBQUssRUFDTCxVQUFVLFVBQVUsRUFBRSxFQUN0QixHQUFHLEVBQUU7WUFDSCxNQUFNLFlBQVksR0FBRyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsQ0FBQztZQUN6QyxPQUFPLElBQUksWUFBWSxDQUFDLFlBQVksRUFBRSxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDM0QsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDO0lBVUQ7O09BRUc7SUFDSyxNQUFNLENBQUMsa0JBQWtCLENBQy9CLE1BQWlCLEVBQ2pCLFNBQWlCLEVBQ2pCLEtBQXlCO1FBRXpCLElBQUksT0FBTyxHQUFHLFlBQVksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDWixPQUFPLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNwQixZQUFZLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDbEQ7UUFDRCxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDUixHQUFHLEdBQUcsS0FBSyxFQUFFLENBQUM7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUM3QjtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQWtCTSxPQUFPLENBQUMsT0FBd0I7UUFDckMsNkZBQTZGO1FBQzdGLDRCQUE0QjtRQUM1QixNQUFNLGNBQWMsR0FBRyxhQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRXpELG9GQUFvRjtRQUNwRiwyQ0FBMkM7UUFDM0MsMkpBQTJKO1FBQzNKLElBQUk7UUFFSixJQUFJLEtBQUssRUFBRTtZQUNULE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMvQjthQUFNO1lBQ0wsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQy9CO0lBQ0gsQ0FBQztJQUVNLGdCQUFnQixDQUFDLEtBQVk7UUFDbEMsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUM5QixPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTSxtQkFBbUIsQ0FBQyxLQUFZLEVBQUUsS0FBa0I7UUFDekQsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUM5QixNQUFNLElBQUksS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7U0FDN0Q7UUFFRCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNoQyxNQUFNLElBQUksS0FBSyxDQUNiLDhGQUE4RixDQUMvRixDQUFDO1NBQ0g7UUFFRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0Q7O09BRUc7SUFDSSxRQUFRO1FBQ2IsT0FBTyxhQUFLLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRTtZQUMxQixXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtTQUMxRCxDQUFDLENBQUM7SUFDTCxDQUFDOztBQXJJSCxvQ0FzSUM7QUE1RkM7O0dBRUc7QUFDWSwyQkFBYyxHQUFHLElBQUksR0FBRyxFQUdwQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhY2sgfSBmcm9tIFwiLi4vc3RhY2tcIjtcbmltcG9ydCB7IElDb25zdHJ1Y3QsIENvbnN0cnVjdCB9IGZyb20gXCIuLi9jb25zdHJ1Y3QtY29tcGF0XCI7XG5pbXBvcnQgeyBSZWZlcmVuY2UgfSBmcm9tIFwiLi4vcmVmZXJlbmNlXCI7XG5pbXBvcnQgeyBSb3NFbGVtZW50IH0gZnJvbSBcIi4uL3Jvcy1lbGVtZW50XCI7XG5pbXBvcnQgeyBUb2tlbiB9IGZyb20gXCIuLi90b2tlblwiO1xuaW1wb3J0IHsgSVJlc29sdmFibGUsIElSZXNvbHZlQ29udGV4dCB9IGZyb20gXCIuLi9yZXNvbHZhYmxlXCI7XG5cbmNvbnN0IFJPU19SRUZFUkVOQ0VfU1lNQk9MID0gU3ltYm9sLmZvcihcInJvcy1jZGstY29yZS5Sb3NSZWZlcmVuY2VcIik7XG5cbi8qKlxuICogQSBUb2tlbiB0aGF0IHJlcHJlc2VudHMgYSBST1MgcmVmZXJlbmNlIHRvIGFub3RoZXIgcmVzb3VyY2VcbiAqXG4gKiBBZGRpdGlvbmFsbHksIHRoZSBkZXBlbmRlbmN5IGJldHdlZW4gdGhlIHN0YWNrcyB3aWxsIGJlIHJlY29yZGVkLCBhbmQgdGhlIHRvb2xraXRcbiAqIHdpbGwgbWFrZSBzdXJlIHRvIGRlcGxveSBwcm9kdWNpbmcgc3RhY2sgYmVmb3JlIHRoZSBjb25zdW1pbmcgc3RhY2suXG4gKlxuICogVGhpcyBtYWdpYyBoYXBwZW5zIGluIHRoZSBwcmVwYXJlKCkgcGhhc2UsIHdoZXJlIGNvbnN1bWluZyBzdGFja3Mgd2lsbCBjYWxsXG4gKiBgY29uc3VtZUZyb21TdGFja2Agb24gdGhlc2UgVG9rZW5zIGFuZCBpZiB0aGV5IGhhcHBlbiB0byBiZSBleHBvcnRlZCBieSBhIGRpZmZlcmVudFxuICogU3RhY2ssIHdlJ2xsIHJlZ2lzdGVyIHRoZSBkZXBlbmRlbmN5LlxuICovXG5leHBvcnQgY2xhc3MgUm9zUmVmZXJlbmNlIGV4dGVuZHMgUmVmZXJlbmNlIHtcbiAgLyoqXG4gICAqIENoZWNrIHdoZXRoZXIgdGhpcyBpcyBhY3R1YWxseSBhIFJlZmVyZW5jZVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBpc1Jvc1JlZmVyZW5jZSh4OiBJUmVzb2x2YWJsZSk6IHggaXMgUm9zUmVmZXJlbmNlIHtcbiAgICByZXR1cm4gUk9TX1JFRkVSRU5DRV9TWU1CT0wgaW4geDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIFJvc1JlZmVyZW5jZSBmb3IgdGhlIGluZGljYXRlZCB0YXJnZXRcbiAgICpcbiAgICogV2lsbCBtYWtlIHN1cmUgdGhhdCBtdWx0aXBsZSBpbnZvY2F0aW9ucyBmb3IgdGhlIHNhbWUgdGFyZ2V0IGFuZCBpbnRyaW5zaWNcbiAgICogcmV0dXJuIHRoZSBzYW1lIFJvc1JlZmVyZW5jZS4gQmVjYXVzZSBSb3NSZWZlcmVuY2VzIGFjY3VtdWxhdGUgc3RhdGUgaW5cbiAgICogdGhlIHByZXBhcmUoKSBwaGFzZSAoZm9yIHRoZSBwdXJwb3NlIG9mIGNyb3NzLXN0YWNrIHJlZmVyZW5jZXMpLCBpdCdzXG4gICAqIGltcG9ydGFudCB0aGF0IHRoZSBzdGF0ZSBpc24ndCBsb3N0IGlmIGl0J3MgbGF6aWx5IGNyZWF0ZWQsIGxpa2Ugc286XG4gICAqXG4gICAqICAgICBMYXp5LnN0cmluZ1ZhbHVlKHsgcHJvZHVjZTogKCkgPT4gbmV3IFJvc1JlZmVyZW5jZSguLi4pIH0pXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGZvcih0YXJnZXQ6IFJvc0VsZW1lbnQsIGF0dHJpYnV0ZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIFJvc1JlZmVyZW5jZS5zaW5nbGV0b25SZWZlcmVuY2UodGFyZ2V0LCBhdHRyaWJ1dGUsICgpID0+IHtcbiAgICAgIGNvbnN0IHJvc0ludHJpbnNpYyA9XG4gICAgICAgIGF0dHJpYnV0ZSA9PT0gXCJSZWZcIlxuICAgICAgICAgID8geyBSZWY6IHRhcmdldC5sb2dpY2FsSWQgfVxuICAgICAgICAgIDogeyBcIkZuOjpHZXRBdHRcIjogW3RhcmdldC5sb2dpY2FsSWQsIGF0dHJpYnV0ZV0gfTtcbiAgICAgIHJldHVybiBuZXcgUm9zUmVmZXJlbmNlKHJvc0ludHJpbnNpYywgYXR0cmlidXRlLCB0YXJnZXQpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIFJvc1JlZmVyZW5jZSB0aGF0IHJlZmVyZW5jZXMgYSBwc2V1ZG8gcmVmZXJlbmNkXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGZvclBzZXVkbyhwc2V1ZG9OYW1lOiBzdHJpbmcsIHNjb3BlOiBDb25zdHJ1Y3QpIHtcbiAgICByZXR1cm4gUm9zUmVmZXJlbmNlLnNpbmdsZXRvblJlZmVyZW5jZShcbiAgICAgIHNjb3BlLFxuICAgICAgYFBzZXVkbzoke3BzZXVkb05hbWV9YCxcbiAgICAgICgpID0+IHtcbiAgICAgICAgY29uc3Qgcm9zSW50cmluc2ljID0geyBSZWY6IHBzZXVkb05hbWUgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBSb3NSZWZlcmVuY2Uocm9zSW50cmluc2ljLCBwc2V1ZG9OYW1lLCBzY29wZSk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGF0aWMgdGFibGUgd2hlcmUgd2Uga2VlcCBzaW5nbGV0b24gUm9zUmVmZXJlbmNlIGluc3RhbmNlc1xuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWMgcmVmZXJlbmNlVGFibGUgPSBuZXcgTWFwPFxuICAgIENvbnN0cnVjdCxcbiAgICBNYXA8c3RyaW5nLCBSb3NSZWZlcmVuY2U+XG4gID4oKTtcblxuICAvKipcbiAgICogR2V0IG9yIGNyZWF0ZSB0aGUgdGFibGVcbiAgICovXG4gIHByaXZhdGUgc3RhdGljIHNpbmdsZXRvblJlZmVyZW5jZShcbiAgICB0YXJnZXQ6IENvbnN0cnVjdCxcbiAgICBhdHRyaWJLZXk6IHN0cmluZyxcbiAgICBmcmVzaDogKCkgPT4gUm9zUmVmZXJlbmNlXG4gICkge1xuICAgIGxldCBhdHRyaWJzID0gUm9zUmVmZXJlbmNlLnJlZmVyZW5jZVRhYmxlLmdldCh0YXJnZXQpO1xuICAgIGlmICghYXR0cmlicykge1xuICAgICAgYXR0cmlicyA9IG5ldyBNYXAoKTtcbiAgICAgIFJvc1JlZmVyZW5jZS5yZWZlcmVuY2VUYWJsZS5zZXQodGFyZ2V0LCBhdHRyaWJzKTtcbiAgICB9XG4gICAgbGV0IHJlZiA9IGF0dHJpYnMuZ2V0KGF0dHJpYktleSk7XG4gICAgaWYgKCFyZWYpIHtcbiAgICAgIHJlZiA9IGZyZXNoKCk7XG4gICAgICBhdHRyaWJzLnNldChhdHRyaWJLZXksIHJlZik7XG4gICAgfVxuICAgIHJldHVybiByZWY7XG4gIH1cblxuICAvKipcbiAgICogVGhlIFRva2VucyB0aGF0IHNob3VsZCBiZSByZXR1cm5lZCBmb3IgZWFjaCBjb25zdW1pbmcgc3RhY2sgKGFzIGRlY2lkZWQgYnkgdGhlIHByb2R1Y2luZyBTdGFjaylcbiAgICovXG4gIHByaXZhdGUgcmVhZG9ubHkgcmVwbGFjZW1lbnRUb2tlbnM6IE1hcDxTdGFjaywgSVJlc29sdmFibGU+O1xuICBwcml2YXRlIHJlYWRvbmx5IHRhcmdldFN0YWNrOiBTdGFjaztcblxuICBwcm90ZWN0ZWQgY29uc3RydWN0b3IodmFsdWU6IGFueSwgZGlzcGxheU5hbWU6IHN0cmluZywgdGFyZ2V0OiBJQ29uc3RydWN0KSB7XG4gICAgLy8gcHJlcGVuZCBzY29wZSBwYXRoIHRvIGRpc3BsYXkgbmFtZVxuICAgIHN1cGVyKHZhbHVlLCB0YXJnZXQsIGRpc3BsYXlOYW1lKTtcblxuICAgIHRoaXMucmVwbGFjZW1lbnRUb2tlbnMgPSBuZXcgTWFwPFN0YWNrLCBJUmVzb2x2YWJsZT4oKTtcbiAgICB0aGlzLnRhcmdldFN0YWNrID0gU3RhY2sub2YodGFyZ2V0KTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBST1NfUkVGRVJFTkNFX1NZTUJPTCwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgfVxuXG4gIHB1YmxpYyByZXNvbHZlKGNvbnRleHQ6IElSZXNvbHZlQ29udGV4dCk6IGFueSB7XG4gICAgLy8gSWYgd2UgaGF2ZSBhIHNwZWNpYWwgdG9rZW4gZm9yIHRoaXMgY29uc3VtaW5nIHN0YWNrLCByZXNvbHZlIHRoYXQuIE90aGVyd2lzZSByZXNvbHZlIGFzIGlmXG4gICAgLy8gd2UgYXJlIGluIHRoZSBzYW1lIHN0YWNrLlxuICAgIGNvbnN0IGNvbnN1bWluZ1N0YWNrID0gU3RhY2sub2YoY29udGV4dC5zY29wZSk7XG4gICAgY29uc3QgdG9rZW4gPSB0aGlzLnJlcGxhY2VtZW50VG9rZW5zLmdldChjb25zdW1pbmdTdGFjayk7XG5cbiAgICAvLyBpZiAoIXRva2VuICYmIHRoaXMuaXNDcm9zc1N0YWNrUmVmZXJlbmNlKGNvbnN1bWluZ1N0YWNrKSAmJiAhY29udGV4dC5wcmVwYXJpbmcpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgLy8gICB0aHJvdyBuZXcgRXJyb3IoYENyb3NzLXN0YWNrIHJlZmVyZW5jZSAoJHtjb250ZXh0LnNjb3BlLm5vZGUucGF0aH0gLT4gJHt0aGlzLnRhcmdldC5ub2RlLnBhdGh9KSBoYXMgbm90IGJlZW4gYXNzaWduZWQgYSB2YWx1ZS0tY2FsbCBwcmVwYXJlKCkgZmlyc3RgKTtcbiAgICAvLyB9XG5cbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIHJldHVybiB0b2tlbi5yZXNvbHZlKGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc3VwZXIucmVzb2x2ZShjb250ZXh0KTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaGFzVmFsdWVGb3JTdGFjayhzdGFjazogU3RhY2spIHtcbiAgICBpZiAoc3RhY2sgPT09IHRoaXMudGFyZ2V0U3RhY2spIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJlcGxhY2VtZW50VG9rZW5zLmhhcyhzdGFjayk7XG4gIH1cblxuICBwdWJsaWMgYXNzaWduVmFsdWVGb3JTdGFjayhzdGFjazogU3RhY2ssIHZhbHVlOiBJUmVzb2x2YWJsZSkge1xuICAgIGlmIChzdGFjayA9PT0gdGhpcy50YXJnZXRTdGFjaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY2Fubm90IGFzc2lnbiBhIHZhbHVlIGZvciB0aGUgc2FtZSBzdGFja1wiKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5oYXNWYWx1ZUZvclN0YWNrKHN0YWNrKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIkNhbm5vdCBhc3NpZ24gYSByZWZlcmVuY2UgdmFsdWUgdHdpY2UgdG8gdGhlIHNhbWUgc3RhY2suIFVzZSBoYXNWYWx1ZUZvclN0YWNrIHRvIGNoZWNrIGZpcnN0XCJcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGhpcy5yZXBsYWNlbWVudFRva2Vucy5zZXQoc3RhY2ssIHZhbHVlKTtcbiAgfVxuICAvKipcbiAgICogSW1wbGVtZW50YXRpb24gb2YgdG9TdHJpbmcoKSB0aGF0IHdpbGwgdXNlIHRoZSBkaXNwbGF5IG5hbWVcbiAgICovXG4gIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiBUb2tlbi5hc1N0cmluZyh0aGlzLCB7XG4gICAgICBkaXNwbGF5SGludDogYCR7dGhpcy50YXJnZXQubm9kZS5pZH0uJHt0aGlzLmRpc3BsYXlOYW1lfWAsXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==