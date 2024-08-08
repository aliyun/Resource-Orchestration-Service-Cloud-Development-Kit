package alicloudroscdkarms


// Properties for defining a `AlertContactGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-alertcontactgroup
type AlertContactGroupProps struct {
	// Property contactGroupName: The name of the alert contact group that you want to create.
	ContactGroupName interface{} `field:"required" json:"contactGroupName" yaml:"contactGroupName"`
	// Property contactIds: The list of alert contact ID.
	ContactIds interface{} `field:"required" json:"contactIds" yaml:"contactIds"`
	// Property proxyUserId: Internal parameters.
	ProxyUserId interface{} `field:"optional" json:"proxyUserId" yaml:"proxyUserId"`
	// Property regionId: Region ID.
	//
	// Default to region of stack.
	RegionId interface{} `field:"optional" json:"regionId" yaml:"regionId"`
}

