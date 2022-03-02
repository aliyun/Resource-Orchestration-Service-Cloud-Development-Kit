using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::FC::Service`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-fc.ServiceProps")]
    public class ServiceProps : AlibabaCloud.SDK.ROS.CDK.Fc.IServiceProps
    {
        /// <summary>Property serviceName: Service name.</summary>
        [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ServiceName
        {
            get;
            set;
        }

        /// <summary>Property deletionForce: Whether force delete the service without waiting for network interfaces to be cleaned up if VpcConfig is specified.</summary>
        /// <remarks>
        /// Default value is false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "deletionForce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DeletionForce
        {
            get;
            set;
        }

        /// <summary>Property description: Service description.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <summary>Property internetAccess: Set it to true to enable Internet access.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "internetAccess", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? InternetAccess
        {
            get;
            set;
        }

        /// <summary>Property logConfig: Log configuration.</summary>
        /// <remarks>
        /// Function Compute pushes function execution logs to the configured log store.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "logConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosService.LogConfigProperty\"}]}}", isOptional: true)]
        public object? LogConfig
        {
            get;
            set;
        }

        /// <summary>Property nasConfig: NAS configuration.</summary>
        /// <remarks>
        /// Function Compute uses a specified NAS configured on the service.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "nasConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosService.NasConfigProperty\"}]}}", isOptional: true)]
        public object? NasConfig
        {
            get;
            set;
        }

        /// <summary>Property role: The role grants Function Compute the permission to access user’s cloud resources, such as pushing logs to user’s log store.</summary>
        /// <remarks>
        /// The temporary STS token generated from this role can be retrieved from function context and used to access cloud resources.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "role", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Role
        {
            get;
            set;
        }

        /// <summary>Property tags: Tags to attach to service.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create service. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-fc.RosService.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        public AlibabaCloud.SDK.ROS.CDK.Fc.RosService.ITagsProperty[]? Tags
        {
            get;
            set;
        }

        /// <summary>Property tracingConfig: The Tracing Analysis configuration.</summary>
        /// <remarks>
        /// After Function Compute integrates with Tracing Analysis, you can record the stay time of a request in Function Compute, view the cold start time for a function, and record the execution time of a function.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tracingConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-fc.RosService.TracingConfigProperty\"}]}}", isOptional: true)]
        public object? TracingConfig
        {
            get;
            set;
        }

        /// <summary>Property vpcConfig: VPC configuration.</summary>
        /// <remarks>
        /// Function Compute uses the config to setup ENI in the specific VPC.
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
