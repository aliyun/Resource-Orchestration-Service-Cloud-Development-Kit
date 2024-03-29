"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accounts = exports.AccountsProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const drds_generated_1 = require("./drds.generated");
Object.defineProperty(exports, "AccountsProperty", { enumerable: true, get: function () { return drds_generated_1.RosAccounts; } });
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::DRDS::Accounts`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccounts`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-accounts
 */
class Accounts extends ros.Resource {
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
        const rosAccounts = new drds_generated_1.RosAccounts(this, id, {
            instanceId: props.instanceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAccounts;
        this.attrAccounts = rosAccounts.attrAccounts;
        this.attrDrdsAccountNames = rosAccounts.attrDrdsAccountNames;
    }
}
exports.Accounts = Accounts;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY2NvdW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMscURBQStDO0FBRXZCLGlHQUZmLDRCQUFXLE9BRW9CO0FBY3hDOzs7O0dBSUc7QUFDSCxNQUFhLFFBQVMsU0FBUSxHQUFHLENBQUMsUUFBUTtJQWdCdEM7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsUUFBdUIsRUFBRSxFQUFFLG1DQUEyQyxJQUFJO1FBQ3BILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFFekUsTUFBTSxXQUFXLEdBQUcsSUFBSSw0QkFBVyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDM0MsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1NBQy9CLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO1FBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDLFlBQVksQ0FBQztRQUM3QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsV0FBVyxDQUFDLG9CQUFvQixDQUFDO0lBQ2pFLENBQUM7Q0FDSjtBQW5DRCw0QkFtQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NBY2NvdW50cyB9IGZyb20gJy4vZHJkcy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NBY2NvdW50cyBhcyBBY2NvdW50c1Byb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQWNjb3VudHNgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLWRyZHMtYWNjb3VudHNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBY2NvdW50c1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGluc3RhbmNlSWQ6IFRoZSBJRCBvZiB0aGUgUG9sYXJEQi1YIDEuMCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZUlkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgZW5jYXBzdWxhdGVzIGFuZCBleHRlbmRzIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgREFUQVNPVVJDRTo6RFJEUzo6QWNjb3VudHNgLlxuICogQE5vdGUgVGhpcyBjbGFzcyBtYXkgaGF2ZSBzb21lIG5ldyBmdW5jdGlvbnMgdG8gZmFjaWxpdGF0ZSBkZXZlbG9wbWVudCwgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgY2xhc3MgaW5zdGVhZCBvZiBgUm9zQWNjb3VudHNgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2RhdGFzb3VyY2UtZHJkcy1hY2NvdW50c1xuICovXG5leHBvcnQgY2xhc3MgQWNjb3VudHMgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuICAgIHByb3RlY3RlZCBzY29wZTogcm9zLkNvbnN0cnVjdDtcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgcHJvcHM6IEFjY291bnRzUHJvcHM7XG4gICAgcHJvdGVjdGVkIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEFjY291bnRzOiBJbmRpY2F0ZXMgdGhlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBpbnN0YW5jZSBhY2NvdW50cy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFjY291bnRzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRHJkc0FjY291bnROYW1lczogSW5kaWNhdGVzIHRoZSB1c2VybmFtZSBvZiBhbiBpbnN0YW5jZSBhY2NvdW50cy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRyZHNBY2NvdW50TmFtZXM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBBY2NvdW50c1Byb3BzID0ge30sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcblxuICAgICAgICBjb25zdCByb3NBY2NvdW50cyA9IG5ldyBSb3NBY2NvdW50cyh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGluc3RhbmNlSWQ6IHByb3BzLmluc3RhbmNlSWQsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zQWNjb3VudHM7XG4gICAgICAgIHRoaXMuYXR0ckFjY291bnRzID0gcm9zQWNjb3VudHMuYXR0ckFjY291bnRzO1xuICAgICAgICB0aGlzLmF0dHJEcmRzQWNjb3VudE5hbWVzID0gcm9zQWNjb3VudHMuYXR0ckRyZHNBY2NvdW50TmFtZXM7XG4gICAgfVxufVxuIl19