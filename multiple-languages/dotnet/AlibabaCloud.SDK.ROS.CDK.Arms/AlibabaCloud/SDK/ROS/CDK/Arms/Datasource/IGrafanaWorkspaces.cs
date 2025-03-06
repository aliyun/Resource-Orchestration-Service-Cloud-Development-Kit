using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Arms.Datasource
{
    /// <summary>Represents a `GrafanaWorkspaces`.</summary>
    [JsiiInterface(nativeType: typeof(IGrafanaWorkspaces), fullyQualifiedName: "@alicloud/ros-cdk-arms.datasource.IGrafanaWorkspaces")]
    public interface IGrafanaWorkspaces : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute GrafanaWorkspaceIds: The list of grafana workspace IDs.</summary>
        [JsiiProperty(name: "attrGrafanaWorkspaceIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrGrafanaWorkspaceIds
        {
            get;
        }

        /// <summary>Attribute GrafanaWorkspaces: The list of grafana workspaces.</summary>
        [JsiiProperty(name: "attrGrafanaWorkspaces", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrGrafanaWorkspaces
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-arms.datasource.GrafanaWorkspacesProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Arms.Datasource.IGrafanaWorkspacesProps Props
        {
            get;
        }

        /// <summary>Represents a `GrafanaWorkspaces`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IGrafanaWorkspaces), fullyQualifiedName: "@alicloud/ros-cdk-arms.datasource.IGrafanaWorkspaces")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Arms.Datasource.IGrafanaWorkspaces
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute GrafanaWorkspaceIds: The list of grafana workspace IDs.</summary>
            [JsiiProperty(name: "attrGrafanaWorkspaceIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrGrafanaWorkspaceIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute GrafanaWorkspaces: The list of grafana workspaces.</summary>
            [JsiiProperty(name: "attrGrafanaWorkspaces", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrGrafanaWorkspaces
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-arms.datasource.GrafanaWorkspacesProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Arms.Datasource.IGrafanaWorkspacesProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Arms.Datasource.IGrafanaWorkspacesProps>()!;
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
