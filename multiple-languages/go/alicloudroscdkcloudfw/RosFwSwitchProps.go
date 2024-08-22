package alicloudroscdkcloudfw


// Properties for defining a `RosFwSwitch`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-fwswitch
type RosFwSwitchProps struct {
	IpaddrList interface{} `field:"optional" json:"ipaddrList" yaml:"ipaddrList"`
	RegionList interface{} `field:"optional" json:"regionList" yaml:"regionList"`
	ResourceTypeList interface{} `field:"optional" json:"resourceTypeList" yaml:"resourceTypeList"`
}

