using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Properties for defining a `RosHpcClusters`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-hpcclusters
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosHpcClustersProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.RosHpcClustersProps")]
    public interface IRosHpcClustersProps
    {
        /// <remarks>
        /// <strong>Property</strong>: hpcClusterIds: The IDs of the HPC clusters. You can specify up to 100 HPC cluster IDs.
        /// </remarks>
        [JsiiProperty(name: "hpcClusterIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HpcClusterIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosHpcClusters`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-hpcclusters
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosHpcClustersProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.RosHpcClustersProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IRosHpcClustersProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: hpcClusterIds: The IDs of the HPC clusters. You can specify up to 100 HPC cluster IDs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "hpcClusterIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? HpcClusterIds
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
