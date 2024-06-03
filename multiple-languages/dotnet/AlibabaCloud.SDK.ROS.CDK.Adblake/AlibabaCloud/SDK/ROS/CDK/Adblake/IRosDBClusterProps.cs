using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Adblake
{
    /// <summary>Properties for defining a `RosDBCluster`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adblake-dbcluster
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosDBClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-adblake.RosDBClusterProps")]
    public interface IRosDBClusterProps
    {
        /// <remarks>
        /// <strong>Property</strong>: computeResource: The amount of reserved computing resources. Unit: ACUs. Valid values: 0ACU to 4096ACU. The value must be in increments of 16 ACUs. Each ACU is equivalent to 1 core and 4 GB memory.
        /// Note This parameter must be specified with a unit.
        /// </remarks>
        [JsiiProperty(name: "computeResource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ComputeResource
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbClusterVersion: The version of the cluster. Set the value to 5.0.
        /// </remarks>
        [JsiiProperty(name: "dbClusterVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbClusterVersion
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: payType: The billing method of the cluster. Valid values:
        /// Postpaid: pay-as-you-go.
        /// Prepaid: subscription.
        /// </remarks>
        [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PayType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: storageResource: The amount of reserved storage resources. Unit: AnalyticDB compute units (ACUs). Valid values: 0ACU to 2064ACU. The value must be in increments of 24 ACUs. Each ACU is equivalent to 1 core and 4 GB memory.
        /// Note This parameter must be specified with a unit.
        /// </remarks>
        [JsiiProperty(name: "storageResource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object StorageResource
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: The virtual private cloud (VPC) ID of the cluster.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: The vSwitch ID of the cluster.
        /// </remarks>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VSwitchId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneId: The zone ID.
        /// Note You can call the  DescribeRegions  operation to query the most recent zone list.
        /// </remarks>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ZoneId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: backupSetId: The ID of the backup set that you want to use to restore data.
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

        /// <remarks>
        /// <strong>Property</strong>: dbClusterDescription: The description of the cluster.
        /// The description cannot start with http:\/\/ or https:\/\/.
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

        /// <remarks>
        /// <strong>Property</strong>: enableDefaultResourcePool: Specifies whether to allocate all reserved computing resources to the user_default resource group. Valid values:
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

        /// <remarks>
        /// <strong>Property</strong>: period: The subscription duration of the subscription cluster.
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

        /// <remarks>
        /// <strong>Property</strong>: periodType: The subscription type of the subscription cluster. Valid values:
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

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: The resource group ID.
        /// </remarks>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: restoreToTime: The point in time to which you want to restore data from the backup set.
        /// </remarks>
        [JsiiProperty(name: "restoreToTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RestoreToTime
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: restoreType: The method that you want to use to restore data. Valid values:
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

        /// <remarks>
        /// <strong>Property</strong>: sourceDbClusterId: The ID of the source AnalyticDB for MySQL Data Warehouse Edition cluster. If you want to restore a Data Lakehouse Edition cluster from a Data Warehouse Edition cluster, you must specify this parameter.
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

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to cluster. Max support 20 tags to add during create cluster. Each tag with two properties Key and Value, and Key is required.
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

        /// <summary>Properties for defining a `RosDBCluster`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adblake-dbcluster
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosDBClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-adblake.RosDBClusterProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Adblake.IRosDBClusterProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: computeResource: The amount of reserved computing resources. Unit: ACUs. Valid values: 0ACU to 4096ACU. The value must be in increments of 16 ACUs. Each ACU is equivalent to 1 core and 4 GB memory.
            /// Note This parameter must be specified with a unit.
            /// </remarks>
            [JsiiProperty(name: "computeResource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ComputeResource
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dbClusterVersion: The version of the cluster. Set the value to 5.0.
            /// </remarks>
            [JsiiProperty(name: "dbClusterVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbClusterVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: payType: The billing method of the cluster. Valid values:
            /// Postpaid: pay-as-you-go.
            /// Prepaid: subscription.
            /// </remarks>
            [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PayType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: storageResource: The amount of reserved storage resources. Unit: AnalyticDB compute units (ACUs). Valid values: 0ACU to 2064ACU. The value must be in increments of 24 ACUs. Each ACU is equivalent to 1 core and 4 GB memory.
            /// Note This parameter must be specified with a unit.
            /// </remarks>
            [JsiiProperty(name: "storageResource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object StorageResource
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcId: The virtual private cloud (VPC) ID of the cluster.
            /// </remarks>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: vSwitchId: The vSwitch ID of the cluster.
            /// </remarks>
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VSwitchId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: zoneId: The zone ID.
            /// Note You can call the  DescribeRegions  operation to query the most recent zone list.
            /// </remarks>
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: backupSetId: The ID of the backup set that you want to use to restore data.
            /// Note You can call the  DescribeBackups  operation to query the backup sets of the cluster.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "backupSetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BackupSetId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: dbClusterDescription: The description of the cluster.
            /// The description cannot start with http:\/\/ or https:\/\/.
            /// The description must be 2 to 256 characters in length
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbClusterDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbClusterDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: enableDefaultResourcePool: Specifies whether to allocate all reserved computing resources to the user_default resource group. Valid values:
            /// true (default)
            /// false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableDefaultResourcePool", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableDefaultResourcePool
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: period: The subscription duration of the subscription cluster.
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

            /// <remarks>
            /// <strong>Property</strong>: periodType: The subscription type of the subscription cluster. Valid values:
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

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: The resource group ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: restoreToTime: The point in time to which you want to restore data from the backup set.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "restoreToTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RestoreToTime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: restoreType: The method that you want to use to restore data. Valid values:
            /// backup: restores data from a backup set. You must also specify the BackupSetId and SourceDBClusterId parameters.
            /// timepoint: restores data to a point in time. You must also specify the RestoreToTime and SourceDBClusterId parameters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "restoreType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RestoreType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceDbClusterId: The ID of the source AnalyticDB for MySQL Data Warehouse Edition cluster. If you want to restore a Data Lakehouse Edition cluster from a Data Warehouse Edition cluster, you must specify this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceDbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SourceDbClusterId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tags: Tags to attach to cluster. Max support 20 tags to add during create cluster. Each tag with two properties Key and Value, and Key is required.
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
