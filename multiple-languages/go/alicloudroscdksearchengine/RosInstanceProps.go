package alicloudroscdksearchengine


// Properties for defining a `RosInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-searchengine-instance
type RosInstanceProps struct {
	ChargeType interface{} `field:"required" json:"chargeType" yaml:"chargeType"`
	Password interface{} `field:"required" json:"password" yaml:"password"`
	QrsNum interface{} `field:"required" json:"qrsNum" yaml:"qrsNum"`
	QrsSpec interface{} `field:"required" json:"qrsSpec" yaml:"qrsSpec"`
	SearcherDocSize interface{} `field:"required" json:"searcherDocSize" yaml:"searcherDocSize"`
	SearcherNum interface{} `field:"required" json:"searcherNum" yaml:"searcherNum"`
	SearcherSpec interface{} `field:"required" json:"searcherSpec" yaml:"searcherSpec"`
	UserName interface{} `field:"required" json:"userName" yaml:"userName"`
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
}

