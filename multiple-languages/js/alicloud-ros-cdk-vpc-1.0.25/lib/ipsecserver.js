"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IpsecServer = exports.IpsecServerProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const vpc_generated_1 = require("./vpc.generated");
Object.defineProperty(exports, "IpsecServerProperty", { enumerable: true, get: function () { return vpc_generated_1.RosIpsecServer; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::IpsecServer`, which is used to create an IPsec-VPN server.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosIpsecServer`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipsecserver
 */
class IpsecServer extends ros.Resource {
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
        const rosIpsecServer = new vpc_generated_1.RosIpsecServer(this, id, {
            localSubnet: props.localSubnet,
            effectImmediately: props.effectImmediately,
            clientIpPool: props.clientIpPool,
            vpnGatewayId: props.vpnGatewayId,
            ipsecConfig: props.ipsecConfig,
            psk: props.psk,
            ikeConfig: props.ikeConfig,
            ipsecServerName: props.ipsecServerName,
            pskEnabled: props.pskEnabled,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosIpsecServer;
        this.attrIpsecServerId = rosIpsecServer.attrIpsecServerId;
        this.attrIpsecServerName = rosIpsecServer.attrIpsecServerName;
    }
}
exports.IpsecServer = IpsecServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXBzZWNzZXJ2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpcHNlY3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQWlEO0FBRXRCLG9HQUZsQiw4QkFBYyxPQUV1QjtBQXVEOUM7Ozs7R0FJRztBQUNILE1BQWEsV0FBWSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBZ0J6Qzs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUF1QixFQUFFLG1DQUEyQyxJQUFJO1FBQ2xILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFFekUsTUFBTSxjQUFjLEdBQUcsSUFBSSw4QkFBYyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDakQsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUI7WUFDMUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1lBQ2hDLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHO1lBQ2QsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7U0FDL0IsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUM7UUFDL0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQztRQUMxRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsY0FBYyxDQUFDLG1CQUFtQixDQUFDO0lBQ2xFLENBQUM7Q0FDSjtBQTNDRCxrQ0EyQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NJcHNlY1NlcnZlciB9IGZyb20gJy4vdnBjLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0lwc2VjU2VydmVyIGFzIElwc2VjU2VydmVyUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBJcHNlY1NlcnZlcmAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi12cGMtaXBzZWNzZXJ2ZXJcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJcHNlY1NlcnZlclByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNsaWVudElwUG9vbDogQ2xpZW50IG5ldHdvcmsgc2VnbWVudCByZWZlcnMgdG8gdGhlIGFkZHJlc3Mgc2VnbWVudCB0aGF0IGFzc2lnbnMgYWNjZXNzIGFkZHJlc3NlcyB0byB0aGUgdmlydHVhbCBuZXR3b3JrIGNhcmQgb2YgdGhlIGNsaWVudC4gTm90ZTogVGhlIGNsaWVudCBuZXR3b3JrIHNlZ21lbnQgY2Fubm90IGNvbmZsaWN0IHdpdGggdGhlIFZQQyBzaWRlIG5ldHdvcmsgc2VnbWVudC5cbiAgICAgKi9cbiAgICByZWFkb25seSBjbGllbnRJcFBvb2w6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGxvY2FsU3VibmV0OiBUaGUgbG9jYWwgbmV0d29yayBzZWdtZW50IHJlZmVycyB0byB0aGUgbmV0d29yayBzZWdtZW50IG9uIHRoZSBWUEMgc2lkZSB0aGF0IG5lZWRzIHRvIGJlIGludGVyY29ubmVjdGVkIHdpdGggdGhlIGNsaWVudCBuZXR3b3JrIHNlZ21lbnQuIFVzZSBoYWxmLXdpZHRoIGNvbW1hcyAoLCkgdG8gc2VwYXJhdGUgbXVsdGlwbGUgbmV0d29yayBzZWdtZW50cywgZm9yIGV4YW1wbGU6IDE5Mi4xNjguMS4wXFwvMjQsMTkyLjE2OC4yLjBcXC8yNC5cbiAgICAgKi9cbiAgICByZWFkb25seSBsb2NhbFN1Ym5ldDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdnBuR2F0ZXdheUlkOiBWUE4gZ2F0ZXdheSBpbnN0YW5jZSBJRC5cbiAgICAgKi9cbiAgICByZWFkb25seSB2cG5HYXRld2F5SWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGVmZmVjdEltbWVkaWF0ZWx5OiB0cnVlOiBBcHBseSB0aGUgbmV3IGNvbmZpZ3VyYXRpb24gYW5kIHRyaWdnZXIgYSByZWNvbm5lY3Rpb24gaW1tZWRpYXRlbHkuIFxuICAgICAqIGZhbHNlOiBUcmlnZ2VyIGEgcmVjb25uZWN0aW9uIG9ubHkgd2hlbiBuZXR3b3JrIHRyYWZmaWMgb2NjdXJzLiAoVGhlIHJlY29ubmVjdGlvbiBtYXkgY2F1c2UgdGhlIG5ldHdvcmsgdG8gYmUgdW5hdmFpbGFibGUgZm9yIGEgYnJpZWYgbW9tZW50KVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGVmZmVjdEltbWVkaWF0ZWx5PzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGlrZUNvbmZpZzogTmVnb3RpYXRpb24gcGFyYW1ldGVyIGNvbmZpZ3VyYXRpb24gaW4gdGhlIGZpcnN0IHBoYXNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGlrZUNvbmZpZz86IFJvc0lwc2VjU2VydmVyLklrZUNvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaXBzZWNDb25maWc6IE5lZ290aWF0aW9uIHBhcmFtZXRlciBjb25maWd1cmF0aW9uIGluIHRoZSBzZWNvbmQgcGhhc2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaXBzZWNDb25maWc/OiBSb3NJcHNlY1NlcnZlci5JcHNlY0NvbmZpZ1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaXBzZWNTZXJ2ZXJOYW1lOiBUaGUgdmFsdWUgbXVzdCBiZSAyIHRvIDEyOCBjaGFyYWN0ZXJzIGluIGxlbmd0aCBhbmQgc3RhcnQgd2l0aCBhIGxldHRlciBvciBDaGluZXNlIGNoYXJhY3Rlci4gSXQgY2FuIGNvbnRhaW4gZGlnaXRzLCB1bmRlcnNjb3JlcyAoXyksIGFuZCBoeXBoZW5zICgtKS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpcHNlY1NlcnZlck5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwc2s6IFByZS1TaGFyZWQga2V5LiBVc2VkIGZvciBpZGVudGl0eSBhdXRoZW50aWNhdGlvbiBiZXR3ZWVuIHRoZSBWUE4gZ2F0ZXdheSBhbmQgdGhlIGNsaWVudC4gQSAxNi1iaXQgcmFuZG9tIHN0cmluZyBpcyByYW5kb21seSBnZW5lcmF0ZWQgYnkgZGVmYXVsdCwgb3IgeW91IGNhbiBtYW51YWxseSBzcGVjaWZ5IHRoZSBrZXkuIFRoZSBsZW5ndGggaXMgbGltaXRlZCB0byAxMDAgY2hhcmFjdGVycy5cbiAgICAgKi9cbiAgICByZWFkb25seSBwc2s/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwc2tFbmFibGVkOiBXaGV0aGVyIHRvIGVuYWJsZSB0aGUgcHJlLXNoYXJlZCBrZXkgYXV0aGVudGljYXRpb24gbWV0aG9kLiBPbmx5IHRoZSB2YWx1ZSBpcyB0cnVlLCB3aGljaCBtZWFucyB0aGF0IHRoZSBwcmUtc2hhcmVkIGtleSBhdXRoZW50aWNhdGlvbiBtb2RlIGlzIGVuYWJsZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcHNrRW5hYmxlZD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBlbmNhcHN1bGF0ZXMgYW5kIGV4dGVuZHMgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OlZQQzo6SXBzZWNTZXJ2ZXJgLCB3aGljaCBpcyB1c2VkIHRvIGNyZWF0ZSBhbiBJUHNlYy1WUE4gc2VydmVyLlxuICogQE5vdGUgVGhpcyBjbGFzcyBtYXkgaGF2ZSBzb21lIG5ldyBmdW5jdGlvbnMgdG8gZmFjaWxpdGF0ZSBkZXZlbG9wbWVudCwgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgY2xhc3MgaW5zdGVhZCBvZiBgUm9zSXBzZWNTZXJ2ZXJgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi12cGMtaXBzZWNzZXJ2ZXJcbiAqL1xuZXhwb3J0IGNsYXNzIElwc2VjU2VydmVyIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBJcHNlY1NlcnZlclByb3BzO1xuICAgIHByb3RlY3RlZCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBJcHNlY1NlcnZlcklkOiBJUHNlYyBzZXJ2ZXIgSUQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJcHNlY1NlcnZlcklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSXBzZWNTZXJ2ZXJOYW1lOiBJUHNlYyBzZXJ2ZXIgbmFtZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0cklwc2VjU2VydmVyTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IElwc2VjU2VydmVyUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcblxuICAgICAgICBjb25zdCByb3NJcHNlY1NlcnZlciA9IG5ldyBSb3NJcHNlY1NlcnZlcih0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGxvY2FsU3VibmV0OiBwcm9wcy5sb2NhbFN1Ym5ldCxcbiAgICAgICAgICAgIGVmZmVjdEltbWVkaWF0ZWx5OiBwcm9wcy5lZmZlY3RJbW1lZGlhdGVseSxcbiAgICAgICAgICAgIGNsaWVudElwUG9vbDogcHJvcHMuY2xpZW50SXBQb29sLFxuICAgICAgICAgICAgdnBuR2F0ZXdheUlkOiBwcm9wcy52cG5HYXRld2F5SWQsXG4gICAgICAgICAgICBpcHNlY0NvbmZpZzogcHJvcHMuaXBzZWNDb25maWcsXG4gICAgICAgICAgICBwc2s6IHByb3BzLnBzayxcbiAgICAgICAgICAgIGlrZUNvbmZpZzogcHJvcHMuaWtlQ29uZmlnLFxuICAgICAgICAgICAgaXBzZWNTZXJ2ZXJOYW1lOiBwcm9wcy5pcHNlY1NlcnZlck5hbWUsXG4gICAgICAgICAgICBwc2tFbmFibGVkOiBwcm9wcy5wc2tFbmFibGVkLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0lwc2VjU2VydmVyO1xuICAgICAgICB0aGlzLmF0dHJJcHNlY1NlcnZlcklkID0gcm9zSXBzZWNTZXJ2ZXIuYXR0cklwc2VjU2VydmVySWQ7XG4gICAgICAgIHRoaXMuYXR0cklwc2VjU2VydmVyTmFtZSA9IHJvc0lwc2VjU2VydmVyLmF0dHJJcHNlY1NlcnZlck5hbWU7XG4gICAgfVxufVxuIl19