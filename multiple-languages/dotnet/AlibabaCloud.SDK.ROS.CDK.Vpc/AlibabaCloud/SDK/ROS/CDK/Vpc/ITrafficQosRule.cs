using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Represents a `TrafficQosRule`.</summary>
    [JsiiInterface(nativeType: typeof(ITrafficQosRule), fullyQualifiedName: "@alicloud/ros-cdk-vpc.ITrafficQosRule")]
    public interface ITrafficQosRule : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute DstCidr: The destination IPv4 CIDR block that matches the QoS rule traffic.</summary>
        [JsiiProperty(name: "attrDstCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDstCidr
        {
            get;
        }

        /// <summary>Attribute DstIpv6Cidr: The QoS rule traffic matches the Destination IPv6 network segment.</summary>
        [JsiiProperty(name: "attrDstIpv6Cidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDstIpv6Cidr
        {
            get;
        }

        /// <summary>Attribute DstPortRange: QoS rule traffic matches the destination port number range.</summary>
        /// <remarks>
        /// Value range: <strong>0</strong> to <strong>65535</strong>. If not, the value is -1. Currently, only a single port number is supported, and the start and end of the port number must be the same. The corresponding destination port number range is fixed for different protocol types.
        /// </remarks>
        [JsiiProperty(name: "attrDstPortRange", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDstPortRange
        {
            get;
        }

        /// <summary>Attribute MatchDscp: The DSCP value of the traffic matched by the QoS rule.</summary>
        /// <remarks>
        /// Value range: <strong>0</strong> to <strong>63</strong>. If not, the value is -1.
        /// </remarks>
        [JsiiProperty(name: "attrMatchDscp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMatchDscp
        {
            get;
        }

        /// <summary>Attribute Priority: QoS rule priority.</summary>
        /// <remarks>
        /// Value range: <strong>1</strong> to <strong>9000</strong>. The larger the number, the higher the priority. The priority of a QoS rule cannot be repeated in the same QoS policy.
        /// </remarks>
        [JsiiProperty(name: "attrPriority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPriority
        {
            get;
        }

        /// <summary>Attribute Protocol: QoS rule protocol type.</summary>
        [JsiiProperty(name: "attrProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrProtocol
        {
            get;
        }

        /// <summary>Attribute QosId: The QoS policy ID.</summary>
        [JsiiProperty(name: "attrQosId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrQosId
        {
            get;
        }

        /// <summary>Attribute QueueId: The QoS queue ID.</summary>
        [JsiiProperty(name: "attrQueueId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrQueueId
        {
            get;
        }

        /// <summary>Attribute RemarkingDscp: Modify The DSCP value in the flow.</summary>
        /// <remarks>
        /// Value range: <strong>0</strong> to <strong>63</strong>. If the value is not modified, the value is -1.
        /// </remarks>
        [JsiiProperty(name: "attrRemarkingDscp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRemarkingDscp
        {
            get;
        }

        /// <summary>Attribute RuleDescription: The description of the QoS rule.</summary>
        [JsiiProperty(name: "attrRuleDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRuleDescription
        {
            get;
        }

        /// <summary>Attribute RuleId: The ID of the QoS rule.</summary>
        [JsiiProperty(name: "attrRuleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRuleId
        {
            get;
        }

        /// <summary>Attribute RuleName: The name of the QoS rule.</summary>
        [JsiiProperty(name: "attrRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRuleName
        {
            get;
        }

        /// <summary>Attribute SrcCidr: The source IPv4 CIDR block that matches the QoS rule traffic.</summary>
        [JsiiProperty(name: "attrSrcCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSrcCidr
        {
            get;
        }

        /// <summary>Attribute SrcIpv6Cidr: The QoS rule traffic matches the source IPv6 network segment.</summary>
        [JsiiProperty(name: "attrSrcIpv6Cidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSrcIpv6Cidr
        {
            get;
        }

        /// <summary>Attribute SrcPortRange: The source port number of the QoS rule traffic matching.</summary>
        /// <remarks>
        /// The value range is <strong>0</strong> to <strong>65535</strong>. If the traffic does not match, the value is -1. Currently, only a single port number is supported, and the start and end of the port number must be the same.
        /// </remarks>
        [JsiiProperty(name: "attrSrcPortRange", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSrcPortRange
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.TrafficQosRuleProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Vpc.ITrafficQosRuleProps Props
        {
            get;
        }

        /// <summary>Represents a `TrafficQosRule`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ITrafficQosRule), fullyQualifiedName: "@alicloud/ros-cdk-vpc.ITrafficQosRule")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.ITrafficQosRule
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute DstCidr: The destination IPv4 CIDR block that matches the QoS rule traffic.</summary>
            [JsiiProperty(name: "attrDstCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDstCidr
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DstIpv6Cidr: The QoS rule traffic matches the Destination IPv6 network segment.</summary>
            [JsiiProperty(name: "attrDstIpv6Cidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDstIpv6Cidr
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DstPortRange: QoS rule traffic matches the destination port number range.</summary>
            /// <remarks>
            /// Value range: <strong>0</strong> to <strong>65535</strong>. If not, the value is -1. Currently, only a single port number is supported, and the start and end of the port number must be the same. The corresponding destination port number range is fixed for different protocol types.
            /// </remarks>
            [JsiiProperty(name: "attrDstPortRange", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDstPortRange
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MatchDscp: The DSCP value of the traffic matched by the QoS rule.</summary>
            /// <remarks>
            /// Value range: <strong>0</strong> to <strong>63</strong>. If not, the value is -1.
            /// </remarks>
            [JsiiProperty(name: "attrMatchDscp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMatchDscp
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Priority: QoS rule priority.</summary>
            /// <remarks>
            /// Value range: <strong>1</strong> to <strong>9000</strong>. The larger the number, the higher the priority. The priority of a QoS rule cannot be repeated in the same QoS policy.
            /// </remarks>
            [JsiiProperty(name: "attrPriority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPriority
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Protocol: QoS rule protocol type.</summary>
            [JsiiProperty(name: "attrProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrProtocol
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute QosId: The QoS policy ID.</summary>
            [JsiiProperty(name: "attrQosId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrQosId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute QueueId: The QoS queue ID.</summary>
            [JsiiProperty(name: "attrQueueId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrQueueId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RemarkingDscp: Modify The DSCP value in the flow.</summary>
            /// <remarks>
            /// Value range: <strong>0</strong> to <strong>63</strong>. If the value is not modified, the value is -1.
            /// </remarks>
            [JsiiProperty(name: "attrRemarkingDscp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRemarkingDscp
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RuleDescription: The description of the QoS rule.</summary>
            [JsiiProperty(name: "attrRuleDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRuleDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RuleId: The ID of the QoS rule.</summary>
            [JsiiProperty(name: "attrRuleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRuleId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RuleName: The name of the QoS rule.</summary>
            [JsiiProperty(name: "attrRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRuleName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SrcCidr: The source IPv4 CIDR block that matches the QoS rule traffic.</summary>
            [JsiiProperty(name: "attrSrcCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSrcCidr
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SrcIpv6Cidr: The QoS rule traffic matches the source IPv6 network segment.</summary>
            [JsiiProperty(name: "attrSrcIpv6Cidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSrcIpv6Cidr
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SrcPortRange: The source port number of the QoS rule traffic matching.</summary>
            /// <remarks>
            /// The value range is <strong>0</strong> to <strong>65535</strong>. If the traffic does not match, the value is -1. Currently, only a single port number is supported, and the start and end of the port number must be the same.
            /// </remarks>
            [JsiiProperty(name: "attrSrcPortRange", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSrcPortRange
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.TrafficQosRuleProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Vpc.ITrafficQosRuleProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vpc.ITrafficQosRuleProps>()!;
            }

            /// <summary>The environment this resource belongs to.</summary>
            /// <remarks>
            /// For resources that are created and managed by the CDK
            /// (generally, those created by creating new class instances like Role, Bucket, etc.),
            /// this is always the same as the environment of the stack they belong to;
            /// however, for imported resources
            /// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
            /// that might be different than the stack they were imported into.
            /// </remarks>
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResourceEnvironment\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
            }

            /// <summary>The stack in which this resource is defined.</summary>
            [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}
