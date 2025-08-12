using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc
{
    /// <summary>Properties for defining a `Function`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-function
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IFunctionProps), fullyQualifiedName: "@alicloud/ros-cdk-fc.FunctionProps")]
    public interface IFunctionProps
    {
        /// <summary>Property functionName: Function name.</summary>
        [JsiiProperty(name: "functionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FunctionName
        {
            get;
        }

        /// <summary>Property handler: The function execution entry point.</summary>
        [JsiiProperty(name: "handler", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Handler
        {
            get;
        }

        /// <summary>Property runtime: The function runtime environment.</summary>
        /// <remarks>
        /// Supporting nodejs16、nodejs14、nodejs12、nodejs10、nodejs8、nodejs6、nodejs4.4、python3.10、python3.9、python3、python2.7、java11、java8、go1、php7.2、dotnetcore3.1、dotnetcore2.1、custom.debian10、custom和custom-container and so on
        /// </remarks>
        [JsiiProperty(name: "runtime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Runtime
        {
            get;
        }

        /// <summary>Property serviceName: Service name.</summary>
        [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ServiceName
        {
            get;
        }

        /// <summary>Property asyncConfiguration: Configuration of asynchronous function calls.</summary>
        [JsiiProperty(name: "asyncConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosFunction.AsyncConfigurationProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AsyncConfiguration
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property caPort: Custom runtime and custom container runtime dedicated fields, which represent the port that the started custom http server listens to.</summary>
        /// <remarks>
        /// The default value is 9000
        /// </remarks>
        [JsiiProperty(name: "caPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CaPort
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property code: The code that contains the function implementation.</summary>
        [JsiiProperty(name: "code", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosFunction.CodeProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Code
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property cpu: The number of vCPUs of the function.</summary>
        /// <remarks>
        /// The value must be a multiple of 0.05.
        /// </remarks>
        [JsiiProperty(name: "cpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Cpu
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property customContainerConfig: Custom container runtime related configuration.</summary>
        /// <remarks>
        /// After configuration, the function can be replaced with a custom container to execute the function
        /// </remarks>
        [JsiiProperty(name: "customContainerConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosFunction.CustomContainerConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CustomContainerConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property customDns: The custom DNS configurations of the function.</summary>
        [JsiiProperty(name: "customDns", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosFunction.CustomDNSProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CustomDns
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property customHealthCheckConfig: The health check configurations for the custom runtime and custom container.</summary>
        [JsiiProperty(name: "customHealthCheckConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosFunction.CustomHealthCheckConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CustomHealthCheckConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property customRuntimeConfig: Custom runtime related configuration.</summary>
        [JsiiProperty(name: "customRuntimeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosFunction.CustomRuntimeConfigProperty\"}]}}", isOptional: true)]
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

        /// <summary>Property diskSize: The disk size of the function.</summary>
        /// <remarks>
        /// Unit: MB. Valid values: 512 and 10240.
        /// </remarks>
        [JsiiProperty(name: "diskSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DiskSize
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property environmentVariables: The environment variable set for the function, you can get the value of the environment variable in the function.</summary>
        [JsiiProperty(name: "environmentVariables", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnvironmentVariables
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property gpuMemorySize: The GPU memory capacity for the function.</summary>
        /// <remarks>
        /// Unit: MB. The value must be a multiple of 1,024.
        /// </remarks>
        [JsiiProperty(name: "gpuMemorySize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GpuMemorySize
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property initializationTimeout: the max execution time of the initializer, in second.</summary>
        [JsiiProperty(name: "initializationTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InitializationTimeout
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property initializer: the entry point of the initializer.</summary>
        [JsiiProperty(name: "initializer", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Initializer
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceConcurrency: Function instance concurrency.</summary>
        /// <remarks>
        /// Value can be between 1 to 100.
        /// </remarks>
        [JsiiProperty(name: "instanceConcurrency", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceConcurrency
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceLifecycleConfig: The configuration of the instance lifecycle function.</summary>
        [JsiiProperty(name: "instanceLifecycleConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosFunction.InstanceLifecycleConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceLifecycleConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceSoftConcurrency: The soft concurrency of the instance.</summary>
        /// <remarks>
        /// You can use this parameter to implement graceful scale-up of instances. If the number of concurrent requests on an instance is greater than the value of soft concurrency, an instance scale-up is triggered. For example, if your instance requires a long time to start, you can specify a suitable soft concurrency to start the instance in advance.The value must be less than or equal to that of the instanceConcurrency parameter.
        /// </remarks>
        [JsiiProperty(name: "instanceSoftConcurrency", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceSoftConcurrency
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceType: Instance type.</summary>
        /// <remarks>
        /// Value:- e1: Elastic Instance.- c1: Performance Instance.- fc.gpu.tesla.1: GPU Tesla Series Instance Type.- fc.gpu.ampere.1: GPU Ampere Series Instance Type.- fc.gpu.ada.1: GPU Ada Series Instance Type.- g1: Same as fc.gpu.tesla.1.
        /// </remarks>
        [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property memorySize: The amount of memory that’s used to run function, in MB.</summary>
        /// <remarks>
        /// Function Compute uses this value to allocate CPU resources proportionally. Defaults to 128 MB. It can be multiple of 64 MB and between 128 MB and 32768 MB.
        /// </remarks>
        [JsiiProperty(name: "memorySize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MemorySize
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property timeout: The maximum time duration a function can run, in seconds.</summary>
        /// <remarks>
        /// After which Function Compute terminates the execution. Defaults to 3 seconds, and can be between 1 to 86400 seconds.
        /// </remarks>
        [JsiiProperty(name: "timeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Timeout
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Function`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-function
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IFunctionProps), fullyQualifiedName: "@alicloud/ros-cdk-fc.FunctionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fc.IFunctionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property functionName: Function name.</summary>
            [JsiiProperty(name: "functionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FunctionName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property handler: The function execution entry point.</summary>
            [JsiiProperty(name: "handler", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Handler
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property runtime: The function runtime environment.</summary>
            /// <remarks>
            /// Supporting nodejs16、nodejs14、nodejs12、nodejs10、nodejs8、nodejs6、nodejs4.4、python3.10、python3.9、python3、python2.7、java11、java8、go1、php7.2、dotnetcore3.1、dotnetcore2.1、custom.debian10、custom和custom-container and so on
            /// </remarks>
            [JsiiProperty(name: "runtime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Runtime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property serviceName: Service name.</summary>
            [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ServiceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property asyncConfiguration: Configuration of asynchronous function calls.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "asyncConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosFunction.AsyncConfigurationProperty\"}]}}", isOptional: true)]
            public object? AsyncConfiguration
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property caPort: Custom runtime and custom container runtime dedicated fields, which represent the port that the started custom http server listens to.</summary>
            /// <remarks>
            /// The default value is 9000
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "caPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CaPort
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property code: The code that contains the function implementation.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "code", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosFunction.CodeProperty\"}]}}", isOptional: true)]
            public object? Code
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property cpu: The number of vCPUs of the function.</summary>
            /// <remarks>
            /// The value must be a multiple of 0.05.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cpu", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Cpu
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property customContainerConfig: Custom container runtime related configuration.</summary>
            /// <remarks>
            /// After configuration, the function can be replaced with a custom container to execute the function
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "customContainerConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosFunction.CustomContainerConfigProperty\"}]}}", isOptional: true)]
            public object? CustomContainerConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property customDns: The custom DNS configurations of the function.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "customDns", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosFunction.CustomDNSProperty\"}]}}", isOptional: true)]
            public object? CustomDns
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property customHealthCheckConfig: The health check configurations for the custom runtime and custom container.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "customHealthCheckConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosFunction.CustomHealthCheckConfigProperty\"}]}}", isOptional: true)]
            public object? CustomHealthCheckConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property customRuntimeConfig: Custom runtime related configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "customRuntimeConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosFunction.CustomRuntimeConfigProperty\"}]}}", isOptional: true)]
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

            /// <summary>Property diskSize: The disk size of the function.</summary>
            /// <remarks>
            /// Unit: MB. Valid values: 512 and 10240.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "diskSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DiskSize
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property environmentVariables: The environment variable set for the function, you can get the value of the environment variable in the function.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "environmentVariables", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? EnvironmentVariables
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property gpuMemorySize: The GPU memory capacity for the function.</summary>
            /// <remarks>
            /// Unit: MB. The value must be a multiple of 1,024.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "gpuMemorySize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GpuMemorySize
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property initializationTimeout: the max execution time of the initializer, in second.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "initializationTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InitializationTimeout
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property initializer: the entry point of the initializer.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "initializer", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Initializer
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceConcurrency: Function instance concurrency.</summary>
            /// <remarks>
            /// Value can be between 1 to 100.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceConcurrency", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceConcurrency
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceLifecycleConfig: The configuration of the instance lifecycle function.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "instanceLifecycleConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosFunction.InstanceLifecycleConfigProperty\"}]}}", isOptional: true)]
            public object? InstanceLifecycleConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceSoftConcurrency: The soft concurrency of the instance.</summary>
            /// <remarks>
            /// You can use this parameter to implement graceful scale-up of instances. If the number of concurrent requests on an instance is greater than the value of soft concurrency, an instance scale-up is triggered. For example, if your instance requires a long time to start, you can specify a suitable soft concurrency to start the instance in advance.The value must be less than or equal to that of the instanceConcurrency parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceSoftConcurrency", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceSoftConcurrency
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceType: Instance type.</summary>
            /// <remarks>
            /// Value:- e1: Elastic Instance.- c1: Performance Instance.- fc.gpu.tesla.1: GPU Tesla Series Instance Type.- fc.gpu.ampere.1: GPU Ampere Series Instance Type.- fc.gpu.ada.1: GPU Ada Series Instance Type.- g1: Same as fc.gpu.tesla.1.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property memorySize: The amount of memory that’s used to run function, in MB.</summary>
            /// <remarks>
            /// Function Compute uses this value to allocate CPU resources proportionally. Defaults to 128 MB. It can be multiple of 64 MB and between 128 MB and 32768 MB.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "memorySize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MemorySize
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property timeout: The maximum time duration a function can run, in seconds.</summary>
            /// <remarks>
            /// After which Function Compute terminates the execution. Defaults to 3 seconds, and can be between 1 to 86400 seconds.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "timeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Timeout
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
