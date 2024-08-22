package alicloudroscdkehpc


// Properties for defining a `Users`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-users
type UsersProps struct {
	// Property clusterId: The cluster ID.
	ClusterId interface{} `field:"required" json:"clusterId" yaml:"clusterId"`
	// Property users: The information about the users.
	Users interface{} `field:"required" json:"users" yaml:"users"`
}

