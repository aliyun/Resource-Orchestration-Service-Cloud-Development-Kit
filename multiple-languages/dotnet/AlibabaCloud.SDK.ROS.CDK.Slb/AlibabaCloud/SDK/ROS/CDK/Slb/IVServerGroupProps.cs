using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb
{
    /// <summary>Properties for defining a `ALIYUN::SLB::VServerGroup`.</summary>
    [JsiiInterface(nativeType: typeof(IVServerGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.VServerGroupProps")]
    public interface IVServerGroupProps
    {
        /// <summary>Property loadBalancerId: The id of load balancer.</summary>
        [JsiiProperty(name: "loadBalancerId", typeJson: "{\"primitive\":\"string\"}")]
        string LoadBalancerId
        {
            get;
        }

        /// <summary>Property vServerGroupName: Display name of the VServerGroup.</summary>
        [JsiiProperty(name: "vServerGroupName", typeJson: "{\"primitive\":\"string\"}")]
        string VServerGroupName
        {
            get;
        }

        /// <summary>Property backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.</summary>
        [JsiiProperty(name: "backendServers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-slb.RosVServerGroup.BackendServersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BackendServers
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::SLB::VServerGroup`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IVServerGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.VServerGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Slb.IVServerGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property loadBalancerId: The id of load balancer.</summary>
            [JsiiProperty(name: "loadBalancerId", typeJson: "{\"primitive\":\"string\"}")]
            public string LoadBalancerId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property vServerGroupName: Display name of the VServerGroup.</summary>
            [JsiiProperty(name: "vServerGroupName", typeJson: "{\"primitive\":\"string\"}")]
            public string VServerGroupName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "backendServers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-slb.RosVServerGroup.BackendServersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? BackendServers
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
