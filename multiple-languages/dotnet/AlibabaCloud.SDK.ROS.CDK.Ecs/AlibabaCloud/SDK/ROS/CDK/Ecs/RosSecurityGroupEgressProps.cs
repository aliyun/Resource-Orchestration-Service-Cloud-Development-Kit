using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ECS::SecurityGroupEgress`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.RosSecurityGroupEgressProps")]
    public class RosSecurityGroupEgressProps : AlibabaCloud.SDK.ROS.CDK.Ecs.IRosSecurityGroupEgressProps
    {
        /// <remarks>
        /// <strong>Property</strong>: ipProtocol: Ip protocol for in rule.
        /// </remarks>
        [JsiiProperty(name: "ipProtocol", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string IpProtocol
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: portRange: Ip protocol relative port range. For tcp and udp, the port rang is [1,65535], using format '1/200'For icmp|gre|all protocel, the port range should be '-1/-1'
        /// </remarks>
        [JsiiProperty(name: "portRange", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string PortRange
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Description of the security group rule, [1, 512] characters. The default is empty.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: destCidrIp: Dest CIDR Ip Address range. Only IPV4 supported.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "destCidrIp", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DestCidrIp
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: destGroupId: Dest Group Id
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "destGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DestGroupId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: destGroupOwnerId: Dest Group Owner Account ID
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "destGroupOwnerId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DestGroupOwnerId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: ipv6DestCidrIp: Destination IPv6 CIDR address segment. Supports IP address ranges in CIDR format and IPv6 format.
        /// Note Only VPC type IP addresses are supported.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ipv6DestCidrIp", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Ipv6DestCidrIp
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: nicType: Network type, could be 'internet' or 'intranet'. Default value is internet.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "nicType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? NicType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: policy: Authorization policies, parameter values can be: accept (accepted access), drop (denied access). Default value is accept.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "policy", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Policy
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: priority: Authorization policies priority range[1, 100]
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "priority", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? Priority
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: securityGroupId: Id of the security group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SecurityGroupId
        {
            get;
            set;
        }
    }
}
