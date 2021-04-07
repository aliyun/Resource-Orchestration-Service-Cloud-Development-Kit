"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountPrivilege = exports.AccountPrivilegeProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const polardb_generated_1 = require("./polardb.generated");
Object.defineProperty(exports, "AccountPrivilegeProperty", { enumerable: true, get: function () { return polardb_generated_1.RosAccountPrivilege; } });
/**
 * A ROS resource type:  `ALIYUN::POLARDB::AccountPrivilege`
 */
class AccountPrivilege extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Create a new `ALIYUN::POLARDB::AccountPrivilege`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosAccountPrivilege = new polardb_generated_1.RosAccountPrivilege(this, id, {
            accountPrivilege: props.accountPrivilege,
            dbClusterId: props.dbClusterId,
            dbName: props.dbName,
            accountName: props.accountName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAccountPrivilege;
    }
}
exports.AccountPrivilege = AccountPrivilege;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudHByaXZpbGVnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjY291bnRwcml2aWxlZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLDJEQUEwRDtBQUUxQix5R0FGdkIsdUNBQW1CLE9BRTRCO0FBb0N4RDs7R0FFRztBQUNILE1BQWEsZ0JBQWlCLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFFOUM7OztPQUdHO0lBRUg7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUE0QixFQUFFLG1DQUEyQyxJQUFJO1FBQ3ZILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxtQkFBbUIsR0FBRyxJQUFJLHVDQUFtQixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDM0QsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQjtZQUN4QyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztTQUNqQyxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLG1CQUFtQixDQUFDO0lBQ3hDLENBQUM7Q0FDSjtBQXpCRCw0Q0F5QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NBY2NvdW50UHJpdmlsZWdlIH0gZnJvbSAnLi9wb2xhcmRiLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0FjY291bnRQcml2aWxlZ2UgYXMgQWNjb3VudFByaXZpbGVnZVByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpQT0xBUkRCOjpBY2NvdW50UHJpdmlsZWdlYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFjY291bnRQcml2aWxlZ2VQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhY2NvdW50TmFtZTogVGhlIG5hbWUgb2YgdGhlIGRhdGFiYXNlIGFjY291bnQgdG8gYmUgZ3JhbnRlZCBhY2Nlc3MgcGVybWlzc2lvbnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWNjb3VudE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGFjY291bnRQcml2aWxlZ2U6IFRoZSBwZXJtaXNzaW9ucyBvZiB0aGUgZGF0YWJhc2UgYWNjb3VudCBvbiB0aGUgZGF0YWJhc2UuIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIFJlYWRXcml0ZTogaGFzIHJlYWQgYW5kIHdyaXRlIHBlcm1pc3Npb25zIG9uIHRoZSBkYXRhYmFzZS5cbiAgICAgKiAtIFJlYWRPbmx5OiBoYXMgdGhlIHJlYWQtb25seSBwZXJtaXNzaW9uIG9uIHRoZSBkYXRhYmFzZS5cbiAgICAgKiAtIERNTE9ubHk6IHJ1bnMgb25seSBkYXRhIG1hbmlwdWxhdGlvbiBsYW5ndWFnZSAoRE1MKSBzdGF0ZW1lbnRzLlxuICAgICAqIC0gRERMT25seTogcnVucyBvbmx5IGRhdGEgZGVmaW5pdGlvbiBsYW5ndWFnZSAoRERMKSBzdGF0ZW1lbnRzLlxuICAgICAqIFRoZSBudW1iZXIgb2YgYWNjb3VudCBwZXJtaXNzaW9ucyBzcGVjaWZpZWQgYnkgdGhlIEFjY291bnRQcml2aWxlZ2UgcGFyYW1ldGVyIG11c3QgYmUgdGhlIHNhbWUgYXMgdGhhdCBvZiBkYXRhYmFzZSBuYW1lcyBzcGVjaWZpZWQgYnkgdGhlIERCTmFtZSBwYXJhbWV0ZXIuIEVhY2ggYWNjb3VudCBwZXJtaXNzaW9uIG11c3QgY29ycmVzcG9uZCB0byBhIGRhdGFiYXNlIG5hbWUgaW4gc2VxdWVuY2UuXG4gICAgICogU2VwYXJhdGUgbXVsdGlwbGUgcGVybWlzc2lvbnMgd2l0aCBhIGNvbW1hICgsKS5cbiAgICAgKi9cbiAgICByZWFkb25seSBhY2NvdW50UHJpdmlsZWdlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkYkNsdXN0ZXJJZDogVGhlIElEIG9mIHRoZSBBcHNhcmFEQiBmb3IgUE9MQVJEQiBjbHVzdGVyIHRvIHdoaWNoIGEgZGF0YWJhc2UgYWNjb3VudCBiZWxvbmdzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRiQ2x1c3RlcklkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkYk5hbWU6IFRoZSBuYW1lIG9mIHRoZSBkYXRhYmFzZSB3aG9zZSBhY2Nlc3MgcGVybWlzc2lvbnMgYXJlIHRvIGJlIGdyYW50ZWQgdG8gdGhlIGRhdGFiYXNlIGFjY291bnQuXG4gICAgICogWW91IGNhbiBncmFudCBhY2Nlc3MgcGVybWlzc2lvbnMgb24gb25lIG9yIG1vcmUgZGF0YWJhc2VzIHRvIHRoZSBkYXRhYmFzZSBhY2NvdW50LlxuICAgICAqIFNlcGFyYXRlIG11bHRpcGxlIGRhdGFiYXNlcyB3aXRoIGEgY29tbWEgKCwpLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRiTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpQT0xBUkRCOjpBY2NvdW50UHJpdmlsZWdlYFxuICovXG5leHBvcnQgY2xhc3MgQWNjb3VudFByaXZpbGVnZSBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6UE9MQVJEQjo6QWNjb3VudFByaXZpbGVnZWAuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogQWNjb3VudFByaXZpbGVnZVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0FjY291bnRQcml2aWxlZ2UgPSBuZXcgUm9zQWNjb3VudFByaXZpbGVnZSh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGFjY291bnRQcml2aWxlZ2U6IHByb3BzLmFjY291bnRQcml2aWxlZ2UsXG4gICAgICAgICAgICBkYkNsdXN0ZXJJZDogcHJvcHMuZGJDbHVzdGVySWQsXG4gICAgICAgICAgICBkYk5hbWU6IHByb3BzLmRiTmFtZSxcbiAgICAgICAgICAgIGFjY291bnROYW1lOiBwcm9wcy5hY2NvdW50TmFtZSxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NBY2NvdW50UHJpdmlsZWdlO1xuICAgIH1cbn1cbiJdfQ==