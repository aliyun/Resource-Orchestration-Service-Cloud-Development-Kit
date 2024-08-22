package alicloudroscdkdataworks


// Properties for defining a `Project`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-project
type ProjectProps struct {
	// Property projectIdentifier: The name of the workspace.
	//
	// The name can contain letters, digits, and underscores (_) and must start with a letter or digit.
	ProjectIdentifier interface{} `field:"required" json:"projectIdentifier" yaml:"projectIdentifier"`
	// Property disableDevelopment: Specifies whether to disable the Development role.
	//
	// Valid values:
	// false: enables the Development role.
	// true: disables the Development role.
	// Default value: false.
	DisableDevelopment interface{} `field:"optional" json:"disableDevelopment" yaml:"disableDevelopment"`
	// Property isAllowDownload: Specifies whether query result download from DataStudio is allowed.
	//
	// Valid values:
	// true: allowed
	// false: not allowed
	// Default value: true.
	IsAllowDownload interface{} `field:"optional" json:"isAllowDownload" yaml:"isAllowDownload"`
	// Property projectDescription: The description of the workspace.
	//
	// If not provided, it is the same as ProjectIdentifier.
	ProjectDescription interface{} `field:"optional" json:"projectDescription" yaml:"projectDescription"`
	// Property projectMode: The mode of the workspace.
	//
	// For more information about the differences between the modes of workspaces, see Differences between workspaces in basic mode and workspaces in standard mode. Valid values:
	// 2: basic mode
	// 3: standard mode
	// Default value: 2.
	ProjectMode interface{} `field:"optional" json:"projectMode" yaml:"projectMode"`
	// Property projectName: The display name of the workspace.
	//
	// If not provided, it is the same as ProjectIdentifier.
	ProjectName interface{} `field:"optional" json:"projectName" yaml:"projectName"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: Tags to attach to workspace.
	//
	// Max support 20 tags to add during create workspace. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosProject_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

