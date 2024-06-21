"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VpcEndpointService = exports.VpcEndpointServiceProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const privatelink_generated_1 = require("./privatelink.generated");
Object.defineProperty(exports, "VpcEndpointServiceProperty", { enumerable: true, get: function () { return privatelink_generated_1.RosVpcEndpointService; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::PrivateLink::VpcEndpointService`, which is used to create an endpoint service.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVpcEndpointService`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-privatelink-vpcendpointservice
 */
class VpcEndpointService extends ros.Resource {
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        const rosVpcEndpointService = new privatelink_generated_1.RosVpcEndpointService(this, id, {
            payer: props.payer,
            user: props.user,
            deletionForce: props.deletionForce,
            resourceGroupId: props.resourceGroupId,
            serviceDescription: props.serviceDescription,
            resource: props.resource,
            connectBandwidth: props.connectBandwidth,
            serviceResourceType: props.serviceResourceType,
            zoneAffinityEnabled: props.zoneAffinityEnabled,
            tags: props.tags,
            autoAcceptEnabled: props.autoAcceptEnabled,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosVpcEndpointService;
        this.attrMaxBandwidth = rosVpcEndpointService.attrMaxBandwidth;
        this.attrMinBandwidth = rosVpcEndpointService.attrMinBandwidth;
        this.attrServiceDescription = rosVpcEndpointService.attrServiceDescription;
        this.attrServiceDomain = rosVpcEndpointService.attrServiceDomain;
        this.attrServiceId = rosVpcEndpointService.attrServiceId;
        this.attrServiceName = rosVpcEndpointService.attrServiceName;
    }
}
exports.VpcEndpointService = VpcEndpointService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnBjZW5kcG9pbnRzZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidnBjZW5kcG9pbnRzZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtRUFBZ0U7QUFFOUIsMkdBRnpCLDZDQUFxQixPQUU4QjtBQXdFNUQ7Ozs7R0FJRztBQUNILE1BQWEsa0JBQW1CLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFvQ2hEOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLFFBQWlDLEVBQUUsRUFBRSxtQ0FBMkMsSUFBSTtRQUM5SCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBRXpFLE1BQU0scUJBQXFCLEdBQUcsSUFBSSw2Q0FBcUIsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQy9ELEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztZQUNsQixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7WUFDaEIsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhO1lBQ2xDLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsa0JBQWtCO1lBQzVDLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN4QixnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCO1lBQ3hDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxtQkFBbUI7WUFDOUMsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLG1CQUFtQjtZQUM5QyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7WUFDaEIsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQjtTQUM3QyxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLHFCQUFxQixDQUFDO1FBQ3RDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxxQkFBcUIsQ0FBQyxnQkFBZ0IsQ0FBQztRQUMvRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcscUJBQXFCLENBQUMsZ0JBQWdCLENBQUM7UUFDL0QsSUFBSSxDQUFDLHNCQUFzQixHQUFHLHFCQUFxQixDQUFDLHNCQUFzQixDQUFDO1FBQzNFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxxQkFBcUIsQ0FBQyxpQkFBaUIsQ0FBQztRQUNqRSxJQUFJLENBQUMsYUFBYSxHQUFHLHFCQUFxQixDQUFDLGFBQWEsQ0FBQztRQUN6RCxJQUFJLENBQUMsZUFBZSxHQUFHLHFCQUFxQixDQUFDLGVBQWUsQ0FBQztJQUNqRSxDQUFDO0NBQ0o7QUFyRUQsZ0RBcUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zVnBjRW5kcG9pbnRTZXJ2aWNlIH0gZnJvbSAnLi9wcml2YXRlbGluay5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NWcGNFbmRwb2ludFNlcnZpY2UgYXMgVnBjRW5kcG9pbnRTZXJ2aWNlUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBWcGNFbmRwb2ludFNlcnZpY2VgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tcHJpdmF0ZWxpbmstdnBjZW5kcG9pbnRzZXJ2aWNlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVnBjRW5kcG9pbnRTZXJ2aWNlUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYXV0b0FjY2VwdEVuYWJsZWQ6IFNwZWNpZmllcyB3aGV0aGVyIHRvIGF1dG9tYXRpY2FsbHkgYWNjZXB0IGVuZHBvaW50IGNvbm5lY3Rpb24gcmVxdWVzdHMuIFZhbGlkIHZhbHVlczpcbiAgICAgKiB0cnVlOiBhdXRvbWF0aWNhbGx5IGFjY2VwdHMgZW5kcG9pbnQgY29ubmVjdGlvbiByZXF1ZXN0cy5cbiAgICAgKiBmYWxzZTogZG9lcyBub3QgYXV0b21hdGljYWxseSBhY2NlcHQgZW5kcG9pbnQgY29ubmVjdGlvbiByZXF1ZXN0cy5cbiAgICAgKi9cbiAgICByZWFkb25seSBhdXRvQWNjZXB0RW5hYmxlZD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjb25uZWN0QmFuZHdpZHRoOiBUaGUgZGVmYXVsdCBtYXhpbXVtIGJhbmR3aWR0aCBvZiB0aGUgZW5kcG9pbnQgY29ubmVjdGlvbi4gVmFsaWQgdmFsdWVzOiAxMDAgdG8gMTAyNC4gVW5pdDogTWJpdFxcL3MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY29ubmVjdEJhbmR3aWR0aD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRlbGV0aW9uRm9yY2U6IFNwZWNpZmllcyB3aGV0aGVyIHRvIGRlbGV0ZSB0aGUgZW5kcG9pbnQgc2VydmljZSBldmVuIGlmIGl0IGhhcyBlbmRwb2ludCBjb25uZWN0aW9ucy5cbiAgICAgKiAtIFRydWVcbiAgICAgKiAtIEZhbHNlIChkZWZhdWx0KVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlbGV0aW9uRm9yY2U/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcGF5ZXI6IFRoZSBwYXllciBvZiB0aGUgZW5kcG9pbnQgc2VydmljZS4gVmFsaWQgdmFsdWVzOiBcbiAgICAgKiBFbmRwb2ludDogdGhlIHNlcnZpY2UgY29uc3VtZXIuIFxuICAgICAqIEVuZHBvaW50U2VydmljZTogdGhlIHNlcnZpY2UgcHJvdmlkZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGF5ZXI/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByZXNvdXJjZTpcbiAgICAgKi9cbiAgICByZWFkb25seSByZXNvdXJjZT86IEFycmF5PFJvc1ZwY0VuZHBvaW50U2VydmljZS5SZXNvdXJjZVByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJlc291cmNlR3JvdXBJZDogVGhlIElEIG9mIHRoZSByZXNvdXJjZSBncm91cC5cbiAgICAgKi9cbiAgICByZWFkb25seSByZXNvdXJjZUdyb3VwSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzZXJ2aWNlRGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBmb3IgdGhlIGVuZHBvaW50IHNlcnZpY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2VydmljZURlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc2VydmljZVJlc291cmNlVHlwZTogU2VydmljZSByZXNvdXJjZSB0eXBlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlcnZpY2VSZXNvdXJjZVR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0YWdzOiBUYWdzIHRvIGF0dGFjaCB0byBpbnN0YW5jZS4gTWF4IHN1cHBvcnQgMjAgdGFncyB0byBhZGQgZHVyaW5nIGNyZWF0ZSBpbnN0YW5jZS4gRWFjaCB0YWcgd2l0aCB0d28gcHJvcGVydGllcyBLZXkgYW5kIFZhbHVlLCBhbmQgS2V5IGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhZ3M/OiBSb3NWcGNFbmRwb2ludFNlcnZpY2UuVGFnc1Byb3BlcnR5W107XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB1c2VyOiBBY2NvdW50IElEcyB0byB0aGUgd2hpdGVsaXN0IG9mIGFuIGVuZHBvaW50IHNlcnZpY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdXNlcj86IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB6b25lQWZmaW5pdHlFbmFibGVkOiBTcGVjaWZpZXMgd2hldGhlciB0byByZXNvbHZlIGRvbWFpbiBuYW1lcyB0byBJUCBhZGRyZXNzZXMgaW4gdGhlIG5lYXJlc3Qgem9uZS5cbiAgICAgKiB0cnVlOiB5ZXMuIFxuICAgICAqIGZhbHNlIChkZWZhdWx0KTogbm9cbiAgICAgKi9cbiAgICByZWFkb25seSB6b25lQWZmaW5pdHlFbmFibGVkPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGVuY2Fwc3VsYXRlcyBhbmQgZXh0ZW5kcyB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6UHJpdmF0ZUxpbms6OlZwY0VuZHBvaW50U2VydmljZWAsIHdoaWNoIGlzIHVzZWQgdG8gY3JlYXRlIGFuIGVuZHBvaW50IHNlcnZpY2UuXG4gKiBATm90ZSBUaGlzIGNsYXNzIG1heSBoYXZlIHNvbWUgbmV3IGZ1bmN0aW9ucyB0byBmYWNpbGl0YXRlIGRldmVsb3BtZW50LCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBjbGFzcyBpbnN0ZWFkIG9mIGBSb3NWcGNFbmRwb2ludFNlcnZpY2VgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1wcml2YXRlbGluay12cGNlbmRwb2ludHNlcnZpY2VcbiAqL1xuZXhwb3J0IGNsYXNzIFZwY0VuZHBvaW50U2VydmljZSBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG4gICAgcHJvdGVjdGVkIHNjb3BlOiByb3MuQ29uc3RydWN0O1xuICAgIHByb3RlY3RlZCBpZDogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBwcm9wczogVnBjRW5kcG9pbnRTZXJ2aWNlUHJvcHM7XG4gICAgcHJvdGVjdGVkIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIE1heEJhbmR3aWR0aDogVGhlIG1heGltdW0gYmFuZHdpZHRoIG9mIHRoZSBlbmRwb2ludCBjb25uZWN0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTWF4QmFuZHdpZHRoOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgTWluQmFuZHdpZHRoOiBUaGUgbWluaW11bSBiYW5kd2lkdGggb2YgdGhlIGVuZHBvaW50IGNvbm5lY3Rpb24uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJNaW5CYW5kd2lkdGg6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBTZXJ2aWNlRGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgZW5kcG9pbnQgc2VydmljZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNlcnZpY2VEZXNjcmlwdGlvbjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFNlcnZpY2VEb21haW46IFRoZSBkb21haW4gbmFtZSBvZiB0aGUgZW5kcG9pbnQgc2VydmljZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNlcnZpY2VEb21haW46IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBTZXJ2aWNlSWQ6IFRoZSBJRCBvZiB0aGUgZW5kcG9pbnQgc2VydmljZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNlcnZpY2VJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFNlcnZpY2VOYW1lOiBUaGUgbmFtZSBvZiB0aGUgZW5kcG9pbnQgc2VydmljZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNlcnZpY2VOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogVnBjRW5kcG9pbnRTZXJ2aWNlUHJvcHMgPSB7fSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuXG4gICAgICAgIGNvbnN0IHJvc1ZwY0VuZHBvaW50U2VydmljZSA9IG5ldyBSb3NWcGNFbmRwb2ludFNlcnZpY2UodGhpcywgaWQsICB7XG4gICAgICAgICAgICBwYXllcjogcHJvcHMucGF5ZXIsXG4gICAgICAgICAgICB1c2VyOiBwcm9wcy51c2VyLFxuICAgICAgICAgICAgZGVsZXRpb25Gb3JjZTogcHJvcHMuZGVsZXRpb25Gb3JjZSxcbiAgICAgICAgICAgIHJlc291cmNlR3JvdXBJZDogcHJvcHMucmVzb3VyY2VHcm91cElkLFxuICAgICAgICAgICAgc2VydmljZURlc2NyaXB0aW9uOiBwcm9wcy5zZXJ2aWNlRGVzY3JpcHRpb24sXG4gICAgICAgICAgICByZXNvdXJjZTogcHJvcHMucmVzb3VyY2UsXG4gICAgICAgICAgICBjb25uZWN0QmFuZHdpZHRoOiBwcm9wcy5jb25uZWN0QmFuZHdpZHRoLFxuICAgICAgICAgICAgc2VydmljZVJlc291cmNlVHlwZTogcHJvcHMuc2VydmljZVJlc291cmNlVHlwZSxcbiAgICAgICAgICAgIHpvbmVBZmZpbml0eUVuYWJsZWQ6IHByb3BzLnpvbmVBZmZpbml0eUVuYWJsZWQsXG4gICAgICAgICAgICB0YWdzOiBwcm9wcy50YWdzLFxuICAgICAgICAgICAgYXV0b0FjY2VwdEVuYWJsZWQ6IHByb3BzLmF1dG9BY2NlcHRFbmFibGVkLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc1ZwY0VuZHBvaW50U2VydmljZTtcbiAgICAgICAgdGhpcy5hdHRyTWF4QmFuZHdpZHRoID0gcm9zVnBjRW5kcG9pbnRTZXJ2aWNlLmF0dHJNYXhCYW5kd2lkdGg7XG4gICAgICAgIHRoaXMuYXR0ck1pbkJhbmR3aWR0aCA9IHJvc1ZwY0VuZHBvaW50U2VydmljZS5hdHRyTWluQmFuZHdpZHRoO1xuICAgICAgICB0aGlzLmF0dHJTZXJ2aWNlRGVzY3JpcHRpb24gPSByb3NWcGNFbmRwb2ludFNlcnZpY2UuYXR0clNlcnZpY2VEZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5hdHRyU2VydmljZURvbWFpbiA9IHJvc1ZwY0VuZHBvaW50U2VydmljZS5hdHRyU2VydmljZURvbWFpbjtcbiAgICAgICAgdGhpcy5hdHRyU2VydmljZUlkID0gcm9zVnBjRW5kcG9pbnRTZXJ2aWNlLmF0dHJTZXJ2aWNlSWQ7XG4gICAgICAgIHRoaXMuYXR0clNlcnZpY2VOYW1lID0gcm9zVnBjRW5kcG9pbnRTZXJ2aWNlLmF0dHJTZXJ2aWNlTmFtZTtcbiAgICB9XG59XG4iXX0=