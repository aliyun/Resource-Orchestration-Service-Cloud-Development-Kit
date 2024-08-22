package alicloudroscdkcxapi

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcxapi/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkassemblyschema"
)

// Represents a deployable cloud application.
type CloudAssembly interface {
	// All artifacts included in this assembly.
	Artifacts() *[]CloudArtifact
	// The root directory of the cloud assembly.
	Directory() *string
	// The raw assembly manifest.
	Manifest() *alicloudroscdkassemblyschema.AssemblyManifest
	// Runtime information such as module versions used to synthesize this assembly.
	Runtime() *alicloudroscdkassemblyschema.RuntimeInfo
	// Returns: all the ROS stack artifacts that are included in this assembly.
	Stacks() *[]RosStackArtifact
	// The schema version of the assembly manifest.
	Version() *string
	// Returns a nested assembly.
	GetNestedAssembly(artifactId *string) CloudAssembly
	// Returns a nested assembly artifact.
	GetNestedAssemblyArtifact(artifactId *string) NestedCloudAssemblyArtifact
	// Returns a ROS stack artifact by name from this assembly.
	//
	// Deprecated renamed to 'getStackByName' (or 'getStackArtifact(id)').
	GetStack(stackName *string) RosStackArtifact
	// Returns a ROS stack artifact from this assembly.
	//
	// Param artifactId the artifact id of the stack (can be obtained through 'stack.artifactId').
	// Throws if there is no stack artifact with that id
	// Returns a 'RosStackArtifact' object.
	GetStackArtifact(artifactId *string) RosStackArtifact
	// Returns a ROS stack artifact from this assembly.
	//
	// Will only search the current assembly.
	//
	// Param stackName the name of the ROS stack.
	// Throws if there is no stack artifact by that name
	// Throws if there is more than one stack with the same stack name. You can
	// use 'getStackArtifact - stack.artifactId' instead.
	// Returns a 'RosStackArtifact' object.
	GetStackByName(stackName *string) RosStackArtifact
	// Returns the tree metadata artifact from this assembly.
	//
	// Throws if there is no metadata artifact by that name
	// Returns a 'TreeCloudArtifact' object if there is one defined in the manifest, 'undefined' otherwise.
	Tree() TreeCloudArtifact
	// Attempts to find an artifact with a specific identity.
	//
	// Returns A 'CloudArtifact' object or 'undefined' if the artifact does not exist in this assembly.
	// Param id The artifact ID.
	TryGetArtifact(id *string) CloudArtifact
}

// The jsii proxy struct for CloudAssembly
type jsiiProxy_CloudAssembly struct {
	_ byte // padding
}

func (j *jsiiProxy_CloudAssembly) Artifacts() *[]CloudArtifact {
	var returns *[]CloudArtifact
	_jsii_.Get(
		j,
		"artifacts",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CloudAssembly) Directory() *string {
	var returns *string
	_jsii_.Get(
		j,
		"directory",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CloudAssembly) Manifest() *alicloudroscdkassemblyschema.AssemblyManifest {
	var returns *alicloudroscdkassemblyschema.AssemblyManifest
	_jsii_.Get(
		j,
		"manifest",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CloudAssembly) Runtime() *alicloudroscdkassemblyschema.RuntimeInfo {
	var returns *alicloudroscdkassemblyschema.RuntimeInfo
	_jsii_.Get(
		j,
		"runtime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CloudAssembly) Stacks() *[]RosStackArtifact {
	var returns *[]RosStackArtifact
	_jsii_.Get(
		j,
		"stacks",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CloudAssembly) Version() *string {
	var returns *string
	_jsii_.Get(
		j,
		"version",
		&returns,
	)
	return returns
}


// Reads a cloud assembly from the specified directory.
func NewCloudAssembly(directory *string) CloudAssembly {
	_init_.Initialize()

	if err := validateNewCloudAssemblyParameters(directory); err != nil {
		panic(err)
	}
	j := jsiiProxy_CloudAssembly{}

	_jsii_.Create(
		"@alicloud/ros-cdk-cxapi.CloudAssembly",
		[]interface{}{directory},
		&j,
	)

	return &j
}

// Reads a cloud assembly from the specified directory.
func NewCloudAssembly_Override(c CloudAssembly, directory *string) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-cxapi.CloudAssembly",
		[]interface{}{directory},
		c,
	)
}

func (c *jsiiProxy_CloudAssembly) GetNestedAssembly(artifactId *string) CloudAssembly {
	if err := c.validateGetNestedAssemblyParameters(artifactId); err != nil {
		panic(err)
	}
	var returns CloudAssembly

	_jsii_.Invoke(
		c,
		"getNestedAssembly",
		[]interface{}{artifactId},
		&returns,
	)

	return returns
}

func (c *jsiiProxy_CloudAssembly) GetNestedAssemblyArtifact(artifactId *string) NestedCloudAssemblyArtifact {
	if err := c.validateGetNestedAssemblyArtifactParameters(artifactId); err != nil {
		panic(err)
	}
	var returns NestedCloudAssemblyArtifact

	_jsii_.Invoke(
		c,
		"getNestedAssemblyArtifact",
		[]interface{}{artifactId},
		&returns,
	)

	return returns
}

func (c *jsiiProxy_CloudAssembly) GetStack(stackName *string) RosStackArtifact {
	if err := c.validateGetStackParameters(stackName); err != nil {
		panic(err)
	}
	var returns RosStackArtifact

	_jsii_.Invoke(
		c,
		"getStack",
		[]interface{}{stackName},
		&returns,
	)

	return returns
}

func (c *jsiiProxy_CloudAssembly) GetStackArtifact(artifactId *string) RosStackArtifact {
	if err := c.validateGetStackArtifactParameters(artifactId); err != nil {
		panic(err)
	}
	var returns RosStackArtifact

	_jsii_.Invoke(
		c,
		"getStackArtifact",
		[]interface{}{artifactId},
		&returns,
	)

	return returns
}

func (c *jsiiProxy_CloudAssembly) GetStackByName(stackName *string) RosStackArtifact {
	if err := c.validateGetStackByNameParameters(stackName); err != nil {
		panic(err)
	}
	var returns RosStackArtifact

	_jsii_.Invoke(
		c,
		"getStackByName",
		[]interface{}{stackName},
		&returns,
	)

	return returns
}

func (c *jsiiProxy_CloudAssembly) Tree() TreeCloudArtifact {
	var returns TreeCloudArtifact

	_jsii_.Invoke(
		c,
		"tree",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (c *jsiiProxy_CloudAssembly) TryGetArtifact(id *string) CloudArtifact {
	if err := c.validateTryGetArtifactParameters(id); err != nil {
		panic(err)
	}
	var returns CloudArtifact

	_jsii_.Invoke(
		c,
		"tryGetArtifact",
		[]interface{}{id},
		&returns,
	)

	return returns
}

