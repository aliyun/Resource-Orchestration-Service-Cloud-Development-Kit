using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb
{
    /// <summary>Properties for defining a `RosMasterSlaveServerGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-masterslaveservergroup
    /// </remarks>
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
        /// <strong>Property</strong>: masterSlaveBackendServers: The backend servers in the primary\/secondary server group. Each primary\/secondary
        /// server group consists of two backend servers.
        /// Configure the following parameters:
        /// - ServerId: required. The IDs of the backend servers. Specify the IDs in a
        /// string. You can specify the IDs of Elastic Compute Service (ECS) instances,
        /// elastic network interfaces (ENIs), and elastic container instances. If you set
        /// ServerId to the IDs of ENIs or elastic container instances, you must configure
        /// the Type parameter.
        /// - Weight: the weight of the backend server. Valid values: 0 to 100. Default
        /// value: 100. If you set the weight of a backend server to 0, no requests are
        /// forwarded to the backend server.
        /// - Description: optional. The description of the backend servers. Specify the
        /// description in a string. The description must be 1 to 80 characters in length,
        /// and can contain letters, digits, hyphens (-), forward slashes (\/). periods (.),
        /// and underscores (_).
        /// - Type: the type of the backend server. Valid values:
        /// - ecs (default): ECS instance
        /// - eni: ENI
        /// - eci: elastic container instance
        /// > You can specify ENIs and elastic container instances as backend servers only
        /// for high-performance CLB instances.
        /// - ServerIp: the IP address of the ENI or elastic container instance.
        /// - Port: the backend port.
        /// - ServerType: Specify the primary and secondary backend servers in a string.
        /// Valid values:
        /// - Master: primary server
        /// - Slave: secondary server
        /// </remarks>
        [JsiiProperty(name: "masterSlaveBackendServers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-slb.RosMasterSlaveServerGroup.MasterSlaveBackendServersProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object MasterSlaveBackendServers
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: masterSlaveServerGroupName: The name of the active\/standby server group.
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

        /// <summary>Properties for defining a `RosMasterSlaveServerGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-masterslaveservergroup
        /// </remarks>
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
            /// <strong>Property</strong>: masterSlaveBackendServers: The backend servers in the primary\/secondary server group. Each primary\/secondary
            /// server group consists of two backend servers.
            /// Configure the following parameters:
            /// - ServerId: required. The IDs of the backend servers. Specify the IDs in a
            /// string. You can specify the IDs of Elastic Compute Service (ECS) instances,
            /// elastic network interfaces (ENIs), and elastic container instances. If you set
            /// ServerId to the IDs of ENIs or elastic container instances, you must configure
            /// the Type parameter.
            /// - Weight: the weight of the backend server. Valid values: 0 to 100. Default
            /// value: 100. If you set the weight of a backend server to 0, no requests are
            /// forwarded to the backend server.
            /// - Description: optional. The description of the backend servers. Specify the
            /// description in a string. The description must be 1 to 80 characters in length,
            /// and can contain letters, digits, hyphens (-), forward slashes (\/). periods (.),
            /// and underscores (_).
            /// - Type: the type of the backend server. Valid values:
            /// - ecs (default): ECS instance
            /// - eni: ENI
            /// - eci: elastic container instance
            /// > You can specify ENIs and elastic container instances as backend servers only
            /// for high-performance CLB instances.
            /// - ServerIp: the IP address of the ENI or elastic container instance.
            /// - Port: the backend port.
            /// - ServerType: Specify the primary and secondary backend servers in a string.
            /// Valid values:
            /// - Master: primary server
            /// - Slave: secondary server
            /// </remarks>
            [JsiiProperty(name: "masterSlaveBackendServers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-slb.RosMasterSlaveServerGroup.MasterSlaveBackendServersProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object MasterSlaveBackendServers
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: masterSlaveServerGroupName: The name of the active\/standby server group.
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
