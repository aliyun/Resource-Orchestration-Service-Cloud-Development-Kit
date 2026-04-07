package alicloudroscdkmongodb


// Properties for defining a `RosShardingNetworkPrivateAddress`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardingnetworkprivateaddress
type RosShardingNetworkPrivateAddressProps struct {
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	NodeId interface{} `field:"required" json:"nodeId" yaml:"nodeId"`
	AccountName interface{} `field:"optional" json:"accountName" yaml:"accountName"`
	AccountPassword interface{} `field:"optional" json:"accountPassword" yaml:"accountPassword"`
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

