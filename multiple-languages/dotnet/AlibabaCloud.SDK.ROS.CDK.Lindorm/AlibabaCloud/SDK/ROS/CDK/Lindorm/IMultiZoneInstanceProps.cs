using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Lindorm
{
    /// <summary>Properties for defining a `ALIYUN::Lindorm::MultiZoneInstance`.</summary>
    [JsiiInterface(nativeType: typeof(IMultiZoneInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-lindorm.MultiZoneInstanceProps")]
    public interface IMultiZoneInstanceProps
    {
        /// <summary>Property diskCategory: The storage type of the instance.</summary>
        /// <remarks>
        /// Valid values:
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

        /// <summary>Property instanceName: The name of the instance that you want to create.</summary>
        [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceName
        {
            get;
        }

        /// <summary>Property vpcId: The ID of the VPC in which you want to create the instance.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <summary>Property arbiterVSwitchId: The ID of the vSwitch that is specified for the zone for the coordinate node of the instance.</summary>
        /// <remarks>
        /// The vSwitch must be deployed in the zone specified by the ArbiterZoneId parameter. **This parameter is required if you want to create a multi-zone instance.
        /// </remarks>
        [JsiiProperty(name: "arbiterVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ArbiterVSwitchId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property arbiterZoneId: The ID of the zone for the coordinate node of the instance.</summary>
        /// <remarks>
        /// **This parameter is required if you want to create a multi-zone instance.
        /// </remarks>
        [JsiiProperty(name: "arbiterZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ArbiterZoneId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property coldStorage: The cold storage capacity of the instance.</summary>
        /// <remarks>
        /// By default, if you leave this parameter unspecified, cold storage is not enabled for the instance. Unit: GB. Valid values: 800 to 1000000.
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

        /// <summary>Property coreSingleStorage: The storage capacity of the disk of a single core node.</summary>
        /// <remarks>
        /// Valid values: 400 to 64000. Unit: GB. **This parameter is required if you want to create a multi-zone instance.
        /// </remarks>
        [JsiiProperty(name: "coreSingleStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CoreSingleStorage
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property coreSpec: The specification of the nodes in the instance if you set DiskCategory to local_ssd_pro or local_hdd_pro.</summary>
        /// <remarks>
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

        /// <summary>Property filestoreNum: The number of LindormDFS nodes in the instance.</summary>
        /// <remarks>
        /// The valid values of this parameter depend on the value of the PayType parameter.
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

        /// <summary>Property filestoreSpec: The specification of LindormDFS nodes in the instance.</summary>
        /// <remarks>
        /// Set the value of this parameter to lindorm.c.xlarge, which indicates that each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
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

        /// <summary>Property instanceChargeType: The billing method of the instance you want to create.</summary>
        /// <remarks>
        /// Valid values:
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

        /// <summary>Property lindormNum: The number of LindormTable nodes in the instance.</summary>
        /// <remarks>
        /// The valid values of this parameter depend on the value of the PayType parameter.
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

        /// <summary>Property lindormSpec: The specification of LindormTable nodes in the instance.</summary>
        /// <remarks>
        /// Valid values:
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

        /// <summary>Property logDiskCategory: The disk type of the log nodes.</summary>
        /// <remarks>
        /// Valid values:
        /// cloud_efficiency、cloud_essd.
        /// This parameter is required if you want to create a multi-zone instance.
        /// </remarks>
        [JsiiProperty(name: "logDiskCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LogDiskCategory
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property logNum: The number of the log nodes.</summary>
        /// <remarks>
        /// Valid values: 4 to 400. **This parameter is required if you want to create a multi-zone instance.
        /// </remarks>
        [JsiiProperty(name: "logNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LogNum
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property logSingleStorage: The storage capacity of the disk of a single log node.</summary>
        /// <remarks>
        /// Valid values: 400 to 64000. Unit: GB. **This parameter is required if you want to create a multi-zone instance.
        /// </remarks>
        [JsiiProperty(name: "logSingleStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LogSingleStorage
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property logSpec: The type of the log nodes.</summary>
        /// <remarks>
        /// Valid values:
        /// lindorm.sn1.large: Each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
        /// lindorm.sn1.2xlarge: Each node has 8 dedicated CPU cores and 16 GB of dedicated memory.
        /// **This parameter is required if you want to create a multi-zone instance.
        /// </remarks>
        [JsiiProperty(name: "logSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LogSpec
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property multiZoneCombination: The combinations of zones that are available for the multi-zone instance.</summary>
        /// <remarks>
        /// You can go to the purchase page of Lindorm to view the supported zone combinations.
        /// ap-southeast-5abc-aliyun: Zone A+B+C in the Indonesia (Jakarta) region.
        /// cn-hangzhou-ehi-aliyun: Zone E+H+I in the China (Hangzhou) region.
        /// cn-beijing-acd-aliyun: Zone A+C+D in the China (Beijing) region.
        /// ap-southeast-1-abc-aliyun: Zone A+B+C in the Singapore region.
        /// cn-zhangjiakou-abc-aliyun: Zone A+B+C in the China (Zhangjiakou) region.
        /// cn-shanghai-efg-aliyun: Zone E+F+G in the China (Shanghai) region.
        /// cn-shanghai-abd-aliyun: Zone A+B+D in the China (Shanghai) region.
        /// cn-hangzhou-bef-aliyun: Zone B+E+F in the China (Hangzhou) region.
        /// cn-hangzhou-bce-aliyun: Zone B+C+E in the China (Hangzhou) region.
        /// cn-beijing-fgh-aliyun: Zone F+G+H in the China (Beijing) region.
        /// cn-shenzhen-abc-aliyun: Zone A+B+C in the China (Shenzhen) region.
        /// **This parameter is required if you want to create a multi-zone instance.
        /// </remarks>
        [JsiiProperty(name: "multiZoneCombination", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MultiZoneCombination
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property period: The subscription period of the instance.</summary>
        /// <remarks>
        /// The valid values of this parameter depend on the value of the PeriodUnit parameter.
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

        /// <summary>Property periodUnit: The period based on which you are charged for the instance.</summary>
        /// <remarks>
        /// Valid values:
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

        /// <summary>Property primaryVSwitchId: For multiple available regions, the virtual switch ID of the main available area must be under the available area corresponding to the Primaryzoneid.If you need to create a multi -available area example, this parameter must be filled.</summary>
        [JsiiProperty(name: "primaryVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PrimaryVSwitchId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property primaryZoneId: For many available zone instances, the available area ID of the main available area.If you need to create a multi -available area example, this parameter must be filled.</summary>
        [JsiiProperty(name: "primaryZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PrimaryZoneId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the resource group to which the Lindorm instance belongs.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property securityIpList: The ip white list of instance.</summary>
        [JsiiProperty(name: "securityIpList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecurityIpList
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property solrNum: The number of LindormSearch nodes in the instance.</summary>
        /// <remarks>
        /// Valid values: integers from 0 to 60.
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

        /// <summary>Property solrSpec: The specification of the LindormSearch nodes in the instance.</summary>
        /// <remarks>
        /// Valid values:
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

        /// <summary>Property standbyVSwitchId: The ID of the vSwitch that is specified for the secondary zone of the instance.</summary>
        /// <remarks>
        /// The vSwitch must be deployed in the zone specified by the StandbyZoneId parameter. **This parameter is required if you want to create a multi-zone instance.
        /// </remarks>
        [JsiiProperty(name: "standbyVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? StandbyVSwitchId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property standbyZoneId: The ID of the secondary zone of the instance.</summary>
        /// <remarks>
        /// **This parameter is required if you want to create a multi-zone instance.
        /// </remarks>
        [JsiiProperty(name: "standbyZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? StandbyZoneId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property streamNum: The number of LindormStream nodes in the instance.</summary>
        /// <remarks>
        /// Valid values: integers from 0 to 90.
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

        /// <summary>Property streamSpec: The specification of LindormStream nodes in the instance.</summary>
        /// <remarks>
        /// Valid values:
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

        /// <summary>Property tsdbNum: The number of the LindormTSDB nodes in the instance.</summary>
        /// <remarks>
        /// The valid values of this parameter depend on the value of the PayType parameter.
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

        /// <summary>Property tsdbSpec: The specification of the LindormTSDB nodes in the instance.</summary>
        /// <remarks>
        /// Valid values:
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

        /// <summary>Properties for defining a `ALIYUN::Lindorm::MultiZoneInstance`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IMultiZoneInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-lindorm.MultiZoneInstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Lindorm.IMultiZoneInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property diskCategory: The storage type of the instance.</summary>
            /// <remarks>
            /// Valid values:
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

            /// <summary>Property instanceName: The name of the instance that you want to create.</summary>
            [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vpcId: The ID of the VPC in which you want to create the instance.</summary>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property arbiterVSwitchId: The ID of the vSwitch that is specified for the zone for the coordinate node of the instance.</summary>
            /// <remarks>
            /// The vSwitch must be deployed in the zone specified by the ArbiterZoneId parameter. **This parameter is required if you want to create a multi-zone instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "arbiterVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ArbiterVSwitchId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property arbiterZoneId: The ID of the zone for the coordinate node of the instance.</summary>
            /// <remarks>
            /// **This parameter is required if you want to create a multi-zone instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "arbiterZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ArbiterZoneId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property coldStorage: The cold storage capacity of the instance.</summary>
            /// <remarks>
            /// By default, if you leave this parameter unspecified, cold storage is not enabled for the instance. Unit: GB. Valid values: 800 to 1000000.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "coldStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ColdStorage
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property coreSingleStorage: The storage capacity of the disk of a single core node.</summary>
            /// <remarks>
            /// Valid values: 400 to 64000. Unit: GB. **This parameter is required if you want to create a multi-zone instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "coreSingleStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CoreSingleStorage
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property coreSpec: The specification of the nodes in the instance if you set DiskCategory to local_ssd_pro or local_hdd_pro.</summary>
            /// <remarks>
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

            /// <summary>Property filestoreNum: The number of LindormDFS nodes in the instance.</summary>
            /// <remarks>
            /// The valid values of this parameter depend on the value of the PayType parameter.
            /// If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 60.
            /// If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 8.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "filestoreNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FilestoreNum
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property filestoreSpec: The specification of LindormDFS nodes in the instance.</summary>
            /// <remarks>
            /// Set the value of this parameter to lindorm.c.xlarge, which indicates that each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "filestoreSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FilestoreSpec
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceChargeType: The billing method of the instance you want to create.</summary>
            /// <remarks>
            /// Valid values:
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

            /// <summary>Property lindormNum: The number of LindormTable nodes in the instance.</summary>
            /// <remarks>
            /// The valid values of this parameter depend on the value of the PayType parameter.
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

            /// <summary>Property lindormSpec: The specification of LindormTable nodes in the instance.</summary>
            /// <remarks>
            /// Valid values:
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

            /// <summary>Property logDiskCategory: The disk type of the log nodes.</summary>
            /// <remarks>
            /// Valid values:
            /// cloud_efficiency、cloud_essd.
            /// This parameter is required if you want to create a multi-zone instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "logDiskCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LogDiskCategory
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property logNum: The number of the log nodes.</summary>
            /// <remarks>
            /// Valid values: 4 to 400. **This parameter is required if you want to create a multi-zone instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "logNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LogNum
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property logSingleStorage: The storage capacity of the disk of a single log node.</summary>
            /// <remarks>
            /// Valid values: 400 to 64000. Unit: GB. **This parameter is required if you want to create a multi-zone instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "logSingleStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LogSingleStorage
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property logSpec: The type of the log nodes.</summary>
            /// <remarks>
            /// Valid values:
            /// lindorm.sn1.large: Each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
            /// lindorm.sn1.2xlarge: Each node has 8 dedicated CPU cores and 16 GB of dedicated memory.
            /// **This parameter is required if you want to create a multi-zone instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "logSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LogSpec
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property multiZoneCombination: The combinations of zones that are available for the multi-zone instance.</summary>
            /// <remarks>
            /// You can go to the purchase page of Lindorm to view the supported zone combinations.
            /// ap-southeast-5abc-aliyun: Zone A+B+C in the Indonesia (Jakarta) region.
            /// cn-hangzhou-ehi-aliyun: Zone E+H+I in the China (Hangzhou) region.
            /// cn-beijing-acd-aliyun: Zone A+C+D in the China (Beijing) region.
            /// ap-southeast-1-abc-aliyun: Zone A+B+C in the Singapore region.
            /// cn-zhangjiakou-abc-aliyun: Zone A+B+C in the China (Zhangjiakou) region.
            /// cn-shanghai-efg-aliyun: Zone E+F+G in the China (Shanghai) region.
            /// cn-shanghai-abd-aliyun: Zone A+B+D in the China (Shanghai) region.
            /// cn-hangzhou-bef-aliyun: Zone B+E+F in the China (Hangzhou) region.
            /// cn-hangzhou-bce-aliyun: Zone B+C+E in the China (Hangzhou) region.
            /// cn-beijing-fgh-aliyun: Zone F+G+H in the China (Beijing) region.
            /// cn-shenzhen-abc-aliyun: Zone A+B+C in the China (Shenzhen) region.
            /// **This parameter is required if you want to create a multi-zone instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "multiZoneCombination", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MultiZoneCombination
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property period: The subscription period of the instance.</summary>
            /// <remarks>
            /// The valid values of this parameter depend on the value of the PeriodUnit parameter.
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

            /// <summary>Property periodUnit: The period based on which you are charged for the instance.</summary>
            /// <remarks>
            /// Valid values:
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

            /// <summary>Property primaryVSwitchId: For multiple available regions, the virtual switch ID of the main available area must be under the available area corresponding to the Primaryzoneid.If you need to create a multi -available area example, this parameter must be filled.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "primaryVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PrimaryVSwitchId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property primaryZoneId: For many available zone instances, the available area ID of the main available area.If you need to create a multi -available area example, this parameter must be filled.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "primaryZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PrimaryZoneId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group to which the Lindorm instance belongs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property securityIpList: The ip white list of instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "securityIpList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? SecurityIpList
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property solrNum: The number of LindormSearch nodes in the instance.</summary>
            /// <remarks>
            /// Valid values: integers from 0 to 60.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "solrNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SolrNum
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property solrSpec: The specification of the LindormSearch nodes in the instance.</summary>
            /// <remarks>
            /// Valid values:
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

            /// <summary>Property standbyVSwitchId: The ID of the vSwitch that is specified for the secondary zone of the instance.</summary>
            /// <remarks>
            /// The vSwitch must be deployed in the zone specified by the StandbyZoneId parameter. **This parameter is required if you want to create a multi-zone instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "standbyVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StandbyVSwitchId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property standbyZoneId: The ID of the secondary zone of the instance.</summary>
            /// <remarks>
            /// **This parameter is required if you want to create a multi-zone instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "standbyZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StandbyZoneId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property streamNum: The number of LindormStream nodes in the instance.</summary>
            /// <remarks>
            /// Valid values: integers from 0 to 90.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "streamNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StreamNum
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property streamSpec: The specification of LindormStream nodes in the instance.</summary>
            /// <remarks>
            /// Valid values:
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

            /// <summary>Property tsdbNum: The number of the LindormTSDB nodes in the instance.</summary>
            /// <remarks>
            /// The valid values of this parameter depend on the value of the PayType parameter.
            /// If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 24.
            /// If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 32.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tsdbNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TsdbNum
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tsdbSpec: The specification of the LindormTSDB nodes in the instance.</summary>
            /// <remarks>
            /// Valid values:
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
        }
    }
}
