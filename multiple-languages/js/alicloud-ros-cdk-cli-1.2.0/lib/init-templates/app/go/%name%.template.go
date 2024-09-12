package main

import (
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

type %name%StackProps struct {
	alicloudroscdkcore.StackProps
}

func New%name%Stack(scope alicloudroscdkcore.Construct, id string, props *%name%StackProps) alicloudroscdkcore.Stack {
	var sprops alicloudroscdkcore.StackProps
	if props != nil {
		sprops = props.StackProps
	}
	stack := alicloudroscdkcore.NewStack(scope, &id, &sprops)

	// The code that defines your stack goes here

	return stack
}

func main() {
	app := alicloudroscdkcore.NewApp(nil)
	props := &%name%StackProps{}

	New%name%Stack(app, "%name%Stack", props)

	app.Synth(nil)
}
