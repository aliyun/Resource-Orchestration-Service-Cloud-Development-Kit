using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc
{
    /// <summary>Properties for defining a `ALIYUN::FC::Service`.</summary>
    [JsiiInterface(nativeType: typeof(IServiceProps), fullyQualifiedName: "@alicloud/ros-cdk-fc.ServiceProps")]
    public interface IServiceProps
    {
        /// <summary>Property serviceName: Service name.</summary>
        [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ServiceName
        {
            get;
        }

        /// <summary>Property deletionForce: Whether force delete the service without waiting for network interfaces to be cleaned up if VpcConfig is specified.</summary>
        /// <remarks>
        /// Default value is false.
        /// </remarks>
        [JsiiProperty(name: "deletionForce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeletionForce
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: Service description.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property internetAccess: Set it to true to enable Internet access.</summary>
        [JsiiProperty(name: "internetAccess", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InternetAccess
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property logConfig: Log configuration.</summary>
        /// <remarks>
        /// Function Compute pushes function execution logs to the configured log store.
        /// </remarks>
        [JsiiProperty(name: "logConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosService.LogConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LogConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property nasConfig: NAS configuration.</summary>
        /// <remarks>
        /// Function Compute uses a specified NAS configured on the service.
        /// </remarks>
        [JsiiProperty(name: "nasConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosService.NasConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NasConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property role: The role grants Function Compute the permission to access user’s cloud resources, such as pushing logs to user’s log store.</summary>
        /// <remarks>
        /// The temporary STS token generated from this role can be retrieved from function context and used to access cloud resources.
        /// </remarks>
        [JsiiProperty(name: "role", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Role
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags to attach to service.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create service. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-fc.RosService.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Fc.RosService.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tracingConfig: The Tracing Analysis configuration.</summary>
        /// <remarks>
        /// After Function Compute integrates with Tracing Analysis, you can record the stay time of a request in Function Compute, view the cold start time for a function, and record the execution time of a function.
        /// </remarks>
        [JsiiProperty(name: "tracingConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosService.TracingConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TracingConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vpcBindings: Function Invocation only by Specified VPCs.</summary>
        /// <remarks>
        /// By default, you can invoke the function by using the Internet endpoint and internal endpoint after a function is created. If you want the function to be invoked only by using specified VPCs, but not the Internet endpoint or internal endpoint, you must bind the specified VPCs to the service.
        /// </remarks>
        [JsiiProperty(name: "vpcBindings", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VpcBindings
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vpcConfig: VPC configuration.</summary>
        /// <remarks>
        /// Function Compute uses the config to setup ENI in the specific VPC.
        /// </remarks>
        [JsiiProperty(name: "vpcConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosService.VpcConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VpcConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::FC::Service`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IServiceProps), fullyQualifiedName: "@alicloud/ros-cdk-fc.ServiceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fc.IServiceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property serviceName: Service name.</summary>
            [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ServiceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property deletionForce: Whether force delete the service without waiting for network interfaces to be cleaned up if VpcConfig is specified.</summary>
            /// <remarks>
            /// Default value is false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deletionForce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeletionForce
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: Service description.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property internetAccess: Set it to true to enable Internet access.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "internetAccess", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InternetAccess
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property logConfig: Log configuration.</summary>
            /// <remarks>
            /// Function Compute pushes function execution logs to the configured log store.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "logConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosService.LogConfigProperty\"}]}}", isOptional: true)]
            public object? LogConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property nasConfig: NAS configuration.</summary>
            /// <remarks>
            /// Function Compute uses a specified NAS configured on the service.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "nasConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosService.NasConfigProperty\"}]}}", isOptional: true)]
            public object? NasConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property role: The role grants Function Compute the permission to access user’s cloud resources, such as pushing logs to user’s log store.</summary>
            /// <remarks>
            /// The temporary STS token generated from this role can be retrieved from function context and used to access cloud resources.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "role", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Role
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags to attach to service.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create service. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-fc.RosService.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Fc.RosService.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Fc.RosService.ITagsProperty[]?>();
            }

            /// <summary>Property tracingConfig: The Tracing Analysis configuration.</summary>
            /// <remarks>
            /// After Function Compute integrates with Tracing Analysis, you can record the stay time of a request in Function Compute, view the cold start time for a function, and record the execution time of a function.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tracingConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosService.TracingConfigProperty\"}]}}", isOptional: true)]
            public object? TracingConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vpcBindings: Function Invocation only by Specified VPCs.</summary>
            /// <remarks>
            /// By default, you can invoke the function by using the Internet endpoint and internal endpoint after a function is created. If you want the function to be invoked only by using specified VPCs, but not the Internet endpoint or internal endpoint, you must bind the specified VPCs to the service.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vpcBindings", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? VpcBindings
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vpcConfig: VPC configuration.</summary>
            /// <remarks>
            /// Function Compute uses the config to setup ENI in the specific VPC.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vpcConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosService.VpcConfigProperty\"}]}}", isOptional: true)]
            public object? VpcConfig
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
