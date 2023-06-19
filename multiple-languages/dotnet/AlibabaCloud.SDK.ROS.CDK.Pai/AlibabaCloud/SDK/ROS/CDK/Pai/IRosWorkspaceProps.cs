using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pai
{
    /// <summary>Properties for defining a `ALIYUN::PAI::Workspace`.</summary>
    [JsiiInterface(nativeType: typeof(IRosWorkspaceProps), fullyQualifiedName: "@alicloud/ros-cdk-pai.RosWorkspaceProps")]
    public interface IRosWorkspaceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: description: Workspace description, no more than 80 characters.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Description
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: envTypes: Environments contained in the workspace:
        /// - Simple mode only production environment (prod).
        /// - Standard mode includes development environment (dev) and production environment (prod).
        /// </remarks>
        [JsiiProperty(name: "envTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object EnvTypes
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: workspaceName: The workspace name. The format is as follows:
        /// - 3 to 23 characters in length and can contain letters, underscores, or numbers.
        /// - Must start with a large or small letter.
        /// - Unique in the current region.
        /// </remarks>
        [JsiiProperty(name: "workspaceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object WorkspaceName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: displayName: It is recommended that you name the workspace based on the business attribute to identify the purpose of the workspace. If not configured, the default value is the workspace name. The format is as follows:
        /// - 3 to 23 characters in length and can contain letters, underscores, or numbers.
        /// - Must start with a large or small letter.
        /// - Unique in the current region.
        /// </remarks>
        [JsiiProperty(name: "displayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DisplayName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::PAI::Workspace`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosWorkspaceProps), fullyQualifiedName: "@alicloud/ros-cdk-pai.RosWorkspaceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pai.IRosWorkspaceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Workspace description, no more than 80 characters.
            /// </remarks>
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Description
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: envTypes: Environments contained in the workspace:
            /// - Simple mode only production environment (prod).
            /// - Standard mode includes development environment (dev) and production environment (prod).
            /// </remarks>
            [JsiiProperty(name: "envTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object EnvTypes
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: workspaceName: The workspace name. The format is as follows:
            /// - 3 to 23 characters in length and can contain letters, underscores, or numbers.
            /// - Must start with a large or small letter.
            /// - Unique in the current region.
            /// </remarks>
            [JsiiProperty(name: "workspaceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object WorkspaceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: displayName: It is recommended that you name the workspace based on the business attribute to identify the purpose of the workspace. If not configured, the default value is the workspace name. The format is as follows:
            /// - 3 to 23 characters in length and can contain letters, underscores, or numbers.
            /// - Must start with a large or small letter.
            /// - Unique in the current region.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "displayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DisplayName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
