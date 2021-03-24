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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Redis.RosInstance))!;

        /// <remarks>
        /// <strong>Attribute</strong>: ConnectionDomain: Connection domain of created instance.
        /// </remarks>
        [JsiiProperty(name: "attrConnectionDomain", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrConnectionDomain
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: InstanceId: Instance id for created redis instance.
        /// </remarks>
        [JsiiProperty(name: "attrInstanceId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: OrderId: Order Id of created instance.
        /// </remarks>
        [JsiiProperty(name: "attrOrderId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrOrderId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: Port: Port of created instance.
        /// </remarks>
        [JsiiProperty(name: "attrPort", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrPort
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to redis. Max support 20 tags to add during create redis. Each tag with two properties Key and Value, and Key is required.
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
        /// <strong>Property</strong>: backupPolicy: Backup policy
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "backupPolicy", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-redis.RosInstance.BackupPolicyProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? BackupPolicy
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: capacity: The storage capacity of redis instance.range from 1 to 512, in GB.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "capacity", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? Capacity
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: engineVersion: Engine version. Supported values: 2.8, 4.0 and 5.0.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "engineVersion", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? EngineVersion
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: evictionPolicy: The eviction policy of cache data storage.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "evictionPolicy", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? EvictionPolicy
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceClass: Redis instance type. Refer the Redis instance type reference, such as 'redis.master.small.default', 'redis.master.4xlarge.default', 'redis.sharding.mid.default' etc
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceClass", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? InstanceClass
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceConnection: Instance connection message.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceConnection", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-redis.RosInstance.InstanceConnectionProperty\"}]}}", isOptional: true)]
        public virtual object? InstanceConnection
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
        [JsiiProperty(name: "instanceName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? InstanceName
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "password", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? Password
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: securityGroupId: The IDs of security groups. Separate multiple security group IDs with commas (,) and up to 10 can be set.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? SecurityGroupId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: sslEnabled: Modifies the SSL status. Valid values:
        /// Disable: disables SSL encryption.
        /// Enable: enables SSL encryption.
        /// Update: updates the SSL certificate.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "sslEnabled", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? SslEnabled
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: The VPC id to create ecs instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? VpcId
        {
            get => GetInstanceProperty<string?>();
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
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? VSwitchId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneId: The zone id of input region.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? ZoneId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IBackupPolicyProperty), fullyQualifiedName: "@alicloud/ros-cdk-redis.RosInstance.BackupPolicyProperty")]
        public interface IBackupPolicyProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: preferredBackupPeriod: The backup cycle. Valid values: Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday
            /// </remarks>
            [JsiiProperty(name: "preferredBackupPeriod", typeJson: "{\"primitive\":\"string\"}")]
            string PreferredBackupPeriod
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: preferredBackupTime: The time period in which data is backed up. The time period must be in the HH:mmZ-HH:mmZ format.
            /// </remarks>
            [JsiiProperty(name: "preferredBackupTime", typeJson: "{\"primitive\":\"string\"}")]
            string PreferredBackupTime
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: enableBackupLog: Enable or disable incremental backup. Options:
            /// 1, means open.
            /// 0, which means off, the default value.
            /// </remarks>
            [JsiiProperty(name: "enableBackupLog", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            double? EnableBackupLog
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
                [JsiiProperty(name: "preferredBackupPeriod", typeJson: "{\"primitive\":\"string\"}")]
                public string PreferredBackupPeriod
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: preferredBackupTime: The time period in which data is backed up. The time period must be in the HH:mmZ-HH:mmZ format.
                /// </remarks>
                [JsiiProperty(name: "preferredBackupTime", typeJson: "{\"primitive\":\"string\"}")]
                public string PreferredBackupTime
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: enableBackupLog: Enable or disable incremental backup. Options:
                /// 1, means open.
                /// 0, which means off, the default value.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "enableBackupLog", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
                public double? EnableBackupLog
                {
                    get => GetInstanceProperty<double?>();
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
            [JsiiProperty(name: "preferredBackupPeriod", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string PreferredBackupPeriod
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: preferredBackupTime: The time period in which data is backed up. The time period must be in the HH:mmZ-HH:mmZ format.
            /// </remarks>
            [JsiiProperty(name: "preferredBackupTime", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string PreferredBackupTime
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
            [JsiiProperty(name: "enableBackupLog", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
            public double? EnableBackupLog
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IInstanceConnectionProperty), fullyQualifiedName: "@alicloud/ros-cdk-redis.RosInstance.InstanceConnectionProperty")]
        public interface IInstanceConnectionProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: ipType: The network type of the new endpoint. Value values:
            /// - Private: internal network.
            /// - Public: public network.
            /// </remarks>
            [JsiiProperty(name: "ipType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? IpType
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: newConnectionString: The prefix of the new endpoint. 
            /// The new endpoint of the ApsaraDB for Redis instance is in the <Prefix>.redis.rds.aliyuncs.com format. 
            /// The prefix of the endpoint must start with a lowercase letter and can contain lowercase letters and digits. 
            /// The prefix can be 8 to 64 characters in length.
            /// </remarks>
            [JsiiProperty(name: "newConnectionString", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? NewConnectionString
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: port: The service port of the instance. 
            /// Valid values: 1024 to 65535.
            /// </remarks>
            [JsiiProperty(name: "port", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            double? Port
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IInstanceConnectionProperty), fullyQualifiedName: "@alicloud/ros-cdk-redis.RosInstance.InstanceConnectionProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Redis.RosInstance.IInstanceConnectionProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: ipType: The network type of the new endpoint. Value values:
                /// - Private: internal network.
                /// - Public: public network.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "ipType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? IpType
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: newConnectionString: The prefix of the new endpoint. 
                /// The new endpoint of the ApsaraDB for Redis instance is in the <Prefix>.redis.rds.aliyuncs.com format. 
                /// The prefix of the endpoint must start with a lowercase letter and can contain lowercase letters and digits. 
                /// The prefix can be 8 to 64 characters in length.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "newConnectionString", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? NewConnectionString
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: port: The service port of the instance. 
                /// Valid values: 1024 to 65535.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "port", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
                public double? Port
                {
                    get => GetInstanceProperty<double?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-redis.RosInstance.InstanceConnectionProperty")]
        public class InstanceConnectionProperty : AlibabaCloud.SDK.ROS.CDK.Redis.RosInstance.IInstanceConnectionProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: ipType: The network type of the new endpoint. Value values:
            /// - Private: internal network.
            /// - Public: public network.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ipType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? IpType
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: newConnectionString: The prefix of the new endpoint. 
            /// The new endpoint of the ApsaraDB for Redis instance is in the <Prefix>.redis.rds.aliyuncs.com format. 
            /// The prefix of the endpoint must start with a lowercase letter and can contain lowercase letters and digits. 
            /// The prefix can be 8 to 64 characters in length.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "newConnectionString", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? NewConnectionString
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: port: The service port of the instance. 
            /// Valid values: 1024 to 65535.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "port", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
            public double? Port
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
            [JsiiProperty(name: "maintainEndTime", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? MaintainEndTime
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
            [JsiiProperty(name: "maintainStartTime", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? MaintainStartTime
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
                [JsiiProperty(name: "maintainEndTime", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? MaintainEndTime
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: maintainStartTime: The start time of the maintenance window. 
                /// Specify the time in the ISO 8601 standard in the HH:mmZ format. 
                /// The time must be in UTC. For example, if the maintenance starts at 1:00 a.m. UTC+08:00, 
                /// you must set this parameter to 17:00Z.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "maintainStartTime", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? MaintainStartTime
                {
                    get => GetInstanceProperty<string?>();
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
            [JsiiProperty(name: "maintainEndTime", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? MaintainEndTime
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
            [JsiiProperty(name: "maintainStartTime", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? MaintainStartTime
            {
                get;
                set;
            }
        }
    }
}
