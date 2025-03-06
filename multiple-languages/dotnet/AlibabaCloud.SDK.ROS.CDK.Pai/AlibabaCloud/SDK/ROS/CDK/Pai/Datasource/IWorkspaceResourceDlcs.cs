using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pai.Datasource
{
    /// <summary>Represents a `WorkspaceResourceDlcs`.</summary>
    [JsiiInterface(nativeType: typeof(IWorkspaceResourceDlcs), fullyQualifiedName: "@alicloud/ros-cdk-pai.datasource.IWorkspaceResourceDlcs")]
    public interface IWorkspaceResourceDlcs : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute GroupNames: The list of group names.</summary>
        [JsiiProperty(name: "attrGroupNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrGroupNames
        {
            get;
        }

        /// <summary>Attribute WorkspaceResourceDlcs: The list of workspace resource dlcs.</summary>
        [JsiiProperty(name: "attrWorkspaceResourceDlcs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrWorkspaceResourceDlcs
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-pai.datasource.WorkspaceResourceDlcsProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Pai.Datasource.IWorkspaceResourceDlcsProps Props
        {
            get;
        }

        /// <summary>Represents a `WorkspaceResourceDlcs`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IWorkspaceResourceDlcs), fullyQualifiedName: "@alicloud/ros-cdk-pai.datasource.IWorkspaceResourceDlcs")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pai.Datasource.IWorkspaceResourceDlcs
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute GroupNames: The list of group names.</summary>
            [JsiiProperty(name: "attrGroupNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrGroupNames
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute WorkspaceResourceDlcs: The list of workspace resource dlcs.</summary>
            [JsiiProperty(name: "attrWorkspaceResourceDlcs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrWorkspaceResourceDlcs
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-pai.datasource.WorkspaceResourceDlcsProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Pai.Datasource.IWorkspaceResourceDlcsProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Pai.Datasource.IWorkspaceResourceDlcsProps>()!;
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
