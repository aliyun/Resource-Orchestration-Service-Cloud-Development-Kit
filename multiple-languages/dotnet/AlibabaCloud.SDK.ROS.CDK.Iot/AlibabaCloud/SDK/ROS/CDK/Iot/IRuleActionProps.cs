using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Iot
{
    /// <summary>Properties for defining a `ALIYUN::IOT::RuleAction`.</summary>
    [JsiiInterface(nativeType: typeof(IRuleActionProps), fullyQualifiedName: "@alicloud/ros-cdk-iot.RuleActionProps")]
    public interface IRuleActionProps
    {
        /// <summary>Property configuration: The configurations of the rule action.</summary>
        /// <remarks>
        /// You must specify a JSON string. The configurations
        /// for different types of rule actions are different. For more information about required
        /// syntax and examples, see the following tables.
        /// </remarks>
        [JsiiProperty(name: "configuration", typeJson: "{\"primitive\":\"string\"}")]
        string Configuration
        {
            get;
        }

        /// <summary>Property ruleId: The ID of the rule for which you want to create an action.</summary>
        /// <remarks>
        /// You can use either of the
        /// following methods to view the rule ID: 1. Log on to the IoT Platform console and choose Rules&gt;Data Forwarding. 2. Call the ListRule operation.
        /// </remarks>
        [JsiiProperty(name: "ruleId", typeJson: "{\"primitive\":\"number\"}")]
        double RuleId
        {
            get;
        }

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
        [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}")]
        string Type
        {
            get;
        }

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
        [JsiiProperty(name: "errorActionFlag", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ErrorActionFlag
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property iotInstanceId: The ID of the instance.</summary>
        /// <remarks>
        /// This parameter is not required for public instances. However,
        /// the parameter is required for the instances that you have purchased.
        /// </remarks>
        [JsiiProperty(name: "iotInstanceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? IotInstanceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::IOT::RuleAction`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRuleActionProps), fullyQualifiedName: "@alicloud/ros-cdk-iot.RuleActionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Iot.IRuleActionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property configuration: The configurations of the rule action.</summary>
            /// <remarks>
            /// You must specify a JSON string. The configurations
            /// for different types of rule actions are different. For more information about required
            /// syntax and examples, see the following tables.
            /// </remarks>
            [JsiiProperty(name: "configuration", typeJson: "{\"primitive\":\"string\"}")]
            public string Configuration
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property ruleId: The ID of the rule for which you want to create an action.</summary>
            /// <remarks>
            /// You can use either of the
            /// following methods to view the rule ID: 1. Log on to the IoT Platform console and choose Rules&gt;Data Forwarding. 2. Call the ListRule operation.
            /// </remarks>
            [JsiiProperty(name: "ruleId", typeJson: "{\"primitive\":\"number\"}")]
            public double RuleId
            {
                get => GetInstanceProperty<double>()!;
            }

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
            [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}")]
            public string Type
            {
                get => GetInstanceProperty<string>()!;
            }

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
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property iotInstanceId: The ID of the instance.</summary>
            /// <remarks>
            /// This parameter is not required for public instances. However,
            /// the parameter is required for the instances that you have purchased.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "iotInstanceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? IotInstanceId
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
