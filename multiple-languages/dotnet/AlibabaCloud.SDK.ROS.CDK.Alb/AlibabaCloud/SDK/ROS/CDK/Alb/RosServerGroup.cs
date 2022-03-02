using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Alb
{
    /// <summary>A ROS template type:  `ALIYUN::ALB::ServerGroup`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Alb.RosServerGroup), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosServerGroup", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-alb.RosServerGroupProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosServerGroup : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::ALB::ServerGroup`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosServerGroup(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Alb.IRosServerGroupProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosServerGroup(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosServerGroup(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "renderProperties", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}", parametersJson: "[{\"name\":\"props\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]")]
        protected override System.Collections.Generic.IDictionary<string, object> RenderProperties(System.Collections.Generic.IDictionary<string, object> props)
        {
            return InvokeInstanceMethod<System.Collections.Generic.IDictionary<string, object>>(new System.Type[]{typeof(System.Collections.Generic.IDictionary<string, object>)}, new object[]{props})!;
        }

        /// <summary>The resource type name for this resource class.</summary>
        [JsiiProperty(name: "ROS_RESOURCE_TYPE_NAME", typeJson: "{\"primitive\":\"string\"}")]
        public static string ROS_RESOURCE_TYPE_NAME
        {
            get;
        }
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Alb.RosServerGroup))!;

        /// <remarks>
        /// <strong>Attribute</strong>: ServerGroupId: The ID of the server group.
        /// </remarks>
        [JsiiProperty(name: "attrServerGroupId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrServerGroupId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: healthCheckConfig: The configuration of health checks.
        /// </remarks>
        [JsiiProperty(name: "healthCheckConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosServerGroup.HealthCheckConfigProperty\"}]}}")]
        public virtual object HealthCheckConfig
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: serverGroupName: The name of the server group. The name must be 2 to 128 characters in length, and
        /// can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name
        /// must start with a letter.
        /// </remarks>
        [JsiiProperty(name: "serverGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object ServerGroupName
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: The ID of the virtual private cloud (VPC). You can add only servers that are deployed
        /// in the specified VPC to the server group.
        /// Note This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object VpcId
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: protocol: The server protocol. Valid values:
        /// HTTP: allows you to associate HTTPS, HTTP, or QUIC listeners with backend servers. This
        /// is the default value.
        /// HTTPS: allows you to associate HTTPS listeners with backend servers.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "protocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Protocol
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: The ID of the resource group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? ResourceGroupId
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: scheduler: The scheduling algorithm. Valid values:
        /// Wrr: Backend servers that have higher weights receive more requests than those that have
        /// lower weights. This is the default value.
        /// Wlc: Requests are distributed based on the weight and load of each backend server. The
        /// load refers to the number of connections to a backend server. If multiple backend
        /// servers have the same weight, requests are routed to the backend server with the least
        /// connections.
        /// Sch: specifies consistent hashing that is based on source IP addresses.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "scheduler", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Scheduler
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: serverGroupType: The type of the server group. Valid values:
        /// Instance: a server group that consists of servers. You can add Elastic Compute Service (ECS)
        /// instances, elastic network interfaces (ENIs), and elastic container instances to this
        /// type of server group. This is the default value.
        /// Ip: a server group that consists of IP addresses. You can add IP addresses to this type
        /// of server group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "serverGroupType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? ServerGroupType
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: stickySessionConfig: The configuration of session persistence.
        /// Note This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "stickySessionConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosServerGroup.StickySessionConfigProperty\"}]}}", isOptional: true)]
        public virtual object? StickySessionConfig
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IHealthCheckConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosServerGroup.HealthCheckConfigProperty")]
        public interface IHealthCheckConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: healthCheckEnabled: Specifies whether to enable the health check feature. Valid values:
            /// true: enables the feature.
            /// false: disables the feature.
            /// </remarks>
            [JsiiProperty(name: "healthCheckEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object HealthCheckEnabled
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: healthCheckCodes: The HTTP status code that indicates a successful health check. Multiple HTTP status
            /// codes can be specified as a list.
            /// Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
            /// Valid values: http_2xx, http_3xx, http_4xx, and http_5xx. Default value: http_2xx.
            /// </remarks>
            [JsiiProperty(name: "healthCheckCodes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? HealthCheckCodes
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: healthCheckConnectPort: The backend port that is used for health checks.
            /// Valid values: 0 to 65535.
            /// Default value: 0. This value indicates that the port on a backend server is used for health checks.
            /// </remarks>
            [JsiiProperty(name: "healthCheckConnectPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? HealthCheckConnectPort
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: healthCheckHost: The domain name that is used for health checks. The domain name must meet the following
            /// requirements:
            /// The domain name must be 1 to 80 characters in length.
            /// The domain name can contain lowercase letters, digits, hyphens (-), and periods (.).
            /// The domain name must contain at least one period (.),and cannot start or end with
            /// a period (.).
            /// The rightmost field can contain only letters, and cannot contain digits or hyphens
            /// (-).
            /// Other fields cannot start or end with a hyphen (-).
            /// Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
            /// </remarks>
            [JsiiProperty(name: "healthCheckHost", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? HealthCheckHost
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: healthCheckHttpVersion: The version of the HTTP protocol. Valid values: HTTP1.0 and HTTP1.1. Default value: HTTP1.1.
            /// Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
            /// </remarks>
            [JsiiProperty(name: "healthCheckHttpVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? HealthCheckHttpVersion
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: healthCheckInterval: The time interval between two consecutive health checks. Unit: seconds.
            /// Valid values: 1 to 50.
            /// Default value: 2.
            /// </remarks>
            [JsiiProperty(name: "healthCheckInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? HealthCheckInterval
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: healthCheckMethod: The HTTP method that is used for health checks. Valid values: GET and HEAD. Default value: HEAD.
            /// </remarks>
            [JsiiProperty(name: "healthCheckMethod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? HealthCheckMethod
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong></strong>: $ ^ : ' , +.
            /// The URL must start with a forward slash (/).
            /// Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
            ///
            /// <strong>Property</strong>: healthCheckPath: The URL that is used for health checks.
            /// The URL must be 1 to 80 characters in length, and can contain letters, digits, and
            /// the following special characters:
            /// - / .% ?# & =.
            /// It can also contain the following extended characters:
            /// _ ; ~ ! ( )* [ ]
            /// </remarks>
            [JsiiProperty(name: "healthCheckPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? HealthCheckPath
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: healthCheckProtocol: The protocol that is used for health checks. Valid values: HTTP and HTTPS.
            /// </remarks>
            [JsiiProperty(name: "healthCheckProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? HealthCheckProtocol
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: healthCheckTimeout: The timeout period of a health check. If a backend server does not respond within
            /// the specified timeout period, the backend server fails the health check. Unit: seconds.
            /// Valid values: 1 to 300.
            /// Default value: 5.
            /// Note If the value of the HealthCheckTimeout parameter is smaller than that of the HealthCheckInterval parameter, the timeout period specified by the HealthCheckTimeout parameter is ignored and the period of time specified by the HealthCheckInterval parameter is used as the timeout period.
            /// </remarks>
            [JsiiProperty(name: "healthCheckTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? HealthCheckTimeout
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: healthyThreshold: The number of health checks that an unhealthy backend server must consecutively pass
            /// before it is declared healthy. In this case, the health status is changed from fail to success.
            /// Valid values: 2 to 10.
            /// Default value: 3.
            /// </remarks>
            [JsiiProperty(name: "healthyThreshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? HealthyThreshold
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: unhealthyThreshold: The number of health checks that a healthy backend server must consecutively fail
            /// before it is declared unhealthy. In this case, the health status is changed from success to fail.
            /// Valid values: 2 to 10.
            /// Default value: 3.
            /// </remarks>
            [JsiiProperty(name: "unhealthyThreshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? UnhealthyThreshold
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IHealthCheckConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosServerGroup.HealthCheckConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.RosServerGroup.IHealthCheckConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: healthCheckEnabled: Specifies whether to enable the health check feature. Valid values:
                /// true: enables the feature.
                /// false: disables the feature.
                /// </remarks>
                [JsiiProperty(name: "healthCheckEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object HealthCheckEnabled
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: healthCheckCodes: The HTTP status code that indicates a successful health check. Multiple HTTP status
                /// codes can be specified as a list.
                /// Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
                /// Valid values: http_2xx, http_3xx, http_4xx, and http_5xx. Default value: http_2xx.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "healthCheckCodes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? HealthCheckCodes
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: healthCheckConnectPort: The backend port that is used for health checks.
                /// Valid values: 0 to 65535.
                /// Default value: 0. This value indicates that the port on a backend server is used for health checks.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "healthCheckConnectPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? HealthCheckConnectPort
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: healthCheckHost: The domain name that is used for health checks. The domain name must meet the following
                /// requirements:
                /// The domain name must be 1 to 80 characters in length.
                /// The domain name can contain lowercase letters, digits, hyphens (-), and periods (.).
                /// The domain name must contain at least one period (.),and cannot start or end with
                /// a period (.).
                /// The rightmost field can contain only letters, and cannot contain digits or hyphens
                /// (-).
                /// Other fields cannot start or end with a hyphen (-).
                /// Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "healthCheckHost", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? HealthCheckHost
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: healthCheckHttpVersion: The version of the HTTP protocol. Valid values: HTTP1.0 and HTTP1.1. Default value: HTTP1.1.
                /// Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "healthCheckHttpVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? HealthCheckHttpVersion
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: healthCheckInterval: The time interval between two consecutive health checks. Unit: seconds.
                /// Valid values: 1 to 50.
                /// Default value: 2.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "healthCheckInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? HealthCheckInterval
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: healthCheckMethod: The HTTP method that is used for health checks. Valid values: GET and HEAD. Default value: HEAD.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "healthCheckMethod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? HealthCheckMethod
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong></strong>: $ ^ : ' , +.
                /// The URL must start with a forward slash (/).
                /// Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
                ///
                /// <strong>Property</strong>: healthCheckPath: The URL that is used for health checks.
                /// The URL must be 1 to 80 characters in length, and can contain letters, digits, and
                /// the following special characters:
                /// - / .% ?# & =.
                /// It can also contain the following extended characters:
                /// _ ; ~ ! ( )* [ ]
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "healthCheckPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? HealthCheckPath
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: healthCheckProtocol: The protocol that is used for health checks. Valid values: HTTP and HTTPS.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "healthCheckProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? HealthCheckProtocol
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: healthCheckTimeout: The timeout period of a health check. If a backend server does not respond within
                /// the specified timeout period, the backend server fails the health check. Unit: seconds.
                /// Valid values: 1 to 300.
                /// Default value: 5.
                /// Note If the value of the HealthCheckTimeout parameter is smaller than that of the HealthCheckInterval parameter, the timeout period specified by the HealthCheckTimeout parameter is ignored and the period of time specified by the HealthCheckInterval parameter is used as the timeout period.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "healthCheckTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? HealthCheckTimeout
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: healthyThreshold: The number of health checks that an unhealthy backend server must consecutively pass
                /// before it is declared healthy. In this case, the health status is changed from fail to success.
                /// Valid values: 2 to 10.
                /// Default value: 3.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "healthyThreshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? HealthyThreshold
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: unhealthyThreshold: The number of health checks that a healthy backend server must consecutively fail
                /// before it is declared unhealthy. In this case, the health status is changed from success to fail.
                /// Valid values: 2 to 10.
                /// Default value: 3.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "unhealthyThreshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? UnhealthyThreshold
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-alb.RosServerGroup.HealthCheckConfigProperty")]
        public class HealthCheckConfigProperty : AlibabaCloud.SDK.ROS.CDK.Alb.RosServerGroup.IHealthCheckConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: healthCheckEnabled: Specifies whether to enable the health check feature. Valid values:
            /// true: enables the feature.
            /// false: disables the feature.
            /// </remarks>
            [JsiiProperty(name: "healthCheckEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object HealthCheckEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: healthCheckCodes: The HTTP status code that indicates a successful health check. Multiple HTTP status
            /// codes can be specified as a list.
            /// Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
            /// Valid values: http_2xx, http_3xx, http_4xx, and http_5xx. Default value: http_2xx.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckCodes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? HealthCheckCodes
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: healthCheckConnectPort: The backend port that is used for health checks.
            /// Valid values: 0 to 65535.
            /// Default value: 0. This value indicates that the port on a backend server is used for health checks.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckConnectPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HealthCheckConnectPort
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: healthCheckHost: The domain name that is used for health checks. The domain name must meet the following
            /// requirements:
            /// The domain name must be 1 to 80 characters in length.
            /// The domain name can contain lowercase letters, digits, hyphens (-), and periods (.).
            /// The domain name must contain at least one period (.),and cannot start or end with
            /// a period (.).
            /// The rightmost field can contain only letters, and cannot contain digits or hyphens
            /// (-).
            /// Other fields cannot start or end with a hyphen (-).
            /// Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckHost", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HealthCheckHost
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: healthCheckHttpVersion: The version of the HTTP protocol. Valid values: HTTP1.0 and HTTP1.1. Default value: HTTP1.1.
            /// Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckHttpVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HealthCheckHttpVersion
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: healthCheckInterval: The time interval between two consecutive health checks. Unit: seconds.
            /// Valid values: 1 to 50.
            /// Default value: 2.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HealthCheckInterval
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: healthCheckMethod: The HTTP method that is used for health checks. Valid values: GET and HEAD. Default value: HEAD.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckMethod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HealthCheckMethod
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong></strong>: $ ^ : ' , +.
            /// The URL must start with a forward slash (/).
            /// Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
            ///
            /// <strong>Property</strong>: healthCheckPath: The URL that is used for health checks.
            /// The URL must be 1 to 80 characters in length, and can contain letters, digits, and
            /// the following special characters:
            /// - / .% ?# & =.
            /// It can also contain the following extended characters:
            /// _ ; ~ ! ( )* [ ]
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HealthCheckPath
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: healthCheckProtocol: The protocol that is used for health checks. Valid values: HTTP and HTTPS.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HealthCheckProtocol
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: healthCheckTimeout: The timeout period of a health check. If a backend server does not respond within
            /// the specified timeout period, the backend server fails the health check. Unit: seconds.
            /// Valid values: 1 to 300.
            /// Default value: 5.
            /// Note If the value of the HealthCheckTimeout parameter is smaller than that of the HealthCheckInterval parameter, the timeout period specified by the HealthCheckTimeout parameter is ignored and the period of time specified by the HealthCheckInterval parameter is used as the timeout period.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HealthCheckTimeout
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: healthyThreshold: The number of health checks that an unhealthy backend server must consecutively pass
            /// before it is declared healthy. In this case, the health status is changed from fail to success.
            /// Valid values: 2 to 10.
            /// Default value: 3.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthyThreshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HealthyThreshold
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: unhealthyThreshold: The number of health checks that a healthy backend server must consecutively fail
            /// before it is declared unhealthy. In this case, the health status is changed from success to fail.
            /// Valid values: 2 to 10.
            /// Default value: 3.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "unhealthyThreshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UnhealthyThreshold
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IStickySessionConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosServerGroup.StickySessionConfigProperty")]
        public interface IStickySessionConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: cookie: The cookie to be configured on the backend server.
            /// The cookie must be 1 to 200 characters in length, and can contain ASCII characters
            /// and digits. It cannot contain commas (,), semicolons (;), or spaces. It cannot start
            /// with a dollar sign ($).
            /// Note This parameter is required if the StickySessionEnabled parameter is set to true and the StickySessionType parameter is set to Server.
            /// </remarks>
            [JsiiProperty(name: "cookie", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Cookie
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: cookieTimeout: The timeout period of the cookie. Unit: seconds.
            /// Valid values: 1 to 86400.
            /// Default value: 1000.
            /// Note This parameter is required if the StickySessionEnabled parameter is set to true and the StickySessionType parameter is set to Insert.
            /// </remarks>
            [JsiiProperty(name: "cookieTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? CookieTimeout
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: stickySessionEnabled: Specifies whether to enable session persistence. Valid values: true and false.
            /// Note This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
            /// </remarks>
            [JsiiProperty(name: "stickySessionEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? StickySessionEnabled
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: stickySessionType: The method that is used to handle a cookie. Valid values:
            /// Insert : inserts a cookie. This is the default value.
            /// Application Load Balancer (ALB) inserts the server ID as a cookie into the first HTTP
            /// or HTTPS response that is sent to a client. The next request from the client will
            /// contain this cookie, and the listener will distribute this request to the recorded
            /// backend server.
            /// Server: rewrites a cookie.
            /// When ALB detects a user-defined cookie, it uses the user-defined cookie to rewrite
            /// the original cookie. The next request from the client will contain the user-defined
            /// cookie, and the listener will distribute this request to the recorded backend server.
            /// Note This parameter is required if the StickySessionEnabled parameter is set to true.
            /// </remarks>
            [JsiiProperty(name: "stickySessionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? StickySessionType
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IStickySessionConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosServerGroup.StickySessionConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.RosServerGroup.IStickySessionConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: cookie: The cookie to be configured on the backend server.
                /// The cookie must be 1 to 200 characters in length, and can contain ASCII characters
                /// and digits. It cannot contain commas (,), semicolons (;), or spaces. It cannot start
                /// with a dollar sign ($).
                /// Note This parameter is required if the StickySessionEnabled parameter is set to true and the StickySessionType parameter is set to Server.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "cookie", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Cookie
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: cookieTimeout: The timeout period of the cookie. Unit: seconds.
                /// Valid values: 1 to 86400.
                /// Default value: 1000.
                /// Note This parameter is required if the StickySessionEnabled parameter is set to true and the StickySessionType parameter is set to Insert.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "cookieTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? CookieTimeout
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: stickySessionEnabled: Specifies whether to enable session persistence. Valid values: true and false.
                /// Note This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "stickySessionEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? StickySessionEnabled
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: stickySessionType: The method that is used to handle a cookie. Valid values:
                /// Insert : inserts a cookie. This is the default value.
                /// Application Load Balancer (ALB) inserts the server ID as a cookie into the first HTTP
                /// or HTTPS response that is sent to a client. The next request from the client will
                /// contain this cookie, and the listener will distribute this request to the recorded
                /// backend server.
                /// Server: rewrites a cookie.
                /// When ALB detects a user-defined cookie, it uses the user-defined cookie to rewrite
                /// the original cookie. The next request from the client will contain the user-defined
                /// cookie, and the listener will distribute this request to the recorded backend server.
                /// Note This parameter is required if the StickySessionEnabled parameter is set to true.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "stickySessionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? StickySessionType
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-alb.RosServerGroup.StickySessionConfigProperty")]
        public class StickySessionConfigProperty : AlibabaCloud.SDK.ROS.CDK.Alb.RosServerGroup.IStickySessionConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: cookie: The cookie to be configured on the backend server.
            /// The cookie must be 1 to 200 characters in length, and can contain ASCII characters
            /// and digits. It cannot contain commas (,), semicolons (;), or spaces. It cannot start
            /// with a dollar sign ($).
            /// Note This parameter is required if the StickySessionEnabled parameter is set to true and the StickySessionType parameter is set to Server.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cookie", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Cookie
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: cookieTimeout: The timeout period of the cookie. Unit: seconds.
            /// Valid values: 1 to 86400.
            /// Default value: 1000.
            /// Note This parameter is required if the StickySessionEnabled parameter is set to true and the StickySessionType parameter is set to Insert.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cookieTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CookieTimeout
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: stickySessionEnabled: Specifies whether to enable session persistence. Valid values: true and false.
            /// Note This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "stickySessionEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StickySessionEnabled
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: stickySessionType: The method that is used to handle a cookie. Valid values:
            /// Insert : inserts a cookie. This is the default value.
            /// Application Load Balancer (ALB) inserts the server ID as a cookie into the first HTTP
            /// or HTTPS response that is sent to a client. The next request from the client will
            /// contain this cookie, and the listener will distribute this request to the recorded
            /// backend server.
            /// Server: rewrites a cookie.
            /// When ALB detects a user-defined cookie, it uses the user-defined cookie to rewrite
            /// the original cookie. The next request from the client will contain the user-defined
            /// cookie, and the listener will distribute this request to the recorded backend server.
            /// Note This parameter is required if the StickySessionEnabled parameter is set to true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "stickySessionType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StickySessionType
            {
                get;
                set;
            }
        }
    }
}
