using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pai
{
    /// <summary>Properties for defining a `CodeSource`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-codesource
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ICodeSourceProps), fullyQualifiedName: "@alicloud/ros-cdk-pai.CodeSourceProps")]
    public interface ICodeSourceProps
    {
        /// <summary>Property accessibility: Visibility of the code configuration, possible values: - PRIVATE: In this workspace, it is only visible to you and the administrator.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>PUBLIC: In this workspace, it is visible to everyone.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "accessibility", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Accessibility
        {
            get;
        }

        /// <summary>Property codeRepo: Code repository address.</summary>
        [JsiiProperty(name: "codeRepo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CodeRepo
        {
            get;
        }

        /// <summary>Property displayName: Code source configuration name.</summary>
        [JsiiProperty(name: "displayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DisplayName
        {
            get;
        }

        /// <summary>Property mountPath: The local Mount Directory of the code.</summary>
        [JsiiProperty(name: "mountPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object MountPath
        {
            get;
        }

        /// <summary>Property workspaceId: The ID of the workspace.</summary>
        [JsiiProperty(name: "workspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object WorkspaceId
        {
            get;
        }

        /// <summary>Property codeBranch: Code repository branch.</summary>
        [JsiiProperty(name: "codeBranch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CodeBranch
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property codeCommit: The code CommitId.</summary>
        [JsiiProperty(name: "codeCommit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CodeCommit
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property codeRepoAccessToken: The Token used to access the code repository.</summary>
        [JsiiProperty(name: "codeRepoAccessToken", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CodeRepoAccessToken
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property codeRepoUserName: The user name of the code repository.</summary>
        [JsiiProperty(name: "codeRepoUserName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CodeRepoUserName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: A detailed description of the code configuration.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `CodeSource`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-codesource
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ICodeSourceProps), fullyQualifiedName: "@alicloud/ros-cdk-pai.CodeSourceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pai.ICodeSourceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property accessibility: Visibility of the code configuration, possible values: - PRIVATE: In this workspace, it is only visible to you and the administrator.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>PUBLIC: In this workspace, it is visible to everyone.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "accessibility", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Accessibility
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property codeRepo: Code repository address.</summary>
            [JsiiProperty(name: "codeRepo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CodeRepo
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property displayName: Code source configuration name.</summary>
            [JsiiProperty(name: "displayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DisplayName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property mountPath: The local Mount Directory of the code.</summary>
            [JsiiProperty(name: "mountPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object MountPath
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property workspaceId: The ID of the workspace.</summary>
            [JsiiProperty(name: "workspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object WorkspaceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property codeBranch: Code repository branch.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "codeBranch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CodeBranch
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property codeCommit: The code CommitId.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "codeCommit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CodeCommit
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property codeRepoAccessToken: The Token used to access the code repository.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "codeRepoAccessToken", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CodeRepoAccessToken
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property codeRepoUserName: The user name of the code repository.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "codeRepoUserName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CodeRepoUserName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: A detailed description of the code configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
