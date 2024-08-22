package alicloudroscdkcore

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

// File system utilities.
type FileSystem interface {
}

// The jsii proxy struct for FileSystem
type jsiiProxy_FileSystem struct {
	_ byte // padding
}

func NewFileSystem() FileSystem {
	_init_.Initialize()

	j := jsiiProxy_FileSystem{}

	_jsii_.Create(
		"@alicloud/ros-cdk-core.FileSystem",
		nil, // no parameters
		&j,
	)

	return &j
}

func NewFileSystem_Override(f FileSystem) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-core.FileSystem",
		nil, // no parameters
		f,
	)
}

// Copies an entire directory structure.
func FileSystem_CopyDirectory(srcDir *string, destDir *string, options *CopyOptions, rootDir *string) {
	_init_.Initialize()

	if err := validateFileSystem_CopyDirectoryParameters(srcDir, destDir, options); err != nil {
		panic(err)
	}
	_jsii_.StaticInvokeVoid(
		"@alicloud/ros-cdk-core.FileSystem",
		"copyDirectory",
		[]interface{}{srcDir, destDir, options, rootDir},
	)
}

// Produces fingerprint based on the contents of a single file or an entire directory tree.
//
// Line endings are converted from CRLF to LF.
//
// The fingerprint will also include:
// 1. An extra string if defined in `options.extra`.
// 2. The symlink follow mode value.
func FileSystem_Fingerprint(fileOrDirectory *string, options *FingerprintOptions) *string {
	_init_.Initialize()

	if err := validateFileSystem_FingerprintParameters(fileOrDirectory, options); err != nil {
		panic(err)
	}
	var returns *string

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.FileSystem",
		"fingerprint",
		[]interface{}{fileOrDirectory, options},
		&returns,
	)

	return returns
}

// Checks whether a directory is empty.
func FileSystem_IsEmpty(dir *string) *bool {
	_init_.Initialize()

	if err := validateFileSystem_IsEmptyParameters(dir); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.FileSystem",
		"isEmpty",
		[]interface{}{dir},
		&returns,
	)

	return returns
}

// Creates a unique temporary directory in the **system temp directory**.
func FileSystem_Mkdtemp(prefix *string) *string {
	_init_.Initialize()

	if err := validateFileSystem_MkdtempParameters(prefix); err != nil {
		panic(err)
	}
	var returns *string

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.FileSystem",
		"mkdtemp",
		[]interface{}{prefix},
		&returns,
	)

	return returns
}

func FileSystem_Tmpdir() *string {
	_init_.Initialize()
	var returns *string
	_jsii_.StaticGet(
		"@alicloud/ros-cdk-core.FileSystem",
		"tmpdir",
		&returns,
	)
	return returns
}

