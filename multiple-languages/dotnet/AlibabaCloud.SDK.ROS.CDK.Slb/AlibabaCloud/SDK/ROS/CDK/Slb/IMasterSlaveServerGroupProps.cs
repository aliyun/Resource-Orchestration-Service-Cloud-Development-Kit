using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb
{
    /// <summary>Properties for defining a `MasterSlaveServerGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-masterslaveservergroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IMasterSlaveServerGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.MasterSlaveServerGroupProps")]
    public interface IMasterSlaveServerGroupProps
    {
        /// <summary>Property loadBalancerId: The ID of the Server Load Balancer instance.</summary>
        [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LoadBalancerId
        {
            get;
        }

        /// <summary>Property masterSlaveBackendServers: A list of active\/standby server group.</summary>
        /// <remarks>
        /// An active/standby server group can only contain two backend servers.
        /// </remarks>
        [JsiiProperty(name: "masterSlaveBackendServers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-slb.RosMasterSlaveServerGroup.MasterSlaveBackendServersProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object MasterSlaveBackendServers
        {
            get;
        }

        /// <summary>Property masterSlaveServerGroupName: The name of the active\/standby server group.</summary>
        [JsiiProperty(name: "masterSlaveServerGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MasterSlaveServerGroupName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `MasterSlaveServerGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-masterslaveservergroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IMasterSlaveServerGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.MasterSlaveServerGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Slb.IMasterSlaveServerGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property loadBalancerId: The ID of the Server Load Balancer instance.</summary>
            [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LoadBalancerId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property masterSlaveBackendServers: A list of active\/standby server group.</summary>
            /// <remarks>
            /// An active/standby server group can only contain two backend servers.
            /// </remarks>
            [JsiiProperty(name: "masterSlaveBackendServers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-slb.RosMasterSlaveServerGroup.MasterSlaveBackendServersProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object MasterSlaveBackendServers
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property masterSlaveServerGroupName: The name of the active\/standby server group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "masterSlaveServerGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MasterSlaveServerGroupName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
