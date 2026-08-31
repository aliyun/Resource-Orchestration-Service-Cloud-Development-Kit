using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Alb
{
    /// <summary>Properties for defining a `HealthCheckTemplate`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-healthchecktemplate
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IHealthCheckTemplateProps), fullyQualifiedName: "@alicloud/ros-cdk-alb.HealthCheckTemplateProps")]
    public interface IHealthCheckTemplateProps
    {
        /// <summary>Property healthCheckTemplateName: The name of the health check template.</summary>
        /// <remarks>
        /// The name must be 2 to 128 characters in length, must start with a letter, a
        /// digit, or a Chinese character, and can contain digits, periods (.), underscores
        /// (_), hyphens (-), and spaces.
        /// </remarks>
        [JsiiProperty(name: "healthCheckTemplateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object HealthCheckTemplateName
        {
            get;
        }

        /// <summary>Property healthCheckCodes: The HTTP status codes that indicate a successful health check.</summary>
        [JsiiProperty(name: "healthCheckCodes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HealthCheckCodes
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property healthCheckConnectPort: The port that is used for health checks.</summary>
        /// <remarks>
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

        /// <summary>Property healthCheckHost: The domain name used for the health check.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>$SERVER_IP: The private IP address of a backend server. If you set this
        /// parameter to <c>$SERVER_IP</c> or leave it empty, the load balancer uses the private
        /// IP address of the backend server as the domain name for the health check.</description>
        /// <description>domain: The domain name must be 1 to 80 characters in length and can contain
        /// letters, digits, periods (.), and hyphens (-).</description>
        /// </list>
        ///
        ///     This parameter takes effect only when the <c>HealthCheckProtocol</c> parameter is
        ///     set to HTTP or HTTPS.
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

        /// <summary>Property healthCheckHttpVersion: The HTTP version for health check protocol.</summary>
        /// <remarks>
        /// Valid values: HTTP1.0 or HTTP1.1.
        /// Default value: HTTP 1.1.
        /// This parameter is available only when HealthCheckProtocol is set to HTTP or HTTPS.
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

        /// <summary>Property healthCheckInterval: The interval between two consecutive health checks.</summary>
        /// <remarks>
        /// Unit: seconds.
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

        /// <summary>Property healthCheckMethod: The method used for the health check.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>HEAD (default): For HTTP and HTTPS listeners, the default health check method
        /// is HEAD.</description>
        /// <description>POST: For gRPC listeners, the default health check method is POST.</description>
        /// <description>GET: If the response body exceeds 8 KB, it is truncated. This does not affect
        /// the health check result.</description>
        /// </list>
        ///
        ///     This parameter takes effect only when the <c>HealthCheckProtocol</c> parameter is
        ///     set to HTTP, HTTPS, or gRPC.
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

        /// <summary>Property healthCheckPath: The URL that is used for health checks.</summary>
        /// <remarks>
        /// The URL must be 1 to 80 characters in length. It must start with a forward slash
        /// (/) and can contain letters, digits, and the following special characters: <c>- \/ . % ? # &amp; _;~!()*[]@$^:',+</c>.
        ///
        ///     This parameter takes effect only when the <c>HealthCheckProtocol</c> parameter is
        ///     set to HTTP or HTTPS.
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

        /// <summary>Property healthCheckProtocol: The protocol used for the health check.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>HTTP (default): simulates browser access by sending HEAD or GET requests to
        /// check whether the server application is healthy.</description>
        /// <description>HTTPS: simulates browser access by sending HEAD or GET requests to check
        /// whether the server application is healthy. HTTPS provides encrypted data
        /// transmission and is more secure than HTTP.</description>
        /// <description>TCP: checks whether the server port is responsive by sending SYN packets.</description>
        /// <description>gRPC: checks whether the server application is healthy by sending POST or GET
        /// requests.</description>
        /// </list>
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

        /// <summary>Property healthCheckTimeout: The timeout period of a health check.</summary>
        /// <remarks>
        /// Unit: seconds. If a backend server does not
        /// respond within the specified timeout period, the backend server fails the health check.
        /// Valid values: 1 to 300.
        /// Default value: 5.
        /// Note If the value of the HealthCheckTimeout parameter is smaller than that of the HealthCheckInterval parameter, the timeout period specified by the HealthCheckTimeout parameter is ignored and the value of the HealthCheckInterval parameter is used as the timeout period.
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

        /// <summary>Property healthyThreshold: The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy.</summary>
        /// <remarks>
        /// In this case, the health status is changed from
        /// fail to success.
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

        /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property unhealthyThreshold: The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy.</summary>
        /// <remarks>
        /// In this case, the health status is changed from success to fail.
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

        /// <summary>Properties for defining a `HealthCheckTemplate`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-healthchecktemplate
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IHealthCheckTemplateProps), fullyQualifiedName: "@alicloud/ros-cdk-alb.HealthCheckTemplateProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.IHealthCheckTemplateProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property healthCheckTemplateName: The name of the health check template.</summary>
            /// <remarks>
            /// The name must be 2 to 128 characters in length, must start with a letter, a
            /// digit, or a Chinese character, and can contain digits, periods (.), underscores
            /// (_), hyphens (-), and spaces.
            /// </remarks>
            [JsiiProperty(name: "healthCheckTemplateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object HealthCheckTemplateName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property healthCheckCodes: The HTTP status codes that indicate a successful health check.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckCodes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? HealthCheckCodes
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property healthCheckConnectPort: The port that is used for health checks.</summary>
            /// <remarks>
            /// Valid values: 0 to 65535.
            /// Default value: 0. This value indicates that the port on a backend server is used for health checks.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckConnectPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HealthCheckConnectPort
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property healthCheckHost: The domain name used for the health check.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>$SERVER_IP: The private IP address of a backend server. If you set this
            /// parameter to <c>$SERVER_IP</c> or leave it empty, the load balancer uses the private
            /// IP address of the backend server as the domain name for the health check.</description>
            /// <description>domain: The domain name must be 1 to 80 characters in length and can contain
            /// letters, digits, periods (.), and hyphens (-).</description>
            /// </list>
            ///
            ///     This parameter takes effect only when the <c>HealthCheckProtocol</c> parameter is
            ///     set to HTTP or HTTPS.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckHost", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HealthCheckHost
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property healthCheckHttpVersion: The HTTP version for health check protocol.</summary>
            /// <remarks>
            /// Valid values: HTTP1.0 or HTTP1.1.
            /// Default value: HTTP 1.1.
            /// This parameter is available only when HealthCheckProtocol is set to HTTP or HTTPS.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckHttpVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HealthCheckHttpVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property healthCheckInterval: The interval between two consecutive health checks.</summary>
            /// <remarks>
            /// Unit: seconds.
            /// Valid values: 1 to 50.
            /// Default value: 2.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HealthCheckInterval
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property healthCheckMethod: The method used for the health check.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>HEAD (default): For HTTP and HTTPS listeners, the default health check method
            /// is HEAD.</description>
            /// <description>POST: For gRPC listeners, the default health check method is POST.</description>
            /// <description>GET: If the response body exceeds 8 KB, it is truncated. This does not affect
            /// the health check result.</description>
            /// </list>
            ///
            ///     This parameter takes effect only when the <c>HealthCheckProtocol</c> parameter is
            ///     set to HTTP, HTTPS, or gRPC.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckMethod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HealthCheckMethod
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property healthCheckPath: The URL that is used for health checks.</summary>
            /// <remarks>
            /// The URL must be 1 to 80 characters in length. It must start with a forward slash
            /// (/) and can contain letters, digits, and the following special characters: <c>- \/ . % ? # &amp; _;~!()*[]@$^:',+</c>.
            ///
            ///     This parameter takes effect only when the <c>HealthCheckProtocol</c> parameter is
            ///     set to HTTP or HTTPS.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HealthCheckPath
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property healthCheckProtocol: The protocol used for the health check.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>HTTP (default): simulates browser access by sending HEAD or GET requests to
            /// check whether the server application is healthy.</description>
            /// <description>HTTPS: simulates browser access by sending HEAD or GET requests to check
            /// whether the server application is healthy. HTTPS provides encrypted data
            /// transmission and is more secure than HTTP.</description>
            /// <description>TCP: checks whether the server port is responsive by sending SYN packets.</description>
            /// <description>gRPC: checks whether the server application is healthy by sending POST or GET
            /// requests.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HealthCheckProtocol
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property healthCheckTimeout: The timeout period of a health check.</summary>
            /// <remarks>
            /// Unit: seconds. If a backend server does not
            /// respond within the specified timeout period, the backend server fails the health check.
            /// Valid values: 1 to 300.
            /// Default value: 5.
            /// Note If the value of the HealthCheckTimeout parameter is smaller than that of the HealthCheckInterval parameter, the timeout period specified by the HealthCheckTimeout parameter is ignored and the value of the HealthCheckInterval parameter is used as the timeout period.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HealthCheckTimeout
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property healthyThreshold: The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy.</summary>
            /// <remarks>
            /// In this case, the health status is changed from
            /// fail to success.
            /// Valid values: 2 to 10.
            /// Default value: 3.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthyThreshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HealthyThreshold
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property unhealthyThreshold: The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy.</summary>
            /// <remarks>
            /// In this case, the health status is changed from success to fail.
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
}
