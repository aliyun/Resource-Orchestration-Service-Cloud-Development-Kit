using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ebs.Datasource
{
    /// <summary>Represents a `DiskReplicaPairs`.</summary>
    [JsiiInterface(nativeType: typeof(IDiskReplicaPairs), fullyQualifiedName: "@alicloud/ros-cdk-ebs.datasource.IDiskReplicaPairs")]
    public interface IDiskReplicaPairs : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute DiskReplicaPairs: The list of disk replica pairs.</summary>
        [JsiiProperty(name: "attrDiskReplicaPairs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDiskReplicaPairs
        {
            get;
        }

        /// <summary>Attribute ReplicaPairIds: The list of replica pair IDs.</summary>
        [JsiiProperty(name: "attrReplicaPairIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrReplicaPairIds
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ebs.datasource.DiskReplicaPairsProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ebs.Datasource.IDiskReplicaPairsProps Props
        {
            get;
        }

        /// <summary>Represents a `DiskReplicaPairs`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDiskReplicaPairs), fullyQualifiedName: "@alicloud/ros-cdk-ebs.datasource.IDiskReplicaPairs")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ebs.Datasource.IDiskReplicaPairs
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute DiskReplicaPairs: The list of disk replica pairs.</summary>
            [JsiiProperty(name: "attrDiskReplicaPairs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDiskReplicaPairs
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ReplicaPairIds: The list of replica pair IDs.</summary>
            [JsiiProperty(name: "attrReplicaPairIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrReplicaPairIds
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ebs.datasource.DiskReplicaPairsProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ebs.Datasource.IDiskReplicaPairsProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ebs.Datasource.IDiskReplicaPairsProps>()!;
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
