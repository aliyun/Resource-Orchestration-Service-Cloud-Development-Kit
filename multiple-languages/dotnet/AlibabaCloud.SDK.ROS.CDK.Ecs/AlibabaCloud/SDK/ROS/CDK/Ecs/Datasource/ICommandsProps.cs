using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Properties for defining a `Commands`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-commands
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ICommandsProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.CommandsProps")]
    public interface ICommandsProps
    {
        /// <summary>Property commandId: The ID of the command.</summary>
        [JsiiProperty(name: "commandId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CommandId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property commandName: The name of the command.</summary>
        /// <remarks>
        /// Partial command names are not supported.
        /// </remarks>
        [JsiiProperty(name: "commandName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CommandName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: Command description.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property type: The command type.</summary>
        /// <remarks>
        /// Valid values:
        /// RunBatScript: batch command, applicable to Windows instances
        /// RunPowerShellScript: PowerShell command, applicable to Windows instances
        /// RunShellScript: shell command, applicable to Linux instances
        /// </remarks>
        [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Type
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Commands`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-commands
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ICommandsProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.CommandsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.ICommandsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property commandId: The ID of the command.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "commandId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CommandId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property commandName: The name of the command.</summary>
            /// <remarks>
            /// Partial command names are not supported.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "commandName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CommandName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: Command description.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property type: The command type.</summary>
            /// <remarks>
            /// Valid values:
            /// RunBatScript: batch command, applicable to Windows instances
            /// RunPowerShellScript: PowerShell command, applicable to Windows instances
            /// RunShellScript: shell command, applicable to Linux instances
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Type
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
