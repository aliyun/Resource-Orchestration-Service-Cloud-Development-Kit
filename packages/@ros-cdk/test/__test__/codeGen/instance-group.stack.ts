import * as ros from '@ros-cdk/core'
import * as ecs from '@ros-cdk/ecs';
export class InstanceGroupTest extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);
    new ros.RosInfo(
      this,
      ros.RosInfo.description,
      'Create a set of ECS instances of the same configuration under the newly created VPC, VSwitch, and security groups.',
    );

    const vSwitchName = new ros.RosParameter(this, 'VSwitchName', {
      constraintDescription: '[2, 128] alphanumeric characters',
      description: `VSwitch name, 2 to 128 characters in length, beginning with size letters or Chinese characters, including Numbers, '_' or '-'.`,
      defaultValue: 'MyVsw',
      minLength: 2,
      label: 'VSwitch Name',
      maxLength: 128,
      type: ros.RosParameterType.STRING,
    });

    const systemDiskCategory = new ros.RosParameter(this, 'SystemDiskCategory', {
      defaultValue: 'cloud_ssd',
      allowedValues: ['cloud_efficiency', 'cloud_ssd'],
      type: ros.RosParameterType.STRING,
      description: 'System disk category, allowed values: cloud_efficiency|cloud_ssd.',
      label: 'System Disk Category',
    });

    const vpcCidrBlock = new ros.RosParameter(this, 'VpcCidrBlock', {
      defaultValue: '192.168.0.0/16',
      type: ros.RosParameterType.STRING,
      allowedValues: ['192.168.0.0/16', '172.16.0.0/12', '10.0.0.0/8'],
      description:
        'The IP address range of the VPC in the CIDR block form. You can use the following IP address ranges and their subnets: 10.0.0.0/8 172.16.0.0/12  192.168.0.0/16',
      label: 'VPC Cidrblock',
    });

    const imageId = new ros.RosParameter(this, 'ImageId', {
      defaultValue: 'centos_7',
      type: ros.RosParameterType.STRING,
      description: `Instance Image ID. see detail: <b><a href='https://www.alibabacloud.com/help/doc-detail/112977.html' target='_blank'><font color='blue'>Find the mirror</font></a></b>`,
      label: 'Image ID',
    });

    const vpcName = new ros.RosParameter(this, 'VpcName', {
      constraintDescription: '[2, 128] alphanumeric characters',
      defaultValue: 'MyVpc',
      type: ros.RosParameterType.STRING,
      description: `VPC name, 2 to 128 characters in length, beginning with size letters or Chinese characters, including Numbers, '_' or '-'.`,
      label: 'VPC Name',
      minLength: 2,
      maxLength: 128,
    });

    const vSwitchCidrBlock = new ros.RosParameter(this, 'VSwitchCidrBlock', {
      defaultValue: '192.168.1.0/24',
      type: ros.RosParameterType.STRING,
      description: 'VSwitch subnet which is within VPC.',
      label: 'VSwitch CidrBlock',
    });

    const internetChargeType = new ros.RosParameter(this, 'InternetChargeType', {
      defaultValue: 'PayByTraffic',
      allowedValues: ['PayByBandwidth', 'PayByTraffic'],
      type: ros.RosParameterType.STRING,
      description: `Instance internet access charge type.Support 'PayByBandwidth' and 'PayByTraffic' only.`,
      label: 'Internet Charge Type',
    });

    const pwd = new ros.RosParameter(this, 'Password', {
      type: ros.RosParameterType.STRING,
      description: `The 8-30 long login password of instance, consists of the uppercase, lowercase letter and number. <br> special characters include()\`~!@#$%^&*_-+=|{}[]:;'<>,.?/`,
      label: 'Login Password',
      minLength: 8,
      allowedPattern: `[0-9A-Za-z\\_\\-&:;'<>,=%\`~!@#\\(\\)\\$\\^\\*\\+\\|\\{\\}\\[\\]\\.\\?\\/]+$`,
      noEcho: true,
      maxLength: 30,
      constraintDescription: `Length 8-30, must contain upper case letters, lower case letters, Numbers, special symbols three; special characters include: ()\`~!@#$%^&*_-+=|{}[]:;'<>,.?/`,
      defaultValue: '^%$^HJNJK45623',
    });

    const instanceType = new ros.RosParameter(this, 'InstanceType', {
      type: ros.RosParameterType.STRING,
      description: `Fill in specifications that can be used under the VSwitch availability zone;</b></font><br>general specifications：<font color='red'><b>ecs.c5.large</b></font><br>note: a few zones do not support general specifications<br>see detail: <a href='https://www.alibabacloud.com/help/en/doc-detail/25378.html' target='_blank'><b><font color='blue'>Instance Specification Family</font></a></b>`,
      label: 'Instance Type',
      defaultValue: 'ecs.ic5.large',
    });

    const zoneId = new ros.RosParameter(this, 'zoneId', {
      associationProperty: 'ALIYUN::ECS::Instance::ZoneId',
      type: ros.RosParameterType.STRING,
      label: 'Zone ID',
      defaultValue: 'cn-beijing-h',
    });

    const diskName = new ros.RosParameter(this, 'DiskName', {
      type: ros.RosParameterType.STRING,
      description: `'Display name of the disk, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.',`,
      defaultValue: 'MyDiskName',
    });

    const diskSize = new ros.RosParameter(this, 'DiskSize', {
      type: ros.RosParameterType.STRING,
      description: `The size of the volume, unit in GB.Value range: cloud: [5,2000], cloud_efficiency: [20,32768], cloud_ssd: [20,32768], ephemeral_ssd: [5,800].The value should be equal to or greater than the specific snapshot.`,
      label: 'Disk Size',
      defaultValue: 20,
    });

    const ecsVpc = new ecs.Vpc(this, 'EcsVpc', {
      vpcName: vpcName.valueAsString,
      cidrBlock: vpcCidrBlock.valueAsString,
    });

    const ecsVSwitch = new ecs.VSwitch(this, 'EcsVSwitch', {
      vSwitchName: vSwitchName.valueAsString,
      vpcId: ecsVpc.attrVpcId,
      cidrBlock: vSwitchCidrBlock.valueAsString,
      zoneId: zoneId.valueAsString,
    });

    const sgId = new ecs.SecurityGroup(this, 'sgId', {
      vpcId: ecsVpc.attrVpcId,
    });

    ecsVSwitch.addDependency(ecsVpc);

    const instanceGroupDiskMappingsProp: ecs.InstanceGroupProperty.DiskMappingsProperty = {
      size: diskSize.valueAsString,
      diskName: diskName.valueAsString,
    };

    const ecsInstanceGroup = new ecs.InstanceGroup(this, 'EcsInstanceGroup', {
      vSwitchId: ecsVSwitch.attrVSwitchId,
      vpcId: ecsVpc.attrVpcId,
      imageId: imageId.valueAsString,
      systemDiskCategory: systemDiskCategory.valueAsString,
      internetChargeType: internetChargeType.valueAsString,
      password: pwd.valueAsString,
      instanceType: instanceType.valueAsString,
      maxAmount: 1,
      diskMappings: [instanceGroupDiskMappingsProp],
      securityGroupId: sgId.attrSecurityGroupId,
    });
    const publicIps = new ros.RosOutput(this, 'PublicIps', {
      value: ecsInstanceGroup.attrPublicIps,
    });

    const privateIps = new ros.RosOutput(this, 'PrivateIps', {
      description: 'Private IP address list of created ecs instance. Only for VPC instance.',
      value: ecsInstanceGroup.attrPrivateIps,
    });

    const instanceIds = new ros.RosOutput(this, 'InstanceIds', {
      description: 'The instance id list of created ecs instance',
      value: ecsInstanceGroup.attrInstanceIds,
    });

    const zoneIds = new ros.RosOutput(this, 'ZoneIds', {
      description: 'The instance zone id list of created ecs instance',
      value: ecsInstanceGroup.attrZoneIds,
    });
  }
}
