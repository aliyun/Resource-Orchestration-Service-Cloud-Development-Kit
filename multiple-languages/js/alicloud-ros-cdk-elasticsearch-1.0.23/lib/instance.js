"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instance = exports.InstanceProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const elasticsearch_generated_1 = require("./elasticsearch.generated");
Object.defineProperty(exports, "InstanceProperty", { enumerable: true, get: function () { return elasticsearch_generated_1.RosInstance; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ElasticSearch::Instance`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-elasticsearch-instance
 */
class Instance extends ros.Resource {
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
        const rosInstance = new elasticsearch_generated_1.RosInstance(this, id, {
            masterNode: props.masterNode,
            description: props.description,
            kibanaNode: props.kibanaNode,
            enableKibanaPrivate: props.enableKibanaPrivate,
            zoneId: props.zoneId,
            resourceGroupId: props.resourceGroupId,
            publicWhitelist: props.publicWhitelist,
            instanceChargeType: props.instanceChargeType === undefined || props.instanceChargeType === null ? 'PostPaid' : props.instanceChargeType,
            enableKibanaPublic: props.enableKibanaPublic,
            vSwitchId: props.vSwitchId,
            period: props.period === undefined || props.period === null ? 1 : props.period,
            enablePublic: props.enablePublic,
            privateWhitelist: props.privateWhitelist,
            version: props.version,
            dataNode: props.dataNode,
            kibanaWhitelist: props.kibanaWhitelist,
            ymlConfig: props.ymlConfig,
            tags: props.tags,
            periodUnit: props.periodUnit,
            zoneCount: props.zoneCount,
            password: props.password,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrDomain = rosInstance.attrDomain;
        this.attrInstanceChargeType = rosInstance.attrInstanceChargeType;
        this.attrInstanceId = rosInstance.attrInstanceId;
        this.attrKibanaDomain = rosInstance.attrKibanaDomain;
        this.attrKibanaPort = rosInstance.attrKibanaPort;
        this.attrPort = rosInstance.attrPort;
        this.attrPublicDomain = rosInstance.attrPublicDomain;
        this.attrStatus = rosInstance.attrStatus;
        this.attrVSwitchId = rosInstance.attrVSwitchId;
        this.attrVersion = rosInstance.attrVersion;
    }
}
exports.Instance = Instance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnN0YW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsdUVBQXdEO0FBRWhDLGlHQUZmLHFDQUFXLE9BRW9CO0FBb0h4Qzs7OztHQUlHO0FBQ0gsTUFBYSxRQUFTLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUF3RHRDOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQW9CLEVBQUUsbUNBQTJDLElBQUk7UUFDL0csS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUV6RSxNQUFNLFdBQVcsR0FBRyxJQUFJLHFDQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUMzQyxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1QixtQkFBbUIsRUFBRSxLQUFLLENBQUMsbUJBQW1CO1lBQzlDLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxrQkFBa0IsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLGtCQUFrQixLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsa0JBQWtCO1lBQ3ZJLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxrQkFBa0I7WUFDNUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTTtZQUM5RSxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQjtZQUN4QyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1lBQ2hCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1QixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1NBQzNCLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQztRQUN6QyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsV0FBVyxDQUFDLHNCQUFzQixDQUFDO1FBQ2pFLElBQUksQ0FBQyxjQUFjLEdBQUcsV0FBVyxDQUFDLGNBQWMsQ0FBQztRQUNqRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsV0FBVyxDQUFDLGdCQUFnQixDQUFDO1FBQ3JELElBQUksQ0FBQyxjQUFjLEdBQUcsV0FBVyxDQUFDLGNBQWMsQ0FBQztRQUNqRCxJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUM7UUFDckMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNyRCxJQUFJLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUM7UUFDekMsSUFBSSxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUMsYUFBYSxDQUFDO1FBQy9DLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQztJQUMvQyxDQUFDO0NBQ0o7QUF2R0QsNEJBdUdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zSW5zdGFuY2UgfSBmcm9tICcuL2VsYXN0aWNzZWFyY2guZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zSW5zdGFuY2UgYXMgSW5zdGFuY2VQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEluc3RhbmNlYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWVsYXN0aWNzZWFyY2gtaW5zdGFuY2VcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbnN0YW5jZVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRhdGFOb2RlOiBUaGUgRWxhc3RpY3NlYXJjaCBjbHVzdGVyJ3MgZGF0YSBub2RlIHNldHRpbmcuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGF0YU5vZGU6IFJvc0luc3RhbmNlLkRhdGFOb2RlUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwYXNzd29yZDogVGhlIHBhc3N3b3JkIG9mIHRoZSBpbnN0YW5jZS4gVGhlIHBhc3N3b3JkIGNhbiBiZSA4IHRvIDMyIGNoYXJhY3RlcnMgaW4gbGVuZ3RoIGFuZCBtdXN0IGNvbnRhaW4gdGhyZWUgb2YgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOiB1cHBlcmNhc2UgbGV0dGVycywgbG93ZXJjYXNlIGxldHRlcnMsIG51bWJlcnMsIGFuZCBzcGVjaWFsIGNoYXJhY3RlcnMgKCFAIyQlJiooKV8rLT0pLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBhc3N3b3JkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB2ZXJzaW9uOiBFbGFzdGljc2VhcmNoIHZlcnNpb24uIFN1cHBvcnRlZCB2YWx1ZXM6IDUuNS4zX3dpdGhfWC1QYWNrLCA2LjNfd2l0aF9YLVBhY2ssIDYuN193aXRoX1gtUGFjaywgNy40X3dpdGhfWC1QYWNrLCA2LjgsIDcuNCwgNy43IGFuZCBzbyBvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSB2ZXJzaW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB2U3dpdGNoSWQ6IFRoZSBJRCBvZiBWU3dpdGNoLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZTd2l0Y2hJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiBpbnN0YW5jZS4gSXQgYSBzdHJpbmcgb2YgMCB0byAzMCBjaGFyYWN0ZXJzLiBJdCBjYW4gY29udGFpbiBudW1iZXJzLCBsZXR0ZXJzLCB1bmRlcnNjb3JlcywgKF8pIGFuZCBoeXBoZW5zICgtKS4gSXQgbXVzdCBzdGFydCB3aXRoIGEgbGV0dGVyLCBhIG51bWJlciBvciBDaGluZXNlIGNoYXJhY3Rlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGVuYWJsZUtpYmFuYVByaXZhdGU6IEVuYWJsZXMgb3IgZGlzYWJsZXMgaW50cmFuZXQgYWNjZXNzIHRvIEtpYmFuYS5cbiAgICAgKi9cbiAgICByZWFkb25seSBlbmFibGVLaWJhbmFQcml2YXRlPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGVuYWJsZUtpYmFuYVB1YmxpYzogRW5hYmxlcyBvciBkaXNhYmxlcyBJbnRlcm5ldCBhY2Nlc3MgdG8gS2liYW5hLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVuYWJsZUtpYmFuYVB1YmxpYz86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBlbmFibGVQdWJsaWM6IFdoZXRoZXIgZW5hYmxlIHB1YmxpYyBhY2Nlc3MuIElmIHByb3BlcnRpZXMgaXMgdHJ1ZSwgd2lsbCBhbGxvY2F0ZSBwdWJsaWMgYWRkcmVzcy5EZWZhdWx0OiBmYWxzZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBlbmFibGVQdWJsaWM/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW5zdGFuY2VDaGFyZ2VUeXBlOiBWYWxpZCB2YWx1ZXMgYXJlIFByZVBhaWQsIFBvc3RQYWlkLCBEZWZhdWx0IHRvIFBvc3RQYWlkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlQ2hhcmdlVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGtpYmFuYU5vZGU6IFRoZSBkZWRpY2F0ZWQga2liYW5hIG5vZGUgc2V0dGluZy5cbiAgICAgKi9cbiAgICByZWFkb25seSBraWJhbmFOb2RlPzogUm9zSW5zdGFuY2UuS2liYW5hTm9kZVByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkga2liYW5hV2hpdGVsaXN0OiBTZXQgdGhlIEtpYmFuYSdzIElQIHdoaXRlbGlzdCBpbiBpbnRlcm5ldCBuZXR3b3JrLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGtpYmFuYVdoaXRlbGlzdD86IEFycmF5PGFueSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBtYXN0ZXJOb2RlOiBUaGUgZGVkaWNhdGVkIG1hc3RlciBub2RlIHNldHRpbmcuIElmIHNwZWNpZmllZCwgZGVkaWNhdGVkIG1hc3RlciBub2RlIHdpbGwgYmUgY3JlYXRlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBtYXN0ZXJOb2RlPzogUm9zSW5zdGFuY2UuTWFzdGVyTm9kZVByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcGVyaW9kOiBUaGUgZHVyYXRpb24gdGhhdCB5b3Ugd2lsbCBidXkgRWxhc3RpY3NlYXJjaCBpbnN0YW5jZS4gSXQgaXMgdmFsaWQgd2hlbiBpbnN0YW5jZV9jaGFyZ2VfdHlwZSBpcyBQcmVQYWlkLiBVbml0IGlzIE1vbnRoLCBpdCBjb3VsZCBiZSBmcm9tIDEgdG8gOSBvciAxMiwgMjQsIDM2LCA0OCwgNjAuIFVuaXQgaXMgWWVhciwgaXQgY291bGQgYmUgZnJvbSAxIHRvIDMuIERlZmF1bHQgdmFsdWUgaXMgMS5cbiAgICAgKi9cbiAgICByZWFkb25seSBwZXJpb2Q/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwZXJpb2RVbml0OiBVbml0IG9mIHByZXBhaWQgdGltZSBwZXJpb2QsIGl0IGNvdWxkIGJlIE1vbnRoXFwvWWVhci4gRGVmYXVsdCB2YWx1ZSBpcyBNb250aC5cbiAgICAgKi9cbiAgICByZWFkb25seSBwZXJpb2RVbml0Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcHJpdmF0ZVdoaXRlbGlzdDogU2V0IHRoZSBpbnN0YW5jZSdzIElQIHdoaXRlbGlzdCBpbiBWUEMgbmV0d29yay5cbiAgICAgKi9cbiAgICByZWFkb25seSBwcml2YXRlV2hpdGVsaXN0PzogQXJyYXk8YW55IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHB1YmxpY1doaXRlbGlzdDogU2V0IHRoZSBpbnN0YW5jZSdzIElQIHdoaXRlbGlzdCBpbiBJbnRlcm5ldC4gVGhlIEFsbG9jYXRlUHVibGljQWRkcmVzcyBzaG91bGQgYmUgdHJ1ZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBwdWJsaWNXaGl0ZWxpc3Q/OiBBcnJheTxhbnkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcmVzb3VyY2VHcm91cElkOiBUaGUgSUQgb2YgdGhlIHJlc291cmNlIGdyb3VwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlc291cmNlR3JvdXBJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRhZ3M6IFRhZ3MgdG8gYXR0YWNoIHRvIGluc3RhbmNlLiBNYXggc3VwcG9ydCAyMCB0YWdzIHRvIGFkZCBkdXJpbmcgY3JlYXRlIGluc3RhbmNlLiBFYWNoIHRhZyB3aXRoIHR3byBwcm9wZXJ0aWVzIEtleSBhbmQgVmFsdWUsIGFuZCBLZXkgaXMgcmVxdWlyZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFncz86IFJvc0luc3RhbmNlLlRhZ3NQcm9wZXJ0eVtdO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgeW1sQ29uZmlnOiBJbiB0aGUgWU1MIENvbmZpZ3VyYXRpb24gc2VjdGlvbiBvZiB0aGUgQ2x1c3RlciBcbiAgICAgKiBDb25maWd1cmF0aW9uIHBhZ2Ugb2YgeW91ciBBbGliYWJhIENsb3VkIEVsYXN0aWNzZWFyY2ggY2x1c3RlciwgXG4gICAgICogeW91IGNhbiBlbmFibGUgdGhlIEF1dG8gSW5kZXhpbmcsIEF1ZGl0IExvZyBJbmRleGluZywgb3IgV2F0Y2hlciBmZWF0dXJlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHltbENvbmZpZz86IFJvc0luc3RhbmNlLllNTENvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgem9uZUNvdW50OiB1bmRlZmluZWRcbiAgICAgKi9cbiAgICByZWFkb25seSB6b25lQ291bnQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB6b25lSWQ6IFRoZSB6b25lIGlkIG9mIGVsYXN0aWNzZWFyY2guXG4gICAgICovXG4gICAgcmVhZG9ubHkgem9uZUlkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgZW5jYXBzdWxhdGVzIGFuZCBleHRlbmRzIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpFbGFzdGljU2VhcmNoOjpJbnN0YW5jZWAuXG4gKiBATm90ZSBUaGlzIGNsYXNzIG1heSBoYXZlIHNvbWUgbmV3IGZ1bmN0aW9ucyB0byBmYWNpbGl0YXRlIGRldmVsb3BtZW50LCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBjbGFzcyBpbnN0ZWFkIG9mIGBSb3NJbnN0YW5jZWBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWVsYXN0aWNzZWFyY2gtaW5zdGFuY2VcbiAqL1xuZXhwb3J0IGNsYXNzIEluc3RhbmNlIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBJbnN0YW5jZVByb3BzO1xuICAgIHByb3RlY3RlZCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBEb21haW46IEluc3RhbmNlIGNvbm5lY3Rpb24gZG9tYWluIChvbmx5IFZQQyBuZXR3b3JrIGFjY2VzcyBzdXBwb3J0ZWQpLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRG9tYWluOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSW5zdGFuY2VDaGFyZ2VUeXBlOiBJbnN0YW5jZSBjaGFyZ2UgdHlwZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckluc3RhbmNlQ2hhcmdlVHlwZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEluc3RhbmNlSWQ6IFRoZSBJRCBvZiB0aGUgRWxhc3RpY3NlYXJjaCBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckluc3RhbmNlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBLaWJhbmFEb21haW46IEtpYmFuYSBjb25zb2xlIGRvbWFpbiAoSW50ZXJuZXQgYWNjZXNzIHN1cHBvcnRlZCkuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJLaWJhbmFEb21haW46IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBLaWJhbmFQb3J0OiBLaWJhbmEgY29uc29sZSBwb3J0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyS2liYW5hUG9ydDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFBvcnQ6ICBJbnN0YW5jZSBjb25uZWN0aW9uIHBvcnQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQb3J0OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUHVibGljRG9tYWluOiBJbnN0YW5jZSBwdWJsaWMgY29ubmVjdGlvbiBkb21haW4uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQdWJsaWNEb21haW46IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBTdGF0dXM6IFRoZSBFbGFzdGljc2VhcmNoIGluc3RhbmNlIHN0YXR1cy4gSW5jbHVkZXMgYWN0aXZlLCBhY3RpdmF0aW5nLCBpbmFjdGl2ZS4gU29tZSBvcGVyYXRpb25zIGFyZSBkZW5pZWQgd2hlbiBzdGF0dXMgaXMgbm90IGFjdGl2ZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clN0YXR1czogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFZTd2l0Y2hJZDogVGhlIElEIG9mIFZTd2l0Y2guXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJWU3dpdGNoSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBWZXJzaW9uOiBFbGFzdGljc2VhcmNoIHZlcnNpb24uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJWZXJzaW9uOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogSW5zdGFuY2VQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuXG4gICAgICAgIGNvbnN0IHJvc0luc3RhbmNlID0gbmV3IFJvc0luc3RhbmNlKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgbWFzdGVyTm9kZTogcHJvcHMubWFzdGVyTm9kZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBwcm9wcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGtpYmFuYU5vZGU6IHByb3BzLmtpYmFuYU5vZGUsXG4gICAgICAgICAgICBlbmFibGVLaWJhbmFQcml2YXRlOiBwcm9wcy5lbmFibGVLaWJhbmFQcml2YXRlLFxuICAgICAgICAgICAgem9uZUlkOiBwcm9wcy56b25lSWQsXG4gICAgICAgICAgICByZXNvdXJjZUdyb3VwSWQ6IHByb3BzLnJlc291cmNlR3JvdXBJZCxcbiAgICAgICAgICAgIHB1YmxpY1doaXRlbGlzdDogcHJvcHMucHVibGljV2hpdGVsaXN0LFxuICAgICAgICAgICAgaW5zdGFuY2VDaGFyZ2VUeXBlOiBwcm9wcy5pbnN0YW5jZUNoYXJnZVR5cGUgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5pbnN0YW5jZUNoYXJnZVR5cGUgPT09IG51bGwgPyAnUG9zdFBhaWQnIDogcHJvcHMuaW5zdGFuY2VDaGFyZ2VUeXBlLFxuICAgICAgICAgICAgZW5hYmxlS2liYW5hUHVibGljOiBwcm9wcy5lbmFibGVLaWJhbmFQdWJsaWMsXG4gICAgICAgICAgICB2U3dpdGNoSWQ6IHByb3BzLnZTd2l0Y2hJZCxcbiAgICAgICAgICAgIHBlcmlvZDogcHJvcHMucGVyaW9kID09PSB1bmRlZmluZWQgfHwgcHJvcHMucGVyaW9kID09PSBudWxsID8gMSA6IHByb3BzLnBlcmlvZCxcbiAgICAgICAgICAgIGVuYWJsZVB1YmxpYzogcHJvcHMuZW5hYmxlUHVibGljLFxuICAgICAgICAgICAgcHJpdmF0ZVdoaXRlbGlzdDogcHJvcHMucHJpdmF0ZVdoaXRlbGlzdCxcbiAgICAgICAgICAgIHZlcnNpb246IHByb3BzLnZlcnNpb24sXG4gICAgICAgICAgICBkYXRhTm9kZTogcHJvcHMuZGF0YU5vZGUsXG4gICAgICAgICAgICBraWJhbmFXaGl0ZWxpc3Q6IHByb3BzLmtpYmFuYVdoaXRlbGlzdCxcbiAgICAgICAgICAgIHltbENvbmZpZzogcHJvcHMueW1sQ29uZmlnLFxuICAgICAgICAgICAgdGFnczogcHJvcHMudGFncyxcbiAgICAgICAgICAgIHBlcmlvZFVuaXQ6IHByb3BzLnBlcmlvZFVuaXQsXG4gICAgICAgICAgICB6b25lQ291bnQ6IHByb3BzLnpvbmVDb3VudCxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwcm9wcy5wYXNzd29yZCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NJbnN0YW5jZTtcbiAgICAgICAgdGhpcy5hdHRyRG9tYWluID0gcm9zSW5zdGFuY2UuYXR0ckRvbWFpbjtcbiAgICAgICAgdGhpcy5hdHRySW5zdGFuY2VDaGFyZ2VUeXBlID0gcm9zSW5zdGFuY2UuYXR0ckluc3RhbmNlQ2hhcmdlVHlwZTtcbiAgICAgICAgdGhpcy5hdHRySW5zdGFuY2VJZCA9IHJvc0luc3RhbmNlLmF0dHJJbnN0YW5jZUlkO1xuICAgICAgICB0aGlzLmF0dHJLaWJhbmFEb21haW4gPSByb3NJbnN0YW5jZS5hdHRyS2liYW5hRG9tYWluO1xuICAgICAgICB0aGlzLmF0dHJLaWJhbmFQb3J0ID0gcm9zSW5zdGFuY2UuYXR0cktpYmFuYVBvcnQ7XG4gICAgICAgIHRoaXMuYXR0clBvcnQgPSByb3NJbnN0YW5jZS5hdHRyUG9ydDtcbiAgICAgICAgdGhpcy5hdHRyUHVibGljRG9tYWluID0gcm9zSW5zdGFuY2UuYXR0clB1YmxpY0RvbWFpbjtcbiAgICAgICAgdGhpcy5hdHRyU3RhdHVzID0gcm9zSW5zdGFuY2UuYXR0clN0YXR1cztcbiAgICAgICAgdGhpcy5hdHRyVlN3aXRjaElkID0gcm9zSW5zdGFuY2UuYXR0clZTd2l0Y2hJZDtcbiAgICAgICAgdGhpcy5hdHRyVmVyc2lvbiA9IHJvc0luc3RhbmNlLmF0dHJWZXJzaW9uO1xuICAgIH1cbn1cbiJdfQ==