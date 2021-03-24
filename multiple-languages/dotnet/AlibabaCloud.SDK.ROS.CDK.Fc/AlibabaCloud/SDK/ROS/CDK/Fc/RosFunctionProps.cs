using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::FC::Function`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-fc.RosFunctionProps")]
    public class RosFunctionProps : AlibabaCloud.SDK.ROS.CDK.Fc.IRosFunctionProps
    {
        /// <remarks>
        /// <strong>Property</strong>: functionName: Function name
        /// </remarks>
        [JsiiProperty(name: "functionName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string FunctionName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: handler: The function execution entry point.
        /// </remarks>
        [JsiiProperty(name: "handler", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Handler
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: runtime: The function runtime environment. Supporting nodejs6, nodejs8, nodejs10, nodejs12, python2.7, python3, java8, custom, custom-container and so on
        /// </remarks>
        [JsiiProperty(name: "runtime", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Runtime
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: serviceName: Service name
        /// </remarks>
        [JsiiProperty(name: "serviceName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ServiceName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: asyncConfiguration: Configuration of asynchronous function calls
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "asyncConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosFunction.AsyncConfigurationProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? AsyncConfiguration
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: caPort: Custom runtime and custom container runtime dedicated fields, which represent the port that the started custom http server listens to. The default value is 9000
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "caPort", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? CaPort
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: code: The code that contains the function implementation.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "code", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosFunction.CodeProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? Code
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: customContainerConfig: Custom container runtime related configuration. After configuration, the function can be replaced with a custom container to execute the function
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "customContainerConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosFunction.CustomContainerConfigProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? CustomContainerConfig
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Function description
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: environmentVariables: The environment variable set for the function, you can get the value of the environment variable in the function.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "environmentVariables", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true, isOverride: true)]
        public object? EnvironmentVariables
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: initializationTimeout: the max execution time of the initializer, in second
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "initializationTimeout", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? InitializationTimeout
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: initializer: the entry point of the initializer
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "initializer", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Initializer
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceConcurrency: Function instance concurrency. Value can be between 1 to 100.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceConcurrency", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? InstanceConcurrency
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceType: Instance type. Value:e1: flexible instance. Memory size between 128 and 3072c1: performance instance. Memory size allow values are 4096, 8192, 16384 and 32768
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? InstanceType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: memorySize: The amount of memory that’s used to run function, in MB. Function Compute uses this value to allocate CPU resources proportionally. Defaults to 128 MB. It can be multiple of 64 MB and between 128 MB and 3072 MB.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "memorySize", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? MemorySize
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: timeout: The maximum time duration a function can run, in seconds. After which Function Compute terminates the execution. Defaults to 3 seconds, and can be between 1 to 600 seconds.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "timeout", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? Timeout
        {
            get;
            set;
        }
    }
}
