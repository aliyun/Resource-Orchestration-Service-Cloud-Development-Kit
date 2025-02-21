using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecd
{
    /// <summary>Represents a `UserDesktopGroupAddition`.</summary>
    [JsiiInterface(nativeType: typeof(IUserDesktopGroupAddition), fullyQualifiedName: "@alicloud/ros-cdk-ecd.IUserDesktopGroupAddition")]
    public interface IUserDesktopGroupAddition : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute DesktopGroupId: The ID of the desktop group that you want to assign to more regular users.</summary>
        [JsiiProperty(name: "attrDesktopGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDesktopGroupId
        {
            get;
        }

        /// <summary>Attribute EndUserIds: The regular users to whom you want to assign the desktop group.</summary>
        [JsiiProperty(name: "attrEndUserIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEndUserIds
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecd.UserDesktopGroupAdditionProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ecd.IUserDesktopGroupAdditionProps Props
        {
            get;
        }

        /// <summary>Represents a `UserDesktopGroupAddition`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IUserDesktopGroupAddition), fullyQualifiedName: "@alicloud/ros-cdk-ecd.IUserDesktopGroupAddition")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecd.IUserDesktopGroupAddition
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute DesktopGroupId: The ID of the desktop group that you want to assign to more regular users.</summary>
            [JsiiProperty(name: "attrDesktopGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDesktopGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EndUserIds: The regular users to whom you want to assign the desktop group.</summary>
            [JsiiProperty(name: "attrEndUserIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEndUserIds
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecd.UserDesktopGroupAdditionProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ecd.IUserDesktopGroupAdditionProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecd.IUserDesktopGroupAdditionProps>()!;
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
