using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc
{
    /// <summary>Properties for defining a `ALIYUN::FC::Function`.</summary>
    [JsiiInterface(nativeType: typeof(IFunctionProps), fullyQualifiedName: "@alicloud/ros-cdk-fc.FunctionProps")]
    public interface IFunctionProps
    {
        /// <summary>Property functionName: Function name.</summary>
        [JsiiProperty(name: "functionName", typeJson: "{\"primitive\":\"string\"}")]
        string FunctionName
        {
            get;
        }

        /// <summary>Property handler: The function execution entry point.</summary>
        [JsiiProperty(name: "handler", typeJson: "{\"primitive\":\"string\"}")]
        string Handler
        {
            get;
        }

        /// <summary>Property runtime: The function runtime environment.</summary>
        /// <remarks>
        /// Supporting nodejs6, nodejs8, nodejs10, nodejs12, python2.7, python3, java8, custom, custom-container and so on
        /// </remarks>
        [JsiiProperty(name: "runtime", typeJson: "{\"primitive\":\"string\"}")]
        string Runtime
        {
            get;
        }

        /// <summary>Property serviceName: Service name.</summary>
        [JsiiProperty(name: "serviceName", typeJson: "{\"primitive\":\"string\"}")]
        string ServiceName
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
        [JsiiProperty(name: "caPort", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? CaPort
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

        /// <summary>Property description: Function description.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
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

        /// <summary>Property initializationTimeout: the max execution time of the initializer, in second.</summary>
        [JsiiProperty(name: "initializationTimeout", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? InitializationTimeout
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property initializer: the entry point of the initializer.</summary>
        [JsiiProperty(name: "initializer", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Initializer
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
        [JsiiProperty(name: "instanceConcurrency", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? InstanceConcurrency
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceType: Instance type.</summary>
        /// <remarks>
        /// Value:e1: flexible instance. Memory size between 128 and 3072c1: performance instance. Memory size allow values are 4096, 8192, 16384 and 32768
        /// </remarks>
        [JsiiProperty(name: "instanceType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? InstanceType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property memorySize: The amount of memory that’s used to run function, in MB.</summary>
        /// <remarks>
        /// Function Compute uses this value to allocate CPU resources proportionally. Defaults to 128 MB. It can be multiple of 64 MB and between 128 MB and 3072 MB.
        /// </remarks>
        [JsiiProperty(name: "memorySize", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? MemorySize
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property timeout: The maximum time duration a function can run, in seconds.</summary>
        /// <remarks>
        /// After which Function Compute terminates the execution. Defaults to 3 seconds, and can be between 1 to 600 seconds.
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

        /// <summary>Properties for defining a `ALIYUN::FC::Function`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IFunctionProps), fullyQualifiedName: "@alicloud/ros-cdk-fc.FunctionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fc.IFunctionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property functionName: Function name.</summary>
            [JsiiProperty(name: "functionName", typeJson: "{\"primitive\":\"string\"}")]
            public string FunctionName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property handler: The function execution entry point.</summary>
            [JsiiProperty(name: "handler", typeJson: "{\"primitive\":\"string\"}")]
            public string Handler
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property runtime: The function runtime environment.</summary>
            /// <remarks>
            /// Supporting nodejs6, nodejs8, nodejs10, nodejs12, python2.7, python3, java8, custom, custom-container and so on
            /// </remarks>
            [JsiiProperty(name: "runtime", typeJson: "{\"primitive\":\"string\"}")]
            public string Runtime
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property serviceName: Service name.</summary>
            [JsiiProperty(name: "serviceName", typeJson: "{\"primitive\":\"string\"}")]
            public string ServiceName
            {
                get => GetInstanceProperty<string>()!;
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
            [JsiiProperty(name: "caPort", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? CaPort
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property code: The code that contains the function implementation.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "code", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosFunction.CodeProperty\"}]}}", isOptional: true)]
            public object? Code
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

            /// <summary>Property description: Function description.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property environmentVariables: The environment variable set for the function, you can get the value of the environment variable in the function.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "environmentVariables", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? EnvironmentVariables
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property initializationTimeout: the max execution time of the initializer, in second.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "initializationTimeout", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? InitializationTimeout
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property initializer: the entry point of the initializer.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "initializer", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Initializer
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property instanceConcurrency: Function instance concurrency.</summary>
            /// <remarks>
            /// Value can be between 1 to 100.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceConcurrency", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? InstanceConcurrency
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property instanceType: Instance type.</summary>
            /// <remarks>
            /// Value:e1: flexible instance. Memory size between 128 and 3072c1: performance instance. Memory size allow values are 4096, 8192, 16384 and 32768
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? InstanceType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property memorySize: The amount of memory that’s used to run function, in MB.</summary>
            /// <remarks>
            /// Function Compute uses this value to allocate CPU resources proportionally. Defaults to 128 MB. It can be multiple of 64 MB and between 128 MB and 3072 MB.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "memorySize", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? MemorySize
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property timeout: The maximum time duration a function can run, in seconds.</summary>
            /// <remarks>
            /// After which Function Compute terminates the execution. Defaults to 3 seconds, and can be between 1 to 600 seconds.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "timeout", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? Timeout
            {
                get => GetInstanceProperty<double?>();
            }
        }
    }
}
