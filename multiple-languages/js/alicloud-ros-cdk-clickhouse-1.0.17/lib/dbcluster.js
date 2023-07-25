"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBCluster = exports.DBClusterProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const clickhouse_generated_1 = require("./clickhouse.generated");
Object.defineProperty(exports, "DBClusterProperty", { enumerable: true, get: function () { return clickhouse_generated_1.RosDBCluster; } });
/**
 * A ROS resource type:  `ALIYUN::ClickHouse::DBCluster`
 */
class DBCluster extends ros.Resource {
    /**
     * Create a new `ALIYUN::ClickHouse::DBCluster`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosDBCluster = new clickhouse_generated_1.RosDBCluster(this, id, {
            dbNodeStorageType: props.dbNodeStorageType,
            dbNodeStorage: props.dbNodeStorage,
            encryptionType: props.encryptionType,
            category: props.category,
            zoneId: props.zoneId,
            vSwitchId: props.vSwitchId,
            dbClusterDescription: props.dbClusterDescription,
            period: props.period,
            encryptionKey: props.encryptionKey,
            dbClusterNetworkType: props.dbClusterNetworkType,
            dbClusterType: props.dbClusterType,
            vpcId: props.vpcId,
            dbClusterVersion: props.dbClusterVersion,
            dbNodeCount: props.dbNodeCount,
            usedTime: props.usedTime,
            paymentType: props.paymentType === undefined || props.paymentType === null ? 'Postpaid' : props.paymentType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDBCluster;
        this.attrAliUid = rosDBCluster.attrAliUid;
        this.attrBid = rosDBCluster.attrBid;
        this.attrCategory = rosDBCluster.attrCategory;
        this.attrCommodityCode = rosDBCluster.attrCommodityCode;
        this.attrConnectionString = rosDBCluster.attrConnectionString;
        this.attrDbClusterDescription = rosDBCluster.attrDbClusterDescription;
        this.attrDbClusterId = rosDBCluster.attrDbClusterId;
        this.attrDbClusterNetworkType = rosDBCluster.attrDbClusterNetworkType;
        this.attrDbClusterType = rosDBCluster.attrDbClusterType;
        this.attrDbClusterVersion = rosDBCluster.attrDbClusterVersion;
        this.attrDbNodeClass = rosDBCluster.attrDbNodeClass;
        this.attrDbNodeCount = rosDBCluster.attrDbNodeCount;
        this.attrDbNodeStorage = rosDBCluster.attrDbNodeStorage;
        this.attrDbNodeStorageType = rosDBCluster.attrDbNodeStorageType;
        this.attrEncryptionKey = rosDBCluster.attrEncryptionKey;
        this.attrEncryptionType = rosDBCluster.attrEncryptionType;
        this.attrEngine = rosDBCluster.attrEngine;
        this.attrEngineVersion = rosDBCluster.attrEngineVersion;
        this.attrIsExpired = rosDBCluster.attrIsExpired;
        this.attrLockMode = rosDBCluster.attrLockMode;
        this.attrLockReason = rosDBCluster.attrLockReason;
        this.attrPaymentType = rosDBCluster.attrPaymentType;
        this.attrPeriod = rosDBCluster.attrPeriod;
        this.attrPort = rosDBCluster.attrPort;
        this.attrPublicConnectionString = rosDBCluster.attrPublicConnectionString;
        this.attrPublicPort = rosDBCluster.attrPublicPort;
        this.attrStorageType = rosDBCluster.attrStorageType;
        this.attrVSwitchId = rosDBCluster.attrVSwitchId;
        this.attrVpcCloudInstanceId = rosDBCluster.attrVpcCloudInstanceId;
        this.attrVpcId = rosDBCluster.attrVpcId;
        this.attrZoneId = rosDBCluster.attrZoneId;
    }
}
exports.DBCluster = DBCluster;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGJjbHVzdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGJjbHVzdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxpRUFBc0Q7QUFFN0Isa0dBRmhCLG1DQUFZLE9BRXFCO0FBK0cxQzs7R0FFRztBQUNILE1BQWEsU0FBVSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBa0t2Qzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXFCLEVBQUUsbUNBQTJDLElBQUk7UUFDaEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLFlBQVksR0FBRyxJQUFJLG1DQUFZLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUM3QyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCO1lBQzFDLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtZQUNsQyxjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7WUFDcEMsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLG9CQUFvQjtZQUNoRCxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07WUFDcEIsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhO1lBQ2xDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxvQkFBb0I7WUFDaEQsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhO1lBQ2xDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztZQUNsQixnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCO1lBQ3hDLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7WUFDeEIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxXQUFXLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXO1NBQzlHLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDO1FBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQztRQUMxQyxJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUM7UUFDcEMsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUMsWUFBWSxDQUFDO1FBQzlDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxZQUFZLENBQUMsaUJBQWlCLENBQUM7UUFDeEQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQztRQUM5RCxJQUFJLENBQUMsd0JBQXdCLEdBQUcsWUFBWSxDQUFDLHdCQUF3QixDQUFDO1FBQ3RFLElBQUksQ0FBQyxlQUFlLEdBQUcsWUFBWSxDQUFDLGVBQWUsQ0FBQztRQUNwRCxJQUFJLENBQUMsd0JBQXdCLEdBQUcsWUFBWSxDQUFDLHdCQUF3QixDQUFDO1FBQ3RFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxZQUFZLENBQUMsaUJBQWlCLENBQUM7UUFDeEQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQztRQUM5RCxJQUFJLENBQUMsZUFBZSxHQUFHLFlBQVksQ0FBQyxlQUFlLENBQUM7UUFDcEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxZQUFZLENBQUMsZUFBZSxDQUFDO1FBQ3BELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxZQUFZLENBQUMsaUJBQWlCLENBQUM7UUFDeEQsSUFBSSxDQUFDLHFCQUFxQixHQUFHLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQztRQUNoRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsWUFBWSxDQUFDLGlCQUFpQixDQUFDO1FBQ3hELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxZQUFZLENBQUMsa0JBQWtCLENBQUM7UUFDMUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxZQUFZLENBQUMsVUFBVSxDQUFDO1FBQzFDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxZQUFZLENBQUMsaUJBQWlCLENBQUM7UUFDeEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxZQUFZLENBQUMsYUFBYSxDQUFDO1FBQ2hELElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDLFlBQVksQ0FBQztRQUM5QyxJQUFJLENBQUMsY0FBYyxHQUFHLFlBQVksQ0FBQyxjQUFjLENBQUM7UUFDbEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxZQUFZLENBQUMsZUFBZSxDQUFDO1FBQ3BELElBQUksQ0FBQyxVQUFVLEdBQUcsWUFBWSxDQUFDLFVBQVUsQ0FBQztRQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUM7UUFDdEMsSUFBSSxDQUFDLDBCQUEwQixHQUFHLFlBQVksQ0FBQywwQkFBMEIsQ0FBQztRQUMxRSxJQUFJLENBQUMsY0FBYyxHQUFHLFlBQVksQ0FBQyxjQUFjLENBQUM7UUFDbEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxZQUFZLENBQUMsZUFBZSxDQUFDO1FBQ3BELElBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFDLGFBQWEsQ0FBQztRQUNoRCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsWUFBWSxDQUFDLHNCQUFzQixDQUFDO1FBQ2xFLElBQUksQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQztRQUN4QyxJQUFJLENBQUMsVUFBVSxHQUFHLFlBQVksQ0FBQyxVQUFVLENBQUM7SUFDOUMsQ0FBQztDQUNKO0FBL05ELDhCQStOQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0RCQ2x1c3RlciB9IGZyb20gJy4vY2xpY2tob3VzZS5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NEQkNsdXN0ZXIgYXMgREJDbHVzdGVyUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkNsaWNrSG91c2U6OkRCQ2x1c3RlcmBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEQkNsdXN0ZXJQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjYXRlZ29yeTogVGhlIGVkaXRpb24gb2YgdGhlIGNsdXN0ZXIuIFZhbGlkIHZhbHVlczpcbiAgICAgKiBCYXNpYzogU2luZ2xlLXJlcGxpY2EgRWRpdGlvblxuICAgICAqIEhpZ2hBdmFpbGFiaWxpdHk6IERvdWJsZS1yZXBsaWNhIEVkaXRpb25cbiAgICAgKi9cbiAgICByZWFkb25seSBjYXRlZ29yeTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGJDbHVzdGVyTmV0d29ya1R5cGU6IE5ldHdvcmsgdHlwZSBvZiB0aGUgY2x1c3RlciBpbnN0YW5jZSwgdmFsdWU6IFZQQ1xuICAgICAqL1xuICAgIHJlYWRvbmx5IGRiQ2x1c3Rlck5ldHdvcmtUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkYkNsdXN0ZXJUeXBlOiBUaGUgc3BlY2lmaWNhdGlvbiBvZiB0aGUgY2x1c3Rlci5cbiAgICAgKiBJZiB0aGUgY2x1c3RlciBpcyBvZiB0aGUgU2luZ2xlLXJlcGxpY2EgRWRpdGlvbiwgdGhlIGZvbGxvd2luZyB2YWx1ZXMgYXJlIHZhbGlkOlxuICAgICAqIFM0OiA0IGNvcmVzLCAxNiBHQi5cbiAgICAgKiBTODogOCBjb3JlcywgMzIgR0IuXG4gICAgICogUzE2OiAxNiBjb3JlcywgNjQgR0IuXG4gICAgICogUzMyOiAzMiBjb3JlcywgMTI4IEdCLlxuICAgICAqIFM2NDogNjQgY29yZXMsIDI1NiBHQi5cbiAgICAgKiBTMTA0OiAxMDQgY29yZXMsIDM4NCBHQi5cbiAgICAgKiBJZiB0aGUgY2x1c3RlciBpcyBvZiB0aGUgRG91YmxlLXJlcGxpY2EgRWRpdGlvbiwgdGhlIGZvbGxvd2luZyB2YWx1ZXMgYXJlIHZhbGlkOlxuICAgICAqIEM0OiA0IGNvcmVzLCAxNiBHQi5cbiAgICAgKiBDODogOCBjb3JlcywgMzIgR0IuXG4gICAgICogQzE2OiAxNiBjb3JlcywgNjQgR0IuXG4gICAgICogQzMyOiAzMiBjb3JlcywgMTI4IEdCLlxuICAgICAqIEM2NDogNjQgY29yZXMsIDI1NiBHQi5cbiAgICAgKiBDMTA0OiAxMDQgY29yZXMsIDM4NCBHQi5cbiAgICAgKi9cbiAgICByZWFkb25seSBkYkNsdXN0ZXJUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkYkNsdXN0ZXJWZXJzaW9uOiBWZXJzaW9uLCB2YWx1ZTogIDE5LjE1LjIuMlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRiQ2x1c3RlclZlcnNpb246IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRiTm9kZUNvdW50OiBUaGUgbnVtYmVyIG9mIG5vZGVzLlxuICAgICAqIElmIHRoZSBjbHVzdGVyIGlzIG9mIHRoZSBTaW5nbGUtcmVwbGljYSBFZGl0aW9uLCB0aGUgdmFsdWUgcmFuZ2VzIGZyb20gMSB0byA0OC5cbiAgICAgKiBJZiB0aGUgY2x1c3RlciBpcyBvZiB0aGUgRG91YmxlLXJlcGxpY2EgRWRpdGlvbiwgdGhlIHZhbHVlIHJhbmdlcyBmcm9tIDEgdG8gMjQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGJOb2RlQ291bnQ6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRiTm9kZVN0b3JhZ2U6IFRoZSBzdG9yYWdlIGNhcGFjaXR5IG9mIGEgc2luZ2xlIG5vZGUuIFZhbGlkIHZhbHVlczogMTAwIHRvIDMyMDAwLiBVbml0OiBHQi5cbiAgICAgKiBOb3RlIHNlbGYgdmFsdWUgaXMgYSBtdWx0aXBsZSBvZiAxMDAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGJOb2RlU3RvcmFnZTogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGJOb2RlU3RvcmFnZVR5cGU6IEluc3RhbmNlIG5vZGUgc3RvcmFnZSB0eXBlLiBWYWxpZCB2YWx1ZXM6ICBjbG91ZF9lc3NkLCBjbG91ZF9lZmZpY2llbmN5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRiTm9kZVN0b3JhZ2VUeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwYXltZW50VHlwZTogVGhlIGJpbGxpbmcgbWV0aG9kIG9mIHRoZSBjbHVzdGVyLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogUG9zdHBhaWQ6IHBheS1hcy15b3UtZ29cbiAgICAgKiBQcmVwYWlkOiBzdWJzY3JpcHRpb25cbiAgICAgKi9cbiAgICByZWFkb25seSBwYXltZW50VHlwZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGJDbHVzdGVyRGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgY2x1c3Rlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBkYkNsdXN0ZXJEZXNjcmlwdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGVuY3J5cHRpb25LZXk6IEtNUyBrZXkgSURcbiAgICAgKi9cbiAgICByZWFkb25seSBlbmNyeXB0aW9uS2V5Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZW5jcnlwdGlvblR5cGU6IEttcyBrZXkgdHlwZSwgb25seSBjbG91ZCBkaXNrIGVuY3J5cHRpb24gaXMgc3VwcG9ydGVkIGFuZCB0aGUgdmFsdWUgaXMgQ2xvdWREaXNrLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVuY3J5cHRpb25UeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcGVyaW9kOiBQcmVwYWlkIHRpbWUgcGVyaW9kLklmIHRoZSBwYXltZW50IHR5cGUgaXMgUHJlcGFpZCwgdGhpcyBwYXJhbWV0ZXIgaXMgbWFuZGF0b3J5LiBTcGVjaWZ5IHRoZSBwcmVwYWlkIGNsdXN0ZXIgYXMgYSB5ZWFybHkgb3IgbW9udGhseSB0eXBlLiBWYWxpZCB2YWx1ZXM6ICBZZWFyLCBNb250aC5cbiAgICAgKi9cbiAgICByZWFkb25seSBwZXJpb2Q/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB1c2VkVGltZTogVGhlIHN1YnNjcmlwdGlvbiBkdXJhdGlvbi4gVmFsaWQgdmFsdWVzOlxuICAgICAqIFdoZW4gUGVyaW9kIGlzIE1vbnRoLCBpdCBjb3VsZCBiZSBmcm9tIDEgdG8gOSwgMTIsIDI0LCAzNi5cbiAgICAgKiAgV2hlbiBQZXJpb2QgaXMgWWVhciwgaXQgY291bGQgYmUgZnJvbSAxIHRvIDMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdXNlZFRpbWU/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB2cGNJZDogVnBjSWRcbiAgICAgKi9cbiAgICByZWFkb25seSB2cGNJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHZTd2l0Y2hJZDogVlN3aXRjaElkXG4gICAgICovXG4gICAgcmVhZG9ubHkgdlN3aXRjaElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgem9uZUlkOiBab25lSWRcbiAgICAgKi9cbiAgICByZWFkb25seSB6b25lSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OkNsaWNrSG91c2U6OkRCQ2x1c3RlcmBcbiAqL1xuZXhwb3J0IGNsYXNzIERCQ2x1c3RlciBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQWxpVWlkOiBBbGlVaWRcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFsaVVpZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEJpZDogQnVzaW5lc3NJRFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQmlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQ2F0ZWdvcnk6IFRoZSBlZGl0aW9uIG9mIHRoZSBjbHVzdGVyLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ2F0ZWdvcnk6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBDb21tb2RpdHlDb2RlOiBQcm9kdWN0IENvZGVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNvbW1vZGl0eUNvZGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBDb25uZWN0aW9uU3RyaW5nOiBDb25uZWN0aW9uU3RyaW5nXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDb25uZWN0aW9uU3RyaW5nOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgREJDbHVzdGVyRGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgY2x1c3Rlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRiQ2x1c3RlckRlc2NyaXB0aW9uOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgREJDbHVzdGVySWQ6IFRoZSBpZCBvZiBEQkNsdXN0ZXJcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRiQ2x1c3RlcklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgREJDbHVzdGVyTmV0d29ya1R5cGU6IE5ldHdvcmsgdHlwZSBvZiB0aGUgY2x1c3RlciBpbnN0YW5jZSwgdmFsdWU6IFZQQ1xuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGJDbHVzdGVyTmV0d29ya1R5cGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBEQkNsdXN0ZXJUeXBlOiBUaGUgc3BlY2lmaWNhdGlvbiBvZiB0aGUgY2x1c3Rlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRiQ2x1c3RlclR5cGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBEQkNsdXN0ZXJWZXJzaW9uOiBWZXJzaW9uLCB2YWx1ZTogIDE5LjE1LjIuMlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGJDbHVzdGVyVmVyc2lvbjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIERCTm9kZUNsYXNzOiBEQk5vZGVDbGFzc1xuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGJOb2RlQ2xhc3M6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBEQk5vZGVDb3VudDogVGhlIG51bWJlciBvZiBub2Rlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRiTm9kZUNvdW50OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgREJOb2RlU3RvcmFnZTogVGhlIHN0b3JhZ2UgY2FwYWNpdHkgb2YgYSBzaW5nbGUgbm9kZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRiTm9kZVN0b3JhZ2U6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBEYk5vZGVTdG9yYWdlVHlwZTogSW5zdGFuY2Ugbm9kZSBzdG9yYWdlIHR5cGUuIFZhbGlkIHZhbHVlczogIGNsb3VkX2Vzc2QsIGNsb3VkX2VmZmljaWVuY3kuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEYk5vZGVTdG9yYWdlVHlwZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEVuY3J5cHRpb25LZXk6IEtNUyBrZXkgSURcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckVuY3J5cHRpb25LZXk6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBFbmNyeXB0aW9uVHlwZTogS21zIGtleSB0eXBlLCBvbmx5IGNsb3VkIGRpc2sgZW5jcnlwdGlvbiBpcyBzdXBwb3J0ZWQgYW5kIHRoZSB2YWx1ZSBpcyBDbG91ZERpc2suXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJFbmNyeXB0aW9uVHlwZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEVuZ2luZTogRW5naW5lXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJFbmdpbmU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBFbmdpbmVWZXJzaW9uOiBFbmdpbmVWZXJzaW9uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJFbmdpbmVWZXJzaW9uOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSXNFeHBpcmVkOiBJc0V4cGlyZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0cklzRXhwaXJlZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIExvY2tNb2RlOiBMb2NrTW9kZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTG9ja01vZGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBMb2NrUmVhc29uOiBSZWFzb24gZm9yIGxvY2tcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckxvY2tSZWFzb246IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBQYXltZW50VHlwZTogUGF5VHlwZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUGF5bWVudFR5cGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBQZXJpb2Q6IFByZXBhaWQgdGltZSBwZXJpb2QuSWYgdGhlIHBheW1lbnQgdHlwZSBpcyBQcmVwYWlkLCB0aGlzIHBhcmFtZXRlciBpcyBtYW5kYXRvcnkuIFNwZWNpZnkgdGhlIHByZXBhaWQgY2x1c3RlciBhcyBhIHllYXJseSBvciBtb250aGx5IHR5cGUuIFZhbGlkIHZhbHVlczogIFllYXIsIE1vbnRoLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUGVyaW9kOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUG9ydDogQ29ubmVjdGlvbiBwb3J0XG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQb3J0OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUHVibGljQ29ubmVjdGlvblN0cmluZzogSW50ZXJuZXQgY29ubmVjdGlvbiBhZGRyZXNzXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQdWJsaWNDb25uZWN0aW9uU3RyaW5nOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUHVibGljUG9ydDogUHVibGljUG9ydFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUHVibGljUG9ydDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFN0b3JhZ2VUeXBlOiBTdG9yYWdlVHlwZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU3RvcmFnZVR5cGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBWU3dpdGNoSWQ6IFZTd2l0Y2hJZFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVlN3aXRjaElkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgVnBjQ2xvdWRJbnN0YW5jZUlkOiBWcGNDbG91ZEluc3RhbmNlSWRcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clZwY0Nsb3VkSW5zdGFuY2VJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFZwY0lkOiBWcGNJZFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyVnBjSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBab25lSWQ6IFpvbmVJZFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyWm9uZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6Q2xpY2tIb3VzZTo6REJDbHVzdGVyYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBEQkNsdXN0ZXJQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NEQkNsdXN0ZXIgPSBuZXcgUm9zREJDbHVzdGVyKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgZGJOb2RlU3RvcmFnZVR5cGU6IHByb3BzLmRiTm9kZVN0b3JhZ2VUeXBlLFxuICAgICAgICAgICAgZGJOb2RlU3RvcmFnZTogcHJvcHMuZGJOb2RlU3RvcmFnZSxcbiAgICAgICAgICAgIGVuY3J5cHRpb25UeXBlOiBwcm9wcy5lbmNyeXB0aW9uVHlwZSxcbiAgICAgICAgICAgIGNhdGVnb3J5OiBwcm9wcy5jYXRlZ29yeSxcbiAgICAgICAgICAgIHpvbmVJZDogcHJvcHMuem9uZUlkLFxuICAgICAgICAgICAgdlN3aXRjaElkOiBwcm9wcy52U3dpdGNoSWQsXG4gICAgICAgICAgICBkYkNsdXN0ZXJEZXNjcmlwdGlvbjogcHJvcHMuZGJDbHVzdGVyRGVzY3JpcHRpb24sXG4gICAgICAgICAgICBwZXJpb2Q6IHByb3BzLnBlcmlvZCxcbiAgICAgICAgICAgIGVuY3J5cHRpb25LZXk6IHByb3BzLmVuY3J5cHRpb25LZXksXG4gICAgICAgICAgICBkYkNsdXN0ZXJOZXR3b3JrVHlwZTogcHJvcHMuZGJDbHVzdGVyTmV0d29ya1R5cGUsXG4gICAgICAgICAgICBkYkNsdXN0ZXJUeXBlOiBwcm9wcy5kYkNsdXN0ZXJUeXBlLFxuICAgICAgICAgICAgdnBjSWQ6IHByb3BzLnZwY0lkLFxuICAgICAgICAgICAgZGJDbHVzdGVyVmVyc2lvbjogcHJvcHMuZGJDbHVzdGVyVmVyc2lvbixcbiAgICAgICAgICAgIGRiTm9kZUNvdW50OiBwcm9wcy5kYk5vZGVDb3VudCxcbiAgICAgICAgICAgIHVzZWRUaW1lOiBwcm9wcy51c2VkVGltZSxcbiAgICAgICAgICAgIHBheW1lbnRUeXBlOiBwcm9wcy5wYXltZW50VHlwZSA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLnBheW1lbnRUeXBlID09PSBudWxsID8gJ1Bvc3RwYWlkJyA6IHByb3BzLnBheW1lbnRUeXBlLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0RCQ2x1c3RlcjtcbiAgICAgICAgdGhpcy5hdHRyQWxpVWlkID0gcm9zREJDbHVzdGVyLmF0dHJBbGlVaWQ7XG4gICAgICAgIHRoaXMuYXR0ckJpZCA9IHJvc0RCQ2x1c3Rlci5hdHRyQmlkO1xuICAgICAgICB0aGlzLmF0dHJDYXRlZ29yeSA9IHJvc0RCQ2x1c3Rlci5hdHRyQ2F0ZWdvcnk7XG4gICAgICAgIHRoaXMuYXR0ckNvbW1vZGl0eUNvZGUgPSByb3NEQkNsdXN0ZXIuYXR0ckNvbW1vZGl0eUNvZGU7XG4gICAgICAgIHRoaXMuYXR0ckNvbm5lY3Rpb25TdHJpbmcgPSByb3NEQkNsdXN0ZXIuYXR0ckNvbm5lY3Rpb25TdHJpbmc7XG4gICAgICAgIHRoaXMuYXR0ckRiQ2x1c3RlckRlc2NyaXB0aW9uID0gcm9zREJDbHVzdGVyLmF0dHJEYkNsdXN0ZXJEZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5hdHRyRGJDbHVzdGVySWQgPSByb3NEQkNsdXN0ZXIuYXR0ckRiQ2x1c3RlcklkO1xuICAgICAgICB0aGlzLmF0dHJEYkNsdXN0ZXJOZXR3b3JrVHlwZSA9IHJvc0RCQ2x1c3Rlci5hdHRyRGJDbHVzdGVyTmV0d29ya1R5cGU7XG4gICAgICAgIHRoaXMuYXR0ckRiQ2x1c3RlclR5cGUgPSByb3NEQkNsdXN0ZXIuYXR0ckRiQ2x1c3RlclR5cGU7XG4gICAgICAgIHRoaXMuYXR0ckRiQ2x1c3RlclZlcnNpb24gPSByb3NEQkNsdXN0ZXIuYXR0ckRiQ2x1c3RlclZlcnNpb247XG4gICAgICAgIHRoaXMuYXR0ckRiTm9kZUNsYXNzID0gcm9zREJDbHVzdGVyLmF0dHJEYk5vZGVDbGFzcztcbiAgICAgICAgdGhpcy5hdHRyRGJOb2RlQ291bnQgPSByb3NEQkNsdXN0ZXIuYXR0ckRiTm9kZUNvdW50O1xuICAgICAgICB0aGlzLmF0dHJEYk5vZGVTdG9yYWdlID0gcm9zREJDbHVzdGVyLmF0dHJEYk5vZGVTdG9yYWdlO1xuICAgICAgICB0aGlzLmF0dHJEYk5vZGVTdG9yYWdlVHlwZSA9IHJvc0RCQ2x1c3Rlci5hdHRyRGJOb2RlU3RvcmFnZVR5cGU7XG4gICAgICAgIHRoaXMuYXR0ckVuY3J5cHRpb25LZXkgPSByb3NEQkNsdXN0ZXIuYXR0ckVuY3J5cHRpb25LZXk7XG4gICAgICAgIHRoaXMuYXR0ckVuY3J5cHRpb25UeXBlID0gcm9zREJDbHVzdGVyLmF0dHJFbmNyeXB0aW9uVHlwZTtcbiAgICAgICAgdGhpcy5hdHRyRW5naW5lID0gcm9zREJDbHVzdGVyLmF0dHJFbmdpbmU7XG4gICAgICAgIHRoaXMuYXR0ckVuZ2luZVZlcnNpb24gPSByb3NEQkNsdXN0ZXIuYXR0ckVuZ2luZVZlcnNpb247XG4gICAgICAgIHRoaXMuYXR0cklzRXhwaXJlZCA9IHJvc0RCQ2x1c3Rlci5hdHRySXNFeHBpcmVkO1xuICAgICAgICB0aGlzLmF0dHJMb2NrTW9kZSA9IHJvc0RCQ2x1c3Rlci5hdHRyTG9ja01vZGU7XG4gICAgICAgIHRoaXMuYXR0ckxvY2tSZWFzb24gPSByb3NEQkNsdXN0ZXIuYXR0ckxvY2tSZWFzb247XG4gICAgICAgIHRoaXMuYXR0clBheW1lbnRUeXBlID0gcm9zREJDbHVzdGVyLmF0dHJQYXltZW50VHlwZTtcbiAgICAgICAgdGhpcy5hdHRyUGVyaW9kID0gcm9zREJDbHVzdGVyLmF0dHJQZXJpb2Q7XG4gICAgICAgIHRoaXMuYXR0clBvcnQgPSByb3NEQkNsdXN0ZXIuYXR0clBvcnQ7XG4gICAgICAgIHRoaXMuYXR0clB1YmxpY0Nvbm5lY3Rpb25TdHJpbmcgPSByb3NEQkNsdXN0ZXIuYXR0clB1YmxpY0Nvbm5lY3Rpb25TdHJpbmc7XG4gICAgICAgIHRoaXMuYXR0clB1YmxpY1BvcnQgPSByb3NEQkNsdXN0ZXIuYXR0clB1YmxpY1BvcnQ7XG4gICAgICAgIHRoaXMuYXR0clN0b3JhZ2VUeXBlID0gcm9zREJDbHVzdGVyLmF0dHJTdG9yYWdlVHlwZTtcbiAgICAgICAgdGhpcy5hdHRyVlN3aXRjaElkID0gcm9zREJDbHVzdGVyLmF0dHJWU3dpdGNoSWQ7XG4gICAgICAgIHRoaXMuYXR0clZwY0Nsb3VkSW5zdGFuY2VJZCA9IHJvc0RCQ2x1c3Rlci5hdHRyVnBjQ2xvdWRJbnN0YW5jZUlkO1xuICAgICAgICB0aGlzLmF0dHJWcGNJZCA9IHJvc0RCQ2x1c3Rlci5hdHRyVnBjSWQ7XG4gICAgICAgIHRoaXMuYXR0clpvbmVJZCA9IHJvc0RCQ2x1c3Rlci5hdHRyWm9uZUlkO1xuICAgIH1cbn1cbiJdfQ==