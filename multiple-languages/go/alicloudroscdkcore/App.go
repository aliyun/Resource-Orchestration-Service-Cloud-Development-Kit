package alicloudroscdkcore

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcxapi"
	"github.com/aws/constructs-go/constructs/v3"
)

// A construct which represents an entire CDK app. This construct is normally the root of the construct tree.
//
// You would normally define an 'App' instance in your program's entrypoint,
// then define constructs where the app is used as the parent scope.
//
// After all the child constructs are defined within the app, you should call
// 'app.synth()' which will emit a "ros template" from this app into the
// directory specified by 'outdir'.
type App interface {
	Stage
	// The default account for all resources defined within this stage.
	Account() *string
	// Artifact ID of the assembly if it is a nested stage. The root stage app will return an empty string.
	//
	// Derived from the construct path.
	// Experimental.
	ArtifactId() *string
	// The cloud assembly asset output directory.
	AssetOutdir() *string
	// The construct tree node associated with this construct.
	Node() ConstructNode
	// The cloud assembly output directory.
	Outdir() *string
	// The parent stage or 'undefined' if this is the app.
	//
	// *.
	// Experimental.
	ParentStage() Stage
	// The default region for all resources defined within this stage.
	Region() *string
	// The name of the stage.
	//
	// Based on names of the parent stages separated by
	// hypens.
	// Experimental.
	StageName() *string
	// Perform final modifications before synthesis.
	//
	// This method can be implemented by derived constructs in order to perform
	// final changes before synthesis. prepare() will be called after child
	// constructs have been prepared.
	//
	// This is an advanced framework feature. Only use this if you
	// understand the implications.
	OnPrepare()
	// Allows this construct to emit artifacts into the cloud assembly during synthesis.
	//
	// This method is usually implemented by framework-level constructs such as `Stack` and `Asset`
	// as they participate in synthesizing the cloud assembly.
	OnSynthesize(session constructs.ISynthesisSession)
	// Validate the current construct.
	//
	// This method can be implemented by derived constructs in order to perform
	// validation logic. It is called on all constructs before synthesis.
	//
	// Returns: An array of validation error messages, or an empty array if the construct is valid.
	OnValidate() *[]*string
	// Perform final modifications before synthesis.
	//
	// This method can be implemented by derived constructs in order to perform
	// final changes before synthesis. prepare() will be called after child
	// constructs have been prepared.
	//
	// This is an advanced framework feature. Only use this if you
	// understand the implications.
	Prepare()
	// Synthesize this stage into a cloud assembly.
	//
	// Once an assembly has been synthesized, it cannot be modified. Subsequent
	// calls will return the same assembly.
	Synth(options *StageSynthesisOptions) alicloudroscdkcxapi.CloudAssembly
	// Allows this construct to emit artifacts into the cloud assembly during synthesis.
	//
	// This method is usually implemented by framework-level constructs such as `Stack` and `Asset`
	// as they participate in synthesizing the cloud assembly.
	Synthesize(session ISynthesisSession)
	// Returns a string representation of this construct.
	ToString() *string
	// Validate the current construct.
	//
	// This method can be implemented by derived constructs in order to perform
	// validation logic. It is called on all constructs before synthesis.
	//
	// Returns: An array of validation error messages, or an empty array if the construct is valid.
	Validate() *[]*string
}

// The jsii proxy struct for App
type jsiiProxy_App struct {
	jsiiProxy_Stage
}

func (j *jsiiProxy_App) Account() *string {
	var returns *string
	_jsii_.Get(
		j,
		"account",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_App) ArtifactId() *string {
	var returns *string
	_jsii_.Get(
		j,
		"artifactId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_App) AssetOutdir() *string {
	var returns *string
	_jsii_.Get(
		j,
		"assetOutdir",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_App) Node() ConstructNode {
	var returns ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_App) Outdir() *string {
	var returns *string
	_jsii_.Get(
		j,
		"outdir",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_App) ParentStage() Stage {
	var returns Stage
	_jsii_.Get(
		j,
		"parentStage",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_App) Region() *string {
	var returns *string
	_jsii_.Get(
		j,
		"region",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_App) StageName() *string {
	var returns *string
	_jsii_.Get(
		j,
		"stageName",
		&returns,
	)
	return returns
}


// Initializes a CDK application.
func NewApp(props *AppProps) App {
	_init_.Initialize()

	if err := validateNewAppParameters(props); err != nil {
		panic(err)
	}
	j := jsiiProxy_App{}

	_jsii_.Create(
		"@alicloud/ros-cdk-core.App",
		[]interface{}{props},
		&j,
	)

	return &j
}

// Initializes a CDK application.
func NewApp_Override(a App, props *AppProps) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-core.App",
		[]interface{}{props},
		a,
	)
}

// Checks if an object is an instance of the 'App' class.
//
// Returns 'true' if 'obj' is an 'App'.
// Param obj The object to evaluate.
func App_IsApp(obj interface{}) *bool {
	_init_.Initialize()

	if err := validateApp_IsAppParameters(obj); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.App",
		"isApp",
		[]interface{}{obj},
		&returns,
	)

	return returns
}

// Return whether the given object is a Construct.
func App_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateApp_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.App",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Test whether the given construct is a stage.
// Experimental.
func App_IsStage(x interface{}) *bool {
	_init_.Initialize()

	if err := validateApp_IsStageParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.App",
		"isStage",
		[]interface{}{x},
		&returns,
	)

	return returns
}

// Return the stage this construct is contained with, if available.
//
// If called
// on a nested stage, returns its parent.
// Experimental.
func App_Of(construct IConstruct) Stage {
	_init_.Initialize()

	if err := validateApp_OfParameters(construct); err != nil {
		panic(err)
	}
	var returns Stage

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-core.App",
		"of",
		[]interface{}{construct},
		&returns,
	)

	return returns
}

func (a *jsiiProxy_App) OnPrepare() {
	_jsii_.InvokeVoid(
		a,
		"onPrepare",
		nil, // no parameters
	)
}

func (a *jsiiProxy_App) OnSynthesize(session constructs.ISynthesisSession) {
	if err := a.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		a,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (a *jsiiProxy_App) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		a,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (a *jsiiProxy_App) Prepare() {
	_jsii_.InvokeVoid(
		a,
		"prepare",
		nil, // no parameters
	)
}

func (a *jsiiProxy_App) Synth(options *StageSynthesisOptions) alicloudroscdkcxapi.CloudAssembly {
	if err := a.validateSynthParameters(options); err != nil {
		panic(err)
	}
	var returns alicloudroscdkcxapi.CloudAssembly

	_jsii_.Invoke(
		a,
		"synth",
		[]interface{}{options},
		&returns,
	)

	return returns
}

func (a *jsiiProxy_App) Synthesize(session ISynthesisSession) {
	if err := a.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		a,
		"synthesize",
		[]interface{}{session},
	)
}

func (a *jsiiProxy_App) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		a,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (a *jsiiProxy_App) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		a,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

