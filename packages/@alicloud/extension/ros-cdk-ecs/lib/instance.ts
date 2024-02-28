import {Instance, Vpc, VSwitch, SecurityGroup, InstanceProps, RosInstance} from '@alicloud/ros-cdk-ecs';
import * as ros from "@alicloud/ros-cdk-core";


class ExtensionInstance extends Instance {
    /**
     * Create prerequisite resource(s) required to an ECS instance: VPC, VSwitch, and(or) security group.
     * @param zoneId Required when creating a VSwitch.
     * @param vpcCidrBlock Optional when creating a VPC. Default value is 192.168.0.0/16.
     * @param vSwitchCidrBlock Optional when creating a VSwitch. Default value is 192.168.0.0/24.
     * @param whetherCreateSecurityGroup Whether to create a security group. Default value is true.
     */
    public autoCreateDependencies(zoneId: string | ros.IResolvable | undefined = undefined,
                                  vpcCidrBlock: string | undefined = undefined,
                                  vSwitchCidrBlock: string | undefined = undefined,
                                  whetherCreateSecurityGroup: Boolean = true): any[] {
        let vpc = undefined;
        let vSwitch = undefined;
        let securityGroup = undefined;
        let vpcId: string | ros.IResolvable | undefined = undefined;
        let vSwitchId: string | ros.IResolvable | undefined = undefined;
        let securityGroupId: string | ros.IResolvable | undefined = undefined;
        let instance = this.resource as RosInstance;

        if (instance.vSwitchId === undefined) {
            zoneId = zoneId || instance.zoneId;
            if (zoneId === undefined) {
                throw new Error('zoneId is required when creating a VSwitch.');
            }
            if (instance.vpcId === undefined) {
                if ((vpcCidrBlock === undefined) !== (vSwitchCidrBlock === undefined)) {
                    throw new Error('Both vpcCidrBlock and vSwitchCidrBlock must be specified or neither.');
                }
                vpcCidrBlock = vpcCidrBlock || '192.168.0.0/16';
                vpc = new Vpc(this.scope, `AutoCreatedVpcFor${this.id}`, {
                    cidrBlock: vpcCidrBlock,
                    description: 'This is auto created by ROS-CDK.',
                });
                vpcId = vpc.attrVpcId;
            } else {
                vpcId = instance.vpcId
                if (vSwitchCidrBlock === undefined) {
                    throw new Error('vSwitchCidrBlock is mandatory when giving a Vpc and creating a VSwitch.');
                }
            }
            vSwitchCidrBlock = vSwitchCidrBlock || '192.168.0.0/24';
            vSwitch = new VSwitch(this.scope, `AutoCreatedVSwitchFor${this.id}`, {
                vpcId: vpcId,
                cidrBlock: vSwitchCidrBlock,
                description: 'This is auto created by ROS-CDK.',
                zoneId: zoneId,
            });
            vSwitchId = vSwitch.attrVSwitchId;
        } else {
            vSwitchId = instance.vSwitchId;
        }

        if (whetherCreateSecurityGroup && instance.securityGroupId === undefined && instance.securityGroupIds === undefined) {
            securityGroup = new SecurityGroup(this.scope, `AutoCreatedSecurityGroupFor${this.id}`, {
                vpcId: vpcId,
                description: 'This is auto created by ROS-CDK.',
            });
            securityGroupId = securityGroup.attrSecurityGroupId;
        } else {
            securityGroupId = instance.securityGroupId;
        }

        instance.vpcId = vpcId
        instance.vSwitchId = vSwitchId
        instance.securityGroupId = securityGroupId;

        return [vpc, vSwitch, securityGroup];
    }

    /**
     * Add one or more security groups to an ECS instance.
     * @param securityGroups Security groups or security group IDs.
     */
    public addSecurityGroups(...securityGroups: (SecurityGroup | string)[]) {
        let instance = this.resource as RosInstance;
        let originalSecurityGroupIds = instance.securityGroupIds;
        let newSecurityGroupIds: Array<string | ros.IResolvable> | ros.IResolvable = [];
        if (instance.securityGroupId !== undefined) {
            newSecurityGroupIds.push(instance.securityGroupId);
        }
        for (let securityGroup of securityGroups) {
            if (typeof securityGroup === 'string') {
                newSecurityGroupIds.push(securityGroup);
            } else {
                newSecurityGroupIds.push(securityGroup.attrSecurityGroupId);
            }
        }
        if (ros.isResolvableObject(originalSecurityGroupIds)) {
            newSecurityGroupIds = ros.Fn.listMerge([originalSecurityGroupIds, newSecurityGroupIds]);
        } else if (originalSecurityGroupIds !== undefined) {
            newSecurityGroupIds = originalSecurityGroupIds.concat(newSecurityGroupIds);
        }

        instance.securityGroupId = undefined;
        instance.securityGroupIds = newSecurityGroupIds;
    }

    /**
     * Add one or more commands to the userdata of an ECS instance.
     * @param commands Commands to be added.
     */
    public addUserDataCommands(...commands: (string | ros.IResolvable)[]): void {
        let instance = this.resource as RosInstance;
        let commandsAsString: (string | ros.IResolvable)[] = [];
        if (instance.userData !== undefined) {
            commandsAsString.push(instance.userData);
        }
        for (let command of commands) {
            if (ros.isResolvableObject(command)) {
                command = command.toString();
            }
            commandsAsString.push(command);
        }
        instance.userData = ros.Fn.join('\n', commandsAsString);
    }
}