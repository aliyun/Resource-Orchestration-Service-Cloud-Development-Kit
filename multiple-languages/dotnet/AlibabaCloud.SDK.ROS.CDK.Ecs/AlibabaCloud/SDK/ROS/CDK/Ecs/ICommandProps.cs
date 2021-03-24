using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `ALIYUN::ECS::Command`.</summary>
    [JsiiInterface(nativeType: typeof(ICommandProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.CommandProps")]
    public interface ICommandProps
    {
        /// <summary>Property type: The type of command.</summary>
        [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}")]
        string Type
        {
            get;
        }

        /// <summary>Property commandContent: The content of command.</summary>
        /// <remarks>
        /// Content requires base64 encoding. Maximum size support 16KB.
        /// </remarks>
        [JsiiProperty(name: "commandContent", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? CommandContent
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: The description of command.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enableParameter: Specifies whether the script contains custom parameters.</summary>
        /// <remarks>
        /// Default value: false
        /// </remarks>
        [JsiiProperty(name: "enableParameter", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableParameter
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property name: The name of command.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Name
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property timeout: Total timeout when the command is executed in the instance.</summary>
        /// <remarks>
        /// Input the time unit as second. Default is 60s.
        /// </remarks>
        [JsiiProperty(name: "timeout", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? Timeout
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property workingDir: The path where command will be executed in the instance.</summary>
        [JsiiProperty(name: "workingDir", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? WorkingDir
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ECS::Command`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ICommandProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.CommandProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.ICommandProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property type: The type of command.</summary>
            [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}")]
            public string Type
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property commandContent: The content of command.</summary>
            /// <remarks>
            /// Content requires base64 encoding. Maximum size support 16KB.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "commandContent", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? CommandContent
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property description: The description of command.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property enableParameter: Specifies whether the script contains custom parameters.</summary>
            /// <remarks>
            /// Default value: false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableParameter", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableParameter
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property name: The name of command.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Name
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property timeout: Total timeout when the command is executed in the instance.</summary>
            /// <remarks>
            /// Input the time unit as second. Default is 60s.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "timeout", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? Timeout
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property workingDir: The path where command will be executed in the instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "workingDir", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? WorkingDir
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
