using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Properties for defining a `KvNamespace`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-kvnamespace
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IKvNamespaceProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.KvNamespaceProps")]
    public interface IKvNamespaceProps
    {
        /// <summary>Property kvNamespace: The name of the namespace.</summary>
        [JsiiProperty(name: "kvNamespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object KvNamespace
        {
            get;
        }

        /// <summary>Property description: The description of the namespace.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `KvNamespace`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-kvnamespace
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IKvNamespaceProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.KvNamespaceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IKvNamespaceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property kvNamespace: The name of the namespace.</summary>
            [JsiiProperty(name: "kvNamespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object KvNamespace
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The description of the namespace.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
