using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Adb
{
    /// <summary>Properties for defining a `RosDBCluster`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adb-dbcluster
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosDBClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-adb.RosDBClusterProps")]
    public interface IRosDBClusterProps
    {
        /// <remarks>
        /// <strong>Property</strong>: dbClusterCategory: The cluster edition. Valid values:
        /// - Cluster: reserved cluster.
        /// > Reserved clusters are available only in the Chinese mainland and Singapore
        /// regions. In the Singapore region, you can purchase reserved clusters only with
        /// the pay-as-you-go billing method.
        /// - MixedStorage: elastic cluster (new).
        /// > If you set `DBClusterCategory` to `Cluster`, you must set the `Mode` parameter
        /// to `Reserved`. If you set `DBClusterCategory` to `MixedStorage`, you must set the
        /// `Mode` parameter to `Flexible`. Otherwise, cluster creation will fail.
        /// </remarks>
        [JsiiProperty(name: "dbClusterCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbClusterCategory
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbClusterVersion: The version of the cluster. Set the value to 3.0.
        /// </remarks>
        [JsiiProperty(name: "dbClusterVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbClusterVersion
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: mode: The cluster mode. Valid values:
        /// - Reserved: reserved mode.
        /// - Flexible: flexible mode.
        /// </remarks>
        [JsiiProperty(name: "mode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Mode
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: payType: The billing method of the cluster. Valid values:
        /// Postpaid: pay-as-you-go
        /// Prepaid: subscription
        /// </remarks>
        [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PayType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: The ID of the VPC.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: The ID of the vSwitch.
        /// </remarks>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VSwitchId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: computeResource: The compute resources for the cluster. Compute resources are used for data
        /// queries. A larger amount of compute resources can provide better query
        /// performance. Compute resources are available in cluster and single-node editions:
        /// - Cluster edition: includes specifications such as 16 cores\/64 GB, 24 cores\/96
        /// GB, and 32 cores or more. The cluster edition supports resource pool isolation,
        /// scheduled scaling, and tiered storage of hot and cold data.
        /// - Single-node edition: includes specifications such as 8 cores\/32 GB and 16
        /// cores\/64 GB. The single-node edition does not provide an SLA guarantee and has a
        /// long recovery time from failures (4 to 8 hours). We do not recommend that you use
        /// the single-node edition in production environments.
        /// > * You can call the [DescribeAvailableResource]() operation to query the compute
        /// resources that are available in a specific region.
        /// >
        /// > * This parameter is required when `Mode` is set to `Flexible` (flexible mode).
        /// </remarks>
        [JsiiProperty(name: "computeResource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ComputeResource
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: dbClusterClass: The specification of the cluster. This parameter is required in reserved mode. Valid values:
        /// Basic Edition: T8, T16, T32, and T52
        /// Cluster Edition: C8 and C32
        /// </remarks>
        [JsiiProperty(name: "dbClusterClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbClusterClass
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: dbClusterDescription: The description of the cluster.
        /// - The description cannot start with `http:\/\/` or `https:\/\/`.
        /// - The description must be 2 to 256 characters long.
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
        /// <strong>Property</strong>: dbNodeGroupCount: The number of node groups. The value must be an integer from 1 to 200.
        /// > This parameter is required when `Mode` is set to `Reserved` (reserved mode).
        /// </remarks>
        [JsiiProperty(name: "dbNodeGroupCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbNodeGroupCount
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: dbNodeStorage: The storage space of the node. This parameter is required in reserved mode. Unit: GB. Valid values:
        /// T8: 100 to 500
        /// T16 and T32: 100 to 2000
        /// T52: 100 to 4000
        /// C8: 100 to 1000
        /// C32: 100 to 8000
        /// Note The storage space less than 1,000 GB increases in increments of 100 GB. The storage space greater than 1,000 GB increases in increments of 1,000 GB.
        /// </remarks>
        [JsiiProperty(name: "dbNodeStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbNodeStorage
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: diskEncryption: Whether to enable cloud disk encryption. Value:
        ///
        /// - true: yes.
        /// - false: no.
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

        /// <remarks>
        /// <strong>Property</strong>: elasticIoResource: The number of Elastic IO Units (EIUs).
        /// </remarks>
        [JsiiProperty(name: "elasticIoResource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ElasticIoResource
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: enableSsl: Whether to enable SSL link encryption function, value:
        ///
        /// - **true**: open.
        /// - **false**: close.
        /// </remarks>
        [JsiiProperty(name: "enableSsl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableSsl
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: executorCount: This parameter is reserved.
        /// </remarks>
        [JsiiProperty(name: "executorCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ExecutorCount
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: kmsId: The kmsId used for cloud disk encryption, effective only when DiskEncryption is true.
        /// </remarks>
        [JsiiProperty(name: "kmsId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? KmsId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: period: The subscription period unit. Valid values:
        /// - Year
        /// - Month
        /// > This parameter is required when `PayType` is set to `Prepaid` (subscription).
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
        /// <strong>Property</strong>: periodType: The subscription period for the cluster. This parameter is required if the PayType parameter is set to Prepaid. Valid values:
        /// Year: subscription on a yearly basis
        /// Month: subscription on a monthly basis
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
        /// <strong>Property</strong>: resourceGroupId: The ID of the resource group.
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
        /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-adb.RosDBCluster.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Adb.RosDBCluster.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneId: The zone ID of the cluster. You can call the DescribeRegions operation to query the most recent zone list.
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

        /// <summary>Properties for defining a `RosDBCluster`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adb-dbcluster
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosDBClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-adb.RosDBClusterProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Adb.IRosDBClusterProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: dbClusterCategory: The cluster edition. Valid values:
            /// - Cluster: reserved cluster.
            /// > Reserved clusters are available only in the Chinese mainland and Singapore
            /// regions. In the Singapore region, you can purchase reserved clusters only with
            /// the pay-as-you-go billing method.
            /// - MixedStorage: elastic cluster (new).
            /// > If you set `DBClusterCategory` to `Cluster`, you must set the `Mode` parameter
            /// to `Reserved`. If you set `DBClusterCategory` to `MixedStorage`, you must set the
            /// `Mode` parameter to `Flexible`. Otherwise, cluster creation will fail.
            /// </remarks>
            [JsiiProperty(name: "dbClusterCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbClusterCategory
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dbClusterVersion: The version of the cluster. Set the value to 3.0.
            /// </remarks>
            [JsiiProperty(name: "dbClusterVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbClusterVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: mode: The cluster mode. Valid values:
            /// - Reserved: reserved mode.
            /// - Flexible: flexible mode.
            /// </remarks>
            [JsiiProperty(name: "mode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Mode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: payType: The billing method of the cluster. Valid values:
            /// Postpaid: pay-as-you-go
            /// Prepaid: subscription
            /// </remarks>
            [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PayType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcId: The ID of the VPC.
            /// </remarks>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: vSwitchId: The ID of the vSwitch.
            /// </remarks>
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VSwitchId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: computeResource: The compute resources for the cluster. Compute resources are used for data
            /// queries. A larger amount of compute resources can provide better query
            /// performance. Compute resources are available in cluster and single-node editions:
            /// - Cluster edition: includes specifications such as 16 cores\/64 GB, 24 cores\/96
            /// GB, and 32 cores or more. The cluster edition supports resource pool isolation,
            /// scheduled scaling, and tiered storage of hot and cold data.
            /// - Single-node edition: includes specifications such as 8 cores\/32 GB and 16
            /// cores\/64 GB. The single-node edition does not provide an SLA guarantee and has a
            /// long recovery time from failures (4 to 8 hours). We do not recommend that you use
            /// the single-node edition in production environments.
            /// > * You can call the [DescribeAvailableResource]() operation to query the compute
            /// resources that are available in a specific region.
            /// >
            /// > * This parameter is required when `Mode` is set to `Flexible` (flexible mode).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "computeResource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ComputeResource
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: dbClusterClass: The specification of the cluster. This parameter is required in reserved mode. Valid values:
            /// Basic Edition: T8, T16, T32, and T52
            /// Cluster Edition: C8 and C32
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbClusterClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbClusterClass
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: dbClusterDescription: The description of the cluster.
            /// - The description cannot start with `http:\/\/` or `https:\/\/`.
            /// - The description must be 2 to 256 characters long.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbClusterDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbClusterDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: dbNodeGroupCount: The number of node groups. The value must be an integer from 1 to 200.
            /// > This parameter is required when `Mode` is set to `Reserved` (reserved mode).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbNodeGroupCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbNodeGroupCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: dbNodeStorage: The storage space of the node. This parameter is required in reserved mode. Unit: GB. Valid values:
            /// T8: 100 to 500
            /// T16 and T32: 100 to 2000
            /// T52: 100 to 4000
            /// C8: 100 to 1000
            /// C32: 100 to 8000
            /// Note The storage space less than 1,000 GB increases in increments of 100 GB. The storage space greater than 1,000 GB increases in increments of 1,000 GB.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbNodeStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbNodeStorage
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: diskEncryption: Whether to enable cloud disk encryption. Value:
            ///
            /// - true: yes.
            /// - false: no.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "diskEncryption", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DiskEncryption
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: elasticIoResource: The number of Elastic IO Units (EIUs).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "elasticIoResource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ElasticIoResource
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: enableSsl: Whether to enable SSL link encryption function, value:
            ///
            /// - **true**: open.
            /// - **false**: close.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableSsl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableSsl
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: executorCount: This parameter is reserved.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "executorCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ExecutorCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: kmsId: The kmsId used for cloud disk encryption, effective only when DiskEncryption is true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "kmsId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? KmsId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: period: The subscription period unit. Valid values:
            /// - Year
            /// - Month
            /// > This parameter is required when `PayType` is set to `Prepaid` (subscription).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Period
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: periodType: The subscription period for the cluster. This parameter is required if the PayType parameter is set to Prepaid. Valid values:
            /// Year: subscription on a yearly basis
            /// Month: subscription on a monthly basis
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "periodType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PeriodType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: The ID of the resource group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-adb.RosDBCluster.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Adb.RosDBCluster.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Adb.RosDBCluster.ITagsProperty[]?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: zoneId: The zone ID of the cluster. You can call the DescribeRegions operation to query the most recent zone list.
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
