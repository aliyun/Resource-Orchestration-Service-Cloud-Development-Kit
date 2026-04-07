using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    /// <summary>Properties for defining a `RosImageEventOperation`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-imageeventoperation
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosImageEventOperationProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.RosImageEventOperationProps")]
    public interface IRosImageEventOperationProps
    {
        /// <remarks>
        /// <strong>Property</strong>: conditions: The rule conditions. Specify a value in the JSON format. You can specify the following keys:
        /// *   **condition**: the matching condition.
        /// *   **type**: the matching type.
        /// *   **value**: the matching value.
        /// </remarks>
        [JsiiProperty(name: "conditions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
        object Conditions
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: eventType: Image Event Type.
        /// </remarks>
        [JsiiProperty(name: "eventType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EventType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: operationCode: Event Operation Code.
        /// </remarks>
        [JsiiProperty(name: "operationCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object OperationCode
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: eventKey: The keyword of the alert item.
        /// </remarks>
        [JsiiProperty(name: "eventKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EventKey
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: eventName: The name of the alert item.
        /// </remarks>
        [JsiiProperty(name: "eventName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EventName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: note: The remarks that you want to add.
        /// </remarks>
        [JsiiProperty(name: "note", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Note
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: scenarios: The application scope of the rule. The value is in the JSON format. Valid values of keys:
        /// type
        /// value
        /// Example: {"type": "repo", "value": "test-aaa\/shenzhen-repo-01"}
        /// </remarks>
        [JsiiProperty(name: "scenarios", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Scenarios
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: source: The source of the whitelist. Valid values:
        /// *   **default**: image.
        /// *   **agentless**: agentless detection.
        /// </remarks>
        [JsiiProperty(name: "source", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Source
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosImageEventOperation`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-imageeventoperation
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosImageEventOperationProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.RosImageEventOperationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Threatdetection.IRosImageEventOperationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: conditions: The rule conditions. Specify a value in the JSON format. You can specify the following keys:
            /// *   **condition**: the matching condition.
            /// *   **type**: the matching type.
            /// *   **value**: the matching value.
            /// </remarks>
            [JsiiProperty(name: "conditions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
            public object Conditions
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: eventType: Image Event Type.
            /// </remarks>
            [JsiiProperty(name: "eventType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EventType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: operationCode: Event Operation Code.
            /// </remarks>
            [JsiiProperty(name: "operationCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object OperationCode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: eventKey: The keyword of the alert item.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "eventKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EventKey
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: eventName: The name of the alert item.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "eventName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EventName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: note: The remarks that you want to add.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "note", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Note
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: scenarios: The application scope of the rule. The value is in the JSON format. Valid values of keys:
            /// type
            /// value
            /// Example: {"type": "repo", "value": "test-aaa\/shenzhen-repo-01"}
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scenarios", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Scenarios
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: source: The source of the whitelist. Valid values:
            /// *   **default**: image.
            /// *   **agentless**: agentless detection.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "source", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Source
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
