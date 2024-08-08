package alicloudroscdkrds


// Properties for defining a `RosADInfo`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-adinfo
type RosADInfoProps struct {
	AdAccountName interface{} `field:"required" json:"adAccountName" yaml:"adAccountName"`
	Addns interface{} `field:"required" json:"addns" yaml:"addns"`
	AdPassword interface{} `field:"required" json:"adPassword" yaml:"adPassword"`
	AdServerIpAddress interface{} `field:"required" json:"adServerIpAddress" yaml:"adServerIpAddress"`
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
}

