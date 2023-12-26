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
        /// <strong>Property</strong>: argument: X-match Attributes. Valid Values:
        /// "x-match:all": Default Value, All the Message Header of Key-Value Pairs Stored in the Must Match.
        /// "x-match:any": at Least One Pair of the Message Header of Key-Value Pairs Stored in the Must Match.
        /// </remarks>
        [JsiiProperty(name: "argument", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Argument
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: bindingKey: The Binding Key.
        /// </remarks>
        [JsiiProperty(name: "bindingKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BindingKey
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: bindingType: The Target Binding Types. Valid values: EXCHANGE, QUEUE.
        /// </remarks>
        [JsiiProperty(name: "bindingType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BindingType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: destinationName: The Target Queue Or Exchange of the Name.
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
            /// <strong>Property</strong>: argument: X-match Attributes. Valid Values:
            /// "x-match:all": Default Value, All the Message Header of Key-Value Pairs Stored in the Must Match.
            /// "x-match:any": at Least One Pair of the Message Header of Key-Value Pairs Stored in the Must Match.
            /// </remarks>
            [JsiiProperty(name: "argument", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Argument
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: bindingKey: The Binding Key.
            /// </remarks>
            [JsiiProperty(name: "bindingKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BindingKey
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: bindingType: The Target Binding Types. Valid values: EXCHANGE, QUEUE.
            /// </remarks>
            [JsiiProperty(name: "bindingType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BindingType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: destinationName: The Target Queue Or Exchange of the Name.
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
