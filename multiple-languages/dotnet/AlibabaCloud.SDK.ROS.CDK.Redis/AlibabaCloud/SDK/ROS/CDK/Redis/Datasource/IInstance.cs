using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Redis.Datasource
{
    /// <summary>Represents a `Instance`.</summary>
    [JsiiInterface(nativeType: typeof(IInstance), fullyQualifiedName: "@alicloud/ros-cdk-redis.datasource.IInstance")]
    public interface IInstance : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute ArchitectureType: Architecture type.</summary>
        [JsiiProperty(name: "attrArchitectureType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrArchitectureType
        {
            get;
        }

        /// <summary>Attribute Bandwidth: Bandwidth.</summary>
        [JsiiProperty(name: "attrBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBandwidth
        {
            get;
        }

        /// <summary>Attribute Capacity: Capacity.</summary>
        [JsiiProperty(name: "attrCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCapacity
        {
            get;
        }

        /// <summary>Attribute CloudType: Cloud category.</summary>
        [JsiiProperty(name: "attrCloudType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCloudType
        {
            get;
        }

        /// <summary>Attribute Config: Config.</summary>
        [JsiiProperty(name: "attrConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrConfig
        {
            get;
        }

        /// <summary>Attribute ConnectionDomain: Connection domain.</summary>
        [JsiiProperty(name: "attrConnectionDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrConnectionDomain
        {
            get;
        }

        /// <summary>Attribute CreateTime: Create time.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute DBInstanceId: Database instance id.</summary>
        [JsiiProperty(name: "attrDbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbInstanceId
        {
            get;
        }

        /// <summary>Attribute DBInstanceName: Instance name.</summary>
        [JsiiProperty(name: "attrDbInstanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDbInstanceName
        {
            get;
        }

        /// <summary>Attribute EndTime: End time.</summary>
        [JsiiProperty(name: "attrEndTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEndTime
        {
            get;
        }

        /// <summary>Attribute EngineVersion: Engine version.</summary>
        [JsiiProperty(name: "attrEngineVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEngineVersion
        {
            get;
        }

        /// <summary>Attribute HasRenewChangeOrder: Has renew change order.</summary>
        [JsiiProperty(name: "attrHasRenewChangeOrder", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHasRenewChangeOrder
        {
            get;
        }

        /// <summary>Attribute InstanceClass: Instance class.</summary>
        [JsiiProperty(name: "attrInstanceClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceClass
        {
            get;
        }

        /// <summary>Attribute InstanceReleaseProtection: Instance release protection.</summary>
        [JsiiProperty(name: "attrInstanceReleaseProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceReleaseProtection
        {
            get;
        }

        /// <summary>Attribute InstanceType: Instance type.</summary>
        [JsiiProperty(name: "attrInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceType
        {
            get;
        }

        /// <summary>Attribute IsRds: is RDS.</summary>
        [JsiiProperty(name: "attrIsRds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIsRds
        {
            get;
        }

        /// <summary>Attribute MaintainEndTime: Maintain end time.</summary>
        [JsiiProperty(name: "attrMaintainEndTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMaintainEndTime
        {
            get;
        }

        /// <summary>Attribute MaintainStartTime: Maintain start time.</summary>
        [JsiiProperty(name: "attrMaintainStartTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMaintainStartTime
        {
            get;
        }

        /// <summary>Attribute NetworkType: Network type.</summary>
        [JsiiProperty(name: "attrNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNetworkType
        {
            get;
        }

        /// <summary>Attribute PackageType: Package type.</summary>
        [JsiiProperty(name: "attrPackageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPackageType
        {
            get;
        }

        /// <summary>Attribute PaymentType: Payment type.</summary>
        [JsiiProperty(name: "attrPaymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPaymentType
        {
            get;
        }

        /// <summary>Attribute Port: Port.</summary>
        [JsiiProperty(name: "attrPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPort
        {
            get;
        }

        /// <summary>Attribute PrivateIp: Private IP.</summary>
        [JsiiProperty(name: "attrPrivateIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPrivateIp
        {
            get;
        }

        /// <summary>Attribute Qps: QPS.</summary>
        [JsiiProperty(name: "attrQps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrQps
        {
            get;
        }

        /// <summary>Attribute ReadOnlyCount: The number of read-only nodes.</summary>
        /// <remarks>
        /// This parameter is only applicable to the creation of read-write splitting instances in the cloud disk version. You can use this parameter to customize the number of read-only nodes. Valid values: 1 to 5.
        /// </remarks>
        [JsiiProperty(name: "attrReadOnlyCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrReadOnlyCount
        {
            get;
        }

        /// <summary>Attribute ReplacateId: Replacate id.</summary>
        [JsiiProperty(name: "attrReplacateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrReplacateId
        {
            get;
        }

        /// <summary>Attribute ResourceGroupId: Resource group id.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceGroupId
        {
            get;
        }

        /// <summary>Attribute SecondaryZoneId: The ID of the standby zone.</summary>
        [JsiiProperty(name: "attrSecondaryZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSecondaryZoneId
        {
            get;
        }

        /// <summary>Attribute SecurityGroupId: Security group id.</summary>
        [JsiiProperty(name: "attrSecurityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSecurityGroupId
        {
            get;
        }

        /// <summary>Attribute SecurityIpGroupAttribute: Security IP group attribute.</summary>
        [JsiiProperty(name: "attrSecurityIpGroupAttribute", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSecurityIpGroupAttribute
        {
            get;
        }

        /// <summary>Attribute SecurityIpGroupName: Security IP group name.</summary>
        [JsiiProperty(name: "attrSecurityIpGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSecurityIpGroupName
        {
            get;
        }

        /// <summary>Attribute SecurityIps: Security IPs.</summary>
        [JsiiProperty(name: "attrSecurityIps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSecurityIps
        {
            get;
        }

        /// <summary>Attribute ShardCount: The number of slices.</summary>
        /// <remarks>
        /// This parameter is only applicable to creating a cloud disk cluster architecture instance. You can use this parameter to customize the number of slices.
        /// </remarks>
        [JsiiProperty(name: "attrShardCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrShardCount
        {
            get;
        }

        /// <summary>Attribute Tags: Tags.</summary>
        [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTags
        {
            get;
        }

        /// <summary>Attribute VpcAuthMode: Vpc auth mode.</summary>
        [JsiiProperty(name: "attrVpcAuthMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVpcAuthMode
        {
            get;
        }

        /// <summary>Attribute VpcCloudInstanceId: Vpc cloud instance id.</summary>
        [JsiiProperty(name: "attrVpcCloudInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVpcCloudInstanceId
        {
            get;
        }

        /// <summary>Attribute VpcId: Vpc id.</summary>
        [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVpcId
        {
            get;
        }

        /// <summary>Attribute VSwitchId: Vswitch id.</summary>
        [JsiiProperty(name: "attrVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVSwitchId
        {
            get;
        }

        /// <summary>Attribute ZoneId: Zone id.</summary>
        [JsiiProperty(name: "attrZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrZoneId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-redis.datasource.InstanceProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Redis.Datasource.IInstanceProps Props
        {
            get;
        }

        /// <summary>Represents a `Instance`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IInstance), fullyQualifiedName: "@alicloud/ros-cdk-redis.datasource.IInstance")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Redis.Datasource.IInstance
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute ArchitectureType: Architecture type.</summary>
            [JsiiProperty(name: "attrArchitectureType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrArchitectureType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Bandwidth: Bandwidth.</summary>
            [JsiiProperty(name: "attrBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBandwidth
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Capacity: Capacity.</summary>
            [JsiiProperty(name: "attrCapacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCapacity
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CloudType: Cloud category.</summary>
            [JsiiProperty(name: "attrCloudType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCloudType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Config: Config.</summary>
            [JsiiProperty(name: "attrConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ConnectionDomain: Connection domain.</summary>
            [JsiiProperty(name: "attrConnectionDomain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrConnectionDomain
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: Create time.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DBInstanceId: Database instance id.</summary>
            [JsiiProperty(name: "attrDbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DBInstanceName: Instance name.</summary>
            [JsiiProperty(name: "attrDbInstanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDbInstanceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EndTime: End time.</summary>
            [JsiiProperty(name: "attrEndTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEndTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EngineVersion: Engine version.</summary>
            [JsiiProperty(name: "attrEngineVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEngineVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HasRenewChangeOrder: Has renew change order.</summary>
            [JsiiProperty(name: "attrHasRenewChangeOrder", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHasRenewChangeOrder
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceClass: Instance class.</summary>
            [JsiiProperty(name: "attrInstanceClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceClass
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceReleaseProtection: Instance release protection.</summary>
            [JsiiProperty(name: "attrInstanceReleaseProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceReleaseProtection
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InstanceType: Instance type.</summary>
            [JsiiProperty(name: "attrInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IsRds: is RDS.</summary>
            [JsiiProperty(name: "attrIsRds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIsRds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MaintainEndTime: Maintain end time.</summary>
            [JsiiProperty(name: "attrMaintainEndTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMaintainEndTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MaintainStartTime: Maintain start time.</summary>
            [JsiiProperty(name: "attrMaintainStartTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMaintainStartTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NetworkType: Network type.</summary>
            [JsiiProperty(name: "attrNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNetworkType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PackageType: Package type.</summary>
            [JsiiProperty(name: "attrPackageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPackageType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PaymentType: Payment type.</summary>
            [JsiiProperty(name: "attrPaymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPaymentType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Port: Port.</summary>
            [JsiiProperty(name: "attrPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPort
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PrivateIp: Private IP.</summary>
            [JsiiProperty(name: "attrPrivateIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPrivateIp
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Qps: QPS.</summary>
            [JsiiProperty(name: "attrQps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrQps
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ReadOnlyCount: The number of read-only nodes.</summary>
            /// <remarks>
            /// This parameter is only applicable to the creation of read-write splitting instances in the cloud disk version. You can use this parameter to customize the number of read-only nodes. Valid values: 1 to 5.
            /// </remarks>
            [JsiiProperty(name: "attrReadOnlyCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrReadOnlyCount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ReplacateId: Replacate id.</summary>
            [JsiiProperty(name: "attrReplacateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrReplacateId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceGroupId: Resource group id.</summary>
            [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SecondaryZoneId: The ID of the standby zone.</summary>
            [JsiiProperty(name: "attrSecondaryZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSecondaryZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SecurityGroupId: Security group id.</summary>
            [JsiiProperty(name: "attrSecurityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSecurityGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SecurityIpGroupAttribute: Security IP group attribute.</summary>
            [JsiiProperty(name: "attrSecurityIpGroupAttribute", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSecurityIpGroupAttribute
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SecurityIpGroupName: Security IP group name.</summary>
            [JsiiProperty(name: "attrSecurityIpGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSecurityIpGroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SecurityIps: Security IPs.</summary>
            [JsiiProperty(name: "attrSecurityIps", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSecurityIps
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ShardCount: The number of slices.</summary>
            /// <remarks>
            /// This parameter is only applicable to creating a cloud disk cluster architecture instance. You can use this parameter to customize the number of slices.
            /// </remarks>
            [JsiiProperty(name: "attrShardCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrShardCount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Tags: Tags.</summary>
            [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTags
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VpcAuthMode: Vpc auth mode.</summary>
            [JsiiProperty(name: "attrVpcAuthMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVpcAuthMode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VpcCloudInstanceId: Vpc cloud instance id.</summary>
            [JsiiProperty(name: "attrVpcCloudInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVpcCloudInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VpcId: Vpc id.</summary>
            [JsiiProperty(name: "attrVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VSwitchId: Vswitch id.</summary>
            [JsiiProperty(name: "attrVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVSwitchId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ZoneId: Zone id.</summary>
            [JsiiProperty(name: "attrZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-redis.datasource.InstanceProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Redis.Datasource.IInstanceProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Redis.Datasource.IInstanceProps>()!;
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
