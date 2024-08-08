package alicloudroscdkddospro


// Properties for defining a `RosWebRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-webrule
type RosWebRuleProps struct {
	Domain interface{} `field:"required" json:"domain" yaml:"domain"`
	RsType interface{} `field:"required" json:"rsType" yaml:"rsType"`
	Rules interface{} `field:"required" json:"rules" yaml:"rules"`
	DefenseId interface{} `field:"optional" json:"defenseId" yaml:"defenseId"`
	HttpsExt interface{} `field:"optional" json:"httpsExt" yaml:"httpsExt"`
	InstanceIds interface{} `field:"optional" json:"instanceIds" yaml:"instanceIds"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

