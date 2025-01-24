using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pai
{
    /// <summary>Represents a `CodeSource`.</summary>
    [JsiiInterface(nativeType: typeof(ICodeSource), fullyQualifiedName: "@alicloud/ros-cdk-pai.ICodeSource")]
    public interface ICodeSource : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Accessibility: Visibility of the code configuration.</summary>
        [JsiiProperty(name: "attrAccessibility", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAccessibility
        {
            get;
        }

        /// <summary>Attribute CodeBranch: Code repository branch.</summary>
        [JsiiProperty(name: "attrCodeBranch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCodeBranch
        {
            get;
        }

        /// <summary>Attribute CodeCommit: The code CommitId.</summary>
        [JsiiProperty(name: "attrCodeCommit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCodeCommit
        {
            get;
        }

        /// <summary>Attribute CodeRepo: Code repository address.</summary>
        [JsiiProperty(name: "attrCodeRepo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCodeRepo
        {
            get;
        }

        /// <summary>Attribute CodeRepoAccessToken: The Token used to access the code repository.</summary>
        [JsiiProperty(name: "attrCodeRepoAccessToken", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCodeRepoAccessToken
        {
            get;
        }

        /// <summary>Attribute CodeRepoUserName: The user name of the code repository.</summary>
        [JsiiProperty(name: "attrCodeRepoUserName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCodeRepoUserName
        {
            get;
        }

        /// <summary>Attribute CodeSourcesId: The ID of the created code configuration.</summary>
        [JsiiProperty(name: "attrCodeSourcesId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCodeSourcesId
        {
            get;
        }

        /// <summary>Attribute CreateTime: The creation time of the code.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute Description: A detailed description of the code configuration.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute DisplayName: Code source configuration name.</summary>
        [JsiiProperty(name: "attrDisplayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDisplayName
        {
            get;
        }

        /// <summary>Attribute GmtModifyTime: Code configuration modification time.</summary>
        /// <remarks>
        /// The time format is iso8601.
        /// </remarks>
        [JsiiProperty(name: "attrGmtModifyTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrGmtModifyTime
        {
            get;
        }

        /// <summary>Attribute MountPath: The local Mount Directory of the code.</summary>
        [JsiiProperty(name: "attrMountPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMountPath
        {
            get;
        }

        /// <summary>Attribute UserId: The ID of the creator of the code configuration source.</summary>
        [JsiiProperty(name: "attrUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUserId
        {
            get;
        }

        /// <summary>Attribute WorkspaceId: The ID of the workspace.</summary>
        [JsiiProperty(name: "attrWorkspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrWorkspaceId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-pai.CodeSourceProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Pai.ICodeSourceProps Props
        {
            get;
        }

        /// <summary>Represents a `CodeSource`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ICodeSource), fullyQualifiedName: "@alicloud/ros-cdk-pai.ICodeSource")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pai.ICodeSource
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Accessibility: Visibility of the code configuration.</summary>
            [JsiiProperty(name: "attrAccessibility", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAccessibility
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CodeBranch: Code repository branch.</summary>
            [JsiiProperty(name: "attrCodeBranch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCodeBranch
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CodeCommit: The code CommitId.</summary>
            [JsiiProperty(name: "attrCodeCommit", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCodeCommit
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CodeRepo: Code repository address.</summary>
            [JsiiProperty(name: "attrCodeRepo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCodeRepo
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CodeRepoAccessToken: The Token used to access the code repository.</summary>
            [JsiiProperty(name: "attrCodeRepoAccessToken", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCodeRepoAccessToken
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CodeRepoUserName: The user name of the code repository.</summary>
            [JsiiProperty(name: "attrCodeRepoUserName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCodeRepoUserName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CodeSourcesId: The ID of the created code configuration.</summary>
            [JsiiProperty(name: "attrCodeSourcesId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCodeSourcesId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: The creation time of the code.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Description: A detailed description of the code configuration.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DisplayName: Code source configuration name.</summary>
            [JsiiProperty(name: "attrDisplayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDisplayName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute GmtModifyTime: Code configuration modification time.</summary>
            /// <remarks>
            /// The time format is iso8601.
            /// </remarks>
            [JsiiProperty(name: "attrGmtModifyTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrGmtModifyTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MountPath: The local Mount Directory of the code.</summary>
            [JsiiProperty(name: "attrMountPath", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMountPath
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute UserId: The ID of the creator of the code configuration source.</summary>
            [JsiiProperty(name: "attrUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUserId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute WorkspaceId: The ID of the workspace.</summary>
            [JsiiProperty(name: "attrWorkspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrWorkspaceId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-pai.CodeSourceProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Pai.ICodeSourceProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Pai.ICodeSourceProps>()!;
            }

            /// <summary>The environment this resource belongs to.</summary>
            /// <remarks>
            /// For resources that are created and managed by the CDK
            /// (generally, those created by creating new class instances like Role, Bucket, etc.),
            /// this is always the same as the environment of the stack they belong to;
            /// however, for imported resources
            /// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
            /// that might be different than the stack they were imported into.
            /// </remarks>
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ResourceEnvironment\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
            }

            /// <summary>The stack in which this resource is defined.</summary>
            [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}
