using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oss
{
    /// <summary>Properties for defining a `BucketReplication`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketreplication
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IBucketReplicationProps), fullyQualifiedName: "@alicloud/ros-cdk-oss.BucketReplicationProps")]
    public interface IBucketReplicationProps
    {
        /// <summary>Property bucketName: Bucket name.</summary>
        [JsiiProperty(name: "bucketName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BucketName
        {
            get;
        }

        /// <summary>Property replicationConfiguration: Replication configuration.</summary>
        [JsiiProperty(name: "replicationConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucketReplication.ReplicationConfigurationProperty\"}]}}")]
        object ReplicationConfiguration
        {
            get;
        }

        /// <summary>Properties for defining a `BucketReplication`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketreplication
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IBucketReplicationProps), fullyQualifiedName: "@alicloud/ros-cdk-oss.BucketReplicationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.IBucketReplicationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property bucketName: Bucket name.</summary>
            [JsiiProperty(name: "bucketName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BucketName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property replicationConfiguration: Replication configuration.</summary>
            [JsiiProperty(name: "replicationConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucketReplication.ReplicationConfigurationProperty\"}]}}")]
            public object ReplicationConfiguration
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
