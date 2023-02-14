using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Lindorm
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::Lindorm::MultiZoneInstance`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-lindorm.RosMultiZoneInstanceProps")]
    public class RosMultiZoneInstanceProps : AlibabaCloud.SDK.ROS.CDK.Lindorm.IRosMultiZoneInstanceProps
    {
        private object _diskCategory;

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
            get => _diskCategory;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _diskCategory = value;
            }
        }

        private object _instanceName;

        /// <remarks>
        /// <strong>Property</strong>: instanceName: The name of the instance that you want to create.
        /// </remarks>
        [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object InstanceName
        {
            get => _instanceName;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _instanceName = value;
            }
        }

        private object _vpcId;

        /// <remarks>
        /// <strong>Property</strong>: vpcId: The ID of the VPC in which you want to create the instance.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object VpcId
        {
            get => _vpcId;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _vpcId = value;
            }
        }

        private object? _arbiterVSwitchId;

        /// <remarks>
        /// <strong>Property</strong>: arbiterVSwitchId: The ID of the vSwitch that is specified for the zone for the coordinate node of the instance. The vSwitch must be deployed in the zone specified by the ArbiterZoneId parameter. **This parameter is required if you want to create a multi-zone instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "arbiterVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ArbiterVSwitchId
        {
            get => _arbiterVSwitchId;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _arbiterVSwitchId = value;
            }
        }

        private object? _arbiterZoneId;

        /// <remarks>
        /// <strong>Property</strong>: arbiterZoneId: The ID of the zone for the coordinate node of the instance. **This parameter is required if you want to create a multi-zone instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "arbiterZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ArbiterZoneId
        {
            get => _arbiterZoneId;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _arbiterZoneId = value;
            }
        }

        private object? _coldStorage;

        /// <remarks>
        /// <strong>Property</strong>: coldStorage: The cold storage capacity of the instance. By default, if you leave this parameter unspecified, cold storage is not enabled for the instance. Unit: GB. Valid values: 800 to 1000000.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "coldStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ColdStorage
        {
            get => _coldStorage;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case double cast_cd4240:
                            break;
                        case byte cast_cd4240:
                            break;
                        case decimal cast_cd4240:
                            break;
                        case float cast_cd4240:
                            break;
                        case int cast_cd4240:
                            break;
                        case long cast_cd4240:
                            break;
                        case sbyte cast_cd4240:
                            break;
                        case short cast_cd4240:
                            break;
                        case uint cast_cd4240:
                            break;
                        case ulong cast_cd4240:
                            break;
                        case ushort cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _coldStorage = value;
            }
        }

        private object? _coreSingleStorage;

        /// <remarks>
        /// <strong>Property</strong>: coreSingleStorage: The storage capacity of the disk of a single core node. Valid values: 400 to 64000. Unit: GB. **This parameter is required if you want to create a multi-zone instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "coreSingleStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? CoreSingleStorage
        {
            get => _coreSingleStorage;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case double cast_cd4240:
                            break;
                        case byte cast_cd4240:
                            break;
                        case decimal cast_cd4240:
                            break;
                        case float cast_cd4240:
                            break;
                        case int cast_cd4240:
                            break;
                        case long cast_cd4240:
                            break;
                        case sbyte cast_cd4240:
                            break;
                        case short cast_cd4240:
                            break;
                        case uint cast_cd4240:
                            break;
                        case ulong cast_cd4240:
                            break;
                        case ushort cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _coreSingleStorage = value;
            }
        }

        private object? _coreSpec;

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
            get => _coreSpec;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _coreSpec = value;
            }
        }

        private object? _filestoreNum;

        /// <remarks>
        /// <strong>Property</strong>: filestoreNum: The number of LindormDFS nodes in the instance. The valid values of this parameter depend on the value of the PayType parameter.
        /// If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 60.
        /// If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 8.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "filestoreNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? FilestoreNum
        {
            get => _filestoreNum;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case double cast_cd4240:
                            break;
                        case byte cast_cd4240:
                            break;
                        case decimal cast_cd4240:
                            break;
                        case float cast_cd4240:
                            break;
                        case int cast_cd4240:
                            break;
                        case long cast_cd4240:
                            break;
                        case sbyte cast_cd4240:
                            break;
                        case short cast_cd4240:
                            break;
                        case uint cast_cd4240:
                            break;
                        case ulong cast_cd4240:
                            break;
                        case ushort cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _filestoreNum = value;
            }
        }

        private object? _filestoreSpec;

        /// <remarks>
        /// <strong>Property</strong>: filestoreSpec: The specification of LindormDFS nodes in the instance. Set the value of this parameter to lindorm.c.xlarge, which indicates that each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "filestoreSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? FilestoreSpec
        {
            get => _filestoreSpec;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _filestoreSpec = value;
            }
        }

        private object? _instanceChargeType;

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
            get => _instanceChargeType;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _instanceChargeType = value;
            }
        }

        private object? _lindormNum;

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
            get => _lindormNum;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case double cast_cd4240:
                            break;
                        case byte cast_cd4240:
                            break;
                        case decimal cast_cd4240:
                            break;
                        case float cast_cd4240:
                            break;
                        case int cast_cd4240:
                            break;
                        case long cast_cd4240:
                            break;
                        case sbyte cast_cd4240:
                            break;
                        case short cast_cd4240:
                            break;
                        case uint cast_cd4240:
                            break;
                        case ulong cast_cd4240:
                            break;
                        case ushort cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _lindormNum = value;
            }
        }

        private object? _lindormSpec;

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
            get => _lindormSpec;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _lindormSpec = value;
            }
        }

        private object? _logDiskCategory;

        /// <remarks>
        /// <strong>Property</strong>: logDiskCategory: The disk type of the log nodes. Valid values:
        /// cloud_efficiency、cloud_essd.
        /// This parameter is required if you want to create a multi-zone instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "logDiskCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? LogDiskCategory
        {
            get => _logDiskCategory;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _logDiskCategory = value;
            }
        }

        private object? _logNum;

        /// <remarks>
        /// <strong>Property</strong>: logNum: The number of the log nodes. Valid values: 4 to 400. **This parameter is required if you want to create a multi-zone instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "logNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? LogNum
        {
            get => _logNum;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case double cast_cd4240:
                            break;
                        case byte cast_cd4240:
                            break;
                        case decimal cast_cd4240:
                            break;
                        case float cast_cd4240:
                            break;
                        case int cast_cd4240:
                            break;
                        case long cast_cd4240:
                            break;
                        case sbyte cast_cd4240:
                            break;
                        case short cast_cd4240:
                            break;
                        case uint cast_cd4240:
                            break;
                        case ulong cast_cd4240:
                            break;
                        case ushort cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _logNum = value;
            }
        }

        private object? _logSingleStorage;

        /// <remarks>
        /// <strong>Property</strong>: logSingleStorage: The storage capacity of the disk of a single log node. Valid values: 400 to 64000. Unit: GB. **This parameter is required if you want to create a multi-zone instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "logSingleStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? LogSingleStorage
        {
            get => _logSingleStorage;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case double cast_cd4240:
                            break;
                        case byte cast_cd4240:
                            break;
                        case decimal cast_cd4240:
                            break;
                        case float cast_cd4240:
                            break;
                        case int cast_cd4240:
                            break;
                        case long cast_cd4240:
                            break;
                        case sbyte cast_cd4240:
                            break;
                        case short cast_cd4240:
                            break;
                        case uint cast_cd4240:
                            break;
                        case ulong cast_cd4240:
                            break;
                        case ushort cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _logSingleStorage = value;
            }
        }

        private object? _logSpec;

        /// <remarks>
        /// <strong>Property</strong>: logSpec: The type of the log nodes. Valid values:
        /// lindorm.sn1.large: Each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
        /// lindorm.sn1.2xlarge: Each node has 8 dedicated CPU cores and 16 GB of dedicated memory.
        /// **This parameter is required if you want to create a multi-zone instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "logSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? LogSpec
        {
            get => _logSpec;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _logSpec = value;
            }
        }

        private object? _multiZoneCombination;

        /// <remarks>
        /// <strong>Property</strong>: multiZoneCombination: The combinations of zones that are available for the multi-zone instance. You can go to the purchase page of Lindorm to view the supported zone combinations.
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
            get => _multiZoneCombination;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _multiZoneCombination = value;
            }
        }

        private object? _period;

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
            get => _period;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case double cast_cd4240:
                            break;
                        case byte cast_cd4240:
                            break;
                        case decimal cast_cd4240:
                            break;
                        case float cast_cd4240:
                            break;
                        case int cast_cd4240:
                            break;
                        case long cast_cd4240:
                            break;
                        case sbyte cast_cd4240:
                            break;
                        case short cast_cd4240:
                            break;
                        case uint cast_cd4240:
                            break;
                        case ulong cast_cd4240:
                            break;
                        case ushort cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _period = value;
            }
        }

        private object? _periodUnit;

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
            get => _periodUnit;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _periodUnit = value;
            }
        }

        private object? _primaryVSwitchId;

        /// <remarks>
        /// <strong>Property</strong>: primaryVSwitchId: For multiple available regions, the virtual switch ID of the main available area must be under the available area corresponding to the Primaryzoneid.If you need to create a multi -available area example, this parameter must be filled.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "primaryVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? PrimaryVSwitchId
        {
            get => _primaryVSwitchId;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _primaryVSwitchId = value;
            }
        }

        private object? _primaryZoneId;

        /// <remarks>
        /// <strong>Property</strong>: primaryZoneId: For many available zone instances, the available area ID of the main available area.If you need to create a multi -available area example, this parameter must be filled.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "primaryZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? PrimaryZoneId
        {
            get => _primaryZoneId;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _primaryZoneId = value;
            }
        }

        private object? _resourceGroupId;

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: The ID of the resource group to which the Lindorm instance belongs.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ResourceGroupId
        {
            get => _resourceGroupId;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _resourceGroupId = value;
            }
        }

        private object? _securityIpList;

        /// <remarks>
        /// <strong>Property</strong>: securityIpList: The ip white list of instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityIpList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? SecurityIpList
        {
            get => _securityIpList;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case object[] cast_cd4240:
                            for (var __idx_f64a5c = 0 ; __idx_f64a5c < cast_cd4240.Length ; __idx_f64a5c++)
                            {
                                switch (cast_cd4240[__idx_f64a5c])
                                {
                                    case string cast_201718:
                                        break;
                                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_201718:
                                        break;
                                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                        // Not enough information to type-check...
                                        break;
                                    case null:
                                        throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                                    default:
                                        throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
                                }
                            }
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, object[]; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _securityIpList = value;
            }
        }

        private object? _solrNum;

        /// <remarks>
        /// <strong>Property</strong>: solrNum: The number of LindormSearch nodes in the instance. Valid values: integers from 0 to 60.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "solrNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SolrNum
        {
            get => _solrNum;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case double cast_cd4240:
                            break;
                        case byte cast_cd4240:
                            break;
                        case decimal cast_cd4240:
                            break;
                        case float cast_cd4240:
                            break;
                        case int cast_cd4240:
                            break;
                        case long cast_cd4240:
                            break;
                        case sbyte cast_cd4240:
                            break;
                        case short cast_cd4240:
                            break;
                        case uint cast_cd4240:
                            break;
                        case ulong cast_cd4240:
                            break;
                        case ushort cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _solrNum = value;
            }
        }

        private object? _solrSpec;

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
            get => _solrSpec;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _solrSpec = value;
            }
        }

        private object? _standbyVSwitchId;

        /// <remarks>
        /// <strong>Property</strong>: standbyVSwitchId: The ID of the vSwitch that is specified for the secondary zone of the instance. The vSwitch must be deployed in the zone specified by the StandbyZoneId parameter. **This parameter is required if you want to create a multi-zone instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "standbyVSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? StandbyVSwitchId
        {
            get => _standbyVSwitchId;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _standbyVSwitchId = value;
            }
        }

        private object? _standbyZoneId;

        /// <remarks>
        /// <strong>Property</strong>: standbyZoneId: The ID of the secondary zone of the instance. **This parameter is required if you want to create a multi-zone instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "standbyZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? StandbyZoneId
        {
            get => _standbyZoneId;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _standbyZoneId = value;
            }
        }

        private object? _tsdbNum;

        /// <remarks>
        /// <strong>Property</strong>: tsdbNum: The number of the LindormTSDB nodes in the instance. The valid values of this parameter depend on the value of the PayType parameter.
        /// If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 24.
        /// If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 32.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tsdbNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? TsdbNum
        {
            get => _tsdbNum;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case double cast_cd4240:
                            break;
                        case byte cast_cd4240:
                            break;
                        case decimal cast_cd4240:
                            break;
                        case float cast_cd4240:
                            break;
                        case int cast_cd4240:
                            break;
                        case long cast_cd4240:
                            break;
                        case sbyte cast_cd4240:
                            break;
                        case short cast_cd4240:
                            break;
                        case uint cast_cd4240:
                            break;
                        case ulong cast_cd4240:
                            break;
                        case ushort cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _tsdbNum = value;
            }
        }

        private object? _tsdbSpec;

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
            get => _tsdbSpec;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _tsdbSpec = value;
            }
        }
    }
}
