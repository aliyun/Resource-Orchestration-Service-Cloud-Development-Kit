using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Edas
{
    /// <summary>Properties for defining a `RosK8sCluster`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-k8scluster
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosK8sClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sClusterProps")]
    public interface IRosK8sClusterProps
    {
        /// <remarks>
        /// <strong>Property</strong>: csClusterId: The ID of the CS cluster.
        /// </remarks>
        [JsiiProperty(name: "csClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CsClusterId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: enableAsm: Whether enable ASM.
        /// </remarks>
        [JsiiProperty(name: "enableAsm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableAsm
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: namespaceId: The ID of the namespace to which the cluster that you want to import belongs.
        /// </remarks>
        [JsiiProperty(name: "namespaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NamespaceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosK8sCluster`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-k8scluster
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosK8sClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-edas.RosK8sClusterProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.IRosK8sClusterProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: csClusterId: The ID of the CS cluster.
            /// </remarks>
            [JsiiProperty(name: "csClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CsClusterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: enableAsm: Whether enable ASM.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableAsm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableAsm
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: namespaceId: The ID of the namespace to which the cluster that you want to import belongs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "namespaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NamespaceId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
