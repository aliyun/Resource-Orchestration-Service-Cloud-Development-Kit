using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ECS::SecurityGroupEgress`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.SecurityGroupEgressProps")]
    public class SecurityGroupEgressProps : AlibabaCloud.SDK.ROS.CDK.Ecs.ISecurityGroupEgressProps
    {
        /// <summary>Property ipProtocol: Ip protocol for in rule.</summary>
        [JsiiProperty(name: "ipProtocol", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string IpProtocol
        {
            get;
            set;
        }

        /// <summary>Property portRange: Ip protocol relative port range.</summary>
        /// <remarks>
        /// For tcp and udp, the port rang is [1,65535], using format '1/200'For icmp|gre|all protocel, the port range should be '-1/-1'
        /// </remarks>
        [JsiiProperty(name: "portRange", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string PortRange
        {
            get;
            set;
        }

        /// <summary>Property description: Description of the security group rule, [1, 512] characters.</summary>
        /// <remarks>
        /// The default is empty.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <summary>Property destCidrIp: Dest CIDR Ip Address range.</summary>
        /// <remarks>
        /// Only IPV4 supported.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "destCidrIp", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DestCidrIp
        {
            get;
            set;
        }

        /// <summary>Property destGroupId: Dest Group Id.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "destGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DestGroupId
        {
            get;
            set;
        }

        /// <summary>Property destGroupOwnerId: Dest Group Owner Account ID.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "destGroupOwnerId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DestGroupOwnerId
        {
            get;
            set;
        }

        /// <summary>Property ipv6DestCidrIp: Destination IPv6 CIDR address segment.</summary>
        /// <remarks>
        /// Supports IP address ranges in CIDR format and IPv6 format.
        /// Note Only VPC type IP addresses are supported.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ipv6DestCidrIp", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Ipv6DestCidrIp
        {
            get;
            set;
        }

        /// <summary>Property nicType: Network type, could be 'internet' or 'intranet'.</summary>
        /// <remarks>
        /// Default value is internet.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "nicType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? NicType
        {
            get;
            set;
        }

        /// <summary>Property policy: Authorization policies, parameter values can be: accept (accepted access), drop (denied access).</summary>
        /// <remarks>
        /// Default value is accept.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "policy", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Policy
        {
            get;
            set;
        }

        /// <summary>Property priority: Authorization policies priority range[1, 100].</summary>
        [JsiiOptional]
        [JsiiProperty(name: "priority", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? Priority
        {
            get;
            set;
        }

        /// <summary>Property securityGroupId: Id of the security group.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SecurityGroupId
        {
            get;
            set;
        }
    }
}
