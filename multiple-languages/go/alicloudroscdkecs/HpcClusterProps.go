package alicloudroscdkecs


// Properties for defining a `HpcCluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-hpccluster
type HpcClusterProps struct {
	// Property name: The name of the HPC cluster.
	//
	// The name must be 2 to 128 characters in length. It must
	// start with a letter but cannot start with http:\/\/ or https:\/\/. It can contain letters,
	// digits, colons (:), underscores (_), and hyphens (-).
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property description: The description of the HPC cluster.
	//
	// The description must be 2 to 256 characters in
	// length. It cannot start with http:\/\/ or https:\/\/. Default value: empty string.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

