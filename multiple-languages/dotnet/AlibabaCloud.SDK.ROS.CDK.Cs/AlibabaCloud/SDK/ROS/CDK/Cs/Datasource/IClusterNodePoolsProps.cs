using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cs.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::CS::ClusterNodePools`.</summary>
    [JsiiInterface(nativeType: typeof(IClusterNodePoolsProps), fullyQualifiedName: "@alicloud/ros-cdk-cs.datasource.ClusterNodePoolsProps")]
    public interface IClusterNodePoolsProps
    {
        /// <summary>Property clusterId: Cluster ID.</summary>
        [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ClusterId
        {
            get;
        }

        /// <summary>Properties for defining a `DATASOURCE::CS::ClusterNodePools`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IClusterNodePoolsProps), fullyQualifiedName: "@alicloud/ros-cdk-cs.datasource.ClusterNodePoolsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cs.Datasource.IClusterNodePoolsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property clusterId: Cluster ID.</summary>
            [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ClusterId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
