package alicloudroscdknas


// Properties for defining a `Fileset`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-fileset
type FilesetProps struct {
	// Property fileSystemId: The ID of the file system.
	//
	// *   The IDs of CPFS file systems must start with `cpfs-`. Example:
	// cpfs-099394bd928c\*\*\*\*.
	// *   The IDs of CPFS for Lingjun file systems must start with `bmcpfs-`. Example:
	// bmcpfs-290w65p03ok64ya\*\*\*\*.
	FileSystemId interface{} `field:"required" json:"fileSystemId" yaml:"fileSystemId"`
	// Property fileSystemPath: The absolute path of the fileset.
	//
	// *   CPFS path limits.
	// *   The parent directory of the path that you specify must be an existing
	// directory in the file system.
	// *   The path must be 2 to 1024 characters in length.
	// *   The path must start and end with a forward slash (\/).
	// *   Path limit of CPFS for Lingjun
	// *   The path must be 2 to 1024 characters in length.
	// *   The path must start and end with a forward slash (\/).
	// *   The fileset path must be a new path and cannot be an existing path. Fileset
	// paths cannot be renamed and cannot be symbolic links.
	// *   The maximum depth supported by a fileset path is eight levels. The depth of
	// the root directory \/ is 0 levels. For example, the fileset path \/test\/aaa\/ccc\/
	// has three levels.
	// *   If the fileset path is a multi-level path, the parent directory must be an
	// existing directory.
	// *   Nested filesets are not supported. If a fileset is specified as a parent
	// directory, its subdirectory cannot be a fileset. A fileset path supports only one
	// quota.
	// *   The path cannot exceed 990 characters in length.
	FileSystemPath interface{} `field:"required" json:"fileSystemPath" yaml:"fileSystemPath"`
	// Property description: The description of the fileset.
	//
	// *   The description must be 2 to 128 characters in length.
	// *   The name must start with a letter and cannot start with http:\/\/ or https:\/\/.
	// *   The description can contain letters, digits, colons (:), underscores (_),
	// periods (.), and hyphens (-).
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

