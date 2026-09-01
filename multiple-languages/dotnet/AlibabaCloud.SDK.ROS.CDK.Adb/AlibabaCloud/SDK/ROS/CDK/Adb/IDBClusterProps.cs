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
        /// <summary>Property dbClusterCategory: The cluster edition.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>Cluster: reserved cluster.</description>
        /// </list>
        ///
        ///     Reserved clusters are available only in the Chinese mainland and Singapore
        ///     regions. In the Singapore region, you can purchase reserved clusters only with
        ///     the pay-as-you-go billing method.
        ///
        /// <list type="bullet">
        /// <description>MixedStorage: elastic cluster (new).</description>
        /// </list>
        ///
        ///     If you set <c>DBClusterCategory</c> to <c>Cluster</c>, you must set the <c>Mode</c> parameter
        ///     to <c>Reserved</c>. If you set <c>DBClusterCategory</c> to <c>MixedStorage</c>, you must set the
        ///     <c>Mode</c> parameter to <c>Flexible</c>. Otherwise, cluster creation will fail.
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

        /// <summary>Property mode: The cluster mode.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>Reserved: reserved mode.</description>
        /// <description>Flexible: flexible mode.</description>
        /// </list>
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

        /// <summary>Property computeResource: The compute resources for the cluster.</summary>
        /// <remarks>
        /// Compute resources are used for data
        /// queries. A larger amount of compute resources can provide better query
        /// performance. Compute resources are available in cluster and single-node editions:
        ///
        /// <list type="bullet">
        /// <description>Cluster edition: includes specifications such as 16 cores/64 GB, 24 cores/96
        /// GB, and 32 cores or more. The cluster edition supports resource pool isolation,
        /// scheduled scaling, and tiered storage of hot and cold data.</description>
        /// <description>Single-node edition: includes specifications such as 8 cores/32 GB and 16
        /// cores/64 GB. The single-node edition does not provide an SLA guarantee and has a
        /// long recovery time from failures (4 to 8 hours). We do not recommend that you use
        /// the single-node edition in production environments.</description>
        /// </list>
        ///
        ///     <list type="bullet">
        ///     <description>You can call the <a href="">DescribeAvailableResource</a> operation to query the compute
        ///     resources that are available in a specific region.</description>
        ///     <description>This parameter is required when <c>Mode</c> is set to <c>Flexible</c> (flexible mode).</description>
        ///     </list>
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
        /// <remarks>
        /// <list type="bullet">
        /// <description>The description cannot start with <c>http:\/\/</c> or <c>https:\/\/</c>.</description>
        /// <description>The description must be 2 to 256 characters long.</description>
        /// </list>
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

        /// <summary>Property dbNodeGroupCount: The number of node groups.</summary>
        /// <remarks>
        /// The value must be an integer from 1 to 200.
        ///
        ///     This parameter is required when <c>Mode</c> is set to <c>Reserved</c> (reserved mode).
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

        /// <summary>Property diskEncryption: Whether to enable cloud disk encryption. Value:.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>true: yes.</description>
        /// <description>false: no.</description>
        /// </list>
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

        /// <summary>Property elasticIoResource: The number of Elastic IO Units (EIUs).</summary>
        [JsiiProperty(name: "elasticIoResource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ElasticIoResource
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enableSsl: Whether to enable SSL link encryption function, value:.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description><strong>true</strong>: open.</description>
        /// <description><strong>false</strong>: close.</description>
        /// </list>
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

        /// <summary>Property executorCount: This parameter is reserved.</summary>
        [JsiiProperty(name: "executorCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ExecutorCount
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property kmsId: The kmsId used for cloud disk encryption, effective only when DiskEncryption is true.</summary>
        [JsiiProperty(name: "kmsId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? KmsId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property period: The subscription period unit.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>Year</description>
        /// <description>Month</description>
        /// </list>
        ///
        ///     This parameter is required when <c>PayType</c> is set to <c>Prepaid</c> (subscription).
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

            /// <summary>Property dbClusterCategory: The cluster edition.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>Cluster: reserved cluster.</description>
            /// </list>
            ///
            ///     Reserved clusters are available only in the Chinese mainland and Singapore
            ///     regions. In the Singapore region, you can purchase reserved clusters only with
            ///     the pay-as-you-go billing method.
            ///
            /// <list type="bullet">
            /// <description>MixedStorage: elastic cluster (new).</description>
            /// </list>
            ///
            ///     If you set <c>DBClusterCategory</c> to <c>Cluster</c>, you must set the <c>Mode</c> parameter
            ///     to <c>Reserved</c>. If you set <c>DBClusterCategory</c> to <c>MixedStorage</c>, you must set the
            ///     <c>Mode</c> parameter to <c>Flexible</c>. Otherwise, cluster creation will fail.
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

            /// <summary>Property mode: The cluster mode.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>Reserved: reserved mode.</description>
            /// <description>Flexible: flexible mode.</description>
            /// </list>
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

            /// <summary>Property computeResource: The compute resources for the cluster.</summary>
            /// <remarks>
            /// Compute resources are used for data
            /// queries. A larger amount of compute resources can provide better query
            /// performance. Compute resources are available in cluster and single-node editions:
            ///
            /// <list type="bullet">
            /// <description>Cluster edition: includes specifications such as 16 cores/64 GB, 24 cores/96
            /// GB, and 32 cores or more. The cluster edition supports resource pool isolation,
            /// scheduled scaling, and tiered storage of hot and cold data.</description>
            /// <description>Single-node edition: includes specifications such as 8 cores/32 GB and 16
            /// cores/64 GB. The single-node edition does not provide an SLA guarantee and has a
            /// long recovery time from failures (4 to 8 hours). We do not recommend that you use
            /// the single-node edition in production environments.</description>
            /// </list>
            ///
            ///     <list type="bullet">
            ///     <description>You can call the <a href="">DescribeAvailableResource</a> operation to query the compute
            ///     resources that are available in a specific region.</description>
            ///     <description>This parameter is required when <c>Mode</c> is set to <c>Flexible</c> (flexible mode).</description>
            ///     </list>
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
            /// <remarks>
            /// <list type="bullet">
            /// <description>The description cannot start with <c>http:\/\/</c> or <c>https:\/\/</c>.</description>
            /// <description>The description must be 2 to 256 characters long.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbClusterDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbClusterDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dbNodeGroupCount: The number of node groups.</summary>
            /// <remarks>
            /// The value must be an integer from 1 to 200.
            ///
            ///     This parameter is required when <c>Mode</c> is set to <c>Reserved</c> (reserved mode).
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

            /// <summary>Property diskEncryption: Whether to enable cloud disk encryption. Value:.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>true: yes.</description>
            /// <description>false: no.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "diskEncryption", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DiskEncryption
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property elasticIoResource: The number of Elastic IO Units (EIUs).</summary>
            [JsiiOptional]
            [JsiiProperty(name: "elasticIoResource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ElasticIoResource
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enableSsl: Whether to enable SSL link encryption function, value:.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description><strong>true</strong>: open.</description>
            /// <description><strong>false</strong>: close.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableSsl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableSsl
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property executorCount: This parameter is reserved.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "executorCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ExecutorCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property kmsId: The kmsId used for cloud disk encryption, effective only when DiskEncryption is true.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "kmsId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? KmsId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property period: The subscription period unit.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>Year</description>
            /// <description>Month</description>
            /// </list>
            ///
            ///     This parameter is required when <c>PayType</c> is set to <c>Prepaid</c> (subscription).
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
