package alicloudroscdkcxapi

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcxapi/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkassemblyschema"
)

// Asset manifest is a description of a set of assets which need to be built and published.
type NestedCloudAssemblyArtifact interface {
	CloudArtifact
	Assembly() CloudAssembly
	// Returns all the artifacts that this artifact depends on.
	Dependencies() *[]CloudArtifact
	// The relative directory name of the asset manifest.
	DirectoryName() *string
	// Display name.
	DisplayName() *string
	// Full path to the nested assembly directory.
	FullPath() *string
	Id() *string
	// The artifact's manifest.
	Manifest() *alicloudroscdkassemblyschema.ArtifactManifest
	// The set of messages extracted from the artifact's metadata.
	Messages() *[]*SynthesisMessage
	// The nested Assembly.
	NestedAssembly() CloudAssembly
	// Returns: all the metadata entries of a specific type in this artifact.
	FindMetadataByType(type_ *string) *[]*MetadataEntryResult
}

// The jsii proxy struct for NestedCloudAssemblyArtifact
type jsiiProxy_NestedCloudAssemblyArtifact struct {
	jsiiProxy_CloudArtifact
}

func (j *jsiiProxy_NestedCloudAssemblyArtifact) Assembly() CloudAssembly {
	var returns CloudAssembly
	_jsii_.Get(
		j,
		"assembly",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_NestedCloudAssemblyArtifact) Dependencies() *[]CloudArtifact {
	var returns *[]CloudArtifact
	_jsii_.Get(
		j,
		"dependencies",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_NestedCloudAssemblyArtifact) DirectoryName() *string {
	var returns *string
	_jsii_.Get(
		j,
		"directoryName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_NestedCloudAssemblyArtifact) DisplayName() *string {
	var returns *string
	_jsii_.Get(
		j,
		"displayName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_NestedCloudAssemblyArtifact) FullPath() *string {
	var returns *string
	_jsii_.Get(
		j,
		"fullPath",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_NestedCloudAssemblyArtifact) Id() *string {
	var returns *string
	_jsii_.Get(
		j,
		"id",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_NestedCloudAssemblyArtifact) Manifest() *alicloudroscdkassemblyschema.ArtifactManifest {
	var returns *alicloudroscdkassemblyschema.ArtifactManifest
	_jsii_.Get(
		j,
		"manifest",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_NestedCloudAssemblyArtifact) Messages() *[]*SynthesisMessage {
	var returns *[]*SynthesisMessage
	_jsii_.Get(
		j,
		"messages",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_NestedCloudAssemblyArtifact) NestedAssembly() CloudAssembly {
	var returns CloudAssembly
	_jsii_.Get(
		j,
		"nestedAssembly",
		&returns,
	)
	return returns
}


func NewNestedCloudAssemblyArtifact(assembly CloudAssembly, name *string, artifact *alicloudroscdkassemblyschema.ArtifactManifest) NestedCloudAssemblyArtifact {
	_init_.Initialize()

	if err := validateNewNestedCloudAssemblyArtifactParameters(assembly, name, artifact); err != nil {
		panic(err)
	}
	j := jsiiProxy_NestedCloudAssemblyArtifact{}

	_jsii_.Create(
		"@alicloud/ros-cdk-cxapi.NestedCloudAssemblyArtifact",
		[]interface{}{assembly, name, artifact},
		&j,
	)

	return &j
}

func NewNestedCloudAssemblyArtifact_Override(n NestedCloudAssemblyArtifact, assembly CloudAssembly, name *string, artifact *alicloudroscdkassemblyschema.ArtifactManifest) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-cxapi.NestedCloudAssemblyArtifact",
		[]interface{}{assembly, name, artifact},
		n,
	)
}

// Returns a subclass of `CloudArtifact` based on the artifact type defined in the artifact manifest.
//
// Returns: the `CloudArtifact` that matches the artifact type or `undefined` if it's an artifact type that is unrecognized by this module.
func NestedCloudAssemblyArtifact_FromManifest(assembly CloudAssembly, id *string, artifact *alicloudroscdkassemblyschema.ArtifactManifest) CloudArtifact {
	_init_.Initialize()

	if err := validateNestedCloudAssemblyArtifact_FromManifestParameters(assembly, id, artifact); err != nil {
		panic(err)
	}
	var returns CloudArtifact

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-cxapi.NestedCloudAssemblyArtifact",
		"fromManifest",
		[]interface{}{assembly, id, artifact},
		&returns,
	)

	return returns
}

func (n *jsiiProxy_NestedCloudAssemblyArtifact) FindMetadataByType(type_ *string) *[]*MetadataEntryResult {
	if err := n.validateFindMetadataByTypeParameters(type_); err != nil {
		panic(err)
	}
	var returns *[]*MetadataEntryResult

	_jsii_.Invoke(
		n,
		"findMetadataByType",
		[]interface{}{type_},
		&returns,
	)

	return returns
}

