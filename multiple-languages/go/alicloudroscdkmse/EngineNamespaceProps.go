package alicloudroscdkmse


// Properties for defining a `EngineNamespace`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-enginenamespace
type EngineNamespaceProps struct {
	// Property instanceId: The ID of the instance.
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	// Property name: The display name of the namespace.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property desc: The description of the namespace.
	Desc interface{} `field:"optional" json:"desc" yaml:"desc"`
	// Property identity: The custom ID of the namespace.
	//
	// If you do not specify this parameter, the automatically generated Universally Unique Identifier (UUID) is returned.
	Identity interface{} `field:"optional" json:"identity" yaml:"identity"`
}

