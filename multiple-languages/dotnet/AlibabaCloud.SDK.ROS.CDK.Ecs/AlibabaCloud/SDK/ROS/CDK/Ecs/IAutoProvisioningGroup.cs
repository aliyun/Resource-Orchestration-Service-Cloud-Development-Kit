using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Represents a `AutoProvisioningGroup`.</summary>
    [JsiiInterface(nativeType: typeof(IAutoProvisioningGroup), fullyQualifiedName: "@alicloud/ros-cdk-ecs.IAutoProvisioningGroup")]
    public interface IAutoProvisioningGroup : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AutoProvisioningGroupId: The ID of the auto provisioning group.</summary>
        [JsiiProperty(name: "attrAutoProvisioningGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAutoProvisioningGroupId
        {
            get;
        }

        /// <summary>Attribute AutoProvisioningGroupName: The name of the auto provisioning group.</summary>
        [JsiiProperty(name: "attrAutoProvisioningGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAutoProvisioningGroupName
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.AutoProvisioningGroupProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ecs.IAutoProvisioningGroupProps Props
        {
            get;
        }

        /// <summary>Represents a `AutoProvisioningGroup`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAutoProvisioningGroup), fullyQualifiedName: "@alicloud/ros-cdk-ecs.IAutoProvisioningGroup")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IAutoProvisioningGroup
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AutoProvisioningGroupId: The ID of the auto provisioning group.</summary>
            [JsiiProperty(name: "attrAutoProvisioningGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAutoProvisioningGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AutoProvisioningGroupName: The name of the auto provisioning group.</summary>
            [JsiiProperty(name: "attrAutoProvisioningGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAutoProvisioningGroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ecs.AutoProvisioningGroupProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ecs.IAutoProvisioningGroupProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.IAutoProvisioningGroupProps>()!;
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
