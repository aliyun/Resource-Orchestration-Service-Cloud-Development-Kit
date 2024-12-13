"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscription = exports.SubscriptionProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const mns_generated_1 = require("./mns.generated");
Object.defineProperty(exports, "SubscriptionProperty", { enumerable: true, get: function () { return mns_generated_1.RosSubscription; } });
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::MNS::Subscription`, which is used to query the information about a subscription.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSubscription`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-subscription
 */
class Subscription extends ros.Resource {
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
        const rosSubscription = new mns_generated_1.RosSubscription(this, id, {
            subscriptionName: props.subscriptionName,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
            topicName: props.topicName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSubscription;
        this.attrCreateTime = rosSubscription.attrCreateTime;
        this.attrEndpoint = rosSubscription.attrEndpoint;
        this.attrFilterTag = rosSubscription.attrFilterTag;
        this.attrLastModifyTime = rosSubscription.attrLastModifyTime;
        this.attrNotifyContentFormat = rosSubscription.attrNotifyContentFormat;
        this.attrNotifyStrategy = rosSubscription.attrNotifyStrategy;
        this.attrSubscriptionName = rosSubscription.attrSubscriptionName;
        this.attrSubscriptionUrl = rosSubscription.attrSubscriptionUrl;
        this.attrTopicName = rosSubscription.attrTopicName;
        this.attrTopicOwner = rosSubscription.attrTopicOwner;
    }
}
exports.Subscription = Subscription;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Vic2NyaXB0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3Vic2NyaXB0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBa0Q7QUFFdEIscUdBRm5CLCtCQUFlLE9BRXdCO0FBMkJoRDs7OztHQUlHO0FBQ0gsTUFBYSxZQUFhLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUF3RDFDOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXdCLEVBQUUsbUNBQTJDLElBQUk7UUFDbkgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUV6RSxNQUFNLGVBQWUsR0FBRyxJQUFJLCtCQUFlLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNuRCxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCO1lBQ3hDLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYyxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsY0FBYyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBYztZQUNwSCxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7U0FDN0IsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUM7UUFDaEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxlQUFlLENBQUMsY0FBYyxDQUFDO1FBQ3JELElBQUksQ0FBQyxZQUFZLEdBQUcsZUFBZSxDQUFDLFlBQVksQ0FBQztRQUNqRCxJQUFJLENBQUMsYUFBYSxHQUFHLGVBQWUsQ0FBQyxhQUFhLENBQUM7UUFDbkQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQztRQUM3RCxJQUFJLENBQUMsdUJBQXVCLEdBQUcsZUFBZSxDQUFDLHVCQUF1QixDQUFDO1FBQ3ZFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxlQUFlLENBQUMsa0JBQWtCLENBQUM7UUFDN0QsSUFBSSxDQUFDLG9CQUFvQixHQUFHLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQztRQUNqRSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsZUFBZSxDQUFDLG1CQUFtQixDQUFDO1FBQy9ELElBQUksQ0FBQyxhQUFhLEdBQUcsZUFBZSxDQUFDLGFBQWEsQ0FBQztRQUNuRCxJQUFJLENBQUMsY0FBYyxHQUFHLGVBQWUsQ0FBQyxjQUFjLENBQUM7SUFDekQsQ0FBQztDQUNKO0FBckZELG9DQXFGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc1N1YnNjcmlwdGlvbiB9IGZyb20gJy4vbW5zLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc1N1YnNjcmlwdGlvbiBhcyBTdWJzY3JpcHRpb25Qcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFN1YnNjcmlwdGlvbmAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2RhdGFzb3VyY2UtbW5zLXN1YnNjcmlwdGlvblxuICovXG5leHBvcnQgaW50ZXJmYWNlIFN1YnNjcmlwdGlvblByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHN1YnNjcmlwdGlvbk5hbWU6IFRoZSBuYW1lIG9mIHRoZSBzdWJzY3JpcHRpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3Vic2NyaXB0aW9uTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdG9waWNOYW1lOiBUaGUgbmFtZSBvZiB0aGUgdG9waWMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdG9waWNOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByZWZyZXNoT3B0aW9uczogVGhlIHJlZnJlc2ggc3RyYXRlZ3kgZm9yIHRoZSBkYXRhc291cmNlIHJlc291cmNlIHdoZW4gdGhlIHN0YWNrIGlzIHVwZGF0ZWQuIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIE5ldmVyOiBOZXZlciByZWZyZXNoIHRoZSBkYXRhc291cmNlIHJlc291cmNlIHdoZW4gdGhlIHN0YWNrIGlzIHVwZGF0ZWQuXG4gICAgICogLSBBbHdheXM6IEFsd2F5cyByZWZyZXNoIHRoZSBkYXRhc291cmNlIHJlc291cmNlIHdoZW4gdGhlIHN0YWNrIGlzIHVwZGF0ZWQuXG4gICAgICogRGVmYXVsdCBpcyBOZXZlci5cbiAgICAgKi9cbiAgICByZWFkb25seSByZWZyZXNoT3B0aW9ucz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGVuY2Fwc3VsYXRlcyBhbmQgZXh0ZW5kcyB0aGUgUk9TIHJlc291cmNlIHR5cGUgYERBVEFTT1VSQ0U6Ok1OUzo6U3Vic2NyaXB0aW9uYCwgd2hpY2ggaXMgdXNlZCB0byBxdWVyeSB0aGUgaW5mb3JtYXRpb24gYWJvdXQgYSBzdWJzY3JpcHRpb24uXG4gKiBATm90ZSBUaGlzIGNsYXNzIG1heSBoYXZlIHNvbWUgbmV3IGZ1bmN0aW9ucyB0byBmYWNpbGl0YXRlIGRldmVsb3BtZW50LCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBjbGFzcyBpbnN0ZWFkIG9mIGBSb3NTdWJzY3JpcHRpb25gZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2RhdGFzb3VyY2UtbW5zLXN1YnNjcmlwdGlvblxuICovXG5leHBvcnQgY2xhc3MgU3Vic2NyaXB0aW9uIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBTdWJzY3JpcHRpb25Qcm9wcztcbiAgICBwcm90ZWN0ZWQgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQ3JlYXRlVGltZTogVGhlIHRpbWUgd2hlbiB0aGUgc3Vic2NyaXB0aW9uIHdhcyBjcmVhdGVkLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ3JlYXRlVGltZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEVuZHBvaW50OiBUaGUgZW5kcG9pbnQgdGhhdCBpcyB1c2VkIGJ5IHRoZSBzdWJzY3JpYmVyIHRvIHJlY2VpdmUgbWVzc2FnZXMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJFbmRwb2ludDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEZpbHRlclRhZzogRGVzY3JpYmVzIHRoZSBsYWJlbHMgYnkgd2hpY2ggbWVzc2FnZXMgYXJlIGZpbHRlcmVkIGluIHRoaXMgc3Vic2NyaXB0aW9uIChvbmx5IG1lc3NhZ2VzIHdpdGggY29uc2lzdGVudCBsYWJlbHMgYXJlIHB1c2hlZCkuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJGaWx0ZXJUYWc6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBMYXN0TW9kaWZ5VGltZTogVGhlIHRpbWUgd2hlbiB0aGUgc3Vic2NyaXB0aW9uIHdhcyBsYXN0IG1vZGlmaWVkLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTGFzdE1vZGlmeVRpbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBOb3RpZnlDb250ZW50Rm9ybWF0OiBUaGUgZm9ybWF0IG9mIHRoZSBtZXNzYWdlIHRoYXQgaXMgcHVzaGVkIHRvIHRoZSBlbmRwb2ludC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck5vdGlmeUNvbnRlbnRGb3JtYXQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBOb3RpZnlTdHJhdGVneTogVGhlIHJldHJ5IHBvbGljeSB0aGF0IGlzIGFwcGxpZWQgaWYgYW4gZXJyb3Igb2NjdXJzIHdoZW4gTWVzc2FnZSBTZXJ2aWNlIChNTlMpIHB1c2hlcyBtZXNzYWdlcyB0byB0aGUgZW5kcG9pbnQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJOb3RpZnlTdHJhdGVneTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFN1YnNjcmlwdGlvbk5hbWU6IFRoZSBuYW1lIG9mIHRoZSBzdWJzY3JpcHRpb24uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTdWJzY3JpcHRpb25OYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgU3Vic2NyaXB0aW9uVVJMOiBUVGhlIFVSTCBvZiB0aGUgc3Vic2NyaXB0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU3Vic2NyaXB0aW9uVXJsOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgVG9waWNOYW1lOiBUaGUgbmFtZSBvZiB0aGUgdG9waWMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJUb3BpY05hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBUb3BpY093bmVyOiBUaGUgb3duZXIgb2YgdGhlIHRvcGljLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVG9waWNPd25lcjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFN1YnNjcmlwdGlvblByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG5cbiAgICAgICAgY29uc3Qgcm9zU3Vic2NyaXB0aW9uID0gbmV3IFJvc1N1YnNjcmlwdGlvbih0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbk5hbWU6IHByb3BzLnN1YnNjcmlwdGlvbk5hbWUsXG4gICAgICAgICAgICByZWZyZXNoT3B0aW9uczogcHJvcHMucmVmcmVzaE9wdGlvbnMgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5yZWZyZXNoT3B0aW9ucyA9PT0gbnVsbCA/ICdOZXZlcicgOiBwcm9wcy5yZWZyZXNoT3B0aW9ucyxcbiAgICAgICAgICAgIHRvcGljTmFtZTogcHJvcHMudG9waWNOYW1lLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc1N1YnNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5hdHRyQ3JlYXRlVGltZSA9IHJvc1N1YnNjcmlwdGlvbi5hdHRyQ3JlYXRlVGltZTtcbiAgICAgICAgdGhpcy5hdHRyRW5kcG9pbnQgPSByb3NTdWJzY3JpcHRpb24uYXR0ckVuZHBvaW50O1xuICAgICAgICB0aGlzLmF0dHJGaWx0ZXJUYWcgPSByb3NTdWJzY3JpcHRpb24uYXR0ckZpbHRlclRhZztcbiAgICAgICAgdGhpcy5hdHRyTGFzdE1vZGlmeVRpbWUgPSByb3NTdWJzY3JpcHRpb24uYXR0ckxhc3RNb2RpZnlUaW1lO1xuICAgICAgICB0aGlzLmF0dHJOb3RpZnlDb250ZW50Rm9ybWF0ID0gcm9zU3Vic2NyaXB0aW9uLmF0dHJOb3RpZnlDb250ZW50Rm9ybWF0O1xuICAgICAgICB0aGlzLmF0dHJOb3RpZnlTdHJhdGVneSA9IHJvc1N1YnNjcmlwdGlvbi5hdHRyTm90aWZ5U3RyYXRlZ3k7XG4gICAgICAgIHRoaXMuYXR0clN1YnNjcmlwdGlvbk5hbWUgPSByb3NTdWJzY3JpcHRpb24uYXR0clN1YnNjcmlwdGlvbk5hbWU7XG4gICAgICAgIHRoaXMuYXR0clN1YnNjcmlwdGlvblVybCA9IHJvc1N1YnNjcmlwdGlvbi5hdHRyU3Vic2NyaXB0aW9uVXJsO1xuICAgICAgICB0aGlzLmF0dHJUb3BpY05hbWUgPSByb3NTdWJzY3JpcHRpb24uYXR0clRvcGljTmFtZTtcbiAgICAgICAgdGhpcy5hdHRyVG9waWNPd25lciA9IHJvc1N1YnNjcmlwdGlvbi5hdHRyVG9waWNPd25lcjtcbiAgICB9XG59XG4iXX0=