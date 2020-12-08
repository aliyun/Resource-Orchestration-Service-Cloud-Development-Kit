import * as ros from '@alicloud/ros-cdk-core'
import * as ecs from '@alicloud/ecs';
import * as cr from '@alicloud/cr';
import * as ess from '@alicloud/ess';

export class invalidStringMaxLen extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);
    let invalidDesc: string = '';
    for (let i = 0; i < 150; i++) {
      invalidDesc += 'test';
    }
    const sgProp: ecs.SecurityGroupProperty.SecurityGroupEgressProperty = {
      description: invalidDesc,
      ipProtocol: 'test',
      portRange: '1/100',
    };
    const sg = new ecs.SecurityGroup(this, 'sg', {
      description: invalidDesc,
      securityGroupEgress: [sgProp],
    });
  }
}

export class invalidStringMinLen extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const namespace = new cr.Namespace(this, 'namespace', {
      namespace: 'i',
    });
  }
}

export class invalidListMaxLen extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const assignIpv6Addresses = new ecs.AssignIpv6Addresses(this, 'AssignIpv6Addresses', {
      ipv6Addresses: ['ip1', 'ip2'],
      networkInterfaceId: 'interfaceId',
    });
  }
}

export class invalidListMinLen extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);
    const runCommand = new ecs.RunCommand(this, 'RunCommand', {
      instanceIds: [],
      type: 'text',
      commandContent: 'content',
    });
  }
}

export class invalidMinRange extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);
    const autoSnapshotPolicy = new ecs.AutoSnapshotPolicy(this, 'AutoSnapshotPolicy', {
      retentionDays: -10,
      diskIds: [],
      repeatWeekdays: [11],
      timePoints: [22],
    });
  }
}

export class invalidMaxRange extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);
    const bandwidthPackage = new ecs.BandwidthPackage(this, 'BandwidthPackage', {
      ipCount: 10,
      bandwidth: 10,
      natGatewayId: 'gatewayId',
    });
  }
}

export class invalidNumberAllowedValueRange extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);
    const dedicatedHost = new ecs.DedicatedHost(this, 'DedicatedHost', {
      autoRenewPeriod: 13,
      dedicatedHostType: 'type',
    });
  }
}

export class invalidStringAllowedValueRange extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);
    const disk = new ecs.Disk(this, 'Disk', {
      diskCategory: 'invalidType',
      zoneId: 'cn-beijing',
    });
  }
}

export class invalidAllowedPattern extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);
    const lifecycleHook = new ess.LifecycleHook(this, 'LifecycleHook', {
      lifecycleHookName: '!d2d2d2d23d2dsfgg45',
      scalingGroupId: 'id',
      lifecycleTransition: 'lifecycleTransition',
    });
  }
}
