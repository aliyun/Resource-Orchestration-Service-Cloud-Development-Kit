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
        /// <summary>Property argument: X-match Attributes.</summary>
        /// <remarks>
        /// Valid Values:
        /// "x-match:all": Default Value, All the Message Header of Key-Value Pairs Stored in the Must Match.
        /// "x-match:any": at Least One Pair of the Message Header of Key-Value Pairs Stored in the Must Match.
        /// </remarks>
        [JsiiProperty(name: "argument", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Argument
        {
            get;
        }

        /// <summary>Property bindingKey: The Binding Key.</summary>
        [JsiiProperty(name: "bindingKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BindingKey
        {
            get;
        }

        /// <summary>Property bindingType: The Target Binding Types.</summary>
        /// <remarks>
        /// Valid values: EXCHANGE, QUEUE.
        /// </remarks>
        [JsiiProperty(name: "bindingType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BindingType
        {
            get;
        }

        /// <summary>Property destinationName: The Target Queue Or Exchange of the Name.</summary>
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

            /// <summary>Property argument: X-match Attributes.</summary>
            /// <remarks>
            /// Valid Values:
            /// "x-match:all": Default Value, All the Message Header of Key-Value Pairs Stored in the Must Match.
            /// "x-match:any": at Least One Pair of the Message Header of Key-Value Pairs Stored in the Must Match.
            /// </remarks>
            [JsiiProperty(name: "argument", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Argument
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property bindingKey: The Binding Key.</summary>
            [JsiiProperty(name: "bindingKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BindingKey
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property bindingType: The Target Binding Types.</summary>
            /// <remarks>
            /// Valid values: EXCHANGE, QUEUE.
            /// </remarks>
            [JsiiProperty(name: "bindingType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BindingType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property destinationName: The Target Queue Or Exchange of the Name.</summary>
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
