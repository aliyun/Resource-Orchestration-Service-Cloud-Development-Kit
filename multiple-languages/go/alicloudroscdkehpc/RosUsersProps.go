package alicloudroscdkehpc


// Properties for defining a `RosUsers`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-users
type RosUsersProps struct {
	ClusterId interface{} `field:"required" json:"clusterId" yaml:"clusterId"`
	Users interface{} `field:"required" json:"users" yaml:"users"`
}

