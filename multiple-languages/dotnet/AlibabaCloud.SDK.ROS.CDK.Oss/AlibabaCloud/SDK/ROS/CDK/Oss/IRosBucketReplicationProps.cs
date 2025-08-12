using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oss
{
    /// <summary>Properties for defining a `RosBucketReplication`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketreplication
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosBucketReplicationProps), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucketReplicationProps")]
    public interface IRosBucketReplicationProps
    {
        /// <remarks>
        /// <strong>Property</strong>: bucketName: Bucket name.
        /// </remarks>
        [JsiiProperty(name: "bucketName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BucketName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: replicationConfiguration: Replication configuration.
        /// </remarks>
        [JsiiProperty(name: "replicationConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucketReplication.ReplicationConfigurationProperty\"}]}}")]
        object ReplicationConfiguration
        {
            get;
        }

        /// <summary>Properties for defining a `RosBucketReplication`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketreplication
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosBucketReplicationProps), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucketReplicationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.IRosBucketReplicationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: bucketName: Bucket name.
            /// </remarks>
            [JsiiProperty(name: "bucketName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BucketName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: replicationConfiguration: Replication configuration.
            /// </remarks>
            [JsiiProperty(name: "replicationConfiguration", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-oss.RosBucketReplication.ReplicationConfigurationProperty\"}]}}")]
            public object ReplicationConfiguration
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
