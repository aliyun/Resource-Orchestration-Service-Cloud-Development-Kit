using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ECS::Command`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.RosCommandProps")]
    public class RosCommandProps : AlibabaCloud.SDK.ROS.CDK.Ecs.IRosCommandProps
    {
        /// <remarks>
        /// <strong>Property</strong>: type: The type of command.
        /// </remarks>
        [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Type
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: commandContent: The content of command. Content requires base64 encoding. Maximum size support 16KB.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "commandContent", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? CommandContent
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of command.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: enableParameter: Specifies whether the script contains custom parameters.
        /// Default value: false
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "enableParameter", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? EnableParameter
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of command.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Name
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: timeout: Total timeout when the command is executed in the instance. Input the time unit as second. Default is 60s.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "timeout", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? Timeout
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: workingDir: The path where command will be executed in the instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "workingDir", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? WorkingDir
        {
            get;
            set;
        }
    }
}
