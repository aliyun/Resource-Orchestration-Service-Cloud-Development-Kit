package alicloudroscdkpvtz


// Properties for defining a `SyncEcsHost`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-syncecshost
type SyncEcsHostProps struct {
	// Property regions: A list of region information to be synchronized.
	Regions interface{} `field:"required" json:"regions" yaml:"regions"`
	// Property status: The host synchronizes the task state.
	//
	// Valid values: ON, OFF.
	Status interface{} `field:"required" json:"status" yaml:"status"`
	// Property zoneId: Zone ID, a unique identifier for the Zone.
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
}

