using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pai.Datasource
{
    /// <summary>Properties for defining a `RosWorkspaces`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaces
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosWorkspacesProps), fullyQualifiedName: "@alicloud/ros-cdk-pai.datasource.RosWorkspacesProps")]
    public interface IRosWorkspacesProps
    {
        /// <remarks>
        /// <strong>Property</strong>: workspaceId: The ID of the workspace.
        /// </remarks>
        [JsiiProperty(name: "workspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? WorkspaceId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: workspaceName: The workspace name. The format is as follows:
        /// - 3 to 23 characters in length and can contain letters, underscores, or numbers.
        /// - Must start with a large or small letter.
        /// - Unique in the current region.
        /// </remarks>
        [JsiiProperty(name: "workspaceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? WorkspaceName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosWorkspaces`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaces
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosWorkspacesProps), fullyQualifiedName: "@alicloud/ros-cdk-pai.datasource.RosWorkspacesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pai.Datasource.IRosWorkspacesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: workspaceId: The ID of the workspace.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "workspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? WorkspaceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: workspaceName: The workspace name. The format is as follows:
            /// - 3 to 23 characters in length and can contain letters, underscores, or numbers.
            /// - Must start with a large or small letter.
            /// - Unique in the current region.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "workspaceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? WorkspaceName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
