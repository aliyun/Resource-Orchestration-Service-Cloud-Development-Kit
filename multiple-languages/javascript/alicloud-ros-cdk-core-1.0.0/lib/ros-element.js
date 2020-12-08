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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9zLWVsZW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyb3MtZWxlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4REFBOEQ7QUFDOUQseURBQStDO0FBQy9DLGlDQUE4QjtBQUM5QixtQ0FBZ0M7QUFFaEMsTUFBTSxrQkFBa0IsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7QUFFakU7O0dBRUc7QUFDSCxNQUFzQixVQUFXLFNBQVEsNEJBQVM7SUFtQ2hEOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBZ0IsRUFBRSxFQUFVO1FBQ3RDLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUVqRSxJQUFJLENBQUMsS0FBSyxHQUFHLGFBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFJLENBQUMsV0FBVyxDQUMvQixFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxFQUM3QztZQUNFLFdBQVcsRUFBRSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZO1NBQ3ZELENBQ0YsQ0FBQztRQUNGLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUNuQixRQUFRLENBQUMseUJBQXlCLENBQUMsVUFBVSxFQUM3QyxJQUFJLENBQUMsU0FBUyxFQUNkLElBQUksQ0FBQyxXQUFXLENBQ2pCLENBQUM7SUFDSixDQUFDO0lBNUREOzs7Ozs7OztPQVFHO0lBQ0ksTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFNO1FBQy9CLE9BQU8sa0JBQWtCLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFtREQ7OztPQUdHO0lBQ0ksaUJBQWlCLENBQUMsWUFBb0I7UUFDM0MsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFlBQVksQ0FBQztJQUN6QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQVcsYUFBYTtRQUN0QixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ25DLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxVQUFVLENBQ2pFLENBQUMsS0FBSyxDQUFDO1FBQ1QsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFFRCxPQUFPLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRS9CLFNBQVMsZ0JBQWdCLENBQUMsS0FBZTtZQUN2QyxNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7WUFDbEMsT0FBTyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxZQUFZLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDbkUsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQ2Q7WUFDRCxxRUFBcUU7WUFDckUsT0FBTyxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDOUMsQ0FBQztRQUVELFNBQVMsWUFBWSxDQUFDLEdBQVc7WUFDL0IsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLEtBQUssSUFBSSxDQUFDO1FBQ25ELENBQUM7SUFDSCxDQUFDO0lBcUJEOzs7O09BSUc7SUFDSyxtQkFBbUI7UUFDekIsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDM0IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7U0FDaEM7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEM7SUFDSCxDQUFDO0NBQ0Y7QUFuSUQsZ0NBbUlDO0FBRUQ7Ozs7Ozs7OztHQVNHO0FBQ0gsTUFBc0IsYUFBYyxTQUFRLFVBQVU7SUFDcEQ7Ozs7O09BS0c7SUFDSCxJQUFXLEdBQUc7UUFDWixPQUFPLGFBQUssQ0FBQyxRQUFRLENBQUMsNEJBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztDQUNGO0FBVkQsc0NBVUM7QUFFRCxTQUFTLFVBQVUsQ0FBQyxDQUFTO0lBQzNCLElBQUksQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7UUFDbEIsT0FBTyxDQUFDLENBQUM7S0FDVjtJQUNELE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQztBQUMzRCxDQUFDO0FBRUQsMkRBQXVEO0FBQ3ZELG1DQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGN4c2NoZW1hIGZyb20gXCJAYWxpY2xvdWQvcm9zLWNkay1hc3NlbWJseS1zY2hlbWFcIjtcbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gXCIuL2NvbnN0cnVjdC1jb21wYXRcIjtcbmltcG9ydCB7IExhenkgfSBmcm9tIFwiLi9sYXp5XCI7XG5pbXBvcnQgeyBUb2tlbiB9IGZyb20gXCIuL3Rva2VuXCI7XG5cbmNvbnN0IFJPU19FTEVNRU5UX1NZTUJPTCA9IFN5bWJvbC5mb3IoXCJyb3MtY2RrLWNvcmUuUm9zRWxlbWVudFwiKTtcblxuLyoqXG4gKiBBbiBlbGVtZW50IG9mIGEgc3RhY2suXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSb3NFbGVtZW50IGV4dGVuZHMgQ29uc3RydWN0IHtcbiAgLyoqXG4gICAqIFJldHVybnMgYHRydWVgIGlmIGEgY29uc3RydWN0IGlzIGEgc3RhY2sgZWxlbWVudCAoaS5lLiBwYXJ0IG9mIHRoZVxuICAgKiBzeW50aGVzaXplZCB0ZW1wbGF0ZSkuXG4gICAqXG4gICAqIFVzZXMgZHVjay10eXBpbmcgaW5zdGVhZCBvZiBgaW5zdGFuY2VvZmAgdG8gYWxsb3cgc3RhY2sgZWxlbWVudHMgZnJvbSBkaWZmZXJlbnRcbiAgICogdmVyc2lvbnMgb2YgdGhpcyBsaWJyYXJ5IHRvIGJlIGluY2x1ZGVkIGluIHRoZSBzYW1lIHN0YWNrLlxuICAgKlxuICAgKiBAcmV0dXJucyBUaGUgY29uc3RydWN0IGFzIGEgc3RhY2sgZWxlbWVudCBvciB1bmRlZmluZWQgaWYgaXQgaXMgbm90IGEgc3RhY2sgZWxlbWVudC5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgaXNSb3NFbGVtZW50KHg6IGFueSk6IHggaXMgUm9zRWxlbWVudCB7XG4gICAgcmV0dXJuIFJPU19FTEVNRU5UX1NZTUJPTCBpbiB4O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBsb2dpY2FsIElEIGZvciB0aGlzIHN0YWNrIGVsZW1lbnQuIFRoZSBsb2dpY2FsIElEIG9mIHRoZSBlbGVtZW50XG4gICAqIGlzIGNhbGN1bGF0ZWQgZnJvbSB0aGUgcGF0aCBvZiB0aGUgcmVzb3VyY2Ugbm9kZSBpbiB0aGUgY29uc3RydWN0IHRyZWUuXG4gICAqXG4gICAqIFRvIG92ZXJyaWRlIHRoaXMgdmFsdWUsIHVzZSBgb3ZlcnJpZGVMb2dpY2FsSWQobmV3TG9naWNhbElkKWAuXG4gICAqXG4gICAqIEByZXR1cm5zIHRoZSBsb2dpY2FsIElEIGFzIGEgc3RyaW5naWZpZWQgdG9rZW4uIFRoaXMgdmFsdWUgd2lsbCBvbmx5IGdldFxuICAgKiByZXNvbHZlZCBkdXJpbmcgc3ludGhlc2lzLlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGxvZ2ljYWxJZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgc3RhY2sgaW4gd2hpY2ggdGhpcyBlbGVtZW50IGlzIGRlZmluZWQuIFJvc0VsZW1lbnRzIG11c3QgYmUgZGVmaW5lZCB3aXRoaW4gYSBzdGFjayBzY29wZSAoZGlyZWN0bHkgb3IgaW5kaXJlY3RseSkuXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgc3RhY2s6IFN0YWNrO1xuXG4gIC8qKlxuICAgKiBBbiBleHBsaWNpdCBsb2dpY2FsIElEIHByb3ZpZGVkIGJ5IGBvdmVycmlkZUxvZ2ljYWxJZGAuXG4gICAqL1xuICBwcml2YXRlIF9sb2dpY2FsSWRPdmVycmlkZT86IHN0cmluZztcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBlbnRpdHkgYW5kIGJpbmRzIGl0IHRvIGEgdHJlZS5cbiAgICogTm90ZSB0aGF0IHRoZSByb290IG9mIHRoZSB0cmVlIG11c3QgYmUgYSBTdGFjayBvYmplY3QgKG5vdCBqdXN0IGFueSBSb290KS5cbiAgICpcbiAgICogQHBhcmFtIHNjb3BlIFRoZSBwYXJlbnQgY29uc3RydWN0XG4gICAqIEBwYXJhbSBwcm9wcyBDb25zdHJ1Y3QgcHJvcGVydGllc1xuICAgKi9cbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgUk9TX0VMRU1FTlRfU1lNQk9MLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG4gICAgdGhpcy5zdGFjayA9IFN0YWNrLm9mKHRoaXMpO1xuXG4gICAgdGhpcy5sb2dpY2FsSWQgPSBMYXp5LnN0cmluZ1ZhbHVlKFxuICAgICAgeyBwcm9kdWNlOiAoKSA9PiB0aGlzLnN5bnRoZXNpemVMb2dpY2FsSWQoKSB9LFxuICAgICAge1xuICAgICAgICBkaXNwbGF5SGludDogYCR7bm90VG9vTG9uZyh0aGlzLm5vZGUucGF0aCl9LkxvZ2ljYWxJRGAsXG4gICAgICB9XG4gICAgKTtcbiAgICB0aGlzLmxvZ2ljYWxJZCA9IGlkO1xuICAgIHRoaXMubm9kZS5hZGRNZXRhZGF0YShcbiAgICAgIGN4c2NoZW1hLkFydGlmYWN0TWV0YWRhdGFFbnRyeVR5cGUuTE9HSUNBTF9JRCxcbiAgICAgIHRoaXMubG9naWNhbElkLFxuICAgICAgdGhpcy5jb25zdHJ1Y3RvclxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogT3ZlcnJpZGVzIHRoZSBhdXRvLWdlbmVyYXRlZCBsb2dpY2FsIElEIHdpdGggYSBzcGVjaWZpYyBJRC5cbiAgICogQHBhcmFtIG5ld0xvZ2ljYWxJZCBUaGUgbmV3IGxvZ2ljYWwgSUQgdG8gdXNlIGZvciB0aGlzIHN0YWNrIGVsZW1lbnQuXG4gICAqL1xuICBwdWJsaWMgb3ZlcnJpZGVMb2dpY2FsSWQobmV3TG9naWNhbElkOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9sb2dpY2FsSWRPdmVycmlkZSA9IG5ld0xvZ2ljYWxJZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyB0aGUgc3RhY2sgdHJhY2Ugb2YgdGhlIHBvaW50IHdoZXJlIHRoaXMgUmVzb3VyY2Ugd2FzIGNyZWF0ZWQgZnJvbSwgc291cmNlZFxuICAgKiAgICAgIGZyb20gdGhlICttZXRhZGF0YSsgZW50cnkgdHlwZWQgK2FsaXl1bjpyb3M6bG9naWNhbElkKywgYW5kIHdpdGggdGhlIGJvdHRvbS1tb3N0XG4gICAqICAgICAgbm9kZSAraW50ZXJuYWwrIGVudHJpZXMgZmlsdGVyZWQuXG4gICAqL1xuICBwdWJsaWMgZ2V0IGNyZWF0aW9uU3RhY2soKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHRyYWNlID0gdGhpcy5ub2RlLm1ldGFkYXRhLmZpbmQoXG4gICAgICAobWQpID0+IG1kLnR5cGUgPT09IGN4c2NoZW1hLkFydGlmYWN0TWV0YWRhdGFFbnRyeVR5cGUuTE9HSUNBTF9JRFxuICAgICkhLnRyYWNlO1xuICAgIGlmICghdHJhY2UpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmlsdGVyU3RhY2tUcmFjZSh0cmFjZSk7XG5cbiAgICBmdW5jdGlvbiBmaWx0ZXJTdGFja1RyYWNlKHN0YWNrOiBzdHJpbmdbXSk6IHN0cmluZ1tdIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IEFycmF5Lm9mKC4uLnN0YWNrKTtcbiAgICAgIHdoaWxlIChyZXN1bHQubGVuZ3RoID4gMCAmJiBzaG91bGRGaWx0ZXIocmVzdWx0W3Jlc3VsdC5sZW5ndGggLSAxXSkpIHtcbiAgICAgICAgcmVzdWx0LnBvcCgpO1xuICAgICAgfVxuICAgICAgLy8gSXQncyB3ZWlyZCBpZiB3ZSBmaWx0ZXJlZCBldmVyeXRoaW5nLCBzbyByZXR1cm4gdGhlIHdob2xlIHN0YWNrLi4uXG4gICAgICByZXR1cm4gcmVzdWx0Lmxlbmd0aCA9PT0gMCA/IHN0YWNrIDogcmVzdWx0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3VsZEZpbHRlcihzdHI6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIHN0ci5tYXRjaCgvW14oXStcXChpbnRlcm5hbFxcLy4qLykgIT09IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHRlbXBsYXRlICdzbmlwcGV0JyBmb3IgdGhpcyBlbnRpdHkuIFRoZSBzbmlwcGV0IHdpbGwgb25seSBiZSBtZXJnZWRcbiAgICogYXQgdGhlIHJvb3QgbGV2ZWwgdG8gZW5zdXJlIHRoZXJlIGFyZSBubyBpZGVudGl0eSBjb25mbGljdHMuXG4gICAqXG4gICAqIEZvciBleGFtcGxlLCBhIFJlc291cmNlIGNsYXNzIHdpbGwgcmV0dXJuIHNvbWV0aGluZyBsaWtlOlxuICAgKiB7XG4gICAqICAgUmVzb3VyY2VzOiB7XG4gICAqICAgICBbdGhpcy5sb2dpY2FsSWRdOiB7XG4gICAqICAgICAgIFR5cGU6IHRoaXMucmVzb3VyY2VUeXBlLFxuICAgKiAgICAgICBQcm9wZXJ0aWVzOiB0aGlzLnByb3BzLFxuICAgKiAgICAgICBDb25kaXRpb246IHRoaXMuY29uZGl0aW9uXG4gICAqICAgICB9XG4gICAqICAgfVxuICAgKiB9XG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgcHVibGljIGFic3RyYWN0IF90b1Jvc1RlbXBsYXRlKCk6IG9iamVjdDtcblxuICAvKipcbiAgICogQ2FsbGVkIGR1cmluZyBzeW50aGVzaXplIHRvIHJlbmRlciB0aGUgbG9naWNhbCBJRCBvZiB0aGlzIGVsZW1lbnQuIElmXG4gICAqIGBvdmVycmlkZUxvZ2ljYWxJZGAgd2FzIGl0IHdpbGwgYmUgdXNlZCwgb3RoZXJ3aXNlLCB3ZSB3aWxsIGFsbG9jYXRlIHRoZVxuICAgKiBsb2dpY2FsIElEIHRocm91Z2ggdGhlIHN0YWNrLlxuICAgKi9cbiAgcHJpdmF0ZSBzeW50aGVzaXplTG9naWNhbElkKCkge1xuICAgIGlmICh0aGlzLl9sb2dpY2FsSWRPdmVycmlkZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2xvZ2ljYWxJZE92ZXJyaWRlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGFjay5nZXRMb2dpY2FsSWQodGhpcyk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgcmVmZXJlbmNlYWJsZSB0ZW1wbGF0ZSBjb25zdHJ1Y3RzIHdoaWNoIGFyZSBub3QgUmVzb3VyY2VzXG4gKlxuICogVGhlc2UgY29uc3RydWN0cyBhcmUgdGhpbmdzIGxpa2UgQ29uZGl0aW9ucyBhbmQgUGFyYW1ldGVycywgY2FuIGJlXG4gKiByZWZlcmVuY2VkIGJ5IHRha2luZyB0aGUgYC5yZWZgIGF0dHJpYnV0ZS5cbiAqXG4gKiBSZXNvdXJjZSBjb25zdHJ1Y3RzIGRvIG5vdCBpbmhlcml0IGZyb20gUm9zUmVmRWxlbWVudCBiZWNhdXNlIHRoZXkgaGF2ZSB0aGVpclxuICogb3duLCBtb3JlIHNwZWNpZmljIHR5cGVzIHJldHVybmVkIGZyb20gdGhlIC5yZWYgYXR0cmlidXRlLiBBbHNvLCBzb21lXG4gKiByZXNvdXJjZXMgYXJlbid0IHJlZmVyZW5jZWFibGUgYXQgYWxsIChzdWNoIGFzIEJ1Y2tldFBvbGljaWVzIG9yIEdhdGV3YXlBdHRhY2htZW50cykuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSb3NSZWZFbGVtZW50IGV4dGVuZHMgUm9zRWxlbWVudCB7XG4gIC8qKlxuICAgKiBSZXR1cm4gYSBzdHJpbmcgdGhhdCB3aWxsIGJlIHJlc29sdmVkIHRvIGEgUm9zVGVtcGxhdGUgYHsgUmVmIH1gIGZvciB0aGlzIGVsZW1lbnQuXG4gICAqXG4gICAqIElmLCBieSBhbnkgY2hhbmNlLCB0aGUgaW50cmluc2ljIHJlZmVyZW5jZSBvZiBhIHJlc291cmNlIGlzIG5vdCBhIHN0cmluZywgeW91IGNvdWxkXG4gICAqIGNvZXJjZSBpdCB0byBhbiBJUmVzb2x2YWJsZSB0aHJvdWdoIGBMYXp5LmFueSh7IHByb2R1Y2U6IHJlc291cmNlLnJlZiB9KWAuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHJlZigpOiBzdHJpbmcge1xuICAgIHJldHVybiBUb2tlbi5hc1N0cmluZyhSb3NSZWZlcmVuY2UuZm9yKHRoaXMsIFwiUmVmXCIpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBub3RUb29Mb25nKHg6IHN0cmluZykge1xuICBpZiAoeC5sZW5ndGggPCAxMDApIHtcbiAgICByZXR1cm4geDtcbiAgfVxuICByZXR1cm4geC5zdWJzdHIoMCwgNDcpICsgXCIuLi5cIiArIHguc3Vic3RyKHgubGVuZ3RoIC0gNDcpO1xufVxuXG5pbXBvcnQgeyBSb3NSZWZlcmVuY2UgfSBmcm9tIFwiLi9wcml2YXRlL3Jvcy1yZWZlcmVuY2VcIjtcbmltcG9ydCB7IFN0YWNrIH0gZnJvbSBcIi4vc3RhY2tcIjtcbiJdfQ==