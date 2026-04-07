using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>This class encapsulates and extends the ROS resource type `ALIYUN::VPC::TrafficQosRule`.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTrafficQosRule`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficqosrule
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Vpc.TrafficQosRule), fullyQualifiedName: "@alicloud/ros-cdk-vpc.TrafficQosRule", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-vpc.TrafficQosRuleProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class TrafficQosRule : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Vpc.ITrafficQosRule
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public TrafficQosRule(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Vpc.ITrafficQosRuleProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Vpc.ITrafficQosRuleProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected TrafficQosRule(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected TrafficQosRule(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute DstCidr: The destination IPv4 CIDR block that matches the QoS rule traffic.</summary>
        [JsiiProperty(name: "attrDstCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDstCidr
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DstIpv6Cidr: The QoS rule traffic matches the Destination IPv6 network segment.</summary>
        [JsiiProperty(name: "attrDstIpv6Cidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDstIpv6Cidr
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DstPortRange: QoS rule traffic matches the destination port number range.</summary>
        /// <remarks>
        /// Value range: <strong>0</strong> to <strong>65535</strong>. If not, the value is -1. Currently, only a single port number is supported, and the start and end of the port number must be the same. The corresponding destination port number range is fixed for different protocol types.
        /// </remarks>
        [JsiiProperty(name: "attrDstPortRange", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDstPortRange
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MatchDscp: The DSCP value of the traffic matched by the QoS rule.</summary>
        /// <remarks>
        /// Value range: <strong>0</strong> to <strong>63</strong>. If not, the value is -1.
        /// </remarks>
        [JsiiProperty(name: "attrMatchDscp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMatchDscp
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Priority: QoS rule priority.</summary>
        /// <remarks>
        /// Value range: <strong>1</strong> to <strong>9000</strong>. The larger the number, the higher the priority. The priority of a QoS rule cannot be repeated in the same QoS policy.
        /// </remarks>
        [JsiiProperty(name: "attrPriority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPriority
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Protocol: QoS rule protocol type.</summary>
        [JsiiProperty(name: "attrProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrProtocol
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute QosId: The QoS policy ID.</summary>
        [JsiiProperty(name: "attrQosId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrQosId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute QueueId: The QoS queue ID.</summary>
        [JsiiProperty(name: "attrQueueId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrQueueId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute RemarkingDscp: Modify The DSCP value in the flow.</summary>
        /// <remarks>
        /// Value range: <strong>0</strong> to <strong>63</strong>. If the value is not modified, the value is -1.
        /// </remarks>
        [JsiiProperty(name: "attrRemarkingDscp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrRemarkingDscp
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute RuleDescription: The description of the QoS rule.</summary>
        [JsiiProperty(name: "attrRuleDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrRuleDescription
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute RuleId: The ID of the QoS rule.</summary>
        [JsiiProperty(name: "attrRuleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrRuleId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute RuleName: The name of the QoS rule.</summary>
        [JsiiProperty(name: "attrRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrRuleName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SrcCidr: The source IPv4 CIDR block that matches the QoS rule traffic.</summary>
        [JsiiProperty(name: "attrSrcCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSrcCidr
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SrcIpv6Cidr: The QoS rule traffic matches the source IPv6 network segment.</summary>
        [JsiiProperty(name: "attrSrcIpv6Cidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSrcIpv6Cidr
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SrcPortRange: The source port number of the QoS rule traffic matching.</summary>
        /// <remarks>
        /// The value range is <strong>0</strong> to <strong>65535</strong>. If the traffic does not match, the value is -1. Currently, only a single port number is supported, and the start and end of the port number must be the same.
        /// </remarks>
        [JsiiProperty(name: "attrSrcPortRange", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSrcPortRange
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vpc.TrafficQosRuleProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Vpc.ITrafficQosRuleProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vpc.ITrafficQosRuleProps>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        protected virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "id", typeJson: "{\"primitive\":\"string\"}")]
        protected virtual string Id
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "scope", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}")]
        protected virtual AlibabaCloud.SDK.ROS.CDK.Core.Construct Scope
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Construct>()!;
            set => SetInstanceProperty(value);
        }
    }
}
