package alicloudroscdkmongodb


// Properties for defining a `ShardingNetworkPrivateAddress`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardingnetworkprivateaddress
type ShardingNetworkPrivateAddressProps struct {
	// Property dbInstanceId: The ID of the Shard cluster instance.
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	// Property nodeId: The ID of the Mongos node, Shard node, or ConfigServer node in the sharded cluster instance.
	//
	// > You can call the [DescribeDBInstanceAttribute] interface to query the Mongos, Shard, and ConfigServer node ID.
	NodeId interface{} `field:"required" json:"nodeId" yaml:"nodeId"`
	// Property accountName: Account name.
	//
	// >- starts with a lowercase letter, has 4 to 16 digits in length, and consists of lowercase letters, numbers, or underscores.
	// - Only when you apply for the Shard\/ConfigServer address for the first time, you need to set the account name and password. That is, all Shard nodes and ConfigServer nodes will use the account and password set when applying for the address for the first time.
	// - The permissions of this account are fixed to read-only.
	AccountName interface{} `field:"optional" json:"accountName" yaml:"accountName"`
	// Property accountPassword: Account password.
	//
	// - The password consists of at least three of uppercase letters, lowercase letters, numbers, and special characters. The special character is '! #$%^& *()_+-='
	// - The password length is 8-32 bits.
	AccountPassword interface{} `field:"optional" json:"accountPassword" yaml:"accountPassword"`
	// Property zoneId: The ID of the zone to which the instance belongs.
	//
	// > You can call the [describeddinstanceattribute] operation to query the zone ID of an instance.
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

