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
	description := "Deploy 2048 game through ROS CDK."
	alicloudroscdkcore.RosInfo_SetDescription(&description)

	zoneIdKey := "ZoneId"
	zoneIdProps := alicloudroscdkcore.RosParameterProps{Type: alicloudroscdkcore.RosParameterType_STRING}
	zoneId := alicloudroscdkcore.NewRosParameter(stack, &zoneIdKey, &zoneIdProps)

	vpcKey := "Vpc"
	vpcProps := alicloudroscdkecs.VPCProps{CidrBlock: "192.168.0.0/16"}
	vpc := alicloudroscdkecs.NewVpc(stack, &vpcKey, &vpcProps, nil)

	sgKey := "SecurityGroup"
	sgProps := alicloudroscdkecs.SecurityGroupProps{VpcId: vpc.Ref()}
	sg := alicloudroscdkecs.NewSecurityGroup(stack, &sgKey, &sgProps, nil)

	vswKey := "VSwitch"
	vswProps := alicloudroscdkecs.VSwitchProps{
		CidrBlock: "192.168.0.0/24",
		ZoneId:    zoneId.Value(),
		VpcId:     vpc.Ref(),
	}
	vsw := alicloudroscdkecs.NewVSwitch(stack, &vswKey, &vswProps, nil)

	instanceKey := "Instance"
	instanceProps := alicloudroscdkecs.InstanceProps{
		VpcId:              vpc.Ref(),
		VSwitchId:          vsw.Ref(),
		SecurityGroupId:    sg.Ref(),
		ZoneId:             zoneId.Value(),
		InstanceType:       "ecs.c6e.large",
		ImageId:            "centos_7_8",
		SystemDiskCategory: "cloud_essd",
		IoOptimized:        "optimized",
	}
	instance := alicloudroscdkecs.NewInstance(stack, &instanceKey, &instanceProps, nil)

	sgIngressKey := "SecurityGroupIngress"
	sgIngressProps := alicloudroscdkecs.SecurityGroupIngressProps{
		IpProtocol:      "tcp",
		PortRange:       "80/80",
		SourceCidrIp:    "0.0.0.0/0",
		SecurityGroupId: sg.Ref(),
		NicType:         "intranet",
	}
	sgIngress := alicloudroscdkecs.NewSecurityGroupIngress(stack, &sgIngressKey, &sgIngressProps, nil)

	var instanceIds []*string
	runCommandKey := "RunCommand"
	runCommandProps := alicloudroscdkecs.RunCommandProps{
		InstanceIds:    append(instanceIds, instance.Ref()),
		Type:           "RunShellScript",
		Sync:           true,
		Timeout:        3600,
		CommandContent: "yum install -y httpd wget\\nsystemctl start httpd\\nwget 'https://computenest-artifacts-cn-hangzhou.oss-cn-hangzhou-internal.aliyuncs.com/1853370294850618/cn-beijing/1697533575326/2048.tgz' -O 2048.tgz\\ntar xvf 2048.tgz\\nmv 2048/* /var/www/html && rm -rf 2048",
	}
	runCommand := alicloudroscdkecs.NewRunCommand(stack, &runCommandKey, &runCommandProps, nil)
	runCommand.AddDependency(sgIngress)

	urlKey := "Url"
	urlProps := alicloudroscdkcore.RosOutputProps{Value: "http://" + *instance.AttrPublicIp().ToString() + ":80"}
	alicloudroscdkcore.NewRosOutput(stack, &urlKey, &urlProps)

	return stack
}

func main() {
	app := alicloudroscdkcore.NewApp(nil)
	props := &demoStackProps{}

	NewdemoStack(app, "demoStack", props)

	app.Synth(nil)
}
