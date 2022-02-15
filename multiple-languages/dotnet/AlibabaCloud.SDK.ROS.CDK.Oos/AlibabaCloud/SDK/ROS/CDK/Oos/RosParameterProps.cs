using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oos
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::OOS::Parameter`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-oos.RosParameterProps")]
    public class RosParameterProps : AlibabaCloud.SDK.ROS.CDK.Oos.IRosParameterProps
    {
        /// <remarks>
        /// <strong>Property</strong>: name: The name of the parameter.
        /// The name must be 1 to 200 characters in length,and can contain letters, digits, hyphens (-), and underscores (_).
        /// It cannot start with ALIYUN, ACS, ALIBABA, ALICLOUD, or OOS.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Name
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: type: The data type of the common parameter.
        /// Valid values: String and StringList.
        /// </remarks>
        [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Type
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: value: The value of the parameter.
        /// The value must be 1 to 4096 characters in length.
        /// </remarks>
        [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Value
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: constraints: The constraints of the parameter.
        /// By default, this parameter is null. Valid values:
        /// AllowedValues: The value that is allowed for the parameter. It must be an array string.
        /// AllowedPattern: The pattern that is allowed for the parameter. It must be a regular expression.
        /// MinLength: The minimum length of the parameter.
        /// MaxLength: The maximum length of the parameter.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "constraints", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Constraints
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the parameter.
        /// The description must be 1 to 200 characters in length.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Description
        {
            get;
            set;
        }
    }
}
