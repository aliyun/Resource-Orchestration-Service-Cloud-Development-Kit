using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>A ROS template type:  `ALIYUN::ECS::SecurityGroup`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Ecs.RosSecurityGroup), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosSecurityGroup", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ecs.RosSecurityGroupProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosSecurityGroup : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::ECS::SecurityGroup`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosSecurityGroup(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ecs.IRosSecurityGroupProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosSecurityGroup(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosSecurityGroup(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "renderProperties", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}", parametersJson: "[{\"name\":\"props\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]", isOverride: true)]
        protected override System.Collections.Generic.IDictionary<string, object> RenderProperties(System.Collections.Generic.IDictionary<string, object> props)
        {
            return InvokeInstanceMethod<System.Collections.Generic.IDictionary<string, object>>(new System.Type[]{typeof(System.Collections.Generic.IDictionary<string, object>)}, new object[]{props})!;
        }

        /// <summary>The resource type name for this resource class.</summary>
        [JsiiProperty(name: "ROS_RESOURCE_TYPE_NAME", typeJson: "{\"primitive\":\"string\"}")]
        public static string ROS_RESOURCE_TYPE_NAME
        {
            get;
        }
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Ecs.RosSecurityGroup))!;

        /// <remarks>
        /// <strong>Attribute</strong>: SecurityGroupId: generated security group id for security group.
        /// </remarks>
        [JsiiProperty(name: "attrSecurityGroupId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrSecurityGroupId
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.TagManager\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.TagManager Tags
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.TagManager>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Description of the security group, [2, 256] characters. Do not fill or empty, the default is empty.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? Description
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: Resource group id.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? ResourceGroupId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: securityGroupEgress: egress rules for the security group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityGroupEgress", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosSecurityGroup.SecurityGroupEgressProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? SecurityGroupEgress
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: securityGroupIngress: Ingress rules for the security group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityGroupIngress", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ecs.RosSecurityGroup.SecurityGroupIngressProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? SecurityGroupIngress
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: securityGroupName: Display name of the security group, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityGroupName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? SecurityGroupName
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: securityGroupType: The type of the security group. Valid values:
        /// normal: basic security group
        /// enterprise: advanced security group
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityGroupType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? SecurityGroupType
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: Physical ID of the VPC.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? VpcId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(ISecurityGroupEgressProperty), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosSecurityGroup.SecurityGroupEgressProperty")]
        public interface ISecurityGroupEgressProperty
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
            /// <strong>Property</strong>: destCidrIp: Dest CIDR Ip Address range. Only IPV4 supported.
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

            /// <remarks>
            /// <strong>Property</strong>: destGroupId: Dest Group Id
            /// </remarks>
            [JsiiProperty(name: "destGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? DestGroupId
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: destGroupOwnerId: Dest Group Owner Account ID
            /// </remarks>
            [JsiiProperty(name: "destGroupOwnerId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? DestGroupOwnerId
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: ipv6DestCidrIp: Destination IPv6 CIDR address segment. Supports IP address ranges in CIDR format and IPv6 format.
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

            [JsiiTypeProxy(nativeType: typeof(ISecurityGroupEgressProperty), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosSecurityGroup.SecurityGroupEgressProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.RosSecurityGroup.ISecurityGroupEgressProperty
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
                /// <strong>Property</strong>: destCidrIp: Dest CIDR Ip Address range. Only IPV4 supported.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "destCidrIp", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? DestCidrIp
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: destGroupId: Dest Group Id
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "destGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? DestGroupId
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: destGroupOwnerId: Dest Group Owner Account ID
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "destGroupOwnerId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? DestGroupOwnerId
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: ipv6DestCidrIp: Destination IPv6 CIDR address segment. Supports IP address ranges in CIDR format and IPv6 format.
                /// Note Only VPC type IP addresses are supported.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ipv6DestCidrIp", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Ipv6DestCidrIp
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
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.RosSecurityGroup.SecurityGroupEgressProperty")]
        public class SecurityGroupEgressProperty : AlibabaCloud.SDK.ROS.CDK.Ecs.RosSecurityGroup.ISecurityGroupEgressProperty
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
        [JsiiInterface(nativeType: typeof(ISecurityGroupIngressProperty), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosSecurityGroup.SecurityGroupIngressProperty")]
        public interface ISecurityGroupIngressProperty
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

            [JsiiTypeProxy(nativeType: typeof(ISecurityGroupIngressProperty), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosSecurityGroup.SecurityGroupIngressProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.RosSecurityGroup.ISecurityGroupIngressProperty
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
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.RosSecurityGroup.SecurityGroupIngressProperty")]
        public class SecurityGroupIngressProperty : AlibabaCloud.SDK.ROS.CDK.Ecs.RosSecurityGroup.ISecurityGroupIngressProperty
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
            /// <strong>Property</strong>: ipv6SourceCidrIp: Source IPv6 CIDR address segment. Supports IP address ranges in CIDR format and IPv6 format.
            /// Note Only VPC type IP addresses are supported.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipv6SourceCidrIp", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Ipv6SourceCidrIp
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

            /// <remarks>
            /// <strong>Property</strong>: sourceCidrIp: Source CIDR Ip Address range. Only IPV4 supported.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceCidrIp", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? SourceCidrIp
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceGroupId: Source Group Id
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? SourceGroupId
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceGroupOwnerId: Source Group Owner Account ID
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceGroupOwnerId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? SourceGroupOwnerId
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: sourcePortRange: The range of the ports enabled by the source security group for the transport layer protocol. Valid values: TCP/UDP: Value range: 1 to 65535. The start port and the end port are separated by a slash (/). Correct example: 1/200. Incorrect example: 200/1.ICMP: -1/-1.GRE: -1/-1.ALL: -1/-1.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourcePortRange", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? SourcePortRange
            {
                get;
                set;
            }
        }
    }
}
