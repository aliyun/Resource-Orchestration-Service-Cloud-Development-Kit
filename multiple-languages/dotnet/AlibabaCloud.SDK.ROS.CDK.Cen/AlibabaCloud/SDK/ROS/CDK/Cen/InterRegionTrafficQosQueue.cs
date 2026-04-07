using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>This class encapsulates and extends the ROS resource type `ALIYUN::CEN::InterRegionTrafficQosQueue`.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInterRegionTrafficQosQueue`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-interregiontrafficqosqueue
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Cen.InterRegionTrafficQosQueue), fullyQualifiedName: "@alicloud/ros-cdk-cen.InterRegionTrafficQosQueue", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-cen.InterRegionTrafficQosQueueProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class InterRegionTrafficQosQueue : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Cen.IInterRegionTrafficQosQueue
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public InterRegionTrafficQosQueue(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Cen.IInterRegionTrafficQosQueueProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Cen.IInterRegionTrafficQosQueueProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected InterRegionTrafficQosQueue(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected InterRegionTrafficQosQueue(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute Bandwidth: The maximum absolute bandwidth value that can be allocated to the queue.</summary>
        /// <remarks>
        /// Unit: Mbit/s.
        /// </remarks>
        [JsiiProperty(name: "attrBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrBandwidth
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Dscps: The DSCP value of the traffic packet to be matched in the current queue.</summary>
        [JsiiProperty(name: "attrDscps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDscps
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute EffectiveBandwidth: The actual bandwidth value of the current queue.</summary>
        [JsiiProperty(name: "attrEffectiveBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrEffectiveBandwidth
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InterRegionTrafficQosQueueDescription: The description of the queue.</summary>
        [JsiiProperty(name: "attrInterRegionTrafficQosQueueDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInterRegionTrafficQosQueueDescription
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InterRegionTrafficQosQueueId: The ID of the queue.</summary>
        [JsiiProperty(name: "attrInterRegionTrafficQosQueueId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInterRegionTrafficQosQueueId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InterRegionTrafficQosQueueName: The name of the queue.</summary>
        [JsiiProperty(name: "attrInterRegionTrafficQosQueueName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInterRegionTrafficQosQueueName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute RemainBandwidthPercent: The maximum percentage of inter-region bandwidth that can be allocated to the queue.</summary>
        [JsiiProperty(name: "attrRemainBandwidthPercent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrRemainBandwidthPercent
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute TrafficQosPolicyId: The ID of the QoS policy.</summary>
        [JsiiProperty(name: "attrTrafficQosPolicyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrTrafficQosPolicyId
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cen.InterRegionTrafficQosQueueProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Cen.IInterRegionTrafficQosQueueProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cen.IInterRegionTrafficQosQueueProps>()!;
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
