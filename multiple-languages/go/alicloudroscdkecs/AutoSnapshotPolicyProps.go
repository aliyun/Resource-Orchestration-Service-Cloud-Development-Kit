package alicloudroscdkecs


// Properties for defining a `AutoSnapshotPolicy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-autosnapshotpolicy
type AutoSnapshotPolicyProps struct {
	// Property repeatWeekdays: The automatic snapshot repetition dates.
	//
	// The unit of measurement is day and the repeating cycle is a week. Value range: [1, 7], which represents days starting from Monday to Sunday, for example 1 indicates Monday. When you want to schedule multiple automatic snapshot tasks for a disk in a week, you can set the RepeatWeekdays to an array.
	// A maximum of seven time points can be selected.
	// The format is a list of [1, 2, ..., 7] and the time points are separated by commas (,).
	RepeatWeekdays interface{} `field:"required" json:"repeatWeekdays" yaml:"repeatWeekdays"`
	// Property retentionDays: The snapshot retention time, and the unit of measurement is day.
	//
	// Optional values:
	// -1: The automatic snapshots are retained permanently.
	// [1, 65536]: The number of days retained.
	// Default value: -1.
	RetentionDays interface{} `field:"required" json:"retentionDays" yaml:"retentionDays"`
	// Property timePoints: The automatic snapshot creation schedule, and the unit of measurement is hour.
	//
	// Value range: [0, 23], which represents from 00:00 to 24:00, for example 1 indicates 01:00. When you want to schedule multiple automatic snapshot tasks for a disk in a day, you can set the TimePoints to an array.
	// A maximum of 24 time points can be selected.
	// The format is a list of [0, 1, ..., 23] and the time points are separated by commas (,).
	TimePoints interface{} `field:"required" json:"timePoints" yaml:"timePoints"`
	// Property autoSnapshotPolicyName: The name of the automatic snapshot policy.
	//
	// It can consist of [2, 128] English or Chinese characters.
	// Must begin with an uppercase or lowercase letter or a Chinese character. Can contain numbers, periods (.), colons (:), underscores (_), and hyphens (-).
	// Cannot start with http:\/\/ or https:\/\/.
	// Default value: null.
	AutoSnapshotPolicyName interface{} `field:"optional" json:"autoSnapshotPolicyName" yaml:"autoSnapshotPolicyName"`
	// Property diskIds: The disk ID.
	//
	// When you want to apply the automatic snapshot policy to multiple disks, you can set the DiskIds to an array. The format is list of ["d-xxxxxxxxx", "d-yyyyyyyyy", ..., "d-zzzzzzzzz"] and the IDs are separated by commas (,).
	DiskIds interface{} `field:"optional" json:"diskIds" yaml:"diskIds"`
	// Property resourceGroupId: Resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosAutoSnapshotPolicy_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

