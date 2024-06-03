"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainingJob = exports.TrainingJobProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const paiplugin_generated_1 = require("./paiplugin.generated");
Object.defineProperty(exports, "TrainingJobProperty", { enumerable: true, get: function () { return paiplugin_generated_1.RosTrainingJob; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::PAIPlugin::TrainingJob`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTrainingJob`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-trainingjob
 */
class TrainingJob extends ros.Resource {
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
        const rosTrainingJob = new paiplugin_generated_1.RosTrainingJob(this, id, {
            dataPath: props.dataPath,
            campaignId: props.campaignId,
            userConfig: props.userConfig,
            algorithm: props.algorithm,
            waitForTrainingFinish: props.waitForTrainingFinish === undefined || props.waitForTrainingFinish === null ? true : props.waitForTrainingFinish,
            remark: props.remark,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTrainingJob;
        this.attrTrainingJobId = rosTrainingJob.attrTrainingJobId;
    }
}
exports.TrainingJob = TrainingJob;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhaW5pbmdqb2IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0cmFpbmluZ2pvYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsK0RBQXVEO0FBRTVCLG9HQUZsQixvQ0FBYyxPQUV1QjtBQTRDOUM7Ozs7R0FJRztBQUNILE1BQWEsV0FBWSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBV3pDOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXVCLEVBQUUsbUNBQTJDLElBQUk7UUFDbEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUV6RSxNQUFNLGNBQWMsR0FBRyxJQUFJLG9DQUFjLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNqRCxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7WUFDeEIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1QixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIscUJBQXFCLEVBQUUsS0FBSyxDQUFDLHFCQUFxQixLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMscUJBQXFCLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxxQkFBcUI7WUFDN0ksTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtTQUNuQixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLGNBQWMsQ0FBQztRQUMvQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsY0FBYyxDQUFDLGlCQUFpQixDQUFDO0lBQzlELENBQUM7Q0FDSjtBQW5DRCxrQ0FtQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NUcmFpbmluZ0pvYiB9IGZyb20gJy4vcGFpcGx1Z2luLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc1RyYWluaW5nSm9iIGFzIFRyYWluaW5nSm9iUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBUcmFpbmluZ0pvYmAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1wYWlwbHVnaW4tdHJhaW5pbmdqb2JcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUcmFpbmluZ0pvYlByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGFsZ29yaXRobTogVGhlIGFsZ29yaXRobSB1c2VkIGluIHRyYWluaW5nLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFsZ29yaXRobTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY2FtcGFpZ25JZDogVGhlIHJlbGF0ZWQgY2FtcGFpZ24gSWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2FtcGFpZ25JZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGF0YVBhdGg6IFRoZSB0cmFpbmluZyBkYXRhIHBhdGggaW4gT1NTIGJ1Y2tldC5cbiAgICAgKi9cbiAgICByZWFkb25seSBkYXRhUGF0aDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbmFtZTogVGhlIG5hbWUgb2YgdHJhaW5pbmcgam9iLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHVzZXJDb25maWc6IFVzZXIgY29uZmlndXJhdGlvbiBpcyB1c2VkIHRvIHNldCBwYXJhbWV0ZXJzIHN1Y2ggYXMgc3RhcnRfZGF0ZSBhbmQgZW5kX2RhdGUgdG8gZGVsaW5lYXRlIHRoZSB0aW1lIHJhbmdlIG9mIG1vZGVsaW5nIGRhdGEuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdXNlckNvbmZpZzogeyBba2V5OiBzdHJpbmddOiAoYW55IHwgcm9zLklSZXNvbHZhYmxlKSB9IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcmVtYXJrOiBUaGUgcmVtYXJrIG9mIHRyYWluaW5nIGpvYi5cbiAgICAgKi9cbiAgICByZWFkb25seSByZW1hcms/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB3YWl0Rm9yVHJhaW5pbmdGaW5pc2g6IFdoZXRoZXIgcmVzb3VyY2UgY3JlYXRpb24gd2FpdHMgZm9yIHRoZSB0cmFpbmluZyB0YXNrIHRvIGNvbXBsZXRlLlRoZSBsb25nZXN0IHdhaXRpbmcgdGltZSBpcyA0MCBtaW51dGVzXG4gICAgICovXG4gICAgcmVhZG9ubHkgd2FpdEZvclRyYWluaW5nRmluaXNoPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGVuY2Fwc3VsYXRlcyBhbmQgZXh0ZW5kcyB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6UEFJUGx1Z2luOjpUcmFpbmluZ0pvYmAuXG4gKiBATm90ZSBUaGlzIGNsYXNzIG1heSBoYXZlIHNvbWUgbmV3IGZ1bmN0aW9ucyB0byBmYWNpbGl0YXRlIGRldmVsb3BtZW50LCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBjbGFzcyBpbnN0ZWFkIG9mIGBSb3NUcmFpbmluZ0pvYmBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXBhaXBsdWdpbi10cmFpbmluZ2pvYlxuICovXG5leHBvcnQgY2xhc3MgVHJhaW5pbmdKb2IgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuICAgIHByb3RlY3RlZCBzY29wZTogcm9zLkNvbnN0cnVjdDtcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgcHJvcHM6IFRyYWluaW5nSm9iUHJvcHM7XG4gICAgcHJvdGVjdGVkIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFRyYWluaW5nSm9iSWQ6IFRoZSB0cmFpbmluZyBqb2IgaWQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJUcmFpbmluZ0pvYklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogVHJhaW5pbmdKb2JQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuXG4gICAgICAgIGNvbnN0IHJvc1RyYWluaW5nSm9iID0gbmV3IFJvc1RyYWluaW5nSm9iKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgZGF0YVBhdGg6IHByb3BzLmRhdGFQYXRoLFxuICAgICAgICAgICAgY2FtcGFpZ25JZDogcHJvcHMuY2FtcGFpZ25JZCxcbiAgICAgICAgICAgIHVzZXJDb25maWc6IHByb3BzLnVzZXJDb25maWcsXG4gICAgICAgICAgICBhbGdvcml0aG06IHByb3BzLmFsZ29yaXRobSxcbiAgICAgICAgICAgIHdhaXRGb3JUcmFpbmluZ0ZpbmlzaDogcHJvcHMud2FpdEZvclRyYWluaW5nRmluaXNoID09PSB1bmRlZmluZWQgfHwgcHJvcHMud2FpdEZvclRyYWluaW5nRmluaXNoID09PSBudWxsID8gdHJ1ZSA6IHByb3BzLndhaXRGb3JUcmFpbmluZ0ZpbmlzaCxcbiAgICAgICAgICAgIHJlbWFyazogcHJvcHMucmVtYXJrLFxuICAgICAgICAgICAgbmFtZTogcHJvcHMubmFtZSxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NUcmFpbmluZ0pvYjtcbiAgICAgICAgdGhpcy5hdHRyVHJhaW5pbmdKb2JJZCA9IHJvc1RyYWluaW5nSm9iLmF0dHJUcmFpbmluZ0pvYklkO1xuICAgIH1cbn1cbiJdfQ==