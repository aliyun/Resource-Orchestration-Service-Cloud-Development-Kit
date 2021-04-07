using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    [JsiiByValue(fqn: "@alicloud/ros-cdk-core.RosParameterProps")]
    public class RosParameterProps : AlibabaCloud.SDK.ROS.CDK.Core.IRosParameterProps
    {
        [JsiiOptional]
        [JsiiProperty(name: "allowedPattern", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? AllowedPattern
        {
            get;
            set;
        }

        [JsiiOptional]
        [JsiiProperty(name: "allowedValues", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public object[]? AllowedValues
        {
            get;
            set;
        }

        [JsiiOptional]
        [JsiiProperty(name: "associationProperty", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? AssociationProperty
        {
            get;
            set;
        }

        [JsiiOptional]
        [JsiiProperty(name: "associationPropertyMetadata", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}", isOptional: true, isOverride: true)]
        public System.Collections.Generic.IDictionary<string, object>? AssociationPropertyMetadata
        {
            get;
            set;
        }

        [JsiiOptional]
        [JsiiProperty(name: "confirm", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true, isOverride: true)]
        public bool? Confirm
        {
            get;
            set;
        }

        [JsiiOptional]
        [JsiiProperty(name: "constraintDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"map\"}}]}}", isOptional: true, isOverride: true)]
        public object? ConstraintDescription
        {
            get;
            set;
        }

        [JsiiOptional]
        [JsiiProperty(name: "defaultValue", typeJson: "{\"primitive\":\"any\"}", isOptional: true, isOverride: true)]
        public object? DefaultValue
        {
            get;
            set;
        }

        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"map\"}}]}}", isOptional: true, isOverride: true)]
        public object? Description
        {
            get;
            set;
        }

        [JsiiOptional]
        [JsiiProperty(name: "label", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Label
        {
            get;
            set;
        }

        [JsiiOptional]
        [JsiiProperty(name: "maxLength", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? MaxLength
        {
            get;
            set;
        }

        [JsiiOptional]
        [JsiiProperty(name: "maxValue", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? MaxValue
        {
            get;
            set;
        }

        [JsiiOptional]
        [JsiiProperty(name: "minLength", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? MinLength
        {
            get;
            set;
        }

        [JsiiOptional]
        [JsiiProperty(name: "minValue", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? MinValue
        {
            get;
            set;
        }

        [JsiiOptional]
        [JsiiProperty(name: "noEcho", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true, isOverride: true)]
        public bool? NoEcho
        {
            get;
            set;
        }

        [JsiiOptional]
        [JsiiProperty(name: "textArea", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true, isOverride: true)]
        public bool? TextArea
        {
            get;
            set;
        }

        [JsiiOptional]
        [JsiiProperty(name: "type", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.RosParameterType\"}", isOptional: true, isOverride: true)]
        public AlibabaCloud.SDK.ROS.CDK.Core.RosParameterType? Type
        {
            get;
            set;
        }
    }
}
