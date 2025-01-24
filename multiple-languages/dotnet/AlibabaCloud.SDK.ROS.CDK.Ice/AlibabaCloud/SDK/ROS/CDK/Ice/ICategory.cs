using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ice
{
    /// <summary>Represents a `Category`.</summary>
    [JsiiInterface(nativeType: typeof(ICategory), fullyQualifiedName: "@alicloud/ros-cdk-ice.ICategory")]
    public interface ICategory : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute CateId: The ID of the category.</summary>
        [JsiiProperty(name: "attrCateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCateId
        {
            get;
        }

        /// <summary>Attribute Level: The level of the category.</summary>
        /// <remarks>
        /// The primary classification level is 0, the secondary classification level is 1, and the tertiary classification level is 2.
        /// </remarks>
        [JsiiProperty(name: "attrLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLevel
        {
            get;
        }

        /// <summary>Attribute ParentId: The ID of the parent category.</summary>
        [JsiiProperty(name: "attrParentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrParentId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ice.CategoryProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ice.ICategoryProps Props
        {
            get;
        }

        /// <summary>Represents a `Category`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ICategory), fullyQualifiedName: "@alicloud/ros-cdk-ice.ICategory")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ice.ICategory
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute CateId: The ID of the category.</summary>
            [JsiiProperty(name: "attrCateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCateId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Level: The level of the category.</summary>
            /// <remarks>
            /// The primary classification level is 0, the secondary classification level is 1, and the tertiary classification level is 2.
            /// </remarks>
            [JsiiProperty(name: "attrLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLevel
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ParentId: The ID of the parent category.</summary>
            [JsiiProperty(name: "attrParentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrParentId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ice.CategoryProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ice.ICategoryProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ice.ICategoryProps>()!;
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
