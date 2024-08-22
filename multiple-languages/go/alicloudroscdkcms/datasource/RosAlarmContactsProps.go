package datasource


// Properties for defining a `RosAlarmContacts`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-alarmcontacts
type RosAlarmContactsProps struct {
	AlarmContactName interface{} `field:"optional" json:"alarmContactName" yaml:"alarmContactName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

