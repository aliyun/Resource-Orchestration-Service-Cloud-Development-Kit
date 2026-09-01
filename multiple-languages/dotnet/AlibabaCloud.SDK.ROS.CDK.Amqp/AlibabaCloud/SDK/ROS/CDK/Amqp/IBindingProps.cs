using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Amqp
{
    /// <summary>Properties for defining a `Binding`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-binding
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IBindingProps), fullyQualifiedName: "@alicloud/ros-cdk-amqp.BindingProps")]
    public interface IBindingProps
    {
        /// <summary>Property argument: The key-value pairs for the message header attributes.</summary>
        /// <remarks>
        /// The message header
        /// attributes consist of one or more key-value pairs. The x-match attribute is
        /// required. Other attributes are custom. The x-match attribute supports the
        /// following values:
        ///
        /// <list type="bullet">
        /// <description>all: This is the default value. All key-value pairs in the message header must
        /// match.</description>
        /// <description>any: At least one key-value pair in the message header must match.
        /// Separate attributes with semicolons (;) and separate keys from values with colons
        /// (:). Example: x-match:all;type:report;format:pdf
        /// This parameter is valid only for headers exchanges. For other types of exchanges,
        /// this parameter is ignored.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "argument", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Argument
        {
            get;
        }

        /// <summary>Property bindingKey: The binding key.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>If the source exchange is not a topic exchange:</description>
        /// <description>It can contain letters, digits, hyphens (-), underscores (_), periods (.),
        /// forward slashes (/), and at signs (@).</description>
        /// <description>The length must be 1 to 255 characters.</description>
        /// <description>If the source exchange is a topic exchange:</description>
        /// <description>It can contain letters, digits, hyphens (-), underscores (_), asterisks (*),
        /// periods (.), number signs (#), forward slashes (/), and at signs (@).</description>
        /// <description>The key cannot start or end with a period (.). If the key starts with a number
        /// sign (#) or an asterisk (<em>), a period (.) must immediately follow. If the key
        /// ends with a number sign (#) or an asterisk (</em>), a period (.) must immediately
        /// precede it. If a number sign (#) or an asterisk (*) is in the middle of the key,
        /// it must have a period (.) on both sides.</description>
        /// <description>The length must be 1 to 255 characters.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "bindingKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BindingKey
        {
            get;
        }

        /// <summary>Property bindingType: The type of the destination object.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>0: Queue</description>
        /// <description>1: Exchange</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "bindingType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BindingType
        {
            get;
        }

        /// <summary>Property destinationName: The name of the binding destination.</summary>
        /// <remarks>
        /// The destination must be created in the
        /// console. It must belong to the same vhost as <c>SourceExchange</c>. The <c>VirtualHost</c>
        /// parameter specifies the vhost.
        /// </remarks>
        [JsiiProperty(name: "destinationName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DestinationName
        {
            get;
        }

        /// <summary>Property instanceId: InstanceId.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Property sourceExchange: The Source Exchange Name.</summary>
        [JsiiProperty(name: "sourceExchange", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SourceExchange
        {
            get;
        }

        /// <summary>Property virtualHost: The name of the virtual host.</summary>
        [JsiiProperty(name: "virtualHost", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VirtualHost
        {
            get;
        }

        /// <summary>Properties for defining a `Binding`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-binding
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IBindingProps), fullyQualifiedName: "@alicloud/ros-cdk-amqp.BindingProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Amqp.IBindingProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property argument: The key-value pairs for the message header attributes.</summary>
            /// <remarks>
            /// The message header
            /// attributes consist of one or more key-value pairs. The x-match attribute is
            /// required. Other attributes are custom. The x-match attribute supports the
            /// following values:
            ///
            /// <list type="bullet">
            /// <description>all: This is the default value. All key-value pairs in the message header must
            /// match.</description>
            /// <description>any: At least one key-value pair in the message header must match.
            /// Separate attributes with semicolons (;) and separate keys from values with colons
            /// (:). Example: x-match:all;type:report;format:pdf
            /// This parameter is valid only for headers exchanges. For other types of exchanges,
            /// this parameter is ignored.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "argument", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Argument
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property bindingKey: The binding key.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>If the source exchange is not a topic exchange:</description>
            /// <description>It can contain letters, digits, hyphens (-), underscores (_), periods (.),
            /// forward slashes (/), and at signs (@).</description>
            /// <description>The length must be 1 to 255 characters.</description>
            /// <description>If the source exchange is a topic exchange:</description>
            /// <description>It can contain letters, digits, hyphens (-), underscores (_), asterisks (*),
            /// periods (.), number signs (#), forward slashes (/), and at signs (@).</description>
            /// <description>The key cannot start or end with a period (.). If the key starts with a number
            /// sign (#) or an asterisk (<em>), a period (.) must immediately follow. If the key
            /// ends with a number sign (#) or an asterisk (</em>), a period (.) must immediately
            /// precede it. If a number sign (#) or an asterisk (*) is in the middle of the key,
            /// it must have a period (.) on both sides.</description>
            /// <description>The length must be 1 to 255 characters.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "bindingKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BindingKey
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property bindingType: The type of the destination object.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>0: Queue</description>
            /// <description>1: Exchange</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "bindingType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BindingType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property destinationName: The name of the binding destination.</summary>
            /// <remarks>
            /// The destination must be created in the
            /// console. It must belong to the same vhost as <c>SourceExchange</c>. The <c>VirtualHost</c>
            /// parameter specifies the vhost.
            /// </remarks>
            [JsiiProperty(name: "destinationName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DestinationName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceId: InstanceId.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property sourceExchange: The Source Exchange Name.</summary>
            [JsiiProperty(name: "sourceExchange", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SourceExchange
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property virtualHost: The name of the virtual host.</summary>
            [JsiiProperty(name: "virtualHost", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VirtualHost
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
