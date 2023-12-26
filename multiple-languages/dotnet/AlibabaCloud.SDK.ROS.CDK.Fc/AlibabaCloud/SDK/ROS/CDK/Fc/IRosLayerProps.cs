using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc
{
    /// <summary>Properties for defining a `RosLayer`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-layer
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosLayerProps), fullyQualifiedName: "@alicloud/ros-cdk-fc.RosLayerProps")]
    public interface IRosLayerProps
    {
        /// <remarks>
        /// <strong>Property</strong>: code: The code of layer.
        /// </remarks>
        [JsiiProperty(name: "code", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosLayer.CodeProperty\"}]}}")]
        object Code
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: compatibleRuntime: The runtime environment supported by the layer. For example:nodejs12, nodejs10, nodejs8, nodejs6, python3, and python2.7
        /// </remarks>
        [JsiiProperty(name: "compatibleRuntime", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object CompatibleRuntime
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: layerName: The name of layer
        /// </remarks>
        [JsiiProperty(name: "layerName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LayerName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the layer.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosLayer`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-layer
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosLayerProps), fullyQualifiedName: "@alicloud/ros-cdk-fc.RosLayerProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fc.IRosLayerProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: code: The code of layer.
            /// </remarks>
            [JsiiProperty(name: "code", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosLayer.CodeProperty\"}]}}")]
            public object Code
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: compatibleRuntime: The runtime environment supported by the layer. For example:nodejs12, nodejs10, nodejs8, nodejs6, python3, and python2.7
            /// </remarks>
            [JsiiProperty(name: "compatibleRuntime", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object CompatibleRuntime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: layerName: The name of layer
            /// </remarks>
            [JsiiProperty(name: "layerName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LayerName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the layer.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
