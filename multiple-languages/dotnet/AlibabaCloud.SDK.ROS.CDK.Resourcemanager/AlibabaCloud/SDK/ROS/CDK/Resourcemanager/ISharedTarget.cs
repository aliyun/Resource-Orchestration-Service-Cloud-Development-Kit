using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>Represents a `SharedTarget`.</summary>
    [JsiiInterface(nativeType: typeof(ISharedTarget), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.ISharedTarget")]
    public interface ISharedTarget : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute CreateTime: Create time of the resource share.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute ResourceShareId: The ID of the resource share.</summary>
        [JsiiProperty(name: "attrResourceShareId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceShareId
        {
            get;
        }

        /// <summary>Attribute ResourceShareName: The name of the resource share.</summary>
        [JsiiProperty(name: "attrResourceShareName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceShareName
        {
            get;
        }

        /// <summary>Attribute TargetId: The ID of the principal.</summary>
        [JsiiProperty(name: "attrTargetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTargetId
        {
            get;
        }

        /// <summary>Attribute UpdateTime: Update time of the resource share.</summary>
        [JsiiProperty(name: "attrUpdateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUpdateTime
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.SharedTargetProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Resourcemanager.ISharedTargetProps Props
        {
            get;
        }

        /// <summary>Represents a `SharedTarget`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ISharedTarget), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.ISharedTarget")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.ISharedTarget
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute CreateTime: Create time of the resource share.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceShareId: The ID of the resource share.</summary>
            [JsiiProperty(name: "attrResourceShareId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceShareId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceShareName: The name of the resource share.</summary>
            [JsiiProperty(name: "attrResourceShareName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceShareName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TargetId: The ID of the principal.</summary>
            [JsiiProperty(name: "attrTargetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTargetId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute UpdateTime: Update time of the resource share.</summary>
            [JsiiProperty(name: "attrUpdateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUpdateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-resourcemanager.SharedTargetProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Resourcemanager.ISharedTargetProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Resourcemanager.ISharedTargetProps>()!;
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
