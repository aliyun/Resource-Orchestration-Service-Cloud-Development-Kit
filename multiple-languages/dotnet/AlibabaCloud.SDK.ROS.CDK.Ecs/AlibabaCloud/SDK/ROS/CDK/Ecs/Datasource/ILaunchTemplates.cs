using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Represents a `LaunchTemplates`.</summary>
    [JsiiInterface(nativeType: typeof(ILaunchTemplates), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.ILaunchTemplates")]
    public interface ILaunchTemplates : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute LaunchTemplateIds: The list of launch template IDs.</summary>
        [JsiiProperty(name: "attrLaunchTemplateIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLaunchTemplateIds
        {
            get;
        }

        /// <summary>Attribute LaunchTemplates: The list of launch templates.</summary>
        [JsiiProperty(name: "attrLaunchTemplates", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLaunchTemplates
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.LaunchTemplatesProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.ILaunchTemplatesProps Props
        {
            get;
        }

        /// <summary>Represents a `LaunchTemplates`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ILaunchTemplates), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.ILaunchTemplates")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.ILaunchTemplates
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute LaunchTemplateIds: The list of launch template IDs.</summary>
            [JsiiProperty(name: "attrLaunchTemplateIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLaunchTemplateIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LaunchTemplates: The list of launch templates.</summary>
            [JsiiProperty(name: "attrLaunchTemplates", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLaunchTemplates
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.LaunchTemplatesProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.ILaunchTemplatesProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.ILaunchTemplatesProps>()!;
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
