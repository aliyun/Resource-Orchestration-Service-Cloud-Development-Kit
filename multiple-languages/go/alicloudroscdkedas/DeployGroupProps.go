package alicloudroscdkedas


// Properties for defining a `DeployGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-deploygroup
type DeployGroupProps struct {
	// Property appId: Application ID.
	AppId interface{} `field:"required" json:"appId" yaml:"appId"`
	// Property groupName: Group name, maximum length of 64.
	GroupName interface{} `field:"required" json:"groupName" yaml:"groupName"`
}

