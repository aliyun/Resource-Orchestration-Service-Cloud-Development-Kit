package main

import (
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestNewdemoStack(t *testing.T) {
	app := alicloudroscdkcore.NewApp(nil)
	props := &demoStackProps{}
	stack := NewdemoStack(app, "myTestStack", props)

	artifact := app.Synth(nil).GetStackArtifact(stack.ArtifactId()).Template()
	expect := map[string]interface{}{
		"Metadata": map[string]interface{}{
			"ALIYUN::ROS::Interface": map[string]interface{}{
				"TemplateTags": []interface{}{"Create by ROS CDK"},
			},
		},
		"ROSTemplateFormatVersion": "2015-09-01",
		"Resources": map[string]interface{}{
			"Vpc": map[string]interface{}{
				"Type": "ALIYUN::ECS::VPC",
				"Properties": map[string]interface{}{
					"CidrBlock":  "10.0.0.0/8",
					"EnableIpv6": false,
				},
			},
			"VSwitch": map[string]interface{}{
				"Type": "ALIYUN::ECS::VSwitch",
				"Properties": map[string]interface{}{
					"CidrBlock": "10.0.0.0/16",
					"VpcId": map[string]interface{}{
						"Ref": "Vpc",
					},
					"ZoneId": "cn-hangzhou-i",
				},
			},
		},
	}
	assert.Equal(t, expect, artifact)
}
