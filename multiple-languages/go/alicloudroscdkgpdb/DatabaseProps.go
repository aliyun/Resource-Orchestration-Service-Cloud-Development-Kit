package alicloudroscdkgpdb


// Properties for defining a `Database`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-database
type DatabaseProps struct {
	// Property databaseName: Database Name.
	DatabaseName interface{} `field:"required" json:"databaseName" yaml:"databaseName"`
	// Property dbInstanceId: Instance ID.
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	// Property owner: Data Sheet owner.
	Owner interface{} `field:"required" json:"owner" yaml:"owner"`
	// Property characterSetName: Character set, default value is UTF8.
	CharacterSetName interface{} `field:"optional" json:"characterSetName" yaml:"characterSetName"`
	// Property collate: Database locale parameters, specifying string comparison\/collation.
	Collate interface{} `field:"optional" json:"collate" yaml:"collate"`
	// Property ctype: Database locale parameters, specifying character classification\/case conversion rules.
	Ctype interface{} `field:"optional" json:"ctype" yaml:"ctype"`
	// Property description: Database Description.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

