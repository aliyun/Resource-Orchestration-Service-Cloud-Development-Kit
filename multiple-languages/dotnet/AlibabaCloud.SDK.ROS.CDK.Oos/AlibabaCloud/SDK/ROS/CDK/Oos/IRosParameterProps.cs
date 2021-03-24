using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oos
{
    /// <summary>Properties for defining a `ALIYUN::OOS::Parameter`.</summary>
    [JsiiInterface(nativeType: typeof(IRosParameterProps), fullyQualifiedName: "@alicloud/ros-cdk-oos.RosParameterProps")]
    public interface IRosParameterProps
    {
        /// <remarks>
        /// <strong>Property</strong>: name: The name of the parameter. 
        /// The name must be 1 to 200 characters in length,and can contain letters, digits, hyphens (-), and underscores (_). 
        /// It cannot start with ALIYUN, ACS, ALIBABA, ALICLOUD, or OOS.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
        string Name
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: type: The data type of the common parameter. 
        /// Valid values: String and StringList.
        /// </remarks>
        [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}")]
        string Type
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: value: The value of the parameter. 
        /// The value must be 1 to 4096 characters in length.
        /// </remarks>
        [JsiiProperty(name: "value", typeJson: "{\"primitive\":\"string\"}")]
        string Value
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: constraints: The constraints of the parameter. 
        /// By default, this parameter is null. Valid values:
        /// AllowedValues: The value that is allowed for the parameter. It must be an array string.
        /// AllowedPattern: The pattern that is allowed for the parameter. It must be a regular expression.
        /// MinLength: The minimum length of the parameter.
        /// MaxLength: The maximum length of the parameter.
        /// </remarks>
        [JsiiProperty(name: "constraints", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Constraints
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the parameter. 
        /// The description must be 1 to 200 characters in length.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::OOS::Parameter`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosParameterProps), fullyQualifiedName: "@alicloud/ros-cdk-oos.RosParameterProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oos.IRosParameterProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The name of the parameter. 
            /// The name must be 1 to 200 characters in length,and can contain letters, digits, hyphens (-), and underscores (_). 
            /// It cannot start with ALIYUN, ACS, ALIBABA, ALICLOUD, or OOS.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}")]
            public string Name
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: type: The data type of the common parameter. 
            /// Valid values: String and StringList.
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}")]
            public string Type
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: value: The value of the parameter. 
            /// The value must be 1 to 4096 characters in length.
            /// </remarks>
            [JsiiProperty(name: "value", typeJson: "{\"primitive\":\"string\"}")]
            public string Value
            {
                get => GetInstanceProperty<string>()!;
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
            [JsiiProperty(name: "constraints", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Constraints
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the parameter. 
            /// The description must be 1 to 200 characters in length.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
