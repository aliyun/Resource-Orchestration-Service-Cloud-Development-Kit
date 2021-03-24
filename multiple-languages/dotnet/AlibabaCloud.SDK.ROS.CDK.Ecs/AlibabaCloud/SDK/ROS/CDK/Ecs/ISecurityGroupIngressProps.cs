using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `ALIYUN::ECS::SecurityGroupIngress`.</summary>
    [JsiiInterface(nativeType: typeof(ISecurityGroupIngressProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.SecurityGroupIngressProps")]
    public interface ISecurityGroupIngressProps
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

        /// <summary>Property ipv6SourceCidrIp: Source IPv6 CIDR address segment.</summary>
        /// <remarks>
        /// Supports IP address ranges in CIDR format and IPv6 format.
        /// Note Only VPC type IP addresses are supported.
        /// </remarks>
        [JsiiProperty(name: "ipv6SourceCidrIp", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Ipv6SourceCidrIp
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

        /// <summary>Property sourceCidrIp: Source CIDR Ip Address range.</summary>
        /// <remarks>
        /// Only IPV4 supported.
        /// </remarks>
        [JsiiProperty(name: "sourceCidrIp", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SourceCidrIp
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sourceGroupId: Source Group Id.</summary>
        [JsiiProperty(name: "sourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sourceGroupOwnerId: Source Group Owner Account ID.</summary>
        [JsiiProperty(name: "sourceGroupOwnerId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SourceGroupOwnerId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sourcePortRange: The range of the ports enabled by the source security group for the transport layer protocol.</summary>
        /// <remarks>
        /// Valid values: TCP/UDP: Value range: 1 to 65535. The start port and the end port are separated by a slash (/). Correct example: 1/200. Incorrect example: 200/1.ICMP: -1/-1.GRE: -1/-1.ALL: -1/-1.
        /// </remarks>
        [JsiiProperty(name: "sourcePortRange", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SourcePortRange
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ECS::SecurityGroupIngress`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ISecurityGroupIngressProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.SecurityGroupIngressProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.ISecurityGroupIngressProps
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

            /// <summary>Property ipv6SourceCidrIp: Source IPv6 CIDR address segment.</summary>
            /// <remarks>
            /// Supports IP address ranges in CIDR format and IPv6 format.
            /// Note Only VPC type IP addresses are supported.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipv6SourceCidrIp", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Ipv6SourceCidrIp
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

            /// <summary>Property sourceCidrIp: Source CIDR Ip Address range.</summary>
            /// <remarks>
            /// Only IPV4 supported.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceCidrIp", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SourceCidrIp
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property sourceGroupId: Source Group Id.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "sourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SourceGroupId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property sourceGroupOwnerId: Source Group Owner Account ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "sourceGroupOwnerId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SourceGroupOwnerId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property sourcePortRange: The range of the ports enabled by the source security group for the transport layer protocol.</summary>
            /// <remarks>
            /// Valid values: TCP/UDP: Value range: 1 to 65535. The start port and the end port are separated by a slash (/). Correct example: 1/200. Incorrect example: 200/1.ICMP: -1/-1.GRE: -1/-1.ALL: -1/-1.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourcePortRange", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SourcePortRange
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
