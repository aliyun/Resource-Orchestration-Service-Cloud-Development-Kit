using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cs.Datasource
{
    /// <summary>Properties for defining a `RosKubernetesCluster`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-kubernetescluster
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosKubernetesClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-cs.datasource.RosKubernetesClusterProps")]
    public interface IRosKubernetesClusterProps
    {
        /// <remarks>
        /// <strong>Property</strong>: clusterId: Cluster instance ID.
        /// </remarks>
        [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ClusterId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosKubernetesCluster`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-kubernetescluster
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosKubernetesClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-cs.datasource.RosKubernetesClusterProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cs.Datasource.IRosKubernetesClusterProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: clusterId: Cluster instance ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ClusterId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
