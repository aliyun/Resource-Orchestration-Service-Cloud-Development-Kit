using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Properties for defining a `HpcCluster`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-hpccluster
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IHpcClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.HpcClusterProps")]
    public interface IHpcClusterProps
    {
        /// <summary>Property hpcClusterId: The ID of cluster.</summary>
        [JsiiProperty(name: "hpcClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object HpcClusterId
        {
            get;
        }

        /// <summary>Properties for defining a `HpcCluster`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-hpccluster
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IHpcClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.HpcClusterProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IHpcClusterProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property hpcClusterId: The ID of cluster.</summary>
            [JsiiProperty(name: "hpcClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object HpcClusterId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
