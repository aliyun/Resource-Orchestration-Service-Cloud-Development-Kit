package alicloudroscdkserverlessdev


// Properties for defining a `Project`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-serverlessdev-project
type ProjectProps struct {
	// Property name: The name of the project.
	//
	// It needs to be unique and cannot be changed.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property description: The description of the project.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property labels: The labels for the project.
	Labels interface{} `field:"optional" json:"labels" yaml:"labels"`
	// Property spec: The project configuration.
	Spec interface{} `field:"optional" json:"spec" yaml:"spec"`
}

