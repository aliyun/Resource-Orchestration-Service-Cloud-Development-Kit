using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    [JsiiByValue(fqn: "@alicloud/ros-cdk-core.RosParameterProps")]
    public class RosParameterProps : AlibabaCloud.SDK.ROS.CDK.Core.IRosParameterProps
    {
        [JsiiOptional]
        [JsiiProperty(name: "allowedPattern", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public string? AllowedPattern
        {
            get;
            set;
        }

        [JsiiOptional]
        [JsiiProperty(name: "allowedValues", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}}", isOptional: true)]
        public object[]? AllowedValues
        {
            get;
            set;
        }

        [JsiiOptional]
        [JsiiProperty(name: "associationProperty", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public string? AssociationProperty
        {
            get;
            set;
        }

        [JsiiOptional]
        [JsiiProperty(name: "associationPropertyMetadata", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}", isOptional: true)]
        public System.Collections.Generic.IDictionary<string, object>? AssociationPropertyMetadata
        {
            get;
            set;
        }

        [JsiiOptional]
        [JsiiProperty(name: "confirm", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
        public bool? Confirm
        {
            get;
            set;
        }

        private object? _constraintDescription;

        [JsiiOptional]
        [JsiiProperty(name: "constraintDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        public object? ConstraintDescription
        {
            get => _constraintDescription;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case System.Collections.Generic.IDictionary<string, string> cast_cd4240:
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, System.Collections.Generic.IDictionary<string, string>; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _constraintDescription = value;
            }
        }

        [JsiiOptional]
        [JsiiProperty(name: "defaultValue", typeJson: "{\"primitive\":\"any\"}", isOptional: true)]
        public object? DefaultValue
        {
            get;
            set;
        }

        private object? _description;

        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        public object? Description
        {
            get => _description;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case System.Collections.Generic.IDictionary<string, string> cast_cd4240:
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, System.Collections.Generic.IDictionary<string, string>; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _description = value;
            }
        }

        [JsiiOptional]
        [JsiiProperty(name: "label", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public string? Label
        {
            get;
            set;
        }

        [JsiiOptional]
        [JsiiProperty(name: "maxLength", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public double? MaxLength
        {
            get;
            set;
        }

        [JsiiOptional]
        [JsiiProperty(name: "maxValue", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public double? MaxValue
        {
            get;
            set;
        }

        [JsiiOptional]
        [JsiiProperty(name: "minLength", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public double? MinLength
        {
            get;
            set;
        }

        [JsiiOptional]
        [JsiiProperty(name: "minValue", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public double? MinValue
        {
            get;
            set;
        }

        [JsiiOptional]
        [JsiiProperty(name: "noEcho", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
        public bool? NoEcho
        {
            get;
            set;
        }

        private object? _placeholder;

        [JsiiOptional]
        [JsiiProperty(name: "placeholder", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        public object? Placeholder
        {
            get => _placeholder;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case System.Collections.Generic.IDictionary<string, string> cast_cd4240:
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, System.Collections.Generic.IDictionary<string, string>; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _placeholder = value;
            }
        }

        [JsiiOptional]
        [JsiiProperty(name: "required", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
        public bool? Required
        {
            get;
            set;
        }

        [JsiiOptional]
        [JsiiProperty(name: "textArea", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
        public bool? TextArea
        {
            get;
            set;
        }

        [JsiiOptional]
        [JsiiProperty(name: "type", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.RosParameterType\"}", isOptional: true)]
        public AlibabaCloud.SDK.ROS.CDK.Core.RosParameterType? Type
        {
            get;
            set;
        }
    }
}
