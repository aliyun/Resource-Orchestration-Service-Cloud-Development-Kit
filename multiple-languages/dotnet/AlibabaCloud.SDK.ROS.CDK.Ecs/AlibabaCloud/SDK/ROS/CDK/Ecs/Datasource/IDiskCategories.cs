using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource
{
    /// <summary>Represents a `DiskCategories`.</summary>
    [JsiiInterface(nativeType: typeof(IDiskCategories), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.IDiskCategories")]
    public interface IDiskCategories : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute DiskCategories: The list of disk categories.</summary>
        [JsiiProperty(name: "attrDiskCategories", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDiskCategories
        {
            get;
        }

        /// <summary>Attribute DiskCategoryIds: The list of disk category IDs.</summary>
        [JsiiProperty(name: "attrDiskCategoryIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDiskCategoryIds
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.DiskCategoriesProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IDiskCategoriesProps Props
        {
            get;
        }

        /// <summary>Represents a `DiskCategories`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDiskCategories), fullyQualifiedName: "@alicloud/ros-cdk-ecs.datasource.IDiskCategories")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IDiskCategories
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute DiskCategories: The list of disk categories.</summary>
            [JsiiProperty(name: "attrDiskCategories", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDiskCategories
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DiskCategoryIds: The list of disk category IDs.</summary>
            [JsiiProperty(name: "attrDiskCategoryIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDiskCategoryIds
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.datasource.DiskCategoriesProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IDiskCategoriesProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.Datasource.IDiskCategoriesProps>()!;
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
