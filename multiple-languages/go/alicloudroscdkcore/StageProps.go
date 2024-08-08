package alicloudroscdkcore


// Initialization props for a stage.
type StageProps struct {
	// The output directory into which to emit synthesized artifacts.
	//
	// Can only be specified if this stage is the root stage the app. If this is
	// specified and this stage is nested within another stage, an error will be
	// thrown.
	//
	// Default - for nested stages, outdir will be determined as a relative
	// directory to the outdir of the app. For apps, if outdir is not specified, a
	// temporary directory will be created.
	Outdir *string `field:"optional" json:"outdir" yaml:"outdir"`
}

