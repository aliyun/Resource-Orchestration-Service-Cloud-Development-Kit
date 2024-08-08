package alicloudroscdkelasticsearchserverless


// Properties for defining a `RosApp`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-elasticsearchserverless-app
type RosAppProps struct {
	AppName interface{} `field:"required" json:"appName" yaml:"appName"`
	Authentication interface{} `field:"required" json:"authentication" yaml:"authentication"`
	QuotaInfo interface{} `field:"required" json:"quotaInfo" yaml:"quotaInfo"`
	AppVersion interface{} `field:"optional" json:"appVersion" yaml:"appVersion"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Network interface{} `field:"optional" json:"network" yaml:"network"`
	PrivateNetwork interface{} `field:"optional" json:"privateNetwork" yaml:"privateNetwork"`
}

