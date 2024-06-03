using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Properties for defining a `DedicatedHostCluster`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-dedicatedhostcluster
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDedicatedHostClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.DedicatedHostClusterProps")]
    public interface IDedicatedHostClusterProps
    {
        /// <summary>Property dedicatedHostClusterId: Dedicated host cluster id.</summary>
        [JsiiProperty(name: "dedicatedHostClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DedicatedHostClusterId
        {
            get;
        }

        /// <summary>Properties for defining a `DedicatedHostCluster`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-dedicatedhostcluster
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDedicatedHostClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.DedicatedHostClusterProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IDedicatedHostClusterProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property dedicatedHostClusterId: Dedicated host cluster id.</summary>
            [JsiiProperty(name: "dedicatedHostClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DedicatedHostClusterId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
