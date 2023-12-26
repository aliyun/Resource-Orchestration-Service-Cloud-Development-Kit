using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Iot
{
    /// <summary>Properties for defining a `RosRuleAction`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-ruleaction
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosRuleActionProps), fullyQualifiedName: "@alicloud/ros-cdk-iot.RosRuleActionProps")]
    public interface IRosRuleActionProps
    {
        /// <remarks>
        /// <strong>Property</strong>: configuration: The configurations of the rule action. You must specify a JSON string. The configurations
        /// for different types of rule actions are different. For more information about required
        /// syntax and examples, see the following tables.
        /// </remarks>
        [JsiiProperty(name: "configuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Configuration
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: ruleId: The ID of the rule for which you want to create an action. You can use either of the
        /// following methods to view the rule ID: 1. Log on to the IoT Platform console and choose Rules>Data Forwarding. 2. Call the ListRule operation.
        /// </remarks>
        [JsiiProperty(name: "ruleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RuleId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: type: The type of the rule action. Valid values:
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
        object Type
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: errorActionFlag: Indicates whether the rule action forwarded error operation data. Error operation
        /// data indicates that the rule engine failed to forward data from the IoT Platform topic
        /// to the destination cloud service. A data forwarding failure indicates that forwarding
        /// retries also failed. Valid values:
        /// true: forwards error operation data.
        /// false: forwards normal data instead of error operation data.
        /// Default value: false.
        /// </remarks>
        [JsiiProperty(name: "errorActionFlag", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ErrorActionFlag
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: iotInstanceId: The ID of the instance. This parameter is not required for public instances. However,
        /// the parameter is required for the instances that you have purchased.
        /// </remarks>
        [JsiiProperty(name: "iotInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IotInstanceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosRuleAction`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-ruleaction
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosRuleActionProps), fullyQualifiedName: "@alicloud/ros-cdk-iot.RosRuleActionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Iot.IRosRuleActionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: configuration: The configurations of the rule action. You must specify a JSON string. The configurations
            /// for different types of rule actions are different. For more information about required
            /// syntax and examples, see the following tables.
            /// </remarks>
            [JsiiProperty(name: "configuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Configuration
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: ruleId: The ID of the rule for which you want to create an action. You can use either of the
            /// following methods to view the rule ID: 1. Log on to the IoT Platform console and choose Rules>Data Forwarding. 2. Call the ListRule operation.
            /// </remarks>
            [JsiiProperty(name: "ruleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RuleId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: type: The type of the rule action. Valid values:
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
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: errorActionFlag: Indicates whether the rule action forwarded error operation data. Error operation
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
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: iotInstanceId: The ID of the instance. This parameter is not required for public instances. However,
            /// the parameter is required for the instances that you have purchased.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "iotInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IotInstanceId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
