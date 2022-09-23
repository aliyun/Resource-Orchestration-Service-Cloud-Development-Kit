using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ebs
{
    /// <summary>Properties for defining a `ALIYUN::EBS::DiskReplicaPairAddition`.</summary>
    [JsiiInterface(nativeType: typeof(IRosDiskReplicaPairAdditionProps), fullyQualifiedName: "@alicloud/ros-cdk-ebs.RosDiskReplicaPairAdditionProps")]
    public interface IRosDiskReplicaPairAdditionProps
    {
        /// <remarks>
        /// <strong>Property</strong>: replicaGroupId: The ID of the replication pair-consistent group.
        /// </remarks>
        [JsiiProperty(name: "replicaGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ReplicaGroupId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: replicaPairId: The ID of the replication pair. You can call the DescribeDiskReplicaPairs operation to query the IDs of existing replication pairs.
        /// </remarks>
        [JsiiProperty(name: "replicaPairId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ReplicaPairId
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::EBS::DiskReplicaPairAddition`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosDiskReplicaPairAdditionProps), fullyQualifiedName: "@alicloud/ros-cdk-ebs.RosDiskReplicaPairAdditionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ebs.IRosDiskReplicaPairAdditionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: replicaGroupId: The ID of the replication pair-consistent group.
            /// </remarks>
            [JsiiProperty(name: "replicaGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ReplicaGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: replicaPairId: The ID of the replication pair. You can call the DescribeDiskReplicaPairs operation to query the IDs of existing replication pairs.
            /// </remarks>
            [JsiiProperty(name: "replicaPairId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ReplicaPairId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
