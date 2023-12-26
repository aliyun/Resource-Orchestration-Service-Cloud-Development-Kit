using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Lindorm
{
    /// <summary>Properties for defining a `RosInstance`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-lindorm-instance
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-lindorm.RosInstanceProps")]
    public interface IRosInstanceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: diskCategory: The storage type of the instance. Valid values:
        /// cloud_efficiency: This instance uses the Standard type of storage.
        /// cloud_ssd: This instance uses the Performance type of storage.
        /// capacity_cloud_storage: This instance uses the Capacity type of storage.
        /// local_ssd_pro: This instance uses local SSDs.
        /// local_hdd_pro: This instance uses local HDDs.
        /// </remarks>
        [JsiiProperty(name: "diskCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DiskCategory
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceName: The name of the instance that you want to create.
        /// </remarks>
        [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: The ID of the VPC in which you want to create the instance.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: coldStorage: The cold storage capacity of the instance. By default, if you leave this parameter unspecified, cold storage is not enabled for the instance. Unit: GB. Valid values: 800 to 1000000.
        /// </remarks>
        [JsiiProperty(name: "coldStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ColdStorage
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: coreSpec: The specification of the nodes in the instance if you set DiskCategory to local_ssd_pro or local_hdd_pro.
        /// When DiskCategory is set to local_ssd_pro, you can set this parameter to the following values:
        /// lindorm.i2.xlarge: Each node has 4 dedicated CPU cores and 32 GB of dedicated memory.
        /// lindorm.i2.2xlarge: Each node has 8 dedicated CPU cores and 64 GB of dedicated memory.
        /// lindorm.i2.4xlarge: Each node has 16 dedicated CPU cores and 128 GB of dedicated memory.
        /// lindorm.i2.8xlarge: Each node has 32 dedicated CPU cores and 256 GB of dedicated memory.
        /// When DiskCategory is set to local_hdd_pro, you can set this parameter to the following values:
        /// lindorm.d1.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
        /// lindorm.d1.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
        /// lindorm.d1.6xlarge: Each node has 24 dedicated CPU cores and 96 GB of dedicated memory.
        /// </remarks>
        [JsiiProperty(name: "coreSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CoreSpec
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: filestoreNum: The number of LindormDFS nodes in the instance. The valid values of this parameter depend on the value of the PayType parameter.
        /// If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 60.
        /// If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 8.
        /// </remarks>
        [JsiiProperty(name: "filestoreNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FilestoreNum
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: filestoreSpec: The specification of LindormDFS nodes in the instance. Set the value of this parameter to lindorm.c.xlarge, which indicates that each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
        /// </remarks>
        [JsiiProperty(name: "filestoreSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FilestoreSpec
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceChargeType: The billing method of the instance you want to create. Valid values:
        /// PREPAY: subscription.
        /// POSTPAY: pay-as-you-go.
        /// Default value: POSTPAY
        /// </remarks>
        [JsiiProperty(name: "instanceChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceChargeType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceStorage: The storage capacity of the instance you want to create. Unit: GB.
        /// </remarks>
        [JsiiProperty(name: "instanceStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceStorage
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: lindormNum: The number of LindormTable nodes in the instance. The valid values of this parameter depend on the value of the PayType parameter.
        /// If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 90.
        /// If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 400.
        /// ** This parameter is required if you want to create a multi-zone instance. ** The valid values of this parameter range from 4 to 400 if you want to create a multi-zone instance.
        /// </remarks>
        [JsiiProperty(name: "lindormNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LindormNum
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: lindormSpec: The specification of LindormTable nodes in the instance. Valid values:
        /// lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
        /// lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
        /// lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
        /// lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
        /// lindorm.c.xlarge: Each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
        /// lindorm.c.2xlarge: Each node has 8 dedicated CPU cores and 16 GB of dedicated memory.
        /// lindorm.c.4xlarge: Each node has 16 dedicated CPU cores and 32 GB of dedicated memory.
        /// lindorm.c.8xlarge: Each node has 32 dedicated CPU cores and 64 GB of dedicated memory.
        /// </remarks>
        [JsiiProperty(name: "lindormSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LindormSpec
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: period: The subscription period of the instance. The valid values of this parameter depend on the value of the PeriodUnit parameter.
        /// If PeriodUnit is set to Month, Valid values are 1,2,3,4,5,6,7,8,9,12,24,36.
        /// If PeriodUnit is set to Year, set this parameter to an integer that ranges from 1 to 3.
        /// NoteThis parameter is available and required when the PayType parameter is set to PREPAY.
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
        /// <strong>Property</strong>: periodUnit: The period based on which you are charged for the instance. Valid values:
        /// Month: You are charged for the instance on a monthly basis.
        /// Year: You are charged for the instance on a yearly basis.
        /// NoteThis parameter is available and required when the PayType parameter is set to PREPAY.
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
        /// <strong>Property</strong>: resourceGroupId: The ID of the resource group to which the Lindorm instance belongs.
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
        /// <strong>Property</strong>: securityIpList: The ip white list of instance.
        /// </remarks>
        [JsiiProperty(name: "securityIpList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecurityIpList
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: solrNum: The number of LindormSearch nodes in the instance. Valid values: integers from 0 to 60.
        /// </remarks>
        [JsiiProperty(name: "solrNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SolrNum
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: solrSpec: The specification of the LindormSearch nodes in the instance. Valid values:
        /// lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
        /// lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
        /// lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
        /// lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
        /// </remarks>
        [JsiiProperty(name: "solrSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SolrSpec
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: streamNum: The number of LindormStream nodes in the instance. Valid values: integers from 0 to 90.
        /// </remarks>
        [JsiiProperty(name: "streamNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? StreamNum
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: streamSpec: The specification of LindormStream nodes in the instance. Valid values:
        /// lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
        /// lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
        /// lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
        /// lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
        /// lindorm.c.xlarge: Each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
        /// lindorm.c.2xlarge: Each node has 8 dedicated CPU cores and 16 GB of dedicated memory.
        /// lindorm.c.4xlarge: Each node has 16 dedicated CPU cores and 32 GB of dedicated memory.
        /// lindorm.c.8xlarge: Each node has 32 dedicated CPU cores and 64 GB of dedicated memory.
        /// </remarks>
        [JsiiProperty(name: "streamSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? StreamSpec
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: tsdbNum: The number of the LindormTSDB nodes in the instance. The valid values of this parameter depend on the value of the PayType parameter.
        /// If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 24.
        /// If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 32.
        /// </remarks>
        [JsiiProperty(name: "tsdbNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TsdbNum
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: tsdbSpec: The specification of the LindormTSDB nodes in the instance. Valid values:
        /// lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
        /// lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
        /// lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
        /// lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
        /// </remarks>
        [JsiiProperty(name: "tsdbSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TsdbSpec
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: The ID of the vSwitch to which you want the instance to connect.
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

        /// <remarks>
        /// <strong>Property</strong>: zoneId: The ID of the zone in which you want to create the instance.
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

        /// <summary>Properties for defining a `RosInstance`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-lindorm-instance
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-lindorm.RosInstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Lindorm.IRosInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: diskCategory: The storage type of the instance. Valid values:
            /// cloud_efficiency: This instance uses the Standard type of storage.
            /// cloud_ssd: This instance uses the Performance type of storage.
            /// capacity_cloud_storage: This instance uses the Capacity type of storage.
            /// local_ssd_pro: This instance uses local SSDs.
            /// local_hdd_pro: This instance uses local HDDs.
            /// </remarks>
            [JsiiProperty(name: "diskCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DiskCategory
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceName: The name of the instance that you want to create.
            /// </remarks>
            [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcId: The ID of the VPC in which you want to create the instance.
            /// </remarks>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: coldStorage: The cold storage capacity of the instance. By default, if you leave this parameter unspecified, cold storage is not enabled for the instance. Unit: GB. Valid values: 800 to 1000000.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "coldStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ColdStorage
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: coreSpec: The specification of the nodes in the instance if you set DiskCategory to local_ssd_pro or local_hdd_pro.
            /// When DiskCategory is set to local_ssd_pro, you can set this parameter to the following values:
            /// lindorm.i2.xlarge: Each node has 4 dedicated CPU cores and 32 GB of dedicated memory.
            /// lindorm.i2.2xlarge: Each node has 8 dedicated CPU cores and 64 GB of dedicated memory.
            /// lindorm.i2.4xlarge: Each node has 16 dedicated CPU cores and 128 GB of dedicated memory.
            /// lindorm.i2.8xlarge: Each node has 32 dedicated CPU cores and 256 GB of dedicated memory.
            /// When DiskCategory is set to local_hdd_pro, you can set this parameter to the following values:
            /// lindorm.d1.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
            /// lindorm.d1.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
            /// lindorm.d1.6xlarge: Each node has 24 dedicated CPU cores and 96 GB of dedicated memory.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "coreSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CoreSpec
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: filestoreNum: The number of LindormDFS nodes in the instance. The valid values of this parameter depend on the value of the PayType parameter.
            /// If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 60.
            /// If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 8.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "filestoreNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FilestoreNum
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: filestoreSpec: The specification of LindormDFS nodes in the instance. Set the value of this parameter to lindorm.c.xlarge, which indicates that each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "filestoreSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FilestoreSpec
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceChargeType: The billing method of the instance you want to create. Valid values:
            /// PREPAY: subscription.
            /// POSTPAY: pay-as-you-go.
            /// Default value: POSTPAY
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceChargeType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceStorage: The storage capacity of the instance you want to create. Unit: GB.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceStorage
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: lindormNum: The number of LindormTable nodes in the instance. The valid values of this parameter depend on the value of the PayType parameter.
            /// If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 90.
            /// If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 400.
            /// ** This parameter is required if you want to create a multi-zone instance. ** The valid values of this parameter range from 4 to 400 if you want to create a multi-zone instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "lindormNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LindormNum
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: lindormSpec: The specification of LindormTable nodes in the instance. Valid values:
            /// lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
            /// lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
            /// lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
            /// lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
            /// lindorm.c.xlarge: Each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
            /// lindorm.c.2xlarge: Each node has 8 dedicated CPU cores and 16 GB of dedicated memory.
            /// lindorm.c.4xlarge: Each node has 16 dedicated CPU cores and 32 GB of dedicated memory.
            /// lindorm.c.8xlarge: Each node has 32 dedicated CPU cores and 64 GB of dedicated memory.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "lindormSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LindormSpec
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: period: The subscription period of the instance. The valid values of this parameter depend on the value of the PeriodUnit parameter.
            /// If PeriodUnit is set to Month, Valid values are 1,2,3,4,5,6,7,8,9,12,24,36.
            /// If PeriodUnit is set to Year, set this parameter to an integer that ranges from 1 to 3.
            /// NoteThis parameter is available and required when the PayType parameter is set to PREPAY.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Period
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: periodUnit: The period based on which you are charged for the instance. Valid values:
            /// Month: You are charged for the instance on a monthly basis.
            /// Year: You are charged for the instance on a yearly basis.
            /// NoteThis parameter is available and required when the PayType parameter is set to PREPAY.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "periodUnit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PeriodUnit
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: The ID of the resource group to which the Lindorm instance belongs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: securityIpList: The ip white list of instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityIpList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? SecurityIpList
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: solrNum: The number of LindormSearch nodes in the instance. Valid values: integers from 0 to 60.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "solrNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SolrNum
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: solrSpec: The specification of the LindormSearch nodes in the instance. Valid values:
            /// lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
            /// lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
            /// lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
            /// lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "solrSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SolrSpec
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: streamNum: The number of LindormStream nodes in the instance. Valid values: integers from 0 to 90.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "streamNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StreamNum
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: streamSpec: The specification of LindormStream nodes in the instance. Valid values:
            /// lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
            /// lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
            /// lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
            /// lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
            /// lindorm.c.xlarge: Each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
            /// lindorm.c.2xlarge: Each node has 8 dedicated CPU cores and 16 GB of dedicated memory.
            /// lindorm.c.4xlarge: Each node has 16 dedicated CPU cores and 32 GB of dedicated memory.
            /// lindorm.c.8xlarge: Each node has 32 dedicated CPU cores and 64 GB of dedicated memory.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "streamSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StreamSpec
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tsdbNum: The number of the LindormTSDB nodes in the instance. The valid values of this parameter depend on the value of the PayType parameter.
            /// If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 24.
            /// If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 32.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tsdbNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TsdbNum
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tsdbSpec: The specification of the LindormTSDB nodes in the instance. Valid values:
            /// lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
            /// lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
            /// lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
            /// lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tsdbSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TsdbSpec
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: vSwitchId: The ID of the vSwitch to which you want the instance to connect.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VSwitchId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: zoneId: The ID of the zone in which you want to create the instance.
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
