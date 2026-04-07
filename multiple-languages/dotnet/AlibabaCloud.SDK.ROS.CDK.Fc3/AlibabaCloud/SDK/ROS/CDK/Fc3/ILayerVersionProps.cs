using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc3
{
    /// <summary>Properties for defining a `LayerVersion`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-layerversion
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ILayerVersionProps), fullyQualifiedName: "@alicloud/ros-cdk-fc3.LayerVersionProps")]
    public interface ILayerVersionProps
    {
        /// <summary>Property layerName: Name of the layer.</summary>
        [JsiiProperty(name: "layerName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LayerName
        {
            get;
        }

        /// <summary>Property acl: The access permission of the layer, 1: public, 0: private, default is private.</summary>
        [JsiiProperty(name: "acl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Acl
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property code: Layer code configuration.</summary>
        [JsiiProperty(name: "code", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc3.RosLayerVersion.CodeProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Code
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property compatibleRuntime: List of runtime environments supported by the layer.</summary>
        [JsiiProperty(name: "compatibleRuntime", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CompatibleRuntime
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: Description of the version.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property license: Layer License Agreement.</summary>
        [JsiiProperty(name: "license", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? License
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `LayerVersion`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-layerversion
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ILayerVersionProps), fullyQualifiedName: "@alicloud/ros-cdk-fc3.LayerVersionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fc3.ILayerVersionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property layerName: Name of the layer.</summary>
            [JsiiProperty(name: "layerName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LayerName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property acl: The access permission of the layer, 1: public, 0: private, default is private.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "acl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Acl
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property code: Layer code configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "code", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc3.RosLayerVersion.CodeProperty\"}]}}", isOptional: true)]
            public object? Code
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property compatibleRuntime: List of runtime environments supported by the layer.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "compatibleRuntime", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? CompatibleRuntime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: Description of the version.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property license: Layer License Agreement.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "license", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? License
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
