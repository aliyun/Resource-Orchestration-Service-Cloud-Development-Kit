using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Gpdb
{
    /// <summary>Properties for defining a `ElasticDBInstance`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-elasticdbinstance
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IElasticDBInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-gpdb.ElasticDBInstanceProps")]
    public interface IElasticDBInstanceProps
    {
        /// <summary>Property engineVersion: The version of the database engine.</summary>
        /// <remarks>
        /// For example: 6.0、7.0
        /// </remarks>
        [JsiiProperty(name: "engineVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EngineVersion
        {
            get;
        }

        /// <summary>Property instanceSpec: The specification of segment nodes.</summary>
        /// <remarks>
        /// For example: 2C16G, 4C32G, 16C128G.
        /// </remarks>
        [JsiiProperty(name: "instanceSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceSpec
        {
            get;
        }

        /// <summary>Property segNodeNum: The number of segment nodes.</summary>
        /// <remarks>
        /// For the high availability version, the value ranges from 4 to 512.
        /// The basic version ranges from 2 to 512.
        /// </remarks>
        [JsiiProperty(name: "segNodeNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SegNodeNum
        {
            get;
        }

        /// <summary>Property segStorageType: The disk type of segment nodes.</summary>
        /// <remarks>
        /// For example: cloud_essd, cloud_efficiency.
        /// </remarks>
        [JsiiProperty(name: "segStorageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SegStorageType
        {
            get;
        }

        /// <summary>Property storageSize: The storage capacity of per segment node.</summary>
        /// <remarks>
        /// Unit: GB. Minimum is 50, max is 4000, step is 50.
        /// </remarks>
        [JsiiProperty(name: "storageSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object StorageSize
        {
            get;
        }

        /// <summary>Property vSwitchId: The vSwitch ID of the instance.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VSwitchId
        {
            get;
        }

        /// <summary>Property zoneId: The zone ID of the instance, such as cn-hangzhou-d.</summary>
        /// <remarks>
        /// You can call the DescribeRegions
        /// operation to query the most recent zone list.
        /// </remarks>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ZoneId
        {
            get;
        }

        /// <summary>Property dbInstanceCategory: DB instance category, valid values: Basic, HighAvailability.</summary>
        /// <remarks>
        /// This parameter must be passed in to create a storage reservation mode instance.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbInstanceCategory
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dbInstanceDescription: The description of the instance.</summary>
        /// <remarks>
        /// The description cannot exceed 256 characters in length.
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

        /// <summary>Property dbInstanceMode: The db instance mode.</summary>
        /// <remarks>
        /// Valid values: StorageElastic, Serverless, Classic.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbInstanceMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property encryptionKey: If the EncryptionType parameter is set to CloudDisk, you must specify this parameter to the encryption key that is in the same region with the disks that is specified by the EncryptionType parameter.</summary>
        /// <remarks>
        /// Otherwise, leave this parameter empty.
        /// </remarks>
        [JsiiProperty(name: "encryptionKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EncryptionKey
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property encryptionType: The type of the encryption.</summary>
        /// <remarks>
        /// Default value: NULL. Valid values:
        /// NULL: Encryption is disabled.
        /// CloudDisk: Encryption is enabled on disks and the encryption key is specified by using the EncryptionKey parameter.
        /// Note: Disk encryption cannot be disabled after it is enabled.
        /// </remarks>
        [JsiiProperty(name: "encryptionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EncryptionType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property masterNodeNum: The number of master nodes.</summary>
        /// <remarks>
        /// Minimum is 1, max is 2.
        /// </remarks>
        [JsiiProperty(name: "masterNodeNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MasterNodeNum
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property payType: The billing method of the instance.</summary>
        /// <remarks>
        /// Default value: Postpaid. Valid values:
        /// Postpaid: pay-as-you-go
        /// Prepaid: subscription
        /// </remarks>
        [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PayType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property period: The subscription period.</summary>
        /// <remarks>
        /// While choose by pay by month, it could be from 1 to 11. While choose pay by year, it could be from 1 to 3.
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

        /// <summary>Property periodUnit: Unit of subscription period, it could be Month\/Year.</summary>
        /// <remarks>
        /// Default value is Month.
        /// </remarks>
        [JsiiProperty(name: "periodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PeriodUnit
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property privateIpAddress: Private IP address.</summary>
        [JsiiProperty(name: "privateIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PrivateIpAddress
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property securityIpList: The whitelist of IP addresses that are allowed to access the instance.</summary>
        /// <remarks>
        /// Default value:
        /// 127.0.0.1.
        /// </remarks>
        [JsiiProperty(name: "securityIpList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecurityIpList
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
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-gpdb.RosElasticDBInstance.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Gpdb.RosElasticDBInstance.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vpcId: The VPC ID of the instance.</summary>
        /// <remarks>
        /// If you set the InstanceNetworkType parameter to VPC, you
        /// must also specify the VPCId parameter. The specified region of the VPC must be the
        /// same as the RegionId value.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VpcId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ElasticDBInstance`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-elasticdbinstance
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IElasticDBInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-gpdb.ElasticDBInstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Gpdb.IElasticDBInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property engineVersion: The version of the database engine.</summary>
            /// <remarks>
            /// For example: 6.0、7.0
            /// </remarks>
            [JsiiProperty(name: "engineVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EngineVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceSpec: The specification of segment nodes.</summary>
            /// <remarks>
            /// For example: 2C16G, 4C32G, 16C128G.
            /// </remarks>
            [JsiiProperty(name: "instanceSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceSpec
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property segNodeNum: The number of segment nodes.</summary>
            /// <remarks>
            /// For the high availability version, the value ranges from 4 to 512.
            /// The basic version ranges from 2 to 512.
            /// </remarks>
            [JsiiProperty(name: "segNodeNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SegNodeNum
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property segStorageType: The disk type of segment nodes.</summary>
            /// <remarks>
            /// For example: cloud_essd, cloud_efficiency.
            /// </remarks>
            [JsiiProperty(name: "segStorageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SegStorageType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property storageSize: The storage capacity of per segment node.</summary>
            /// <remarks>
            /// Unit: GB. Minimum is 50, max is 4000, step is 50.
            /// </remarks>
            [JsiiProperty(name: "storageSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object StorageSize
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vSwitchId: The vSwitch ID of the instance.</summary>
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VSwitchId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property zoneId: The zone ID of the instance, such as cn-hangzhou-d.</summary>
            /// <remarks>
            /// You can call the DescribeRegions
            /// operation to query the most recent zone list.
            /// </remarks>
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dbInstanceCategory: DB instance category, valid values: Basic, HighAvailability.</summary>
            /// <remarks>
            /// This parameter must be passed in to create a storage reservation mode instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbInstanceCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbInstanceCategory
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dbInstanceDescription: The description of the instance.</summary>
            /// <remarks>
            /// The description cannot exceed 256 characters in length.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbInstanceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbInstanceDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dbInstanceMode: The db instance mode.</summary>
            /// <remarks>
            /// Valid values: StorageElastic, Serverless, Classic.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbInstanceMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbInstanceMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property encryptionKey: If the EncryptionType parameter is set to CloudDisk, you must specify this parameter to the encryption key that is in the same region with the disks that is specified by the EncryptionType parameter.</summary>
            /// <remarks>
            /// Otherwise, leave this parameter empty.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "encryptionKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EncryptionKey
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property encryptionType: The type of the encryption.</summary>
            /// <remarks>
            /// Default value: NULL. Valid values:
            /// NULL: Encryption is disabled.
            /// CloudDisk: Encryption is enabled on disks and the encryption key is specified by using the EncryptionKey parameter.
            /// Note: Disk encryption cannot be disabled after it is enabled.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "encryptionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EncryptionType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property masterNodeNum: The number of master nodes.</summary>
            /// <remarks>
            /// Minimum is 1, max is 2.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "masterNodeNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MasterNodeNum
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property payType: The billing method of the instance.</summary>
            /// <remarks>
            /// Default value: Postpaid. Valid values:
            /// Postpaid: pay-as-you-go
            /// Prepaid: subscription
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PayType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property period: The subscription period.</summary>
            /// <remarks>
            /// While choose by pay by month, it could be from 1 to 11. While choose pay by year, it could be from 1 to 3.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Period
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property periodUnit: Unit of subscription period, it could be Month\/Year.</summary>
            /// <remarks>
            /// Default value is Month.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "periodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PeriodUnit
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property privateIpAddress: Private IP address.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "privateIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PrivateIpAddress
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property securityIpList: The whitelist of IP addresses that are allowed to access the instance.</summary>
            /// <remarks>
            /// Default value:
            /// 127.0.0.1.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityIpList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecurityIpList
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags to attach to instance.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-gpdb.RosElasticDBInstance.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Gpdb.RosElasticDBInstance.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Gpdb.RosElasticDBInstance.ITagsProperty[]?>();
            }

            /// <summary>Property vpcId: The VPC ID of the instance.</summary>
            /// <remarks>
            /// If you set the InstanceNetworkType parameter to VPC, you
            /// must also specify the VPCId parameter. The specified region of the VPC must be the
            /// same as the RegionId value.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VpcId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
