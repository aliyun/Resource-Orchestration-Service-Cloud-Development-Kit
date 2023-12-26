using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Adb
{
    /// <summary>Properties for defining a `DBCluster`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adb-dbcluster
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDBClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-adb.DBClusterProps")]
    public interface IDBClusterProps
    {
        /// <summary>Property dbClusterCategory: The edition of the cluster.</summary>
        /// <remarks>
        /// Valid values when the cluster is in reserved mode:
        /// Basic
        /// Cluster
        /// When the cluster is in elastic mode, set the value to MixedStorage.
        /// </remarks>
        [JsiiProperty(name: "dbClusterCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbClusterCategory
        {
            get;
        }

        /// <summary>Property dbClusterVersion: The version of the cluster.</summary>
        /// <remarks>
        /// Set the value to 3.0.
        /// </remarks>
        [JsiiProperty(name: "dbClusterVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbClusterVersion
        {
            get;
        }

        /// <summary>Property mode: The mode of the cluster.</summary>
        /// <remarks>
        /// Valid values:
        /// Reserver: the reserved mode
        /// Flexible: the elastic mode
        /// </remarks>
        [JsiiProperty(name: "mode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Mode
        {
            get;
        }

        /// <summary>Property payType: The billing method of the cluster.</summary>
        /// <remarks>
        /// Valid values:
        /// Postpaid: pay-as-you-go
        /// Prepaid: subscription
        /// </remarks>
        [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PayType
        {
            get;
        }

        /// <summary>Property vpcId: The ID of the VPC.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <summary>Property vSwitchId: The ID of the vSwitch.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VSwitchId
        {
            get;
        }

        /// <summary>Property computeResource: The computing resource of the cluster.</summary>
        /// <remarks>
        /// This parameter is required in elastic mode.
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

        /// <summary>Property dbClusterClass: The specification of the cluster.</summary>
        /// <remarks>
        /// This parameter is required in reserved mode. Valid values:
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

        /// <summary>Property dbClusterDescription: The description of the cluster.</summary>
        [JsiiProperty(name: "dbClusterDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbClusterDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dbNodeGroupCount: The number of node groups.</summary>
        /// <remarks>
        /// This parameter is required in reserved mode. Valid values:
        /// T8, T16, T32, and T52: 1
        /// C8 and C32: 1 to 128
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

        /// <summary>Property dbNodeStorage: The storage space of the node.</summary>
        /// <remarks>
        /// This parameter is required in reserved mode. Unit: GB. Valid values:
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

        /// <summary>Property elasticIoResource: Elastic IO Unit Note the flexible mode cluster will use this parameter.</summary>
        [JsiiProperty(name: "elasticIoResource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ElasticIoResource
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property executorCount: ExecutorCount.</summary>
        [JsiiProperty(name: "executorCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ExecutorCount
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property period: Valid values when the Period parameter is set to Month: 1, 2, 3, 4, 5, 6, 7, 8, and 9.</summary>
        /// <remarks>
        /// Valid values when the Period parameter is set to Year: 1, 2, and 3.
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

        /// <summary>Property periodType: The subscription period for the cluster.</summary>
        /// <remarks>
        /// This parameter is required if the PayType parameter is set to Prepaid. Valid values:
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

        /// <summary>Property tags: Tags to attach to instance.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
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

        /// <summary>Property zoneId: The zone ID of the cluster.</summary>
        /// <remarks>
        /// You can call the DescribeRegions operation to query the most recent zone list.
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

        /// <summary>Properties for defining a `DBCluster`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adb-dbcluster
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDBClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-adb.DBClusterProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Adb.IDBClusterProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property dbClusterCategory: The edition of the cluster.</summary>
            /// <remarks>
            /// Valid values when the cluster is in reserved mode:
            /// Basic
            /// Cluster
            /// When the cluster is in elastic mode, set the value to MixedStorage.
            /// </remarks>
            [JsiiProperty(name: "dbClusterCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbClusterCategory
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dbClusterVersion: The version of the cluster.</summary>
            /// <remarks>
            /// Set the value to 3.0.
            /// </remarks>
            [JsiiProperty(name: "dbClusterVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbClusterVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property mode: The mode of the cluster.</summary>
            /// <remarks>
            /// Valid values:
            /// Reserver: the reserved mode
            /// Flexible: the elastic mode
            /// </remarks>
            [JsiiProperty(name: "mode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Mode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property payType: The billing method of the cluster.</summary>
            /// <remarks>
            /// Valid values:
            /// Postpaid: pay-as-you-go
            /// Prepaid: subscription
            /// </remarks>
            [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PayType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vpcId: The ID of the VPC.</summary>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vSwitchId: The ID of the vSwitch.</summary>
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VSwitchId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property computeResource: The computing resource of the cluster.</summary>
            /// <remarks>
            /// This parameter is required in elastic mode.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "computeResource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ComputeResource
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dbClusterClass: The specification of the cluster.</summary>
            /// <remarks>
            /// This parameter is required in reserved mode. Valid values:
            /// Basic Edition: T8, T16, T32, and T52
            /// Cluster Edition: C8 and C32
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbClusterClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbClusterClass
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dbClusterDescription: The description of the cluster.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dbClusterDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbClusterDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dbNodeGroupCount: The number of node groups.</summary>
            /// <remarks>
            /// This parameter is required in reserved mode. Valid values:
            /// T8, T16, T32, and T52: 1
            /// C8 and C32: 1 to 128
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbNodeGroupCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbNodeGroupCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dbNodeStorage: The storage space of the node.</summary>
            /// <remarks>
            /// This parameter is required in reserved mode. Unit: GB. Valid values:
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

            /// <summary>Property elasticIoResource: Elastic IO Unit Note the flexible mode cluster will use this parameter.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "elasticIoResource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ElasticIoResource
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property executorCount: ExecutorCount.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "executorCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ExecutorCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property period: Valid values when the Period parameter is set to Month: 1, 2, 3, 4, 5, 6, 7, 8, and 9.</summary>
            /// <remarks>
            /// Valid values when the Period parameter is set to Year: 1, 2, and 3.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Period
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property periodType: The subscription period for the cluster.</summary>
            /// <remarks>
            /// This parameter is required if the PayType parameter is set to Prepaid. Valid values:
            /// Year: subscription on a yearly basis
            /// Month: subscription on a monthly basis
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "periodType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PeriodType
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

            /// <summary>Property tags: Tags to attach to instance.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-adb.RosDBCluster.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Adb.RosDBCluster.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Adb.RosDBCluster.ITagsProperty[]?>();
            }

            /// <summary>Property zoneId: The zone ID of the cluster.</summary>
            /// <remarks>
            /// You can call the DescribeRegions operation to query the most recent zone list.
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
