using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `ALIYUN::ECS::SecurityGroupIngress`.</summary>
    [JsiiInterface(nativeType: typeof(IRosSecurityGroupIngressProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosSecurityGroupIngressProps")]
    public interface IRosSecurityGroupIngressProps
    {
        /// <remarks>
        /// <strong>Property</strong>: ipProtocol: Ip protocol for in rule.
        /// </remarks>
        [JsiiProperty(name: "ipProtocol", typeJson: "{\"primitive\":\"string\"}")]
        string IpProtocol
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: portRange: Ip protocol relative port range. For tcp and udp, the port rang is [1,65535], using format '1/200'For icmp|gre|all protocel, the port range should be '-1/-1'
        /// </remarks>
        [JsiiProperty(name: "portRange", typeJson: "{\"primitive\":\"string\"}")]
        string PortRange
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Description of the security group rule, [1, 512] characters. The default is empty.
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

        /// <remarks>
        /// <strong>Property</strong>: ipv6SourceCidrIp: Source IPv6 CIDR address segment. Supports IP address ranges in CIDR format and IPv6 format.
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

        /// <remarks>
        /// <strong>Property</strong>: nicType: Network type, could be 'internet' or 'intranet'. Default value is internet.
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

        /// <remarks>
        /// <strong>Property</strong>: policy: Authorization policies, parameter values can be: accept (accepted access), drop (denied access). Default value is accept.
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

        /// <remarks>
        /// <strong>Property</strong>: priority: Authorization policies priority range[1, 100]
        /// </remarks>
        [JsiiProperty(name: "priority", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? Priority
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: securityGroupId: Id of the security group.
        /// </remarks>
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SecurityGroupId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceCidrIp: Source CIDR Ip Address range. Only IPV4 supported.
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

        /// <remarks>
        /// <strong>Property</strong>: sourceGroupId: Source Group Id
        /// </remarks>
        [JsiiProperty(name: "sourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceGroupOwnerId: Source Group Owner Account ID
        /// </remarks>
        [JsiiProperty(name: "sourceGroupOwnerId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SourceGroupOwnerId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: sourcePortRange: The range of the ports enabled by the source security group for the transport layer protocol. Valid values: TCP/UDP: Value range: 1 to 65535. The start port and the end port are separated by a slash (/). Correct example: 1/200. Incorrect example: 200/1.ICMP: -1/-1.GRE: -1/-1.ALL: -1/-1.
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
        [JsiiTypeProxy(nativeType: typeof(IRosSecurityGroupIngressProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosSecurityGroupIngressProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IRosSecurityGroupIngressProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: ipProtocol: Ip protocol for in rule.
            /// </remarks>
            [JsiiProperty(name: "ipProtocol", typeJson: "{\"primitive\":\"string\"}")]
            public string IpProtocol
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: portRange: Ip protocol relative port range. For tcp and udp, the port rang is [1,65535], using format '1/200'For icmp|gre|all protocel, the port range should be '-1/-1'
            /// </remarks>
            [JsiiProperty(name: "portRange", typeJson: "{\"primitive\":\"string\"}")]
            public string PortRange
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Description of the security group rule, [1, 512] characters. The default is empty.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ipv6SourceCidrIp: Source IPv6 CIDR address segment. Supports IP address ranges in CIDR format and IPv6 format.
            /// Note Only VPC type IP addresses are supported.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipv6SourceCidrIp", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Ipv6SourceCidrIp
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: nicType: Network type, could be 'internet' or 'intranet'. Default value is internet.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "nicType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? NicType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: policy: Authorization policies, parameter values can be: accept (accepted access), drop (denied access). Default value is accept.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "policy", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Policy
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: priority: Authorization policies priority range[1, 100]
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "priority", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? Priority
            {
                get => GetInstanceProperty<double?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: securityGroupId: Id of the security group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SecurityGroupId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceCidrIp: Source CIDR Ip Address range. Only IPV4 supported.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceCidrIp", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SourceCidrIp
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceGroupId: Source Group Id
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SourceGroupId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceGroupOwnerId: Source Group Owner Account ID
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceGroupOwnerId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SourceGroupOwnerId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sourcePortRange: The range of the ports enabled by the source security group for the transport layer protocol. Valid values: TCP/UDP: Value range: 1 to 65535. The start port and the end port are separated by a slash (/). Correct example: 1/200. Incorrect example: 200/1.ICMP: -1/-1.GRE: -1/-1.ALL: -1/-1.
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
