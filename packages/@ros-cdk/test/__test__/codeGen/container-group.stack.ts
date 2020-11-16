import * as ros from '@ros-cdk/core'
import * as eci from '@ros-cdk/eci';
import * as ecs from '@ros-cdk/ecs';
export class ContainerGroupTest extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const securityContextSysctl = new ros.RosParameter(this, 'securityContextSysctl', {
      type: ros.RosParameterType.JSON,
      description: `ECI Sysctl is valid for every container in ECI.\nCurrently only two Sysctl keyNames are supported:\nKernel.shm_rmid_forced\nKernel.msgmax`,
    });

    const memory = new ros.RosParameter(this, 'memory', {
      type: ros.RosParameterType.NUMBER,
      description: `The containers that constitute the container group for initializing.`,
    });

    const initContainer = new ros.RosParameter(this, 'initContainer', {
      type: ros.RosParameterType.JSON,
      description: `The containers that constitute the container group for initializing.`,
    });

    const cpu = new ros.RosParameter(this, 'cpu', {
      type: ros.RosParameterType.NUMBER,
      description: `CPU size`,
    });
    const eipInstanceId = new ros.RosParameter(this, 'eipInstanceId', {
      type: ros.RosParameterType.STRING,
      description: `Elastic IP ID`,
    });
    const containerGroupName = new ros.RosParameter(this, 'containerGroupName', {
      type: ros.RosParameterType.STRING,
      description: `The name of the container group. \nThe length is [2,128] English lowercase letters, numbers or hyphens (-), cannot begin or end with a hyphens.`,
      minLength: 2,
      maxLength: 128,
    });
    const container = new ros.RosParameter(this, 'container', {
      type: ros.RosParameterType.JSON,
      description: `The containers that constitute the container group.`,
    });
    const imageSnapshotId = new ros.RosParameter(this, 'imageSnapshotId', {
      type: ros.RosParameterType.STRING,
      description: `Image cache ID or snapshot ID.`,
    });
    const dnsConfig = new ros.RosParameter(this, 'dnsConfig', {
      type: ros.RosParameterType.JSON,
      description: `The information about DNS configurations.`,
    });
    const autoMatchImageCache = new ros.RosParameter(this, 'autoMatchImageCache', {
      type: ros.RosParameterType.BOOLEAN,
      description: `Specifies whether to automatically match the image cache.`,
      allowedValues: [true, false],
    });
    const ipv6AddressCount = new ros.RosParameter(this, 'ipv6AddressCount', {
      type: ros.RosParameterType.NUMBER,
      description: `The number of IPv6 addresses.`,
    });
    const imageRegistryCredential = new ros.RosParameter(this, 'imageRegistryCredential', {
      type: ros.RosParameterType.JSON,
      description: `The information that you need to log on to the container image repository, including the server address, username, and password.`,
      maxLength: 10,
    });
    const spotPriceLimit = new ros.RosParameter(this, 'spotPriceLimit', {
      type: ros.RosParameterType.NUMBER,
      description: `Set the hourly maximum price of the instance. It supports a maximum of 3 decimal places. It takes effect when the value of the parameter SpotStrategy is SpotWithPriceLimit.`,
    });
    const instanceType = new ros.RosParameter(this, 'instanceType', {
      type: ros.RosParameterType.STRING,
      description: `The type of the ECS instance.`,
    });
    const spotStrategy = new ros.RosParameter(this, 'spotStrategy', {
      type: ros.RosParameterType.STRING,
      description: `Instance preemption strategy.\nRanges:\nNoSpot (default): normal pay-as-you-go instances.\nSpotWithPriceLimit: Preemptive instance that sets a cap price.\nSpotAsPriceGo: The system automatically bids, following the current market actual price.`,
      allowedValues: ['NoSpot', 'SpotWithPriceLimit', 'SpotAsPriceGo'],
    });
    const activeDeadlineSeconds = new ros.RosParameter(this, 'activeDeadlineSeconds', {
      type: ros.RosParameterType.NUMBER,
      description: `The validity period in seconds.`,
    });

    const hostAliase = new ros.RosParameter(this, 'hostAliase', {
      type: ros.RosParameterType.JSON,
      description: `Customize the hostname mapping of a container inside the pod`,
    });
    const zoneId = new ros.RosParameter(this, 'zoneId', {
      type: ros.RosParameterType.STRING,
      description: `The ID of the zone in which the instance resides. If you leave the parameter blank, the system assigns a zone for you. The default value is blank.`,
    });
    const terminationGracePeriodSeconds = new ros.RosParameter(this, 'terminationGracePeriodSeconds', {
      type: ros.RosParameterType.NUMBER,
      description: `The buffer time for the program to handle operations before it is stopped.`,
    });
    const switchId = new ros.RosParameter(this, 'switchId', {
      type: ros.RosParameterType.STRING,
      description: `The ID of the specified VSwitch. Currently, ECI instances can only be deployed in VPCs.`,
    });
    const securityGroupId = new ros.RosParameter(this, 'securityGroupId', {
      type: ros.RosParameterType.STRING,
      description: `The ID of the security group to which the instance belongs. Instances in the same security group can access one another.`,
    });
    const slsEnable = new ros.RosParameter(this, 'slsEnable', {
      type: ros.RosParameterType.BOOLEAN,
      description: `Enable user log collection. The default is False.`,
      allowedValues: [true, false],
    });
    const restartPolicy = new ros.RosParameter(this, 'restartPolicy', {
      type: ros.RosParameterType.STRING,
      description: `The policy for restarting the instance. Default value: Always.`,
      allowedValues: ['Always', 'OnFailure', 'Never'],
    });
    const volume = new ros.RosParameter(this, 'volume', {
      type: ros.RosParameterType.JSON,
      description: `The data volume. You can specify a maximum of 20 data volumes.`,
      maxLength: 20,
    });

    const containerGroup = new eci.ContainerGroup(this, 'containerGroup', {
      securityContextSysctl: securityContextSysctl.valueAsAny,
      memory: memory.valueAsNumber,
      initContainer: initContainer.valueAsAny,
      cpu: cpu.valueAsNumber,
      eipInstanceId: eipInstanceId.valueAsString,
      containerGroupName: containerGroupName.valueAsString,
      container: container.valueAsAny,
      imageSnapshotId: imageSnapshotId.valueAsString,
      dnsConfig: dnsConfig.valueAsAny,
      autoMatchImageCache: autoMatchImageCache.valueAsBoolean,
      ipv6AddressCount: ipv6AddressCount.valueAsNumber,
      imageRegistryCredential: imageRegistryCredential.valueAsAny,
      spotPriceLimit: spotPriceLimit.valueAsNumber,
      instanceType: instanceType.valueAsString,
      spotStrategy: spotStrategy.valueAsString,
      activeDeadlineSeconds: activeDeadlineSeconds.valueAsNumber,
      hostAliase: hostAliase.valueAsAny,
      zoneId: zoneId.valueAsString,
      terminationGracePeriodSeconds: terminationGracePeriodSeconds.valueAsNumber,
      vSwitchId: switchId.valueAsString,
      securityGroupId: securityGroupId.valueAsString,
      slsEnable: slsEnable.valueAsBoolean,
      restartPolicy: restartPolicy.valueAsString,
      volume: volume.valueAsAny,
    });

    const internetIp = new ros.RosOutput(this, 'internetIp', {
      description: `Internet IP.`,
      value: containerGroup.attrInternetIp,
    });

    const zoneIdOutput = new ros.RosOutput(this, 'zoneIdOutput', {
      description: `The ID of the zone in which the instance resides. If you leave the parameter blank, the system assigns a zone for you. The default value is blank.`,
      value: containerGroup.attrZoneId,
    });

    const securityGroupIdOutput = new ros.RosOutput(this, 'securityGroupIdOutput', {
      description: `The ID of the zone in which the instance resides. If you leave the parameter blank, the system assigns a zone for you. The default value is blank.`,
      value: containerGroup.attrSecurityGroupId,
    });
  }
}

export class ContainerGroupDeployTest extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const containerName = new ros.RosParameter(this, 'ContainerName', {
      type: ros.RosParameterType.STRING,
      description: `The name of the Container.`,
      defaultValue: 'ros-test-tt',
    });
    const containerImage = new ros.RosParameter(this, 'ContainerImage', {
      type: ros.RosParameterType.STRING,
      description: `The name of the Image.`,
      defaultValue: 'busybox',
    });
    const containerGroupName = new ros.RosParameter(this, 'ContainerGroupName', {
      type: ros.RosParameterType.STRING,
      description: `The name of the ContainerGroup.`,
      defaultValue: 'ros-test-tt',
    });

    const restartPolicy = new ros.RosParameter(this, 'RestartPolicy', {
      type: ros.RosParameterType.STRING,
      description: `The policy for restarting the instance. Default value: Always.`,
      allowedValues: ['Always', 'OnFailure', 'Never'],
      defaultValue: 'Always',
    });

    const vSwitchName = new ros.RosParameter(this, 'VSwitchName', {
      type: ros.RosParameterType.STRING,
      defaultValue: 'ros-test-tt',
    });

    const vpcName = new ros.RosParameter(this, 'VpcName', {
      type: ros.RosParameterType.STRING,
      defaultValue: 'ros-test-tt',
    });

    const slsEnable = new ros.RosParameter(this, 'SlsEnable', {
      type: ros.RosParameterType.BOOLEAN,
      description: `Enable user log collection. The default is false.`,
      allowedValues: [true, false],
      defaultValue: false,
    });

    const vpc = new ecs.Vpc(this, 'VPC', {
      vpcName: vpcName.valueAsString,
      cidrBlock: '192.168.0.0/16',
    });

    const vSwitch = new ecs.VSwitch(this, 'VSwitch', {
      vpcId: vpc.attrVpcId,
      zoneId: ros.Fn.select('0', ros.Fn.getAzs(ros.RosPseudo.region)),
      vSwitchName: vSwitchName.valueAsString,
      cidrBlock: '192.168.10.0/24',
    });

    vSwitch.addDependency(vpc);

    const sg = new ecs.SecurityGroup(this, 'SG', {
      vpcId: vpc.attrVpcId,
    });

    sg.addDependency(vpc);

    const port1: eci.ContainerGroupProperty.PortProperty = {
      port: 8080,
      protocol: 'TCP',
    };

    const port2: eci.ContainerGroupProperty.PortProperty = {
      port: 8888,
      protocol: 'TCP',
    };

    const container: eci.ContainerGroupProperty.ContainerProperty = {
      name: containerName.valueAsString,
      image: containerImage.valueAsString,
      cpu: 2,
      memory: 4,
      port: [port1, port2],
    };

    const containerGroup = new eci.ContainerGroup(this, 'ContainerGroup', {
      container: [container],
      securityGroupId: sg.attrSecurityGroupId,
      containerGroupName: containerGroupName.valueAsString,
      vSwitchId: vSwitch.attrVSwitchId,
      restartPolicy: restartPolicy.valueAsString,
      slsEnable: slsEnable.valueAsBoolean,
      cpu: 2,
      memory: 4,
    });
    const containerGroupId = new ros.RosOutput(this, 'ContainerGroupId', {
      value: containerGroup.attrContainerGroupId,
    });

    const containerGroupNameOutput = new ros.RosOutput(this, 'ContainerGroupNameOutput', {
      value: containerGroup.attrContainerGroupName,
    });
  }
}
