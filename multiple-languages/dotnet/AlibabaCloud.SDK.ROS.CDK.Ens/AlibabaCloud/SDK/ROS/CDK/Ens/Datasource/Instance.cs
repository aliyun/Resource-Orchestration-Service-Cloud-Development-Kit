using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ens.Datasource
{
    /// <summary>This class encapsulates and extends the ROS resource type `DATASOURCE::ENS::Instance`, which is used to query the information about an Edge Node Service (ENS) instance.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ens-instance
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Ens.Datasource.Instance), fullyQualifiedName: "@alicloud/ros-cdk-ens.datasource.Instance", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ens.datasource.InstanceProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class Instance : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Ens.Datasource.IInstance
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public Instance(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ens.Datasource.IInstanceProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ens.Datasource.IInstanceProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Instance(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Instance(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute DataDisk: Data disk specifications.</summary>
        [JsiiProperty(name: "attrDataDisk", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDataDisk
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute EnsRegionId: The node ID.</summary>
        /// <remarks>
        /// When ScheduleAreaLevel is Region, EnsRegionId is required. When ScheduleAreaLevel is Big,Middle,Small, EnsRegionId is invalid.
        /// </remarks>
        [JsiiProperty(name: "attrEnsRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrEnsRegionId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HostName: The hostname of the instance.</summary>
        [JsiiProperty(name: "attrHostName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHostName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ImageId: The ID of the image.</summary>
        [JsiiProperty(name: "attrImageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrImageId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InstanceId: The ID of the instance.</summary>
        [JsiiProperty(name: "attrInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InstanceName: The instance name.</summary>
        /// <remarks>
        /// Example value: test-InstanceName. It must be 2 to 128 characters in length and must start with an uppercase or lowercase letter or a Chinese character. It cannot start with http:// or https. Can contain Chinese, English, numbers, half-width colons (:), underscores (_), periods (.
        /// </remarks>
        [JsiiProperty(name: "attrInstanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInstanceName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InstanceType: The specification of the instance.</summary>
        /// <remarks>
        /// Example value: ens.sn1.
        /// </remarks>
        [JsiiProperty(name: "attrInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInstanceType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InternetMaxBandwidthOut: Maximum public network bandwidth.</summary>
        /// <remarks>
        /// The field type is Long, and the precision may be lost during serialization/deserialization.
        /// </remarks>
        [JsiiProperty(name: "attrInternetMaxBandwidthOut", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInternetMaxBandwidthOut
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute NetworkId: The ID of the network.</summary>
        [JsiiProperty(name: "attrNetworkId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrNetworkId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PaymentType: Instance payment method.</summary>
        [JsiiProperty(name: "attrPaymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPaymentType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PrivateIpAddress: The private IP address.</summary>
        /// <remarks>
        /// Can only be used for node-level scheduling. If a private IP address is specified, the number of instances can only be one, and both the private IP address and the vSwitch ID are not empty, the private IP address takes effect.
        /// </remarks>
        [JsiiProperty(name: "attrPrivateIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPrivateIpAddress
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SecurityId: ID of the security group to which the instance belongs.</summary>
        [JsiiProperty(name: "attrSecurityId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSecurityId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SystemDisk: System Disk Specification.</summary>
        /// <remarks>
        /// SystemDisk is a non-required parameter when InstanceType is x86_pm,x86_bmi,x86_bm,pc_bmi, or arm_bmi. SystemDisk is a required parameter when instanceType is other specification families.
        /// </remarks>
        [JsiiProperty(name: "attrSystemDisk", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSystemDisk
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VSwitchId: The ID of the vSwitch to which the instance belongs.</summary>
        [JsiiProperty(name: "attrVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVSwitchId
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ens.datasource.InstanceProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Ens.Datasource.IInstanceProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ens.Datasource.IInstanceProps>()!;
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
