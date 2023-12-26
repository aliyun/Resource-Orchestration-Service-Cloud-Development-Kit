using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Iot
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `RuleAction`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-ruleaction
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-iot.RuleActionProps")]
    public class RuleActionProps : AlibabaCloud.SDK.ROS.CDK.Iot.IRuleActionProps
    {
        private object _configuration;

        /// <summary>Property configuration: The configurations of the rule action.</summary>
        /// <remarks>
        /// You must specify a JSON string. The configurations
        /// for different types of rule actions are different. For more information about required
        /// syntax and examples, see the following tables.
        /// </remarks>
        [JsiiProperty(name: "configuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Configuration
        {
            get => _configuration;
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
                _configuration = value;
            }
        }

        private object _ruleId;

        /// <summary>Property ruleId: The ID of the rule for which you want to create an action.</summary>
        /// <remarks>
        /// You can use either of the
        /// following methods to view the rule ID: 1. Log on to the IoT Platform console and choose Rules&gt;Data Forwarding. 2. Call the ListRule operation.
        /// </remarks>
        [JsiiProperty(name: "ruleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object RuleId
        {
            get => _ruleId;
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
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _ruleId = value;
            }
        }

        private object _type;

        /// <summary>Property type: The type of the rule action.</summary>
        /// <remarks>
        /// Valid values:
        /// MNS: forwards data in the topics that have been processed by the rule engine to Message
        /// Service (MNS) for message transmission.
        /// FC: forwards data in the topics that have been processed by the rule engine to Function
        /// Compute for event computing.
        /// REPUBLISH: forwards data in the topics that have been processed by the rule engine to another
        /// IoT Platform topic.
        /// AMQP: forwards data to AMQP consumer groups.
        /// OTS: forwards data in the topics that have been processed by the rule engine to Table
        /// Store for NoSQL data storage.
        /// Note
        /// Rules of the binary data format (the DataType parameter is set toBINARY) do not support forwarding data to Table Store.
        /// Destination Alibaba Cloud services that are supported by the rule engine vary based
        /// on regions. For more information about the regions and destination cloud services
        /// that are supported by the rule engine, see Regions and zones.
        /// </remarks>
        [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Type
        {
            get => _type;
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
                _type = value;
            }
        }

        private object? _errorActionFlag;

        /// <summary>Property errorActionFlag: Indicates whether the rule action forwarded error operation data.</summary>
        /// <remarks>
        /// Error operation
        /// data indicates that the rule engine failed to forward data from the IoT Platform topic
        /// to the destination cloud service. A data forwarding failure indicates that forwarding
        /// retries also failed. Valid values:
        /// true: forwards error operation data.
        /// false: forwards normal data instead of error operation data.
        /// Default value: false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "errorActionFlag", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ErrorActionFlag
        {
            get => _errorActionFlag;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case bool cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _errorActionFlag = value;
            }
        }

        private object? _iotInstanceId;

        /// <summary>Property iotInstanceId: The ID of the instance.</summary>
        /// <remarks>
        /// This parameter is not required for public instances. However,
        /// the parameter is required for the instances that you have purchased.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "iotInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? IotInstanceId
        {
            get => _iotInstanceId;
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
                _iotInstanceId = value;
            }
        }
    }
}
