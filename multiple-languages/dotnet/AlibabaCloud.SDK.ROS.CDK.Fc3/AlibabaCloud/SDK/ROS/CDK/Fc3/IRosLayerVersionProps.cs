using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc3
{
    /// <summary>Properties for defining a `RosLayerVersion`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-layerversion
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosLayerVersionProps), fullyQualifiedName: "@alicloud/ros-cdk-fc3.RosLayerVersionProps")]
    public interface IRosLayerVersionProps
    {
        /// <remarks>
        /// <strong>Property</strong>: layerName: Name of the layer.
        /// </remarks>
        [JsiiProperty(name: "layerName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LayerName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: acl: The access permission of the layer, 1: public, 0: private, default is private.
        /// </remarks>
        [JsiiProperty(name: "acl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Acl
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: code: Layer code configuration.
        /// </remarks>
        [JsiiProperty(name: "code", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc3.RosLayerVersion.CodeProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Code
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: compatibleRuntime: List of runtime environments supported by the layer.
        /// </remarks>
        [JsiiProperty(name: "compatibleRuntime", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CompatibleRuntime
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Description of the version.
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

        /// <remarks>
        /// <strong>Property</strong>: license: Layer License Agreement.
        /// </remarks>
        [JsiiProperty(name: "license", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? License
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosLayerVersion`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-layerversion
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosLayerVersionProps), fullyQualifiedName: "@alicloud/ros-cdk-fc3.RosLayerVersionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fc3.IRosLayerVersionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: layerName: Name of the layer.
            /// </remarks>
            [JsiiProperty(name: "layerName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LayerName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: acl: The access permission of the layer, 1: public, 0: private, default is private.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "acl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Acl
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: code: Layer code configuration.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "code", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc3.RosLayerVersion.CodeProperty\"}]}}", isOptional: true)]
            public object? Code
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: compatibleRuntime: List of runtime environments supported by the layer.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "compatibleRuntime", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? CompatibleRuntime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Description of the version.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: license: Layer License Agreement.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "license", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? License
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
