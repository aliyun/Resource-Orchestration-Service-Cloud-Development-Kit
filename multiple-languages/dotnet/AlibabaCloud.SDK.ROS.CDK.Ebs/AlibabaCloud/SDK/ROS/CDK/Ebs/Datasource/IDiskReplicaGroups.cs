using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ebs.Datasource
{
    /// <summary>Represents a `DiskReplicaGroups`.</summary>
    [JsiiInterface(nativeType: typeof(IDiskReplicaGroups), fullyQualifiedName: "@alicloud/ros-cdk-ebs.datasource.IDiskReplicaGroups")]
    public interface IDiskReplicaGroups : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute DiskReplicaGroups: The list of disk replica groups.</summary>
        [JsiiProperty(name: "attrDiskReplicaGroups", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDiskReplicaGroups
        {
            get;
        }

        /// <summary>Attribute ReplicaGroupIds: The list of replica group IDs.</summary>
        [JsiiProperty(name: "attrReplicaGroupIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrReplicaGroupIds
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ebs.datasource.DiskReplicaGroupsProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ebs.Datasource.IDiskReplicaGroupsProps Props
        {
            get;
        }

        /// <summary>Represents a `DiskReplicaGroups`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDiskReplicaGroups), fullyQualifiedName: "@alicloud/ros-cdk-ebs.datasource.IDiskReplicaGroups")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ebs.Datasource.IDiskReplicaGroups
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute DiskReplicaGroups: The list of disk replica groups.</summary>
            [JsiiProperty(name: "attrDiskReplicaGroups", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDiskReplicaGroups
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ReplicaGroupIds: The list of replica group IDs.</summary>
            [JsiiProperty(name: "attrReplicaGroupIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrReplicaGroupIds
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ebs.datasource.DiskReplicaGroupsProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ebs.Datasource.IDiskReplicaGroupsProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ebs.Datasource.IDiskReplicaGroupsProps>()!;
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
