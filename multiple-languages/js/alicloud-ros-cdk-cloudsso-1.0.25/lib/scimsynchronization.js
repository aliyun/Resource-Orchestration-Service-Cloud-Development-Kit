"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SCIMSynchronization = exports.SCIMSynchronizationProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const cloudsso_generated_1 = require("./cloudsso.generated");
Object.defineProperty(exports, "SCIMSynchronizationProperty", { enumerable: true, get: function () { return cloudsso_generated_1.RosSCIMSynchronization; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CloudSSO::SCIMSynchronization`, which is used to enable or disable System for Cross-domain Identity Management (SCIM) synchronization.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSCIMSynchronization`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-scimsynchronization
 */
class SCIMSynchronization extends ros.Resource {
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        const rosSCIMSynchronization = new cloudsso_generated_1.RosSCIMSynchronization(this, id, {
            directoryId: props.directoryId,
            scimSynchronizationStatus: props.scimSynchronizationStatus === undefined || props.scimSynchronizationStatus === null ? 'Enabled' : props.scimSynchronizationStatus,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSCIMSynchronization;
    }
}
exports.SCIMSynchronization = SCIMSynchronization;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NpbXN5bmNocm9uaXphdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNjaW1zeW5jaHJvbml6YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLDZEQUE4RDtBQUUzQiw0R0FGMUIsMkNBQXNCLE9BRStCO0FBc0I5RDs7OztHQUlHO0FBQ0gsTUFBYSxtQkFBb0IsU0FBUSxHQUFHLENBQUMsUUFBUTtJQU1qRDs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUErQixFQUFFLG1DQUEyQyxJQUFJO1FBQzFILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFFekUsTUFBTSxzQkFBc0IsR0FBRyxJQUFJLDJDQUFzQixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDakUsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLHlCQUF5QixFQUFFLEtBQUssQ0FBQyx5QkFBeUIsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLHlCQUF5QixLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMseUJBQXlCO1NBQ3JLLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsc0JBQXNCLENBQUM7SUFDM0MsQ0FBQztDQUNKO0FBeEJELGtEQXdCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc1NDSU1TeW5jaHJvbml6YXRpb24gfSBmcm9tICcuL2Nsb3Vkc3NvLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc1NDSU1TeW5jaHJvbml6YXRpb24gYXMgU0NJTVN5bmNocm9uaXphdGlvblByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgU0NJTVN5bmNocm9uaXphdGlvbmAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1jbG91ZHNzby1zY2ltc3luY2hyb25pemF0aW9uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU0NJTVN5bmNocm9uaXphdGlvblByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRpcmVjdG9yeUlkOiBUaGUgSUQgb2YgdGhlIGRpcmVjdG9yeS5cbiAgICAgKi9cbiAgICByZWFkb25seSBkaXJlY3RvcnlJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc2NpbVN5bmNocm9uaXphdGlvblN0YXR1czogVGhlIHN0YXR1cyBvZiBTQ0lNIHN5bmNocm9uaXphdGlvbi4gVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gRW5hYmxlZFxuICAgICAqIC0gRGlzYWJsZWRcbiAgICAgKiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyBFbmFibGVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNjaW1TeW5jaHJvbml6YXRpb25TdGF0dXM/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBlbmNhcHN1bGF0ZXMgYW5kIGV4dGVuZHMgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OkNsb3VkU1NPOjpTQ0lNU3luY2hyb25pemF0aW9uYCwgd2hpY2ggaXMgdXNlZCB0byBlbmFibGUgb3IgZGlzYWJsZSBTeXN0ZW0gZm9yIENyb3NzLWRvbWFpbiBJZGVudGl0eSBNYW5hZ2VtZW50IChTQ0lNKSBzeW5jaHJvbml6YXRpb24uXG4gKiBATm90ZSBUaGlzIGNsYXNzIG1heSBoYXZlIHNvbWUgbmV3IGZ1bmN0aW9ucyB0byBmYWNpbGl0YXRlIGRldmVsb3BtZW50LCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBjbGFzcyBpbnN0ZWFkIG9mIGBSb3NTQ0lNU3luY2hyb25pemF0aW9uYGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tY2xvdWRzc28tc2NpbXN5bmNocm9uaXphdGlvblxuICovXG5leHBvcnQgY2xhc3MgU0NJTVN5bmNocm9uaXphdGlvbiBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG4gICAgcHJvdGVjdGVkIHNjb3BlOiByb3MuQ29uc3RydWN0O1xuICAgIHByb3RlY3RlZCBpZDogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBwcm9wczogU0NJTVN5bmNocm9uaXphdGlvblByb3BzO1xuICAgIHByb3RlY3RlZCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBTQ0lNU3luY2hyb25pemF0aW9uUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcblxuICAgICAgICBjb25zdCByb3NTQ0lNU3luY2hyb25pemF0aW9uID0gbmV3IFJvc1NDSU1TeW5jaHJvbml6YXRpb24odGhpcywgaWQsICB7XG4gICAgICAgICAgICBkaXJlY3RvcnlJZDogcHJvcHMuZGlyZWN0b3J5SWQsXG4gICAgICAgICAgICBzY2ltU3luY2hyb25pemF0aW9uU3RhdHVzOiBwcm9wcy5zY2ltU3luY2hyb25pemF0aW9uU3RhdHVzID09PSB1bmRlZmluZWQgfHwgcHJvcHMuc2NpbVN5bmNocm9uaXphdGlvblN0YXR1cyA9PT0gbnVsbCA/ICdFbmFibGVkJyA6IHByb3BzLnNjaW1TeW5jaHJvbml6YXRpb25TdGF0dXMsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zU0NJTVN5bmNocm9uaXphdGlvbjtcbiAgICB9XG59XG4iXX0=