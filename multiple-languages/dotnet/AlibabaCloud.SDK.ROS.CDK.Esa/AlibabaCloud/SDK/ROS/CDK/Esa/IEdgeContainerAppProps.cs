using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Properties for defining a `EdgeContainerApp`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-edgecontainerapp
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IEdgeContainerAppProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.EdgeContainerAppProps")]
    public interface IEdgeContainerAppProps
    {
        /// <summary>Property edgeContainerAppName: The name of the application.</summary>
        /// <remarks>
        /// The name must start with a lowercase letter and can contain lowercase letters, digits, and hyphens (-). The name must be 6 to 128 characters in length.
        /// </remarks>
        [JsiiProperty(name: "edgeContainerAppName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EdgeContainerAppName
        {
            get;
        }

        /// <summary>Property servicePort: The server port.</summary>
        /// <remarks>
        /// Valid values: 1 to 65535.
        /// </remarks>
        [JsiiProperty(name: "servicePort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ServicePort
        {
            get;
        }

        /// <summary>Property targetPort: The backend port, which is also the service port of the application.</summary>
        /// <remarks>
        /// Valid values: 1 to 65535.
        /// </remarks>
        [JsiiProperty(name: "targetPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TargetPort
        {
            get;
        }

        /// <summary>Property healthCheckFailTimes: The number of consecutive failed health checks required for an application to be considered as unhealthy.</summary>
        /// <remarks>
        /// Valid values: 1 to 10. Default value: 5.
        /// </remarks>
        [JsiiProperty(name: "healthCheckFailTimes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HealthCheckFailTimes
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property healthCheckHost: The domain name that is used for health checks.</summary>
        /// <remarks>
        /// This parameter is empty by default.
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

        /// <summary>Property healthCheckHttpCode: The HTTP status code returned for a successful health check.</summary>
        /// <remarks>
        /// Valid values:
        /// http_2xx (default)http_3xx
        /// </remarks>
        [JsiiProperty(name: "healthCheckHttpCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HealthCheckHttpCode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property healthCheckInterval: The interval between two consecutive health checks.</summary>
        /// <remarks>
        /// Unit: seconds. Valid values: 1 to 50. Default value: 5.
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

        /// <summary>Property healthCheckMethod: The HTTP request method for health checks.</summary>
        /// <remarks>
        /// Valid values:
        /// HEAD (default): requests the headers of the resource.
        /// GET: requests the specified resource and returns both the headers and entity body.
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

        /// <summary>Property healthCheckPort: The port used for health checks.</summary>
        /// <remarks>
        /// Valid values: 1 to 65535. Default value: 80.
        /// </remarks>
        [JsiiProperty(name: "healthCheckPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HealthCheckPort
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property healthCheckSuccTimes: The number of consecutive successful health checks required for an application to be considered as healthy.</summary>
        /// <remarks>
        /// Valid values: 1 to 10. Default value: 2.
        /// </remarks>
        [JsiiProperty(name: "healthCheckSuccTimes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HealthCheckSuccTimes
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property healthCheckTimeout: The timeout period of a health check response.</summary>
        /// <remarks>
        /// If a backend ECS instance does not respond within the specified timeout period, the ECS instance fails the health check. Unit: seconds. Valid values: 1 to 100. Default value: 3.
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

        /// <summary>Property healthCheckType: The health check type.</summary>
        /// <remarks>
        /// By default, this parameter is left empty. Valid values:
        /// l4: Layer 4 health check.
        /// l7: Layer 7 health check.
        /// </remarks>
        [JsiiProperty(name: "healthCheckType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HealthCheckType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property healthCheckUri: The URI used for health checks.</summary>
        /// <remarks>
        /// The URI must be 1 to 80 characters in length. Default value: "/".
        /// </remarks>
        [JsiiProperty(name: "healthCheckUri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HealthCheckUri
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property remarks: The remarks.</summary>
        /// <remarks>
        /// This parameter is empty by default.
        /// </remarks>
        [JsiiProperty(name: "remarks", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Remarks
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `EdgeContainerApp`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-edgecontainerapp
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IEdgeContainerAppProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.EdgeContainerAppProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IEdgeContainerAppProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property edgeContainerAppName: The name of the application.</summary>
            /// <remarks>
            /// The name must start with a lowercase letter and can contain lowercase letters, digits, and hyphens (-). The name must be 6 to 128 characters in length.
            /// </remarks>
            [JsiiProperty(name: "edgeContainerAppName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EdgeContainerAppName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property servicePort: The server port.</summary>
            /// <remarks>
            /// Valid values: 1 to 65535.
            /// </remarks>
            [JsiiProperty(name: "servicePort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ServicePort
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property targetPort: The backend port, which is also the service port of the application.</summary>
            /// <remarks>
            /// Valid values: 1 to 65535.
            /// </remarks>
            [JsiiProperty(name: "targetPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TargetPort
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property healthCheckFailTimes: The number of consecutive failed health checks required for an application to be considered as unhealthy.</summary>
            /// <remarks>
            /// Valid values: 1 to 10. Default value: 5.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckFailTimes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HealthCheckFailTimes
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property healthCheckHost: The domain name that is used for health checks.</summary>
            /// <remarks>
            /// This parameter is empty by default.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckHost", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HealthCheckHost
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property healthCheckHttpCode: The HTTP status code returned for a successful health check.</summary>
            /// <remarks>
            /// Valid values:
            /// http_2xx (default)http_3xx
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckHttpCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HealthCheckHttpCode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property healthCheckInterval: The interval between two consecutive health checks.</summary>
            /// <remarks>
            /// Unit: seconds. Valid values: 1 to 50. Default value: 5.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HealthCheckInterval
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property healthCheckMethod: The HTTP request method for health checks.</summary>
            /// <remarks>
            /// Valid values:
            /// HEAD (default): requests the headers of the resource.
            /// GET: requests the specified resource and returns both the headers and entity body.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckMethod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HealthCheckMethod
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property healthCheckPort: The port used for health checks.</summary>
            /// <remarks>
            /// Valid values: 1 to 65535. Default value: 80.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HealthCheckPort
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property healthCheckSuccTimes: The number of consecutive successful health checks required for an application to be considered as healthy.</summary>
            /// <remarks>
            /// Valid values: 1 to 10. Default value: 2.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckSuccTimes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HealthCheckSuccTimes
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property healthCheckTimeout: The timeout period of a health check response.</summary>
            /// <remarks>
            /// If a backend ECS instance does not respond within the specified timeout period, the ECS instance fails the health check. Unit: seconds. Valid values: 1 to 100. Default value: 3.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HealthCheckTimeout
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property healthCheckType: The health check type.</summary>
            /// <remarks>
            /// By default, this parameter is left empty. Valid values:
            /// l4: Layer 4 health check.
            /// l7: Layer 7 health check.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HealthCheckType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property healthCheckUri: The URI used for health checks.</summary>
            /// <remarks>
            /// The URI must be 1 to 80 characters in length. Default value: "/".
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckUri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HealthCheckUri
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property remarks: The remarks.</summary>
            /// <remarks>
            /// This parameter is empty by default.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "remarks", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Remarks
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
