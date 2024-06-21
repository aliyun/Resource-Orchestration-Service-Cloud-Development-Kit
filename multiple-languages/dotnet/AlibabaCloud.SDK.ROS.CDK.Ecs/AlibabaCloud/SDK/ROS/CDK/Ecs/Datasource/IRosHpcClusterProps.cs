using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Properties for defining a `RosHpcCluster`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-hpccluster
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosHpcClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.RosHpcClusterProps")]
    public interface IRosHpcClusterProps
    {
        /// <remarks>
        /// <strong>Property</strong>: hpcClusterId: The ID of cluster.
        /// </remarks>
        [JsiiProperty(name: "hpcClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object HpcClusterId
        {
            get;
        }

        /// <summary>Properties for defining a `RosHpcCluster`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-hpccluster
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosHpcClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.RosHpcClusterProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IRosHpcClusterProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: hpcClusterId: The ID of cluster.
            /// </remarks>
            [JsiiProperty(name: "hpcClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object HpcClusterId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
