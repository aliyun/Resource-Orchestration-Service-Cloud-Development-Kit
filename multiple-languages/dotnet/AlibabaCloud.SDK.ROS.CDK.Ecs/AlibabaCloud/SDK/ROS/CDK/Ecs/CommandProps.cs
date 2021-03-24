using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ECS::Command`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ecs.CommandProps")]
    public class CommandProps : AlibabaCloud.SDK.ROS.CDK.Ecs.ICommandProps
    {
        /// <summary>Property type: The type of command.</summary>
        [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Type
        {
            get;
            set;
        }

        /// <summary>Property commandContent: The content of command.</summary>
        /// <remarks>
        /// Content requires base64 encoding. Maximum size support 16KB.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "commandContent", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? CommandContent
        {
            get;
            set;
        }

        /// <summary>Property description: The description of command.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <summary>Property enableParameter: Specifies whether the script contains custom parameters.</summary>
        /// <remarks>
        /// Default value: false
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "enableParameter", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? EnableParameter
        {
            get;
            set;
        }

        /// <summary>Property name: The name of command.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Name
        {
            get;
            set;
        }

        /// <summary>Property timeout: Total timeout when the command is executed in the instance.</summary>
        /// <remarks>
        /// Input the time unit as second. Default is 60s.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "timeout", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? Timeout
        {
            get;
            set;
        }

        /// <summary>Property workingDir: The path where command will be executed in the instance.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "workingDir", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? WorkingDir
        {
            get;
            set;
        }
    }
}
