package main

import (
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestNew%name%Stack(t *testing.T) {
	app := alicloudroscdkcore.NewApp(nil)
	props := &%name%StackProps{}
	stack := New%name%Stack(app, "myTestStack", props)

	artifact := app.Synth(nil).GetStackArtifact(stack.ArtifactId()).Template()
	expect := map[string]interface{}{
		"Metadata": map[string]interface{}{
			"ALIYUN::ROS::Interface": map[string]interface{}{
				"TemplateTags": []interface{}{"Create by ROS CDK"},
			},
		},
		"ROSTemplateFormatVersion": "2015-09-01",
	}
	assert.Equal(t, expect, artifact)
}
