using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    [JsiiInterface(nativeType: typeof(IRosParameterProps), fullyQualifiedName: "@alicloud/ros-cdk-core.RosParameterProps")]
    public interface IRosParameterProps
    {
        [JsiiProperty(name: "allowedPattern", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? AllowedPattern
        {
            get
            {
                return null;
            }
        }

        [JsiiProperty(name: "allowedValues", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object[]? AllowedValues
        {
            get
            {
                return null;
            }
        }

        [JsiiProperty(name: "associationProperty", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? AssociationProperty
        {
            get
            {
                return null;
            }
        }

        [JsiiProperty(name: "associationPropertyMetadata", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        System.Collections.Generic.IDictionary<string, object>? AssociationPropertyMetadata
        {
            get
            {
                return null;
            }
        }

        [JsiiProperty(name: "confirm", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        bool? Confirm
        {
            get
            {
                return null;
            }
        }

        [JsiiProperty(name: "constraintDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ConstraintDescription
        {
            get
            {
                return null;
            }
        }

        [JsiiProperty(name: "defaultValue", typeJson: "{\"primitive\":\"any\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DefaultValue
        {
            get
            {
                return null;
            }
        }

        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        [JsiiProperty(name: "label", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Label
        {
            get
            {
                return null;
            }
        }

        [JsiiProperty(name: "maxLength", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? MaxLength
        {
            get
            {
                return null;
            }
        }

        [JsiiProperty(name: "maxValue", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? MaxValue
        {
            get
            {
                return null;
            }
        }

        [JsiiProperty(name: "minLength", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? MinLength
        {
            get
            {
                return null;
            }
        }

        [JsiiProperty(name: "minValue", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? MinValue
        {
            get
            {
                return null;
            }
        }

        [JsiiProperty(name: "noEcho", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        bool? NoEcho
        {
            get
            {
                return null;
            }
        }

        [JsiiProperty(name: "placeholder", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Placeholder
        {
            get
            {
                return null;
            }
        }

        [JsiiProperty(name: "required", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        bool? Required
        {
            get
            {
                return null;
            }
        }

        [JsiiProperty(name: "textArea", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        bool? TextArea
        {
            get
            {
                return null;
            }
        }

        [JsiiProperty(name: "type", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.RosParameterType\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Core.RosParameterType? Type
        {
            get
            {
                return null;
            }
        }

        [JsiiTypeProxy(nativeType: typeof(IRosParameterProps), fullyQualifiedName: "@alicloud/ros-cdk-core.RosParameterProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IRosParameterProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            [JsiiOptional]
            [JsiiProperty(name: "allowedPattern", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AllowedPattern
            {
                get => GetInstanceProperty<string?>();
            }

            [JsiiOptional]
            [JsiiProperty(name: "allowedValues", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}}", isOptional: true)]
            public object[]? AllowedValues
            {
                get => GetInstanceProperty<object[]?>();
            }

            [JsiiOptional]
            [JsiiProperty(name: "associationProperty", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AssociationProperty
            {
                get => GetInstanceProperty<string?>();
            }

            [JsiiOptional]
            [JsiiProperty(name: "associationPropertyMetadata", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}", isOptional: true)]
            public System.Collections.Generic.IDictionary<string, object>? AssociationPropertyMetadata
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>?>();
            }

            [JsiiOptional]
            [JsiiProperty(name: "confirm", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
            public bool? Confirm
            {
                get => GetInstanceProperty<bool?>();
            }

            [JsiiOptional]
            [JsiiProperty(name: "constraintDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? ConstraintDescription
            {
                get => GetInstanceProperty<object?>();
            }

            [JsiiOptional]
            [JsiiProperty(name: "defaultValue", typeJson: "{\"primitive\":\"any\"}", isOptional: true)]
            public object? DefaultValue
            {
                get => GetInstanceProperty<object?>();
            }

            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            [JsiiOptional]
            [JsiiProperty(name: "label", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Label
            {
                get => GetInstanceProperty<string?>();
            }

            [JsiiOptional]
            [JsiiProperty(name: "maxLength", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? MaxLength
            {
                get => GetInstanceProperty<double?>();
            }

            [JsiiOptional]
            [JsiiProperty(name: "maxValue", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? MaxValue
            {
                get => GetInstanceProperty<double?>();
            }

            [JsiiOptional]
            [JsiiProperty(name: "minLength", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? MinLength
            {
                get => GetInstanceProperty<double?>();
            }

            [JsiiOptional]
            [JsiiProperty(name: "minValue", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? MinValue
            {
                get => GetInstanceProperty<double?>();
            }

            [JsiiOptional]
            [JsiiProperty(name: "noEcho", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
            public bool? NoEcho
            {
                get => GetInstanceProperty<bool?>();
            }

            [JsiiOptional]
            [JsiiProperty(name: "placeholder", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Placeholder
            {
                get => GetInstanceProperty<object?>();
            }

            [JsiiOptional]
            [JsiiProperty(name: "required", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
            public bool? Required
            {
                get => GetInstanceProperty<bool?>();
            }

            [JsiiOptional]
            [JsiiProperty(name: "textArea", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
            public bool? TextArea
            {
                get => GetInstanceProperty<bool?>();
            }

            [JsiiOptional]
            [JsiiProperty(name: "type", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.RosParameterType\"}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Core.RosParameterType? Type
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.RosParameterType?>();
            }
        }
    }
}
