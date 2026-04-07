using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mongodb
{
    /// <summary>Properties for defining a `RosShardingNetworkPublicAddress`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardingnetworkpublicaddress
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosShardingNetworkPublicAddressProps), fullyQualifiedName: "@alicloud/ros-cdk-mongodb.RosShardingNetworkPublicAddressProps")]
    public interface IRosShardingNetworkPublicAddressProps
    {
        /// <remarks>
        /// <strong>Property</strong>: dbInstanceId: The ID of the instance.
        /// > you must also configure the **NodeId** parameter when configuring a shard cluster instance ID.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbInstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: nodeId: The Mongos node ID, Shard node ID, or ConfigServer node ID in the sharded cluster instance. You can call the [DescribeDBInstanceAttribute](~~ 62010 ~~) operation to query the node ID of the Mongos node, Shard node, or ConfigServer node.
        /// > This parameter is required when **DBInstanceId** is configured as a sharded cluster instance ID.
        /// </remarks>
        [JsiiProperty(name: "nodeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NodeId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosShardingNetworkPublicAddress`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardingnetworkpublicaddress
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosShardingNetworkPublicAddressProps), fullyQualifiedName: "@alicloud/ros-cdk-mongodb.RosShardingNetworkPublicAddressProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mongodb.IRosShardingNetworkPublicAddressProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: dbInstanceId: The ID of the instance.
            /// > you must also configure the **NodeId** parameter when configuring a shard cluster instance ID.
            /// </remarks>
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: nodeId: The Mongos node ID, Shard node ID, or ConfigServer node ID in the sharded cluster instance. You can call the [DescribeDBInstanceAttribute](~~ 62010 ~~) operation to query the node ID of the Mongos node, Shard node, or ConfigServer node.
            /// > This parameter is required when **DBInstanceId** is configured as a sharded cluster instance ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "nodeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NodeId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
