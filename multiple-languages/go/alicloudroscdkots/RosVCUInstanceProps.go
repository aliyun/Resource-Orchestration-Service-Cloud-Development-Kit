package alicloudroscdkots


// Properties for defining a `RosVCUInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ots-vcuinstance
type RosVCUInstanceProps struct {
	ClusterType interface{} `field:"required" json:"clusterType" yaml:"clusterType"`
	PeriodInMonth interface{} `field:"required" json:"periodInMonth" yaml:"periodInMonth"`
	Vcu interface{} `field:"required" json:"vcu" yaml:"vcu"`
	AliasName interface{} `field:"optional" json:"aliasName" yaml:"aliasName"`
	AutoRenewPeriodInMonth interface{} `field:"optional" json:"autoRenewPeriodInMonth" yaml:"autoRenewPeriodInMonth"`
	EnableAutoRenew interface{} `field:"optional" json:"enableAutoRenew" yaml:"enableAutoRenew"`
	EnableElasticVcu interface{} `field:"optional" json:"enableElasticVcu" yaml:"enableElasticVcu"`
	InstanceDescription interface{} `field:"optional" json:"instanceDescription" yaml:"instanceDescription"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tags *[]*RosVCUInstance_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

