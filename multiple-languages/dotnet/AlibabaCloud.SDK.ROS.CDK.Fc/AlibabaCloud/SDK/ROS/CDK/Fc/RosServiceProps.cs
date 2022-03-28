using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::FC::Service`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-fc.RosServiceProps")]
    public class RosServiceProps : AlibabaCloud.SDK.ROS.CDK.Fc.IRosServiceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: serviceName: Service name
        /// </remarks>
        [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ServiceName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: deletionForce: Whether force delete the service without waiting for network interfaces to be cleaned up if VpcConfig is specified. Default value is false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "deletionForce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DeletionForce
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Service description
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: internetAccess: Set it to true to enable Internet access.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "internetAccess", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? InternetAccess
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: logConfig: Log configuration. Function Compute pushes function execution logs to the configured log store.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "logConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosService.LogConfigProperty\"}]}}", isOptional: true)]
        public object? LogConfig
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: nasConfig: NAS configuration. Function Compute uses a specified NAS configured on the service.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "nasConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosService.NasConfigProperty\"}]}}", isOptional: true)]
        public object? NasConfig
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: role: The role grants Function Compute the permission to access user’s cloud resources, such as pushing logs to user’s log store. The temporary STS token generated from this role can be retrieved from function context and used to access cloud resources.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "role", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Role
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to service. Max support 20 tags to add during create service. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-fc.RosService.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        public AlibabaCloud.SDK.ROS.CDK.Fc.RosService.ITagsProperty[]? Tags
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: tracingConfig: The Tracing Analysis configuration. After Function Compute integrates with Tracing Analysis, you can record the stay time of a request in Function Compute, view the cold start time for a function, and record the execution time of a function.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tracingConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosService.TracingConfigProperty\"}]}}", isOptional: true)]
        public object? TracingConfig
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcBindings: Function Invocation only by Specified VPCs.
        /// By default, you can invoke the function by using the Internet endpoint and internal endpoint after a function is created. If you want the function to be invoked only by using specified VPCs, but not the Internet endpoint or internal endpoint, you must bind the specified VPCs to the service.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vpcBindings", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? VpcBindings
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcConfig: VPC configuration. Function Compute uses the config to setup ENI in the specific VPC.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vpcConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosService.VpcConfigProperty\"}]}}", isOptional: true)]
        public object? VpcConfig
        {
            get;
            set;
        }
    }
}
