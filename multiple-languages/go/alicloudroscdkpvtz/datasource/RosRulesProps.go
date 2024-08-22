package datasource


// Properties for defining a `RosRules`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pvtz-rules
type RosRulesProps struct {
	EndpointId interface{} `field:"optional" json:"endpointId" yaml:"endpointId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

