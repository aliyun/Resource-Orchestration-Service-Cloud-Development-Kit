package alicloudroscdkoos


// Properties for defining a `ApplicationConnectionBind`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-applicationconnectionbind
type ApplicationConnectionBindProps struct {
	// Property connectionIds: The list of connection IDs to bind.
	//
	// The maximum number of connections is 100.
	ConnectionIds interface{} `field:"required" json:"connectionIds" yaml:"connectionIds"`
	// Property applicationGroupName: The name of the application group.
	ApplicationGroupName interface{} `field:"optional" json:"applicationGroupName" yaml:"applicationGroupName"`
	// Property applicationName: The name of the application.
	ApplicationName interface{} `field:"optional" json:"applicationName" yaml:"applicationName"`
	// Property parameters: The parameters of the application connection bind.
	Parameters interface{} `field:"optional" json:"parameters" yaml:"parameters"`
}

