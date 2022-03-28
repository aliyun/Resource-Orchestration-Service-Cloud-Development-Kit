using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Redis
{
    /// <summary>A ROS template type:  `ALIYUN::REDIS::Instance`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Redis.RosInstance), fullyQualifiedName: "@alicloud/ros-cdk-redis.RosInstance", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-redis.RosInstanceProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosInstance : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::REDIS::Instance`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosInstance(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Redis.IRosInstanceProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosInstance(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosInstance(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "renderProperties", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}", parametersJson: "[{\"name\":\"props\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]")]
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Redis.RosInstance))!;

        /// <remarks>
        /// <strong>Attribute</strong>: ArchitectureType: The architecture.
        /// </remarks>
        [JsiiProperty(name: "attrArchitectureType", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrArchitectureType
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: Bandwidth: The bandwidth of the instance. Unit: Mbit/s.
        /// </remarks>
        [JsiiProperty(name: "attrBandwidth", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrBandwidth
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: Capacity: The storage capacity of the instance. Unit: MB.
        /// </remarks>
        [JsiiProperty(name: "attrCapacity", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrCapacity
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: ChargeType: The billing method of the instance.
        /// </remarks>
        [JsiiProperty(name: "attrChargeType", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrChargeType
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: ClassicInnerConnectionPort: The classic inner connection port of the instance
        /// </remarks>
        [JsiiProperty(name: "attrClassicInnerConnectionPort", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrClassicInnerConnectionPort
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: ClassicInnerConnectionString: The classic inner connection string of the instance
        /// </remarks>
        [JsiiProperty(name: "attrClassicInnerConnectionString", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrClassicInnerConnectionString
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: ConnectionDomain: Connection domain of created instance.
        /// </remarks>
        [JsiiProperty(name: "attrConnectionDomain", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrConnectionDomain
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: Connections: The maximum number of connections supported by the instance.
        /// </remarks>
        [JsiiProperty(name: "attrConnections", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrConnections
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: DirectConnectionPort: The direct connection port of the instance
        /// </remarks>
        [JsiiProperty(name: "attrDirectConnectionPort", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrDirectConnectionPort
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: DirectConnectionString: The direct connection string of the instance
        /// </remarks>
        [JsiiProperty(name: "attrDirectConnectionString", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrDirectConnectionString
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: EngineVersion: The engine version of the instance.
        /// </remarks>
        [JsiiProperty(name: "attrEngineVersion", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrEngineVersion
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: HasRenewChangeOrder: Indicates whether the Alibaba Cloud account has pending renewal or scaling orders
        /// </remarks>
        [JsiiProperty(name: "attrHasRenewChangeOrder", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrHasRenewChangeOrder
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: InstanceClass: Redis instance type.
        /// </remarks>
        [JsiiProperty(name: "attrInstanceClass", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrInstanceClass
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: InstanceId: Instance id of created redis instance.
        /// </remarks>
        [JsiiProperty(name: "attrInstanceId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrInstanceId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: InstanceName: Name of created redis instance.
        /// </remarks>
        [JsiiProperty(name: "attrInstanceName", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrInstanceName
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: InstanceType: The engine type of the instance.
        /// </remarks>
        [JsiiProperty(name: "attrInstanceType", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrInstanceType
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: NetworkType: The network type.
        /// </remarks>
        [JsiiProperty(name: "attrNetworkType", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrNetworkType
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: NodeType: The type of node.
        /// </remarks>
        [JsiiProperty(name: "attrNodeType", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrNodeType
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: OrderId: Order Id of created instance.
        /// </remarks>
        [JsiiProperty(name: "attrOrderId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrOrderId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: PackageType: The plan type.
        /// </remarks>
        [JsiiProperty(name: "attrPackageType", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrPackageType
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: Port: Port of created instance.
        /// </remarks>
        [JsiiProperty(name: "attrPort", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrPort
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: PrivateIp: The internal IP address of the instance.
        /// </remarks>
        [JsiiProperty(name: "attrPrivateIp", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrPrivateIp
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: PublicConnectionPort: The public connection port of the instance
        /// </remarks>
        [JsiiProperty(name: "attrPublicConnectionPort", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrPublicConnectionPort
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: PublicConnectionString: The public connection string of the instance
        /// </remarks>
        [JsiiProperty(name: "attrPublicConnectionString", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrPublicConnectionString
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: QPS: The queries per second (QPS) supported by the instance.
        /// </remarks>
        [JsiiProperty(name: "attrQps", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrQps
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: ResourceGroupId: The ID of the resource group to which the instance belongs.
        /// </remarks>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrResourceGroupId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: VpcId: The ID of the VPC.
        /// </remarks>
        [JsiiProperty(name: "attrVpcId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrVpcId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: VpcPrivateConnectionPort: The vpc private connection port of the instance
        /// </remarks>
        [JsiiProperty(name: "attrVpcPrivateConnectionPort", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrVpcPrivateConnectionPort
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: VpcPrivateConnectionString: The vpc private connection string of the instance
        /// </remarks>
        [JsiiProperty(name: "attrVpcPrivateConnectionString", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrVpcPrivateConnectionString
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: VSwitchId: The ID of the vSwitch.
        /// </remarks>
        [JsiiProperty(name: "attrVSwitchId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrVSwitchId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: ZoneId: The ID of the zone.
        /// </remarks>
        [JsiiProperty(name: "attrZoneId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrZoneId
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
        /// <strong>Property</strong>: autoRenewDuration: The auto-renewal period. Valid values: 1 to 12.
        /// When the instance is about to expire, the instance is automatically renewed
        /// based on the number of months specified by this parameter.
        /// Note This parameter is valid only when ChargeType is set to PrePaid.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoRenewDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? AutoRenewDuration
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: backupPolicy: Backup policy
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "backupPolicy", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-redis.RosInstance.BackupPolicyProperty\"}]}}", isOptional: true)]
        public virtual object? BackupPolicy
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: capacity: The storage capacity of redis instance.range from 1 to 512, in GB.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "capacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Capacity
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: chargeType: The billing method of the ApsaraDB for Redis instance. Valid values:
        /// PrePaid: subscription.
        /// PostPaid: pay-as-you-go.
        /// Default: PostPaid.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? ChargeType
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: connections: Connection address
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "connections", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-redis.RosInstance.ConnectionsProperty\"}]}}", isOptional: true)]
        public virtual object? Connections
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: deletionForce: Whether destroy instance when it is in recycle. Default is false
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "deletionForce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? DeletionForce
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: engineVersion: Engine version. Supported values: 2.8, 4.0 and 5.0.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "engineVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? EngineVersion
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: evictionPolicy: The eviction policy of cache data storage.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "evictionPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? EvictionPolicy
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceClass: Redis instance type. Refer the Redis instance type reference, such as 'redis.master.small.default', 'redis.master.4xlarge.default', 'redis.sharding.mid.default' etc
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? InstanceClass
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceMaintainTime: Instance maintain time.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceMaintainTime", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-redis.RosInstance.InstanceMaintainTimeProperty\"}]}}", isOptional: true)]
        public virtual object? InstanceMaintainTime
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? InstanceName
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Password
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: period: The period of order, when choose Prepaid required.optional value 1-9, 12, 24, 36, 60 Unit in month.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Period
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: productType: Product type. Valid values:Local: Community Edition(Local) or Enhanced Edition(Local)Tair_rdb: Performance Enhanced(Cloud Disk)Tair_scm: Persistent Memory(Cloud Disk)Tair_essd: Capacity Storage(Cloud Disk)OnECS: Community Edition(Cloud Disk)
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "productType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? ProductType
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: securityGroupId: The IDs of security groups. Separate multiple security group IDs with commas (,) and up to 10 can be set.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? SecurityGroupId
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: sslEnabled: Modifies the SSL status. Valid values:
        /// Disable: disables SSL encryption.
        /// Enable: enables SSL encryption.
        /// Update: updates the SSL certificate.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "sslEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? SslEnabled
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to redis. Max support 20 tags to add during create redis. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-redis.RosInstance.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        public virtual AlibabaCloud.SDK.ROS.CDK.Redis.RosInstance.ITagsProperty[]? Tags
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Redis.RosInstance.ITagsProperty[]?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: The VPC id to create ecs instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? VpcId
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:
        /// - true: enables password free.
        /// - false: disables password free.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vpcPasswordFree", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? VpcPasswordFree
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: The vSwitch Id to create ecs instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? VSwitchId
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneId: The zone id of input region.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? ZoneId
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IBackupPolicyProperty), fullyQualifiedName: "@alicloud/ros-cdk-redis.RosInstance.BackupPolicyProperty")]
        public interface IBackupPolicyProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: preferredBackupPeriod: The backup cycle. Valid values: Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday
            /// </remarks>
            [JsiiProperty(name: "preferredBackupPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object PreferredBackupPeriod
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: preferredBackupTime: The time period in which data is backed up. The time period must be in the HH:mmZ-HH:mmZ format.
            /// </remarks>
            [JsiiProperty(name: "preferredBackupTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object PreferredBackupTime
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: enableBackupLog: Enable or disable incremental backup. Options:
            /// 1, means open.
            /// 0, which means off, the default value.
            /// </remarks>
            [JsiiProperty(name: "enableBackupLog", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? EnableBackupLog
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IBackupPolicyProperty), fullyQualifiedName: "@alicloud/ros-cdk-redis.RosInstance.BackupPolicyProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Redis.RosInstance.IBackupPolicyProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: preferredBackupPeriod: The backup cycle. Valid values: Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday
                /// </remarks>
                [JsiiProperty(name: "preferredBackupPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object PreferredBackupPeriod
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: preferredBackupTime: The time period in which data is backed up. The time period must be in the HH:mmZ-HH:mmZ format.
                /// </remarks>
                [JsiiProperty(name: "preferredBackupTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object PreferredBackupTime
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: enableBackupLog: Enable or disable incremental backup. Options:
                /// 1, means open.
                /// 0, which means off, the default value.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "enableBackupLog", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? EnableBackupLog
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-redis.RosInstance.BackupPolicyProperty")]
        public class BackupPolicyProperty : AlibabaCloud.SDK.ROS.CDK.Redis.RosInstance.IBackupPolicyProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: preferredBackupPeriod: The backup cycle. Valid values: Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday
            /// </remarks>
            [JsiiProperty(name: "preferredBackupPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PreferredBackupPeriod
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: preferredBackupTime: The time period in which data is backed up. The time period must be in the HH:mmZ-HH:mmZ format.
            /// </remarks>
            [JsiiProperty(name: "preferredBackupTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PreferredBackupTime
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: enableBackupLog: Enable or disable incremental backup. Options:
            /// 1, means open.
            /// 0, which means off, the default value.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableBackupLog", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableBackupLog
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IClassicInnerConnectionProperty), fullyQualifiedName: "@alicloud/ros-cdk-redis.RosInstance.ClassicInnerConnectionProperty")]
        public interface IClassicInnerConnectionProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: connectionPort: The service port number of the ApsaraDB for Redis instance. Valid values: 1024 to 65535.
            /// </remarks>
            [JsiiProperty(name: "connectionPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object ConnectionPort
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: connectionString: The prefix of the public endpoint.
            /// The prefix must be 8 to 64 characters in length,
            /// and can contain lowercase letters and digits.
            /// It must start with a lowercase letter.
            /// </remarks>
            [JsiiProperty(name: "connectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object ConnectionString
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(IClassicInnerConnectionProperty), fullyQualifiedName: "@alicloud/ros-cdk-redis.RosInstance.ClassicInnerConnectionProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Redis.RosInstance.IClassicInnerConnectionProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: connectionPort: The service port number of the ApsaraDB for Redis instance. Valid values: 1024 to 65535.
                /// </remarks>
                [JsiiProperty(name: "connectionPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object ConnectionPort
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: connectionString: The prefix of the public endpoint.
                /// The prefix must be 8 to 64 characters in length,
                /// and can contain lowercase letters and digits.
                /// It must start with a lowercase letter.
                /// </remarks>
                [JsiiProperty(name: "connectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object ConnectionString
                {
                    get => GetInstanceProperty<object>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-redis.RosInstance.ClassicInnerConnectionProperty")]
        public class ClassicInnerConnectionProperty : AlibabaCloud.SDK.ROS.CDK.Redis.RosInstance.IClassicInnerConnectionProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: connectionPort: The service port number of the ApsaraDB for Redis instance. Valid values: 1024 to 65535.
            /// </remarks>
            [JsiiProperty(name: "connectionPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ConnectionPort
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: connectionString: The prefix of the public endpoint.
            /// The prefix must be 8 to 64 characters in length,
            /// and can contain lowercase letters and digits.
            /// It must start with a lowercase letter.
            /// </remarks>
            [JsiiProperty(name: "connectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ConnectionString
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IConnectionsProperty), fullyQualifiedName: "@alicloud/ros-cdk-redis.RosInstance.ConnectionsProperty")]
        public interface IConnectionsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: classicInnerConnection: Classic intranet address.
            /// </remarks>
            [JsiiProperty(name: "classicInnerConnection", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-redis.RosInstance.ClassicInnerConnectionProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ClassicInnerConnection
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: directConnection: Direct connection address. The instance is a cluster instance.
            /// You can apply for a direct connection endpoint as required.
            /// </remarks>
            [JsiiProperty(name: "directConnection", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-redis.RosInstance.DirectConnectionProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? DirectConnection
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: publicConnection: Public address.
            /// </remarks>
            [JsiiProperty(name: "publicConnection", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-redis.RosInstance.PublicConnectionProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? PublicConnection
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcPrivateConnection: Vpc intranet address.
            /// </remarks>
            [JsiiProperty(name: "vpcPrivateConnection", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-redis.RosInstance.VpcPrivateConnectionProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? VpcPrivateConnection
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IConnectionsProperty), fullyQualifiedName: "@alicloud/ros-cdk-redis.RosInstance.ConnectionsProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Redis.RosInstance.IConnectionsProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: classicInnerConnection: Classic intranet address.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "classicInnerConnection", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-redis.RosInstance.ClassicInnerConnectionProperty\"}]}}", isOptional: true)]
                public object? ClassicInnerConnection
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: directConnection: Direct connection address. The instance is a cluster instance.
                /// You can apply for a direct connection endpoint as required.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "directConnection", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-redis.RosInstance.DirectConnectionProperty\"}]}}", isOptional: true)]
                public object? DirectConnection
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: publicConnection: Public address.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "publicConnection", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-redis.RosInstance.PublicConnectionProperty\"}]}}", isOptional: true)]
                public object? PublicConnection
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: vpcPrivateConnection: Vpc intranet address.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "vpcPrivateConnection", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-redis.RosInstance.VpcPrivateConnectionProperty\"}]}}", isOptional: true)]
                public object? VpcPrivateConnection
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-redis.RosInstance.ConnectionsProperty")]
        public class ConnectionsProperty : AlibabaCloud.SDK.ROS.CDK.Redis.RosInstance.IConnectionsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: classicInnerConnection: Classic intranet address.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "classicInnerConnection", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-redis.RosInstance.ClassicInnerConnectionProperty\"}]}}", isOptional: true)]
            public object? ClassicInnerConnection
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: directConnection: Direct connection address. The instance is a cluster instance.
            /// You can apply for a direct connection endpoint as required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "directConnection", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-redis.RosInstance.DirectConnectionProperty\"}]}}", isOptional: true)]
            public object? DirectConnection
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: publicConnection: Public address.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "publicConnection", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-redis.RosInstance.PublicConnectionProperty\"}]}}", isOptional: true)]
            public object? PublicConnection
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcPrivateConnection: Vpc intranet address.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vpcPrivateConnection", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-redis.RosInstance.VpcPrivateConnectionProperty\"}]}}", isOptional: true)]
            public object? VpcPrivateConnection
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IDirectConnectionProperty), fullyQualifiedName: "@alicloud/ros-cdk-redis.RosInstance.DirectConnectionProperty")]
        public interface IDirectConnectionProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: connectionPort: The service port number of the ApsaraDB for Redis instance. Valid values: 1024 to 65535.
            /// </remarks>
            [JsiiProperty(name: "connectionPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object ConnectionPort
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: connectionString: The prefix of the public endpoint.
            /// The prefix must be 8 to 64 characters in length,
            /// and can contain lowercase letters and digits.
            /// It must start with a lowercase letter.
            /// </remarks>
            [JsiiProperty(name: "connectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object ConnectionString
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(IDirectConnectionProperty), fullyQualifiedName: "@alicloud/ros-cdk-redis.RosInstance.DirectConnectionProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Redis.RosInstance.IDirectConnectionProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: connectionPort: The service port number of the ApsaraDB for Redis instance. Valid values: 1024 to 65535.
                /// </remarks>
                [JsiiProperty(name: "connectionPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object ConnectionPort
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: connectionString: The prefix of the public endpoint.
                /// The prefix must be 8 to 64 characters in length,
                /// and can contain lowercase letters and digits.
                /// It must start with a lowercase letter.
                /// </remarks>
                [JsiiProperty(name: "connectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object ConnectionString
                {
                    get => GetInstanceProperty<object>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-redis.RosInstance.DirectConnectionProperty")]
        public class DirectConnectionProperty : AlibabaCloud.SDK.ROS.CDK.Redis.RosInstance.IDirectConnectionProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: connectionPort: The service port number of the ApsaraDB for Redis instance. Valid values: 1024 to 65535.
            /// </remarks>
            [JsiiProperty(name: "connectionPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ConnectionPort
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: connectionString: The prefix of the public endpoint.
            /// The prefix must be 8 to 64 characters in length,
            /// and can contain lowercase letters and digits.
            /// It must start with a lowercase letter.
            /// </remarks>
            [JsiiProperty(name: "connectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ConnectionString
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IInstanceMaintainTimeProperty), fullyQualifiedName: "@alicloud/ros-cdk-redis.RosInstance.InstanceMaintainTimeProperty")]
        public interface IInstanceMaintainTimeProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: maintainEndTime: The end time of the maintenance window.
            /// Specify the time in the ISO 8601 standard in the HH:mmZ format.
            /// The time must be in UTC. For example, if the maintenance ends at 2:00 a.m. UTC+08:00,
            /// you must set this parameter to 18:00Z.
            /// </remarks>
            [JsiiProperty(name: "maintainEndTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? MaintainEndTime
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: maintainStartTime: The start time of the maintenance window.
            /// Specify the time in the ISO 8601 standard in the HH:mmZ format.
            /// The time must be in UTC. For example, if the maintenance starts at 1:00 a.m. UTC+08:00,
            /// you must set this parameter to 17:00Z.
            /// </remarks>
            [JsiiProperty(name: "maintainStartTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? MaintainStartTime
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IInstanceMaintainTimeProperty), fullyQualifiedName: "@alicloud/ros-cdk-redis.RosInstance.InstanceMaintainTimeProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Redis.RosInstance.IInstanceMaintainTimeProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: maintainEndTime: The end time of the maintenance window.
                /// Specify the time in the ISO 8601 standard in the HH:mmZ format.
                /// The time must be in UTC. For example, if the maintenance ends at 2:00 a.m. UTC+08:00,
                /// you must set this parameter to 18:00Z.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "maintainEndTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? MaintainEndTime
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: maintainStartTime: The start time of the maintenance window.
                /// Specify the time in the ISO 8601 standard in the HH:mmZ format.
                /// The time must be in UTC. For example, if the maintenance starts at 1:00 a.m. UTC+08:00,
                /// you must set this parameter to 17:00Z.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "maintainStartTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? MaintainStartTime
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-redis.RosInstance.InstanceMaintainTimeProperty")]
        public class InstanceMaintainTimeProperty : AlibabaCloud.SDK.ROS.CDK.Redis.RosInstance.IInstanceMaintainTimeProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: maintainEndTime: The end time of the maintenance window.
            /// Specify the time in the ISO 8601 standard in the HH:mmZ format.
            /// The time must be in UTC. For example, if the maintenance ends at 2:00 a.m. UTC+08:00,
            /// you must set this parameter to 18:00Z.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maintainEndTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaintainEndTime
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: maintainStartTime: The start time of the maintenance window.
            /// Specify the time in the ISO 8601 standard in the HH:mmZ format.
            /// The time must be in UTC. For example, if the maintenance starts at 1:00 a.m. UTC+08:00,
            /// you must set this parameter to 17:00Z.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maintainStartTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaintainStartTime
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IPublicConnectionProperty), fullyQualifiedName: "@alicloud/ros-cdk-redis.RosInstance.PublicConnectionProperty")]
        public interface IPublicConnectionProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: connectionPort: The service port number of the ApsaraDB for Redis instance. Valid values: 1024 to 65535.
            /// </remarks>
            [JsiiProperty(name: "connectionPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object ConnectionPort
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: connectionString: The prefix of the public endpoint.
            /// The prefix must be 8 to 64 characters in length,
            /// and can contain lowercase letters and digits.
            /// It must start with a lowercase letter.
            /// </remarks>
            [JsiiProperty(name: "connectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object ConnectionString
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(IPublicConnectionProperty), fullyQualifiedName: "@alicloud/ros-cdk-redis.RosInstance.PublicConnectionProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Redis.RosInstance.IPublicConnectionProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: connectionPort: The service port number of the ApsaraDB for Redis instance. Valid values: 1024 to 65535.
                /// </remarks>
                [JsiiProperty(name: "connectionPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object ConnectionPort
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: connectionString: The prefix of the public endpoint.
                /// The prefix must be 8 to 64 characters in length,
                /// and can contain lowercase letters and digits.
                /// It must start with a lowercase letter.
                /// </remarks>
                [JsiiProperty(name: "connectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object ConnectionString
                {
                    get => GetInstanceProperty<object>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-redis.RosInstance.PublicConnectionProperty")]
        public class PublicConnectionProperty : AlibabaCloud.SDK.ROS.CDK.Redis.RosInstance.IPublicConnectionProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: connectionPort: The service port number of the ApsaraDB for Redis instance. Valid values: 1024 to 65535.
            /// </remarks>
            [JsiiProperty(name: "connectionPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ConnectionPort
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: connectionString: The prefix of the public endpoint.
            /// The prefix must be 8 to 64 characters in length,
            /// and can contain lowercase letters and digits.
            /// It must start with a lowercase letter.
            /// </remarks>
            [JsiiProperty(name: "connectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ConnectionString
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(ITagsProperty), fullyQualifiedName: "@alicloud/ros-cdk-redis.RosInstance.TagsProperty")]
        public interface ITagsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: key: undefined
            /// </remarks>
            [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Key
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: value: undefined
            /// </remarks>
            [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Value
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(ITagsProperty), fullyQualifiedName: "@alicloud/ros-cdk-redis.RosInstance.TagsProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Redis.RosInstance.ITagsProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: key: undefined
                /// </remarks>
                [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Key
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: value: undefined
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Value
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-redis.RosInstance.TagsProperty")]
        public class TagsProperty : AlibabaCloud.SDK.ROS.CDK.Redis.RosInstance.ITagsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: key: undefined
            /// </remarks>
            [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Key
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: value: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Value
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IVpcPrivateConnectionProperty), fullyQualifiedName: "@alicloud/ros-cdk-redis.RosInstance.VpcPrivateConnectionProperty")]
        public interface IVpcPrivateConnectionProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: connectionPort: The service port number of the ApsaraDB for Redis instance. Valid values: 1024 to 65535.
            /// </remarks>
            [JsiiProperty(name: "connectionPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object ConnectionPort
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: connectionString: The prefix of the public endpoint.
            /// The prefix must be 8 to 64 characters in length,
            /// and can contain lowercase letters and digits.
            /// It must start with a lowercase letter.
            /// </remarks>
            [JsiiProperty(name: "connectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object ConnectionString
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(IVpcPrivateConnectionProperty), fullyQualifiedName: "@alicloud/ros-cdk-redis.RosInstance.VpcPrivateConnectionProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Redis.RosInstance.IVpcPrivateConnectionProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: connectionPort: The service port number of the ApsaraDB for Redis instance. Valid values: 1024 to 65535.
                /// </remarks>
                [JsiiProperty(name: "connectionPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object ConnectionPort
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: connectionString: The prefix of the public endpoint.
                /// The prefix must be 8 to 64 characters in length,
                /// and can contain lowercase letters and digits.
                /// It must start with a lowercase letter.
                /// </remarks>
                [JsiiProperty(name: "connectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object ConnectionString
                {
                    get => GetInstanceProperty<object>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-redis.RosInstance.VpcPrivateConnectionProperty")]
        public class VpcPrivateConnectionProperty : AlibabaCloud.SDK.ROS.CDK.Redis.RosInstance.IVpcPrivateConnectionProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: connectionPort: The service port number of the ApsaraDB for Redis instance. Valid values: 1024 to 65535.
            /// </remarks>
            [JsiiProperty(name: "connectionPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ConnectionPort
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: connectionString: The prefix of the public endpoint.
            /// The prefix must be 8 to 64 characters in length,
            /// and can contain lowercase letters and digits.
            /// It must start with a lowercase letter.
            /// </remarks>
            [JsiiProperty(name: "connectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ConnectionString
            {
                get;
                set;
            }
        }
    }
}
