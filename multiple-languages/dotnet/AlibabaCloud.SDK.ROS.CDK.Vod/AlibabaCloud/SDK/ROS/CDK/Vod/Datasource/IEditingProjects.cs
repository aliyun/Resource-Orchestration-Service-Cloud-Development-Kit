using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vod.Datasource
{
    /// <summary>Represents a `EditingProjects`.</summary>
    [JsiiInterface(nativeType: typeof(IEditingProjects), fullyQualifiedName: "@alicloud/ros-cdk-vod.datasource.IEditingProjects")]
    public interface IEditingProjects : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute EditingProjectIds: The list of editing project IDs.</summary>
        [JsiiProperty(name: "attrEditingProjectIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEditingProjectIds
        {
            get;
        }

        /// <summary>Attribute EditingProjects: The list of editing projects.</summary>
        [JsiiProperty(name: "attrEditingProjects", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEditingProjects
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vod.datasource.EditingProjectsProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Vod.Datasource.IEditingProjectsProps Props
        {
            get;
        }

        /// <summary>Represents a `EditingProjects`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IEditingProjects), fullyQualifiedName: "@alicloud/ros-cdk-vod.datasource.IEditingProjects")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vod.Datasource.IEditingProjects
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute EditingProjectIds: The list of editing project IDs.</summary>
            [JsiiProperty(name: "attrEditingProjectIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEditingProjectIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EditingProjects: The list of editing projects.</summary>
            [JsiiProperty(name: "attrEditingProjects", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEditingProjects
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-vod.datasource.EditingProjectsProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Vod.Datasource.IEditingProjectsProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Vod.Datasource.IEditingProjectsProps>()!;
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
