using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>A ROS template type:  `ALIYUN::VPC::NetworkAcl`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Vpc.RosNetworkAcl), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosNetworkAcl", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-vpc.RosNetworkAclProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosNetworkAcl : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::VPC::NetworkAcl`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosNetworkAcl(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Vpc.IRosNetworkAclProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosNetworkAcl(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosNetworkAcl(DeputyProps props): base(props)
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Vpc.RosNetworkAcl))!;

        /// <remarks>
        /// <strong>Attribute</strong>: NetworkAclEntryName: The name of the inbound rule.
        /// </remarks>
        [JsiiProperty(name: "attrNetworkAclEntryName", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrNetworkAclEntryName
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: NetworkAclId: The ID of the network ACL.
        /// </remarks>
        [JsiiProperty(name: "attrNetworkAclId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrNetworkAclId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: The ID of the virtual private cloud (VPC) to which the network ACL belongs.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object VpcId
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the network ACL.
        /// The description must be 2 to 256 characters in length. The description must start
        /// with a letter but cannot start with http:// or https://.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Description
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: egressAclEntries: The list of egress network ACL entries.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "egressAclEntries", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosNetworkAcl.EgressAclEntriesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? EgressAclEntries
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: ingressAclEntries: The list of ingress network ACL entries.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ingressAclEntries", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-vpc.RosNetworkAcl.IngressAclEntriesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? IngressAclEntries
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: networkAclName: The name of the network ACL.
        /// The name must be 2 to 128 characters in length and can contain letters, digits, periods
        /// (.), underscores (_), and hyphens (-). The name must start with a letter and cannot
        /// start with http:// or https://.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "networkAclName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? NetworkAclName
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IEgressAclEntriesProperty), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosNetworkAcl.EgressAclEntriesProperty")]
        public interface IEgressAclEntriesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: policy: The authorization policy. Valid values:
            /// accept: access permissions granted.
            /// drop: access permissions denied.
            /// </remarks>
            [JsiiProperty(name: "policy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Policy
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: port: The source ports. The value range is from 1 to 65535; setting formats such as "1/200" and "80/80", where "-1/-1" cannot be set individually, which means that the port is not restricted.
            /// </remarks>
            [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Port
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: protocol: The transport layer protocols. Valid values:
            /// icmp
            /// gre
            /// tcp
            /// udp
            /// all: All protocols are supported.
            /// </remarks>
            [JsiiProperty(name: "protocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Protocol
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the egress entry.
            /// </remarks>
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Description
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: destinationCidrIp: Destination address network segment.
            /// </remarks>
            [JsiiProperty(name: "destinationCidrIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? DestinationCidrIp
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: entryType: The type of the rule. Valid values:
            /// custom : custom rules.
            /// system : system rules.
            /// </remarks>
            [JsiiProperty(name: "entryType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? EntryType
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: networkAclEntryName: The name of the egress entry.
            /// </remarks>
            [JsiiProperty(name: "networkAclEntryName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? NetworkAclEntryName
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IEgressAclEntriesProperty), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosNetworkAcl.EgressAclEntriesProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.RosNetworkAcl.IEgressAclEntriesProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: policy: The authorization policy. Valid values:
                /// accept: access permissions granted.
                /// drop: access permissions denied.
                /// </remarks>
                [JsiiProperty(name: "policy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Policy
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: port: The source ports. The value range is from 1 to 65535; setting formats such as "1/200" and "80/80", where "-1/-1" cannot be set individually, which means that the port is not restricted.
                /// </remarks>
                [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Port
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: protocol: The transport layer protocols. Valid values:
                /// icmp
                /// gre
                /// tcp
                /// udp
                /// all: All protocols are supported.
                /// </remarks>
                [JsiiProperty(name: "protocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Protocol
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: description: The description of the egress entry.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Description
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: destinationCidrIp: Destination address network segment.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "destinationCidrIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? DestinationCidrIp
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: entryType: The type of the rule. Valid values:
                /// custom : custom rules.
                /// system : system rules.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "entryType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? EntryType
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: networkAclEntryName: The name of the egress entry.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "networkAclEntryName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? NetworkAclEntryName
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.RosNetworkAcl.EgressAclEntriesProperty")]
        public class EgressAclEntriesProperty : AlibabaCloud.SDK.ROS.CDK.Vpc.RosNetworkAcl.IEgressAclEntriesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: policy: The authorization policy. Valid values:
            /// accept: access permissions granted.
            /// drop: access permissions denied.
            /// </remarks>
            [JsiiProperty(name: "policy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
            public object Policy
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: port: The source ports. The value range is from 1 to 65535; setting formats such as "1/200" and "80/80", where "-1/-1" cannot be set individually, which means that the port is not restricted.
            /// </remarks>
            [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
            public object Port
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: protocol: The transport layer protocols. Valid values:
            /// icmp
            /// gre
            /// tcp
            /// udp
            /// all: All protocols are supported.
            /// </remarks>
            [JsiiProperty(name: "protocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
            public object Protocol
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the egress entry.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? Description
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: destinationCidrIp: Destination address network segment.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "destinationCidrIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? DestinationCidrIp
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: entryType: The type of the rule. Valid values:
            /// custom : custom rules.
            /// system : system rules.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "entryType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? EntryType
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: networkAclEntryName: The name of the egress entry.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "networkAclEntryName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? NetworkAclEntryName
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IIngressAclEntriesProperty), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosNetworkAcl.IngressAclEntriesProperty")]
        public interface IIngressAclEntriesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: policy: The authorization policy. Valid values:
            /// accept: access permissions granted.
            /// drop: access permissions denied.
            /// </remarks>
            [JsiiProperty(name: "policy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Policy
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: port: The source ports. The value range is from 1 to 65535; setting formats such as "1/200" and "80/80", where "-1/-1" cannot be set individually, which means that the port is not restricted.
            /// </remarks>
            [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Port
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: protocol: The transport layer protocols. Valid values:
            /// icmp
            /// gre
            /// tcp
            /// udp
            /// all: All protocols are supported.
            /// </remarks>
            [JsiiProperty(name: "protocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Protocol
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the ingress entry.
            /// </remarks>
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Description
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: entryType: The type of the rule. Valid values:
            /// custom : custom rules.
            /// system : system rules.
            /// </remarks>
            [JsiiProperty(name: "entryType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? EntryType
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: networkAclEntryName: The name of the ingress entry.
            /// </remarks>
            [JsiiProperty(name: "networkAclEntryName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? NetworkAclEntryName
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceCidrIp: Source address network segment.
            /// </remarks>
            [JsiiProperty(name: "sourceCidrIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? SourceCidrIp
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IIngressAclEntriesProperty), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosNetworkAcl.IngressAclEntriesProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.RosNetworkAcl.IIngressAclEntriesProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: policy: The authorization policy. Valid values:
                /// accept: access permissions granted.
                /// drop: access permissions denied.
                /// </remarks>
                [JsiiProperty(name: "policy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Policy
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: port: The source ports. The value range is from 1 to 65535; setting formats such as "1/200" and "80/80", where "-1/-1" cannot be set individually, which means that the port is not restricted.
                /// </remarks>
                [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Port
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: protocol: The transport layer protocols. Valid values:
                /// icmp
                /// gre
                /// tcp
                /// udp
                /// all: All protocols are supported.
                /// </remarks>
                [JsiiProperty(name: "protocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Protocol
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: description: The description of the ingress entry.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Description
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: entryType: The type of the rule. Valid values:
                /// custom : custom rules.
                /// system : system rules.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "entryType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? EntryType
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: networkAclEntryName: The name of the ingress entry.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "networkAclEntryName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? NetworkAclEntryName
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: sourceCidrIp: Source address network segment.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "sourceCidrIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? SourceCidrIp
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.RosNetworkAcl.IngressAclEntriesProperty")]
        public class IngressAclEntriesProperty : AlibabaCloud.SDK.ROS.CDK.Vpc.RosNetworkAcl.IIngressAclEntriesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: policy: The authorization policy. Valid values:
            /// accept: access permissions granted.
            /// drop: access permissions denied.
            /// </remarks>
            [JsiiProperty(name: "policy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
            public object Policy
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: port: The source ports. The value range is from 1 to 65535; setting formats such as "1/200" and "80/80", where "-1/-1" cannot be set individually, which means that the port is not restricted.
            /// </remarks>
            [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
            public object Port
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: protocol: The transport layer protocols. Valid values:
            /// icmp
            /// gre
            /// tcp
            /// udp
            /// all: All protocols are supported.
            /// </remarks>
            [JsiiProperty(name: "protocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
            public object Protocol
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the ingress entry.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? Description
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: entryType: The type of the rule. Valid values:
            /// custom : custom rules.
            /// system : system rules.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "entryType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? EntryType
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: networkAclEntryName: The name of the ingress entry.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "networkAclEntryName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? NetworkAclEntryName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceCidrIp: Source address network segment.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceCidrIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
            public object? SourceCidrIp
            {
                get;
                set;
            }
        }
    }
}
