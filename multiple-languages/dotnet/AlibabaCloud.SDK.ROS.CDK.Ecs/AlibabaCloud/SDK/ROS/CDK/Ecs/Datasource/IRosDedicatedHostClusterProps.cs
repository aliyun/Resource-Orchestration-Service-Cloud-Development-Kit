using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Properties for defining a `RosDedicatedHostCluster`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-dedicatedhostcluster
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosDedicatedHostClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.RosDedicatedHostClusterProps")]
    public interface IRosDedicatedHostClusterProps
    {
        /// <remarks>
        /// <strong>Property</strong>: dedicatedHostClusterId: Dedicated host cluster id.
        /// </remarks>
        [JsiiProperty(name: "dedicatedHostClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DedicatedHostClusterId
        {
            get;
        }

        /// <summary>Properties for defining a `RosDedicatedHostCluster`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-dedicatedhostcluster
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosDedicatedHostClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.RosDedicatedHostClusterProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IRosDedicatedHostClusterProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: dedicatedHostClusterId: Dedicated host cluster id.
            /// </remarks>
            [JsiiProperty(name: "dedicatedHostClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DedicatedHostClusterId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
