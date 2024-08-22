package alicloudroscdkmaxcompute


// Properties for defining a `Table`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-table
type TableProps struct {
	// Property name: Table name.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property project: Project name, if not provided, will be the default project.
	Project interface{} `field:"required" json:"project" yaml:"project"`
	// Property comment: Table comment.
	Comment interface{} `field:"optional" json:"comment" yaml:"comment"`
	// Property ifNotExists: If you create a table by using the name of an existing table and  the parameter set to false, an error is returned.
	//
	// If you specify the if not exists parameter, a success message
	// is returned when you create a table by using the name of an
	// existing table. The success message is returned even if the
	// schema of the existing table is different from that of the table you want to create.
	// If you create a table by using the name of an existing table,
	// the table is not created and the metadata of the existing table is not changed.
	IfNotExists interface{} `field:"optional" json:"ifNotExists" yaml:"ifNotExists"`
	// Property lifecycle: Table's lifecycle.
	Lifecycle interface{} `field:"optional" json:"lifecycle" yaml:"lifecycle"`
	// Property schema: Table schema.
	Schema interface{} `field:"optional" json:"schema" yaml:"schema"`
	// Property stringSchema: Create a table with field names and field type strings.
	//
	// Example: 'num bigint, num2 double', 'pt string'.
	StringSchema interface{} `field:"optional" json:"stringSchema" yaml:"stringSchema"`
}

