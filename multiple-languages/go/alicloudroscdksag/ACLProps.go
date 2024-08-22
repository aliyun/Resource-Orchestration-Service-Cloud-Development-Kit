package alicloudroscdksag


// Properties for defining a `ACL`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-acl
type ACLProps struct {
	// Property name: Access control name.
	//
	// The length is 2-128 characters. It must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:\/\/ or https:\/\/.
	Name interface{} `field:"required" json:"name" yaml:"name"`
}

