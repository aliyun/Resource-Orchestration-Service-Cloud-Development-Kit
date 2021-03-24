using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mongodb
{
    /// <summary>Properties for defining a `ALIYUN::MONGODB::ShardingInstance`.</summary>
    [JsiiInterface(nativeType: typeof(IShardingInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-mongodb.ShardingInstanceProps")]
    public interface IShardingInstanceProps
    {
        /// <summary>Property configServer:.</summary>
        [JsiiProperty(name: "configServer", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-mongodb.RosShardingInstance.ConfigServerProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object ConfigServer
        {
            get;
        }

        /// <summary>Property mongos:.</summary>
        [JsiiProperty(name: "mongos", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mongodb.RosShardingInstance.MongosProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Mongos
        {
            get;
        }

        /// <summary>Property replicaSet:.</summary>
        [JsiiProperty(name: "replicaSet", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mongodb.RosShardingInstance.ReplicaSetProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object ReplicaSet
        {
            get;
        }

        /// <summary>Property accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.</summary>
        [JsiiProperty(name: "accountPassword", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? AccountPassword
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoRenew: Indicates whether automatic renewal is enabled for the instance.</summary>
        /// <remarks>
        /// Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
        /// </remarks>
        [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoRenew
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid.</summary>
        [JsiiProperty(name: "chargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ChargeType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dbInstanceDescription: Description of created database instance.</summary>
        [JsiiProperty(name: "dbInstanceDescription", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? DbInstanceDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property engineVersion: Database instance version.Support 3.4, 4.0, 4.2.</summary>
        [JsiiProperty(name: "engineVersion", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? EngineVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property networkType: The instance network type.</summary>
        /// <remarks>
        /// Support 'CLASSIC' and 'VPC' only, default is 'CLASSIC'.
        /// </remarks>
        [JsiiProperty(name: "networkType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? NetworkType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.</summary>
        [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? Period
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property protocolType: Protocol type.</summary>
        /// <remarks>
        /// Valid value: mongodb or dynamodb.
        /// </remarks>
        [JsiiProperty(name: "protocolType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ProtocolType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property restoreTime: The time to restore the cloned instance to.</summary>
        /// <remarks>
        /// The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
        /// </remarks>
        [JsiiProperty(name: "restoreTime", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? RestoreTime
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property securityIpArray: Security ips to add or remove.</summary>
        [JsiiProperty(name: "securityIpArray", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SecurityIpArray
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property srcDbInstanceId: Create an instance of the backup set based on an instance.</summary>
        [JsiiProperty(name: "srcDbInstanceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SrcDbInstanceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB.</summary>
        [JsiiProperty(name: "storageEngine", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? StorageEngine
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags to attach to instance.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        System.Collections.Generic.IDictionary<string, object>[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vpcId: The VPC id to create mongodb instance.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? VpcId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vSwitchId: The vSwitch Id to create mongodb instance.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? VSwitchId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property zoneId: On which zone to create the instance.</summary>
        /// <remarks>
        /// If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
        /// </remarks>
        [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ZoneId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::MONGODB::ShardingInstance`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IShardingInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-mongodb.ShardingInstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mongodb.IShardingInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property configServer:.</summary>
            [JsiiProperty(name: "configServer", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-mongodb.RosShardingInstance.ConfigServerProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object ConfigServer
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property mongos:.</summary>
            [JsiiProperty(name: "mongos", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mongodb.RosShardingInstance.MongosProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Mongos
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property replicaSet:.</summary>
            [JsiiProperty(name: "replicaSet", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mongodb.RosShardingInstance.ReplicaSetProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object ReplicaSet
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "accountPassword", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AccountPassword
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property autoRenew: Indicates whether automatic renewal is enabled for the instance.</summary>
            /// <remarks>
            /// Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoRenew
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "chargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ChargeType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property dbInstanceDescription: Description of created database instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dbInstanceDescription", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DbInstanceDescription
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property engineVersion: Database instance version.Support 3.4, 4.0, 4.2.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "engineVersion", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? EngineVersion
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property networkType: The instance network type.</summary>
            /// <remarks>
            /// Support 'CLASSIC' and 'VPC' only, default is 'CLASSIC'.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "networkType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? NetworkType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? Period
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property protocolType: Protocol type.</summary>
            /// <remarks>
            /// Valid value: mongodb or dynamodb.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "protocolType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ProtocolType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property restoreTime: The time to restore the cloned instance to.</summary>
            /// <remarks>
            /// The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "restoreTime", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? RestoreTime
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property securityIpArray: Security ips to add or remove.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "securityIpArray", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SecurityIpArray
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property srcDbInstanceId: Create an instance of the backup set based on an instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "srcDbInstanceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SrcDbInstanceId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "storageEngine", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? StorageEngine
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property tags: Tags to attach to instance.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true)]
            public System.Collections.Generic.IDictionary<string, object>[]? Tags
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>[]?>();
            }

            /// <summary>Property vpcId: The VPC id to create mongodb instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? VpcId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property vSwitchId: The vSwitch Id to create mongodb instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? VSwitchId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property zoneId: On which zone to create the instance.</summary>
            /// <remarks>
            /// If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ZoneId
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
