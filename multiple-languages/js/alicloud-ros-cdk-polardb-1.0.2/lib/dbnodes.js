"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBNodes = exports.DBNodesProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const polardb_generated_1 = require("./polardb.generated");
Object.defineProperty(exports, "DBNodesProperty", { enumerable: true, get: function () { return polardb_generated_1.RosDBNodes; } });
/**
 * A ROS resource type:  `ALIYUN::POLARDB::DBNodes`
 */
class DBNodes extends ros.Resource {
    /**
     * Create a new `ALIYUN::POLARDB::DBNodes`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosDBNodes = new polardb_generated_1.RosDBNodes(this, id, {
            amount: props.amount,
            dbClusterId: props.dbClusterId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDBNodes;
        this.attrDbNodeIds = rosDBNodes.attrDbNodeIds;
        this.attrOrderIds = rosDBNodes.attrOrderIds;
    }
}
exports.DBNodes = DBNodes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGJub2Rlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRibm9kZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLDJEQUFpRDtBQUUxQixnR0FGZCw4QkFBVSxPQUVtQjtBQWtCdEM7O0dBRUc7QUFDSCxNQUFhLE9BQVEsU0FBUSxHQUFHLENBQUMsUUFBUTtJQWlCckM7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFtQixFQUFFLG1DQUEyQyxJQUFJO1FBQzlHLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxVQUFVLEdBQUcsSUFBSSw4QkFBVSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDekMsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztTQUNqQyxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDOUMsSUFBSSxDQUFDLFlBQVksR0FBRyxVQUFVLENBQUMsWUFBWSxDQUFDO0lBQ2hELENBQUM7Q0FDSjtBQW5DRCwwQkFtQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NEQk5vZGVzIH0gZnJvbSAnLi9wb2xhcmRiLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0RCTm9kZXMgYXMgREJOb2Rlc1Byb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpQT0xBUkRCOjpEQk5vZGVzYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIERCTm9kZXNQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhbW91bnQ6IE51bWJlciBvZiBub2RlcyB0byBiZSBhZGRlZCB0byBjbHVzdGVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFtb3VudDogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGJDbHVzdGVySWQ6IFRoZSBJRCBvZiB0aGUgQXBzYXJhREIgZm9yIFBPTEFSREIgY2x1c3RlciB0byBiZSBhZGRlZCBub2RlcyB0by5cbiAgICAgKi9cbiAgICByZWFkb25seSBkYkNsdXN0ZXJJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpQT0xBUkRCOjpEQk5vZGVzYFxuICovXG5leHBvcnQgY2xhc3MgREJOb2RlcyBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgREJOb2RlSWRzOiBUaGUgSUQgbGlzdCBvZiBhZGRlZCBjbHVzdGVyIG5vZGVzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGJOb2RlSWRzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgT3JkZXJJZHM6IFRoZSBvcmRlciBJRCBsaXN0IG9mIGFkZGVkIGNsdXN0ZXIgbm9kZXMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJPcmRlcklkczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OlBPTEFSREI6OkRCTm9kZXNgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IERCTm9kZXNQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NEQk5vZGVzID0gbmV3IFJvc0RCTm9kZXModGhpcywgaWQsICB7XG4gICAgICAgICAgICBhbW91bnQ6IHByb3BzLmFtb3VudCxcbiAgICAgICAgICAgIGRiQ2x1c3RlcklkOiBwcm9wcy5kYkNsdXN0ZXJJZCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NEQk5vZGVzO1xuICAgICAgICB0aGlzLmF0dHJEYk5vZGVJZHMgPSByb3NEQk5vZGVzLmF0dHJEYk5vZGVJZHM7XG4gICAgICAgIHRoaXMuYXR0ck9yZGVySWRzID0gcm9zREJOb2Rlcy5hdHRyT3JkZXJJZHM7XG4gICAgfVxufVxuIl19