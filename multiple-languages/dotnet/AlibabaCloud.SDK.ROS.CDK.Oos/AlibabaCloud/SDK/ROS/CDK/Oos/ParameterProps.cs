using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oos
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::OOS::Parameter`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-oos.ParameterProps")]
    public class ParameterProps : AlibabaCloud.SDK.ROS.CDK.Oos.IParameterProps
    {
        /// <summary>Property name: The name of the parameter.</summary>
        /// <remarks>
        /// The name must be 1 to 200 characters in length,and can contain letters, digits, hyphens (-), and underscores (_).
        /// It cannot start with ALIYUN, ACS, ALIBABA, ALICLOUD, or OOS.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Name
        {
            get;
            set;
        }

        /// <summary>Property type: The data type of the common parameter.</summary>
        /// <remarks>
        /// Valid values: String and StringList.
        /// </remarks>
        [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Type
        {
            get;
            set;
        }

        /// <summary>Property value: The value of the parameter.</summary>
        /// <remarks>
        /// The value must be 1 to 4096 characters in length.
        /// </remarks>
        [JsiiProperty(name: "value", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Value
        {
            get;
            set;
        }

        /// <summary>Property constraints: The constraints of the parameter.</summary>
        /// <remarks>
        /// By default, this parameter is null. Valid values:
        /// AllowedValues: The value that is allowed for the parameter. It must be an array string.
        /// AllowedPattern: The pattern that is allowed for the parameter. It must be a regular expression.
        /// MinLength: The minimum length of the parameter.
        /// MaxLength: The maximum length of the parameter.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "constraints", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Constraints
        {
            get;
            set;
        }

        /// <summary>Property description: The description of the parameter.</summary>
        /// <remarks>
        /// The description must be 1 to 200 characters in length.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }
    }
}
