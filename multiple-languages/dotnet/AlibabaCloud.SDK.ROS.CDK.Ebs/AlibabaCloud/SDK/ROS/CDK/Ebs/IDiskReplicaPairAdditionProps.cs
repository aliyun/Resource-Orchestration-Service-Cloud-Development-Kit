using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ebs
{
    /// <summary>Properties for defining a `ALIYUN::EBS::DiskReplicaPairAddition`.</summary>
    [JsiiInterface(nativeType: typeof(IDiskReplicaPairAdditionProps), fullyQualifiedName: "@alicloud/ros-cdk-ebs.DiskReplicaPairAdditionProps")]
    public interface IDiskReplicaPairAdditionProps
    {
        /// <summary>Property replicaGroupId: The ID of the replication pair-consistent group.</summary>
        [JsiiProperty(name: "replicaGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ReplicaGroupId
        {
            get;
        }

        /// <summary>Property replicaPairId: The ID of the replication pair.</summary>
        /// <remarks>
        /// You can call the DescribeDiskReplicaPairs operation to query the IDs of existing replication pairs.
        /// </remarks>
        [JsiiProperty(name: "replicaPairId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ReplicaPairId
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::EBS::DiskReplicaPairAddition`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDiskReplicaPairAdditionProps), fullyQualifiedName: "@alicloud/ros-cdk-ebs.DiskReplicaPairAdditionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ebs.IDiskReplicaPairAdditionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property replicaGroupId: The ID of the replication pair-consistent group.</summary>
            [JsiiProperty(name: "replicaGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ReplicaGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property replicaPairId: The ID of the replication pair.</summary>
            /// <remarks>
            /// You can call the DescribeDiskReplicaPairs operation to query the IDs of existing replication pairs.
            /// </remarks>
            [JsiiProperty(name: "replicaPairId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ReplicaPairId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
