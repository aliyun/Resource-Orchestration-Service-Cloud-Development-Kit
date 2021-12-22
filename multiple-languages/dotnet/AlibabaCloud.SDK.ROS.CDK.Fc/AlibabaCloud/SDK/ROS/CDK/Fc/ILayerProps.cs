using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc
{
    /// <summary>Properties for defining a `ALIYUN::FC::Layer`.</summary>
    [JsiiInterface(nativeType: typeof(ILayerProps), fullyQualifiedName: "@alicloud/ros-cdk-fc.LayerProps")]
    public interface ILayerProps
    {
        /// <summary>Property code: The code of layer.</summary>
        [JsiiProperty(name: "code", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosLayer.CodeProperty\"}]}}")]
        object Code
        {
            get;
        }

        /// <summary>Property compatibleRuntime: The runtime environment supported by the layer.</summary>
        /// <remarks>
        /// For example:nodejs12, nodejs10, nodejs8, nodejs6, python3, and python2.7
        /// </remarks>
        [JsiiProperty(name: "compatibleRuntime", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object CompatibleRuntime
        {
            get;
        }

        /// <summary>Property layerName: The name of layer.</summary>
        [JsiiProperty(name: "layerName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LayerName
        {
            get;
        }

        /// <summary>Property description: The description of the layer.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::FC::Layer`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ILayerProps), fullyQualifiedName: "@alicloud/ros-cdk-fc.LayerProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fc.ILayerProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property code: The code of layer.</summary>
            [JsiiProperty(name: "code", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosLayer.CodeProperty\"}]}}")]
            public object Code
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property compatibleRuntime: The runtime environment supported by the layer.</summary>
            /// <remarks>
            /// For example:nodejs12, nodejs10, nodejs8, nodejs6, python3, and python2.7
            /// </remarks>
            [JsiiProperty(name: "compatibleRuntime", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object CompatibleRuntime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property layerName: The name of layer.</summary>
            [JsiiProperty(name: "layerName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LayerName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The description of the layer.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
