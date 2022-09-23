using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Alb
{
    /// <summary>Properties for defining a `ALIYUN::ALB::HealthCheckTemplate`.</summary>
    [JsiiInterface(nativeType: typeof(IRosHealthCheckTemplateProps), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosHealthCheckTemplateProps")]
    public interface IRosHealthCheckTemplateProps
    {
        /// <remarks>
        /// <strong>Property</strong>: healthCheckTemplateName: The name of the health check template.
        /// The name must be 2 to 128 characters in length, and can contain letters, digits, periods
        /// (.), underscores (_), and hyphens (-). The name must start with a letter.
        /// </remarks>
        [JsiiProperty(name: "healthCheckTemplateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object HealthCheckTemplateName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: healthCheckCodes: The HTTP status code for a successful health check.
        /// If HealthCheckProtocol is set to HTTP, HealthCheckCodes can be set to http_2xx (default), http_3xx, http_4xx, and http_5xx. Separate multiple HTTP status codes with commas (,).
        /// If HealthCheckProtocol is set to gRPC, HealthCheckCodes can be set to 0 to 99. Default value: 0. Value ranges are supported. You can enter at most 20 value ranges and must separate
        /// them with commas (,).
        /// Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
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
        /// <strong>Property</strong>: healthCheckConnectPort: The port that is used for health checks.
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
        /// <strong>Property</strong>: healthCheckHost: The domain name that is used for health checks.
        /// Default value: $SERVER_IP. The domain name is 1 to 80 characters in length. Make sure that the destination
        /// CIDR block meets the following requirements:
        /// The domain name can contain lowercase letters, digits, hyphens (-), and periods (.).
        /// The domain name contains at least one period (.) but does not start or end with a
        /// period (.).
        /// The rightmost domain label can contain only letters, and cannot contain digits or
        /// hyphens (-).
        /// Other domain labels cannot start or end with a hyphen (-).
        /// This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
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
        /// <strong>Property</strong>: healthCheckInterval: The interval between two consecutive health checks. Unit: seconds.
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
        /// <strong>Property</strong>: healthCheckMethod: The HTTP method that is used for health checks. Valid values:
        /// HEAD: By default, the ALB instance sends HEAD requests to a backend server to perform
        /// HTTP health checks.
        /// POST: By default, gRPC health checks use the POST method.
        /// GET: If the length of a response exceeds 8 KB, the response is truncated. However, the
        /// health check result is not affected.
        /// Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
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
        /// <strong></strong>: $ ^ : ' , +. The URL path must start with a forward slash (/).
        /// Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
        ///
        /// <strong>Property</strong>: healthCheckPath: The URL path that is used for health checks.
        /// It must be 1 to 80 characters in length, and can contain letters, digits, hyphens
        /// (-), forward slashes (/), periods (.), percent signs (%), question marks (?), number
        /// signs (#), and ampersands (&). It can also contain the following extended characters:
        /// _ ; ~ ! ( ) * [ ]
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
        /// <strong>Property</strong>: healthCheckProtocol: The protocol that is used for health checks. Valid values:
        /// HTTP: The ALB instance sends HEAD or GET requests to a backend server to simulate access
        /// from a browser and check whether the backend server is healthy. This is the default
        /// protocol.
        /// TCP: To perform TCP health checks, ALB sends SYN packets to a backend server to check
        /// whether the port of the backend server is available to receive requests.
        /// GRPC: To perform gRPC health checks, ALB sends POST or GET requests to a backend server
        /// to check whether the backend server is healthy.
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
        /// <strong>Property</strong>: healthCheckTimeout: The timeout period of a health check. Unit: seconds. If a backend server does not
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

        /// <remarks>
        /// <strong>Property</strong>: healthyThreshold: The number of times that an unhealthy backend server must consecutively pass health
        /// checks before it is declared healthy. In this case, the health status is changed from
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

        /// <remarks>
        /// <strong>Property</strong>: unhealthyThreshold: The number of times that a healthy backend server must consecutively fail health checks
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

        /// <summary>Properties for defining a `ALIYUN::ALB::HealthCheckTemplate`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosHealthCheckTemplateProps), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosHealthCheckTemplateProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.IRosHealthCheckTemplateProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: healthCheckTemplateName: The name of the health check template.
            /// The name must be 2 to 128 characters in length, and can contain letters, digits, periods
            /// (.), underscores (_), and hyphens (-). The name must start with a letter.
            /// </remarks>
            [JsiiProperty(name: "healthCheckTemplateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object HealthCheckTemplateName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: healthCheckCodes: The HTTP status code for a successful health check.
            /// If HealthCheckProtocol is set to HTTP, HealthCheckCodes can be set to http_2xx (default), http_3xx, http_4xx, and http_5xx. Separate multiple HTTP status codes with commas (,).
            /// If HealthCheckProtocol is set to gRPC, HealthCheckCodes can be set to 0 to 99. Default value: 0. Value ranges are supported. You can enter at most 20 value ranges and must separate
            /// them with commas (,).
            /// Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckCodes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? HealthCheckCodes
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: healthCheckConnectPort: The port that is used for health checks.
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
            /// <strong>Property</strong>: healthCheckHost: The domain name that is used for health checks.
            /// Default value: $SERVER_IP. The domain name is 1 to 80 characters in length. Make sure that the destination
            /// CIDR block meets the following requirements:
            /// The domain name can contain lowercase letters, digits, hyphens (-), and periods (.).
            /// The domain name contains at least one period (.) but does not start or end with a
            /// period (.).
            /// The rightmost domain label can contain only letters, and cannot contain digits or
            /// hyphens (-).
            /// Other domain labels cannot start or end with a hyphen (-).
            /// This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckHost", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HealthCheckHost
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: healthCheckInterval: The interval between two consecutive health checks. Unit: seconds.
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
            /// <strong>Property</strong>: healthCheckMethod: The HTTP method that is used for health checks. Valid values:
            /// HEAD: By default, the ALB instance sends HEAD requests to a backend server to perform
            /// HTTP health checks.
            /// POST: By default, gRPC health checks use the POST method.
            /// GET: If the length of a response exceeds 8 KB, the response is truncated. However, the
            /// health check result is not affected.
            /// Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckMethod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HealthCheckMethod
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong></strong>: $ ^ : ' , +. The URL path must start with a forward slash (/).
            /// Note This parameter is required only if the HealthCheckProtocol parameter is set to HTTP.
            ///
            /// <strong>Property</strong>: healthCheckPath: The URL path that is used for health checks.
            /// It must be 1 to 80 characters in length, and can contain letters, digits, hyphens
            /// (-), forward slashes (/), periods (.), percent signs (%), question marks (?), number
            /// signs (#), and ampersands (&). It can also contain the following extended characters:
            /// _ ; ~ ! ( ) * [ ]
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HealthCheckPath
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: healthCheckProtocol: The protocol that is used for health checks. Valid values:
            /// HTTP: The ALB instance sends HEAD or GET requests to a backend server to simulate access
            /// from a browser and check whether the backend server is healthy. This is the default
            /// protocol.
            /// TCP: To perform TCP health checks, ALB sends SYN packets to a backend server to check
            /// whether the port of the backend server is available to receive requests.
            /// GRPC: To perform gRPC health checks, ALB sends POST or GET requests to a backend server
            /// to check whether the backend server is healthy.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HealthCheckProtocol
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: healthCheckTimeout: The timeout period of a health check. Unit: seconds. If a backend server does not
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

            /// <remarks>
            /// <strong>Property</strong>: healthyThreshold: The number of times that an unhealthy backend server must consecutively pass health
            /// checks before it is declared healthy. In this case, the health status is changed from
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

            /// <remarks>
            /// <strong>Property</strong>: unhealthyThreshold: The number of times that a healthy backend server must consecutively fail health checks
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
}
