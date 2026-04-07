package alicloudroscdkmongodb


// Properties for defining a `RosShardingNetworkPublicAddress`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardingnetworkpublicaddress
type RosShardingNetworkPublicAddressProps struct {
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	NodeId interface{} `field:"optional" json:"nodeId" yaml:"nodeId"`
}

