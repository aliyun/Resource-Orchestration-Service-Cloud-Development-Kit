package alicloudroscdkassemblyschema

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkassemblyschema/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

// Protocol utility class.
type Manifest interface {
}

// The jsii proxy struct for Manifest
type jsiiProxy_Manifest struct {
	_ byte // padding
}

// Deprecated.
// Deprecated: use `loadAssemblyManifest()`.
func Manifest_Load(filePath *string) *AssemblyManifest {
	_init_.Initialize()

	if err := validateManifest_LoadParameters(filePath); err != nil {
		panic(err)
	}
	var returns *AssemblyManifest

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-assembly-schema.Manifest",
		"load",
		[]interface{}{filePath},
		&returns,
	)

	return returns
}

// Load and validates the cloud assembly manifest from file.
func Manifest_LoadAssemblyManifest(filePath *string) *AssemblyManifest {
	_init_.Initialize()

	if err := validateManifest_LoadAssemblyManifestParameters(filePath); err != nil {
		panic(err)
	}
	var returns *AssemblyManifest

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-assembly-schema.Manifest",
		"loadAssemblyManifest",
		[]interface{}{filePath},
		&returns,
	)

	return returns
}

// Deprecated.
// Deprecated: use `saveAssemblyManifest()`.
func Manifest_Save(manifest *AssemblyManifest, filePath *string) {
	_init_.Initialize()

	if err := validateManifest_SaveParameters(manifest, filePath); err != nil {
		panic(err)
	}
	_jsii_.StaticInvokeVoid(
		"@alicloud/ros-cdk-assembly-schema.Manifest",
		"save",
		[]interface{}{manifest, filePath},
	)
}

// Validates and saves the cloud assembly manifest to file.
func Manifest_SaveAssemblyManifest(manifest *AssemblyManifest, filePath *string) {
	_init_.Initialize()

	if err := validateManifest_SaveAssemblyManifestParameters(manifest, filePath); err != nil {
		panic(err)
	}
	_jsii_.StaticInvokeVoid(
		"@alicloud/ros-cdk-assembly-schema.Manifest",
		"saveAssemblyManifest",
		[]interface{}{manifest, filePath},
	)
}

// Fetch the current schema version number.
func Manifest_Version() *string {
	_init_.Initialize()

	var returns *string

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-assembly-schema.Manifest",
		"version",
		nil, // no parameters
		&returns,
	)

	return returns
}

