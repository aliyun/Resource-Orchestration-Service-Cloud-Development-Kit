package alicloudroscdkresourcemanager


// Properties for defining a `RosResourceShare`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourceshare
type RosResourceShareProps struct {
	ResourceShareName interface{} `field:"required" json:"resourceShareName" yaml:"resourceShareName"`
	AllowExternalTargets interface{} `field:"optional" json:"allowExternalTargets" yaml:"allowExternalTargets"`
	PermissionNames interface{} `field:"optional" json:"permissionNames" yaml:"permissionNames"`
	Resources interface{} `field:"optional" json:"resources" yaml:"resources"`
	Targets interface{} `field:"optional" json:"targets" yaml:"targets"`
}

