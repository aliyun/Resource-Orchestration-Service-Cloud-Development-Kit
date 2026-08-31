using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `MasterSlaveServerGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-masterslaveservergroup
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-slb.MasterSlaveServerGroupProps")]
    public class MasterSlaveServerGroupProps : AlibabaCloud.SDK.ROS.CDK.Slb.IMasterSlaveServerGroupProps
    {
        private object _loadBalancerId;

        /// <summary>Property loadBalancerId: The ID of the Server Load Balancer instance.</summary>
        [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object LoadBalancerId
        {
            get => _loadBalancerId;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _loadBalancerId = value;
            }
        }

        private object _masterSlaveBackendServers;

        /// <summary>Property masterSlaveBackendServers: The backend servers in the primary\/secondary server group.</summary>
        /// <remarks>
        /// Each primary/secondary
        /// server group consists of two backend servers.
        /// Configure the following parameters:
        ///
        /// <list type="bullet">
        /// <description>ServerId: required. The IDs of the backend servers. Specify the IDs in a
        /// string. You can specify the IDs of Elastic Compute Service (ECS) instances,
        /// elastic network interfaces (ENIs), and elastic container instances. If you set
        /// ServerId to the IDs of ENIs or elastic container instances, you must configure
        /// the Type parameter.</description>
        /// <description>Weight: the weight of the backend server. Valid values: 0 to 100. Default
        /// value: 100. If you set the weight of a backend server to 0, no requests are
        /// forwarded to the backend server.</description>
        /// <description>Description: optional. The description of the backend servers. Specify the
        /// description in a string. The description must be 1 to 80 characters in length,
        /// and can contain letters, digits, hyphens (-), forward slashes (/). periods (.),
        /// and underscores (_).</description>
        /// <description>Type: the type of the backend server. Valid values:</description>
        /// <description>ecs (default): ECS instance</description>
        /// <description>eni: ENI</description>
        /// <description>eci: elastic container instance</description>
        /// </list>
        ///
        ///     You can specify ENIs and elastic container instances as backend servers only
        ///     for high-performance CLB instances.
        ///
        /// <list type="bullet">
        /// <description>ServerIp: the IP address of the ENI or elastic container instance.</description>
        /// <description>Port: the backend port.</description>
        /// <description>ServerType: Specify the primary and secondary backend servers in a string.
        /// Valid values:</description>
        /// <description>Master: primary server</description>
        /// <description>Slave: secondary server</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "masterSlaveBackendServers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-slb.RosMasterSlaveServerGroup.MasterSlaveBackendServersProperty\"}]}},\"kind\":\"array\"}}]}}")]
        public object MasterSlaveBackendServers
        {
            get => _masterSlaveBackendServers;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case object[] cast_cd4240:
                            for (var __idx_f64a5c = 0 ; __idx_f64a5c < cast_cd4240.Length ; __idx_f64a5c++)
                            {
                                switch (cast_cd4240[__idx_f64a5c])
                                {
                                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_201718:
                                        break;
                                    case AlibabaCloud.SDK.ROS.CDK.Slb.RosMasterSlaveServerGroup.IMasterSlaveBackendServersProperty cast_201718:
                                        break;
                                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                        // Not enough information to type-check...
                                        break;
                                    case null:
                                        throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Slb.RosMasterSlaveServerGroup.IMasterSlaveBackendServersProperty).FullName}; received null", nameof(value));
                                    default:
                                        throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, {typeof(AlibabaCloud.SDK.ROS.CDK.Slb.RosMasterSlaveServerGroup.IMasterSlaveBackendServersProperty).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
                                }
                            }
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, object[]; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, object[]; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _masterSlaveBackendServers = value;
            }
        }

        private object? _masterSlaveServerGroupName;

        /// <summary>Property masterSlaveServerGroupName: The name of the active\/standby server group.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "masterSlaveServerGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? MasterSlaveServerGroupName
        {
            get => _masterSlaveServerGroupName;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _masterSlaveServerGroupName = value;
            }
        }
    }
}
