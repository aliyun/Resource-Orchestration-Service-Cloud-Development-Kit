using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Hbase
{
    /// <summary>Properties for defining a `MultiZoneCluster`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbase-multizonecluster
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IMultiZoneClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-hbase.MultiZoneClusterProps")]
    public interface IMultiZoneClusterProps
    {
        /// <summary>Property arbiterVSwitchId: Arbitration virtual switch ID.</summary>
        /// <remarks>
        /// The switch must be in the availability zone corresponding to ArbiterZoneId.
        /// </remarks>
        [JsiiProperty(name: "arbiterVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ArbiterVSwitchId
        {
            get;
        }

        /// <summary>Property arbiterZoneId: Arbiter zond id.</summary>
        [JsiiProperty(name: "arbiterZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ArbiterZoneId
        {
            get;
        }

        /// <summary>Property archVersion: Version of the deployment architecture.</summary>
        /// <remarks>
        /// Currently, only the hbaseue engine type is supported. The value can be 2.0.
        /// </remarks>
        [JsiiProperty(name: "archVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ArchVersion
        {
            get;
        }

        /// <summary>Property coreDiskSize: The value ranges from 400 GB to 64,000 GB.</summary>
        /// <remarks>
        /// The step size is 40 GB.
        /// </remarks>
        [JsiiProperty(name: "coreDiskSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CoreDiskSize
        {
            get;
        }

        /// <summary>Property coreDiskType: Core node disk type.</summary>
        /// <remarks>
        /// Valid values:
        /// cloud_efficiency
        /// cloud_ssd
        /// local_hdd_pro
        /// local_ssd_pro
        /// </remarks>
        [JsiiProperty(name: "coreDiskType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CoreDiskType
        {
            get;
        }

        /// <summary>Property coreInstanceType: You can call the DescribeAvailableResource operation to obtain the value of this parameter.</summary>
        [JsiiProperty(name: "coreInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CoreInstanceType
        {
            get;
        }

        /// <summary>Property coreNodeCount: Number of Core nodes.</summary>
        /// <remarks>
        /// The value of the number of Core nodes ranges from 2 to 20, and the increment is a multiple of 2.
        /// </remarks>
        [JsiiProperty(name: "coreNodeCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CoreNodeCount
        {
            get;
        }

        /// <summary>Property engine: Service type.</summary>
        /// <remarks>
        /// Currently, only HBase enhanced version is supported. The value can be hbaseue.
        /// </remarks>
        [JsiiProperty(name: "engine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Engine
        {
            get;
        }

        /// <summary>Property engineVersion: The version of the engine.</summary>
        /// <remarks>
        /// Valid values:
        /// hbaseue:2.0
        /// </remarks>
        [JsiiProperty(name: "engineVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EngineVersion
        {
            get;
        }

        /// <summary>Property logDiskSize: log disk size.</summary>
        /// <remarks>
        /// The value ranges from 400 GB to 64,000 GB. The step size is 40 GB.
        /// </remarks>
        [JsiiProperty(name: "logDiskSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LogDiskSize
        {
            get;
        }

        /// <summary>Property logDiskType: Log node disk type.</summary>
        /// <remarks>
        /// Valid values:
        /// cloud_efficiency
        /// cloud_ssd
        /// local_hdd_pro
        /// local_ssd_pro
        /// </remarks>
        [JsiiProperty(name: "logDiskType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LogDiskType
        {
            get;
        }

        /// <summary>Property logInstanceType: Log instance type.</summary>
        [JsiiProperty(name: "logInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LogInstanceType
        {
            get;
        }

        /// <summary>Property logNodeCount: Log number of nodes.</summary>
        /// <remarks>
        /// The value of log nodes ranges from 4 to 400 and is a multiple of 4.
        /// </remarks>
        [JsiiProperty(name: "logNodeCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LogNodeCount
        {
            get;
        }

        /// <summary>Property multiZoneCombination: Availability zone combination.</summary>
        [JsiiProperty(name: "multiZoneCombination", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object MultiZoneCombination
        {
            get;
        }

        /// <summary>Property payType: The billing method.</summary>
        /// <remarks>
        /// Prepaid: The subscription billing method is used.
        /// Postpaid: The pay-as-you-go billing method is used.
        /// </remarks>
        [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PayType
        {
            get;
        }

        /// <summary>Property primaryVSwitchId: The virtual switch ID of the instance in primary availability zone must be in the availability zone corresponding to PrimaryZoneId.</summary>
        [JsiiProperty(name: "primaryVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PrimaryVSwitchId
        {
            get;
        }

        /// <summary>Property primaryZoneId: Availability zone ID of the primary availability zone instance.</summary>
        [JsiiProperty(name: "primaryZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PrimaryZoneId
        {
            get;
        }

        /// <summary>Property standbyVSwitchId: The virtual switch ID of the standby availability zone instance must be in the corresponding availability zone of StandbyZoneId.</summary>
        [JsiiProperty(name: "standbyVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object StandbyVSwitchId
        {
            get;
        }

        /// <summary>Property standbyZoneId: Standby zone id.</summary>
        [JsiiProperty(name: "standbyZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object StandbyZoneId
        {
            get;
        }

        /// <summary>Property autoRenewPeriod: The auto-renewal period.</summary>
        /// <remarks>
        /// Unit: month.
        /// The default value of this parameter is 0. This value indicates that auto-renewal is
        /// disabled.
        /// If this parameter is set to 2, the instance is automatically renewed for a two-month
        /// subscription after the instance expires.
        /// </remarks>
        [JsiiProperty(name: "autoRenewPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoRenewPeriod
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property clusterName: The name of the instance.</summary>
        /// <remarks>
        /// The name must be 2 to 128 characters in length, and can contain letters, digits, periods
        /// (.), underscores (_), and hyphens (-). It must start with a letter.
        /// </remarks>
        [JsiiProperty(name: "clusterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ClusterName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property deletionProtection: Specifies whether to enable the release protection feature for the cluster.</summary>
        /// <remarks>
        /// Default is false.
        /// </remarks>
        [JsiiProperty(name: "deletionProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeletionProtection
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property masterInstanceType: The instance type of the master node.</summary>
        /// <remarks>
        /// You can call the DescribeAvailableResource operation to obtain the value of this parameter.
        /// </remarks>
        [JsiiProperty(name: "masterInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MasterInstanceType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property period: The subscription period.</summary>
        /// <remarks>
        /// This parameter only takes effect when the PayType parameter is set to Prepaid.
        /// When the PeriodUnit parameter is set to year, the value of the Period parameter ranges
        /// from 1 to 5.
        /// When the PeriodUnit parameter is set to month, the value of the Period parameter ranges
        /// from 1 to 9.
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

        /// <summary>Property periodUnit: The unit of the subscription period.</summary>
        /// <remarks>
        /// Valid values:
        /// year
        /// month
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

        /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
        /// <remarks>
        /// You can query the group ID in the resource group console.
        /// If you leave this parameter empty, the instance is allocated to the default resource
        /// group.
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

        /// <summary>Property securityIpList: The IP addresses in the whitelist.</summary>
        /// <remarks>
        /// Example: 192.168.<em>.</em>/24. The 0.0.0.0/0 value cannot
        /// be added to the whitelist. Separate multiple IP addresses with commas (,).
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

        /// <summary>Property vpcId: The ID of the virtual private cloud (VPC).</summary>
        /// <remarks>
        /// If you leave this parameter and the VSwitchId parameter empty, the classic network type is used. The VPC network type is preferred.
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

        /// <summary>Properties for defining a `MultiZoneCluster`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbase-multizonecluster
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IMultiZoneClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-hbase.MultiZoneClusterProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Hbase.IMultiZoneClusterProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property arbiterVSwitchId: Arbitration virtual switch ID.</summary>
            /// <remarks>
            /// The switch must be in the availability zone corresponding to ArbiterZoneId.
            /// </remarks>
            [JsiiProperty(name: "arbiterVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ArbiterVSwitchId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property arbiterZoneId: Arbiter zond id.</summary>
            [JsiiProperty(name: "arbiterZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ArbiterZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property archVersion: Version of the deployment architecture.</summary>
            /// <remarks>
            /// Currently, only the hbaseue engine type is supported. The value can be 2.0.
            /// </remarks>
            [JsiiProperty(name: "archVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ArchVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property coreDiskSize: The value ranges from 400 GB to 64,000 GB.</summary>
            /// <remarks>
            /// The step size is 40 GB.
            /// </remarks>
            [JsiiProperty(name: "coreDiskSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CoreDiskSize
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property coreDiskType: Core node disk type.</summary>
            /// <remarks>
            /// Valid values:
            /// cloud_efficiency
            /// cloud_ssd
            /// local_hdd_pro
            /// local_ssd_pro
            /// </remarks>
            [JsiiProperty(name: "coreDiskType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CoreDiskType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property coreInstanceType: You can call the DescribeAvailableResource operation to obtain the value of this parameter.</summary>
            [JsiiProperty(name: "coreInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CoreInstanceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property coreNodeCount: Number of Core nodes.</summary>
            /// <remarks>
            /// The value of the number of Core nodes ranges from 2 to 20, and the increment is a multiple of 2.
            /// </remarks>
            [JsiiProperty(name: "coreNodeCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CoreNodeCount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property engine: Service type.</summary>
            /// <remarks>
            /// Currently, only HBase enhanced version is supported. The value can be hbaseue.
            /// </remarks>
            [JsiiProperty(name: "engine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Engine
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property engineVersion: The version of the engine.</summary>
            /// <remarks>
            /// Valid values:
            /// hbaseue:2.0
            /// </remarks>
            [JsiiProperty(name: "engineVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EngineVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property logDiskSize: log disk size.</summary>
            /// <remarks>
            /// The value ranges from 400 GB to 64,000 GB. The step size is 40 GB.
            /// </remarks>
            [JsiiProperty(name: "logDiskSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LogDiskSize
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property logDiskType: Log node disk type.</summary>
            /// <remarks>
            /// Valid values:
            /// cloud_efficiency
            /// cloud_ssd
            /// local_hdd_pro
            /// local_ssd_pro
            /// </remarks>
            [JsiiProperty(name: "logDiskType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LogDiskType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property logInstanceType: Log instance type.</summary>
            [JsiiProperty(name: "logInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LogInstanceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property logNodeCount: Log number of nodes.</summary>
            /// <remarks>
            /// The value of log nodes ranges from 4 to 400 and is a multiple of 4.
            /// </remarks>
            [JsiiProperty(name: "logNodeCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LogNodeCount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property multiZoneCombination: Availability zone combination.</summary>
            [JsiiProperty(name: "multiZoneCombination", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object MultiZoneCombination
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property payType: The billing method.</summary>
            /// <remarks>
            /// Prepaid: The subscription billing method is used.
            /// Postpaid: The pay-as-you-go billing method is used.
            /// </remarks>
            [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PayType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property primaryVSwitchId: The virtual switch ID of the instance in primary availability zone must be in the availability zone corresponding to PrimaryZoneId.</summary>
            [JsiiProperty(name: "primaryVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PrimaryVSwitchId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property primaryZoneId: Availability zone ID of the primary availability zone instance.</summary>
            [JsiiProperty(name: "primaryZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PrimaryZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property standbyVSwitchId: The virtual switch ID of the standby availability zone instance must be in the corresponding availability zone of StandbyZoneId.</summary>
            [JsiiProperty(name: "standbyVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object StandbyVSwitchId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property standbyZoneId: Standby zone id.</summary>
            [JsiiProperty(name: "standbyZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object StandbyZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property autoRenewPeriod: The auto-renewal period.</summary>
            /// <remarks>
            /// Unit: month.
            /// The default value of this parameter is 0. This value indicates that auto-renewal is
            /// disabled.
            /// If this parameter is set to 2, the instance is automatically renewed for a two-month
            /// subscription after the instance expires.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoRenewPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoRenewPeriod
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property clusterName: The name of the instance.</summary>
            /// <remarks>
            /// The name must be 2 to 128 characters in length, and can contain letters, digits, periods
            /// (.), underscores (_), and hyphens (-). It must start with a letter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "clusterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ClusterName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property deletionProtection: Specifies whether to enable the release protection feature for the cluster.</summary>
            /// <remarks>
            /// Default is false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deletionProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeletionProtection
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property masterInstanceType: The instance type of the master node.</summary>
            /// <remarks>
            /// You can call the DescribeAvailableResource operation to obtain the value of this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "masterInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MasterInstanceType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property period: The subscription period.</summary>
            /// <remarks>
            /// This parameter only takes effect when the PayType parameter is set to Prepaid.
            /// When the PeriodUnit parameter is set to year, the value of the Period parameter ranges
            /// from 1 to 5.
            /// When the PeriodUnit parameter is set to month, the value of the Period parameter ranges
            /// from 1 to 9.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Period
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property periodUnit: The unit of the subscription period.</summary>
            /// <remarks>
            /// Valid values:
            /// year
            /// month
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "periodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PeriodUnit
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
            /// <remarks>
            /// You can query the group ID in the resource group console.
            /// If you leave this parameter empty, the instance is allocated to the default resource
            /// group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property securityIpList: The IP addresses in the whitelist.</summary>
            /// <remarks>
            /// Example: 192.168.<em>.</em>/24. The 0.0.0.0/0 value cannot
            /// be added to the whitelist. Separate multiple IP addresses with commas (,).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityIpList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecurityIpList
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vpcId: The ID of the virtual private cloud (VPC).</summary>
            /// <remarks>
            /// If you leave this parameter and the VSwitchId parameter empty, the classic network type is used. The VPC network type is preferred.
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
