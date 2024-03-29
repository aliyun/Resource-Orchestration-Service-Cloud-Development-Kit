"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CenBandwidthLimit = exports.CenBandwidthLimitProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const cen_generated_1 = require("./cen.generated");
Object.defineProperty(exports, "CenBandwidthLimitProperty", { enumerable: true, get: function () { return cen_generated_1.RosCenBandwidthLimit; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CEN::CenBandwidthLimit`, which is used to configure the cross-region interconnection bandwidth in a bandwidth plan.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCenBandwidthLimit`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenbandwidthlimit
 */
class CenBandwidthLimit extends ros.Resource {
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
        const rosCenBandwidthLimit = new cen_generated_1.RosCenBandwidthLimit(this, id, {
            oppositeRegionId: props.oppositeRegionId,
            cenId: props.cenId,
            bandwidthLimit: props.bandwidthLimit,
            localRegionId: props.localRegionId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCenBandwidthLimit;
    }
}
exports.CenBandwidthLimit = CenBandwidthLimit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VuYmFuZHdpZHRobGltaXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZW5iYW5kd2lkdGhsaW1pdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQXVEO0FBRXRCLDBHQUZ4QixvQ0FBb0IsT0FFNkI7QUE2QjFEOzs7O0dBSUc7QUFDSCxNQUFhLGlCQUFrQixTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBTS9DOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQTZCLEVBQUUsbUNBQTJDLElBQUk7UUFDeEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUV6RSxNQUFNLG9CQUFvQixHQUFHLElBQUksb0NBQW9CLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUM3RCxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCO1lBQ3hDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztZQUNsQixjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7WUFDcEMsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhO1NBQ3JDLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQW9CLENBQUM7SUFDekMsQ0FBQztDQUNKO0FBMUJELDhDQTBCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0NlbkJhbmR3aWR0aExpbWl0IH0gZnJvbSAnLi9jZW4uZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zQ2VuQmFuZHdpZHRoTGltaXQgYXMgQ2VuQmFuZHdpZHRoTGltaXRQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYENlbkJhbmR3aWR0aExpbWl0YC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWNlbi1jZW5iYW5kd2lkdGhsaW1pdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIENlbkJhbmR3aWR0aExpbWl0UHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYmFuZHdpZHRoTGltaXQ6IFRoZSBiYW5kd2lkdGggY29uZmlndXJlZCBmb3IgdGhlIGludGVyY29ubmVjdGVkIHJlZ2lvbnMgY29tbXVuaWNhdGlvbi4gTWluaW1hbCB2YWx1ZTogMVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGJhbmR3aWR0aExpbWl0OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjZW5JZDogVGhlIElEIG9mIHRoZSBDRU4gaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2VuSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGxvY2FsUmVnaW9uSWQ6IFRoZSBJRCBvZiB0aGUgbG9jYWwgcmVnaW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGxvY2FsUmVnaW9uSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG9wcG9zaXRlUmVnaW9uSWQ6IFRoZSBJRCBvZiB0aGUgb3RoZXIgaW50ZXJjb25uZWN0ZWQgcmVnaW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG9wcG9zaXRlUmVnaW9uSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGVuY2Fwc3VsYXRlcyBhbmQgZXh0ZW5kcyB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6Q0VOOjpDZW5CYW5kd2lkdGhMaW1pdGAsIHdoaWNoIGlzIHVzZWQgdG8gY29uZmlndXJlIHRoZSBjcm9zcy1yZWdpb24gaW50ZXJjb25uZWN0aW9uIGJhbmR3aWR0aCBpbiBhIGJhbmR3aWR0aCBwbGFuLlxuICogQE5vdGUgVGhpcyBjbGFzcyBtYXkgaGF2ZSBzb21lIG5ldyBmdW5jdGlvbnMgdG8gZmFjaWxpdGF0ZSBkZXZlbG9wbWVudCwgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgY2xhc3MgaW5zdGVhZCBvZiBgUm9zQ2VuQmFuZHdpZHRoTGltaXRgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1jZW4tY2VuYmFuZHdpZHRobGltaXRcbiAqL1xuZXhwb3J0IGNsYXNzIENlbkJhbmR3aWR0aExpbWl0IGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBDZW5CYW5kd2lkdGhMaW1pdFByb3BzO1xuICAgIHByb3RlY3RlZCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBDZW5CYW5kd2lkdGhMaW1pdFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG5cbiAgICAgICAgY29uc3Qgcm9zQ2VuQmFuZHdpZHRoTGltaXQgPSBuZXcgUm9zQ2VuQmFuZHdpZHRoTGltaXQodGhpcywgaWQsICB7XG4gICAgICAgICAgICBvcHBvc2l0ZVJlZ2lvbklkOiBwcm9wcy5vcHBvc2l0ZVJlZ2lvbklkLFxuICAgICAgICAgICAgY2VuSWQ6IHByb3BzLmNlbklkLFxuICAgICAgICAgICAgYmFuZHdpZHRoTGltaXQ6IHByb3BzLmJhbmR3aWR0aExpbWl0LFxuICAgICAgICAgICAgbG9jYWxSZWdpb25JZDogcHJvcHMubG9jYWxSZWdpb25JZCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NDZW5CYW5kd2lkdGhMaW1pdDtcbiAgICB9XG59XG4iXX0=