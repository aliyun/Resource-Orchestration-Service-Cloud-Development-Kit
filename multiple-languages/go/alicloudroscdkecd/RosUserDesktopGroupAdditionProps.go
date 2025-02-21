package alicloudroscdkecd


// Properties for defining a `RosUserDesktopGroupAddition`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-userdesktopgroupaddition
type RosUserDesktopGroupAdditionProps struct {
	DesktopGroupId interface{} `field:"required" json:"desktopGroupId" yaml:"desktopGroupId"`
	EndUserIds interface{} `field:"required" json:"endUserIds" yaml:"endUserIds"`
}

