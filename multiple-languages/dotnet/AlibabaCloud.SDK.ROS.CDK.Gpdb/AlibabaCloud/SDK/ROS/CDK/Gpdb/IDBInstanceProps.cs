using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Gpdb
{
    /// <summary>Properties for defining a `DBInstance`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-dbinstance
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDBInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-gpdb.DBInstanceProps")]
    public interface IDBInstanceProps
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

        /// <summary>Property aiNodeSpecInfos: AI node spec infos.</summary>
        [JsiiProperty(name: "aiNodeSpecInfos", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-gpdb.RosDBInstance.AINodeSpecInfosProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AiNodeSpecInfos
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property createSampleData: Whether to load the sample data set after the instance is created.</summary>
        /// <remarks>
        /// The value can be:
        /// true: load the sample dataset.
        /// false: not to load the sample dataset
        /// </remarks>
        [JsiiProperty(name: "createSampleData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CreateSampleData
        {
            get
            {
                return null;
            }
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

        /// <summary>Property dbInstanceClass: The instance type.</summary>
        [JsiiProperty(name: "dbInstanceClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbInstanceClass
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

        /// <summary>Property dbInstanceGroupCount: The number of compute nodes in the instance.</summary>
        /// <remarks>
        /// The value can be 2, 4, 8, 12, 16, 24, 32, 64, 96, or 128.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceGroupCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbInstanceGroupCount
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

        /// <summary>Property deployMode: The deployment mode of the instance.</summary>
        [JsiiProperty(name: "deployMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeployMode
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

        /// <summary>Property idleTime: Idle release wait time.</summary>
        /// <remarks>
        /// That is, when the period of no service traffic reaches the specified period, the instance becomes idle. The unit is second. The minimum value is 60. The default value is 600.
        /// </remarks>
        [JsiiProperty(name: "idleTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IdleTime
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceSpec: The specification of segment nodes.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>When DBInstanceCategory is HighAvailability, Valid values: 2C16G, 4C32G, 8C64G, 16C128G.</description>
        /// <description>When DBInstanceCategory is Basic, Valid values: 2C8G, 4C16G, 8C32G, 16C64G.</description>
        /// <description>When DBInstanceCategory is Serverless, Valid values: 4C16G, 8C32G.
        /// This parameter must be passed to create a storage elastic mode instance and a serverless version instance.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "instanceSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceSpec
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property masterCu: Master resources.</summary>
        /// <remarks>
        /// Default is 8.
        /// </remarks>
        [JsiiProperty(name: "masterCu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MasterCu
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

        /// <summary>Property prodType: Prod type.</summary>
        /// <remarks>
        /// The value can be: standard, cost-effective. The default value is standard.
        /// </remarks>
        [JsiiProperty(name: "prodType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProdType
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

        /// <summary>Property segDiskPerformanceLevel: Seg disk performance level.</summary>
        /// <remarks>
        /// The value can be:
        /// pl0、pl1 and pl2
        /// </remarks>
        [JsiiProperty(name: "segDiskPerformanceLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SegDiskPerformanceLevel
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property segNodeNum: Calculate the number of nodes.</summary>
        /// <remarks>
        /// The value can be:
        ///
        /// <list type="bullet">
        /// <description>When DBInstanceMode is StorageElastic and DBInstanceCategory is HighAvailability, the value ranges from 4 to 512. The value must be a multiple of 4.</description>
        /// <description>When DBInstanceMode is StorageElastic and DBInstanceCategory is Basic, the value ranges from 2 to 512. The value must be a multiple of 2.</description>
        /// <description>When DBInstanceMode is Serverless, The value ranges from 2 to 512. The value must be a multiple of 2.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "segNodeNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SegNodeNum
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property segStorageType: The disk type of segment nodes.</summary>
        /// <remarks>
        /// For example: cloud_essd, cloud_efficiency.
        /// This parameter must be passed in to create a storage elastic mode instance.
        /// Storage Elastic Mode Basic Edition instances only support ESSD cloud disks.
        /// </remarks>
        [JsiiProperty(name: "segStorageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SegStorageType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property serverlessMode: Mode of the Serverless instance.</summary>
        /// <remarks>
        /// The value can be:
        /// Manual: manual scheduling is the default value.
        /// Auto: indicates automatic scheduling.
        /// </remarks>
        [JsiiProperty(name: "serverlessMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ServerlessMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property serverlessResource: Computing resource threshold.</summary>
        /// <remarks>
        /// The value ranges from 8 to 32. The step length is 8.
        /// The unit is ACU. The default value is 32.
        /// </remarks>
        [JsiiProperty(name: "serverlessResource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ServerlessResource
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property standbyVSwitchId: The standby VSwitch ID of the instance.</summary>
        [JsiiProperty(name: "standbyVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? StandbyVSwitchId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property standbyZoneId: The standby zone ID of the instance.</summary>
        [JsiiProperty(name: "standbyZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? StandbyZoneId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property storageSize: The storage capacity of per segment node.</summary>
        /// <remarks>
        /// Unit: GB. Minimum is 50, max is 4000, step is 50.
        /// </remarks>
        [JsiiProperty(name: "storageSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? StorageSize
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: The list of instance tags in the form of key\/value pairs.</summary>
        /// <remarks>
        /// You can define a maximum of 20 tags for instance.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-gpdb.RosDBInstance.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Gpdb.RosDBInstance.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vectorConfigurationStatus: the status of vector configuration.</summary>
        /// <remarks>
        /// The value can be:Y: Turn on vector engine optimization.N: Turn off vector engine optimization (default value).
        /// </remarks>
        [JsiiProperty(name: "vectorConfigurationStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VectorConfigurationStatus
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

        /// <summary>Properties for defining a `DBInstance`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-dbinstance
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDBInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-gpdb.DBInstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Gpdb.IDBInstanceProps
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

            /// <summary>Property aiNodeSpecInfos: AI node spec infos.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "aiNodeSpecInfos", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-gpdb.RosDBInstance.AINodeSpecInfosProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? AiNodeSpecInfos
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property createSampleData: Whether to load the sample data set after the instance is created.</summary>
            /// <remarks>
            /// The value can be:
            /// true: load the sample dataset.
            /// false: not to load the sample dataset
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "createSampleData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CreateSampleData
            {
                get => GetInstanceProperty<object?>();
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

            /// <summary>Property dbInstanceClass: The instance type.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dbInstanceClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbInstanceClass
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

            /// <summary>Property dbInstanceGroupCount: The number of compute nodes in the instance.</summary>
            /// <remarks>
            /// The value can be 2, 4, 8, 12, 16, 24, 32, 64, 96, or 128.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbInstanceGroupCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbInstanceGroupCount
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

            /// <summary>Property deployMode: The deployment mode of the instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "deployMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeployMode
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

            /// <summary>Property idleTime: Idle release wait time.</summary>
            /// <remarks>
            /// That is, when the period of no service traffic reaches the specified period, the instance becomes idle. The unit is second. The minimum value is 60. The default value is 600.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "idleTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IdleTime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceSpec: The specification of segment nodes.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>When DBInstanceCategory is HighAvailability, Valid values: 2C16G, 4C32G, 8C64G, 16C128G.</description>
            /// <description>When DBInstanceCategory is Basic, Valid values: 2C8G, 4C16G, 8C32G, 16C64G.</description>
            /// <description>When DBInstanceCategory is Serverless, Valid values: 4C16G, 8C32G.
            /// This parameter must be passed to create a storage elastic mode instance and a serverless version instance.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceSpec
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property masterCu: Master resources.</summary>
            /// <remarks>
            /// Default is 8.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "masterCu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MasterCu
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

            /// <summary>Property prodType: Prod type.</summary>
            /// <remarks>
            /// The value can be: standard, cost-effective. The default value is standard.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "prodType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProdType
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

            /// <summary>Property segDiskPerformanceLevel: Seg disk performance level.</summary>
            /// <remarks>
            /// The value can be:
            /// pl0、pl1 and pl2
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "segDiskPerformanceLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SegDiskPerformanceLevel
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property segNodeNum: Calculate the number of nodes.</summary>
            /// <remarks>
            /// The value can be:
            ///
            /// <list type="bullet">
            /// <description>When DBInstanceMode is StorageElastic and DBInstanceCategory is HighAvailability, the value ranges from 4 to 512. The value must be a multiple of 4.</description>
            /// <description>When DBInstanceMode is StorageElastic and DBInstanceCategory is Basic, the value ranges from 2 to 512. The value must be a multiple of 2.</description>
            /// <description>When DBInstanceMode is Serverless, The value ranges from 2 to 512. The value must be a multiple of 2.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "segNodeNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SegNodeNum
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property segStorageType: The disk type of segment nodes.</summary>
            /// <remarks>
            /// For example: cloud_essd, cloud_efficiency.
            /// This parameter must be passed in to create a storage elastic mode instance.
            /// Storage Elastic Mode Basic Edition instances only support ESSD cloud disks.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "segStorageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SegStorageType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property serverlessMode: Mode of the Serverless instance.</summary>
            /// <remarks>
            /// The value can be:
            /// Manual: manual scheduling is the default value.
            /// Auto: indicates automatic scheduling.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "serverlessMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ServerlessMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property serverlessResource: Computing resource threshold.</summary>
            /// <remarks>
            /// The value ranges from 8 to 32. The step length is 8.
            /// The unit is ACU. The default value is 32.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "serverlessResource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ServerlessResource
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property standbyVSwitchId: The standby VSwitch ID of the instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "standbyVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StandbyVSwitchId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property standbyZoneId: The standby zone ID of the instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "standbyZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StandbyZoneId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property storageSize: The storage capacity of per segment node.</summary>
            /// <remarks>
            /// Unit: GB. Minimum is 50, max is 4000, step is 50.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "storageSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StorageSize
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: The list of instance tags in the form of key\/value pairs.</summary>
            /// <remarks>
            /// You can define a maximum of 20 tags for instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-gpdb.RosDBInstance.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Gpdb.RosDBInstance.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Gpdb.RosDBInstance.ITagsProperty[]?>();
            }

            /// <summary>Property vectorConfigurationStatus: the status of vector configuration.</summary>
            /// <remarks>
            /// The value can be:Y: Turn on vector engine optimization.N: Turn off vector engine optimization (default value).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vectorConfigurationStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VectorConfigurationStatus
            {
                get => GetInstanceProperty<object?>();
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
