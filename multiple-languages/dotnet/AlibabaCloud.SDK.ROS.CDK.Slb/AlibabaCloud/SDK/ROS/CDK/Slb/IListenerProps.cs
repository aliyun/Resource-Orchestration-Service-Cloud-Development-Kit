using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb
{
    /// <summary>Properties for defining a `ALIYUN::SLB::Listener`.</summary>
    [JsiiInterface(nativeType: typeof(IListenerProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.ListenerProps")]
    public interface IListenerProps
    {
        /// <summary>Property backendServerPort: Backend server can listen on ports from 1 to 65535.</summary>
        [JsiiProperty(name: "backendServerPort", typeJson: "{\"primitive\":\"number\"}")]
        double BackendServerPort
        {
            get;
        }

        /// <summary>Property bandwidth: The bandwidth of network, unit in Mbps(Million bits per second).</summary>
        /// <remarks>
        /// If the specified load balancer with "LOAD_BALANCE_ID" is charged by "paybybandwidth" and is created in classic network, each Listener's bandwidth must be greater than 0 and the sum of all of its Listeners' bandwidth can't be greater than the bandwidth of the load balancer.
        /// </remarks>
        [JsiiProperty(name: "bandwidth", typeJson: "{\"primitive\":\"number\"}")]
        double Bandwidth
        {
            get;
        }

        /// <summary>Property listenerPort: Port for front listener.</summary>
        /// <remarks>
        /// Range from 1 to 65535.
        /// </remarks>
        [JsiiProperty(name: "listenerPort", typeJson: "{\"primitive\":\"number\"}")]
        double ListenerPort
        {
            get;
        }

        /// <summary>Property loadBalancerId: The id of load balancer to create listener.</summary>
        [JsiiProperty(name: "loadBalancerId", typeJson: "{\"primitive\":\"string\"}")]
        string LoadBalancerId
        {
            get;
        }

        /// <summary>Property protocol: The load balancer transport protocol to use for routing: http, https, tcp, or udp.</summary>
        [JsiiProperty(name: "protocol", typeJson: "{\"primitive\":\"string\"}")]
        string Protocol
        {
            get;
        }

        /// <summary>Property aclId: The ID of the access control list associated with the listener to be created.</summary>
        /// <remarks>
        /// If the value of the AclStatus parameter is on, this parameter is required.
        /// </remarks>
        [JsiiProperty(name: "aclId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? AclId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property aclStatus: Indicates whether to enable access control.</summary>
        /// <remarks>
        /// Valid values: on | off. Default value: off
        /// </remarks>
        [JsiiProperty(name: "aclStatus", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? AclStatus
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property aclType: The access control type: * white: Indicates a whitelist.</summary>
        /// <remarks>
        /// Only requests from IP addresses or CIDR blocks in the selected access control lists are forwarded. This applies to scenarios in which an application only allows access from specific IP addresses.
        /// Enabling a whitelist poses some risks to your services.
        /// After a whitelist is enabled, only the IP addresses in the list can access the listener.
        /// If you enable a whitelist without adding any IP addresses in the list, no requests are forwarded.
        /// 
        /// <list type="bullet">
        /// <description>black: Indicates a blacklist. Requests from IP addresses or CIDR blocks in the selected access control lists are not forwarded (that is, they are blocked). This applies to scenarios in which an application only denies access from specific IP addresses.
        /// If you enable a blacklist without adding any IP addresses in the list, all requests are forwarded.</description>
        /// </list>
        /// 
        /// If the value of the AclStatus parameter is on, this parameter is required.
        /// </remarks>
        [JsiiProperty(name: "aclType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? AclType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property caCertificateId: CA server certificate id, for https listener only.</summary>
        [JsiiProperty(name: "caCertificateId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? CaCertificateId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property healthCheck: The properties of health checking setting.</summary>
        [JsiiProperty(name: "healthCheck", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-slb.RosListener.HealthCheckProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HealthCheck
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property httpConfig: Config for http protocol.</summary>
        [JsiiProperty(name: "httpConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-slb.RosListener.HttpConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HttpConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property idleTimeout: Specify the idle connection timeout in seconds.</summary>
        /// <remarks>
        /// Valid value: 1-60 If no request is received during the specified timeout period, Server Load Balancer will temporarily terminate the connection and restart the connection when the next request comes.
        /// </remarks>
        [JsiiProperty(name: "idleTimeout", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? IdleTimeout
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property masterSlaveServerGroupId: The id of the MasterSlaveServerGroup which use in listener.</summary>
        [JsiiProperty(name: "masterSlaveServerGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? MasterSlaveServerGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property persistence: The properties of persistence.</summary>
        [JsiiProperty(name: "persistence", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-slb.RosListener.PersistenceProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Persistence
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property requestTimeout: Specify the request timeout in seconds.</summary>
        /// <remarks>
        /// Valid value: 1-180 If no response is received from the backend server during the specified timeout period, Server Load Balancer will stop waiting and send an HTTP 504 error to the client.
        /// </remarks>
        [JsiiProperty(name: "requestTimeout", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? RequestTimeout
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property scheduler: The scheduler algorithm.</summary>
        /// <remarks>
        /// Support 'wrr' or 'wlc' only, default is 'wrr'
        /// </remarks>
        [JsiiProperty(name: "scheduler", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Scheduler
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property serverCertificateId: Server certificate id, for https listener only, this properties is required.</summary>
        [JsiiProperty(name: "serverCertificateId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ServerCertificateId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vServerGroupId: The id of the VServerGroup which use in listener.</summary>
        [JsiiProperty(name: "vServerGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? VServerGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::SLB::Listener`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IListenerProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.ListenerProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Slb.IListenerProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property backendServerPort: Backend server can listen on ports from 1 to 65535.</summary>
            [JsiiProperty(name: "backendServerPort", typeJson: "{\"primitive\":\"number\"}")]
            public double BackendServerPort
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <summary>Property bandwidth: The bandwidth of network, unit in Mbps(Million bits per second).</summary>
            /// <remarks>
            /// If the specified load balancer with "LOAD_BALANCE_ID" is charged by "paybybandwidth" and is created in classic network, each Listener's bandwidth must be greater than 0 and the sum of all of its Listeners' bandwidth can't be greater than the bandwidth of the load balancer.
            /// </remarks>
            [JsiiProperty(name: "bandwidth", typeJson: "{\"primitive\":\"number\"}")]
            public double Bandwidth
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <summary>Property listenerPort: Port for front listener.</summary>
            /// <remarks>
            /// Range from 1 to 65535.
            /// </remarks>
            [JsiiProperty(name: "listenerPort", typeJson: "{\"primitive\":\"number\"}")]
            public double ListenerPort
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <summary>Property loadBalancerId: The id of load balancer to create listener.</summary>
            [JsiiProperty(name: "loadBalancerId", typeJson: "{\"primitive\":\"string\"}")]
            public string LoadBalancerId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property protocol: The load balancer transport protocol to use for routing: http, https, tcp, or udp.</summary>
            [JsiiProperty(name: "protocol", typeJson: "{\"primitive\":\"string\"}")]
            public string Protocol
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property aclId: The ID of the access control list associated with the listener to be created.</summary>
            /// <remarks>
            /// If the value of the AclStatus parameter is on, this parameter is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "aclId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AclId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property aclStatus: Indicates whether to enable access control.</summary>
            /// <remarks>
            /// Valid values: on | off. Default value: off
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "aclStatus", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AclStatus
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property aclType: The access control type: * white: Indicates a whitelist.</summary>
            /// <remarks>
            /// Only requests from IP addresses or CIDR blocks in the selected access control lists are forwarded. This applies to scenarios in which an application only allows access from specific IP addresses.
            /// Enabling a whitelist poses some risks to your services.
            /// After a whitelist is enabled, only the IP addresses in the list can access the listener.
            /// If you enable a whitelist without adding any IP addresses in the list, no requests are forwarded.
            /// 
            /// <list type="bullet">
            /// <description>black: Indicates a blacklist. Requests from IP addresses or CIDR blocks in the selected access control lists are not forwarded (that is, they are blocked). This applies to scenarios in which an application only denies access from specific IP addresses.
            /// If you enable a blacklist without adding any IP addresses in the list, all requests are forwarded.</description>
            /// </list>
            /// 
            /// If the value of the AclStatus parameter is on, this parameter is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "aclType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AclType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property caCertificateId: CA server certificate id, for https listener only.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "caCertificateId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? CaCertificateId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property healthCheck: The properties of health checking setting.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheck", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-slb.RosListener.HealthCheckProperty\"}]}}", isOptional: true)]
            public object? HealthCheck
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property httpConfig: Config for http protocol.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "httpConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-slb.RosListener.HttpConfigProperty\"}]}}", isOptional: true)]
            public object? HttpConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property idleTimeout: Specify the idle connection timeout in seconds.</summary>
            /// <remarks>
            /// Valid value: 1-60 If no request is received during the specified timeout period, Server Load Balancer will temporarily terminate the connection and restart the connection when the next request comes.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "idleTimeout", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? IdleTimeout
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property masterSlaveServerGroupId: The id of the MasterSlaveServerGroup which use in listener.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "masterSlaveServerGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? MasterSlaveServerGroupId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property persistence: The properties of persistence.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "persistence", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-slb.RosListener.PersistenceProperty\"}]}}", isOptional: true)]
            public object? Persistence
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property requestTimeout: Specify the request timeout in seconds.</summary>
            /// <remarks>
            /// Valid value: 1-180 If no response is received from the backend server during the specified timeout period, Server Load Balancer will stop waiting and send an HTTP 504 error to the client.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "requestTimeout", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? RequestTimeout
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property scheduler: The scheduler algorithm.</summary>
            /// <remarks>
            /// Support 'wrr' or 'wlc' only, default is 'wrr'
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scheduler", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Scheduler
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property serverCertificateId: Server certificate id, for https listener only, this properties is required.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "serverCertificateId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ServerCertificateId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property vServerGroupId: The id of the VServerGroup which use in listener.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vServerGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? VServerGroupId
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
