using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Redis.Datasource
{
    /// <summary>This class encapsulates and extends the ROS resource type `DATASOURCE::REDIS::Instance`.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-instance
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Redis.Datasource.Instance), fullyQualifiedName: "@alicloud/ros-cdk-redis.datasource.Instance", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-redis.datasource.InstanceProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class Instance : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Redis.Datasource.IInstance
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public Instance(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Redis.Datasource.IInstanceProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Redis.Datasource.IInstanceProps props, bool? enableResourcePropertyConstraint = null)
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

        /// <summary>Attribute ArchitectureType: Architecture type.</summary>
        [JsiiProperty(name: "attrArchitectureType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrArchitectureType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Bandwidth: Bandwidth.</summary>
        [JsiiProperty(name: "attrBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrBandwidth
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Capacity: Capacity.</summary>
        [JsiiProperty(name: "attrCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCapacity
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CloudType: Cloud category.</summary>
        [JsiiProperty(name: "attrCloudType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCloudType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Config: Config.</summary>
        [JsiiProperty(name: "attrConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrConfig
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ConnectionDomain: Connection domain.</summary>
        [JsiiProperty(name: "attrConnectionDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrConnectionDomain
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CreateTime: Create time.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCreateTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DBInstanceId: Database instance id.</summary>
        [JsiiProperty(name: "attrDbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDbInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DBInstanceName: Instance name.</summary>
        [JsiiProperty(name: "attrDbInstanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDbInstanceName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute EndTime: End time.</summary>
        [JsiiProperty(name: "attrEndTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrEndTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute EngineVersion: Engine version.</summary>
        [JsiiProperty(name: "attrEngineVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrEngineVersion
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute HasRenewChangeOrder: Has renew change order.</summary>
        [JsiiProperty(name: "attrHasRenewChangeOrder", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrHasRenewChangeOrder
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InstanceClass: Instance class.</summary>
        [JsiiProperty(name: "attrInstanceClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInstanceClass
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InstanceReleaseProtection: Instance release protection.</summary>
        [JsiiProperty(name: "attrInstanceReleaseProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInstanceReleaseProtection
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InstanceType: Instance type.</summary>
        [JsiiProperty(name: "attrInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInstanceType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute IsRds: is RDS.</summary>
        [JsiiProperty(name: "attrIsRds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrIsRds
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MaintainEndTime: Maintain end time.</summary>
        [JsiiProperty(name: "attrMaintainEndTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMaintainEndTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MaintainStartTime: Maintain start time.</summary>
        [JsiiProperty(name: "attrMaintainStartTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMaintainStartTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute NetworkType: Network type.</summary>
        [JsiiProperty(name: "attrNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrNetworkType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PackageType: Package type.</summary>
        [JsiiProperty(name: "attrPackageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPackageType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PaymentType: Payment type.</summary>
        [JsiiProperty(name: "attrPaymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPaymentType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Port: Port.</summary>
        [JsiiProperty(name: "attrPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPort
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PrivateIp: Private IP.</summary>
        [JsiiProperty(name: "attrPrivateIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrPrivateIp
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Qps: QPS.</summary>
        [JsiiProperty(name: "attrQps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrQps
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ReadOnlyCount: The number of read-only nodes.</summary>
        /// <remarks>
        /// This parameter is only applicable to the creation of read-write splitting instances in the cloud disk version. You can use this parameter to customize the number of read-only nodes. Valid values: 1 to 5.
        /// </remarks>
        [JsiiProperty(name: "attrReadOnlyCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrReadOnlyCount
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ReplacateId: Replacate id.</summary>
        [JsiiProperty(name: "attrReplacateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrReplacateId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ResourceGroupId: Resource group id.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrResourceGroupId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SecondaryZoneId: The ID of the standby zone.</summary>
        [JsiiProperty(name: "attrSecondaryZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSecondaryZoneId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SecurityGroupId: Security group id.</summary>
        [JsiiProperty(name: "attrSecurityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSecurityGroupId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SecurityIpGroupAttribute: Security IP group attribute.</summary>
        [JsiiProperty(name: "attrSecurityIpGroupAttribute", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSecurityIpGroupAttribute
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SecurityIpGroupName: Security IP group name.</summary>
        [JsiiProperty(name: "attrSecurityIpGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSecurityIpGroupName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SecurityIps: Security IPs.</summary>
        [JsiiProperty(name: "attrSecurityIps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSecurityIps
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ShardCount: The number of slices.</summary>
        /// <remarks>
        /// This parameter is only applicable to creating a cloud disk cluster architecture instance. You can use this parameter to customize the number of slices.
        /// </remarks>
        [JsiiProperty(name: "attrShardCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrShardCount
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Tags: Tags.</summary>
        [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrTags
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VpcAuthMode: Vpc auth mode.</summary>
        [JsiiProperty(name: "attrVpcAuthMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVpcAuthMode
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VpcCloudInstanceId: Vpc cloud instance id.</summary>
        [JsiiProperty(name: "attrVpcCloudInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVpcCloudInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VpcId: Vpc id.</summary>
        [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVpcId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VSwitchId: Vswitch id.</summary>
        [JsiiProperty(name: "attrVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVSwitchId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ZoneId: Zone id.</summary>
        [JsiiProperty(name: "attrZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrZoneId
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-redis.datasource.InstanceProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Redis.Datasource.IInstanceProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Redis.Datasource.IInstanceProps>()!;
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
