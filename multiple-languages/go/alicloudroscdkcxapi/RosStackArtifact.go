package alicloudroscdkcxapi

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcxapi/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkassemblyschema"
)

type RosStackArtifact interface {
	CloudArtifact
	Assembly() CloudAssembly
	// Returns all the artifacts that this artifact depends on.
	Dependencies() *[]CloudArtifact
	// A string that represents this stack.
	//
	// Should only be used in user interfaces.
	// If the stackName and artifactId are the same, it will just return that. Otherwise,
	// it will return something like "<artifactId> (<stackName>)".
	DisplayName() *string
	Id() *string
	// The artifact's manifest.
	Manifest() *alicloudroscdkassemblyschema.ArtifactManifest
	// The set of messages extracted from the artifact's metadata.
	Messages() *[]*SynthesisMessage
	// The physical name of this stack.
	// Deprecated: renamed to `stackName`.
	Name() *string
	// The original name as defined in the CDK app.
	OriginalName() *string
	// ROS parameters to pass to the stack.
	Parameters() *map[string]*string
	// The physical name of this stack.
	StackName() *string
	Tags() interface{}
	// The ROS template for this stack.
	Template() interface{}
	// The file name of the template.
	TemplateFile() *string
	// Returns: all the metadata entries of a specific type in this artifact.
	FindMetadataByType(type_ *string) *[]*MetadataEntryResult
}

// The jsii proxy struct for RosStackArtifact
type jsiiProxy_RosStackArtifact struct {
	jsiiProxy_CloudArtifact
}

func (j *jsiiProxy_RosStackArtifact) Assembly() CloudAssembly {
	var returns CloudAssembly
	_jsii_.Get(
		j,
		"assembly",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStackArtifact) Dependencies() *[]CloudArtifact {
	var returns *[]CloudArtifact
	_jsii_.Get(
		j,
		"dependencies",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStackArtifact) DisplayName() *string {
	var returns *string
	_jsii_.Get(
		j,
		"displayName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStackArtifact) Id() *string {
	var returns *string
	_jsii_.Get(
		j,
		"id",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStackArtifact) Manifest() *alicloudroscdkassemblyschema.ArtifactManifest {
	var returns *alicloudroscdkassemblyschema.ArtifactManifest
	_jsii_.Get(
		j,
		"manifest",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStackArtifact) Messages() *[]*SynthesisMessage {
	var returns *[]*SynthesisMessage
	_jsii_.Get(
		j,
		"messages",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStackArtifact) Name() *string {
	var returns *string
	_jsii_.Get(
		j,
		"name",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStackArtifact) OriginalName() *string {
	var returns *string
	_jsii_.Get(
		j,
		"originalName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStackArtifact) Parameters() *map[string]*string {
	var returns *map[string]*string
	_jsii_.Get(
		j,
		"parameters",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStackArtifact) StackName() *string {
	var returns *string
	_jsii_.Get(
		j,
		"stackName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStackArtifact) Tags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"tags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStackArtifact) Template() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"template",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_RosStackArtifact) TemplateFile() *string {
	var returns *string
	_jsii_.Get(
		j,
		"templateFile",
		&returns,
	)
	return returns
}


func NewRosStackArtifact(assembly CloudAssembly, artifactId *string, artifact *alicloudroscdkassemblyschema.ArtifactManifest) RosStackArtifact {
	_init_.Initialize()

	if err := validateNewRosStackArtifactParameters(assembly, artifactId, artifact); err != nil {
		panic(err)
	}
	j := jsiiProxy_RosStackArtifact{}

	_jsii_.Create(
		"@alicloud/ros-cdk-cxapi.RosStackArtifact",
		[]interface{}{assembly, artifactId, artifact},
		&j,
	)

	return &j
}

func NewRosStackArtifact_Override(r RosStackArtifact, assembly CloudAssembly, artifactId *string, artifact *alicloudroscdkassemblyschema.ArtifactManifest) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-cxapi.RosStackArtifact",
		[]interface{}{assembly, artifactId, artifact},
		r,
	)
}

// Returns a subclass of `CloudArtifact` based on the artifact type defined in the artifact manifest.
//
// Returns: the `CloudArtifact` that matches the artifact type or `undefined` if it's an artifact type that is unrecognized by this module.
func RosStackArtifact_FromManifest(assembly CloudAssembly, id *string, artifact *alicloudroscdkassemblyschema.ArtifactManifest) CloudArtifact {
	_init_.Initialize()

	if err := validateRosStackArtifact_FromManifestParameters(assembly, id, artifact); err != nil {
		panic(err)
	}
	var returns CloudArtifact

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-cxapi.RosStackArtifact",
		"fromManifest",
		[]interface{}{assembly, id, artifact},
		&returns,
	)

	return returns
}

func (r *jsiiProxy_RosStackArtifact) FindMetadataByType(type_ *string) *[]*MetadataEntryResult {
	if err := r.validateFindMetadataByTypeParameters(type_); err != nil {
		panic(err)
	}
	var returns *[]*MetadataEntryResult

	_jsii_.Invoke(
		r,
		"findMetadataByType",
		[]interface{}{type_},
		&returns,
	)

	return returns
}

