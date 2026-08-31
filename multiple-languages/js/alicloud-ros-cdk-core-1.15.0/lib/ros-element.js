"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosRefElement = exports.RosElement = void 0;
const cxschema = require("@alicloud/ros-cdk-assembly-schema");
const construct_compat_1 = require("./construct-compat");
const lazy_1 = require("./lazy");
const token_1 = require("./token");
const ROS_ELEMENT_SYMBOL = Symbol.for("ros-cdk-core.RosElement");
/**
 * An element of a stack.
 */
class RosElement extends construct_compat_1.Construct {
    /**
     * Returns `true` if a construct is a stack element (i.e. part of the
     * synthesized template).
     *
     * Uses duck-typing instead of `instanceof` to allow stack elements from different
     * versions of this library to be included in the same stack.
     *
     * @returns The construct as a stack element or undefined if it is not a stack element.
     */
    static isRosElement(x) {
        return ROS_ELEMENT_SYMBOL in x;
    }
    /**
     * Creates an entity and binds it to a tree.
     * Note that the root of the tree must be a Stack object (not just any Root).
     *
     * @param scope The parent construct
     * @param props Construct properties
     */
    constructor(scope, id) {
        super(scope, id);
        Object.defineProperty(this, ROS_ELEMENT_SYMBOL, { value: true });
        this.stack = stack_1.Stack.of(this);
        this.logicalId = lazy_1.Lazy.stringValue({ produce: () => this.synthesizeLogicalId() }, {
            displayHint: `${notTooLong(this.node.path)}.LogicalID`,
        });
        this.logicalId = id;
        this.node.addMetadata(cxschema.ArtifactMetadataEntryType.LOGICAL_ID, this.logicalId, this.constructor);
    }
    /**
     * Overrides the auto-generated logical ID with a specific ID.
     * @param newLogicalId The new logical ID to use for this stack element.
     */
    overrideLogicalId(newLogicalId) {
        this._logicalIdOverride = newLogicalId;
    }
    /**
     * @returns the stack trace of the point where this Resource was created from, sourced
     *      from the +metadata+ entry typed +aliyun:ros:logicalId+, and with the bottom-most
     *      node +internal+ entries filtered.
     */
    get creationStack() {
        const trace = this.node.metadata.find((md) => md.type === cxschema.ArtifactMetadataEntryType.LOGICAL_ID).trace;
        if (!trace) {
            return [];
        }
        return filterStackTrace(trace);
        function filterStackTrace(stack) {
            const result = Array.of(...stack);
            while (result.length > 0 && shouldFilter(result[result.length - 1])) {
                result.pop();
            }
            // It's weird if we filtered everything, so return the whole stack...
            return result.length === 0 ? stack : result;
        }
        function shouldFilter(str) {
            return str.match(/[^(]+\(internal\/.*/) !== null;
        }
    }
    /**
     * Called during synthesize to render the logical ID of this element. If
     * `overrideLogicalId` was it will be used, otherwise, we will allocate the
     * logical ID through the stack.
     */
    synthesizeLogicalId() {
        if (this._logicalIdOverride) {
            return this._logicalIdOverride;
        }
        else {
            return this.stack.getLogicalId(this);
        }
    }
}
exports.RosElement = RosElement;
/**
 * Base class for referenceable template constructs which are not Resources
 *
 * These constructs are things like Conditions and Parameters, can be
 * referenced by taking the `.ref` attribute.
 *
 * Resource constructs do not inherit from RosRefElement because they have their
 * own, more specific types returned from the .ref attribute. Also, some
 * resources aren't referenceable at all (such as BucketPolicies or GatewayAttachments).
 */
class RosRefElement extends RosElement {
    /**
     * Return a string that will be resolved to a RosTemplate `{ Ref }` for this element.
     *
     * If, by any chance, the intrinsic reference of a resource is not a string, you could
     * coerce it to an IResolvable through `Lazy.any({ produce: resource.ref })`.
     */
    get ref() {
        return token_1.Token.asString(ros_reference_1.RosReference.for(this, "Ref"));
    }
}
exports.RosRefElement = RosRefElement;
function notTooLong(x) {
    if (x.length < 100) {
        return x;
    }
    return x.substr(0, 47) + "..." + x.substr(x.length - 47);
}
const ros_reference_1 = require("./private/ros-reference");
const stack_1 = require("./stack");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9zLWVsZW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyb3MtZWxlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4REFBOEQ7QUFDOUQseURBQStDO0FBQy9DLGlDQUE4QjtBQUM5QixtQ0FBZ0M7QUFFaEMsTUFBTSxrQkFBa0IsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7QUFFakU7O0dBRUc7QUFDSCxNQUFzQixVQUFXLFNBQVEsNEJBQVM7SUFDaEQ7Ozs7Ozs7O09BUUc7SUFDSSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQU07UUFDL0IsT0FBTyxrQkFBa0IsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQXVCRDs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQWdCLEVBQUUsRUFBVTtRQUN0QyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLGtCQUFrQixFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFFakUsSUFBSSxDQUFDLEtBQUssR0FBRyxhQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTVCLElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBSSxDQUFDLFdBQVcsQ0FDL0IsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLEVBQUUsRUFDN0M7WUFDRSxXQUFXLEVBQUUsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWTtTQUN2RCxDQUNGLENBQUM7UUFDRixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FDbkIsUUFBUSxDQUFDLHlCQUF5QixDQUFDLFVBQVUsRUFDN0MsSUFBSSxDQUFDLFNBQVMsRUFDZCxJQUFJLENBQUMsV0FBVyxDQUNqQixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7T0FHRztJQUNJLGlCQUFpQixDQUFDLFlBQW9CO1FBQzNDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxZQUFZLENBQUM7SUFDekMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFXLGFBQWE7UUFDdEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNuQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMseUJBQXlCLENBQUMsVUFBVSxDQUNqRSxDQUFDLEtBQUssQ0FBQztRQUNULElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDVixPQUFPLEVBQUUsQ0FBQztTQUNYO1FBRUQsT0FBTyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUvQixTQUFTLGdCQUFnQixDQUFDLEtBQWU7WUFDdkMsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQ2xDLE9BQU8sTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ25FLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQzthQUNkO1lBQ0QscUVBQXFFO1lBQ3JFLE9BQU8sTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQzlDLENBQUM7UUFFRCxTQUFTLFlBQVksQ0FBQyxHQUFXO1lBQy9CLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLElBQUksQ0FBQztRQUNuRCxDQUFDO0lBQ0gsQ0FBQztJQXFCRDs7OztPQUlHO0lBQ0ssbUJBQW1CO1FBQ3pCLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzNCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO1NBQ2hDO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQztDQUNGO0FBbklELGdDQW1JQztBQUVEOzs7Ozs7Ozs7R0FTRztBQUNILE1BQXNCLGFBQWMsU0FBUSxVQUFVO0lBQ3BEOzs7OztPQUtHO0lBQ0gsSUFBVyxHQUFHO1FBQ1osT0FBTyxhQUFLLENBQUMsUUFBUSxDQUFDLDRCQUFZLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Q0FDRjtBQVZELHNDQVVDO0FBRUQsU0FBUyxVQUFVLENBQUMsQ0FBUztJQUMzQixJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFO1FBQ2xCLE9BQU8sQ0FBQyxDQUFDO0tBQ1Y7SUFDRCxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFDM0QsQ0FBQztBQUVELDJEQUF1RDtBQUN2RCxtQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjeHNjaGVtYSBmcm9tIFwiQGFsaWNsb3VkL3Jvcy1jZGstYXNzZW1ibHktc2NoZW1hXCI7XG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tIFwiLi9jb25zdHJ1Y3QtY29tcGF0XCI7XG5pbXBvcnQgeyBMYXp5IH0gZnJvbSBcIi4vbGF6eVwiO1xuaW1wb3J0IHsgVG9rZW4gfSBmcm9tIFwiLi90b2tlblwiO1xuXG5jb25zdCBST1NfRUxFTUVOVF9TWU1CT0wgPSBTeW1ib2wuZm9yKFwicm9zLWNkay1jb3JlLlJvc0VsZW1lbnRcIik7XG5cbi8qKlxuICogQW4gZWxlbWVudCBvZiBhIHN0YWNrLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUm9zRWxlbWVudCBleHRlbmRzIENvbnN0cnVjdCB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIGB0cnVlYCBpZiBhIGNvbnN0cnVjdCBpcyBhIHN0YWNrIGVsZW1lbnQgKGkuZS4gcGFydCBvZiB0aGVcbiAgICogc3ludGhlc2l6ZWQgdGVtcGxhdGUpLlxuICAgKlxuICAgKiBVc2VzIGR1Y2stdHlwaW5nIGluc3RlYWQgb2YgYGluc3RhbmNlb2ZgIHRvIGFsbG93IHN0YWNrIGVsZW1lbnRzIGZyb20gZGlmZmVyZW50XG4gICAqIHZlcnNpb25zIG9mIHRoaXMgbGlicmFyeSB0byBiZSBpbmNsdWRlZCBpbiB0aGUgc2FtZSBzdGFjay5cbiAgICpcbiAgICogQHJldHVybnMgVGhlIGNvbnN0cnVjdCBhcyBhIHN0YWNrIGVsZW1lbnQgb3IgdW5kZWZpbmVkIGlmIGl0IGlzIG5vdCBhIHN0YWNrIGVsZW1lbnQuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGlzUm9zRWxlbWVudCh4OiBhbnkpOiB4IGlzIFJvc0VsZW1lbnQge1xuICAgIHJldHVybiBST1NfRUxFTUVOVF9TWU1CT0wgaW4geDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgbG9naWNhbCBJRCBmb3IgdGhpcyBzdGFjayBlbGVtZW50LiBUaGUgbG9naWNhbCBJRCBvZiB0aGUgZWxlbWVudFxuICAgKiBpcyBjYWxjdWxhdGVkIGZyb20gdGhlIHBhdGggb2YgdGhlIHJlc291cmNlIG5vZGUgaW4gdGhlIGNvbnN0cnVjdCB0cmVlLlxuICAgKlxuICAgKiBUbyBvdmVycmlkZSB0aGlzIHZhbHVlLCB1c2UgYG92ZXJyaWRlTG9naWNhbElkKG5ld0xvZ2ljYWxJZClgLlxuICAgKlxuICAgKiBAcmV0dXJucyB0aGUgbG9naWNhbCBJRCBhcyBhIHN0cmluZ2lmaWVkIHRva2VuLiBUaGlzIHZhbHVlIHdpbGwgb25seSBnZXRcbiAgICogcmVzb2x2ZWQgZHVyaW5nIHN5bnRoZXNpcy5cbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBsb2dpY2FsSWQ6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHN0YWNrIGluIHdoaWNoIHRoaXMgZWxlbWVudCBpcyBkZWZpbmVkLiBSb3NFbGVtZW50cyBtdXN0IGJlIGRlZmluZWQgd2l0aGluIGEgc3RhY2sgc2NvcGUgKGRpcmVjdGx5IG9yIGluZGlyZWN0bHkpLlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IHN0YWNrOiBTdGFjaztcblxuICAvKipcbiAgICogQW4gZXhwbGljaXQgbG9naWNhbCBJRCBwcm92aWRlZCBieSBgb3ZlcnJpZGVMb2dpY2FsSWRgLlxuICAgKi9cbiAgcHJpdmF0ZSBfbG9naWNhbElkT3ZlcnJpZGU/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gZW50aXR5IGFuZCBiaW5kcyBpdCB0byBhIHRyZWUuXG4gICAqIE5vdGUgdGhhdCB0aGUgcm9vdCBvZiB0aGUgdHJlZSBtdXN0IGJlIGEgU3RhY2sgb2JqZWN0IChub3QganVzdCBhbnkgUm9vdCkuXG4gICAqXG4gICAqIEBwYXJhbSBzY29wZSBUaGUgcGFyZW50IGNvbnN0cnVjdFxuICAgKiBAcGFyYW0gcHJvcHMgQ29uc3RydWN0IHByb3BlcnRpZXNcbiAgICovXG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIFJPU19FTEVNRU5UX1NZTUJPTCwgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuICAgIHRoaXMuc3RhY2sgPSBTdGFjay5vZih0aGlzKTtcblxuICAgIHRoaXMubG9naWNhbElkID0gTGF6eS5zdHJpbmdWYWx1ZShcbiAgICAgIHsgcHJvZHVjZTogKCkgPT4gdGhpcy5zeW50aGVzaXplTG9naWNhbElkKCkgfSxcbiAgICAgIHtcbiAgICAgICAgZGlzcGxheUhpbnQ6IGAke25vdFRvb0xvbmcodGhpcy5ub2RlLnBhdGgpfS5Mb2dpY2FsSURgLFxuICAgICAgfVxuICAgICk7XG4gICAgdGhpcy5sb2dpY2FsSWQgPSBpZDtcbiAgICB0aGlzLm5vZGUuYWRkTWV0YWRhdGEoXG4gICAgICBjeHNjaGVtYS5BcnRpZmFjdE1ldGFkYXRhRW50cnlUeXBlLkxPR0lDQUxfSUQsXG4gICAgICB0aGlzLmxvZ2ljYWxJZCxcbiAgICAgIHRoaXMuY29uc3RydWN0b3JcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlcyB0aGUgYXV0by1nZW5lcmF0ZWQgbG9naWNhbCBJRCB3aXRoIGEgc3BlY2lmaWMgSUQuXG4gICAqIEBwYXJhbSBuZXdMb2dpY2FsSWQgVGhlIG5ldyBsb2dpY2FsIElEIHRvIHVzZSBmb3IgdGhpcyBzdGFjayBlbGVtZW50LlxuICAgKi9cbiAgcHVibGljIG92ZXJyaWRlTG9naWNhbElkKG5ld0xvZ2ljYWxJZDogc3RyaW5nKSB7XG4gICAgdGhpcy5fbG9naWNhbElkT3ZlcnJpZGUgPSBuZXdMb2dpY2FsSWQ7XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMgdGhlIHN0YWNrIHRyYWNlIG9mIHRoZSBwb2ludCB3aGVyZSB0aGlzIFJlc291cmNlIHdhcyBjcmVhdGVkIGZyb20sIHNvdXJjZWRcbiAgICogICAgICBmcm9tIHRoZSArbWV0YWRhdGErIGVudHJ5IHR5cGVkICthbGl5dW46cm9zOmxvZ2ljYWxJZCssIGFuZCB3aXRoIHRoZSBib3R0b20tbW9zdFxuICAgKiAgICAgIG5vZGUgK2ludGVybmFsKyBlbnRyaWVzIGZpbHRlcmVkLlxuICAgKi9cbiAgcHVibGljIGdldCBjcmVhdGlvblN0YWNrKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCB0cmFjZSA9IHRoaXMubm9kZS5tZXRhZGF0YS5maW5kKFxuICAgICAgKG1kKSA9PiBtZC50eXBlID09PSBjeHNjaGVtYS5BcnRpZmFjdE1ldGFkYXRhRW50cnlUeXBlLkxPR0lDQUxfSURcbiAgICApIS50cmFjZTtcbiAgICBpZiAoIXRyYWNlKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbHRlclN0YWNrVHJhY2UodHJhY2UpO1xuXG4gICAgZnVuY3Rpb24gZmlsdGVyU3RhY2tUcmFjZShzdGFjazogc3RyaW5nW10pOiBzdHJpbmdbXSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBBcnJheS5vZiguLi5zdGFjayk7XG4gICAgICB3aGlsZSAocmVzdWx0Lmxlbmd0aCA+IDAgJiYgc2hvdWxkRmlsdGVyKHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV0pKSB7XG4gICAgICAgIHJlc3VsdC5wb3AoKTtcbiAgICAgIH1cbiAgICAgIC8vIEl0J3Mgd2VpcmQgaWYgd2UgZmlsdGVyZWQgZXZlcnl0aGluZywgc28gcmV0dXJuIHRoZSB3aG9sZSBzdGFjay4uLlxuICAgICAgcmV0dXJuIHJlc3VsdC5sZW5ndGggPT09IDAgPyBzdGFjayA6IHJlc3VsdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG91bGRGaWx0ZXIoc3RyOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiBzdHIubWF0Y2goL1teKF0rXFwoaW50ZXJuYWxcXC8uKi8pICE9PSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB0ZW1wbGF0ZSAnc25pcHBldCcgZm9yIHRoaXMgZW50aXR5LiBUaGUgc25pcHBldCB3aWxsIG9ubHkgYmUgbWVyZ2VkXG4gICAqIGF0IHRoZSByb290IGxldmVsIHRvIGVuc3VyZSB0aGVyZSBhcmUgbm8gaWRlbnRpdHkgY29uZmxpY3RzLlxuICAgKlxuICAgKiBGb3IgZXhhbXBsZSwgYSBSZXNvdXJjZSBjbGFzcyB3aWxsIHJldHVybiBzb21ldGhpbmcgbGlrZTpcbiAgICoge1xuICAgKiAgIFJlc291cmNlczoge1xuICAgKiAgICAgW3RoaXMubG9naWNhbElkXToge1xuICAgKiAgICAgICBUeXBlOiB0aGlzLnJlc291cmNlVHlwZSxcbiAgICogICAgICAgUHJvcGVydGllczogdGhpcy5wcm9wcyxcbiAgICogICAgICAgQ29uZGl0aW9uOiB0aGlzLmNvbmRpdGlvblxuICAgKiAgICAgfVxuICAgKiAgIH1cbiAgICogfVxuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHB1YmxpYyBhYnN0cmFjdCBfdG9Sb3NUZW1wbGF0ZSgpOiBvYmplY3Q7XG5cbiAgLyoqXG4gICAqIENhbGxlZCBkdXJpbmcgc3ludGhlc2l6ZSB0byByZW5kZXIgdGhlIGxvZ2ljYWwgSUQgb2YgdGhpcyBlbGVtZW50LiBJZlxuICAgKiBgb3ZlcnJpZGVMb2dpY2FsSWRgIHdhcyBpdCB3aWxsIGJlIHVzZWQsIG90aGVyd2lzZSwgd2Ugd2lsbCBhbGxvY2F0ZSB0aGVcbiAgICogbG9naWNhbCBJRCB0aHJvdWdoIHRoZSBzdGFjay5cbiAgICovXG4gIHByaXZhdGUgc3ludGhlc2l6ZUxvZ2ljYWxJZCgpIHtcbiAgICBpZiAodGhpcy5fbG9naWNhbElkT3ZlcnJpZGUpIHtcbiAgICAgIHJldHVybiB0aGlzLl9sb2dpY2FsSWRPdmVycmlkZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhY2suZ2V0TG9naWNhbElkKHRoaXMpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIHJlZmVyZW5jZWFibGUgdGVtcGxhdGUgY29uc3RydWN0cyB3aGljaCBhcmUgbm90IFJlc291cmNlc1xuICpcbiAqIFRoZXNlIGNvbnN0cnVjdHMgYXJlIHRoaW5ncyBsaWtlIENvbmRpdGlvbnMgYW5kIFBhcmFtZXRlcnMsIGNhbiBiZVxuICogcmVmZXJlbmNlZCBieSB0YWtpbmcgdGhlIGAucmVmYCBhdHRyaWJ1dGUuXG4gKlxuICogUmVzb3VyY2UgY29uc3RydWN0cyBkbyBub3QgaW5oZXJpdCBmcm9tIFJvc1JlZkVsZW1lbnQgYmVjYXVzZSB0aGV5IGhhdmUgdGhlaXJcbiAqIG93biwgbW9yZSBzcGVjaWZpYyB0eXBlcyByZXR1cm5lZCBmcm9tIHRoZSAucmVmIGF0dHJpYnV0ZS4gQWxzbywgc29tZVxuICogcmVzb3VyY2VzIGFyZW4ndCByZWZlcmVuY2VhYmxlIGF0IGFsbCAoc3VjaCBhcyBCdWNrZXRQb2xpY2llcyBvciBHYXRld2F5QXR0YWNobWVudHMpLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUm9zUmVmRWxlbWVudCBleHRlbmRzIFJvc0VsZW1lbnQge1xuICAvKipcbiAgICogUmV0dXJuIGEgc3RyaW5nIHRoYXQgd2lsbCBiZSByZXNvbHZlZCB0byBhIFJvc1RlbXBsYXRlIGB7IFJlZiB9YCBmb3IgdGhpcyBlbGVtZW50LlxuICAgKlxuICAgKiBJZiwgYnkgYW55IGNoYW5jZSwgdGhlIGludHJpbnNpYyByZWZlcmVuY2Ugb2YgYSByZXNvdXJjZSBpcyBub3QgYSBzdHJpbmcsIHlvdSBjb3VsZFxuICAgKiBjb2VyY2UgaXQgdG8gYW4gSVJlc29sdmFibGUgdGhyb3VnaCBgTGF6eS5hbnkoeyBwcm9kdWNlOiByZXNvdXJjZS5yZWYgfSlgLlxuICAgKi9cbiAgcHVibGljIGdldCByZWYoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gVG9rZW4uYXNTdHJpbmcoUm9zUmVmZXJlbmNlLmZvcih0aGlzLCBcIlJlZlwiKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbm90VG9vTG9uZyh4OiBzdHJpbmcpIHtcbiAgaWYgKHgubGVuZ3RoIDwgMTAwKSB7XG4gICAgcmV0dXJuIHg7XG4gIH1cbiAgcmV0dXJuIHguc3Vic3RyKDAsIDQ3KSArIFwiLi4uXCIgKyB4LnN1YnN0cih4Lmxlbmd0aCAtIDQ3KTtcbn1cblxuaW1wb3J0IHsgUm9zUmVmZXJlbmNlIH0gZnJvbSBcIi4vcHJpdmF0ZS9yb3MtcmVmZXJlbmNlXCI7XG5pbXBvcnQgeyBTdGFjayB9IGZyb20gXCIuL3N0YWNrXCI7XG4iXX0=