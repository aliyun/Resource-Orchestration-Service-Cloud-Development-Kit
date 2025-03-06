using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Represents a `RamRoleAttachment`.</summary>
    [JsiiInterface(nativeType: typeof(IRamRoleAttachment), fullyQualifiedName: "@alicloud/ros-cdk-ecs.IRamRoleAttachment")]
    public interface IRamRoleAttachment : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute InstanceIds: The list of ecs instance id.</summary>
        [JsiiProperty(name: "attrInstanceIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInstanceIds
        {
            get;
        }

        /// <summary>Attribute RamRoleName: The ram role name.</summary>
        [JsiiProperty(name: "attrRamRoleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRamRoleName
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.RamRoleAttachmentProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ecs.IRamRoleAttachmentProps Props
        {
            get;
        }

        /// <summary>Represents a `RamRoleAttachment`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRamRoleAttachment), fullyQualifiedName: "@alicloud/ros-cdk-ecs.IRamRoleAttachment")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IRamRoleAttachment
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute InstanceIds: The list of ecs instance id.</summary>
            [JsiiProperty(name: "attrInstanceIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInstanceIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RamRoleName: The ram role name.</summary>
            [JsiiProperty(name: "attrRamRoleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRamRoleName
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.RamRoleAttachmentProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ecs.IRamRoleAttachmentProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.IRamRoleAttachmentProps>()!;
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
