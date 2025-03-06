using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ebs
{
    /// <summary>Represents a `DiskReplicaPairAddition`.</summary>
    [JsiiInterface(nativeType: typeof(IDiskReplicaPairAddition), fullyQualifiedName: "@alicloud/ros-cdk-ebs.IDiskReplicaPairAddition")]
    public interface IDiskReplicaPairAddition : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute ReplicaGroupId: The ID of the replication pair-consistent group.</summary>
        [JsiiProperty(name: "attrReplicaGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrReplicaGroupId
        {
            get;
        }

        /// <summary>Attribute ReplicaPairId: The ID of the replication pair.</summary>
        [JsiiProperty(name: "attrReplicaPairId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrReplicaPairId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ebs.DiskReplicaPairAdditionProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ebs.IDiskReplicaPairAdditionProps Props
        {
            get;
        }

        /// <summary>Represents a `DiskReplicaPairAddition`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDiskReplicaPairAddition), fullyQualifiedName: "@alicloud/ros-cdk-ebs.IDiskReplicaPairAddition")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ebs.IDiskReplicaPairAddition
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute ReplicaGroupId: The ID of the replication pair-consistent group.</summary>
            [JsiiProperty(name: "attrReplicaGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrReplicaGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ReplicaPairId: The ID of the replication pair.</summary>
            [JsiiProperty(name: "attrReplicaPairId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrReplicaPairId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ebs.DiskReplicaPairAdditionProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ebs.IDiskReplicaPairAdditionProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ebs.IDiskReplicaPairAdditionProps>()!;
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
