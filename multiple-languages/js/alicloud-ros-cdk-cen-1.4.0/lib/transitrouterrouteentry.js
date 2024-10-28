"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransitRouterRouteEntry = exports.TransitRouterRouteEntryProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const cen_generated_1 = require("./cen.generated");
Object.defineProperty(exports, "TransitRouterRouteEntryProperty", { enumerable: true, get: function () { return cen_generated_1.RosTransitRouterRouteEntry; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CEN::TransitRouterRouteEntry`, which is used to add routes to a route table of an Enterprise Edition transit router.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTransitRouterRouteEntry`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterrouteentry
 */
class TransitRouterRouteEntry extends ros.Resource {
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
        const rosTransitRouterRouteEntry = new cen_generated_1.RosTransitRouterRouteEntry(this, id, {
            transitRouterRouteTableId: props.transitRouterRouteTableId,
            transitRouterRouteEntryDestinationCidrBlock: props.transitRouterRouteEntryDestinationCidrBlock,
            transitRouterRouteEntryNextHopId: props.transitRouterRouteEntryNextHopId,
            transitRouterRouteEntryDescription: props.transitRouterRouteEntryDescription,
            transitRouterRouteEntryNextHopType: props.transitRouterRouteEntryNextHopType,
            transitRouterRouteEntryName: props.transitRouterRouteEntryName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTransitRouterRouteEntry;
        this.attrTransitRouterRouteEntryDescription = rosTransitRouterRouteEntry.attrTransitRouterRouteEntryDescription;
        this.attrTransitRouterRouteEntryDestinationCidrBlock = rosTransitRouterRouteEntry.attrTransitRouterRouteEntryDestinationCidrBlock;
        this.attrTransitRouterRouteEntryId = rosTransitRouterRouteEntry.attrTransitRouterRouteEntryId;
        this.attrTransitRouterRouteEntryName = rosTransitRouterRouteEntry.attrTransitRouterRouteEntryName;
        this.attrTransitRouterRouteEntryNextHopId = rosTransitRouterRouteEntry.attrTransitRouterRouteEntryNextHopId;
        this.attrTransitRouterRouteEntryNextHopType = rosTransitRouterRouteEntry.attrTransitRouterRouteEntryNextHopType;
        this.attrTransitRouterRouteEntryType = rosTransitRouterRouteEntry.attrTransitRouterRouteEntryType;
        this.attrTransitRouterRouteTableId = rosTransitRouterRouteEntry.attrTransitRouterRouteTableId;
    }
}
exports.TransitRouterRouteEntry = TransitRouterRouteEntry;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNpdHJvdXRlcnJvdXRlZW50cnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0cmFuc2l0cm91dGVycm91dGVlbnRyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQTZEO0FBRXRCLGdIQUY5QiwwQ0FBMEIsT0FFbUM7QUF1Q3RFOzs7O0dBSUc7QUFDSCxNQUFhLHVCQUF3QixTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBOENyRDs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFtQyxFQUFFLG1DQUEyQyxJQUFJO1FBQzlILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFFekUsTUFBTSwwQkFBMEIsR0FBRyxJQUFJLDBDQUEwQixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDekUseUJBQXlCLEVBQUUsS0FBSyxDQUFDLHlCQUF5QjtZQUMxRCwyQ0FBMkMsRUFBRSxLQUFLLENBQUMsMkNBQTJDO1lBQzlGLGdDQUFnQyxFQUFFLEtBQUssQ0FBQyxnQ0FBZ0M7WUFDeEUsa0NBQWtDLEVBQUUsS0FBSyxDQUFDLGtDQUFrQztZQUM1RSxrQ0FBa0MsRUFBRSxLQUFLLENBQUMsa0NBQWtDO1lBQzVFLDJCQUEyQixFQUFFLEtBQUssQ0FBQywyQkFBMkI7U0FDakUsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRywwQkFBMEIsQ0FBQztRQUMzQyxJQUFJLENBQUMsc0NBQXNDLEdBQUcsMEJBQTBCLENBQUMsc0NBQXNDLENBQUM7UUFDaEgsSUFBSSxDQUFDLCtDQUErQyxHQUFHLDBCQUEwQixDQUFDLCtDQUErQyxDQUFDO1FBQ2xJLElBQUksQ0FBQyw2QkFBNkIsR0FBRywwQkFBMEIsQ0FBQyw2QkFBNkIsQ0FBQztRQUM5RixJQUFJLENBQUMsK0JBQStCLEdBQUcsMEJBQTBCLENBQUMsK0JBQStCLENBQUM7UUFDbEcsSUFBSSxDQUFDLG9DQUFvQyxHQUFHLDBCQUEwQixDQUFDLG9DQUFvQyxDQUFDO1FBQzVHLElBQUksQ0FBQyxzQ0FBc0MsR0FBRywwQkFBMEIsQ0FBQyxzQ0FBc0MsQ0FBQztRQUNoSCxJQUFJLENBQUMsK0JBQStCLEdBQUcsMEJBQTBCLENBQUMsK0JBQStCLENBQUM7UUFDbEcsSUFBSSxDQUFDLDZCQUE2QixHQUFHLDBCQUEwQixDQUFDLDZCQUE2QixDQUFDO0lBQ2xHLENBQUM7Q0FDSjtBQTVFRCwwREE0RUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NUcmFuc2l0Um91dGVyUm91dGVFbnRyeSB9IGZyb20gJy4vY2VuLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc1RyYW5zaXRSb3V0ZXJSb3V0ZUVudHJ5IGFzIFRyYW5zaXRSb3V0ZXJSb3V0ZUVudHJ5UHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBUcmFuc2l0Um91dGVyUm91dGVFbnRyeWAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1jZW4tdHJhbnNpdHJvdXRlcnJvdXRlZW50cnlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUcmFuc2l0Um91dGVyUm91dGVFbnRyeVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRyYW5zaXRSb3V0ZXJSb3V0ZUVudHJ5RGVzdGluYXRpb25DaWRyQmxvY2s6IFRyYW5zaXRSb3V0ZXJSb3V0ZUVudHJ5RGVzdGluYXRpb25DaWRyQmxvY2tcbiAgICAgKi9cbiAgICByZWFkb25seSB0cmFuc2l0Um91dGVyUm91dGVFbnRyeURlc3RpbmF0aW9uQ2lkckJsb2NrOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0cmFuc2l0Um91dGVyUm91dGVFbnRyeU5leHRIb3BUeXBlOiBUcmFuc2l0Um91dGVyUm91dGVFbnRyeU5leHRIb3BUeXBlXG4gICAgICovXG4gICAgcmVhZG9ubHkgdHJhbnNpdFJvdXRlclJvdXRlRW50cnlOZXh0SG9wVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdHJhbnNpdFJvdXRlclJvdXRlVGFibGVJZDogVHJhbnNpdFJvdXRlclJvdXRlVGFibGVJZFxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRyYW5zaXRSb3V0ZXJSb3V0ZUVudHJ5RGVzY3JpcHRpb246IFRyYW5zaXRSb3V0ZXJSb3V0ZUVudHJ5RGVzY3JpcHRpb25cbiAgICAgKi9cbiAgICByZWFkb25seSB0cmFuc2l0Um91dGVyUm91dGVFbnRyeURlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdHJhbnNpdFJvdXRlclJvdXRlRW50cnlOYW1lOiBUcmFuc2l0Um91dGVyUm91dGVFbnRyeU5hbWVcbiAgICAgKi9cbiAgICByZWFkb25seSB0cmFuc2l0Um91dGVyUm91dGVFbnRyeU5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0cmFuc2l0Um91dGVyUm91dGVFbnRyeU5leHRIb3BJZDogVHJhbnNpdFJvdXRlclJvdXRlRW50cnlOZXh0SG9wSWRcbiAgICAgKi9cbiAgICByZWFkb25seSB0cmFuc2l0Um91dGVyUm91dGVFbnRyeU5leHRIb3BJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGVuY2Fwc3VsYXRlcyBhbmQgZXh0ZW5kcyB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6Q0VOOjpUcmFuc2l0Um91dGVyUm91dGVFbnRyeWAsIHdoaWNoIGlzIHVzZWQgdG8gYWRkIHJvdXRlcyB0byBhIHJvdXRlIHRhYmxlIG9mIGFuIEVudGVycHJpc2UgRWRpdGlvbiB0cmFuc2l0IHJvdXRlci5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgbWF5IGhhdmUgc29tZSBuZXcgZnVuY3Rpb25zIHRvIGZhY2lsaXRhdGUgZGV2ZWxvcG1lbnQsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGlzIGNsYXNzIGluc3RlYWQgb2YgYFJvc1RyYW5zaXRSb3V0ZXJSb3V0ZUVudHJ5YGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tY2VuLXRyYW5zaXRyb3V0ZXJyb3V0ZWVudHJ5XG4gKi9cbmV4cG9ydCBjbGFzcyBUcmFuc2l0Um91dGVyUm91dGVFbnRyeSBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG4gICAgcHJvdGVjdGVkIHNjb3BlOiByb3MuQ29uc3RydWN0O1xuICAgIHByb3RlY3RlZCBpZDogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBwcm9wczogVHJhbnNpdFJvdXRlclJvdXRlRW50cnlQcm9wcztcbiAgICBwcm90ZWN0ZWQgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgVHJhbnNpdFJvdXRlclJvdXRlRW50cnlEZXNjcmlwdGlvbjogVHJhbnNpdFJvdXRlclJvdXRlRW50cnlEZXNjcmlwdGlvblxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVHJhbnNpdFJvdXRlclJvdXRlRW50cnlEZXNjcmlwdGlvbjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFRyYW5zaXRSb3V0ZXJSb3V0ZUVudHJ5RGVzdGluYXRpb25DaWRyQmxvY2s6IFRyYW5zaXRSb3V0ZXJSb3V0ZUVudHJ5RGVzdGluYXRpb25DaWRyQmxvY2tcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clRyYW5zaXRSb3V0ZXJSb3V0ZUVudHJ5RGVzdGluYXRpb25DaWRyQmxvY2s6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBUcmFuc2l0Um91dGVyUm91dGVFbnRyeUlkOiBUaGUgZmlyc3QgSUQgb2YgdGhlIHJlc291cmNlXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJUcmFuc2l0Um91dGVyUm91dGVFbnRyeUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgVHJhbnNpdFJvdXRlclJvdXRlRW50cnlOYW1lOiBUcmFuc2l0Um91dGVyUm91dGVFbnRyeU5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clRyYW5zaXRSb3V0ZXJSb3V0ZUVudHJ5TmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFRyYW5zaXRSb3V0ZXJSb3V0ZUVudHJ5TmV4dEhvcElkOiBUcmFuc2l0Um91dGVyUm91dGVFbnRyeU5leHRIb3BJZFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVHJhbnNpdFJvdXRlclJvdXRlRW50cnlOZXh0SG9wSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBUcmFuc2l0Um91dGVyUm91dGVFbnRyeU5leHRIb3BUeXBlOiBUcmFuc2l0Um91dGVyUm91dGVFbnRyeU5leHRIb3BUeXBlXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJUcmFuc2l0Um91dGVyUm91dGVFbnRyeU5leHRIb3BUeXBlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgVHJhbnNpdFJvdXRlclJvdXRlRW50cnlUeXBlOiBUcmFuc2l0Um91dGVyUm91dGVFbnRyeVR5cGVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clRyYW5zaXRSb3V0ZXJSb3V0ZUVudHJ5VHlwZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlSWQ6IFRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlSWRcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBUcmFuc2l0Um91dGVyUm91dGVFbnRyeVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG5cbiAgICAgICAgY29uc3Qgcm9zVHJhbnNpdFJvdXRlclJvdXRlRW50cnkgPSBuZXcgUm9zVHJhbnNpdFJvdXRlclJvdXRlRW50cnkodGhpcywgaWQsICB7XG4gICAgICAgICAgICB0cmFuc2l0Um91dGVyUm91dGVUYWJsZUlkOiBwcm9wcy50cmFuc2l0Um91dGVyUm91dGVUYWJsZUlkLFxuICAgICAgICAgICAgdHJhbnNpdFJvdXRlclJvdXRlRW50cnlEZXN0aW5hdGlvbkNpZHJCbG9jazogcHJvcHMudHJhbnNpdFJvdXRlclJvdXRlRW50cnlEZXN0aW5hdGlvbkNpZHJCbG9jayxcbiAgICAgICAgICAgIHRyYW5zaXRSb3V0ZXJSb3V0ZUVudHJ5TmV4dEhvcElkOiBwcm9wcy50cmFuc2l0Um91dGVyUm91dGVFbnRyeU5leHRIb3BJZCxcbiAgICAgICAgICAgIHRyYW5zaXRSb3V0ZXJSb3V0ZUVudHJ5RGVzY3JpcHRpb246IHByb3BzLnRyYW5zaXRSb3V0ZXJSb3V0ZUVudHJ5RGVzY3JpcHRpb24sXG4gICAgICAgICAgICB0cmFuc2l0Um91dGVyUm91dGVFbnRyeU5leHRIb3BUeXBlOiBwcm9wcy50cmFuc2l0Um91dGVyUm91dGVFbnRyeU5leHRIb3BUeXBlLFxuICAgICAgICAgICAgdHJhbnNpdFJvdXRlclJvdXRlRW50cnlOYW1lOiBwcm9wcy50cmFuc2l0Um91dGVyUm91dGVFbnRyeU5hbWUsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zVHJhbnNpdFJvdXRlclJvdXRlRW50cnk7XG4gICAgICAgIHRoaXMuYXR0clRyYW5zaXRSb3V0ZXJSb3V0ZUVudHJ5RGVzY3JpcHRpb24gPSByb3NUcmFuc2l0Um91dGVyUm91dGVFbnRyeS5hdHRyVHJhbnNpdFJvdXRlclJvdXRlRW50cnlEZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5hdHRyVHJhbnNpdFJvdXRlclJvdXRlRW50cnlEZXN0aW5hdGlvbkNpZHJCbG9jayA9IHJvc1RyYW5zaXRSb3V0ZXJSb3V0ZUVudHJ5LmF0dHJUcmFuc2l0Um91dGVyUm91dGVFbnRyeURlc3RpbmF0aW9uQ2lkckJsb2NrO1xuICAgICAgICB0aGlzLmF0dHJUcmFuc2l0Um91dGVyUm91dGVFbnRyeUlkID0gcm9zVHJhbnNpdFJvdXRlclJvdXRlRW50cnkuYXR0clRyYW5zaXRSb3V0ZXJSb3V0ZUVudHJ5SWQ7XG4gICAgICAgIHRoaXMuYXR0clRyYW5zaXRSb3V0ZXJSb3V0ZUVudHJ5TmFtZSA9IHJvc1RyYW5zaXRSb3V0ZXJSb3V0ZUVudHJ5LmF0dHJUcmFuc2l0Um91dGVyUm91dGVFbnRyeU5hbWU7XG4gICAgICAgIHRoaXMuYXR0clRyYW5zaXRSb3V0ZXJSb3V0ZUVudHJ5TmV4dEhvcElkID0gcm9zVHJhbnNpdFJvdXRlclJvdXRlRW50cnkuYXR0clRyYW5zaXRSb3V0ZXJSb3V0ZUVudHJ5TmV4dEhvcElkO1xuICAgICAgICB0aGlzLmF0dHJUcmFuc2l0Um91dGVyUm91dGVFbnRyeU5leHRIb3BUeXBlID0gcm9zVHJhbnNpdFJvdXRlclJvdXRlRW50cnkuYXR0clRyYW5zaXRSb3V0ZXJSb3V0ZUVudHJ5TmV4dEhvcFR5cGU7XG4gICAgICAgIHRoaXMuYXR0clRyYW5zaXRSb3V0ZXJSb3V0ZUVudHJ5VHlwZSA9IHJvc1RyYW5zaXRSb3V0ZXJSb3V0ZUVudHJ5LmF0dHJUcmFuc2l0Um91dGVyUm91dGVFbnRyeVR5cGU7XG4gICAgICAgIHRoaXMuYXR0clRyYW5zaXRSb3V0ZXJSb3V0ZVRhYmxlSWQgPSByb3NUcmFuc2l0Um91dGVyUm91dGVFbnRyeS5hdHRyVHJhbnNpdFJvdXRlclJvdXRlVGFibGVJZDtcbiAgICB9XG59XG4iXX0=