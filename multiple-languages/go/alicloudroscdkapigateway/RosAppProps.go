package alicloudroscdkapigateway


// Properties for defining a `RosApp`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-app
type RosAppProps struct {
	AppName interface{} `field:"required" json:"appName" yaml:"appName"`
	AppCode interface{} `field:"optional" json:"appCode" yaml:"appCode"`
	AppKey interface{} `field:"optional" json:"appKey" yaml:"appKey"`
	AppSecret interface{} `field:"optional" json:"appSecret" yaml:"appSecret"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Tags *[]*RosApp_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

