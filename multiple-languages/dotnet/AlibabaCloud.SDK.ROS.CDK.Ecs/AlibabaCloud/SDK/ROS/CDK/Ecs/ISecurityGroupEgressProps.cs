using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `ALIYUN::ECS::SecurityGroupEgress`.</summary>
    [JsiiInterface(nativeType: typeof(ISecurityGroupEgressProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.SecurityGroupEgressProps")]
    public interface ISecurityGroupEgressProps
    {
        /// <summary>Property ipProtocol: Ip protocol for in rule.</summary>
        [JsiiProperty(name: "ipProtocol", typeJson: "{\"primitive\":\"string\"}")]
        string IpProtocol
        {
            get;
        }

        /// <summary>Property portRange: Ip protocol relative port range.</summary>
        /// <remarks>
        /// For tcp and udp, the port rang is [1,65535], using format '1/200'For icmp|gre|all protocel, the port range should be '-1/-1'
        /// </remarks>
        [JsiiProperty(name: "portRange", typeJson: "{\"primitive\":\"string\"}")]
        string PortRange
        {
            get;
        }

        /// <summary>Property description: Description of the security group rule, [1, 512] characters.</summary>
        /// <remarks>
        /// The default is empty.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property destCidrIp: Dest CIDR Ip Address range.</summary>
        /// <remarks>
        /// Only IPV4 supported.
        /// </remarks>
        [JsiiProperty(name: "destCidrIp", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? DestCidrIp
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property destGroupId: Dest Group Id.</summary>
        [JsiiProperty(name: "destGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? DestGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property destGroupOwnerId: Dest Group Owner Account ID.</summary>
        [JsiiProperty(name: "destGroupOwnerId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? DestGroupOwnerId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ipv6DestCidrIp: Destination IPv6 CIDR address segment.</summary>
        /// <remarks>
        /// Supports IP address ranges in CIDR format and IPv6 format.
        /// Note Only VPC type IP addresses are supported.
        /// </remarks>
        [JsiiProperty(name: "ipv6DestCidrIp", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Ipv6DestCidrIp
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property nicType: Network type, could be 'internet' or 'intranet'.</summary>
        /// <remarks>
        /// Default value is internet.
        /// </remarks>
        [JsiiProperty(name: "nicType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? NicType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property policy: Authorization policies, parameter values can be: accept (accepted access), drop (denied access).</summary>
        /// <remarks>
        /// Default value is accept.
        /// </remarks>
        [JsiiProperty(name: "policy", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Policy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property priority: Authorization policies priority range[1, 100].</summary>
        [JsiiProperty(name: "priority", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? Priority
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property securityGroupId: Id of the security group.</summary>
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SecurityGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ECS::SecurityGroupEgress`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ISecurityGroupEgressProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.SecurityGroupEgressProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.ISecurityGroupEgressProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property ipProtocol: Ip protocol for in rule.</summary>
            [JsiiProperty(name: "ipProtocol", typeJson: "{\"primitive\":\"string\"}")]
            public string IpProtocol
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property portRange: Ip protocol relative port range.</summary>
            /// <remarks>
            /// For tcp and udp, the port rang is [1,65535], using format '1/200'For icmp|gre|all protocel, the port range should be '-1/-1'
            /// </remarks>
            [JsiiProperty(name: "portRange", typeJson: "{\"primitive\":\"string\"}")]
            public string PortRange
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property description: Description of the security group rule, [1, 512] characters.</summary>
            /// <remarks>
            /// The default is empty.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property destCidrIp: Dest CIDR Ip Address range.</summary>
            /// <remarks>
            /// Only IPV4 supported.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destCidrIp", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DestCidrIp
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property destGroupId: Dest Group Id.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "destGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DestGroupId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property destGroupOwnerId: Dest Group Owner Account ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "destGroupOwnerId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DestGroupOwnerId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property ipv6DestCidrIp: Destination IPv6 CIDR address segment.</summary>
            /// <remarks>
            /// Supports IP address ranges in CIDR format and IPv6 format.
            /// Note Only VPC type IP addresses are supported.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipv6DestCidrIp", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Ipv6DestCidrIp
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property nicType: Network type, could be 'internet' or 'intranet'.</summary>
            /// <remarks>
            /// Default value is internet.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "nicType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? NicType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property policy: Authorization policies, parameter values can be: accept (accepted access), drop (denied access).</summary>
            /// <remarks>
            /// Default value is accept.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "policy", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Policy
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property priority: Authorization policies priority range[1, 100].</summary>
            [JsiiOptional]
            [JsiiProperty(name: "priority", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? Priority
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property securityGroupId: Id of the security group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SecurityGroupId
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
