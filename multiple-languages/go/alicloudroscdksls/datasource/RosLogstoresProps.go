package datasource


// Properties for defining a `RosLogstores`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sls-logstores
type RosLogstoresProps struct {
	Project interface{} `field:"required" json:"project" yaml:"project"`
	LogstoreName interface{} `field:"optional" json:"logstoreName" yaml:"logstoreName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

