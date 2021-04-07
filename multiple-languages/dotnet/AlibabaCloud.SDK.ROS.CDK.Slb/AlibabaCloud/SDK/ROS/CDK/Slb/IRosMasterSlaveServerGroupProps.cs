using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb
{
    /// <summary>Properties for defining a `ALIYUN::SLB::MasterSlaveServerGroup`.</summary>
    [JsiiInterface(nativeType: typeof(IRosMasterSlaveServerGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.RosMasterSlaveServerGroupProps")]
    public interface IRosMasterSlaveServerGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: loadBalancerId: The ID of the Server Load Balancer instance.
        /// </remarks>
        [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LoadBalancerId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: masterSlaveBackendServers: A list of active/standby server group.
        /// An active/standby server group can only contain two backend servers.
        /// </remarks>
        [JsiiProperty(name: "masterSlaveBackendServers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-slb.RosMasterSlaveServerGroup.MasterSlaveBackendServersProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object MasterSlaveBackendServers
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: masterSlaveServerGroupName: The name of the active/standby server group.
        /// </remarks>
        [JsiiProperty(name: "masterSlaveServerGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MasterSlaveServerGroupName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::SLB::MasterSlaveServerGroup`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosMasterSlaveServerGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.RosMasterSlaveServerGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Slb.IRosMasterSlaveServerGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: loadBalancerId: The ID of the Server Load Balancer instance.
            /// </remarks>
            [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LoadBalancerId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: masterSlaveBackendServers: A list of active/standby server group.
            /// An active/standby server group can only contain two backend servers.
            /// </remarks>
            [JsiiProperty(name: "masterSlaveBackendServers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-slb.RosMasterSlaveServerGroup.MasterSlaveBackendServersProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object MasterSlaveBackendServers
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: masterSlaveServerGroupName: The name of the active/standby server group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "masterSlaveServerGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MasterSlaveServerGroupName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
