package alicloudroscdkarms


// Properties for defining a `Rum`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-rum
type RumProps struct {
	// Property appName: The name of the RUM application.
	//
	// The value can be up to 64 characters in length.
	AppName interface{} `field:"required" json:"appName" yaml:"appName"`
	// Property siteType: The application type.
	//
	// Valid values: web, miniapp, ios, and android.
	SiteType interface{} `field:"required" json:"siteType" yaml:"siteType"`
	// Property appGroup: The group to which the RUM application belongs.
	AppGroup interface{} `field:"optional" json:"appGroup" yaml:"appGroup"`
	// Property description: The description of the RUM application.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property language: The programming language of the RUM application.
	Language interface{} `field:"optional" json:"language" yaml:"language"`
	// Property nickName: The nickname of the RUM application.
	NickName interface{} `field:"optional" json:"nickName" yaml:"nickName"`
	// Property packageName: The name of the Android application package.
	//
	// This parameter is required if you
	// create an Android application.
	PackageName interface{} `field:"optional" json:"packageName" yaml:"packageName"`
	// Property realRegionId: The region where the application resides.
	//
	// You can leave this parameter empty or
	// set it to China East 2 Finance.
	RealRegionId interface{} `field:"optional" json:"realRegionId" yaml:"realRegionId"`
	// Property resourceGroupId: The ID of the resource group to which the RUM application belongs.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property source: The source.
	//
	// This is a reserved parameter.
	Source interface{} `field:"optional" json:"source" yaml:"source"`
	// Property tags: A list of tags to attach to the RUM application.
	//
	// Each tag is a key-value pair.
	Tags *[]*RosRum_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

