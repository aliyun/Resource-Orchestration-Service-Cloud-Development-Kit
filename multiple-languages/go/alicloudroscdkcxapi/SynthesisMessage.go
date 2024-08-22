package alicloudroscdkcxapi

import (
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkassemblyschema"
)

type SynthesisMessage struct {
	Entry *alicloudroscdkassemblyschema.MetadataEntry `field:"required" json:"entry" yaml:"entry"`
	Id *string `field:"required" json:"id" yaml:"id"`
	Level SynthesisMessageLevel `field:"required" json:"level" yaml:"level"`
}

