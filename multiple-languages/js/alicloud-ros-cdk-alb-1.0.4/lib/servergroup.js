"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerGroup = exports.ServerGroupProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const alb_generated_1 = require("./alb.generated");
Object.defineProperty(exports, "ServerGroupProperty", { enumerable: true, get: function () { return alb_generated_1.RosServerGroup; } });
/**
 * A ROS resource type:  `ALIYUN::ALB::ServerGroup`
 */
class ServerGroup extends ros.Resource {
    /**
     * Create a new `ALIYUN::ALB::ServerGroup`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosServerGroup = new alb_generated_1.RosServerGroup(this, id, {
            vpcId: props.vpcId,
            resourceGroupId: props.resourceGroupId,
            scheduler: props.scheduler,
            stickySessionConfig: props.stickySessionConfig,
            healthCheckConfig: props.healthCheckConfig,
            protocol: props.protocol,
            serverGroupType: props.serverGroupType,
            serverGroupName: props.serverGroupName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosServerGroup;
        this.attrServerGroupId = rosServerGroup.attrServerGroupId;
    }
}
exports.ServerGroup = ServerGroup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyZ3JvdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXJ2ZXJncm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQWlEO0FBRXRCLG9HQUZsQiw4QkFBYyxPQUV1QjtBQW9FOUM7O0dBRUc7QUFDSCxNQUFhLFdBQVksU0FBUSxHQUFHLENBQUMsUUFBUTtJQVl6Qzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXVCLEVBQUUsbUNBQTJDLElBQUk7UUFDbEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLGNBQWMsR0FBRyxJQUFJLDhCQUFjLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNqRCxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7WUFDbEIsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixtQkFBbUIsRUFBRSxLQUFLLENBQUMsbUJBQW1CO1lBQzlDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUI7WUFDMUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7U0FDekMsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUM7UUFDL0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQztJQUM5RCxDQUFDO0NBQ0o7QUFuQ0Qsa0NBbUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zU2VydmVyR3JvdXAgfSBmcm9tICcuL2FsYi5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NTZXJ2ZXJHcm91cCBhcyBTZXJ2ZXJHcm91cFByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpBTEI6OlNlcnZlckdyb3VwYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNlcnZlckdyb3VwUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaGVhbHRoQ2hlY2tDb25maWc6IFRoZSBjb25maWd1cmF0aW9uIG9mIGhlYWx0aCBjaGVja3MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaGVhbHRoQ2hlY2tDb25maWc6IFJvc1NlcnZlckdyb3VwLkhlYWx0aENoZWNrQ29uZmlnUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzZXJ2ZXJHcm91cE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBzZXJ2ZXIgZ3JvdXAuIFRoZSBuYW1lIG11c3QgYmUgMiB0byAxMjggY2hhcmFjdGVycyBpbiBsZW5ndGgsIGFuZFxuICAgICAqIGNhbiBjb250YWluIGxldHRlcnMsIGRpZ2l0cywgcGVyaW9kcyAoLiksIHVuZGVyc2NvcmVzIChfKSwgYW5kIGh5cGhlbnMgKC0pLiBUaGUgbmFtZVxuICAgICAqIG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBzZXJ2ZXJHcm91cE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHZwY0lkOiBUaGUgSUQgb2YgdGhlIHZpcnR1YWwgcHJpdmF0ZSBjbG91ZCAoVlBDKS4gWW91IGNhbiBhZGQgb25seSBzZXJ2ZXJzIHRoYXQgYXJlIGRlcGxveWVkXG4gICAgICogaW4gdGhlIHNwZWNpZmllZCBWUEMgdG8gdGhlIHNlcnZlciBncm91cC5cbiAgICAgKiBOb3RlIFRoaXMgcGFyYW1ldGVyIGlzIHJlcXVpcmVkIGlmIHRoZSBTZXJ2ZXJHcm91cFR5cGUgcGFyYW1ldGVyIGlzIHNldCB0byBJbnN0YW5jZSBvciBJcC5cbiAgICAgKi9cbiAgICByZWFkb25seSB2cGNJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcHJvdG9jb2w6IFRoZSBzZXJ2ZXIgcHJvdG9jb2wuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBIVFRQOiBhbGxvd3MgeW91IHRvIGFzc29jaWF0ZSBIVFRQUywgSFRUUCwgb3IgUVVJQyBsaXN0ZW5lcnMgd2l0aCBiYWNrZW5kIHNlcnZlcnMuIFRoaXNcbiAgICAgKiBpcyB0aGUgZGVmYXVsdCB2YWx1ZS5cbiAgICAgKiBIVFRQUzogYWxsb3dzIHlvdSB0byBhc3NvY2lhdGUgSFRUUFMgbGlzdGVuZXJzIHdpdGggYmFja2VuZCBzZXJ2ZXJzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByb3RvY29sPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcmVzb3VyY2VHcm91cElkOiBUaGUgSUQgb2YgdGhlIHJlc291cmNlIGdyb3VwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlc291cmNlR3JvdXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNjaGVkdWxlcjogVGhlIHNjaGVkdWxpbmcgYWxnb3JpdGhtLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogV3JyOiBCYWNrZW5kIHNlcnZlcnMgdGhhdCBoYXZlIGhpZ2hlciB3ZWlnaHRzIHJlY2VpdmUgbW9yZSByZXF1ZXN0cyB0aGFuIHRob3NlIHRoYXQgaGF2ZVxuICAgICAqIGxvd2VyIHdlaWdodHMuIFRoaXMgaXMgdGhlIGRlZmF1bHQgdmFsdWUuXG4gICAgICogV2xjOiBSZXF1ZXN0cyBhcmUgZGlzdHJpYnV0ZWQgYmFzZWQgb24gdGhlIHdlaWdodCBhbmQgbG9hZCBvZiBlYWNoIGJhY2tlbmQgc2VydmVyLiBUaGVcbiAgICAgKiBsb2FkIHJlZmVycyB0byB0aGUgbnVtYmVyIG9mIGNvbm5lY3Rpb25zIHRvIGEgYmFja2VuZCBzZXJ2ZXIuIElmIG11bHRpcGxlIGJhY2tlbmRcbiAgICAgKiBzZXJ2ZXJzIGhhdmUgdGhlIHNhbWUgd2VpZ2h0LCByZXF1ZXN0cyBhcmUgcm91dGVkIHRvIHRoZSBiYWNrZW5kIHNlcnZlciB3aXRoIHRoZSBsZWFzdFxuICAgICAqIGNvbm5lY3Rpb25zLlxuICAgICAqIFNjaDogc3BlY2lmaWVzIGNvbnNpc3RlbnQgaGFzaGluZyB0aGF0IGlzIGJhc2VkIG9uIHNvdXJjZSBJUCBhZGRyZXNzZXMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2NoZWR1bGVyPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc2VydmVyR3JvdXBUeXBlOiBUaGUgdHlwZSBvZiB0aGUgc2VydmVyIGdyb3VwLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogSW5zdGFuY2U6IGEgc2VydmVyIGdyb3VwIHRoYXQgY29uc2lzdHMgb2Ygc2VydmVycy4gWW91IGNhbiBhZGQgRWxhc3RpYyBDb21wdXRlIFNlcnZpY2UgKEVDUylcbiAgICAgKiBpbnN0YW5jZXMsIGVsYXN0aWMgbmV0d29yayBpbnRlcmZhY2VzIChFTklzKSwgYW5kIGVsYXN0aWMgY29udGFpbmVyIGluc3RhbmNlcyB0byB0aGlzXG4gICAgICogdHlwZSBvZiBzZXJ2ZXIgZ3JvdXAuIFRoaXMgaXMgdGhlIGRlZmF1bHQgdmFsdWUuXG4gICAgICogSXA6IGEgc2VydmVyIGdyb3VwIHRoYXQgY29uc2lzdHMgb2YgSVAgYWRkcmVzc2VzLiBZb3UgY2FuIGFkZCBJUCBhZGRyZXNzZXMgdG8gdGhpcyB0eXBlXG4gICAgICogb2Ygc2VydmVyIGdyb3VwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlcnZlckdyb3VwVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHN0aWNreVNlc3Npb25Db25maWc6IFRoZSBjb25maWd1cmF0aW9uIG9mIHNlc3Npb24gcGVyc2lzdGVuY2UuXG4gICAgICogTm90ZSBUaGlzIHBhcmFtZXRlciBpcyByZXF1aXJlZCBpZiB0aGUgU2VydmVyR3JvdXBUeXBlIHBhcmFtZXRlciBpcyBzZXQgdG8gSW5zdGFuY2Ugb3IgSXAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3RpY2t5U2Vzc2lvbkNvbmZpZz86IFJvc1NlcnZlckdyb3VwLlN0aWNreVNlc3Npb25Db25maWdQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6QUxCOjpTZXJ2ZXJHcm91cGBcbiAqL1xuZXhwb3J0IGNsYXNzIFNlcnZlckdyb3VwIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBTZXJ2ZXJHcm91cElkOiBUaGUgSUQgb2YgdGhlIHNlcnZlciBncm91cC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNlcnZlckdyb3VwSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpBTEI6OlNlcnZlckdyb3VwYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBTZXJ2ZXJHcm91cFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc1NlcnZlckdyb3VwID0gbmV3IFJvc1NlcnZlckdyb3VwKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgdnBjSWQ6IHByb3BzLnZwY0lkLFxuICAgICAgICAgICAgcmVzb3VyY2VHcm91cElkOiBwcm9wcy5yZXNvdXJjZUdyb3VwSWQsXG4gICAgICAgICAgICBzY2hlZHVsZXI6IHByb3BzLnNjaGVkdWxlcixcbiAgICAgICAgICAgIHN0aWNreVNlc3Npb25Db25maWc6IHByb3BzLnN0aWNreVNlc3Npb25Db25maWcsXG4gICAgICAgICAgICBoZWFsdGhDaGVja0NvbmZpZzogcHJvcHMuaGVhbHRoQ2hlY2tDb25maWcsXG4gICAgICAgICAgICBwcm90b2NvbDogcHJvcHMucHJvdG9jb2wsXG4gICAgICAgICAgICBzZXJ2ZXJHcm91cFR5cGU6IHByb3BzLnNlcnZlckdyb3VwVHlwZSxcbiAgICAgICAgICAgIHNlcnZlckdyb3VwTmFtZTogcHJvcHMuc2VydmVyR3JvdXBOYW1lLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc1NlcnZlckdyb3VwO1xuICAgICAgICB0aGlzLmF0dHJTZXJ2ZXJHcm91cElkID0gcm9zU2VydmVyR3JvdXAuYXR0clNlcnZlckdyb3VwSWQ7XG4gICAgfVxufVxuIl19