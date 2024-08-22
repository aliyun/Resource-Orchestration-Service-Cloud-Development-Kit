package alicloudroscdkcxapi

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcxapi/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkassemblyschema"
)

type TreeCloudArtifact interface {
	CloudArtifact
	Assembly() CloudAssembly
	// Returns all the artifacts that this artifact depends on.
	Dependencies() *[]CloudArtifact
	File() *string
	Id() *string
	// The artifact's manifest.
	Manifest() *alicloudroscdkassemblyschema.ArtifactManifest
	// The set of messages extracted from the artifact's metadata.
	Messages() *[]*SynthesisMessage
	// Returns: all the metadata entries of a specific type in this artifact.
	FindMetadataByType(type_ *string) *[]*MetadataEntryResult
}

// The jsii proxy struct for TreeCloudArtifact
type jsiiProxy_TreeCloudArtifact struct {
	jsiiProxy_CloudArtifact
}

func (j *jsiiProxy_TreeCloudArtifact) Assembly() CloudAssembly {
	var returns CloudAssembly
	_jsii_.Get(
		j,
		"assembly",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_TreeCloudArtifact) Dependencies() *[]CloudArtifact {
	var returns *[]CloudArtifact
	_jsii_.Get(
		j,
		"dependencies",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_TreeCloudArtifact) File() *string {
	var returns *string
	_jsii_.Get(
		j,
		"file",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_TreeCloudArtifact) Id() *string {
	var returns *string
	_jsii_.Get(
		j,
		"id",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_TreeCloudArtifact) Manifest() *alicloudroscdkassemblyschema.ArtifactManifest {
	var returns *alicloudroscdkassemblyschema.ArtifactManifest
	_jsii_.Get(
		j,
		"manifest",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_TreeCloudArtifact) Messages() *[]*SynthesisMessage {
	var returns *[]*SynthesisMessage
	_jsii_.Get(
		j,
		"messages",
		&returns,
	)
	return returns
}


func NewTreeCloudArtifact(assembly CloudAssembly, name *string, artifact *alicloudroscdkassemblyschema.ArtifactManifest) TreeCloudArtifact {
	_init_.Initialize()

	if err := validateNewTreeCloudArtifactParameters(assembly, name, artifact); err != nil {
		panic(err)
	}
	j := jsiiProxy_TreeCloudArtifact{}

	_jsii_.Create(
		"@alicloud/ros-cdk-cxapi.TreeCloudArtifact",
		[]interface{}{assembly, name, artifact},
		&j,
	)

	return &j
}

func NewTreeCloudArtifact_Override(t TreeCloudArtifact, assembly CloudAssembly, name *string, artifact *alicloudroscdkassemblyschema.ArtifactManifest) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-cxapi.TreeCloudArtifact",
		[]interface{}{assembly, name, artifact},
		t,
	)
}

// Returns a subclass of `CloudArtifact` based on the artifact type defined in the artifact manifest.
//
// Returns: the `CloudArtifact` that matches the artifact type or `undefined` if it's an artifact type that is unrecognized by this module.
func TreeCloudArtifact_FromManifest(assembly CloudAssembly, id *string, artifact *alicloudroscdkassemblyschema.ArtifactManifest) CloudArtifact {
	_init_.Initialize()

	if err := validateTreeCloudArtifact_FromManifestParameters(assembly, id, artifact); err != nil {
		panic(err)
	}
	var returns CloudArtifact

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-cxapi.TreeCloudArtifact",
		"fromManifest",
		[]interface{}{assembly, id, artifact},
		&returns,
	)

	return returns
}

func (t *jsiiProxy_TreeCloudArtifact) FindMetadataByType(type_ *string) *[]*MetadataEntryResult {
	if err := t.validateFindMetadataByTypeParameters(type_); err != nil {
		panic(err)
	}
	var returns *[]*MetadataEntryResult

	_jsii_.Invoke(
		t,
		"findMetadataByType",
		[]interface{}{type_},
		&returns,
	)

	return returns
}

