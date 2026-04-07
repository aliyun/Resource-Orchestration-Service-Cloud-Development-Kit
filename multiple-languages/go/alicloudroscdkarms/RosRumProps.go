package alicloudroscdkarms


// Properties for defining a `RosRum`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-rum
type RosRumProps struct {
	AppName interface{} `field:"required" json:"appName" yaml:"appName"`
	SiteType interface{} `field:"required" json:"siteType" yaml:"siteType"`
	AppGroup interface{} `field:"optional" json:"appGroup" yaml:"appGroup"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Language interface{} `field:"optional" json:"language" yaml:"language"`
	NickName interface{} `field:"optional" json:"nickName" yaml:"nickName"`
	PackageName interface{} `field:"optional" json:"packageName" yaml:"packageName"`
	RealRegionId interface{} `field:"optional" json:"realRegionId" yaml:"realRegionId"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Source interface{} `field:"optional" json:"source" yaml:"source"`
	Tags *[]*RosRum_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

