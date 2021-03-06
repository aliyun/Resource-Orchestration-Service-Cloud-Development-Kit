"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WafSwitch = exports.WafSwitchProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const waf_generated_1 = require("./waf.generated");
Object.defineProperty(exports, "WafSwitchProperty", { enumerable: true, get: function () { return waf_generated_1.RosWafSwitch; } });
/**
 * A ROS resource type:  `ALIYUN::WAF::WafSwitch`
 */
class WafSwitch extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Create a new `ALIYUN::WAF::WafSwitch`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosWafSwitch = new waf_generated_1.RosWafSwitch(this, id, {
            instanceId: props.instanceId,
            region: props.region,
            serviceOn: props.serviceOn,
            domain: props.domain,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosWafSwitch;
    }
}
exports.WafSwitch = WafSwitch;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Fmc3dpdGNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2Fmc3dpdGNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBK0M7QUFFdEIsa0dBRmhCLDRCQUFZLE9BRXFCO0FBaUMxQzs7R0FFRztBQUNILE1BQWEsU0FBVSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBRXZDOzs7T0FHRztJQUVIOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBcUIsRUFBRSxtQ0FBMkMsSUFBSTtRQUNoSCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sWUFBWSxHQUFHLElBQUksNEJBQVksQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQzdDLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1QixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07WUFDcEIsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtTQUN2QixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQztJQUNqQyxDQUFDO0NBQ0o7QUF6QkQsOEJBeUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zV2FmU3dpdGNoIH0gZnJvbSAnLi93YWYuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zV2FmU3dpdGNoIGFzIFdhZlN3aXRjaFByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpXQUY6OldhZlN3aXRjaGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBXYWZTd2l0Y2hQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkb21haW46IERvbWFpbiBuYW1lLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRvbWFpbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW5zdGFuY2VJZDogV0FGIGluc3RhbmNlIElELlxuICAgICAqIERlc2NyaXB0aW9uIEludGVyZmFjZSBZb3UgY2FuIHZpZXcgeW91ciBjdXJyZW50IFdBRiBpbnN0YW5jZSBJRCBieSBjYWxsaW5nIERlc2NyaWJlUGF5SW5mby5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzZXJ2aWNlT246IFdlYiBhdHRhY2sgcHJvdGVjdGlvbiBzd2l0Y2gsIHRoZSB2YWx1ZSBvZjpcbiAgICAgKiAwOiBjbG9zZWQuXG4gICAgICogMTogaW5kaWNhdGUgb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2VydmljZU9uOiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByZWdpb246IEV4YW1wbGVzIG9mIGFyZWFzIHdoZXJlIHRoZSBXQUYuIFZhbHVlOlxuICAgICAqIGNuOiBDaGluYSBtYWlubGFuZCAoZGVmYXVsdClcbiAgICAgKiBjbi1ob25na29uZzogQ2hpbmEgSG9uZ0tvbmcgYW5kIG90aGVyIG92ZXJzZWFzXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVnaW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpXQUY6OldhZlN3aXRjaGBcbiAqL1xuZXhwb3J0IGNsYXNzIFdhZlN3aXRjaCBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6V0FGOjpXYWZTd2l0Y2hgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFdhZlN3aXRjaFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc1dhZlN3aXRjaCA9IG5ldyBSb3NXYWZTd2l0Y2godGhpcywgaWQsICB7XG4gICAgICAgICAgICBpbnN0YW5jZUlkOiBwcm9wcy5pbnN0YW5jZUlkLFxuICAgICAgICAgICAgcmVnaW9uOiBwcm9wcy5yZWdpb24sXG4gICAgICAgICAgICBzZXJ2aWNlT246IHByb3BzLnNlcnZpY2VPbixcbiAgICAgICAgICAgIGRvbWFpbjogcHJvcHMuZG9tYWluLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc1dhZlN3aXRjaDtcbiAgICB9XG59XG4iXX0=