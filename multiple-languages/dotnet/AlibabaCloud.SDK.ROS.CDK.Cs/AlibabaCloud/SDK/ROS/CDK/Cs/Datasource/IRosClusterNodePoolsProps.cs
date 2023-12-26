using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cs.Datasource
{
    /// <summary>Properties for defining a `RosClusterNodePools`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-clusternodepools
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosClusterNodePoolsProps), fullyQualifiedName: "@alicloud/ros-cdk-cs.datasource.RosClusterNodePoolsProps")]
    public interface IRosClusterNodePoolsProps
    {
        /// <remarks>
        /// <strong>Property</strong>: clusterId: Cluster ID.
        /// </remarks>
        [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ClusterId
        {
            get;
        }

        /// <summary>Properties for defining a `RosClusterNodePools`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-clusternodepools
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosClusterNodePoolsProps), fullyQualifiedName: "@alicloud/ros-cdk-cs.datasource.RosClusterNodePoolsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cs.Datasource.IRosClusterNodePoolsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: clusterId: Cluster ID.
            /// </remarks>
            [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ClusterId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
