package alicloudroscdkmongodb


// Properties for defining a `ShardingNetworkPublicAddress`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardingnetworkpublicaddress
type ShardingNetworkPublicAddressProps struct {
	// Property dbInstanceId: The ID of the instance.
	//
	// > you must also configure the **NodeId** parameter when configuring a shard cluster instance ID.
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	// Property nodeId: The Mongos node ID, Shard node ID, or ConfigServer node ID in the sharded cluster instance.
	//
	// You can call the [DescribeDBInstanceAttribute](~~ 62010 ~~) operation to query the node ID of the Mongos node, Shard node, or ConfigServer node.
	// > This parameter is required when **DBInstanceId** is configured as a sharded cluster instance ID.
	NodeId interface{} `field:"optional" json:"nodeId" yaml:"nodeId"`
}

