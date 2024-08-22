package alicloudroscdksearchengine


// Properties for defining a `Instance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-searchengine-instance
type InstanceProps struct {
	// Property chargeType: The billing method.
	//
	// Valid values: POSTPAY.
	// POSTPAY: pay-as-you-go.
	ChargeType interface{} `field:"required" json:"chargeType" yaml:"chargeType"`
	// Property password: The password of instance.
	//
	// It consists of lowercase letters and numbers, and the length is 6-8 characters.
	Password interface{} `field:"required" json:"password" yaml:"password"`
	// Property qrsNum: The number of query nodes.
	QrsNum interface{} `field:"required" json:"qrsNum" yaml:"qrsNum"`
	// Property qrsSpec: The specification of query nodes.
	QrsSpec interface{} `field:"required" json:"qrsSpec" yaml:"qrsSpec"`
	// Property searcherDocSize: The storage size of single data node.
	SearcherDocSize interface{} `field:"required" json:"searcherDocSize" yaml:"searcherDocSize"`
	// Property searcherNum: The number of data nodes.
	SearcherNum interface{} `field:"required" json:"searcherNum" yaml:"searcherNum"`
	// Property searcherSpec: The specification of data nodes.
	SearcherSpec interface{} `field:"required" json:"searcherSpec" yaml:"searcherSpec"`
	// Property userName: The user name of instance.
	//
	// Begin with a letter, support upper and lower case letters, numbers, underscores, length 1-30 characters.
	UserName interface{} `field:"required" json:"userName" yaml:"userName"`
	// Property vpcId: The ID of VPC.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property vSwitchId: The ID of vSwitch.
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
}

