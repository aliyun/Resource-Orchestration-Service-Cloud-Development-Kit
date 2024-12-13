package datasource


// Properties for defining a `Zone`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pvtz-zone
type ZoneProps struct {
	// Property zoneId: The zone ID.
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

