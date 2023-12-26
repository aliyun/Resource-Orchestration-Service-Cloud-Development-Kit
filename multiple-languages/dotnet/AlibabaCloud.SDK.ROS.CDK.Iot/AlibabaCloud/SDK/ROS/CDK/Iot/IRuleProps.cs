using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Iot
{
    /// <summary>Properties for defining a `Rule`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-rule
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-iot.RuleProps")]
    public interface IRuleProps
    {
        /// <summary>Property name: The name of the rule.</summary>
        /// <remarks>
        /// The name must be 1 to 30 characters in length and can contain
        /// English letters, digits, underscores (_), and hyphens (-). Chinese language is also
        /// supported. Each Chinese symbol occupies 2 characters.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <summary>Property dataType: The format of the data to be processed by the rule.</summary>
        /// <remarks>
        /// You must specify the format of
        /// device data to be processed for this parameter. Valid values:
        /// JSON: JSON data
        /// BINARY: binary data
        /// Note If you specifyBINARY, you cannot set the TopicType parameter to 0 and forward data to Table Store, Time Series Database (TSDB), or ApsaradDB
        /// for RDS.
        /// Default value: JSON.
        /// </remarks>
        [JsiiProperty(name: "dataType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DataType
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
        [JsiiProperty(name: "iotInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IotInstanceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property productKey: The ProductKey of the product to which the rule applies.</summary>
        [JsiiProperty(name: "productKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProductKey
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the resource group to which the rule is assigned.</summary>
        /// <remarks>
        /// You can view the resource
        /// group information in the Resource Management console.
        /// If you do not specify this parameter, the rule is assigned to the default resource
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

        /// <summary>Property ruleAction:.</summary>
        [JsiiProperty(name: "ruleAction", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-iot.RosRule.RuleActionProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RuleAction
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ruleDesc: The description of the rule.</summary>
        /// <remarks>
        /// The description can be up to 100 characters in length.
        /// Each Chinese symbol occupies 1 characters.
        /// </remarks>
        [JsiiProperty(name: "ruleDesc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RuleDesc
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property select: The SQL SELECT statement that you want to execute.</summary>
        /// <remarks>
        /// For more information, seeSQL expressions.
        /// Note Specify the fields that follow the Select keyword for this parameter. For example, if the Select statement is Select a,b,c, specify a,b,c for this parameter.
        /// </remarks>
        [JsiiProperty(name: "select", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Select
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property shortTopic: The topic to which this rule is applied.</summary>
        /// <remarks>
        /// Syntax: ${deviceName}/topicShortName. ${deviceName}specifies the name of the device, and topicShortNamespecifies the custom name of the topic.
        /// Basic communication topics or Thing Specification Language (TSL)-based communication
        /// topics. Syntax: ${deviceName}/topicShortName. You can replace ${deviceName} with the + wildcard. The wildcard indicates that the topic applies to all devices under the
        /// product. Valid values of topicShortName:
        /// /thing/event/property/post: submits the property data of a device.
        /// /thing/event/${tsl.event.identifier}/post: submits the event data of a device.${tsl.event.identifier} specifies the identifier of an event in the TSL.
        /// /thing/lifecycle: submits device lifecycle changes.
        /// /thing/downlink/reply/message: sends a response to a request from IoT Platform.
        /// /thing/list/found: submits the data when a gateway detects a new sub-device.
        /// /thing/topo/lifecycle: submits device topology changes.
        /// /thing/event/property/history/post: submits historical property data of a device.
        /// /thing/event/${tsl.event.identifier}/post: submits the historical event data of a device.${tsl.event.identifier}specifies the identifier of an event in the TSL.
        /// /ota/upgrade: submits OTA update status.
        /// /ota/version/post: submits OTA module versions.
        /// /thing/deviceinfo/update: submits device tag changes.
        /// /edge/driver/${driver_id}/point_post: submits pass-through data from Link IoT Edge.${driver_id} specifies the ID of the driver that a device uses to access Link IoT Edge.
        /// ${packageId}/${jobId}/ota/job/status: submits the status of OTA update batches. This topic is a basic communication topic.
        /// ${packageId}specifies the ID of the firmware. ${jobId}specifies the ID of the update batch.
        /// Custom topics. Example:${deviceName}/user/get.
        /// You can call theQueryProductTopicoperation to view all custom topics of the product.
        /// When you specify a custom topic, you can use the + and # wildcards.
        /// You can replace ${deviceName} with the+ wildcard. The wildcard indicates that the topic applies to all devices under the
        /// product.
        /// You can replace the fields that follow ${deviceName} with /user/#. The # wildcard indicates that the topic applies whatever values are specified for the fields that
        /// follow/user.
        /// For more information about how to use wildcards, see Wildcards in topics.
        /// Topic that is used to submit device status changes: ${deviceName}.
        /// You can use the+wildcard. In this case, the status changes of all devices under the product are submitted.
        /// </remarks>
        [JsiiProperty(name: "shortTopic", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ShortTopic
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property startRule: Start the rule.</summary>
        /// <remarks>
        /// The rule at least contains one rule action with normal data forward.
        /// </remarks>
        [JsiiProperty(name: "startRule", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? StartRule
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property topicType: 0: The topic is a basic communication topic or TSL-based communication topic.</summary>
        /// <remarks>
        /// 1: The topic is a custom topic.
        /// 2: The topic is used to submit device status changes. Syntax: /as/mqtt/status/${productKey}/${deviceName}.
        /// </remarks>
        [JsiiProperty(name: "topicType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TopicType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property where: The condition that is used to trigger the rule.</summary>
        /// <remarks>
        /// For more information, seeSQL expressions.
        /// Note Specify the fields that follow theWherekeyword for this parameter. For example, if the Where statement is Where a&gt;10, specify a&gt;10 for this parameter.
        /// </remarks>
        [JsiiProperty(name: "where", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Where
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Rule`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-rule
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-iot.RuleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Iot.IRuleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property name: The name of the rule.</summary>
            /// <remarks>
            /// The name must be 1 to 30 characters in length and can contain
            /// English letters, digits, underscores (_), and hyphens (-). Chinese language is also
            /// supported. Each Chinese symbol occupies 2 characters.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dataType: The format of the data to be processed by the rule.</summary>
            /// <remarks>
            /// You must specify the format of
            /// device data to be processed for this parameter. Valid values:
            /// JSON: JSON data
            /// BINARY: binary data
            /// Note If you specifyBINARY, you cannot set the TopicType parameter to 0 and forward data to Table Store, Time Series Database (TSDB), or ApsaradDB
            /// for RDS.
            /// Default value: JSON.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dataType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DataType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property iotInstanceId: The ID of the instance.</summary>
            /// <remarks>
            /// This parameter is not required for public instances. However,
            /// the parameter is required for the instances that you have purchased.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "iotInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IotInstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property productKey: The ProductKey of the product to which the rule applies.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "productKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProductKey
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group to which the rule is assigned.</summary>
            /// <remarks>
            /// You can view the resource
            /// group information in the Resource Management console.
            /// If you do not specify this parameter, the rule is assigned to the default resource
            /// group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ruleAction:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ruleAction", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-iot.RosRule.RuleActionProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? RuleAction
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ruleDesc: The description of the rule.</summary>
            /// <remarks>
            /// The description can be up to 100 characters in length.
            /// Each Chinese symbol occupies 1 characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ruleDesc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RuleDesc
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property select: The SQL SELECT statement that you want to execute.</summary>
            /// <remarks>
            /// For more information, seeSQL expressions.
            /// Note Specify the fields that follow the Select keyword for this parameter. For example, if the Select statement is Select a,b,c, specify a,b,c for this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "select", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Select
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property shortTopic: The topic to which this rule is applied.</summary>
            /// <remarks>
            /// Syntax: ${deviceName}/topicShortName. ${deviceName}specifies the name of the device, and topicShortNamespecifies the custom name of the topic.
            /// Basic communication topics or Thing Specification Language (TSL)-based communication
            /// topics. Syntax: ${deviceName}/topicShortName. You can replace ${deviceName} with the + wildcard. The wildcard indicates that the topic applies to all devices under the
            /// product. Valid values of topicShortName:
            /// /thing/event/property/post: submits the property data of a device.
            /// /thing/event/${tsl.event.identifier}/post: submits the event data of a device.${tsl.event.identifier} specifies the identifier of an event in the TSL.
            /// /thing/lifecycle: submits device lifecycle changes.
            /// /thing/downlink/reply/message: sends a response to a request from IoT Platform.
            /// /thing/list/found: submits the data when a gateway detects a new sub-device.
            /// /thing/topo/lifecycle: submits device topology changes.
            /// /thing/event/property/history/post: submits historical property data of a device.
            /// /thing/event/${tsl.event.identifier}/post: submits the historical event data of a device.${tsl.event.identifier}specifies the identifier of an event in the TSL.
            /// /ota/upgrade: submits OTA update status.
            /// /ota/version/post: submits OTA module versions.
            /// /thing/deviceinfo/update: submits device tag changes.
            /// /edge/driver/${driver_id}/point_post: submits pass-through data from Link IoT Edge.${driver_id} specifies the ID of the driver that a device uses to access Link IoT Edge.
            /// ${packageId}/${jobId}/ota/job/status: submits the status of OTA update batches. This topic is a basic communication topic.
            /// ${packageId}specifies the ID of the firmware. ${jobId}specifies the ID of the update batch.
            /// Custom topics. Example:${deviceName}/user/get.
            /// You can call theQueryProductTopicoperation to view all custom topics of the product.
            /// When you specify a custom topic, you can use the + and # wildcards.
            /// You can replace ${deviceName} with the+ wildcard. The wildcard indicates that the topic applies to all devices under the
            /// product.
            /// You can replace the fields that follow ${deviceName} with /user/#. The # wildcard indicates that the topic applies whatever values are specified for the fields that
            /// follow/user.
            /// For more information about how to use wildcards, see Wildcards in topics.
            /// Topic that is used to submit device status changes: ${deviceName}.
            /// You can use the+wildcard. In this case, the status changes of all devices under the product are submitted.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "shortTopic", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ShortTopic
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property startRule: Start the rule.</summary>
            /// <remarks>
            /// The rule at least contains one rule action with normal data forward.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "startRule", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StartRule
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property topicType: 0: The topic is a basic communication topic or TSL-based communication topic.</summary>
            /// <remarks>
            /// 1: The topic is a custom topic.
            /// 2: The topic is used to submit device status changes. Syntax: /as/mqtt/status/${productKey}/${deviceName}.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "topicType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TopicType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property where: The condition that is used to trigger the rule.</summary>
            /// <remarks>
            /// For more information, seeSQL expressions.
            /// Note Specify the fields that follow theWherekeyword for this parameter. For example, if the Where statement is Where a&gt;10, specify a&gt;10 for this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "where", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Where
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
