using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pai.Datasource
{
    /// <summary>Represents a `Workspace`.</summary>
    [JsiiInterface(nativeType: typeof(IWorkspace), fullyQualifiedName: "@alicloud/ros-cdk-pai.datasource.IWorkspace")]
    public interface IWorkspace : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AdminNames: List of administrator account names.</summary>
        [JsiiProperty(name: "attrAdminNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAdminNames
        {
            get;
        }

        /// <summary>Attribute Creator: The user ID of the creator.</summary>
        [JsiiProperty(name: "attrCreator", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreator
        {
            get;
        }

        /// <summary>Attribute Description: The description of the workspace.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute DisplayName: The display name of the workspace.</summary>
        [JsiiProperty(name: "attrDisplayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDisplayName
        {
            get;
        }

        /// <summary>Attribute EnvTypes: The environments of the workspace.</summary>
        [JsiiProperty(name: "attrEnvTypes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEnvTypes
        {
            get;
        }

        /// <summary>Attribute ExtraInfos: Additional information, currently including TenantId (tenant ID).</summary>
        [JsiiProperty(name: "attrExtraInfos", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrExtraInfos
        {
            get;
        }

        /// <summary>Attribute IsDefault: Default Workspace.</summary>
        [JsiiProperty(name: "attrIsDefault", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIsDefault
        {
            get;
        }

        /// <summary>Attribute Users: List of users.</summary>
        [JsiiProperty(name: "attrUsers", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUsers
        {
            get;
        }

        /// <summary>Attribute WorkspaceId: The first ID of the resource.</summary>
        [JsiiProperty(name: "attrWorkspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrWorkspaceId
        {
            get;
        }

        /// <summary>Attribute WorkspaceName: The name of the workspace.</summary>
        [JsiiProperty(name: "attrWorkspaceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrWorkspaceName
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-pai.datasource.WorkspaceProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Pai.Datasource.IWorkspaceProps Props
        {
            get;
        }

        /// <summary>Represents a `Workspace`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IWorkspace), fullyQualifiedName: "@alicloud/ros-cdk-pai.datasource.IWorkspace")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pai.Datasource.IWorkspace
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AdminNames: List of administrator account names.</summary>
            [JsiiProperty(name: "attrAdminNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAdminNames
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Creator: The user ID of the creator.</summary>
            [JsiiProperty(name: "attrCreator", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreator
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Description: The description of the workspace.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DisplayName: The display name of the workspace.</summary>
            [JsiiProperty(name: "attrDisplayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDisplayName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EnvTypes: The environments of the workspace.</summary>
            [JsiiProperty(name: "attrEnvTypes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEnvTypes
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ExtraInfos: Additional information, currently including TenantId (tenant ID).</summary>
            [JsiiProperty(name: "attrExtraInfos", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrExtraInfos
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IsDefault: Default Workspace.</summary>
            [JsiiProperty(name: "attrIsDefault", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIsDefault
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Users: List of users.</summary>
            [JsiiProperty(name: "attrUsers", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUsers
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute WorkspaceId: The first ID of the resource.</summary>
            [JsiiProperty(name: "attrWorkspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrWorkspaceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute WorkspaceName: The name of the workspace.</summary>
            [JsiiProperty(name: "attrWorkspaceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrWorkspaceName
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-pai.datasource.WorkspaceProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Pai.Datasource.IWorkspaceProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Pai.Datasource.IWorkspaceProps>()!;
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
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResourceEnvironment\"}")]
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
