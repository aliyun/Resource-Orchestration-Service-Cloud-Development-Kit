using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ess
{
    /// <summary>Represents a `ServerGroupAttachment`.</summary>
    [JsiiInterface(nativeType: typeof(IServerGroupAttachment), fullyQualifiedName: "@alicloud/ros-cdk-ess.IServerGroupAttachment")]
    public interface IServerGroupAttachment : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute ScalingActivityId: The ID of the scaling activity during which one or more SLB instances are attached to the scaling group and the ECS instances in the scaling group are added to the backend server groups of the SLB instances.</summary>
        /// <remarks>
        /// Note This parameter is returned only after you set the ForceAttach parameter to true.
        /// </remarks>
        [JsiiProperty(name: "attrScalingActivityId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrScalingActivityId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ess.ServerGroupAttachmentProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ess.IServerGroupAttachmentProps Props
        {
            get;
        }

        /// <summary>Represents a `ServerGroupAttachment`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IServerGroupAttachment), fullyQualifiedName: "@alicloud/ros-cdk-ess.IServerGroupAttachment")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ess.IServerGroupAttachment
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute ScalingActivityId: The ID of the scaling activity during which one or more SLB instances are attached to the scaling group and the ECS instances in the scaling group are added to the backend server groups of the SLB instances.</summary>
            /// <remarks>
            /// Note This parameter is returned only after you set the ForceAttach parameter to true.
            /// </remarks>
            [JsiiProperty(name: "attrScalingActivityId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrScalingActivityId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ess.ServerGroupAttachmentProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ess.IServerGroupAttachmentProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ess.IServerGroupAttachmentProps>()!;
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
