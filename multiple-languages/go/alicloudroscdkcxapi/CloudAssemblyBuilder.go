package alicloudroscdkcxapi

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcxapi/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkassemblyschema"
)

// Can be used to build a cloud assembly.
type CloudAssemblyBuilder interface {
	// The directory where assets of this Cloud Assembly should be stored.
	AssetOutdir() *string
	// The root directory of the resulting cloud assembly.
	Outdir() *string
	// Adds an artifact into the cloud assembly.
	AddArtifact(id *string, manifest *alicloudroscdkassemblyschema.ArtifactManifest)
	// Reports that some context is missing in order for this cloud assembly to be fully synthesized.
	AddMissing(missing *alicloudroscdkassemblyschema.MissingContext)
	// Finalizes the cloud assembly into the output directory returns a 'CloudAssembly' object that can be used to inspect the assembly.
	BuildAssembly(options *AssemblyBuildOptions) CloudAssembly
	// Creates a nested cloud assembly.
	CreateNestedAssembly(artifactId *string, displayName *string) CloudAssemblyBuilder
}

// The jsii proxy struct for CloudAssemblyBuilder
type jsiiProxy_CloudAssemblyBuilder struct {
	_ byte // padding
}

func (j *jsiiProxy_CloudAssemblyBuilder) AssetOutdir() *string {
	var returns *string
	_jsii_.Get(
		j,
		"assetOutdir",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_CloudAssemblyBuilder) Outdir() *string {
	var returns *string
	_jsii_.Get(
		j,
		"outdir",
		&returns,
	)
	return returns
}


// Initializes a cloud assembly builder.
func NewCloudAssemblyBuilder(outdir *string, props *CloudAssemblyBuilderProps) CloudAssemblyBuilder {
	_init_.Initialize()

	if err := validateNewCloudAssemblyBuilderParameters(props); err != nil {
		panic(err)
	}
	j := jsiiProxy_CloudAssemblyBuilder{}

	_jsii_.Create(
		"@alicloud/ros-cdk-cxapi.CloudAssemblyBuilder",
		[]interface{}{outdir, props},
		&j,
	)

	return &j
}

// Initializes a cloud assembly builder.
func NewCloudAssemblyBuilder_Override(c CloudAssemblyBuilder, outdir *string, props *CloudAssemblyBuilderProps) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-cxapi.CloudAssemblyBuilder",
		[]interface{}{outdir, props},
		c,
	)
}

func (c *jsiiProxy_CloudAssemblyBuilder) AddArtifact(id *string, manifest *alicloudroscdkassemblyschema.ArtifactManifest) {
	if err := c.validateAddArtifactParameters(id, manifest); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		c,
		"addArtifact",
		[]interface{}{id, manifest},
	)
}

func (c *jsiiProxy_CloudAssemblyBuilder) AddMissing(missing *alicloudroscdkassemblyschema.MissingContext) {
	if err := c.validateAddMissingParameters(missing); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		c,
		"addMissing",
		[]interface{}{missing},
	)
}

func (c *jsiiProxy_CloudAssemblyBuilder) BuildAssembly(options *AssemblyBuildOptions) CloudAssembly {
	if err := c.validateBuildAssemblyParameters(options); err != nil {
		panic(err)
	}
	var returns CloudAssembly

	_jsii_.Invoke(
		c,
		"buildAssembly",
		[]interface{}{options},
		&returns,
	)

	return returns
}

func (c *jsiiProxy_CloudAssemblyBuilder) CreateNestedAssembly(artifactId *string, displayName *string) CloudAssemblyBuilder {
	if err := c.validateCreateNestedAssemblyParameters(artifactId, displayName); err != nil {
		panic(err)
	}
	var returns CloudAssemblyBuilder

	_jsii_.Invoke(
		c,
		"createNestedAssembly",
		[]interface{}{artifactId, displayName},
		&returns,
	)

	return returns
}

