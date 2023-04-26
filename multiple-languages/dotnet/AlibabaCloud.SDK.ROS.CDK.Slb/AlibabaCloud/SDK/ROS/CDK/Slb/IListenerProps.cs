using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb
{
    /// <summary>Properties for defining a `ALIYUN::SLB::Listener`.</summary>
    [JsiiInterface(nativeType: typeof(IListenerProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.ListenerProps")]
    public interface IListenerProps
    {
        /// <summary>Property bandwidth: The bandwidth of network, unit in Mbps(Million bits per second).</summary>
        /// <remarks>
        /// If the specified load balancer with "LOAD_BALANCE_ID" is charged by "paybybandwidth" and is created in classic network, each Listener's bandwidth must be greater than 0 and the sum of all of its Listeners' bandwidth can't be greater than the bandwidth of the load balancer.
        /// </remarks>
        [JsiiProperty(name: "bandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Bandwidth
        {
            get;
        }

        /// <summary>Property listenerPort: Port for front listener.</summary>
        /// <remarks>
        /// Range from 0 to 65535.
        /// </remarks>
        [JsiiProperty(name: "listenerPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ListenerPort
        {
            get;
        }

        /// <summary>Property loadBalancerId: The id of load balancer to create listener.</summary>
        [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LoadBalancerId
        {
            get;
        }

        /// <summary>Property protocol: The load balancer transport protocol to use for routing: http, https, tcp, or udp.</summary>
        [JsiiProperty(name: "protocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Protocol
        {
            get;
        }

        /// <summary>Property aclId: The ID of the access control list associated with the listener to be created.</summary>
        /// <remarks>
        /// If the value of the AclStatus parameter is on, this parameter is required.
        /// </remarks>
        [JsiiProperty(name: "aclId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AclId
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
        [JsiiProperty(name: "aclStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AclStatus
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
        [JsiiProperty(name: "aclType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AclType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property backendServerPort: Backend server can listen on ports from 1 to 65535.</summary>
        [JsiiProperty(name: "backendServerPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BackendServerPort
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property caCertificateId: CA server certificate id, for https listener only.</summary>
        [JsiiProperty(name: "caCertificateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CaCertificateId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: The description of the listener.It must be 1 to 80 characters in length and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_). Chinese characters are supported.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enableHttp2: Specifies whether to use HTTP/2.</summary>
        /// <remarks>
        /// It takes effect when Protocol=https. Valid values:
        /// on: yes
        /// off: no
        /// </remarks>
        [JsiiProperty(name: "enableHttp2", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableHttp2
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property gzip: Specifies whether to enable Gzip compression to compress specific types of files.</summary>
        /// <remarks>
        /// Valid values:
        /// on (default): yes
        /// off: no
        /// </remarks>
        [JsiiProperty(name: "gzip", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Gzip
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
        [JsiiProperty(name: "idleTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IdleTimeout
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property masterSlaveServerGroupId: The id of the MasterSlaveServerGroup which use in listener.</summary>
        [JsiiProperty(name: "masterSlaveServerGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MasterSlaveServerGroupId
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

        /// <summary>Property portRange: Port range, only supports TCP or UDP listener.</summary>
        /// <remarks>
        /// ListenerPort should be 0 when PortRange is specified.
        /// </remarks>
        [JsiiProperty(name: "portRange", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-slb.RosListener.PortRangeProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PortRange
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
        [JsiiProperty(name: "requestTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RequestTimeout
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property scheduler: The scheduling algorithm.</summary>
        /// <remarks>
        /// Valid values:
        /// wrr: Backend servers that have higher weights receive more requests than those that have lower weights.
        /// wlc: Requests are distributed based on the combination of the weights and connections to backend servers. If two backend servers have the same weight, the backend server that has fewer connections receives more requests.
        /// rr: Requests are distributed to backend servers in sequence.
        /// sch: specifies consistent hashing that is based on source IP addresses. Requests from the same source IP address are distributed to the same backend server.
        /// tch: specifies consistent hashing that is based on four factors: source IP address, destination IP address, source port number, and destination port number. Requests that contain the same preceding information are distributed to the same backend server.
        /// Default: wrr
        /// </remarks>
        [JsiiProperty(name: "scheduler", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Scheduler
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property serverCertificateId: Server certificate id, for https listener only, this properties is required.</summary>
        [JsiiProperty(name: "serverCertificateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ServerCertificateId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property startListener: Whether start listener after listener created.</summary>
        /// <remarks>
        /// Default True.
        /// </remarks>
        [JsiiProperty(name: "startListener", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? StartListener
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tlsCipherPolicy: The Transport Layer Security (TLS) security policy.</summary>
        /// <remarks>
        /// Each security policy contains TLS protocol versions and cipher suites available for HTTPS. It takes effect when Protocol=https.
        /// </remarks>
        [JsiiProperty(name: "tlsCipherPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TlsCipherPolicy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vServerGroupId: The id of the VServerGroup which use in listener.</summary>
        [JsiiProperty(name: "vServerGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VServerGroupId
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

            /// <summary>Property bandwidth: The bandwidth of network, unit in Mbps(Million bits per second).</summary>
            /// <remarks>
            /// If the specified load balancer with "LOAD_BALANCE_ID" is charged by "paybybandwidth" and is created in classic network, each Listener's bandwidth must be greater than 0 and the sum of all of its Listeners' bandwidth can't be greater than the bandwidth of the load balancer.
            /// </remarks>
            [JsiiProperty(name: "bandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Bandwidth
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property listenerPort: Port for front listener.</summary>
            /// <remarks>
            /// Range from 0 to 65535.
            /// </remarks>
            [JsiiProperty(name: "listenerPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ListenerPort
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property loadBalancerId: The id of load balancer to create listener.</summary>
            [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LoadBalancerId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property protocol: The load balancer transport protocol to use for routing: http, https, tcp, or udp.</summary>
            [JsiiProperty(name: "protocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Protocol
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property aclId: The ID of the access control list associated with the listener to be created.</summary>
            /// <remarks>
            /// If the value of the AclStatus parameter is on, this parameter is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "aclId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AclId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property aclStatus: Indicates whether to enable access control.</summary>
            /// <remarks>
            /// Valid values: on | off. Default value: off
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "aclStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AclStatus
            {
                get => GetInstanceProperty<object?>();
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
            [JsiiProperty(name: "aclType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AclType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property backendServerPort: Backend server can listen on ports from 1 to 65535.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "backendServerPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BackendServerPort
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property caCertificateId: CA server certificate id, for https listener only.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "caCertificateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CaCertificateId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: The description of the listener.It must be 1 to 80 characters in length and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_). Chinese characters are supported.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enableHttp2: Specifies whether to use HTTP/2.</summary>
            /// <remarks>
            /// It takes effect when Protocol=https. Valid values:
            /// on: yes
            /// off: no
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableHttp2", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableHttp2
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property gzip: Specifies whether to enable Gzip compression to compress specific types of files.</summary>
            /// <remarks>
            /// Valid values:
            /// on (default): yes
            /// off: no
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "gzip", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Gzip
            {
                get => GetInstanceProperty<object?>();
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
            [JsiiProperty(name: "idleTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IdleTimeout
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property masterSlaveServerGroupId: The id of the MasterSlaveServerGroup which use in listener.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "masterSlaveServerGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MasterSlaveServerGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property persistence: The properties of persistence.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "persistence", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-slb.RosListener.PersistenceProperty\"}]}}", isOptional: true)]
            public object? Persistence
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property portRange: Port range, only supports TCP or UDP listener.</summary>
            /// <remarks>
            /// ListenerPort should be 0 when PortRange is specified.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "portRange", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-slb.RosListener.PortRangeProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? PortRange
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property requestTimeout: Specify the request timeout in seconds.</summary>
            /// <remarks>
            /// Valid value: 1-180 If no response is received from the backend server during the specified timeout period, Server Load Balancer will stop waiting and send an HTTP 504 error to the client.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "requestTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RequestTimeout
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property scheduler: The scheduling algorithm.</summary>
            /// <remarks>
            /// Valid values:
            /// wrr: Backend servers that have higher weights receive more requests than those that have lower weights.
            /// wlc: Requests are distributed based on the combination of the weights and connections to backend servers. If two backend servers have the same weight, the backend server that has fewer connections receives more requests.
            /// rr: Requests are distributed to backend servers in sequence.
            /// sch: specifies consistent hashing that is based on source IP addresses. Requests from the same source IP address are distributed to the same backend server.
            /// tch: specifies consistent hashing that is based on four factors: source IP address, destination IP address, source port number, and destination port number. Requests that contain the same preceding information are distributed to the same backend server.
            /// Default: wrr
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scheduler", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Scheduler
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property serverCertificateId: Server certificate id, for https listener only, this properties is required.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "serverCertificateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ServerCertificateId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property startListener: Whether start listener after listener created.</summary>
            /// <remarks>
            /// Default True.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "startListener", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StartListener
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tlsCipherPolicy: The Transport Layer Security (TLS) security policy.</summary>
            /// <remarks>
            /// Each security policy contains TLS protocol versions and cipher suites available for HTTPS. It takes effect when Protocol=https.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tlsCipherPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TlsCipherPolicy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vServerGroupId: The id of the VServerGroup which use in listener.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vServerGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VServerGroupId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
