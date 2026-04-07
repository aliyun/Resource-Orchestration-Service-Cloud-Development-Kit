package alicloudroscdkschedulerx


// Properties for defining a `Namespace`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-namespace
type NamespaceProps struct {
	// Property name: The name of the namespace.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property description: The description of the namespace.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property uid: Namespace UID is globally unique;
	//
	// it is recommended to generate it using UUID.
	Uid interface{} `field:"optional" json:"uid" yaml:"uid"`
}

