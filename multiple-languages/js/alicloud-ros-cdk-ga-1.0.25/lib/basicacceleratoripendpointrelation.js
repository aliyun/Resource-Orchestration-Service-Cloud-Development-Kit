"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicAcceleratorIpEndpointRelation = exports.BasicAcceleratorIpEndpointRelationProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ga_generated_1 = require("./ga.generated");
Object.defineProperty(exports, "BasicAcceleratorIpEndpointRelationProperty", { enumerable: true, get: function () { return ga_generated_1.RosBasicAcceleratorIpEndpointRelation; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::GA::BasicAcceleratorIpEndpointRelation`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBasicAcceleratorIpEndpointRelation`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicacceleratoripendpointrelation
 */
class BasicAcceleratorIpEndpointRelation extends ros.Resource {
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
        const rosBasicAcceleratorIpEndpointRelation = new ga_generated_1.RosBasicAcceleratorIpEndpointRelation(this, id, {
            accelerateIpId: props.accelerateIpId,
            endpointId: props.endpointId,
            acceleratorId: props.acceleratorId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosBasicAcceleratorIpEndpointRelation;
        this.attrAccelerateIpId = rosBasicAcceleratorIpEndpointRelation.attrAccelerateIpId;
        this.attrAcceleratorId = rosBasicAcceleratorIpEndpointRelation.attrAcceleratorId;
        this.attrEndpointId = rosBasicAcceleratorIpEndpointRelation.attrEndpointId;
    }
}
exports.BasicAcceleratorIpEndpointRelation = BasicAcceleratorIpEndpointRelation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzaWNhY2NlbGVyYXRvcmlwZW5kcG9pbnRyZWxhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJhc2ljYWNjZWxlcmF0b3JpcGVuZHBvaW50cmVsYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLGlEQUF1RTtBQUVyQiwySEFGekMsb0RBQXFDLE9BRThDO0FBd0I1Rjs7OztHQUlHO0FBQ0gsTUFBYSxrQ0FBbUMsU0FBUSxHQUFHLENBQUMsUUFBUTtJQXFCaEU7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBOEMsRUFBRSxtQ0FBMkMsSUFBSTtRQUN6SSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBRXpFLE1BQU0scUNBQXFDLEdBQUcsSUFBSSxvREFBcUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQy9GLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztZQUNwQyxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhO1NBQ3JDLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcscUNBQXFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLHFDQUFxQyxDQUFDLGtCQUFrQixDQUFDO1FBQ25GLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxxQ0FBcUMsQ0FBQyxpQkFBaUIsQ0FBQztRQUNqRixJQUFJLENBQUMsY0FBYyxHQUFHLHFDQUFxQyxDQUFDLGNBQWMsQ0FBQztJQUMvRSxDQUFDO0NBQ0o7QUEzQ0QsZ0ZBMkNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zQmFzaWNBY2NlbGVyYXRvcklwRW5kcG9pbnRSZWxhdGlvbiB9IGZyb20gJy4vZ2EuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zQmFzaWNBY2NlbGVyYXRvcklwRW5kcG9pbnRSZWxhdGlvbiBhcyBCYXNpY0FjY2VsZXJhdG9ySXBFbmRwb2ludFJlbGF0aW9uUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBCYXNpY0FjY2VsZXJhdG9ySXBFbmRwb2ludFJlbGF0aW9uYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWdhLWJhc2ljYWNjZWxlcmF0b3JpcGVuZHBvaW50cmVsYXRpb25cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBCYXNpY0FjY2VsZXJhdG9ySXBFbmRwb2ludFJlbGF0aW9uUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYWNjZWxlcmF0ZUlwSWQ6IFRoZSBJRCBvZiB0aGUgYWNjZWxlcmF0ZWQgSVAgYWRkcmVzcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBhY2NlbGVyYXRlSXBJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYWNjZWxlcmF0b3JJZDogVGhlIElEIG9mIHRoZSBiYXNpYyBHQSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBhY2NlbGVyYXRvcklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBlbmRwb2ludElkOiBUaGUgSUQgb2YgdGhlIGVuZHBvaW50LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVuZHBvaW50SWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGVuY2Fwc3VsYXRlcyBhbmQgZXh0ZW5kcyB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6R0E6OkJhc2ljQWNjZWxlcmF0b3JJcEVuZHBvaW50UmVsYXRpb25gLlxuICogQE5vdGUgVGhpcyBjbGFzcyBtYXkgaGF2ZSBzb21lIG5ldyBmdW5jdGlvbnMgdG8gZmFjaWxpdGF0ZSBkZXZlbG9wbWVudCwgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgY2xhc3MgaW5zdGVhZCBvZiBgUm9zQmFzaWNBY2NlbGVyYXRvcklwRW5kcG9pbnRSZWxhdGlvbmBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWdhLWJhc2ljYWNjZWxlcmF0b3JpcGVuZHBvaW50cmVsYXRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEJhc2ljQWNjZWxlcmF0b3JJcEVuZHBvaW50UmVsYXRpb24gZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuICAgIHByb3RlY3RlZCBzY29wZTogcm9zLkNvbnN0cnVjdDtcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgcHJvcHM6IEJhc2ljQWNjZWxlcmF0b3JJcEVuZHBvaW50UmVsYXRpb25Qcm9wcztcbiAgICBwcm90ZWN0ZWQgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQWNjZWxlcmF0ZUlwSWQ6IFRoZSBJRCBvZiB0aGUgYWNjZWxlcmF0ZWQgSVAgYWRkcmVzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFjY2VsZXJhdGVJcElkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQWNjZWxlcmF0b3JJZDogVGhlIElEIG9mIHRoZSBiYXNpYyBHQSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFjY2VsZXJhdG9ySWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBFbmRwb2ludElkOiBUaGUgSUQgb2YgdGhlIGVuZHBvaW50LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRW5kcG9pbnRJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IEJhc2ljQWNjZWxlcmF0b3JJcEVuZHBvaW50UmVsYXRpb25Qcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuXG4gICAgICAgIGNvbnN0IHJvc0Jhc2ljQWNjZWxlcmF0b3JJcEVuZHBvaW50UmVsYXRpb24gPSBuZXcgUm9zQmFzaWNBY2NlbGVyYXRvcklwRW5kcG9pbnRSZWxhdGlvbih0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGFjY2VsZXJhdGVJcElkOiBwcm9wcy5hY2NlbGVyYXRlSXBJZCxcbiAgICAgICAgICAgIGVuZHBvaW50SWQ6IHByb3BzLmVuZHBvaW50SWQsXG4gICAgICAgICAgICBhY2NlbGVyYXRvcklkOiBwcm9wcy5hY2NlbGVyYXRvcklkLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0Jhc2ljQWNjZWxlcmF0b3JJcEVuZHBvaW50UmVsYXRpb247XG4gICAgICAgIHRoaXMuYXR0ckFjY2VsZXJhdGVJcElkID0gcm9zQmFzaWNBY2NlbGVyYXRvcklwRW5kcG9pbnRSZWxhdGlvbi5hdHRyQWNjZWxlcmF0ZUlwSWQ7XG4gICAgICAgIHRoaXMuYXR0ckFjY2VsZXJhdG9ySWQgPSByb3NCYXNpY0FjY2VsZXJhdG9ySXBFbmRwb2ludFJlbGF0aW9uLmF0dHJBY2NlbGVyYXRvcklkO1xuICAgICAgICB0aGlzLmF0dHJFbmRwb2ludElkID0gcm9zQmFzaWNBY2NlbGVyYXRvcklwRW5kcG9pbnRSZWxhdGlvbi5hdHRyRW5kcG9pbnRJZDtcbiAgICB9XG59XG4iXX0=