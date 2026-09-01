using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mongodb
{
    /// <summary>Properties for defining a `Instance`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-instance
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-mongodb.InstanceProps")]
    public interface IInstanceProps
    {
        /// <summary>Property dbInstanceClass: MongoDB instance supported instance type, make sure it should be correct.</summary>
        [JsiiProperty(name: "dbInstanceClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbInstanceClass
        {
            get;
        }

        /// <summary>Property dbInstanceStorage: Database instance storage size.</summary>
        /// <remarks>
        /// MongoDB is [5,3000], increased every 10 GB, Unit in GB
        /// </remarks>
        [JsiiProperty(name: "dbInstanceStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbInstanceStorage
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

        /// <summary>Property auditPolicyOptions: Audit policy options.</summary>
        [JsiiProperty(name: "auditPolicyOptions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mongodb.RosInstance.AuditPolicyOptionsProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AuditPolicyOptions
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

        /// <summary>Property backupId: The backup point ID.</summary>
        /// <remarks>
        /// To query the backup point ID, call the <a href="">DescribeBackups</a>
        /// operation.
        ///
        ///     You must specify this parameter and the SrcDBInstanceId parameter only when you
        ///     clone an instance based on a backup point.
        /// </remarks>
        [JsiiProperty(name: "backupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BackupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property backupPolicyOptions: Backup policy options.</summary>
        [JsiiProperty(name: "backupPolicyOptions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mongodb.RosInstance.BackupPolicyOptionsProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BackupPolicyOptions
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property businessInfo: The business information.</summary>
        /// <remarks>
        /// It is an additional parameter.
        /// </remarks>
        [JsiiProperty(name: "businessInfo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BusinessInfo
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

        /// <summary>Property clusterId: The dedicated cluster ID.</summary>
        [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ClusterId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property couponNo: Specifies whether to use a coupon.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>default or null (default): Uses a coupon.</description>
        /// <description>youhuiquan_promotion_option_id_for_blank: Does not use a coupon.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "couponNo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CouponNo
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property databaseNames: The database name.</summary>
        /// <remarks>
        ///     When you clone an instance, you can specify this parameter to clone specific
        ///     databases. If you do not specify this parameter, all databases of the instance
        ///     are cloned.
        /// </remarks>
        [JsiiProperty(name: "databaseNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DatabaseNames
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

        /// <summary>Property dbInstanceReleaseProtection: Enables instance release protection.</summary>
        /// <remarks>
        /// Values:
        ///
        /// <list type="bullet">
        /// <description>true: Enabled.</description>
        /// <description>false: Not enabled.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "dbInstanceReleaseProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbInstanceReleaseProtection
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property encrypted: Whether to enable cloud disk encryption.</summary>
        [JsiiProperty(name: "encrypted", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Encrypted
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property encryptionKey: Custom key ID.</summary>
        [JsiiProperty(name: "encryptionKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EncryptionKey
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

        /// <summary>Property privateConnections: Connection configs of private connection.</summary>
        [JsiiProperty(name: "privateConnections", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mongodb.RosInstance.PrivateConnectionsProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PrivateConnections
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property provisionedIops: Provisioned IOPS.</summary>
        /// <remarks>
        /// The value range is 0 to 50000.
        /// </remarks>
        [JsiiProperty(name: "provisionedIops", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProvisionedIops
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property readonlyReplicas: The number of read-only nodes in the replica set instance.</summary>
        /// <remarks>
        /// Valid values are
        /// integers from 0 to 5. The default value is 0.
        /// </remarks>
        [JsiiProperty(name: "readonlyReplicas", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ReadonlyReplicas
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property replicationFactor: The number of nodes in the replica set.</summary>
        /// <remarks>
        /// Allowed values: [3, 5, 7], default to 3.
        /// </remarks>
        [JsiiProperty(name: "replicationFactor", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ReplicationFactor
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

        /// <summary>Property restoreType: The method to restore an instance from a backup.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>0: Restores the instance to a specified backup set.</description>
        /// <description>1: Restores the instance to a specified point in time.</description>
        /// <description>2: Restores a released instance to a specified backup set.</description>
        /// <description>3: Restores the instance to a specified geo-redundant backup set.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "restoreType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RestoreType
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

        /// <summary>Property securityGroupId: The ID of the ECS security group.</summary>
        /// <remarks>
        /// Each ApsaraDB for MongoDB instance can be added in up to 10 security group.
        /// You can call the ECS DescribeSecurityGroup to describe the ID of the security group in the target region.
        /// </remarks>
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecurityGroupId
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

        /// <summary>Property srcRegion: The source instance region.</summary>
        /// <remarks>
        ///     <list type="bullet">
        ///     <description>When the backup recovery type is 2 or 3, this parameter is required.</description>
        ///     </list>
        /// </remarks>
        [JsiiProperty(name: "srcRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SrcRegion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sslOptions: SSL options.</summary>
        [JsiiProperty(name: "sslOptions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mongodb.RosInstance.SSLOptionsProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SslOptions
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
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-mongodb.RosInstance.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Mongodb.RosInstance.ITagsProperty[]? Tags
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

        /// <summary>Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC.</summary>
        /// <remarks>
        /// If set to:
        ///
        /// <list type="bullet">
        /// <description>true: enables password free.</description>
        /// <description>false: disables password free.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "vpcPasswordFree", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VpcPasswordFree
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

        /// <summary>Properties for defining a `Instance`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-instance
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-mongodb.InstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mongodb.IInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property dbInstanceClass: MongoDB instance supported instance type, make sure it should be correct.</summary>
            [JsiiProperty(name: "dbInstanceClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbInstanceClass
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dbInstanceStorage: Database instance storage size.</summary>
            /// <remarks>
            /// MongoDB is [5,3000], increased every 10 GB, Unit in GB
            /// </remarks>
            [JsiiProperty(name: "dbInstanceStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbInstanceStorage
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

            /// <summary>Property auditPolicyOptions: Audit policy options.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "auditPolicyOptions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mongodb.RosInstance.AuditPolicyOptionsProperty\"}]}}", isOptional: true)]
            public object? AuditPolicyOptions
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

            /// <summary>Property backupId: The backup point ID.</summary>
            /// <remarks>
            /// To query the backup point ID, call the <a href="">DescribeBackups</a>
            /// operation.
            ///
            ///     You must specify this parameter and the SrcDBInstanceId parameter only when you
            ///     clone an instance based on a backup point.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "backupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BackupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property backupPolicyOptions: Backup policy options.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "backupPolicyOptions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mongodb.RosInstance.BackupPolicyOptionsProperty\"}]}}", isOptional: true)]
            public object? BackupPolicyOptions
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property businessInfo: The business information.</summary>
            /// <remarks>
            /// It is an additional parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "businessInfo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BusinessInfo
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

            /// <summary>Property clusterId: The dedicated cluster ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ClusterId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property couponNo: Specifies whether to use a coupon.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>default or null (default): Uses a coupon.</description>
            /// <description>youhuiquan_promotion_option_id_for_blank: Does not use a coupon.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "couponNo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CouponNo
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property databaseNames: The database name.</summary>
            /// <remarks>
            ///     When you clone an instance, you can specify this parameter to clone specific
            ///     databases. If you do not specify this parameter, all databases of the instance
            ///     are cloned.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "databaseNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DatabaseNames
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

            /// <summary>Property dbInstanceReleaseProtection: Enables instance release protection.</summary>
            /// <remarks>
            /// Values:
            ///
            /// <list type="bullet">
            /// <description>true: Enabled.</description>
            /// <description>false: Not enabled.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbInstanceReleaseProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbInstanceReleaseProtection
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property encrypted: Whether to enable cloud disk encryption.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "encrypted", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Encrypted
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property encryptionKey: Custom key ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "encryptionKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EncryptionKey
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

            /// <summary>Property privateConnections: Connection configs of private connection.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "privateConnections", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mongodb.RosInstance.PrivateConnectionsProperty\"}]}}", isOptional: true)]
            public object? PrivateConnections
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property provisionedIops: Provisioned IOPS.</summary>
            /// <remarks>
            /// The value range is 0 to 50000.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "provisionedIops", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProvisionedIops
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property readonlyReplicas: The number of read-only nodes in the replica set instance.</summary>
            /// <remarks>
            /// Valid values are
            /// integers from 0 to 5. The default value is 0.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "readonlyReplicas", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ReadonlyReplicas
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property replicationFactor: The number of nodes in the replica set.</summary>
            /// <remarks>
            /// Allowed values: [3, 5, 7], default to 3.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "replicationFactor", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ReplicationFactor
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

            /// <summary>Property restoreType: The method to restore an instance from a backup.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>0: Restores the instance to a specified backup set.</description>
            /// <description>1: Restores the instance to a specified point in time.</description>
            /// <description>2: Restores a released instance to a specified backup set.</description>
            /// <description>3: Restores the instance to a specified geo-redundant backup set.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "restoreType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RestoreType
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

            /// <summary>Property securityGroupId: The ID of the ECS security group.</summary>
            /// <remarks>
            /// Each ApsaraDB for MongoDB instance can be added in up to 10 security group.
            /// You can call the ECS DescribeSecurityGroup to describe the ID of the security group in the target region.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecurityGroupId
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

            /// <summary>Property srcRegion: The source instance region.</summary>
            /// <remarks>
            ///     <list type="bullet">
            ///     <description>When the backup recovery type is 2 or 3, this parameter is required.</description>
            ///     </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "srcRegion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SrcRegion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sslOptions: SSL options.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "sslOptions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-mongodb.RosInstance.SSLOptionsProperty\"}]}}", isOptional: true)]
            public object? SslOptions
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
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-mongodb.RosInstance.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Mongodb.RosInstance.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Mongodb.RosInstance.ITagsProperty[]?>();
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

            /// <summary>Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC.</summary>
            /// <remarks>
            /// If set to:
            ///
            /// <list type="bullet">
            /// <description>true: enables password free.</description>
            /// <description>false: disables password free.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vpcPasswordFree", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VpcPasswordFree
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
