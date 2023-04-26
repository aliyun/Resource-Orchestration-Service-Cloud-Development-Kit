using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ebs
{
    /// <summary>Properties for defining a `ALIYUN::EBS::DiskReplicaGroup`.</summary>
    [JsiiInterface(nativeType: typeof(IDiskReplicaGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-ebs.DiskReplicaGroupProps")]
    public interface IDiskReplicaGroupProps
    {
        /// <summary>Property destinationRegionId: The ID of the region to which the disaster recovery site belongs.</summary>
        [JsiiProperty(name: "destinationRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DestinationRegionId
        {
            get;
        }

        /// <summary>Property destinationZoneId: The ID of the zone to which the disaster recovery site belongs.</summary>
        [JsiiProperty(name: "destinationZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DestinationZoneId
        {
            get;
        }

        /// <summary>Property sourceRegionId: The ID of the region to which the production site belongs.</summary>
        [JsiiProperty(name: "sourceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SourceRegionId
        {
            get;
        }

        /// <summary>Property sourceZoneId: The ID of the zone to which the production site belongs.</summary>
        [JsiiProperty(name: "sourceZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SourceZoneId
        {
            get;
        }

        /// <summary>Property description: The description of the consistent replication group.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property diskReplicaGroupName: Consistent replication group name.</summary>
        [JsiiProperty(name: "diskReplicaGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DiskReplicaGroupName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of resource group.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property rpo: The RPO value set by the consistency group in seconds.</summary>
        [JsiiProperty(name: "rpo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Rpo
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags of disk replica group.</summary>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ebs.RosDiskReplicaGroup.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Ebs.RosDiskReplicaGroup.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::EBS::DiskReplicaGroup`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDiskReplicaGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-ebs.DiskReplicaGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ebs.IDiskReplicaGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property destinationRegionId: The ID of the region to which the disaster recovery site belongs.</summary>
            [JsiiProperty(name: "destinationRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DestinationRegionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property destinationZoneId: The ID of the zone to which the disaster recovery site belongs.</summary>
            [JsiiProperty(name: "destinationZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DestinationZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property sourceRegionId: The ID of the region to which the production site belongs.</summary>
            [JsiiProperty(name: "sourceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SourceRegionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property sourceZoneId: The ID of the zone to which the production site belongs.</summary>
            [JsiiProperty(name: "sourceZoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SourceZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The description of the consistent replication group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property diskReplicaGroupName: Consistent replication group name.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "diskReplicaGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DiskReplicaGroupName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of resource group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property rpo: The RPO value set by the consistency group in seconds.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "rpo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Rpo
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags of disk replica group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ebs.RosDiskReplicaGroup.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Ebs.RosDiskReplicaGroup.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ebs.RosDiskReplicaGroup.ITagsProperty[]?>();
            }
        }
    }
}
