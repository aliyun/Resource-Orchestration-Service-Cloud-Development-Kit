using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::ECS::HpcClusters`.</summary>
    [JsiiInterface(nativeType: typeof(IHpcClustersProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.HpcClustersProps")]
    public interface IHpcClustersProps
    {
        /// <summary>Property hpcClusterIds: The IDs of the HPC clusters.</summary>
        /// <remarks>
        /// You can specify up to 100 HPC cluster IDs.
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

        /// <summary>Properties for defining a `DATASOURCE::ECS::HpcClusters`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IHpcClustersProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.HpcClustersProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IHpcClustersProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property hpcClusterIds: The IDs of the HPC clusters.</summary>
            /// <remarks>
            /// You can specify up to 100 HPC cluster IDs.
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
