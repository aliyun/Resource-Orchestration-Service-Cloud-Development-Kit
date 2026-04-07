using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mongodb
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ShardingNetworkPublicAddress`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardingnetworkpublicaddress
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-mongodb.ShardingNetworkPublicAddressProps")]
    public class ShardingNetworkPublicAddressProps : AlibabaCloud.SDK.ROS.CDK.Mongodb.IShardingNetworkPublicAddressProps
    {
        private object _dbInstanceId;

        /// <summary>Property dbInstanceId: The ID of the instance.</summary>
        /// <remarks>
        ///     you must also configure the <strong>NodeId</strong> parameter when configuring a shard cluster instance ID.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DbInstanceId
        {
            get => _dbInstanceId;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _dbInstanceId = value;
            }
        }

        private object? _nodeId;

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
            get => _nodeId;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _nodeId = value;
            }
        }
    }
}
