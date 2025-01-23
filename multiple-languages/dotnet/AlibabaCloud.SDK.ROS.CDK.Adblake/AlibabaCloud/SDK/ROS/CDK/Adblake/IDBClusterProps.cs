using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Adblake
{
    /// <summary>Properties for defining a `DBCluster`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adblake-dbcluster
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDBClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-adblake.DBClusterProps")]
    public interface IDBClusterProps
    {
        /// <summary>Property computeResource: The amount of reserved computing resources.</summary>
        /// <remarks>
        /// Unit: ACUs. Valid values: 0ACU to 4096ACU. The value must be in increments of 16 ACUs. Each ACU is equivalent to 1 core and 4 GB memory.
        /// Note This parameter must be specified with a unit.
        /// </remarks>
        [JsiiProperty(name: "computeResource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ComputeResource
        {
            get;
        }

        /// <summary>Property dbClusterVersion: The version of the cluster.</summary>
        /// <remarks>
        /// Set the value to 5.0.
        /// </remarks>
        [JsiiProperty(name: "dbClusterVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbClusterVersion
        {
            get;
        }

        /// <summary>Property payType: The billing method of the cluster.</summary>
        /// <remarks>
        /// Valid values:
        /// Postpaid: pay-as-you-go.
        /// Prepaid: subscription.
        /// </remarks>
        [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PayType
        {
            get;
        }

        /// <summary>Property storageResource: The amount of reserved storage resources.</summary>
        /// <remarks>
        /// Unit: AnalyticDB compute units (ACUs). Valid values: 0ACU to 2064ACU. The value must be in increments of 24 ACUs. Each ACU is equivalent to 1 core and 4 GB memory.
        /// Note This parameter must be specified with a unit.
        /// </remarks>
        [JsiiProperty(name: "storageResource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object StorageResource
        {
            get;
        }

        /// <summary>Property vpcId: The virtual private cloud (VPC) ID of the cluster.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <summary>Property vSwitchId: The vSwitch ID of the cluster.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VSwitchId
        {
            get;
        }

        /// <summary>Property zoneId: The zone ID.</summary>
        /// <remarks>
        /// Note You can call the  DescribeRegions  operation to query the most recent zone list.
        /// </remarks>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ZoneId
        {
            get;
        }

        /// <summary>Property backupSetId: The ID of the backup set that you want to use to restore data.</summary>
        /// <remarks>
        /// Note You can call the  DescribeBackups  operation to query the backup sets of the cluster.
        /// </remarks>
        [JsiiProperty(name: "backupSetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BackupSetId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property cloneSourceRegionId: The ID of the source region where the cluster is located.</summary>
        [JsiiProperty(name: "cloneSourceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CloneSourceRegionId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dbClusterDescription: The description of the cluster.</summary>
        /// <remarks>
        /// The description cannot start with http:// or https://.
        /// The description must be 2 to 256 characters in length
        /// </remarks>
        [JsiiProperty(name: "dbClusterDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbClusterDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dbClusterNetworkType: The network type of the cluster.</summary>
        /// <remarks>
        /// Valid values:
        /// VPC
        /// </remarks>
        [JsiiProperty(name: "dbClusterNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbClusterNetworkType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property diskEncryption: Specifies whether to encrypt the disk.</summary>
        /// <remarks>
        /// Valid values:
        /// true
        /// false (default)
        /// </remarks>
        [JsiiProperty(name: "diskEncryption", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DiskEncryption
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enableDefaultResourcePool: Specifies whether to allocate all reserved computing resources to the user_default resource group.</summary>
        /// <remarks>
        /// Valid values:
        /// true (default)
        /// false
        /// </remarks>
        [JsiiProperty(name: "enableDefaultResourcePool", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableDefaultResourcePool
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property kmsId:.</summary>
        [JsiiProperty(name: "kmsId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? KmsId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property period: The subscription duration of the subscription cluster.</summary>
        /// <remarks>
        /// Valid values when Period is set to Year: 1 to 3 (integer).
        /// Valid values when Period is set to Month: 1 to 9 (integer).
        /// Note This parameter must be specified when PayType is set to Prepaid.
        /// </remarks>
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Period
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property periodType: The subscription type of the subscription cluster.</summary>
        /// <remarks>
        /// Valid values:
        /// Year: subscription on a yearly basis.
        /// Month: subscription on a monthly basis.
        /// Note This parameter must be specified when PayType is set to Prepaid.
        /// </remarks>
        [JsiiProperty(name: "periodType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PeriodType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property productForm: Valid values: IntegrationForm LegacyForm.</summary>
        [JsiiProperty(name: "productForm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProductForm
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property reservedNodeCount: The number of reserved nodes.</summary>
        /// <remarks>
        /// Must be 1 for basic version and multiple
        /// of 3 for enterprise version.
        /// </remarks>
        [JsiiProperty(name: "reservedNodeCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ReservedNodeCount
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property reservedNodeSize: The size of each reserved node.</summary>
        [JsiiProperty(name: "reservedNodeSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ReservedNodeSize
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The resource group ID.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property restoreToTime: The point in time to which you want to restore data from the backup set.</summary>
        [JsiiProperty(name: "restoreToTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RestoreToTime
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property restoreType: The method that you want to use to restore data.</summary>
        /// <remarks>
        /// Valid values:
        /// backup: restores data from a backup set. You must also specify the BackupSetId and SourceDBClusterId parameters.
        /// timepoint: restores data to a point in time. You must also specify the RestoreToTime and SourceDBClusterId parameters.
        /// </remarks>
        [JsiiProperty(name: "restoreType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RestoreType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sourceDbClusterId: The ID of the source AnalyticDB for MySQL Data Warehouse Edition cluster.</summary>
        /// <remarks>
        /// If you want to restore a Data Lakehouse Edition cluster from a Data Warehouse Edition cluster, you must specify this parameter.
        /// </remarks>
        [JsiiProperty(name: "sourceDbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SourceDbClusterId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags to attach to cluster.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create cluster. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-adblake.RosDBCluster.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Adblake.RosDBCluster.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DBCluster`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adblake-dbcluster
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDBClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-adblake.DBClusterProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Adblake.IDBClusterProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property computeResource: The amount of reserved computing resources.</summary>
            /// <remarks>
            /// Unit: ACUs. Valid values: 0ACU to 4096ACU. The value must be in increments of 16 ACUs. Each ACU is equivalent to 1 core and 4 GB memory.
            /// Note This parameter must be specified with a unit.
            /// </remarks>
            [JsiiProperty(name: "computeResource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ComputeResource
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dbClusterVersion: The version of the cluster.</summary>
            /// <remarks>
            /// Set the value to 5.0.
            /// </remarks>
            [JsiiProperty(name: "dbClusterVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbClusterVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property payType: The billing method of the cluster.</summary>
            /// <remarks>
            /// Valid values:
            /// Postpaid: pay-as-you-go.
            /// Prepaid: subscription.
            /// </remarks>
            [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PayType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property storageResource: The amount of reserved storage resources.</summary>
            /// <remarks>
            /// Unit: AnalyticDB compute units (ACUs). Valid values: 0ACU to 2064ACU. The value must be in increments of 24 ACUs. Each ACU is equivalent to 1 core and 4 GB memory.
            /// Note This parameter must be specified with a unit.
            /// </remarks>
            [JsiiProperty(name: "storageResource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object StorageResource
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vpcId: The virtual private cloud (VPC) ID of the cluster.</summary>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vSwitchId: The vSwitch ID of the cluster.</summary>
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VSwitchId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property zoneId: The zone ID.</summary>
            /// <remarks>
            /// Note You can call the  DescribeRegions  operation to query the most recent zone list.
            /// </remarks>
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property backupSetId: The ID of the backup set that you want to use to restore data.</summary>
            /// <remarks>
            /// Note You can call the  DescribeBackups  operation to query the backup sets of the cluster.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "backupSetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BackupSetId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property cloneSourceRegionId: The ID of the source region where the cluster is located.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "cloneSourceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CloneSourceRegionId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dbClusterDescription: The description of the cluster.</summary>
            /// <remarks>
            /// The description cannot start with http:// or https://.
            /// The description must be 2 to 256 characters in length
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbClusterDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbClusterDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dbClusterNetworkType: The network type of the cluster.</summary>
            /// <remarks>
            /// Valid values:
            /// VPC
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbClusterNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbClusterNetworkType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property diskEncryption: Specifies whether to encrypt the disk.</summary>
            /// <remarks>
            /// Valid values:
            /// true
            /// false (default)
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "diskEncryption", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DiskEncryption
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enableDefaultResourcePool: Specifies whether to allocate all reserved computing resources to the user_default resource group.</summary>
            /// <remarks>
            /// Valid values:
            /// true (default)
            /// false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableDefaultResourcePool", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableDefaultResourcePool
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property kmsId:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "kmsId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? KmsId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property period: The subscription duration of the subscription cluster.</summary>
            /// <remarks>
            /// Valid values when Period is set to Year: 1 to 3 (integer).
            /// Valid values when Period is set to Month: 1 to 9 (integer).
            /// Note This parameter must be specified when PayType is set to Prepaid.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Period
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property periodType: The subscription type of the subscription cluster.</summary>
            /// <remarks>
            /// Valid values:
            /// Year: subscription on a yearly basis.
            /// Month: subscription on a monthly basis.
            /// Note This parameter must be specified when PayType is set to Prepaid.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "periodType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PeriodType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property productForm: Valid values: IntegrationForm LegacyForm.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "productForm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProductForm
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property reservedNodeCount: The number of reserved nodes.</summary>
            /// <remarks>
            /// Must be 1 for basic version and multiple
            /// of 3 for enterprise version.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "reservedNodeCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ReservedNodeCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property reservedNodeSize: The size of each reserved node.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "reservedNodeSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ReservedNodeSize
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The resource group ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property restoreToTime: The point in time to which you want to restore data from the backup set.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "restoreToTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RestoreToTime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property restoreType: The method that you want to use to restore data.</summary>
            /// <remarks>
            /// Valid values:
            /// backup: restores data from a backup set. You must also specify the BackupSetId and SourceDBClusterId parameters.
            /// timepoint: restores data to a point in time. You must also specify the RestoreToTime and SourceDBClusterId parameters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "restoreType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RestoreType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sourceDbClusterId: The ID of the source AnalyticDB for MySQL Data Warehouse Edition cluster.</summary>
            /// <remarks>
            /// If you want to restore a Data Lakehouse Edition cluster from a Data Warehouse Edition cluster, you must specify this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceDbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SourceDbClusterId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags to attach to cluster.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create cluster. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-adblake.RosDBCluster.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Adblake.RosDBCluster.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Adblake.RosDBCluster.ITagsProperty[]?>();
            }
        }
    }
}
