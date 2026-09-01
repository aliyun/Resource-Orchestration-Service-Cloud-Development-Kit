using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Amqp
{
    /// <summary>Properties for defining a `RosBinding`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-binding
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosBindingProps), fullyQualifiedName: "@alicloud/ros-cdk-amqp.RosBindingProps")]
    public interface IRosBindingProps
    {
        /// <remarks>
        /// <strong>Property</strong>: argument: The key-value pairs for the message header attributes. The message header
        /// attributes consist of one or more key-value pairs. The x-match attribute is
        /// required. Other attributes are custom. The x-match attribute supports the
        /// following values:
        /// - all: This is the default value. All key-value pairs in the message header must
        /// match.
        /// - any: At least one key-value pair in the message header must match.
        /// Separate attributes with semicolons (;) and separate keys from values with colons
        /// (:). Example: x-match:all;type:report;format:pdf
        /// This parameter is valid only for headers exchanges. For other types of exchanges,
        /// this parameter is ignored.
        /// </remarks>
        [JsiiProperty(name: "argument", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Argument
        {
            get;
        }

        /// <remarks>
        /// <strong></strong>: ).
        /// - The key cannot start or end with a period (.). If the key starts with a number
        /// sign (#) or an asterisk (\*), a period (.) must immediately follow. If the key
        /// ends with a number sign (#) or an asterisk (\*), a period (.) must immediately
        /// precede it. If a number sign (#) or an asterisk (\*) is in the middle of the key,
        /// it must have a period (.) on both sides.
        /// - The length must be 1 to 255 characters.
        ///
        /// <strong>Property</strong>: bindingKey: The binding key.
        /// - If the source exchange is not a topic exchange:
        /// - It can contain letters, digits, hyphens (-), underscores (_), periods (.),
        /// forward slashes (\/), and at signs (
        /// </remarks>
        [JsiiProperty(name: "bindingKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BindingKey
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: bindingType: The type of the destination object. Valid values:
        /// - 0: Queue
        /// - 1: Exchange
        /// </remarks>
        [JsiiProperty(name: "bindingType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BindingType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: destinationName: The name of the binding destination. The destination must be created in the
        /// console. It must belong to the same vhost as `SourceExchange`. The `VirtualHost`
        /// parameter specifies the vhost.
        /// </remarks>
        [JsiiProperty(name: "destinationName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DestinationName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceId: InstanceId
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceExchange: The Source Exchange Name.
        /// </remarks>
        [JsiiProperty(name: "sourceExchange", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SourceExchange
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: virtualHost: The name of the virtual host.
        /// </remarks>
        [JsiiProperty(name: "virtualHost", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VirtualHost
        {
            get;
        }

        /// <summary>Properties for defining a `RosBinding`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-binding
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosBindingProps), fullyQualifiedName: "@alicloud/ros-cdk-amqp.RosBindingProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Amqp.IRosBindingProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: argument: The key-value pairs for the message header attributes. The message header
            /// attributes consist of one or more key-value pairs. The x-match attribute is
            /// required. Other attributes are custom. The x-match attribute supports the
            /// following values:
            /// - all: This is the default value. All key-value pairs in the message header must
            /// match.
            /// - any: At least one key-value pair in the message header must match.
            /// Separate attributes with semicolons (;) and separate keys from values with colons
            /// (:). Example: x-match:all;type:report;format:pdf
            /// This parameter is valid only for headers exchanges. For other types of exchanges,
            /// this parameter is ignored.
            /// </remarks>
            [JsiiProperty(name: "argument", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Argument
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong></strong>: ).
            /// - The key cannot start or end with a period (.). If the key starts with a number
            /// sign (#) or an asterisk (\*), a period (.) must immediately follow. If the key
            /// ends with a number sign (#) or an asterisk (\*), a period (.) must immediately
            /// precede it. If a number sign (#) or an asterisk (\*) is in the middle of the key,
            /// it must have a period (.) on both sides.
            /// - The length must be 1 to 255 characters.
            ///
            /// <strong>Property</strong>: bindingKey: The binding key.
            /// - If the source exchange is not a topic exchange:
            /// - It can contain letters, digits, hyphens (-), underscores (_), periods (.),
            /// forward slashes (\/), and at signs (
            /// </remarks>
            [JsiiProperty(name: "bindingKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BindingKey
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: bindingType: The type of the destination object. Valid values:
            /// - 0: Queue
            /// - 1: Exchange
            /// </remarks>
            [JsiiProperty(name: "bindingType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BindingType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: destinationName: The name of the binding destination. The destination must be created in the
            /// console. It must belong to the same vhost as `SourceExchange`. The `VirtualHost`
            /// parameter specifies the vhost.
            /// </remarks>
            [JsiiProperty(name: "destinationName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DestinationName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: InstanceId
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: sourceExchange: The Source Exchange Name.
            /// </remarks>
            [JsiiProperty(name: "sourceExchange", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SourceExchange
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: virtualHost: The name of the virtual host.
            /// </remarks>
            [JsiiProperty(name: "virtualHost", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VirtualHost
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
