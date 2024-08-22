package alicloudroscdkpolardb


// Properties for defining a `AITask`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-aitask
type AITaskProps struct {
	// Property dbClusterId: The ID of the DB cluster.
	DbClusterId interface{} `field:"required" json:"dbClusterId" yaml:"dbClusterId"`
	// Property password: The password of the database account that enables the PolarDB for AI function is required.
	Password interface{} `field:"required" json:"password" yaml:"password"`
	// Property username: The database account that enables the PolarDB for AI function is required.
	Username interface{} `field:"required" json:"username" yaml:"username"`
	// Property nodeType: The type of the node.
	//
	// Valid values:
	// DLNode: AI node(default).
	// SearchNode: Search ai node.
	NodeType interface{} `field:"optional" json:"nodeType" yaml:"nodeType"`
}

