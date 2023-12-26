using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sae
{
    /// <summary>Properties for defining a `RosNamespace`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-namespace
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosNamespaceProps), fullyQualifiedName: "@alicloud/ros-cdk-sae.RosNamespaceProps")]
    public interface IRosNamespaceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: namespaceId: Namespace ID. Format: "regionId:logicalId" or "logicalId"
        /// </remarks>
        [JsiiProperty(name: "namespaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NamespaceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: namespaceName: Namespace name
        /// </remarks>
        [JsiiProperty(name: "namespaceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NamespaceName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: namespaceDescription: Namespace description
        /// </remarks>
        [JsiiProperty(name: "namespaceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NamespaceDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosNamespace`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-namespace
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosNamespaceProps), fullyQualifiedName: "@alicloud/ros-cdk-sae.RosNamespaceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sae.IRosNamespaceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: namespaceId: Namespace ID. Format: "regionId:logicalId" or "logicalId"
            /// </remarks>
            [JsiiProperty(name: "namespaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NamespaceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: namespaceName: Namespace name
            /// </remarks>
            [JsiiProperty(name: "namespaceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NamespaceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: namespaceDescription: Namespace description
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "namespaceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NamespaceDescription
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
