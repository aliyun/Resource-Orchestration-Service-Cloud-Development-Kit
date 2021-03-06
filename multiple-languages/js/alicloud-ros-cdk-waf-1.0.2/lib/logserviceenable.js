"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogServiceEnable = exports.LogServiceEnableProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const waf_generated_1 = require("./waf.generated");
Object.defineProperty(exports, "LogServiceEnableProperty", { enumerable: true, get: function () { return waf_generated_1.RosLogServiceEnable; } });
/**
 * A ROS resource type:  `ALIYUN::WAF::LogServiceEnable`
 */
class LogServiceEnable extends ros.Resource {
    /**
     * Create a new `ALIYUN::WAF::LogServiceEnable`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosLogServiceEnable = new waf_generated_1.RosLogServiceEnable(this, id, {
            instanceId: props.instanceId,
            domain: props.domain,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosLogServiceEnable;
        this.attrDomain = rosLogServiceEnable.attrDomain;
        this.attrInstanceId = rosLogServiceEnable.attrInstanceId;
    }
}
exports.LogServiceEnable = LogServiceEnable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nc2VydmljZWVuYWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ3NlcnZpY2VlbmFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUFzRDtBQUV0Qix5R0FGdkIsbUNBQW1CLE9BRTRCO0FBbUJ4RDs7R0FFRztBQUNILE1BQWEsZ0JBQWlCLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFrQjlDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBNEIsRUFBRSxtQ0FBMkMsSUFBSTtRQUN2SCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sbUJBQW1CLEdBQUcsSUFBSSxtQ0FBbUIsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQzNELFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1QixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07U0FDdkIsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxtQkFBbUIsQ0FBQztRQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLG1CQUFtQixDQUFDLFVBQVUsQ0FBQztRQUNqRCxJQUFJLENBQUMsY0FBYyxHQUFHLG1CQUFtQixDQUFDLGNBQWMsQ0FBQztJQUM3RCxDQUFDO0NBQ0o7QUFwQ0QsNENBb0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zTG9nU2VydmljZUVuYWJsZSB9IGZyb20gJy4vd2FmLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0xvZ1NlcnZpY2VFbmFibGUgYXMgTG9nU2VydmljZUVuYWJsZVByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpXQUY6OkxvZ1NlcnZpY2VFbmFibGVgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTG9nU2VydmljZUVuYWJsZVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRvbWFpbjogVGhlIGRvbWFpbiBuYW1lIHRoYXQgaXMgYWRkZWQgdG8gV0FGLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRvbWFpbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW5zdGFuY2VJZDogVGhlIElEIG9mIHRoZSBXQUYgaW5zdGFuY2UuXG4gICAgICogWW91IGNhbiBjYWxsIHRoZSBEZXNjcmliZUluc3RhbmNlSW5mbyBvcGVyYXRpb24gdG8gcXVlcnkgdGhlIElEIG9mIHRoZSBXQUYgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpXQUY6OkxvZ1NlcnZpY2VFbmFibGVgXG4gKi9cbmV4cG9ydCBjbGFzcyBMb2dTZXJ2aWNlRW5hYmxlIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBEb21haW46IFRoZSBkb21haW4gbmFtZSB0aGF0IGlzIGFkZGVkIHRvIFdBRi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRvbWFpbjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEluc3RhbmNlSWQ6IFRoZSBJRCBvZiB0aGUgV0FGIGluc3RhbmNlLlxuWW91IGNhbiBjYWxsIHRoZSBEZXNjcmliZUluc3RhbmNlSW5mbyBvcGVyYXRpb24gdG8gcXVlcnkgdGhlIElEIG9mIHRoZSBXQUYgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbnN0YW5jZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6V0FGOjpMb2dTZXJ2aWNlRW5hYmxlYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBMb2dTZXJ2aWNlRW5hYmxlUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zTG9nU2VydmljZUVuYWJsZSA9IG5ldyBSb3NMb2dTZXJ2aWNlRW5hYmxlKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgaW5zdGFuY2VJZDogcHJvcHMuaW5zdGFuY2VJZCxcbiAgICAgICAgICAgIGRvbWFpbjogcHJvcHMuZG9tYWluLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0xvZ1NlcnZpY2VFbmFibGU7XG4gICAgICAgIHRoaXMuYXR0ckRvbWFpbiA9IHJvc0xvZ1NlcnZpY2VFbmFibGUuYXR0ckRvbWFpbjtcbiAgICAgICAgdGhpcy5hdHRySW5zdGFuY2VJZCA9IHJvc0xvZ1NlcnZpY2VFbmFibGUuYXR0ckluc3RhbmNlSWQ7XG4gICAgfVxufVxuIl19