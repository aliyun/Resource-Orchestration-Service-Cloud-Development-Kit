using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::FC::Function`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-fc.FunctionProps")]
    public class FunctionProps : AlibabaCloud.SDK.ROS.CDK.Fc.IFunctionProps
    {
        /// <summary>Property functionName: Function name.</summary>
        [JsiiProperty(name: "functionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object FunctionName
        {
            get;
            set;
        }

        /// <summary>Property handler: The function execution entry point.</summary>
        [JsiiProperty(name: "handler", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Handler
        {
            get;
            set;
        }

        /// <summary>Property runtime: The function runtime environment.</summary>
        /// <remarks>
        /// Supporting nodejs6, nodejs8, nodejs10, nodejs12, python2.7, python3, java8, custom, custom-container and so on
        /// </remarks>
        [JsiiProperty(name: "runtime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Runtime
        {
            get;
            set;
        }

        /// <summary>Property serviceName: Service name.</summary>
        [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ServiceName
        {
            get;
            set;
        }

        /// <summary>Property asyncConfiguration: Configuration of asynchronous function calls.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "asyncConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosFunction.AsyncConfigurationProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? AsyncConfiguration
        {
            get;
            set;
        }

        /// <summary>Property caPort: Custom runtime and custom container runtime dedicated fields, which represent the port that the started custom http server listens to.</summary>
        /// <remarks>
        /// The default value is 9000
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "caPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? CaPort
        {
            get;
            set;
        }

        /// <summary>Property code: The code that contains the function implementation.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "code", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosFunction.CodeProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? Code
        {
            get;
            set;
        }

        /// <summary>Property customContainerConfig: Custom container runtime related configuration.</summary>
        /// <remarks>
        /// After configuration, the function can be replaced with a custom container to execute the function
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "customContainerConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosFunction.CustomContainerConfigProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? CustomContainerConfig
        {
            get;
            set;
        }

        /// <summary>Property description: Function description.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <summary>Property environmentVariables: The environment variable set for the function, you can get the value of the environment variable in the function.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "environmentVariables", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true, isOverride: true)]
        public object? EnvironmentVariables
        {
            get;
            set;
        }

        /// <summary>Property initializationTimeout: the max execution time of the initializer, in second.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "initializationTimeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? InitializationTimeout
        {
            get;
            set;
        }

        /// <summary>Property initializer: the entry point of the initializer.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "initializer", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Initializer
        {
            get;
            set;
        }

        /// <summary>Property instanceConcurrency: Function instance concurrency.</summary>
        /// <remarks>
        /// Value can be between 1 to 100.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceConcurrency", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? InstanceConcurrency
        {
            get;
            set;
        }

        /// <summary>Property instanceType: Instance type.</summary>
        /// <remarks>
        /// Value:e1: flexible instance. Memory size between 128 and 3072c1: performance instance. Memory size allow values are 4096, 8192, 16384 and 32768
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? InstanceType
        {
            get;
            set;
        }

        /// <summary>Property memorySize: The amount of memory that’s used to run function, in MB.</summary>
        /// <remarks>
        /// Function Compute uses this value to allocate CPU resources proportionally. Defaults to 128 MB. It can be multiple of 64 MB and between 128 MB and 3072 MB.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "memorySize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? MemorySize
        {
            get;
            set;
        }

        /// <summary>Property timeout: The maximum time duration a function can run, in seconds.</summary>
        /// <remarks>
        /// After which Function Compute terminates the execution. Defaults to 3 seconds, and can be between 1 to 600 seconds.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "timeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Timeout
        {
            get;
            set;
        }
    }
}
