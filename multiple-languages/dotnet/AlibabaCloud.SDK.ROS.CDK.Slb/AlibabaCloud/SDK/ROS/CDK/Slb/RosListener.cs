using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb
{
    /// <summary>A ROS template type:  `ALIYUN::SLB::Listener`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Slb.RosListener), fullyQualifiedName: "@alicloud/ros-cdk-slb.RosListener", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-slb.RosListenerProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosListener : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::SLB::Listener`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosListener(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Slb.IRosListenerProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosListener(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosListener(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "renderProperties", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}", parametersJson: "[{\"name\":\"props\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]", isOverride: true)]
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Slb.RosListener))!;

        /// <remarks>
        /// <strong>Attribute</strong>: ListenerPortsAndProtocol: The collection of listener.
        /// </remarks>
        [JsiiProperty(name: "attrListenerPortsAndProtocol", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrListenerPortsAndProtocol
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: LoadBalancerId: The id of load balancer
        /// </remarks>
        [JsiiProperty(name: "attrLoadBalancerId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrLoadBalancerId
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: backendServerPort: Backend server can listen on ports from 1 to 65535.
        /// </remarks>
        [JsiiProperty(name: "backendServerPort", typeJson: "{\"primitive\":\"number\"}")]
        public virtual double BackendServerPort
        {
            get => GetInstanceProperty<double>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: bandwidth: The bandwidth of network, unit in Mbps(Million bits per second). If the specified load balancer with "LOAD_BALANCE_ID" is charged by "paybybandwidth" and is created in classic network, each Listener's bandwidth must be greater than 0 and the sum of all of its Listeners' bandwidth can't be greater than the bandwidth of the load balancer.
        /// </remarks>
        [JsiiProperty(name: "bandwidth", typeJson: "{\"primitive\":\"number\"}")]
        public virtual double Bandwidth
        {
            get => GetInstanceProperty<double>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: listenerPort: Port for front listener. Range from 1 to 65535.
        /// </remarks>
        [JsiiProperty(name: "listenerPort", typeJson: "{\"primitive\":\"number\"}")]
        public virtual double ListenerPort
        {
            get => GetInstanceProperty<double>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: loadBalancerId: The id of load balancer to create listener.
        /// </remarks>
        [JsiiProperty(name: "loadBalancerId", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string LoadBalancerId
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: protocol: The load balancer transport protocol to use for routing: http, https, tcp, or udp.
        /// </remarks>
        [JsiiProperty(name: "protocol", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string Protocol
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: aclId: The ID of the access control list associated with the listener to be created.
        /// If the value of the AclStatus parameter is on, this parameter is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "aclId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? AclId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: aclStatus: Indicates whether to enable access control.
        /// Valid values: on | off. Default value: off
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "aclStatus", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? AclStatus
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: aclType: The access control type:
        /// * white: Indicates a whitelist. Only requests from IP addresses or CIDR blocks in the selected access control lists are forwarded. This applies to scenarios in which an application only allows access from specific IP addresses.
        /// Enabling a whitelist poses some risks to your services.
        /// After a whitelist is enabled, only the IP addresses in the list can access the listener.
        /// If you enable a whitelist without adding any IP addresses in the list, no requests are forwarded.
        /// * black: Indicates a blacklist. Requests from IP addresses or CIDR blocks in the selected access control lists are not forwarded (that is, they are blocked). This applies to scenarios in which an application only denies access from specific IP addresses.
        /// If you enable a blacklist without adding any IP addresses in the list, all requests are forwarded.
        /// 
        /// If the value of the AclStatus parameter is on, this parameter is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "aclType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? AclType
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: caCertificateId: CA server certificate id, for https listener only.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "caCertificateId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? CaCertificateId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: healthCheck: The properties of health checking setting.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "healthCheck", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-slb.RosListener.HealthCheckProperty\"}]}}", isOptional: true)]
        public virtual object? HealthCheck
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: httpConfig: Config for http protocol.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "httpConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-slb.RosListener.HttpConfigProperty\"}]}}", isOptional: true)]
        public virtual object? HttpConfig
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: idleTimeout: Specify the idle connection timeout in seconds. Valid value: 1-60 If no request is received during the specified timeout period, Server Load Balancer will temporarily terminate the connection and restart the connection when the next request comes.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "idleTimeout", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? IdleTimeout
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: masterSlaveServerGroupId: The id of the MasterSlaveServerGroup which use in listener.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "masterSlaveServerGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? MasterSlaveServerGroupId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: persistence: The properties of persistence.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "persistence", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-slb.RosListener.PersistenceProperty\"}]}}", isOptional: true)]
        public virtual object? Persistence
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: requestTimeout: Specify the request timeout in seconds. Valid value: 1-180 If no response is received from the backend server during the specified timeout period, Server Load Balancer will stop waiting and send an HTTP 504 error to the client.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "requestTimeout", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? RequestTimeout
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: scheduler: The scheduler algorithm. Support 'wrr' or 'wlc' only, default is 'wrr'
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "scheduler", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? Scheduler
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: serverCertificateId: Server certificate id, for https listener only, this properties is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "serverCertificateId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? ServerCertificateId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: vServerGroupId: The id of the VServerGroup which use in listener.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vServerGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? VServerGroupId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IHealthCheckProperty), fullyQualifiedName: "@alicloud/ros-cdk-slb.RosListener.HealthCheckProperty")]
        public interface IHealthCheckProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: domain: The domain of health check target.
            /// </remarks>
            [JsiiProperty(name: "domain", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Domain
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: healthyThreshold: The number of consecutive health checks successes required,before identified the backend server in Healthy status.
            /// </remarks>
            [JsiiProperty(name: "healthyThreshold", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            double? HealthyThreshold
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: httpCode: The expect status of health check result. Any answer other than referred status within the timeout period is considered unhealthy.
            /// </remarks>
            [JsiiProperty(name: "httpCode", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? HttpCode
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: interval: The approximate interval, unit in seconds, between health checks of an backend server.
            /// </remarks>
            [JsiiProperty(name: "interval", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            double? Interval
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: port: The port being checked. The range of valid ports is 0 through 65535.
            /// </remarks>
            [JsiiProperty(name: "port", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            double? Port
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: timeout: The amount of time, in seconds, during which no response means a failed health check.
            /// </remarks>
            [JsiiProperty(name: "timeout", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            double? Timeout
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: unhealthyThreshold: The number of consecutive health checks failures required,before identified the backend server in Unhealthy status.
            /// </remarks>
            [JsiiProperty(name: "unhealthyThreshold", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            double? UnhealthyThreshold
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: uri: The url of health check target.
            /// </remarks>
            [JsiiProperty(name: "uri", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Uri
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IHealthCheckProperty), fullyQualifiedName: "@alicloud/ros-cdk-slb.RosListener.HealthCheckProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Slb.RosListener.IHealthCheckProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: domain: The domain of health check target.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "domain", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Domain
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: healthyThreshold: The number of consecutive health checks successes required,before identified the backend server in Healthy status.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "healthyThreshold", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
                public double? HealthyThreshold
                {
                    get => GetInstanceProperty<double?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: httpCode: The expect status of health check result. Any answer other than referred status within the timeout period is considered unhealthy.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "httpCode", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? HttpCode
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: interval: The approximate interval, unit in seconds, between health checks of an backend server.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "interval", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
                public double? Interval
                {
                    get => GetInstanceProperty<double?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: port: The port being checked. The range of valid ports is 0 through 65535.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "port", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
                public double? Port
                {
                    get => GetInstanceProperty<double?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: timeout: The amount of time, in seconds, during which no response means a failed health check.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "timeout", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
                public double? Timeout
                {
                    get => GetInstanceProperty<double?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: unhealthyThreshold: The number of consecutive health checks failures required,before identified the backend server in Unhealthy status.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "unhealthyThreshold", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
                public double? UnhealthyThreshold
                {
                    get => GetInstanceProperty<double?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: uri: The url of health check target.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "uri", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Uri
                {
                    get => GetInstanceProperty<string?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-slb.RosListener.HealthCheckProperty")]
        public class HealthCheckProperty : AlibabaCloud.SDK.ROS.CDK.Slb.RosListener.IHealthCheckProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: domain: The domain of health check target.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "domain", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Domain
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: healthyThreshold: The number of consecutive health checks successes required,before identified the backend server in Healthy status.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthyThreshold", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
            public double? HealthyThreshold
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: httpCode: The expect status of health check result. Any answer other than referred status within the timeout period is considered unhealthy.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "httpCode", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? HttpCode
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: interval: The approximate interval, unit in seconds, between health checks of an backend server.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "interval", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
            public double? Interval
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: port: The port being checked. The range of valid ports is 0 through 65535.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "port", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
            public double? Port
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: timeout: The amount of time, in seconds, during which no response means a failed health check.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "timeout", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
            public double? Timeout
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: unhealthyThreshold: The number of consecutive health checks failures required,before identified the backend server in Unhealthy status.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "unhealthyThreshold", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
            public double? UnhealthyThreshold
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: uri: The url of health check target.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "uri", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Uri
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IHttpConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-slb.RosListener.HttpConfigProperty")]
        public interface IHttpConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: forwardPort: HTTP to HTTPS listening forwarding port.
            /// Default value: 443.
            /// </remarks>
            [JsiiProperty(name: "forwardPort", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            double? ForwardPort
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: listenerForward: Whether to enable HTTP to HTTPS forwarding.
            /// Valid values: on | off. Default value: off.
            /// </remarks>
            [JsiiProperty(name: "listenerForward", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? ListenerForward
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IHttpConfigProperty), fullyQualifiedName: "@alicloud/ros-cdk-slb.RosListener.HttpConfigProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Slb.RosListener.IHttpConfigProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: forwardPort: HTTP to HTTPS listening forwarding port.
                /// Default value: 443.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "forwardPort", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
                public double? ForwardPort
                {
                    get => GetInstanceProperty<double?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: listenerForward: Whether to enable HTTP to HTTPS forwarding.
                /// Valid values: on | off. Default value: off.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "listenerForward", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? ListenerForward
                {
                    get => GetInstanceProperty<string?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-slb.RosListener.HttpConfigProperty")]
        public class HttpConfigProperty : AlibabaCloud.SDK.ROS.CDK.Slb.RosListener.IHttpConfigProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: forwardPort: HTTP to HTTPS listening forwarding port.
            /// Default value: 443.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "forwardPort", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
            public double? ForwardPort
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: listenerForward: Whether to enable HTTP to HTTPS forwarding.
            /// Valid values: on | off. Default value: off.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "listenerForward", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? ListenerForward
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IPersistenceProperty), fullyQualifiedName: "@alicloud/ros-cdk-slb.RosListener.PersistenceProperty")]
        public interface IPersistenceProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: cookie: The type of session persistence.
            /// </remarks>
            [JsiiProperty(name: "cookie", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Cookie
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: cookieTimeout: The timeout for cookie setting, in seconds. It only take effect while StickySession is setting to 'on' and StickySessionType is setting to 'insert'.
            /// </remarks>
            [JsiiProperty(name: "cookieTimeout", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            double? CookieTimeout
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: persistenceTimeout: The timeout number of persistence, in seconds.
            /// </remarks>
            [JsiiProperty(name: "persistenceTimeout", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            double? PersistenceTimeout
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: stickySession: The switch of session persistence. Support 'on' and 'off'.
            /// </remarks>
            [JsiiProperty(name: "stickySession", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? StickySession
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: stickySessionType: The type of session persistence. Depends on parameter StickySession, if it is set to off, this parameter will be ignored.
            /// </remarks>
            [JsiiProperty(name: "stickySessionType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? StickySessionType
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedFor: Use 'X-Forwarded-For' to get real ip of accessor. On for open, off for close.
            /// </remarks>
            [JsiiProperty(name: "xForwardedFor", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? XForwardedFor
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForProto: Optional. Indicates whether to use the X-Forwarded-Proto header field to obtainthe listening protocol used by the SLB instance. Valid values: on | off. Default value: offIf you do not set this parameter, the default value is used.
            /// </remarks>
            [JsiiProperty(name: "xForwardedForProto", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? XForwardedForProto
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForSlbid: Optional. Indicates whether to use the SLB-ID header field to obtain the SLB instance ID. Valid values: on | off. Default value: off If you do not set this parameter, the default value is used.
            /// </remarks>
            [JsiiProperty(name: "xForwardedForSlbid", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? XForwardedForSlbid
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForSlbip: Optional. Indicates whether to use the SLB-IP header field to obtainthe real IP address of a client request.Valid values: on | off. Default value: offIf you do not set this parameter, the default value is used.
            /// </remarks>
            [JsiiProperty(name: "xForwardedForSlbip", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? XForwardedForSlbip
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IPersistenceProperty), fullyQualifiedName: "@alicloud/ros-cdk-slb.RosListener.PersistenceProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Slb.RosListener.IPersistenceProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: cookie: The type of session persistence.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "cookie", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Cookie
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: cookieTimeout: The timeout for cookie setting, in seconds. It only take effect while StickySession is setting to 'on' and StickySessionType is setting to 'insert'.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "cookieTimeout", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
                public double? CookieTimeout
                {
                    get => GetInstanceProperty<double?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: persistenceTimeout: The timeout number of persistence, in seconds.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "persistenceTimeout", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
                public double? PersistenceTimeout
                {
                    get => GetInstanceProperty<double?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: stickySession: The switch of session persistence. Support 'on' and 'off'.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "stickySession", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? StickySession
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: stickySessionType: The type of session persistence. Depends on parameter StickySession, if it is set to off, this parameter will be ignored.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "stickySessionType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? StickySessionType
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: xForwardedFor: Use 'X-Forwarded-For' to get real ip of accessor. On for open, off for close.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "xForwardedFor", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? XForwardedFor
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: xForwardedForProto: Optional. Indicates whether to use the X-Forwarded-Proto header field to obtainthe listening protocol used by the SLB instance. Valid values: on | off. Default value: offIf you do not set this parameter, the default value is used.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "xForwardedForProto", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? XForwardedForProto
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: xForwardedForSlbid: Optional. Indicates whether to use the SLB-ID header field to obtain the SLB instance ID. Valid values: on | off. Default value: off If you do not set this parameter, the default value is used.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "xForwardedForSlbid", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? XForwardedForSlbid
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: xForwardedForSlbip: Optional. Indicates whether to use the SLB-IP header field to obtainthe real IP address of a client request.Valid values: on | off. Default value: offIf you do not set this parameter, the default value is used.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "xForwardedForSlbip", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? XForwardedForSlbip
                {
                    get => GetInstanceProperty<string?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-slb.RosListener.PersistenceProperty")]
        public class PersistenceProperty : AlibabaCloud.SDK.ROS.CDK.Slb.RosListener.IPersistenceProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: cookie: The type of session persistence.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cookie", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Cookie
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: cookieTimeout: The timeout for cookie setting, in seconds. It only take effect while StickySession is setting to 'on' and StickySessionType is setting to 'insert'.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cookieTimeout", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
            public double? CookieTimeout
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: persistenceTimeout: The timeout number of persistence, in seconds.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "persistenceTimeout", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
            public double? PersistenceTimeout
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: stickySession: The switch of session persistence. Support 'on' and 'off'.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "stickySession", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? StickySession
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: stickySessionType: The type of session persistence. Depends on parameter StickySession, if it is set to off, this parameter will be ignored.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "stickySessionType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? StickySessionType
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedFor: Use 'X-Forwarded-For' to get real ip of accessor. On for open, off for close.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "xForwardedFor", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? XForwardedFor
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForProto: Optional. Indicates whether to use the X-Forwarded-Proto header field to obtainthe listening protocol used by the SLB instance. Valid values: on | off. Default value: offIf you do not set this parameter, the default value is used.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "xForwardedForProto", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? XForwardedForProto
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForSlbid: Optional. Indicates whether to use the SLB-ID header field to obtain the SLB instance ID. Valid values: on | off. Default value: off If you do not set this parameter, the default value is used.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "xForwardedForSlbid", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? XForwardedForSlbid
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: xForwardedForSlbip: Optional. Indicates whether to use the SLB-IP header field to obtainthe real IP address of a client request.Valid values: on | off. Default value: offIf you do not set this parameter, the default value is used.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "xForwardedForSlbip", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? XForwardedForSlbip
            {
                get;
                set;
            }
        }
    }
}
