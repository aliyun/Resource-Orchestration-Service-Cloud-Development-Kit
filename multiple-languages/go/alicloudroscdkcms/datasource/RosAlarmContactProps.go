package datasource


// Properties for defining a `RosAlarmContact`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-alarmcontact
type RosAlarmContactProps struct {
	AlarmContactName interface{} `field:"required" json:"alarmContactName" yaml:"alarmContactName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

