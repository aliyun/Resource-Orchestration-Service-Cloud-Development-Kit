package alicloudroscdkarms


// Properties for defining a `RosAlertContactGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-alertcontactgroup
type RosAlertContactGroupProps struct {
	ContactGroupName interface{} `field:"required" json:"contactGroupName" yaml:"contactGroupName"`
	ContactIds interface{} `field:"required" json:"contactIds" yaml:"contactIds"`
	ProxyUserId interface{} `field:"optional" json:"proxyUserId" yaml:"proxyUserId"`
	RegionId interface{} `field:"optional" json:"regionId" yaml:"regionId"`
}

