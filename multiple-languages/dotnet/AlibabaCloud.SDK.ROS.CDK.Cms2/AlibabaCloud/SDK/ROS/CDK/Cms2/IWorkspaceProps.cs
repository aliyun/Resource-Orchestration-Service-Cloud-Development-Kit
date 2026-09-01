using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms2
{
    /// <summary>Properties for defining a `Workspace`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-workspace
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IWorkspaceProps), fullyQualifiedName: "@alicloud/ros-cdk-cms2.WorkspaceProps")]
    public interface IWorkspaceProps
    {
        /// <summary>Property slsProject: The name of the Log Service (SLS) project.</summary>
        [JsiiProperty(name: "slsProject", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SlsProject
        {
            get;
        }

        /// <summary>Property workspaceName: The name of the workspace.</summary>
        [JsiiProperty(name: "workspaceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object WorkspaceName
        {
            get;
        }

        /// <summary>Property description: The description of the workspace.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property displayName: The display name of the workspace.</summary>
        [JsiiProperty(name: "displayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DisplayName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Workspace`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-workspace
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IWorkspaceProps), fullyQualifiedName: "@alicloud/ros-cdk-cms2.WorkspaceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms2.IWorkspaceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property slsProject: The name of the Log Service (SLS) project.</summary>
            [JsiiProperty(name: "slsProject", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SlsProject
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property workspaceName: The name of the workspace.</summary>
            [JsiiProperty(name: "workspaceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object WorkspaceName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The description of the workspace.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property displayName: The display name of the workspace.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "displayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DisplayName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
