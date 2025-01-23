using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mobi.Datasource
{
    /// <summary>Represents a `Workspaces`.</summary>
    [JsiiInterface(nativeType: typeof(IWorkspaces), fullyQualifiedName: "@alicloud/ros-cdk-mobi.datasource.IWorkspaces")]
    public interface IWorkspaces : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute WorkspaceIds: The list of workspace IDs.</summary>
        [JsiiProperty(name: "attrWorkspaceIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrWorkspaceIds
        {
            get;
        }

        /// <summary>Attribute Workspaces: The list of workspaces.</summary>
        [JsiiProperty(name: "attrWorkspaces", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrWorkspaces
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-mobi.datasource.WorkspacesProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Mobi.Datasource.IWorkspacesProps Props
        {
            get;
        }

        /// <summary>Represents a `Workspaces`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IWorkspaces), fullyQualifiedName: "@alicloud/ros-cdk-mobi.datasource.IWorkspaces")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mobi.Datasource.IWorkspaces
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute WorkspaceIds: The list of workspace IDs.</summary>
            [JsiiProperty(name: "attrWorkspaceIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrWorkspaceIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Workspaces: The list of workspaces.</summary>
            [JsiiProperty(name: "attrWorkspaces", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrWorkspaces
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-mobi.datasource.WorkspacesProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Mobi.Datasource.IWorkspacesProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Mobi.Datasource.IWorkspacesProps>()!;
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
