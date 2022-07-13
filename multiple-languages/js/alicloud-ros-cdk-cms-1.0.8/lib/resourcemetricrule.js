"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceMetricRule = exports.ResourceMetricRuleProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const cms_generated_1 = require("./cms.generated");
Object.defineProperty(exports, "ResourceMetricRuleProperty", { enumerable: true, get: function () { return cms_generated_1.RosResourceMetricRule; } });
/**
 * A ROS resource type:  `ALIYUN::CMS::ResourceMetricRule`
 */
class ResourceMetricRule extends ros.Resource {
    /**
     * Create a new `ALIYUN::CMS::ResourceMetricRule`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosResourceMetricRule = new cms_generated_1.RosResourceMetricRule(this, id, {
            noEffectiveInterval: props.noEffectiveInterval,
            contactGroups: props.contactGroups,
            silenceTime: props.silenceTime,
            ruleId: props.ruleId,
            period: props.period,
            prometheus: props.prometheus,
            labels: props.labels,
            effectiveInterval: props.effectiveInterval,
            noDataPolicy: props.noDataPolicy,
            namespace: props.namespace,
            metricName: props.metricName,
            deletionForce: props.deletionForce === undefined || props.deletionForce === null ? false : props.deletionForce,
            escalations: props.escalations,
            emailSubject: props.emailSubject,
            compositeExpression: props.compositeExpression,
            webhook: props.webhook,
            resources: props.resources,
            ruleName: props.ruleName,
            interval: props.interval,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosResourceMetricRule;
        this.attrRuleId = rosResourceMetricRule.attrRuleId;
        this.attrRuleName = rosResourceMetricRule.attrRuleName;
    }
}
exports.ResourceMetricRule = ResourceMetricRule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2VtZXRyaWNydWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVzb3VyY2VtZXRyaWNydWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBd0Q7QUFFdEIsMkdBRnpCLHFDQUFxQixPQUU4QjtBQTJINUQ7O0dBRUc7QUFDSCxNQUFhLGtCQUFtQixTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBaUJoRDs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQThCLEVBQUUsbUNBQTJDLElBQUk7UUFDekgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLHFCQUFxQixHQUFHLElBQUkscUNBQXFCLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUMvRCxtQkFBbUIsRUFBRSxLQUFLLENBQUMsbUJBQW1CO1lBQzlDLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtZQUNsQyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUI7WUFDMUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1lBQ2hDLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxhQUFhLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFhO1lBQzlHLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLG1CQUFtQjtZQUM5QyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN4QixRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7U0FDM0IsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxxQkFBcUIsQ0FBQztRQUN0QyxJQUFJLENBQUMsVUFBVSxHQUFHLHFCQUFxQixDQUFDLFVBQVUsQ0FBQztRQUNuRCxJQUFJLENBQUMsWUFBWSxHQUFHLHFCQUFxQixDQUFDLFlBQVksQ0FBQztJQUMzRCxDQUFDO0NBQ0o7QUFwREQsZ0RBb0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zUmVzb3VyY2VNZXRyaWNSdWxlIH0gZnJvbSAnLi9jbXMuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zUmVzb3VyY2VNZXRyaWNSdWxlIGFzIFJlc291cmNlTWV0cmljUnVsZVByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpDTVM6OlJlc291cmNlTWV0cmljUnVsZWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSZXNvdXJjZU1ldHJpY1J1bGVQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjb250YWN0R3JvdXBzOiBUaGUgYWxlcnQgY29udGFjdCBncm91cC5cbiAgICAgKiBUaGUgYWxlcnQgbm90aWZpY2F0aW9ucyBhcmUgc2VudCB0byB0aGUgY29udGFjdHMgdGhhdCBiZWxvbmcgdG8gdGhlIGFsZXJ0IGNvbnRhY3QgZ3JvdXAuXG4gICAgICogTm90ZTogQW4gYWxlcnQgY29udGFjdCBncm91cCBjYW4gY29udGFpbiBvbmUgb3IgbW9yZSBhbGVydCBjb250YWN0cy4gRm9yIGluZm9ybWF0aW9uIGFib3V0IGhvdyB0byBjcmVhdGUgYWxlcnQgY29udGFjdHMgYW5kIGFsZXJ0IGNvbnRhY3QgZ3JvdXBzLCBzZWUgUHV0Q29udGFjdCBhbmQgUHV0Q29udGFjdEdyb3VwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNvbnRhY3RHcm91cHM6IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBlc2NhbGF0aW9uczogWW91IG11c3Qgc2VsZWN0IGF0IGxlYXN0IG9uZSBvZiB0aGUgQ3JpdGljYWwsIFdhcm4sIGFuZCBJbmZvIGFsZXJ0IGxldmVscy5cbiAgICAgKi9cbiAgICByZWFkb25seSBlc2NhbGF0aW9uczogUm9zUmVzb3VyY2VNZXRyaWNSdWxlLkVzY2FsYXRpb25zUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBtZXRyaWNOYW1lOiBUaGUgbmFtZSBvZiB0aGUgbWV0cmljLlxuICAgICAqIEZvciBpbmZvcm1hdGlvbiBhYm91dCBob3cgdG8gcXVlcnkgdGhlIG5hbWUgb2YgYSBtZXRyaWMsIHNlZSBBcHBlbmRpeCAxOiBNZXRyaWNzLlxuICAgICAqIE5vdGU6IElmIHlvdSBjcmVhdGUgYSBQcm9tZXRoZXVzIGFsZXJ0IHJ1bGUgZm9yIEh5YnJpZCBDbG91ZCBNb25pdG9yaW5nLCB5b3UgbXVzdCBzZXQgdGhpcyBwYXJhbWV0ZXIgdG8gdGhlIG5hbWUgb2YgdGhlIG5hbWVzcGFjZS4gRm9yIGluZm9ybWF0aW9uIGFib3V0IGhvdyB0byBvYnRhaW4gdGhlIG5hbWUgb2YgYSBuYW1lc3BhY2UsIHNlZSBEZXNjcmliZUh5YnJpZE1vbml0b3JOYW1lc3BhY2VMaXN0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1ldHJpY05hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG5hbWVzcGFjZTogVGhlIG5hbWVzcGFjZSBvZiB0aGUgY2xvdWQgc2VydmljZS5cbiAgICAgKiBGb3IgaW5mb3JtYXRpb24gYWJvdXQgaG93IHRvIHF1ZXJ5IHRoZSBuYW1lc3BhY2Ugb2YgYSBjbG91ZCBzZXJ2aWNlLCBBcHBlbmRpeCAxOiBNZXRyaWNzLlxuICAgICAqIE5vdGU6IElmIHlvdSBjcmVhdGUgYSBQcm9tZXRoZXVzIGFsZXJ0IHJ1bGUgZm9yIEh5YnJpZCBDbG91ZCBNb25pdG9yaW5nLCB5b3UgbXVzdCBzZXQgdGhpcyBwYXJhbWV0ZXIgdG8gYWNzX3Byb21ldGhldXMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmFtZXNwYWNlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByZXNvdXJjZXM6IFRoZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgcmVzb3VyY2UuXG4gICAgICogRXhhbXBsZXM6IFt7XCJpbnN0YW5jZUlkXCI6XCJpLXVmNmo5MXIzNHJud2F3b28qKioqXCJ9XSBhbmQgW3tcInVzZXJJZFwiOlwiMTAwOTMxODk2NTQyKioqKlwifV0uXG4gICAgICogRm9yIGluZm9ybWF0aW9uIGFib3V0IHRoZSBzdXBwb3J0ZWQgZGltZW5zaW9ucyB0aGF0IGFyZSB1c2VkIHRvIHF1ZXJ5IHJlc291cmNlcywgc2VlIEFwcGVuZGl4IDE6IE1ldHJpY3MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzb3VyY2VzOiBBcnJheTx7IFtrZXk6IHN0cmluZ106IGFueSB9PiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNvbXBvc2l0ZUV4cHJlc3Npb246IFRoZSB0cmlnZ2VyIGNvbmRpdGlvbnMgZm9yIG11bHRpcGxlIG1ldHJpY3MuXG4gICAgICogTm90ZTogVGhlIHRyaWdnZXIgY29uZGl0aW9ucyBmb3IgYSBzaW5nbGUgbWV0cmljIGFuZCBtdWx0aXBsZSBtZXRyaWNzIGFyZSBtdXR1YWxseSBleGNsdXNpdmUuIFlvdSBjYW5ub3Qgc3BlY2lmeSB0cmlnZ2VyIGNvbmRpdGlvbnMgZm9yIGEgc2luZ2xlIG1ldHJpYyBhbmQgbXVsdGlwbGUgbWV0cmljcyBhdCB0aGUgc2FtZSB0aW1lLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNvbXBvc2l0ZUV4cHJlc3Npb24/OiBSb3NSZXNvdXJjZU1ldHJpY1J1bGUuQ29tcG9zaXRlRXhwcmVzc2lvblByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVsZXRpb25Gb3JjZTogV2hldGhlciB0byBkZWxldGUgcnVsZSBldmVuIGlmIGl0IGlzIG5vdCBjcmVhdGVkIGJ5IFJPUy4gRGVmYXVsdCBpcyBmYWxzZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlbGV0aW9uRm9yY2U/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZWZmZWN0aXZlSW50ZXJ2YWw6IFRoZSB0aW1lIHBlcmlvZCBkdXJpbmcgd2hpY2ggdGhlIGFsZXJ0IHJ1bGUgaXMgZWZmZWN0aXZlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVmZmVjdGl2ZUludGVydmFsPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZW1haWxTdWJqZWN0OiBUaGUgc3ViamVjdCBvZiB0aGUgYWxlcnQgbm90aWZpY2F0aW9uIGVtYWlsLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVtYWlsU3ViamVjdD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGludGVydmFsOiBUaGUgaW50ZXJ2YWwgYXQgd2hpY2ggdGhlIGFsZXJ0IGlzIHRyaWdnZXJlZC4gVW5pdDogc2Vjb25kcy5cbiAgICAgKiBOb3RlOiBGb3IgaW5mb3JtYXRpb24gYWJvdXQgaG93IHRvIHF1ZXJ5IHRoZSBzdGF0aXN0aWNhbCBwZXJpb2Qgb2YgYSBtZXRyaWMsIHNlZSBBcHBlbmRpeCAxOiBNZXRyaWNzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGludGVydmFsPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbGFiZWxzOlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGxhYmVscz86IEFycmF5PFJvc1Jlc291cmNlTWV0cmljUnVsZS5MYWJlbHNQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBub0RhdGFQb2xpY3k6IFRoZSBwcm9jZXNzaW5nIG1ldGhvZCBvZiBhbGVydHMgd2hlbiBubyBtb25pdG9yaW5nIGRhdGEgaXMgZm91bmQuIFZhbGlkIHZhbHVlczpcbiAgICAgKiAtIEtFRVBfTEFTVF9TVEFURSAoZGVmYXVsdCB2YWx1ZSk6IE5vIG9wZXJhdGlvbiBpcyBwZXJmb3JtZWQuXG4gICAgICogLSBJTlNVRkZJQ0lFTlRfREFUQTogQW4gYWxlcnQgd2hvc2UgY29udGVudCBpcyBcIkluc3VmZmljaWVudCBkYXRhXCIgaXMgdHJpZ2dlcmVkLlxuICAgICAqIC0gT0s6IFRoZSBzdGF0dXMgaXMgY29uc2lkZXJlZCBub3JtYWwuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbm9EYXRhUG9saWN5Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbm9FZmZlY3RpdmVJbnRlcnZhbDogVGhlIHRpbWUgcGVyaW9kIGR1cmluZyB3aGljaCB0aGUgYWxlcnQgcnVsZSBpcyBpbmVmZmVjdGl2ZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBub0VmZmVjdGl2ZUludGVydmFsPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcGVyaW9kOiBUaGUgc3RhdGlzdGljYWwgcGVyaW9kIG9mIHRoZSBtZXRyaWMuIFVuaXQ6IHNlY29uZHMuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIHRoZSBpbnRlcnZhbCBhdCB3aGljaCB0aGUgbW9uaXRvcmluZyBkYXRhIG9mIHRoZSBtZXRyaWMgaXMgY29sbGVjdGVkLlxuICAgICAqIE5vdGU6IEZvciBpbmZvcm1hdGlvbiBhYm91dCBob3cgdG8gcXVlcnkgdGhlIHN0YXRpc3RpY2FsIHBlcmlvZCBvZiBhIG1ldHJpYywgc2VlIEFwcGVuZGl4IDE6IE1ldHJpY3MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGVyaW9kPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcHJvbWV0aGV1czogVGhlIFByb21ldGhldXMgYWxlcnQgcnVsZS5cbiAgICAgKiBOb3RlOiBUaGlzIHBhcmFtZXRlciBpcyByZXF1aXJlZCBvbmx5IHdoZW4geW91IGNyZWF0ZSBhIFByb21ldGhldXMgYWxlcnQgcnVsZSBmb3IgSHlicmlkIENsb3VkIE1vbml0b3JpbmcuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHJvbWV0aGV1cz86IFJvc1Jlc291cmNlTWV0cmljUnVsZS5Qcm9tZXRoZXVzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBydWxlSWQ6IFRoZSBJRCBvZiB0aGUgYWxlcnQgcnVsZS4gSWYgbm90IHNwZWNpZmllZCwgUk9TIHdpbGwgZ2VuZXJhdGUgb25lLlxuICAgICAqIFlvdSBjYW4gc3BlY2lmeSBhIG5ldyBJRCBvciB0aGUgSUQgb2YgYW4gZXhpc3RpbmcgYWxlcnQgcnVsZS4gRm9yIGluZm9ybWF0aW9uIGFib3V0IGhvdyB0byBxdWVyeSB0aGUgSUQgb2YgYW4gYWxlcnQgcnVsZSwgc2VlIERlc2NyaWJlTWV0cmljUnVsZUxpc3QuXG4gICAgICogTm90ZTogSWYgeW91IHNwZWNpZnkgYSBuZXcgSUQsIGEgdGhyZXNob2xkLXRyaWdnZXJlZCBhbGVydCBydWxlIGlzIGNyZWF0ZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcnVsZUlkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcnVsZU5hbWU6IFRoZSBuYW1lIG9mIHRoZSBhbGVydCBydWxlLiBJZiBub3Qgc3BlY2lmaWVkIGFuZCB0aGUgcnVsZSBpcyBjcmVhdGVkIGJ5IFJPUywgZGVmYXVsdCB0byBSdWxlSWQuXG4gICAgICogWW91IGNhbiBzcGVjaWZ5IGEgbmV3IG5hbWUgb3IgdGhlIG5hbWUgb2YgYW4gZXhpc3RpbmcgYWxlcnQgcnVsZS4gRm9yIGluZm9ybWF0aW9uIGFib3V0IGhvdyB0byBxdWVyeSB0aGUgbmFtZSBvZiBhbiBhbGVydCBydWxlLCBzZWUgRGVzY3JpYmVNZXRyaWNSdWxlTGlzdC5cbiAgICAgKiBOb3RlOiBJZiB5b3Ugc3BlY2lmeSBhIG5ldyBuYW1lLCBhIHRocmVzaG9sZC10cmlnZ2VyZWQgYWxlcnQgcnVsZSBpcyBjcmVhdGVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJ1bGVOYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc2lsZW5jZVRpbWU6IFRoZSBtdXRlIHBlcmlvZCBkdXJpbmcgd2hpY2ggbmV3IGFsZXJ0cyBhcmUgbm90IHNlbnQgZXZlbiBpZiB0aGUgdHJpZ2dlciBjb25kaXRpb25zIGFyZSBtZXQuIFVuaXQ6IHNlY29uZHMuIERlZmF1bHQgdmFsdWU6IDg2NDAwLlxuICAgICAqIE5vdGU6IElmIGFuIGFsZXJ0IGlzIG5vdCBjbGVhcmVkIHdpdGhpbiB0aGUgbXV0ZSBwZXJpb2QsIGEgbmV3IGFsZXJ0IG5vdGlmaWNhdGlvbiBpcyBzZW50IHdoZW4gdGhlIG11dGUgcGVyaW9kIGVuZHMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2lsZW5jZVRpbWU/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB3ZWJob29rOiBUaGUgY2FsbGJhY2sgVVJMIHRvIHdoaWNoIGEgUE9TVCByZXF1ZXN0IGlzIHNlbnQgd2hlbiBhbiBhbGVydCBpcyB0cmlnZ2VyZWQgYmFzZWQgb24gdGhlIGFsZXJ0IHJ1bGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgd2ViaG9vaz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6Q01TOjpSZXNvdXJjZU1ldHJpY1J1bGVgXG4gKi9cbmV4cG9ydCBjbGFzcyBSZXNvdXJjZU1ldHJpY1J1bGUgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFJ1bGVJZDogVGhlIElEIG9mIHRoZSBhbGVydCBydWxlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUnVsZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUnVsZU5hbWU6IFRoZSBuYW1lIG9mIHRoZSBhbGVydCBydWxlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUnVsZU5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpDTVM6OlJlc291cmNlTWV0cmljUnVsZWAuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUmVzb3VyY2VNZXRyaWNSdWxlUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zUmVzb3VyY2VNZXRyaWNSdWxlID0gbmV3IFJvc1Jlc291cmNlTWV0cmljUnVsZSh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIG5vRWZmZWN0aXZlSW50ZXJ2YWw6IHByb3BzLm5vRWZmZWN0aXZlSW50ZXJ2YWwsXG4gICAgICAgICAgICBjb250YWN0R3JvdXBzOiBwcm9wcy5jb250YWN0R3JvdXBzLFxuICAgICAgICAgICAgc2lsZW5jZVRpbWU6IHByb3BzLnNpbGVuY2VUaW1lLFxuICAgICAgICAgICAgcnVsZUlkOiBwcm9wcy5ydWxlSWQsXG4gICAgICAgICAgICBwZXJpb2Q6IHByb3BzLnBlcmlvZCxcbiAgICAgICAgICAgIHByb21ldGhldXM6IHByb3BzLnByb21ldGhldXMsXG4gICAgICAgICAgICBsYWJlbHM6IHByb3BzLmxhYmVscyxcbiAgICAgICAgICAgIGVmZmVjdGl2ZUludGVydmFsOiBwcm9wcy5lZmZlY3RpdmVJbnRlcnZhbCxcbiAgICAgICAgICAgIG5vRGF0YVBvbGljeTogcHJvcHMubm9EYXRhUG9saWN5LFxuICAgICAgICAgICAgbmFtZXNwYWNlOiBwcm9wcy5uYW1lc3BhY2UsXG4gICAgICAgICAgICBtZXRyaWNOYW1lOiBwcm9wcy5tZXRyaWNOYW1lLFxuICAgICAgICAgICAgZGVsZXRpb25Gb3JjZTogcHJvcHMuZGVsZXRpb25Gb3JjZSA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLmRlbGV0aW9uRm9yY2UgPT09IG51bGwgPyBmYWxzZSA6IHByb3BzLmRlbGV0aW9uRm9yY2UsXG4gICAgICAgICAgICBlc2NhbGF0aW9uczogcHJvcHMuZXNjYWxhdGlvbnMsXG4gICAgICAgICAgICBlbWFpbFN1YmplY3Q6IHByb3BzLmVtYWlsU3ViamVjdCxcbiAgICAgICAgICAgIGNvbXBvc2l0ZUV4cHJlc3Npb246IHByb3BzLmNvbXBvc2l0ZUV4cHJlc3Npb24sXG4gICAgICAgICAgICB3ZWJob29rOiBwcm9wcy53ZWJob29rLFxuICAgICAgICAgICAgcmVzb3VyY2VzOiBwcm9wcy5yZXNvdXJjZXMsXG4gICAgICAgICAgICBydWxlTmFtZTogcHJvcHMucnVsZU5hbWUsXG4gICAgICAgICAgICBpbnRlcnZhbDogcHJvcHMuaW50ZXJ2YWwsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zUmVzb3VyY2VNZXRyaWNSdWxlO1xuICAgICAgICB0aGlzLmF0dHJSdWxlSWQgPSByb3NSZXNvdXJjZU1ldHJpY1J1bGUuYXR0clJ1bGVJZDtcbiAgICAgICAgdGhpcy5hdHRyUnVsZU5hbWUgPSByb3NSZXNvdXJjZU1ldHJpY1J1bGUuYXR0clJ1bGVOYW1lO1xuICAgIH1cbn1cbiJdfQ==