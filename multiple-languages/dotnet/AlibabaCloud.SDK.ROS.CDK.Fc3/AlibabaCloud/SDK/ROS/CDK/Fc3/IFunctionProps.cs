using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc3
{
    /// <summary>Properties for defining a `Function`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-function
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IFunctionProps), fullyQualifiedName: "@alicloud/ros-cdk-fc3.FunctionProps")]
    public interface IFunctionProps
    {
        /// <summary>Property functionName: The name of the function.</summary>
        [JsiiProperty(name: "functionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FunctionName
        {
            get;
        }

        /// <summary>Property handler: The handler of the function.</summary>
        [JsiiProperty(name: "handler", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Handler
        {
            get;
        }

        /// <summary>Property runtime: The programming language of the function.</summary>
        [JsiiProperty(name: "runtime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Runtime
        {
            get;
        }

        /// <summary>Property code: Function code ZIP package.</summary>
        /// <remarks>
        /// Choose one of Code and CustomContainerConfig.
        /// </remarks>
        [JsiiProperty(name: "code", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc3.RosFunction.CodeProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Code
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property cpu: The CPU size of the function in vCPU as a multiple of 0.05 vCPU. The minimum value is 0.05 and the maximum value is 16. At the same time, the ratio of cpu to memorySize (in GB) should be between 1:1 and 1:4.</summary>
        [JsiiProperty(name: "cpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Cpu
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property customContainerConfig: Custom container configuration.</summary>
        /// <remarks>
        /// Choose one of Code and CustomContainerConfig.
        /// </remarks>
        [JsiiProperty(name: "customContainerConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc3.RosFunction.CustomContainerConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CustomContainerConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property customDns: Custom DNS configuration.</summary>
        [JsiiProperty(name: "customDns", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc3.RosFunction.CustomDnsProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CustomDns
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property customRuntimeConfig: Custom runtime configuration.</summary>
        [JsiiProperty(name: "customRuntimeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc3.RosFunction.CustomRuntimeConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CustomRuntimeConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: Function description.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property diskSize: The disk size of the function, in MB.</summary>
        [JsiiProperty(name: "diskSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DiskSize
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property environmentVariables: The environment variables of the function.</summary>
        [JsiiProperty(name: "environmentVariables", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnvironmentVariables
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property gpuConfig: The GPU configuration of the function.</summary>
        [JsiiProperty(name: "gpuConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc3.RosFunction.GpuConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GpuConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceConcurrency: The maximum number of concurrent instances of the function.</summary>
        [JsiiProperty(name: "instanceConcurrency", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceConcurrency
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceLifecycleConfig: The instance lifecycle configuration of the function.</summary>
        [JsiiProperty(name: "instanceLifecycleConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc3.RosFunction.InstanceLifecycleConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceLifecycleConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property internetAccess: Whether the function can access the Internet.</summary>
        [JsiiProperty(name: "internetAccess", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InternetAccess
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property layers: The layers of the function.</summary>
        [JsiiProperty(name: "layers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Layers
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property logConfig: The log configuration of the function.</summary>
        [JsiiProperty(name: "logConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc3.RosFunction.LogConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LogConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property memorySize: The memory size of the function, in MB.</summary>
        [JsiiProperty(name: "memorySize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MemorySize
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property nasConfig: The NAS configuration of the function.</summary>
        [JsiiProperty(name: "nasConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc3.RosFunction.NasConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NasConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ossMountConfig: The OSS mount configuration of the function.</summary>
        [JsiiProperty(name: "ossMountConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc3.RosFunction.OssMountConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OssMountConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property role: The user is authorized to the RAM role of Function Compute.</summary>
        /// <remarks>
        /// After setting, Function Compute will assume the role and generate temporary access credentials. The temporary access credentials of this role can be used in functions to access specified Alibaba Cloud services, such as OSS and OTS.
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

        /// <summary>Property timeout: The timeout of the function.</summary>
        [JsiiProperty(name: "timeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Timeout
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tracingConfig: The tracing configuration of the function.</summary>
        [JsiiProperty(name: "tracingConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc3.RosFunction.TracingConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TracingConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vpcConfig: The VPC configuration of the function.</summary>
        [JsiiProperty(name: "vpcConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc3.RosFunction.VpcConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VpcConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Function`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-function
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IFunctionProps), fullyQualifiedName: "@alicloud/ros-cdk-fc3.FunctionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fc3.IFunctionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property functionName: The name of the function.</summary>
            [JsiiProperty(name: "functionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FunctionName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property handler: The handler of the function.</summary>
            [JsiiProperty(name: "handler", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Handler
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property runtime: The programming language of the function.</summary>
            [JsiiProperty(name: "runtime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Runtime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property code: Function code ZIP package.</summary>
            /// <remarks>
            /// Choose one of Code and CustomContainerConfig.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "code", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc3.RosFunction.CodeProperty\"}]}}", isOptional: true)]
            public object? Code
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property cpu: The CPU size of the function in vCPU as a multiple of 0.05 vCPU. The minimum value is 0.05 and the maximum value is 16. At the same time, the ratio of cpu to memorySize (in GB) should be between 1:1 and 1:4.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "cpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Cpu
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property customContainerConfig: Custom container configuration.</summary>
            /// <remarks>
            /// Choose one of Code and CustomContainerConfig.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "customContainerConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc3.RosFunction.CustomContainerConfigProperty\"}]}}", isOptional: true)]
            public object? CustomContainerConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property customDns: Custom DNS configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "customDns", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc3.RosFunction.CustomDnsProperty\"}]}}", isOptional: true)]
            public object? CustomDns
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property customRuntimeConfig: Custom runtime configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "customRuntimeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc3.RosFunction.CustomRuntimeConfigProperty\"}]}}", isOptional: true)]
            public object? CustomRuntimeConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: Function description.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property diskSize: The disk size of the function, in MB.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "diskSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DiskSize
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property environmentVariables: The environment variables of the function.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "environmentVariables", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? EnvironmentVariables
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property gpuConfig: The GPU configuration of the function.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "gpuConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc3.RosFunction.GpuConfigProperty\"}]}}", isOptional: true)]
            public object? GpuConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceConcurrency: The maximum number of concurrent instances of the function.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "instanceConcurrency", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceConcurrency
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceLifecycleConfig: The instance lifecycle configuration of the function.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "instanceLifecycleConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc3.RosFunction.InstanceLifecycleConfigProperty\"}]}}", isOptional: true)]
            public object? InstanceLifecycleConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property internetAccess: Whether the function can access the Internet.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "internetAccess", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InternetAccess
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property layers: The layers of the function.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "layers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Layers
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property logConfig: The log configuration of the function.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "logConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc3.RosFunction.LogConfigProperty\"}]}}", isOptional: true)]
            public object? LogConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property memorySize: The memory size of the function, in MB.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "memorySize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MemorySize
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property nasConfig: The NAS configuration of the function.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "nasConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc3.RosFunction.NasConfigProperty\"}]}}", isOptional: true)]
            public object? NasConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ossMountConfig: The OSS mount configuration of the function.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ossMountConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc3.RosFunction.OssMountConfigProperty\"}]}}", isOptional: true)]
            public object? OssMountConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property role: The user is authorized to the RAM role of Function Compute.</summary>
            /// <remarks>
            /// After setting, Function Compute will assume the role and generate temporary access credentials. The temporary access credentials of this role can be used in functions to access specified Alibaba Cloud services, such as OSS and OTS.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "role", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Role
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property timeout: The timeout of the function.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "timeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Timeout
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tracingConfig: The tracing configuration of the function.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tracingConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc3.RosFunction.TracingConfigProperty\"}]}}", isOptional: true)]
            public object? TracingConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vpcConfig: The VPC configuration of the function.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vpcConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc3.RosFunction.VpcConfigProperty\"}]}}", isOptional: true)]
            public object? VpcConfig
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
