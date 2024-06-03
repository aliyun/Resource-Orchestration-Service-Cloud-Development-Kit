"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateConfiguration = exports.StateConfigurationProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const oos_generated_1 = require("./oos.generated");
Object.defineProperty(exports, "StateConfigurationProperty", { enumerable: true, get: function () { return oos_generated_1.RosStateConfiguration; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::OOS::StateConfiguration`, which is used to create a desired-state configuration.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosStateConfiguration`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-stateconfiguration
 */
class StateConfiguration extends ros.Resource {
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
        const rosStateConfiguration = new oos_generated_1.RosStateConfiguration(this, id, {
            configureMode: props.configureMode,
            scheduleExpression: props.scheduleExpression,
            scheduleType: props.scheduleType,
            description: props.description,
            parameters: props.parameters,
            resourceGroupId: props.resourceGroupId,
            templateName: props.templateName,
            templateVersion: props.templateVersion,
            targets: props.targets,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosStateConfiguration;
        this.attrStateConfigurationId = rosStateConfiguration.attrStateConfigurationId;
    }
}
exports.StateConfiguration = StateConfiguration;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGVjb25maWd1cmF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RhdGVjb25maWd1cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBd0Q7QUFFdEIsMkdBRnpCLHFDQUFxQixPQUU4QjtBQTJENUQ7Ozs7R0FJRztBQUNILE1BQWEsa0JBQW1CLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFXaEQ7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBOEIsRUFBRSxtQ0FBMkMsSUFBSTtRQUN6SCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBRXpFLE1BQU0scUJBQXFCLEdBQUcsSUFBSSxxQ0FBcUIsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQy9ELGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtZQUNsQyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsa0JBQWtCO1lBQzVDLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7U0FDbkIsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxxQkFBcUIsQ0FBQztRQUN0QyxJQUFJLENBQUMsd0JBQXdCLEdBQUcscUJBQXFCLENBQUMsd0JBQXdCLENBQUM7SUFDbkYsQ0FBQztDQUNKO0FBdENELGdEQXNDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc1N0YXRlQ29uZmlndXJhdGlvbiB9IGZyb20gJy4vb29zLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc1N0YXRlQ29uZmlndXJhdGlvbiBhcyBTdGF0ZUNvbmZpZ3VyYXRpb25Qcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFN0YXRlQ29uZmlndXJhdGlvbmAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1vb3Mtc3RhdGVjb25maWd1cmF0aW9uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGVDb25maWd1cmF0aW9uUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc2NoZWR1bGVFeHByZXNzaW9uOiBUaGUgc2NoZWR1bGUgZXhwcmVzc2lvbi4gVGhlIGludGVydmFsIGJldHdlZW4gdHdvIHNjaGVkdWxlcyBtdXN0IGJlIGEgbWluaW11bSBvZiAzMCBtaW51dGVzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNjaGVkdWxlRXhwcmVzc2lvbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc2NoZWR1bGVUeXBlOiBUaGUgc2NoZWR1bGUgdHlwZS4gU2V0IHRoZSB2YWx1ZSB0byByYXRlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNjaGVkdWxlVHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdGFyZ2V0czogVGhlIHJlc291cmNlcyB0byBiZSBxdWVyaWVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhcmdldHM6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRlbXBsYXRlTmFtZTogVGhlIG5hbWUgb2YgdGhlIHRlbXBsYXRlLiBUaGUgbmFtZSBtdXN0IGJlIDEgdG8gMjAwIGNoYXJhY3RlcnMgaW4gbGVuZ3RoIGFuZCBjYW4gY29udGFpbiBsZXR0ZXJzLCBkaWdpdHMsIGh5cGhlbnMgKC0pLCBhbmQgdW5kZXJzY29yZXMgKF8pLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRlbXBsYXRlTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY29uZmlndXJlTW9kZTogVGhlIGNvbmZpZ3VyYXRpb24gbW9kZS4gVmFsaWQgdmFsdWVzOiBBcHBseU9uY2U6IFRoZSBjb25maWd1cmF0aW9uIGlzIGFwcGxpZWQgb25seSBvbmNlLiBBZnRlciBhIGNvbmZpZ3VyYXRpb24gaXMgdXBkYXRlZCwgdGhlIG5ldyBjb25maWd1cmF0aW9uIGlzIGFwcGxpZWQuIEFwcGx5QW5kTW9uaXRvcjogVGhlIGNvbmZpZ3VyYXRpb24gaXMgYXBwbGllZCBvbmx5IG9uY2UuIEFmdGVyIHRoZSBjb25maWd1cmF0aW9uIGlzIGFwcGxpZWQsIHRoZSBzeXN0ZW0gb25seSBjaGVja3Mgd2hldGhlciB0aGUgY29uZmlndXJhdGlvbiBpcyBtaWdyYXRlZCBpbiB0aGUgZnV0dXJlLiBBcHBseUFuZEF1dG9Db3JyZWN0OiBUaGUgY29uZmlndXJhdGlvbiBpcyBhbHdheXMgYXBwbGllZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBjb25maWd1cmVNb2RlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgZGVzaXJlZC1zdGF0ZSBjb25maWd1cmF0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcGFyYW1ldGVyczogVGhlIHBhcmFtZXRlcnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGFyYW1ldGVycz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJlc291cmNlR3JvdXBJZDogVGhlIHJlc291cmNlIGdyb3VwIElELlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlc291cmNlR3JvdXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRhZ3M6IFRhZyB2YWx1ZSBhbmQgdGhlIGtleSBtYXBwaW5nLCB0aGUgbGFiZWwgb2YgdGhlIGtleSBudW1iZXIgY2FuIGJlIHVwIHRvIDIwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRhZ3M/OiB7IFtrZXk6IHN0cmluZ106IChhbnkpIH07XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0ZW1wbGF0ZVZlcnNpb246IFRoZSB2ZXJzaW9uIG51bWJlciBvZiB0aGUgdGVtcGxhdGUuIElmIHlvdSBkbyBub3Qgc3BlY2lmeSB0aGlzIHBhcmFtZXRlciwgdGhlIGxhdGVzdCB2ZXJzaW9uIG9mIHRoZSB0ZW1wbGF0ZSBpcyB1c2VkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRlbXBsYXRlVmVyc2lvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGVuY2Fwc3VsYXRlcyBhbmQgZXh0ZW5kcyB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6T09TOjpTdGF0ZUNvbmZpZ3VyYXRpb25gLCB3aGljaCBpcyB1c2VkIHRvIGNyZWF0ZSBhIGRlc2lyZWQtc3RhdGUgY29uZmlndXJhdGlvbi5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgbWF5IGhhdmUgc29tZSBuZXcgZnVuY3Rpb25zIHRvIGZhY2lsaXRhdGUgZGV2ZWxvcG1lbnQsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGlzIGNsYXNzIGluc3RlYWQgb2YgYFJvc1N0YXRlQ29uZmlndXJhdGlvbmBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLW9vcy1zdGF0ZWNvbmZpZ3VyYXRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFN0YXRlQ29uZmlndXJhdGlvbiBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG4gICAgcHJvdGVjdGVkIHNjb3BlOiByb3MuQ29uc3RydWN0O1xuICAgIHByb3RlY3RlZCBpZDogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBwcm9wczogU3RhdGVDb25maWd1cmF0aW9uUHJvcHM7XG4gICAgcHJvdGVjdGVkIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFN0YXRlQ29uZmlndXJhdGlvbklkOiBUaGUgSUQgb2YgdGhlIGRlc2lyZWQtc3RhdGUgY29uZmlndXJhdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clN0YXRlQ29uZmlndXJhdGlvbklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogU3RhdGVDb25maWd1cmF0aW9uUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcblxuICAgICAgICBjb25zdCByb3NTdGF0ZUNvbmZpZ3VyYXRpb24gPSBuZXcgUm9zU3RhdGVDb25maWd1cmF0aW9uKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgY29uZmlndXJlTW9kZTogcHJvcHMuY29uZmlndXJlTW9kZSxcbiAgICAgICAgICAgIHNjaGVkdWxlRXhwcmVzc2lvbjogcHJvcHMuc2NoZWR1bGVFeHByZXNzaW9uLFxuICAgICAgICAgICAgc2NoZWR1bGVUeXBlOiBwcm9wcy5zY2hlZHVsZVR5cGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogcHJvcHMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBwYXJhbWV0ZXJzOiBwcm9wcy5wYXJhbWV0ZXJzLFxuICAgICAgICAgICAgcmVzb3VyY2VHcm91cElkOiBwcm9wcy5yZXNvdXJjZUdyb3VwSWQsXG4gICAgICAgICAgICB0ZW1wbGF0ZU5hbWU6IHByb3BzLnRlbXBsYXRlTmFtZSxcbiAgICAgICAgICAgIHRlbXBsYXRlVmVyc2lvbjogcHJvcHMudGVtcGxhdGVWZXJzaW9uLFxuICAgICAgICAgICAgdGFyZ2V0czogcHJvcHMudGFyZ2V0cyxcbiAgICAgICAgICAgIHRhZ3M6IHByb3BzLnRhZ3MsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zU3RhdGVDb25maWd1cmF0aW9uO1xuICAgICAgICB0aGlzLmF0dHJTdGF0ZUNvbmZpZ3VyYXRpb25JZCA9IHJvc1N0YXRlQ29uZmlndXJhdGlvbi5hdHRyU3RhdGVDb25maWd1cmF0aW9uSWQ7XG4gICAgfVxufVxuIl19