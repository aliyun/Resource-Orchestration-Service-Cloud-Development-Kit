using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Iot
{
    /// <summary>A ROS template type:  `ALIYUN::IOT::Rule`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Iot.RosRule), fullyQualifiedName: "@alicloud/ros-cdk-iot.RosRule", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-iot.RosRuleProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosRule : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::IOT::Rule`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosRule(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Iot.IRosRuleProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosRule(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosRule(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "renderProperties", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}", parametersJson: "[{\"name\":\"props\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]", isOverride: true)]
        protected override System.Collections.Generic.IDictionary<string, object> RenderProperties(System.Collections.Generic.IDictionary<string, object> props)
        {
            return InvokeInstanceMethod<System.Collections.Generic.IDictionary<string, object>>(new System.Type[]{typeof(System.Collections.Generic.IDictionary<string, object>)}, new object[]{props})!;
        }

        /// <summary>The resource type name for this resource class.</summary>
        [JsiiProperty(name: "ROS_RESOURCE_TYPE_NAME", typeJson: "{\"primitive\":\"string\"}")]
        public static string ROS_RESOURCE_TYPE_NAME
        {
            get;
        }
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Iot.RosRule))!;

        /// <remarks>
        /// <strong>Attribute</strong>: ActionId: The ID of the rule action.
        /// </remarks>
        [JsiiProperty(name: "attrActionId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrActionId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: RuleId: The ID of the rule.
        /// </remarks>
        [JsiiProperty(name: "attrRuleId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrRuleId
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the rule. The name must be 1 to 30 characters in length and can contain
        /// English letters, digits, underscores (_), and hyphens (-). Chinese language is also
        /// supported. Each Chinese symbol occupies 2 characters.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string Name
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: dataType: The format of the data to be processed by the rule. You must specify the format of
        /// device data to be processed for this parameter. Valid values:
        /// JSON: JSON data
        /// BINARY: binary data
        /// Note If you specifyBINARY, you cannot set the TopicType parameter to 0 and forward data to Table Store, Time Series Database (TSDB), or ApsaradDB
        /// for RDS.
        /// Default value: JSON.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dataType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? DataType
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: iotInstanceId: The ID of the instance. This parameter is not required for public instances. However,
        /// the parameter is required for the instances that you have purchased.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "iotInstanceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? IotInstanceId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: productKey: The ProductKey of the product to which the rule applies.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "productKey", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? ProductKey
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: The ID of the resource group to which the rule is assigned. You can view the resource
        /// group information in the Resource Management console.
        /// If you do not specify this parameter, the rule is assigned to the default resource
        /// group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? ResourceGroupId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: ruleAction:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ruleAction", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-iot.RosRule.RuleActionProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? RuleAction
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: ruleDesc: The description of the rule. The description can be up to 100 characters in length.
        /// Each Chinese symbol occupies 1 characters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ruleDesc", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? RuleDesc
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: select: The SQL SELECT statement that you want to execute. For more information, seeSQL expressions.
        /// Note Specify the fields that follow the Select keyword for this parameter. For example, if the Select statement is Select a,b,c, specify a,b,c for this parameter.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "select", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? Select
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: shortTopic: The topic to which this rule is applied. Syntax: ${deviceName}/topicShortName. ${deviceName}specifies the name of the device, and topicShortNamespecifies the custom name of the topic.
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
        [JsiiProperty(name: "shortTopic", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? ShortTopic
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: startRule: Start the rule. The rule at least contains one rule action with normal data forward.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "startRule", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? StartRule
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: topicType: 0: The topic is a basic communication topic or TSL-based communication topic.
        /// 1: The topic is a custom topic.
        /// 2: The topic is used to submit device status changes. Syntax: /as/mqtt/status/${productKey}/${deviceName}.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "topicType", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? TopicType
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: where: The condition that is used to trigger the rule. For more information, seeSQL expressions.
        /// Note Specify the fields that follow theWherekeyword for this parameter. For example, if the Where statement is Where a>10, specify a>10 for this parameter.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "where", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? Where
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IRuleActionProperty), fullyQualifiedName: "@alicloud/ros-cdk-iot.RosRule.RuleActionProperty")]
        public interface IRuleActionProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: configuration: The configurations of the rule action. You must specify a JSON string. The configurations
            /// for different types of rule actions are different. For more information about required
            /// syntax and examples, see the following tables.
            /// </remarks>
            [JsiiProperty(name: "configuration", typeJson: "{\"primitive\":\"string\"}")]
            string Configuration
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
            [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}")]
            string Type
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
            [JsiiProperty(name: "errorActionFlag", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? ErrorActionFlag
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IRuleActionProperty), fullyQualifiedName: "@alicloud/ros-cdk-iot.RosRule.RuleActionProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Iot.RosRule.IRuleActionProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: configuration: The configurations of the rule action. You must specify a JSON string. The configurations
                /// for different types of rule actions are different. For more information about required
                /// syntax and examples, see the following tables.
                /// </remarks>
                [JsiiProperty(name: "configuration", typeJson: "{\"primitive\":\"string\"}")]
                public string Configuration
                {
                    get => GetInstanceProperty<string>()!;
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
                [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}")]
                public string Type
                {
                    get => GetInstanceProperty<string>()!;
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
                [JsiiProperty(name: "errorActionFlag", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? ErrorActionFlag
                {
                    get => GetInstanceProperty<string?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-iot.RosRule.RuleActionProperty")]
        public class RuleActionProperty : AlibabaCloud.SDK.ROS.CDK.Iot.RosRule.IRuleActionProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: configuration: The configurations of the rule action. You must specify a JSON string. The configurations
            /// for different types of rule actions are different. For more information about required
            /// syntax and examples, see the following tables.
            /// </remarks>
            [JsiiProperty(name: "configuration", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Configuration
            {
                get;
                set;
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
            [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string Type
            {
                get;
                set;
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
            [JsiiProperty(name: "errorActionFlag", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? ErrorActionFlag
            {
                get;
                set;
            }
        }
    }
}
