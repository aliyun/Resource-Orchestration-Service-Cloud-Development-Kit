using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cs.Datasource
{
    /// <summary>Properties for defining a `KubernetesCluster`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-kubernetescluster
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IKubernetesClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-cs.datasource.KubernetesClusterProps")]
    public interface IKubernetesClusterProps
    {
        /// <summary>Property clusterId: Cluster instance ID.</summary>
        [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ClusterId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `KubernetesCluster`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-kubernetescluster
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IKubernetesClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-cs.datasource.KubernetesClusterProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cs.Datasource.IKubernetesClusterProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property clusterId: Cluster instance ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ClusterId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
