using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mongodb
{
    /// <summary>Properties for defining a `ShardingNetworkPublicAddress`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardingnetworkpublicaddress
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IShardingNetworkPublicAddressProps), fullyQualifiedName: "@alicloud/ros-cdk-mongodb.ShardingNetworkPublicAddressProps")]
    public interface IShardingNetworkPublicAddressProps
    {
        /// <summary>Property dbInstanceId: The ID of the instance.</summary>
        /// <remarks>
        ///     you must also configure the <strong>NodeId</strong> parameter when configuring a shard cluster instance ID.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbInstanceId
        {
            get;
        }

        /// <summary>Property nodeId: The Mongos node ID, Shard node ID, or ConfigServer node ID in the sharded cluster instance.</summary>
        /// <remarks>
        /// You can call the [DescribeDBInstanceAttribute](~~ 62010 ~~) operation to query the node ID of the Mongos node, Shard node, or ConfigServer node.
        ///
        ///     This parameter is required when <strong>DBInstanceId</strong> is configured as a sharded cluster instance ID.
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

        /// <summary>Properties for defining a `ShardingNetworkPublicAddress`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardingnetworkpublicaddress
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IShardingNetworkPublicAddressProps), fullyQualifiedName: "@alicloud/ros-cdk-mongodb.ShardingNetworkPublicAddressProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mongodb.IShardingNetworkPublicAddressProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property dbInstanceId: The ID of the instance.</summary>
            /// <remarks>
            ///     you must also configure the <strong>NodeId</strong> parameter when configuring a shard cluster instance ID.
            /// </remarks>
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property nodeId: The Mongos node ID, Shard node ID, or ConfigServer node ID in the sharded cluster instance.</summary>
            /// <remarks>
            /// You can call the [DescribeDBInstanceAttribute](~~ 62010 ~~) operation to query the node ID of the Mongos node, Shard node, or ConfigServer node.
            ///
            ///     This parameter is required when <strong>DBInstanceId</strong> is configured as a sharded cluster instance ID.
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
