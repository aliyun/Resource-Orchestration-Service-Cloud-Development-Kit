package alicloudroscdkcxapi

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcxapi/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkassemblyschema"
)

// Represents an artifact within a cloud assembly.
type CloudArtifact interface {
	Assembly() CloudAssembly
	// Returns all the artifacts that this artifact depends on.
	Dependencies() *[]CloudArtifact
	Id() *string
	// The artifact's manifest.
	Manifest() *alicloudroscdkassemblyschema.ArtifactManifest
	// The set of messages extracted from the artifact's metadata.
	Messages() *[]*SynthesisMessage
	// Returns: all the metadata entries of a specific type in this artifact.
	FindMetadataByType(type_ *string) *[]*MetadataEntryResult
}

// The jsii proxy struct for CloudArtifact
type jsiiProxy_CloudArtifact struct {
	_ byte // padding
}

func (j *jsiiProxy_CloudArtifact) Assembly() CloudAssembly {
	var returns CloudAssembly
	_jsii_.Get(
		j,
		"assembly",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CloudArtifact) Dependencies() *[]CloudArtifact {
	var returns *[]CloudArtifact
	_jsii_.Get(
		j,
		"dependencies",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CloudArtifact) Id() *string {
	var returns *string
	_jsii_.Get(
		j,
		"id",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CloudArtifact) Manifest() *alicloudroscdkassemblyschema.ArtifactManifest {
	var returns *alicloudroscdkassemblyschema.ArtifactManifest
	_jsii_.Get(
		j,
		"manifest",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CloudArtifact) Messages() *[]*SynthesisMessage {
	var returns *[]*SynthesisMessage
	_jsii_.Get(
		j,
		"messages",
		&returns,
	)
	return returns
}


func NewCloudArtifact(assembly CloudAssembly, id *string, manifest *alicloudroscdkassemblyschema.ArtifactManifest) CloudArtifact {
	_init_.Initialize()

	if err := validateNewCloudArtifactParameters(assembly, id, manifest); err != nil {
		panic(err)
	}
	j := jsiiProxy_CloudArtifact{}

	_jsii_.Create(
		"@alicloud/ros-cdk-cxapi.CloudArtifact",
		[]interface{}{assembly, id, manifest},
		&j,
	)

	return &j
}

func NewCloudArtifact_Override(c CloudArtifact, assembly CloudAssembly, id *string, manifest *alicloudroscdkassemblyschema.ArtifactManifest) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-cxapi.CloudArtifact",
		[]interface{}{assembly, id, manifest},
		c,
	)
}

// Returns a subclass of `CloudArtifact` based on the artifact type defined in the artifact manifest.
//
// Returns: the `CloudArtifact` that matches the artifact type or `undefined` if it's an artifact type that is unrecognized by this module.
func CloudArtifact_FromManifest(assembly CloudAssembly, id *string, artifact *alicloudroscdkassemblyschema.ArtifactManifest) CloudArtifact {
	_init_.Initialize()

	if err := validateCloudArtifact_FromManifestParameters(assembly, id, artifact); err != nil {
		panic(err)
	}
	var returns CloudArtifact

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-cxapi.CloudArtifact",
		"fromManifest",
		[]interface{}{assembly, id, artifact},
		&returns,
	)

	return returns
}

func (c *jsiiProxy_CloudArtifact) FindMetadataByType(type_ *string) *[]*MetadataEntryResult {
	if err := c.validateFindMetadataByTypeParameters(type_); err != nil {
		panic(err)
	}
	var returns *[]*MetadataEntryResult

	_jsii_.Invoke(
		c,
		"findMetadataByType",
		[]interface{}{type_},
		&returns,
	)

	return returns
}

