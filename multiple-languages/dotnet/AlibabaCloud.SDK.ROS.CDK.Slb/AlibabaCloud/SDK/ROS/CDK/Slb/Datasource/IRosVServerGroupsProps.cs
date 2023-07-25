using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::SLB::VServerGroups`.</summary>
    [JsiiInterface(nativeType: typeof(IRosVServerGroupsProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.datasource.RosVServerGroupsProps")]
    public interface IRosVServerGroupsProps
    {
        /// <remarks>
        /// <strong>Property</strong>: loadBalancerId: The ID of the CLB instance.
        /// </remarks>
        [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LoadBalancerId
        {
            get;
        }

        /// <summary>Properties for defining a `DATASOURCE::SLB::VServerGroups`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosVServerGroupsProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.datasource.RosVServerGroupsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Slb.Datasource.IRosVServerGroupsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: loadBalancerId: The ID of the CLB instance.
            /// </remarks>
            [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LoadBalancerId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
