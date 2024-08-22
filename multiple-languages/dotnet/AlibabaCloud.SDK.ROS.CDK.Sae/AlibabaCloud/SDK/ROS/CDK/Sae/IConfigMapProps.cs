using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sae
{
    /// <summary>Properties for defining a `ConfigMap`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-configmap
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IConfigMapProps), fullyQualifiedName: "@alicloud/ros-cdk-sae.ConfigMapProps")]
    public interface IConfigMapProps
    {
        /// <summary>Property data: Configmap key value pairs of data, json format.The format is as follows: {"k1":"v1", "k2":"v2"} K means key, V represents value.For more information about configuration items, see management and use of configuration items.</summary>
        [JsiiProperty(name: "data", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
        object Data
        {
            get;
        }

        /// <summary>Property name: The name of the config map.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <summary>Property namespaceId: The ID of the namespace to which this config map instance belongs.</summary>
        [JsiiProperty(name: "namespaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NamespaceId
        {
            get;
        }

        /// <summary>Property description: Describe information, do not enter the space without more than 255 characters.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ConfigMap`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-configmap
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IConfigMapProps), fullyQualifiedName: "@alicloud/ros-cdk-sae.ConfigMapProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sae.IConfigMapProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property data: Configmap key value pairs of data, json format.The format is as follows: {"k1":"v1", "k2":"v2"} K means key, V represents value.For more information about configuration items, see management and use of configuration items.</summary>
            [JsiiProperty(name: "data", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
            public object Data
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property name: The name of the config map.</summary>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property namespaceId: The ID of the namespace to which this config map instance belongs.</summary>
            [JsiiProperty(name: "namespaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NamespaceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: Describe information, do not enter the space without more than 255 characters.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
