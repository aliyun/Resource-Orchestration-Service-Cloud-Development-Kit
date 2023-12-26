using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb
{
    /// <summary>Properties for defining a `RosVServerGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-vservergroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosVServerGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.RosVServerGroupProps")]
    public interface IRosVServerGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: loadBalancerId: The id of load balancer.
        /// </remarks>
        [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LoadBalancerId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: vServerGroupName: Display name of the VServerGroup.
        /// </remarks>
        [JsiiProperty(name: "vServerGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VServerGroupName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.
        /// </remarks>
        [JsiiProperty(name: "backendServers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-slb.RosVServerGroup.BackendServersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BackendServers
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosVServerGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-vservergroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosVServerGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.RosVServerGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Slb.IRosVServerGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: loadBalancerId: The id of load balancer.
            /// </remarks>
            [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LoadBalancerId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: vServerGroupName: Display name of the VServerGroup.
            /// </remarks>
            [JsiiProperty(name: "vServerGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VServerGroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "backendServers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-slb.RosVServerGroup.BackendServersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? BackendServers
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
