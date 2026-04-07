using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Represents a `LaunchTemplateVersion`.</summary>
    [JsiiInterface(nativeType: typeof(ILaunchTemplateVersion), fullyQualifiedName: "@alicloud/ros-cdk-ecs.ILaunchTemplateVersion")]
    public interface ILaunchTemplateVersion : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute CreatedBy: The ID of the Alibaba Cloud account that created the launch template.</summary>
        [JsiiProperty(name: "attrCreatedBy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreatedBy
        {
            get;
        }

        /// <summary>Attribute CreateTime: The time when the launch template version was created.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute DefaultVersion: Indicates whether the launch template version is the default version.</summary>
        [JsiiProperty(name: "attrDefaultVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDefaultVersion
        {
            get;
        }

        /// <summary>Attribute LaunchTemplateData: The configurations of the launch template.</summary>
        [JsiiProperty(name: "attrLaunchTemplateData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLaunchTemplateData
        {
            get;
        }

        /// <summary>Attribute LaunchTemplateId: The ID of the launch template.</summary>
        [JsiiProperty(name: "attrLaunchTemplateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLaunchTemplateId
        {
            get;
        }

        /// <summary>Attribute LaunchTemplateName: The name of the launch template.</summary>
        [JsiiProperty(name: "attrLaunchTemplateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLaunchTemplateName
        {
            get;
        }

        /// <summary>Attribute ModifiedTime: The time when the launch template version was modified.</summary>
        [JsiiProperty(name: "attrModifiedTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrModifiedTime
        {
            get;
        }

        /// <summary>Attribute ResourceGroupId: The ID of the resource group to which to assign the instance.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceGroupId
        {
            get;
        }

        /// <summary>Attribute VersionDescription: The description of the launch template version.</summary>
        [JsiiProperty(name: "attrVersionDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVersionDescription
        {
            get;
        }

        /// <summary>Attribute VersionNumber: The number of the created version of the launch template.</summary>
        [JsiiProperty(name: "attrVersionNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVersionNumber
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.LaunchTemplateVersionProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ecs.ILaunchTemplateVersionProps Props
        {
            get;
        }

        /// <summary>Represents a `LaunchTemplateVersion`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ILaunchTemplateVersion), fullyQualifiedName: "@alicloud/ros-cdk-ecs.ILaunchTemplateVersion")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.ILaunchTemplateVersion
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute CreatedBy: The ID of the Alibaba Cloud account that created the launch template.</summary>
            [JsiiProperty(name: "attrCreatedBy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreatedBy
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: The time when the launch template version was created.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DefaultVersion: Indicates whether the launch template version is the default version.</summary>
            [JsiiProperty(name: "attrDefaultVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDefaultVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LaunchTemplateData: The configurations of the launch template.</summary>
            [JsiiProperty(name: "attrLaunchTemplateData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLaunchTemplateData
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LaunchTemplateId: The ID of the launch template.</summary>
            [JsiiProperty(name: "attrLaunchTemplateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLaunchTemplateId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LaunchTemplateName: The name of the launch template.</summary>
            [JsiiProperty(name: "attrLaunchTemplateName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLaunchTemplateName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ModifiedTime: The time when the launch template version was modified.</summary>
            [JsiiProperty(name: "attrModifiedTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrModifiedTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceGroupId: The ID of the resource group to which to assign the instance.</summary>
            [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VersionDescription: The description of the launch template version.</summary>
            [JsiiProperty(name: "attrVersionDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVersionDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VersionNumber: The number of the created version of the launch template.</summary>
            [JsiiProperty(name: "attrVersionNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVersionNumber
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.LaunchTemplateVersionProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ecs.ILaunchTemplateVersionProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.ILaunchTemplateVersionProps>()!;
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
