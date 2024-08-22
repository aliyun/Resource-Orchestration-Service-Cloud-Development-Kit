package datasource


// Properties for defining a `Logstores`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sls-logstores
type LogstoresProps struct {
	// Property project: Project name.
	Project interface{} `field:"required" json:"project" yaml:"project"`
	// Property logstoreName: Logstore name.
	LogstoreName interface{} `field:"optional" json:"logstoreName" yaml:"logstoreName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

