using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Represents a `LaunchTemplate`.</summary>
    [JsiiInterface(nativeType: typeof(ILaunchTemplate), fullyQualifiedName: "@alicloud/ros-cdk-ecs.ILaunchTemplate")]
    public interface ILaunchTemplate : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute DefaultVersionNumber: The default version number of launch template.</summary>
        [JsiiProperty(name: "attrDefaultVersionNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDefaultVersionNumber
        {
            get;
        }

        /// <summary>Attribute LatestVersionNumber: The latest version number of launch template.</summary>
        [JsiiProperty(name: "attrLatestVersionNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLatestVersionNumber
        {
            get;
        }

        /// <summary>Attribute LaunchTemplateId: The id of launch template.</summary>
        [JsiiProperty(name: "attrLaunchTemplateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLaunchTemplateId
        {
            get;
        }

        /// <summary>Attribute LaunchTemplateName: The name of launch template.</summary>
        [JsiiProperty(name: "attrLaunchTemplateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLaunchTemplateName
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.LaunchTemplateProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ecs.ILaunchTemplateProps Props
        {
            get;
        }

        /// <summary>Represents a `LaunchTemplate`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ILaunchTemplate), fullyQualifiedName: "@alicloud/ros-cdk-ecs.ILaunchTemplate")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.ILaunchTemplate
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute DefaultVersionNumber: The default version number of launch template.</summary>
            [JsiiProperty(name: "attrDefaultVersionNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDefaultVersionNumber
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LatestVersionNumber: The latest version number of launch template.</summary>
            [JsiiProperty(name: "attrLatestVersionNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLatestVersionNumber
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LaunchTemplateId: The id of launch template.</summary>
            [JsiiProperty(name: "attrLaunchTemplateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLaunchTemplateId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LaunchTemplateName: The name of launch template.</summary>
            [JsiiProperty(name: "attrLaunchTemplateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLaunchTemplateName
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.LaunchTemplateProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ecs.ILaunchTemplateProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.ILaunchTemplateProps>()!;
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
