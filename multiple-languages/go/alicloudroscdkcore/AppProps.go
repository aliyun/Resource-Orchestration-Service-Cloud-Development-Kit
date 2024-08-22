package alicloudroscdkcore


// Initialization props for apps.
type AppProps struct {
	// Automatically call 'synth()' before the program exits.
	//
	// If you set this, you don't have to call 'synth()' explicitly. Note that
	// this feature is only available for certain programming languages, and
	// calling 'synth()' is still recommended.
	//
	// Default true if running via CDK CLI ('CDK_OUTDIR' is set), 'false'
	// otherwise.
	AutoSynth *bool `field:"optional" json:"autoSynth" yaml:"autoSynth"`
	// Additional context values for the application.
	//
	// Context set by the CLI or the 'context' key in 'cdk.json' has precedence.
	//
	// Context can be read from any construct using 'node.getContext(key)'.
	Context *map[string]*string `field:"optional" json:"context" yaml:"context"`
	// The output directory into which to emit synthesized artifacts.
	//
	// Default - If this value is _not_ set, considers the environment variable 'CDK_OUTDIR'.
	//             If 'CDK_OUTDIR' is not defined, uses a temp directory.
	Outdir *string `field:"optional" json:"outdir" yaml:"outdir"`
	// Include runtime versioning information.
	RuntimeInfo *bool `field:"optional" json:"runtimeInfo" yaml:"runtimeInfo"`
	// Include construct creation stack trace.
	StackTraces *bool `field:"optional" json:"stackTraces" yaml:"stackTraces"`
	// Include construct tree metadata as part of the Cloud Assembly.
	TreeMetadata *bool `field:"optional" json:"treeMetadata" yaml:"treeMetadata"`
}

