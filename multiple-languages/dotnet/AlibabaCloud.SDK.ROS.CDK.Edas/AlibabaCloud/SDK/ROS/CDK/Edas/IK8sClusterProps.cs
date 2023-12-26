using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Edas
{
    /// <summary>Properties for defining a `K8sCluster`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-k8scluster
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IK8sClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-edas.K8sClusterProps")]
    public interface IK8sClusterProps
    {
        /// <summary>Property csClusterId: The ID of the CS cluster.</summary>
        [JsiiProperty(name: "csClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CsClusterId
        {
            get;
        }

        /// <summary>Property enableAsm: Whether enable ASM.</summary>
        [JsiiProperty(name: "enableAsm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableAsm
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property namespaceId: The ID of the namespace to which the cluster that you want to import belongs.</summary>
        [JsiiProperty(name: "namespaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NamespaceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `K8sCluster`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-k8scluster
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IK8sClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-edas.K8sClusterProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.IK8sClusterProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property csClusterId: The ID of the CS cluster.</summary>
            [JsiiProperty(name: "csClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CsClusterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property enableAsm: Whether enable ASM.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "enableAsm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableAsm
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property namespaceId: The ID of the namespace to which the cluster that you want to import belongs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "namespaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NamespaceId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
