package datasource


// Properties for defining a `AlarmContacts`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-alarmcontacts
type AlarmContactsProps struct {
	// Property alarmContactName: The name of the alert contact.
	AlarmContactName interface{} `field:"optional" json:"alarmContactName" yaml:"alarmContactName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

