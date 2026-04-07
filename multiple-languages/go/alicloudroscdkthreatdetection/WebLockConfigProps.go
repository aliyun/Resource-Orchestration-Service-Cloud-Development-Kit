package alicloudroscdkthreatdetection


// Properties for defining a `WebLockConfig`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-weblockconfig
type WebLockConfigProps struct {
	// Property defenceMode: The prevention mode.
	//
	// Valid values:
	// *   **block**: Interception Mode
	// *   **audit**: Alert Mode.
	DefenceMode interface{} `field:"required" json:"defenceMode" yaml:"defenceMode"`
	// Property dir: The directory for which you want to enable web tamper proofing.
	Dir interface{} `field:"required" json:"dir" yaml:"dir"`
	// Property localBackupDir: The local path to the backup files of the protected directory.\ The directory format of a Linux server is different from that of a Windows server. You must enter the directory in the required format based on your operating system. Examples: *   Linux server: \/usr\/local\/aegis\/bak *   Windows server: C:\Program Files (x86)\xxx\Aegis\bak.
	LocalBackupDir interface{} `field:"required" json:"localBackupDir" yaml:"localBackupDir"`
	// Property uuid: The UUID of the server for which you want to add a directory to protect.
	//
	// > You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to query the UUIDs of servers.
	Uuid interface{} `field:"required" json:"uuid" yaml:"uuid"`
	// Property exclusiveDir: The directory for which you want to disable web tamper proofing.
	//
	// > If you set **Mode** to **blacklist**, you must specify this parameter.
	ExclusiveDir interface{} `field:"optional" json:"exclusiveDir" yaml:"exclusiveDir"`
	// Property exclusiveFile: The file for which you want to disable web tamper proofing.
	//
	// > If you set **Mode** to **blacklist**, you must specify this parameter.
	ExclusiveFile interface{} `field:"optional" json:"exclusiveFile" yaml:"exclusiveFile"`
	// Property exclusiveFileType: The type of file for which you want to disable web tamper proofing.
	//
	// Separate multiple types with semicolons (;). Valid values:
	// *   php
	// *   jsp
	// *   asp
	// *   aspx
	// *   js
	// *   cgi
	// *   html
	// *   htm
	// *   xml
	// *   shtml
	// *   shtm
	// *   jpg
	// *   gif
	// *   png
	// > If you set **Mode** to **blacklist**, you must specify this parameter.
	ExclusiveFileType interface{} `field:"optional" json:"exclusiveFileType" yaml:"exclusiveFileType"`
	// Property inclusiveFile: The file that has web tamper proofing enabled.
	//
	// > If the value of **Mode** is **whitelist**, this parameter is returned.
	InclusiveFile interface{} `field:"optional" json:"inclusiveFile" yaml:"inclusiveFile"`
	// Property inclusiveFileType: The type of file for which you want to enable web tamper proofing.
	//
	// Separate multiple types with semicolons (;). Valid values:
	// *   php
	// *   jsp
	// *   asp
	// *   aspx
	// *   js
	// *   cgi
	// *   html
	// *   htm
	// *   xml
	// *   shtml
	// *   shtm
	// *   jpg
	// *   gif
	// *   png
	// > If you set **Mode** to **whitelist**, you must specify this parameter.
	InclusiveFileType interface{} `field:"optional" json:"inclusiveFileType" yaml:"inclusiveFileType"`
	// Property mode: The protection mode of web tamper proofing.
	//
	// Valid values:
	// *   **whitelist**: In this mode, web tamper proofing is enabled for the specified directories and file types.
	// *   **blacklist**: In this mode, web tamper proofing is enabled for the unspecified sub-directories, file types, and files in the protected directories.
	Mode interface{} `field:"optional" json:"mode" yaml:"mode"`
}

