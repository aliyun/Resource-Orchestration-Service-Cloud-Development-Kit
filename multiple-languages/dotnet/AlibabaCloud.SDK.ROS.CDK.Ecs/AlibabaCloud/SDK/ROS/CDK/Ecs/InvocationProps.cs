using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ECS::Invocation`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.InvocationProps")]
    public class InvocationProps : AlibabaCloud.SDK.ROS.CDK.Ecs.IInvocationProps
    {
        /// <summary>Property commandId: The id of command.</summary>
        [JsiiProperty(name: "commandId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object CommandId
        {
            get;
            set;
        }

        /// <summary>Property instanceIds: The instance id list.</summary>
        /// <remarks>
        /// Select up to 50 instances at a time.Instances status must be running.
        /// </remarks>
        [JsiiProperty(name: "instanceIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object InstanceIds
        {
            get;
            set;
        }

        /// <summary>Property frequency: The frequency of timing execution (the shortest frequency is performed every 1 minute).</summary>
        /// <remarks>
        /// It iss mandatory when Timing is True.The value rule follows the rules of the cron expression.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "frequency", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Frequency
        {
            get;
            set;
        }

        /// <summary>Property parameters: The key-value pairs of custom parameters passed in when the script contains custom parameters.</summary>
        /// <remarks>
        /// Number of custom parameters: 0 to 10.
        /// The key cannot be an empty string. It can be up to 64 characters in length.
        /// The value can be an empty string.
        /// After the custom parameters and the original script content are Base64 encoded, the total size cannot exceed 16 KB.
        /// The set of custom parameter names must be a subset of the parameter set that is defined when you created the script. You can use an empty string to represent the parameters that are not passed in.
        /// Default value: null, indicating that this parameter is canceled and customer parameters are disabled.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "parameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        public object? Parameters
        {
            get;
            set;
        }

        /// <summary>Property timed: Whether it is timed execution.</summary>
        /// <remarks>
        /// Default is False.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "timed", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Timed
        {
            get;
            set;
        }
    }
}
