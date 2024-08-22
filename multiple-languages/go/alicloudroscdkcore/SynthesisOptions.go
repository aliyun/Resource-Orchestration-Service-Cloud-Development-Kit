package alicloudroscdkcore

import (
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcxapi"
)

// Options for synthesis.
// Deprecated: use `app.synth()` or `stage.synth()` instead
type SynthesisOptions struct {
	// Include the specified runtime information (module versions) in manifest.
	// Deprecated: use `app.synth()` or `stage.synth()` instead
	RuntimeInfo *alicloudroscdkcxapi.RuntimeInfo `field:"optional" json:"runtimeInfo" yaml:"runtimeInfo"`
	// The output directory into which to synthesize the cloud assembly.
	// Deprecated: use `app.synth()` or `stage.synth()` instead
	Outdir *string `field:"optional" json:"outdir" yaml:"outdir"`
	// Whether synthesis should skip the validation phase.
	// Deprecated: use `app.synth()` or `stage.synth()` instead
	SkipValidation *bool `field:"optional" json:"skipValidation" yaml:"skipValidation"`
}

