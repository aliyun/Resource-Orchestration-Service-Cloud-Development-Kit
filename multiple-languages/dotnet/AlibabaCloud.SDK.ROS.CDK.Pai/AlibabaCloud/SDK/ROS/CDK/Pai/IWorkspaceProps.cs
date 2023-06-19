using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pai
{
    /// <summary>Properties for defining a `ALIYUN::PAI::Workspace`.</summary>
    [JsiiInterface(nativeType: typeof(IWorkspaceProps), fullyQualifiedName: "@alicloud/ros-cdk-pai.WorkspaceProps")]
    public interface IWorkspaceProps
    {
        /// <summary>Property description: Workspace description, no more than 80 characters.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Description
        {
            get;
        }

        /// <summary>Property envTypes: Environments contained in the workspace: - Simple mode only production environment (prod).</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>Standard mode includes development environment (dev) and production environment (prod).</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "envTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object EnvTypes
        {
            get;
        }

        /// <summary>Property workspaceName: The workspace name.</summary>
        /// <remarks>
        /// The format is as follows:
        ///
        /// <list type="bullet">
        /// <description>3 to 23 characters in length and can contain letters, underscores, or numbers.</description>
        /// <description>Must start with a large or small letter.</description>
        /// <description>Unique in the current region.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "workspaceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object WorkspaceName
        {
            get;
        }

        /// <summary>Property displayName: It is recommended that you name the workspace based on the business attribute to identify the purpose of the workspace.</summary>
        /// <remarks>
        /// If not configured, the default value is the workspace name. The format is as follows:
        ///
        /// <list type="bullet">
        /// <description>3 to 23 characters in length and can contain letters, underscores, or numbers.</description>
        /// <description>Must start with a large or small letter.</description>
        /// <description>Unique in the current region.</description>
        /// </list>
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
        [JsiiTypeProxy(nativeType: typeof(IWorkspaceProps), fullyQualifiedName: "@alicloud/ros-cdk-pai.WorkspaceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pai.IWorkspaceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property description: Workspace description, no more than 80 characters.</summary>
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Description
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property envTypes: Environments contained in the workspace: - Simple mode only production environment (prod).</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>Standard mode includes development environment (dev) and production environment (prod).</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "envTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object EnvTypes
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property workspaceName: The workspace name.</summary>
            /// <remarks>
            /// The format is as follows:
            ///
            /// <list type="bullet">
            /// <description>3 to 23 characters in length and can contain letters, underscores, or numbers.</description>
            /// <description>Must start with a large or small letter.</description>
            /// <description>Unique in the current region.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "workspaceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object WorkspaceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property displayName: It is recommended that you name the workspace based on the business attribute to identify the purpose of the workspace.</summary>
            /// <remarks>
            /// If not configured, the default value is the workspace name. The format is as follows:
            ///
            /// <list type="bullet">
            /// <description>3 to 23 characters in length and can contain letters, underscores, or numbers.</description>
            /// <description>Must start with a large or small letter.</description>
            /// <description>Unique in the current region.</description>
            /// </list>
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
