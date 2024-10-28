package main

import (
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs"
)

type demoStackProps struct {
	alicloudroscdkcore.StackProps
}

func NewdemoStack(scope alicloudroscdkcore.Construct, id string, props *demoStackProps) alicloudroscdkcore.Stack {
	var sprops alicloudroscdkcore.StackProps
	if props != nil {
		sprops = props.StackProps
	}
	stack := alicloudroscdkcore.NewStack(scope, &id, &sprops)

	// The code that defines your stack goes here
	vpcKey := "Vpc"
	vpcProps := alicloudroscdkecs.VPCProps{CidrBlock: "10.0.0.0/8"}
	vpc := alicloudroscdkecs.NewVpc(stack, &vpcKey, &vpcProps, nil)

	vswKey := "VSwitch"
	vswProps := alicloudroscdkecs.VSwitchProps{
		CidrBlock: "10.0.0.0/16",
		ZoneId:    "cn-hangzhou-i",
		VpcId:     vpc.Ref(),
	}
	alicloudroscdkecs.NewVSwitch(stack, &vswKey, &vswProps, nil)

	return stack
}

func main() {
	app := alicloudroscdkcore.NewApp(nil)
	props := &demoStackProps{}

	NewdemoStack(app, "demoStack", props)

	app.Synth(nil)
}
