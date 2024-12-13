package alicloudroscdkpaiplugin


// Properties for defining a `Group`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-group
type GroupProps struct {
	// Property name: The name of the user group.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property source: Crowd source.
	//
	// Valid values:
	// 0: Enter phone numbers.
	// 1: Single-column CSV File (Phone Numbers).
	// 2: Multi-column CSV File.
	// 3: MaxCompute Table.
	// 4: Algorithm.
	Source interface{} `field:"required" json:"source" yaml:"source"`
	// Property algorithm: Association algorithm.
	//
	// This must be specified when Source is 4(Algorithm).
	Algorithm interface{} `field:"optional" json:"algorithm" yaml:"algorithm"`
	// Property column: Mobile phone number column name.
	//
	// The Source is 2(Multi-column CSV File) or 3(MaxCompute Table) needs to be specified when it contains mobile phone numbers.
	Column interface{} `field:"optional" json:"column" yaml:"column"`
	// Property filter: Filter condition.
	//
	// This condition can be specified when Source is 3(MaxCompute Table).
	Filter interface{} `field:"optional" json:"filter" yaml:"filter"`
	// Property inferenceJobId: Prediction task ID.This condition can be specified when Source is 4(Algorithm).
	InferenceJobId interface{} `field:"optional" json:"inferenceJobId" yaml:"inferenceJobId"`
	// Property phoneNumber: Whether to include mobile phone numbers.
	//
	// People with mobile phone numbers can be used for reach plans.
	PhoneNumber interface{} `field:"optional" json:"phoneNumber" yaml:"phoneNumber"`
	// Property project: MaxCompute (ODPS) project name.
	//
	// This parameter must be specified when Source is 3(MaxCompute Table).
	Project interface{} `field:"optional" json:"project" yaml:"project"`
	// Property remark: The notes of the user group.
	Remark interface{} `field:"optional" json:"remark" yaml:"remark"`
	// Property table: MaxCompute (ODPS) table name.
	//
	// This parameter must be specified when Source is 3(MaxCompute Table).
	Table interface{} `field:"optional" json:"table" yaml:"table"`
	// Property text: The text of the phone number.
	//
	// This must be specified when Source is 0(Enter phone numbers).
	Text interface{} `field:"optional" json:"text" yaml:"text"`
	// Property uri: File address.
	//
	// It needs to be specified when Source is 1(Single-column CSV File) or 2(Multi-column CSV File).
	Uri interface{} `field:"optional" json:"uri" yaml:"uri"`
}

