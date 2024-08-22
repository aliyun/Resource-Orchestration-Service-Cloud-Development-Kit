package alicloudroscdkresourcemanager


// Properties for defining a `RosResourceShareAssociation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourceshareassociation
type RosResourceShareAssociationProps struct {
	ResourceShareId interface{} `field:"required" json:"resourceShareId" yaml:"resourceShareId"`
	PermissionNames interface{} `field:"optional" json:"permissionNames" yaml:"permissionNames"`
	Resources interface{} `field:"optional" json:"resources" yaml:"resources"`
	Targets interface{} `field:"optional" json:"targets" yaml:"targets"`
}

