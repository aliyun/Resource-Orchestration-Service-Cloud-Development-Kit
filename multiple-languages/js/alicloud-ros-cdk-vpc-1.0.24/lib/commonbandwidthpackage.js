"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonBandwidthPackage = exports.CommonBandwidthPackageProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const vpc_generated_1 = require("./vpc.generated");
Object.defineProperty(exports, "CommonBandwidthPackageProperty", { enumerable: true, get: function () { return vpc_generated_1.RosCommonBandwidthPackage; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::CommonBandwidthPackage`, which is used to create an elastic IP address (EIP) bandwidth plan.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCommonBandwidthPackage`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-commonbandwidthpackage
 */
class CommonBandwidthPackage extends ros.Resource {
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
        const rosCommonBandwidthPackage = new vpc_generated_1.RosCommonBandwidthPackage(this, id, {
            description: props.description,
            resourceGroupId: props.resourceGroupId,
            zone: props.zone,
            isp: props.isp === undefined || props.isp === null ? 'BGP' : props.isp,
            bandwidth: props.bandwidth,
            ratio: props.ratio === undefined || props.ratio === null ? 100 : props.ratio,
            deletionProtection: props.deletionProtection === undefined || props.deletionProtection === null ? false : props.deletionProtection,
            tags: props.tags,
            internetChargeType: props.internetChargeType,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCommonBandwidthPackage;
        this.attrBandwidthPackageId = rosCommonBandwidthPackage.attrBandwidthPackageId;
    }
}
exports.CommonBandwidthPackage = CommonBandwidthPackage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uYmFuZHdpZHRocGFja2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbW1vbmJhbmR3aWR0aHBhY2thZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUE0RDtBQUV0QiwrR0FGN0IseUNBQXlCLE9BRWtDO0FBb0VwRTs7OztHQUlHO0FBQ0gsTUFBYSxzQkFBdUIsU0FBUSxHQUFHLENBQUMsUUFBUTtJQVdwRDs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFrQyxFQUFFLG1DQUEyQyxJQUFJO1FBQzdILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFFekUsTUFBTSx5QkFBeUIsR0FBRyxJQUFJLHlDQUF5QixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDdkUsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7WUFDaEIsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHO1lBQ3RFLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUs7WUFDNUUsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsa0JBQWtCLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxrQkFBa0I7WUFDbEksSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1lBQ2hCLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxrQkFBa0I7WUFDNUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1NBQ25CLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcseUJBQXlCLENBQUM7UUFDMUMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLHlCQUF5QixDQUFDLHNCQUFzQixDQUFDO0lBQ25GLENBQUM7Q0FDSjtBQXRDRCx3REFzQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NDb21tb25CYW5kd2lkdGhQYWNrYWdlIH0gZnJvbSAnLi92cGMuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zQ29tbW9uQmFuZHdpZHRoUGFja2FnZSBhcyBDb21tb25CYW5kd2lkdGhQYWNrYWdlUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBDb21tb25CYW5kd2lkdGhQYWNrYWdlYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXZwYy1jb21tb25iYW5kd2lkdGhwYWNrYWdlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ29tbW9uQmFuZHdpZHRoUGFja2FnZVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGJhbmR3aWR0aDogVGhlIHBlYWsgYmFuZHdpZHRoIG9mIHRoZSBJbnRlcm5ldCBTaGFyZWQgQmFuZHdpZHRoIGluc3RhbmNlLiBVbml0OiBNYml0XFwvcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBiYW5kd2lkdGg6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRlbGV0aW9uUHJvdGVjdGlvbjogV2hldGhlciB0byBlbmFibGUgZGVsZXRpb24gcHJvdGVjdGlvbi5cbiAgICAgKiBEZWZhdWx0IHRvIEZhbHNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlbGV0aW9uUHJvdGVjdGlvbj86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBJbnRlcm5ldCBTaGFyZWQgQmFuZHdpZHRoIGluc3RhbmNlLlxuICAgICAqIFRoZSBkZXNjcmlwdGlvbiBtdXN0IGJlIDIgdG8gMjU2IGNoYXJhY3RlcnMgaW4gbGVuZ3RoLiBJdCBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIsXG4gICAgICogYW5kIGNhbm5vdCBzdGFydCB3aXRoIGh0dHA6XFwvXFwvIG9yIGh0dHBzOlxcL1xcLy5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGludGVybmV0Q2hhcmdlVHlwZTogVGhlIGJpbGxpbmcgbW9kZWwgb2YgdGhlIEludGVybmV0IFNoYXJlZCBCYW5kd2lkdGggaW5zdGFuY2UuIEFsbG93ZWQgdmFsdWVzOlxuICAgICAqIFBheUJ5QmFuZHdpZHRoIChkZWZhdWx0KTogQmlsbGVkIGJ5IGJhbmR3aWR0aC5cbiAgICAgKiBQYXlCeTk1OiBDaGFyZ2VkIGF0IEVuaGFuY2VkIDk1LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGludGVybmV0Q2hhcmdlVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGlzcDogTGluZSB0eXBlIG9mIEVJUCwgdmFsdWU6IEJHUCAobXVsdGktbGluZSkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaXNwPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbmFtZTogVGhlIG5hbWUgb2YgdGhlIEludGVybmV0IFNoYXJlZCBCYW5kd2lkdGggaW5zdGFuY2UuXG4gICAgICogVGhlIG5hbWUgbXVzdCBiZSAyIHRvIDEyOCBjaGFyYWN0ZXJzIGluIGxlbmd0aCBhbmQgY2FuIGNvbnRhaW4gbGV0dGVycywgbnVtYmVycywgcGVyaW9kc1xuICAgICAqICguKSwgdW5kZXJzY29yZXMgKF8pLCBhbmQgaHlwaGVucyAoLSkuIFRoZSBuYW1lIG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlciwgYW5kIGNhbm5vdFxuICAgICAqIHN0YXJ0IHdpdGggaHR0cDpcXC9cXC8gb3IgaHR0cHM6XFwvXFwvLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByYXRpbzogVGhlIG1pbmltdW0gY29uc3VtcHRpb24gcmF0aW8gb2YgdGhlIEludGVybmV0IFNoYXJlZCBCYW5kd2lkdGggaW5zdGFuY2UuIERlZmF1bHQgdG8gMTAwLlxuICAgICAqIE5vdGUgVGhpcyBwYXJhbWV0ZXIgaXMgb25seSBzdXBwb3J0ZWQgb24gdGhlIENoaW5hIHNpdGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmF0aW8/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByZXNvdXJjZUdyb3VwSWQ6IFRoZSBJRCBvZiB0aGUgcmVzb3VyY2UgZ3JvdXAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzb3VyY2VHcm91cElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdGFnczogVGFncyB0byBhdHRhY2ggdG8gaW5zdGFuY2UuIE1heCBzdXBwb3J0IDIwIHRhZ3MgdG8gYWRkIGR1cmluZyBjcmVhdGUgaW5zdGFuY2UuIEVhY2ggdGFnIHdpdGggdHdvIHByb3BlcnRpZXMgS2V5IGFuZCBWYWx1ZSwgYW5kIEtleSBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YWdzPzogUm9zQ29tbW9uQmFuZHdpZHRoUGFja2FnZS5UYWdzUHJvcGVydHlbXTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHpvbmU6IFpvbmUgSWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgem9uZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGVuY2Fwc3VsYXRlcyBhbmQgZXh0ZW5kcyB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6VlBDOjpDb21tb25CYW5kd2lkdGhQYWNrYWdlYCwgd2hpY2ggaXMgdXNlZCB0byBjcmVhdGUgYW4gZWxhc3RpYyBJUCBhZGRyZXNzIChFSVApIGJhbmR3aWR0aCBwbGFuLlxuICogQE5vdGUgVGhpcyBjbGFzcyBtYXkgaGF2ZSBzb21lIG5ldyBmdW5jdGlvbnMgdG8gZmFjaWxpdGF0ZSBkZXZlbG9wbWVudCwgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgY2xhc3MgaW5zdGVhZCBvZiBgUm9zQ29tbW9uQmFuZHdpZHRoUGFja2FnZWBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXZwYy1jb21tb25iYW5kd2lkdGhwYWNrYWdlXG4gKi9cbmV4cG9ydCBjbGFzcyBDb21tb25CYW5kd2lkdGhQYWNrYWdlIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBDb21tb25CYW5kd2lkdGhQYWNrYWdlUHJvcHM7XG4gICAgcHJvdGVjdGVkIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEJhbmR3aWR0aFBhY2thZ2VJZDogVGhlIElEIG9mIHRoZSBJbnRlcm5ldCBTaGFyZWQgQmFuZHdpZHRoIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQmFuZHdpZHRoUGFja2FnZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogQ29tbW9uQmFuZHdpZHRoUGFja2FnZVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG5cbiAgICAgICAgY29uc3Qgcm9zQ29tbW9uQmFuZHdpZHRoUGFja2FnZSA9IG5ldyBSb3NDb21tb25CYW5kd2lkdGhQYWNrYWdlKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IHByb3BzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgcmVzb3VyY2VHcm91cElkOiBwcm9wcy5yZXNvdXJjZUdyb3VwSWQsXG4gICAgICAgICAgICB6b25lOiBwcm9wcy56b25lLFxuICAgICAgICAgICAgaXNwOiBwcm9wcy5pc3AgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5pc3AgPT09IG51bGwgPyAnQkdQJyA6IHByb3BzLmlzcCxcbiAgICAgICAgICAgIGJhbmR3aWR0aDogcHJvcHMuYmFuZHdpZHRoLFxuICAgICAgICAgICAgcmF0aW86IHByb3BzLnJhdGlvID09PSB1bmRlZmluZWQgfHwgcHJvcHMucmF0aW8gPT09IG51bGwgPyAxMDAgOiBwcm9wcy5yYXRpbyxcbiAgICAgICAgICAgIGRlbGV0aW9uUHJvdGVjdGlvbjogcHJvcHMuZGVsZXRpb25Qcm90ZWN0aW9uID09PSB1bmRlZmluZWQgfHwgcHJvcHMuZGVsZXRpb25Qcm90ZWN0aW9uID09PSBudWxsID8gZmFsc2UgOiBwcm9wcy5kZWxldGlvblByb3RlY3Rpb24sXG4gICAgICAgICAgICB0YWdzOiBwcm9wcy50YWdzLFxuICAgICAgICAgICAgaW50ZXJuZXRDaGFyZ2VUeXBlOiBwcm9wcy5pbnRlcm5ldENoYXJnZVR5cGUsXG4gICAgICAgICAgICBuYW1lOiBwcm9wcy5uYW1lLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0NvbW1vbkJhbmR3aWR0aFBhY2thZ2U7XG4gICAgICAgIHRoaXMuYXR0ckJhbmR3aWR0aFBhY2thZ2VJZCA9IHJvc0NvbW1vbkJhbmR3aWR0aFBhY2thZ2UuYXR0ckJhbmR3aWR0aFBhY2thZ2VJZDtcbiAgICB9XG59XG4iXX0=