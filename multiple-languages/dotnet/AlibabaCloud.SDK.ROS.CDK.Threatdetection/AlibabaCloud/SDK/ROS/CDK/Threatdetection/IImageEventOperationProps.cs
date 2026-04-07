using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    /// <summary>Properties for defining a `ImageEventOperation`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-imageeventoperation
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IImageEventOperationProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.ImageEventOperationProps")]
    public interface IImageEventOperationProps
    {
        /// <summary>Property conditions: The rule conditions.</summary>
        /// <remarks>
        /// Specify a value in the JSON format. You can specify the following keys:
        ///
        /// <list type="bullet">
        /// <description><strong>condition</strong>: the matching condition.</description>
        /// <description><strong>type</strong>: the matching type.</description>
        /// <description><strong>value</strong>: the matching value.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "conditions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
        object Conditions
        {
            get;
        }

        /// <summary>Property eventType: Image Event Type.</summary>
        [JsiiProperty(name: "eventType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EventType
        {
            get;
        }

        /// <summary>Property operationCode: Event Operation Code.</summary>
        [JsiiProperty(name: "operationCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object OperationCode
        {
            get;
        }

        /// <summary>Property eventKey: The keyword of the alert item.</summary>
        [JsiiProperty(name: "eventKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EventKey
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property eventName: The name of the alert item.</summary>
        [JsiiProperty(name: "eventName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EventName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property note: The remarks that you want to add.</summary>
        [JsiiProperty(name: "note", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Note
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property scenarios: The application scope of the rule.</summary>
        /// <remarks>
        /// The value is in the JSON format. Valid values of keys:
        /// type
        /// value
        /// Example: {"type": "repo", "value": "test-aaa/shenzhen-repo-01"}
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

        /// <summary>Property source: The source of the whitelist.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><strong>default</strong>: image.</description>
        /// <description><strong>agentless</strong>: agentless detection.</description>
        /// </list>
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

        /// <summary>Properties for defining a `ImageEventOperation`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-imageeventoperation
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IImageEventOperationProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.ImageEventOperationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Threatdetection.IImageEventOperationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property conditions: The rule conditions.</summary>
            /// <remarks>
            /// Specify a value in the JSON format. You can specify the following keys:
            ///
            /// <list type="bullet">
            /// <description><strong>condition</strong>: the matching condition.</description>
            /// <description><strong>type</strong>: the matching type.</description>
            /// <description><strong>value</strong>: the matching value.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "conditions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
            public object Conditions
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property eventType: Image Event Type.</summary>
            [JsiiProperty(name: "eventType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EventType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property operationCode: Event Operation Code.</summary>
            [JsiiProperty(name: "operationCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object OperationCode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property eventKey: The keyword of the alert item.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "eventKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EventKey
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property eventName: The name of the alert item.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "eventName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EventName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property note: The remarks that you want to add.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "note", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Note
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property scenarios: The application scope of the rule.</summary>
            /// <remarks>
            /// The value is in the JSON format. Valid values of keys:
            /// type
            /// value
            /// Example: {"type": "repo", "value": "test-aaa/shenzhen-repo-01"}
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scenarios", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Scenarios
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property source: The source of the whitelist.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><strong>default</strong>: image.</description>
            /// <description><strong>agentless</strong>: agentless detection.</description>
            /// </list>
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
