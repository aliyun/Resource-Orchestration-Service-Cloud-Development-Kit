using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mongodb
{
    /// <summary>Properties for defining a `ShardingInstance`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardinginstance
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IShardingInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-mongodb.ShardingInstanceProps")]
    public interface IShardingInstanceProps
    {
        /// <summary>Property configServer: The information of Configserver nodes.</summary>
        [JsiiProperty(name: "configServer", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mongodb.RosShardingInstance.ConfigServerProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object ConfigServer
        {
            get;
        }

        /// <summary>Property mongos: The information of Mongos nodes.</summary>
        [JsiiProperty(name: "mongos", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mongodb.RosShardingInstance.MongosProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Mongos
        {
            get;
        }

        /// <summary>Property replicaSet: The information of shard nodes.</summary>
        [JsiiProperty(name: "replicaSet", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mongodb.RosShardingInstance.ReplicaSetProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object ReplicaSet
        {
            get;
        }

        /// <summary>Property accountPassword: The password of the root account.</summary>
        /// <remarks>
        /// The password must meet the following
        /// requirements:
        ///
        /// <list type="bullet">
        /// <description>It must contain at least three of the following character types: uppercase
        /// letters, lowercase letters, digits, and special characters.</description>
        /// <description>Special characters include !@#$%^&amp;*()_+-=</description>
        /// <description>It must be 8 to 32 characters in length.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "accountPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AccountPassword
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoRenew: Specifies whether to enable auto-renewal for the instance.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>true: Auto-renewal is enabled.</description>
        /// <description>false: Auto-renewal is disabled. You must manually renew the instance. This is
        /// the default value.</description>
        /// </list>
        ///
        ///     This parameter is optional and takes effect only when you set the ChargeType
        ///     parameter to PrePaid.
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
        [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ChargeType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dbInstanceDescription: The name of the instance.</summary>
        /// <remarks>
        /// The name must meet the following requirements:
        ///
        /// <list type="bullet">
        /// <description>It must start with a Chinese character or a letter.</description>
        /// <description>It can contain digits, Chinese characters, letters, underscores (_), periods
        /// (.), and hyphens (-).</description>
        /// <description>It must be 2 to 256 characters in length.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "dbInstanceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbInstanceDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property engineVersion: The database version.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>8.0</description>
        /// <description>7.0</description>
        /// <description>6.0</description>
        /// <description>5.0</description>
        /// <description>4.4</description>
        /// <description>4.2</description>
        /// <description>4.0</description>
        /// </list>
        ///
        ///     <list type="bullet">
        ///     <description>When you clone an instance by calling this operation, the value of this
        ///     parameter must be the same as that of the source instance.</description>
        ///     </list>
        /// </remarks>
        [JsiiProperty(name: "engineVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EngineVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property hiddenZoneId: Configure the zone where the hidden node resides to implement multi-availability zone deployment.</summary>
        /// <remarks>
        /// When the value of the EngineVersion is 4.4 and later, this parameter is available and required.
        /// The value of this parameter cannot be the same as that of ZoneId and SecondaryZoneId.
        /// </remarks>
        [JsiiProperty(name: "hiddenZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HiddenZoneId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property period: The subscription duration of the instance.</summary>
        /// <remarks>
        /// Unit: month.
        /// Valid values: 1 to 9 (integer), 12, 24, 36, and 60.
        ///
        ///     This parameter is required and takes effect only when you set the ChargeType
        ///     parameter to PrePaid.
        /// </remarks>
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Period
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
        [JsiiProperty(name: "protocolType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProtocolType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
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
        [JsiiProperty(name: "restoreTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RestoreTime
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property secondaryZoneId: Configure the zone where the secondary node resides to implement multi-availability zone deployment.</summary>
        /// <remarks>
        /// When the value of the EngineVersion is 4.4 and later, this parameter is available and required.The value of this parameter cannot be the same as that of ZoneId and HiddenZoneId.
        /// </remarks>
        [JsiiProperty(name: "secondaryZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecondaryZoneId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property securityIpArray: Security ips to add or remove.</summary>
        /// <remarks>
        /// Update to this property will cover the current security ips.
        /// </remarks>
        [JsiiProperty(name: "securityIpArray", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecurityIpArray
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property srcDbInstanceId: The source instance ID.</summary>
        /// <remarks>
        ///     This parameter is required only when you clone an instance by calling this
        ///     operation. You must also specify the RestoreTime parameter.
        /// </remarks>
        [JsiiProperty(name: "srcDbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SrcDbInstanceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB.</summary>
        [JsiiProperty(name: "storageEngine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? StorageEngine
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property storageType: The storage type of the instance.</summary>
        /// <remarks>
        /// Instances of MongoDB 4.4 and later only support cloud disks. cloud_essd1 is selected if you leave this parameter empty.
        /// Instances of MongoDB 4.2 and earlier support only local disks. local_ssd is selected if you leave this parameter empty.
        /// </remarks>
        [JsiiProperty(name: "storageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? StorageType
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
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-mongodb.RosShardingInstance.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Mongodb.RosShardingInstance.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE).</summary>
        /// <remarks>
        /// Valid values:
        /// true: enable TDE
        /// false: disable TDE (default)
        /// Note: You cannot disable TDE after it is enabled.
        /// </remarks>
        [JsiiProperty(name: "tdeStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TdeStatus
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vpcId: The VPC id to create mongodb instance.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VpcId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vSwitchId: The vSwitch Id to create mongodb instance.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VSwitchId
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
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ZoneId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ShardingInstance`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardinginstance
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IShardingInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-mongodb.ShardingInstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mongodb.IShardingInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property configServer: The information of Configserver nodes.</summary>
            [JsiiProperty(name: "configServer", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mongodb.RosShardingInstance.ConfigServerProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object ConfigServer
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property mongos: The information of Mongos nodes.</summary>
            [JsiiProperty(name: "mongos", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mongodb.RosShardingInstance.MongosProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Mongos
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property replicaSet: The information of shard nodes.</summary>
            [JsiiProperty(name: "replicaSet", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mongodb.RosShardingInstance.ReplicaSetProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object ReplicaSet
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property accountPassword: The password of the root account.</summary>
            /// <remarks>
            /// The password must meet the following
            /// requirements:
            ///
            /// <list type="bullet">
            /// <description>It must contain at least three of the following character types: uppercase
            /// letters, lowercase letters, digits, and special characters.</description>
            /// <description>Special characters include !@#$%^&amp;*()_+-=</description>
            /// <description>It must be 8 to 32 characters in length.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accountPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AccountPassword
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoRenew: Specifies whether to enable auto-renewal for the instance.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>true: Auto-renewal is enabled.</description>
            /// <description>false: Auto-renewal is disabled. You must manually renew the instance. This is
            /// the default value.</description>
            /// </list>
            ///
            ///     This parameter is optional and takes effect only when you set the ChargeType
            ///     parameter to PrePaid.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoRenew
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ChargeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dbInstanceDescription: The name of the instance.</summary>
            /// <remarks>
            /// The name must meet the following requirements:
            ///
            /// <list type="bullet">
            /// <description>It must start with a Chinese character or a letter.</description>
            /// <description>It can contain digits, Chinese characters, letters, underscores (_), periods
            /// (.), and hyphens (-).</description>
            /// <description>It must be 2 to 256 characters in length.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbInstanceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbInstanceDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property engineVersion: The database version.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>8.0</description>
            /// <description>7.0</description>
            /// <description>6.0</description>
            /// <description>5.0</description>
            /// <description>4.4</description>
            /// <description>4.2</description>
            /// <description>4.0</description>
            /// </list>
            ///
            ///     <list type="bullet">
            ///     <description>When you clone an instance by calling this operation, the value of this
            ///     parameter must be the same as that of the source instance.</description>
            ///     </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "engineVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EngineVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property hiddenZoneId: Configure the zone where the hidden node resides to implement multi-availability zone deployment.</summary>
            /// <remarks>
            /// When the value of the EngineVersion is 4.4 and later, this parameter is available and required.
            /// The value of this parameter cannot be the same as that of ZoneId and SecondaryZoneId.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "hiddenZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HiddenZoneId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property period: The subscription duration of the instance.</summary>
            /// <remarks>
            /// Unit: month.
            /// Valid values: 1 to 9 (integer), 12, 24, 36, and 60.
            ///
            ///     This parameter is required and takes effect only when you set the ChargeType
            ///     parameter to PrePaid.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Period
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property protocolType: Protocol type.</summary>
            /// <remarks>
            /// Valid value: mongodb or dynamodb.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "protocolType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProtocolType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property restoreTime: The time to restore the cloned instance to.</summary>
            /// <remarks>
            /// The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "restoreTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RestoreTime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property secondaryZoneId: Configure the zone where the secondary node resides to implement multi-availability zone deployment.</summary>
            /// <remarks>
            /// When the value of the EngineVersion is 4.4 and later, this parameter is available and required.The value of this parameter cannot be the same as that of ZoneId and HiddenZoneId.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "secondaryZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecondaryZoneId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property securityIpArray: Security ips to add or remove.</summary>
            /// <remarks>
            /// Update to this property will cover the current security ips.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityIpArray", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecurityIpArray
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property srcDbInstanceId: The source instance ID.</summary>
            /// <remarks>
            ///     This parameter is required only when you clone an instance by calling this
            ///     operation. You must also specify the RestoreTime parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "srcDbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SrcDbInstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "storageEngine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StorageEngine
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property storageType: The storage type of the instance.</summary>
            /// <remarks>
            /// Instances of MongoDB 4.4 and later only support cloud disks. cloud_essd1 is selected if you leave this parameter empty.
            /// Instances of MongoDB 4.2 and earlier support only local disks. local_ssd is selected if you leave this parameter empty.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "storageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StorageType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags to attach to instance.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-mongodb.RosShardingInstance.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Mongodb.RosShardingInstance.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Mongodb.RosShardingInstance.ITagsProperty[]?>();
            }

            /// <summary>Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE).</summary>
            /// <remarks>
            /// Valid values:
            /// true: enable TDE
            /// false: disable TDE (default)
            /// Note: You cannot disable TDE after it is enabled.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tdeStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TdeStatus
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vpcId: The VPC id to create mongodb instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VpcId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vSwitchId: The vSwitch Id to create mongodb instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VSwitchId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property zoneId: On which zone to create the instance.</summary>
            /// <remarks>
            /// If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ZoneId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
