package alicloudroscdkecd


// Properties for defining a `UserDesktopGroupAddition`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-userdesktopgroupaddition
type UserDesktopGroupAdditionProps struct {
	// Property desktopGroupId: The ID of the desktop group that you want to assign to more regular users.
	DesktopGroupId interface{} `field:"required" json:"desktopGroupId" yaml:"desktopGroupId"`
	// Property endUserIds: The regular users to whom you want to assign the desktop group.
	EndUserIds interface{} `field:"required" json:"endUserIds" yaml:"endUserIds"`
}

