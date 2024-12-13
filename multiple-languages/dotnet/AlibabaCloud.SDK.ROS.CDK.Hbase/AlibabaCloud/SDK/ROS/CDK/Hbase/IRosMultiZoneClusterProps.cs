using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Hbase
{
    /// <summary>Properties for defining a `RosMultiZoneCluster`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbase-multizonecluster
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosMultiZoneClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-hbase.RosMultiZoneClusterProps")]
    public interface IRosMultiZoneClusterProps
    {
        /// <remarks>
        /// <strong>Property</strong>: arbiterVSwitchId: Arbitration virtual switch ID. The switch must be in the availability zone corresponding to ArbiterZoneId.
        /// </remarks>
        [JsiiProperty(name: "arbiterVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ArbiterVSwitchId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: arbiterZoneId: Arbiter zond id.
        /// </remarks>
        [JsiiProperty(name: "arbiterZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ArbiterZoneId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: archVersion: Version of the deployment architecture. Currently, only the hbaseue engine type is supported. The value can be 2.0.
        /// </remarks>
        [JsiiProperty(name: "archVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ArchVersion
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: coreDiskSize: The value ranges from 400 GB to 64,000 GB. The step size is 40 GB.
        /// </remarks>
        [JsiiProperty(name: "coreDiskSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CoreDiskSize
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: coreDiskType: Core node disk type. Valid values:
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

        /// <remarks>
        /// <strong>Property</strong>: coreInstanceType: You can call the DescribeAvailableResource operation to obtain the value of this parameter.
        /// </remarks>
        [JsiiProperty(name: "coreInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CoreInstanceType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: coreNodeCount: Number of Core nodes. The value of the number of Core nodes ranges from 2 to 20, and the increment is a multiple of 2.
        /// </remarks>
        [JsiiProperty(name: "coreNodeCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CoreNodeCount
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: engine: Service type. Currently, only HBase enhanced version is supported. The value can be hbaseue.
        /// </remarks>
        [JsiiProperty(name: "engine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Engine
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: engineVersion: The version of the engine. Valid values:
        /// hbaseue:2.0
        /// </remarks>
        [JsiiProperty(name: "engineVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EngineVersion
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: logDiskSize: log disk size. The value ranges from 400 GB to 64,000 GB. The step size is 40 GB.
        /// </remarks>
        [JsiiProperty(name: "logDiskSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LogDiskSize
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: logDiskType: Log node disk type. Valid values:
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

        /// <remarks>
        /// <strong>Property</strong>: logInstanceType: Log instance type.
        /// </remarks>
        [JsiiProperty(name: "logInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LogInstanceType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: logNodeCount: Log number of nodes. The value of log nodes ranges from 4 to 400 and is a multiple of 4.
        /// </remarks>
        [JsiiProperty(name: "logNodeCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LogNodeCount
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: multiZoneCombination: Availability zone combination.
        /// </remarks>
        [JsiiProperty(name: "multiZoneCombination", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object MultiZoneCombination
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: payType: The billing method.
        /// Prepaid: The subscription billing method is used.
        /// Postpaid: The pay-as-you-go billing method is used.
        /// </remarks>
        [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PayType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: primaryVSwitchId: The virtual switch ID of the instance in primary availability zone must be in the availability zone corresponding to PrimaryZoneId.
        /// </remarks>
        [JsiiProperty(name: "primaryVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PrimaryVSwitchId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: primaryZoneId: Availability zone ID of the primary availability zone instance.
        /// </remarks>
        [JsiiProperty(name: "primaryZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PrimaryZoneId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: standbyVSwitchId: The virtual switch ID of the standby availability zone instance must be in the corresponding availability zone of StandbyZoneId.
        /// </remarks>
        [JsiiProperty(name: "standbyVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object StandbyVSwitchId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: standbyZoneId: Standby zone id.
        /// </remarks>
        [JsiiProperty(name: "standbyZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object StandbyZoneId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: autoRenewPeriod: The auto-renewal period. Unit: month.
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

        /// <remarks>
        /// <strong>Property</strong>: clusterName: The name of the instance.
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

        /// <remarks>
        /// <strong>Property</strong>: deletionProtection: Specifies whether to enable the release protection feature for the cluster. Default is false.
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

        /// <remarks>
        /// <strong>Property</strong>: masterInstanceType: The instance type of the master node. You can call the DescribeAvailableResource operation to obtain the value of this parameter.
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

        /// <remarks>
        /// <strong>Property</strong>: period: The subscription period.
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

        /// <remarks>
        /// <strong>Property</strong>: periodUnit: The unit of the subscription period. Valid values:
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

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: The ID of the resource group. You can query the group ID in the resource group console.
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

        /// <remarks>
        /// <strong>Property</strong>: securityIpList: The IP addresses in the whitelist. Example: 192.168.*.*\/24. The 0.0.0.0\/0 value cannot
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

        /// <remarks>
        /// <strong>Property</strong>: vpcId: The ID of the virtual private cloud (VPC). If you leave this parameter and the VSwitchId
        /// parameter empty, the classic network type is used. The VPC network type is preferred.
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

        /// <summary>Properties for defining a `RosMultiZoneCluster`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbase-multizonecluster
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosMultiZoneClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-hbase.RosMultiZoneClusterProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Hbase.IRosMultiZoneClusterProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: arbiterVSwitchId: Arbitration virtual switch ID. The switch must be in the availability zone corresponding to ArbiterZoneId.
            /// </remarks>
            [JsiiProperty(name: "arbiterVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ArbiterVSwitchId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: arbiterZoneId: Arbiter zond id.
            /// </remarks>
            [JsiiProperty(name: "arbiterZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ArbiterZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: archVersion: Version of the deployment architecture. Currently, only the hbaseue engine type is supported. The value can be 2.0.
            /// </remarks>
            [JsiiProperty(name: "archVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ArchVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: coreDiskSize: The value ranges from 400 GB to 64,000 GB. The step size is 40 GB.
            /// </remarks>
            [JsiiProperty(name: "coreDiskSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CoreDiskSize
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: coreDiskType: Core node disk type. Valid values:
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

            /// <remarks>
            /// <strong>Property</strong>: coreInstanceType: You can call the DescribeAvailableResource operation to obtain the value of this parameter.
            /// </remarks>
            [JsiiProperty(name: "coreInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CoreInstanceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: coreNodeCount: Number of Core nodes. The value of the number of Core nodes ranges from 2 to 20, and the increment is a multiple of 2.
            /// </remarks>
            [JsiiProperty(name: "coreNodeCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CoreNodeCount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: engine: Service type. Currently, only HBase enhanced version is supported. The value can be hbaseue.
            /// </remarks>
            [JsiiProperty(name: "engine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Engine
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: engineVersion: The version of the engine. Valid values:
            /// hbaseue:2.0
            /// </remarks>
            [JsiiProperty(name: "engineVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EngineVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: logDiskSize: log disk size. The value ranges from 400 GB to 64,000 GB. The step size is 40 GB.
            /// </remarks>
            [JsiiProperty(name: "logDiskSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LogDiskSize
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: logDiskType: Log node disk type. Valid values:
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

            /// <remarks>
            /// <strong>Property</strong>: logInstanceType: Log instance type.
            /// </remarks>
            [JsiiProperty(name: "logInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LogInstanceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: logNodeCount: Log number of nodes. The value of log nodes ranges from 4 to 400 and is a multiple of 4.
            /// </remarks>
            [JsiiProperty(name: "logNodeCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LogNodeCount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: multiZoneCombination: Availability zone combination.
            /// </remarks>
            [JsiiProperty(name: "multiZoneCombination", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object MultiZoneCombination
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: payType: The billing method.
            /// Prepaid: The subscription billing method is used.
            /// Postpaid: The pay-as-you-go billing method is used.
            /// </remarks>
            [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PayType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: primaryVSwitchId: The virtual switch ID of the instance in primary availability zone must be in the availability zone corresponding to PrimaryZoneId.
            /// </remarks>
            [JsiiProperty(name: "primaryVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PrimaryVSwitchId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: primaryZoneId: Availability zone ID of the primary availability zone instance.
            /// </remarks>
            [JsiiProperty(name: "primaryZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PrimaryZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: standbyVSwitchId: The virtual switch ID of the standby availability zone instance must be in the corresponding availability zone of StandbyZoneId.
            /// </remarks>
            [JsiiProperty(name: "standbyVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object StandbyVSwitchId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: standbyZoneId: Standby zone id.
            /// </remarks>
            [JsiiProperty(name: "standbyZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object StandbyZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: autoRenewPeriod: The auto-renewal period. Unit: month.
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

            /// <remarks>
            /// <strong>Property</strong>: clusterName: The name of the instance.
            /// The name must be 2 to 128 characters in length, and can contain letters, digits, periods
            /// (.), underscores (_), and hyphens (-). It must start with a letter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "clusterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ClusterName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: deletionProtection: Specifies whether to enable the release protection feature for the cluster. Default is false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deletionProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeletionProtection
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: masterInstanceType: The instance type of the master node. You can call the DescribeAvailableResource operation to obtain the value of this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "masterInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MasterInstanceType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: period: The subscription period.
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

            /// <remarks>
            /// <strong>Property</strong>: periodUnit: The unit of the subscription period. Valid values:
            /// year
            /// month
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "periodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PeriodUnit
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: The ID of the resource group. You can query the group ID in the resource group console.
            /// If you leave this parameter empty, the instance is allocated to the default resource
            /// group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: securityIpList: The IP addresses in the whitelist. Example: 192.168.*.*\/24. The 0.0.0.0\/0 value cannot
            /// be added to the whitelist. Separate multiple IP addresses with commas (,).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityIpList", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecurityIpList
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcId: The ID of the virtual private cloud (VPC). If you leave this parameter and the VSwitchId
            /// parameter empty, the classic network type is used. The VPC network type is preferred.
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
