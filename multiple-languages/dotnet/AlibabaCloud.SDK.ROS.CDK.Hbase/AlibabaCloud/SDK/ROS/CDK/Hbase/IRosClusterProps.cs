using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Hbase
{
    /// <summary>Properties for defining a `RosCluster`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbase-cluster
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-hbase.RosClusterProps")]
    public interface IRosClusterProps
    {
        /// <remarks>
        /// <strong>Property</strong>: coreInstanceType: You can call the DescribeAvailableResource operation to obtain the value of this parameter.
        /// </remarks>
        [JsiiProperty(name: "coreInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CoreInstanceType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: engine: The type of the service. Valid values:
        /// hbase
        /// hbaseue
        /// bds
        /// </remarks>
        [JsiiProperty(name: "engine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Engine
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: engineVersion: The version of the engine. Valid values:
        /// hbase:1.1, 2.0
        /// hbaseue:2.0
        /// bds:1.0
        /// </remarks>
        [JsiiProperty(name: "engineVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EngineVersion
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: nodeCount: The number of nodes. Valid values: 1 to 100.
        /// ApsaraDB for HBase in single-node mode: one node
        /// ApsaraDB for HBase that runs in cluster mode and uses disks: at least two nodes
        /// ApsaraDB for HBase that runs in cluster mode and uses local disks: at least three
        /// nodes
        /// </remarks>
        [JsiiProperty(name: "nodeCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NodeCount
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
        /// <strong>Property</strong>: zoneId: The ID of the zone.
        /// </remarks>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ZoneId
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
        /// <strong>Property</strong>: coldStorageSize: The size of cold data storage.
        /// If this parameter is set to 0, cold data storage is disabled.
        /// If this parameter is set to a value greater than 0, cold data storage is enabled.
        /// The storage size ranges from 800 GB to 100,000 GB and the step size is 10 GB.
        /// </remarks>
        [JsiiProperty(name: "coldStorageSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ColdStorageSize
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
        /// <strong>Property</strong>: diskSize: The disk size of the node. Unit: GB.
        /// For ApsaraDB for HBase in single-node mode, the disk size ranges from 20 GB to 500
        /// GB and the step size is 1 GB.
        /// For ApsaraDB for HBase that runs in cluster mode and uses disks, the disk size ranges
        /// from 400 GB to 64,000 GB and the step size is 40 GB.
        /// For ApsaraDB for HBase that runs in cluster mode and uses local disks, the disk size
        /// varies by instance type. The following list provides the mappings between disks sizes
        /// and instance types:
        /// hbase.d1.4xlarge =44000
        /// hbase.d1.6xlarge =66000
        /// hbase.d1.8xlarge =88000
        /// hbase.i2.xlarge =894
        /// hbase.i2.2xlarge =1788
        /// hbase.i2.4xlarge =3576
        /// hbase.i2.8xlarge =7152
        /// hbase.d2s.5xlarge =58400
        /// hbase.d2s.10xlarge =109500
        /// </remarks>
        [JsiiProperty(name: "diskSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DiskSize
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: diskType: The type of the disk. Valid values:
        /// cloud_efficiency
        /// cloud_ssd
        /// local_hdd_pro
        /// local_ssd_pro
        /// cloud_essd_pl1
        /// </remarks>
        [JsiiProperty(name: "diskType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DiskType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: encryptionKey: The encrypted key ID is empty if the encryption is not enabled.
        /// It shows that the current cloud disk version is unable to close after the encryption is turned on.
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
        /// <strong>Property</strong>: vpcId: The ID of the virtual private cloud (VPC). If you leave this parameter and the VSwitchId parameter empty, the classic network type is used. The VPC network type is preferred.
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

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: The ID of the vSwitch.
        /// </remarks>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VSwitchId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosCluster`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbase-cluster
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-hbase.RosClusterProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Hbase.IRosClusterProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
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
            /// <strong>Property</strong>: engine: The type of the service. Valid values:
            /// hbase
            /// hbaseue
            /// bds
            /// </remarks>
            [JsiiProperty(name: "engine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Engine
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: engineVersion: The version of the engine. Valid values:
            /// hbase:1.1, 2.0
            /// hbaseue:2.0
            /// bds:1.0
            /// </remarks>
            [JsiiProperty(name: "engineVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EngineVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: nodeCount: The number of nodes. Valid values: 1 to 100.
            /// ApsaraDB for HBase in single-node mode: one node
            /// ApsaraDB for HBase that runs in cluster mode and uses disks: at least two nodes
            /// ApsaraDB for HBase that runs in cluster mode and uses local disks: at least three
            /// nodes
            /// </remarks>
            [JsiiProperty(name: "nodeCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NodeCount
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
            /// <strong>Property</strong>: zoneId: The ID of the zone.
            /// </remarks>
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ZoneId
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
            /// <strong>Property</strong>: coldStorageSize: The size of cold data storage.
            /// If this parameter is set to 0, cold data storage is disabled.
            /// If this parameter is set to a value greater than 0, cold data storage is enabled.
            /// The storage size ranges from 800 GB to 100,000 GB and the step size is 10 GB.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "coldStorageSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ColdStorageSize
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
            /// <strong>Property</strong>: diskSize: The disk size of the node. Unit: GB.
            /// For ApsaraDB for HBase in single-node mode, the disk size ranges from 20 GB to 500
            /// GB and the step size is 1 GB.
            /// For ApsaraDB for HBase that runs in cluster mode and uses disks, the disk size ranges
            /// from 400 GB to 64,000 GB and the step size is 40 GB.
            /// For ApsaraDB for HBase that runs in cluster mode and uses local disks, the disk size
            /// varies by instance type. The following list provides the mappings between disks sizes
            /// and instance types:
            /// hbase.d1.4xlarge =44000
            /// hbase.d1.6xlarge =66000
            /// hbase.d1.8xlarge =88000
            /// hbase.i2.xlarge =894
            /// hbase.i2.2xlarge =1788
            /// hbase.i2.4xlarge =3576
            /// hbase.i2.8xlarge =7152
            /// hbase.d2s.5xlarge =58400
            /// hbase.d2s.10xlarge =109500
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "diskSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DiskSize
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: diskType: The type of the disk. Valid values:
            /// cloud_efficiency
            /// cloud_ssd
            /// local_hdd_pro
            /// local_ssd_pro
            /// cloud_essd_pl1
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "diskType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DiskType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: encryptionKey: The encrypted key ID is empty if the encryption is not enabled.
            /// It shows that the current cloud disk version is unable to close after the encryption is turned on.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "encryptionKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EncryptionKey
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
            /// <strong>Property</strong>: vpcId: The ID of the virtual private cloud (VPC). If you leave this parameter and the VSwitchId parameter empty, the classic network type is used. The VPC network type is preferred.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VpcId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: vSwitchId: The ID of the vSwitch.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VSwitchId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
