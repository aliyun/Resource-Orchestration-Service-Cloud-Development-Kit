package datasource


// Properties for defining a `AlarmContact`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-alarmcontact
type AlarmContactProps struct {
	// Property alarmContactName: AlarmContactName.
	AlarmContactName interface{} `field:"required" json:"alarmContactName" yaml:"alarmContactName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

