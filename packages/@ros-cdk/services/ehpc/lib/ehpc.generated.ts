// Generated from the AliCloud ROS Resource Specification

import * as ros from '@ros-cdk/core';

/**
 * Properties for defining a `ALIYUN::EHPC::Cluster`
 */
export interface RosClusterProps {

    /**
     * @Property ecsOrderComputeCount: Computing the number of cluster nodes, Range: 1-99.
     */
    readonly ecsOrderComputeCount: number;

    /**
     * @Property ecsOrderComputeInstanceType: Cluster computing node instance specifications.
     */
    readonly ecsOrderComputeInstanceType: string;

    /**
     * @Property ecsOrderLoginCount: Log cluster node number, which ranges from: 1-99.
     */
    readonly ecsOrderLoginCount: number;

    /**
     * @Property ecsOrderLoginInstanceType: Log cluster node instance specifications.
     */
    readonly ecsOrderLoginInstanceType: string;

    /**
     * @Property ecsOrderManagerInstanceType: Cluster control node instance specifications.
     */
    readonly ecsOrderManagerInstanceType: string;

    /**
     * @Property ehpcVersion: E-HPC product version numbers, currently supports 1.0.0
     */
    readonly ehpcVersion: string;

    /**
     * @Property name: Cluster name. 2-64 characters in length, allowing only include Chinese, letters, numbers, dashes (-) and underscore (_), must begin with a letter or Chinese.
     */
    readonly name: string;

    /**
     * @Property osTag: Operating system image tag. You can call ListImages API to query.
     */
    readonly osTag: string;

    /**
     * @Property volumeId: Ali cloud NAS instance Id. Currently it does not support automatic creation Ali cloud NAS instance.
     */
    readonly volumeId: string;

    /**
     * @Property volumeMountpoint: NAS vpc mount point. Currently it does not support automatic creation Ali cloud NAS mount point.
     */
    readonly volumeMountpoint: string;

    /**
     * @Property vSwitchId: VPC in switch ID. Products currently only supports VPC network.
     */
    readonly vSwitchId: string;

    /**
     * @Property accountType: Domain service account types, currently supports nis.
     */
    readonly accountType?: string;

    /**
     * @Property application: Application software tag (SoftwareTag) list, You can call ListSoftwares API to query.
     */
    readonly application?: Array<RosCluster.ApplicationProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property autoRenew: true: automatic renewals; false: no automatic renewals.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * @Property autoRenewPeriod: Duration of each automatic renewals, AutoRenew take effect when AutoRenew is True.
     */
    readonly autoRenewPeriod?: number;

    /**
     * @Property computeSpotPriceLimit: Set an example of the highest price per hour, are floating-point values, in the range of the current price range.
     */
    readonly computeSpotPriceLimit?: string;

    /**
     * @Property computeSpotStrategy: Compute nodes bidding strategy, value NoSpot, SpotWithPriceLimit or SpotAsPriceGo
     */
    readonly computeSpotStrategy?: string;

    /**
     * @Property deployMode: Deployment mode:
     * Standard: account node + scheduling node + login node + computing node.
     * Advanced: HA mode.
     * Simple: (account + schedule) node + login node + compute node.
     * Tiny: (account + scheduling + login) node + compute node.
     * OneBox: (account + scheduling + login + compute) node + more compute nodes.
     */
    readonly deployMode?: string;

    /**
     * @Property description: Cluster description, 2 to 128 characters.
     */
    readonly description?: string;

    /**
     * @Property ecsChargeType: ECS instance payment type, PostPaid: Pay-As-You-Go.PrePaid: Subscription.If you choose PrePaid, automatic renewal will be enabled by default, and closed when node is released.
     */
    readonly ecsChargeType?: string;

    /**
     * @Property haEnable: Availability is turned on, when turned on, the role of each control cluster will use two standby instances.
     */
    readonly haEnable?: boolean | ros.IResolvable;

    /**
     * @Property imageId: Mirror Id, if ImageType a system, based on the image ID is determined only according OsTag; if self, others, or marketplace, ImageId is mandatory.
     */
    readonly imageId?: string;

    /**
     * @Property imageOwnerAlias: Mirror type: system, self, others or marketplace
     */
    readonly imageOwnerAlias?: string;

    /**
     * @Property jobQueue: Computing node added queue
     */
    readonly jobQueue?: string;

    /**
     * @Property keyPairName: Key pair name.
     */
    readonly keyPairName?: string;

    /**
     * @Property password: Root password of jump server (login node). 8 to 30 characters, must contain three (upper and lower case letters, numbers and special symbols). ! Supports the following special characters :() `~ @ # $% ^ & * - + = | {} []:; '<>, / Be sure to use the HTTPS protocol API call to avoid password leaks that may occur.?.
     */
    readonly password?: string;

    /**
     * @Property period: The purchase of long resources, units: week / month / year. When the value of the parameter EcsChargeType when PrePaid take effect and for the selected value will be.
     */
    readonly period?: number;

    /**
     * @Property periodUnit: The purchase of long-resources unit. Alternatively value Week / Month / year.
     */
    readonly periodUnit?: string;

    /**
     * @Property postInstallScript:
     */
    readonly postInstallScript?: Array<RosCluster.PostInstallScriptProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property remoteDirectory: Mount shared storage remote directory. The final path to the mount point and mount the remote directory composition: NasMountpoint: / RemoteDirectory
     */
    readonly remoteDirectory?: string;

    /**
     * @Property sccClusterId: When SCC models, if you pass this field, then the specified SccCluster create Scc instance, otherwise it will create an instance for the user.
     */
    readonly sccClusterId?: string;

    /**
     * @Property schedulerType: The scheduler type, currently support pbs.
     */
    readonly schedulerType?: string;

    /**
     * @Property securityGroupId: Security group ID.
     */
    readonly securityGroupId?: string;

    /**
     * @Property securityGroupName: If you do not use an existing security group (SecurityGroupId is empty), then use this name to create a new security group, the default policy. Format Requirements Reference ECS security group name.
     */
    readonly securityGroupName?: string;

    /**
     * @Property volumeProtocol: Shared storage network protocols, currently only supports nfs.
     */
    readonly volumeProtocol?: string;

    /**
     * @Property volumeType: Network shared storage types, currently supports only Ali cloud NAS.
     */
    readonly volumeType?: string;

    /**
     * @Property zoneId: Available area ID.
     */
    readonly zoneId?: string;
}

/**
 * Determine whether the given properties match those of a `RosClusterProps`
 *
 * @param properties - the TypeScript properties of a `RosClusterProps`
 *
 * @returns the result of the validation.
 */
function RosClusterPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.imageOwnerAlias && (typeof properties.imageOwnerAlias) !== 'object') {
        errors.collect(ros.propertyValidator('imageOwnerAlias', ros.validateAllowedValues)({
          data: properties.imageOwnerAlias,
          allowedValues: ["system","self","others","marketplace"],
        }));
    }
    errors.collect(ros.propertyValidator('imageOwnerAlias', ros.validateString)(properties.imageOwnerAlias));
    if(properties.volumeProtocol && (typeof properties.volumeProtocol) !== 'object') {
        errors.collect(ros.propertyValidator('volumeProtocol', ros.validateAllowedValues)({
          data: properties.volumeProtocol,
          allowedValues: ["nfs"],
        }));
    }
    errors.collect(ros.propertyValidator('volumeProtocol', ros.validateString)(properties.volumeProtocol));
    errors.collect(ros.propertyValidator('ecsOrderComputeCount', ros.requiredValidator)(properties.ecsOrderComputeCount));
    if(properties.ecsOrderComputeCount && (typeof properties.ecsOrderComputeCount) !== 'object') {
        errors.collect(ros.propertyValidator('ecsOrderComputeCount', ros.validateRange)({
            data: properties.ecsOrderComputeCount,
            min: 1,
            max: 99,
          }));
    }
    errors.collect(ros.propertyValidator('ecsOrderComputeCount', ros.validateNumber)(properties.ecsOrderComputeCount));
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: 2,
            max: 128,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('securityGroupName', ros.validateString)(properties.securityGroupName));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateBoolean)(properties.autoRenew));
    errors.collect(ros.propertyValidator('computeSpotPriceLimit', ros.validateString)(properties.computeSpotPriceLimit));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    errors.collect(ros.propertyValidator('volumeId', ros.requiredValidator)(properties.volumeId));
    errors.collect(ros.propertyValidator('volumeId', ros.validateString)(properties.volumeId));
    if(properties.volumeType && (typeof properties.volumeType) !== 'object') {
        errors.collect(ros.propertyValidator('volumeType', ros.validateAllowedValues)({
          data: properties.volumeType,
          allowedValues: ["nas"],
        }));
    }
    errors.collect(ros.propertyValidator('volumeType', ros.validateString)(properties.volumeType));
    if(properties.deployMode && (typeof properties.deployMode) !== 'object') {
        errors.collect(ros.propertyValidator('deployMode', ros.validateAllowedValues)({
          data: properties.deployMode,
          allowedValues: ["Standard","Advanced","Simple","Tiny","OneBox"],
        }));
    }
    errors.collect(ros.propertyValidator('deployMode', ros.validateString)(properties.deployMode));
    errors.collect(ros.propertyValidator('postInstallScript', ros.listValidator(RosCluster_PostInstallScriptPropertyValidator))(properties.postInstallScript));
    errors.collect(ros.propertyValidator('imageId', ros.validateString)(properties.imageId));
    if(properties.password && (Array.isArray(properties.password) || (typeof properties.password) === 'string')) {
        errors.collect(ros.propertyValidator('password', ros.validateLength)({
            data: properties.password.length,
            min: 8,
            max: 30,
          }));
    }
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateNumber)(properties.autoRenewPeriod));
    errors.collect(ros.propertyValidator('keyPairName', ros.validateString)(properties.keyPairName));
    errors.collect(ros.propertyValidator('remoteDirectory', ros.validateString)(properties.remoteDirectory));
    errors.collect(ros.propertyValidator('sccClusterId', ros.validateString)(properties.sccClusterId));
    errors.collect(ros.propertyValidator('ecsOrderLoginInstanceType', ros.requiredValidator)(properties.ecsOrderLoginInstanceType));
    errors.collect(ros.propertyValidator('ecsOrderLoginInstanceType', ros.validateString)(properties.ecsOrderLoginInstanceType));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('jobQueue', ros.validateString)(properties.jobQueue));
    errors.collect(ros.propertyValidator('ecsOrderLoginCount', ros.requiredValidator)(properties.ecsOrderLoginCount));
    if(properties.ecsOrderLoginCount && (typeof properties.ecsOrderLoginCount) !== 'object') {
        errors.collect(ros.propertyValidator('ecsOrderLoginCount', ros.validateRange)({
            data: properties.ecsOrderLoginCount,
            min: 1,
            max: 99,
          }));
    }
    errors.collect(ros.propertyValidator('ecsOrderLoginCount', ros.validateNumber)(properties.ecsOrderLoginCount));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    if(properties.schedulerType && (typeof properties.schedulerType) !== 'object') {
        errors.collect(ros.propertyValidator('schedulerType', ros.validateAllowedValues)({
          data: properties.schedulerType,
          allowedValues: ["pbs"],
        }));
    }
    errors.collect(ros.propertyValidator('schedulerType', ros.validateString)(properties.schedulerType));
    if(properties.computeSpotStrategy && (typeof properties.computeSpotStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('computeSpotStrategy', ros.validateAllowedValues)({
          data: properties.computeSpotStrategy,
          allowedValues: ["NoSpot","SpotWithPriceLimit","SpotAsPriceGo"],
        }));
    }
    errors.collect(ros.propertyValidator('computeSpotStrategy', ros.validateString)(properties.computeSpotStrategy));
    if(properties.accountType && (typeof properties.accountType) !== 'object') {
        errors.collect(ros.propertyValidator('accountType', ros.validateAllowedValues)({
          data: properties.accountType,
          allowedValues: ["nis"],
        }));
    }
    errors.collect(ros.propertyValidator('accountType', ros.validateString)(properties.accountType));
    errors.collect(ros.propertyValidator('ecsOrderManagerInstanceType', ros.requiredValidator)(properties.ecsOrderManagerInstanceType));
    errors.collect(ros.propertyValidator('ecsOrderManagerInstanceType', ros.validateString)(properties.ecsOrderManagerInstanceType));
    errors.collect(ros.propertyValidator('ehpcVersion', ros.requiredValidator)(properties.ehpcVersion));
    if(properties.ehpcVersion && (typeof properties.ehpcVersion) !== 'object') {
        errors.collect(ros.propertyValidator('ehpcVersion', ros.validateAllowedValues)({
          data: properties.ehpcVersion,
          allowedValues: ["1.0.0"],
        }));
    }
    errors.collect(ros.propertyValidator('ehpcVersion', ros.validateString)(properties.ehpcVersion));
    errors.collect(ros.propertyValidator('volumeMountpoint', ros.requiredValidator)(properties.volumeMountpoint));
    errors.collect(ros.propertyValidator('volumeMountpoint', ros.validateString)(properties.volumeMountpoint));
    errors.collect(ros.propertyValidator('ecsOrderComputeInstanceType', ros.requiredValidator)(properties.ecsOrderComputeInstanceType));
    errors.collect(ros.propertyValidator('ecsOrderComputeInstanceType', ros.validateString)(properties.ecsOrderComputeInstanceType));
    errors.collect(ros.propertyValidator('haEnable', ros.validateBoolean)(properties.haEnable));
    errors.collect(ros.propertyValidator('osTag', ros.requiredValidator)(properties.osTag));
    errors.collect(ros.propertyValidator('osTag', ros.validateString)(properties.osTag));
    errors.collect(ros.propertyValidator('ecsChargeType', ros.validateString)(properties.ecsChargeType));
    errors.collect(ros.propertyValidator('application', ros.listValidator(RosCluster_ApplicationPropertyValidator))(properties.application));
    if(properties.periodUnit && (typeof properties.periodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('periodUnit', ros.validateAllowedValues)({
          data: properties.periodUnit,
          allowedValues: ["Week","Month","Year"],
        }));
    }
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    return errors.wrap('supplied properties not correct for "RosClusterProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EHPC::Cluster` resource
 *
 * @param properties - the TypeScript properties of a `RosClusterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EHPC::Cluster` resource.
 */
// @ts-ignore TS6133
function rosClusterPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosClusterPropsValidator(properties).assertSuccess();
    }
    return {
      EcsOrderComputeCount: ros.numberToRosTemplate(properties.ecsOrderComputeCount),
      EcsOrderComputeInstanceType: ros.stringToRosTemplate(properties.ecsOrderComputeInstanceType),
      EcsOrderLoginCount: ros.numberToRosTemplate(properties.ecsOrderLoginCount),
      EcsOrderLoginInstanceType: ros.stringToRosTemplate(properties.ecsOrderLoginInstanceType),
      EcsOrderManagerInstanceType: ros.stringToRosTemplate(properties.ecsOrderManagerInstanceType),
      EhpcVersion: ros.stringToRosTemplate(properties.ehpcVersion),
      Name: ros.stringToRosTemplate(properties.name),
      OsTag: ros.stringToRosTemplate(properties.osTag),
      VolumeId: ros.stringToRosTemplate(properties.volumeId),
      VolumeMountpoint: ros.stringToRosTemplate(properties.volumeMountpoint),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      AccountType: ros.stringToRosTemplate(properties.accountType),
      Application: ros.listMapper(rosClusterApplicationPropertyToRosTemplate)(properties.application),
      AutoRenew: ros.booleanToRosTemplate(properties.autoRenew),
      AutoRenewPeriod: ros.numberToRosTemplate(properties.autoRenewPeriod),
      ComputeSpotPriceLimit: ros.stringToRosTemplate(properties.computeSpotPriceLimit),
      ComputeSpotStrategy: ros.stringToRosTemplate(properties.computeSpotStrategy),
      DeployMode: ros.stringToRosTemplate(properties.deployMode),
      Description: ros.stringToRosTemplate(properties.description),
      EcsChargeType: ros.stringToRosTemplate(properties.ecsChargeType),
      HaEnable: ros.booleanToRosTemplate(properties.haEnable),
      ImageId: ros.stringToRosTemplate(properties.imageId),
      ImageOwnerAlias: ros.stringToRosTemplate(properties.imageOwnerAlias),
      JobQueue: ros.stringToRosTemplate(properties.jobQueue),
      KeyPairName: ros.stringToRosTemplate(properties.keyPairName),
      Password: ros.stringToRosTemplate(properties.password),
      Period: ros.numberToRosTemplate(properties.period),
      PeriodUnit: ros.stringToRosTemplate(properties.periodUnit),
      PostInstallScript: ros.listMapper(rosClusterPostInstallScriptPropertyToRosTemplate)(properties.postInstallScript),
      RemoteDirectory: ros.stringToRosTemplate(properties.remoteDirectory),
      SccClusterId: ros.stringToRosTemplate(properties.sccClusterId),
      SchedulerType: ros.stringToRosTemplate(properties.schedulerType),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      SecurityGroupName: ros.stringToRosTemplate(properties.securityGroupName),
      VolumeProtocol: ros.stringToRosTemplate(properties.volumeProtocol),
      VolumeType: ros.stringToRosTemplate(properties.volumeType),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * A ROS template type:  `ALIYUN::EHPC::Cluster`
 */
export class RosCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EHPC::Cluster";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ClusterId: Cluster Id.
     */
    public readonly attrClusterId: any;

    /**
     * @Attribute EcsInfo: A data structure describing the number and specifications of ECS for various components of the cluster.
You will get results similar to the following: EcsInfo: {"Manager": {"Count": 2, "InstanceType": "ecs.n1.large"}, "Compute": {"Count": 8, "InstanceType": "ecs.n1.large"}, "Login": {"Count": 1, "InstanceType": "ecs.n1.large"}}
     */
    public readonly attrEcsInfo: any;

    /**
     * @Attribute Name: Cluster name.
     */
    public readonly attrName: any;

    /**
     * @Attribute SecurityGroupId: Security group ID.
     */
    public readonly attrSecurityGroupId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property ecsOrderComputeCount: Computing the number of cluster nodes, Range: 1-99.
     */
    public ecsOrderComputeCount: number;

    /**
     * @Property ecsOrderComputeInstanceType: Cluster computing node instance specifications.
     */
    public ecsOrderComputeInstanceType: string;

    /**
     * @Property ecsOrderLoginCount: Log cluster node number, which ranges from: 1-99.
     */
    public ecsOrderLoginCount: number;

    /**
     * @Property ecsOrderLoginInstanceType: Log cluster node instance specifications.
     */
    public ecsOrderLoginInstanceType: string;

    /**
     * @Property ecsOrderManagerInstanceType: Cluster control node instance specifications.
     */
    public ecsOrderManagerInstanceType: string;

    /**
     * @Property ehpcVersion: E-HPC product version numbers, currently supports 1.0.0
     */
    public ehpcVersion: string;

    /**
     * @Property name: Cluster name. 2-64 characters in length, allowing only include Chinese, letters, numbers, dashes (-) and underscore (_), must begin with a letter or Chinese.
     */
    public name: string;

    /**
     * @Property osTag: Operating system image tag. You can call ListImages API to query.
     */
    public osTag: string;

    /**
     * @Property volumeId: Ali cloud NAS instance Id. Currently it does not support automatic creation Ali cloud NAS instance.
     */
    public volumeId: string;

    /**
     * @Property volumeMountpoint: NAS vpc mount point. Currently it does not support automatic creation Ali cloud NAS mount point.
     */
    public volumeMountpoint: string;

    /**
     * @Property vSwitchId: VPC in switch ID. Products currently only supports VPC network.
     */
    public vSwitchId: string;

    /**
     * @Property accountType: Domain service account types, currently supports nis.
     */
    public accountType: string | undefined;

    /**
     * @Property application: Application software tag (SoftwareTag) list, You can call ListSoftwares API to query.
     */
    public application: Array<RosCluster.ApplicationProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property autoRenew: true: automatic renewals; false: no automatic renewals.
     */
    public autoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property autoRenewPeriod: Duration of each automatic renewals, AutoRenew take effect when AutoRenew is True.
     */
    public autoRenewPeriod: number | undefined;

    /**
     * @Property computeSpotPriceLimit: Set an example of the highest price per hour, are floating-point values, in the range of the current price range.
     */
    public computeSpotPriceLimit: string | undefined;

    /**
     * @Property computeSpotStrategy: Compute nodes bidding strategy, value NoSpot, SpotWithPriceLimit or SpotAsPriceGo
     */
    public computeSpotStrategy: string | undefined;

    /**
     * @Property deployMode: Deployment mode:
     * Standard: account node + scheduling node + login node + computing node.
     * Advanced: HA mode.
     * Simple: (account + schedule) node + login node + compute node.
     * Tiny: (account + scheduling + login) node + compute node.
     * OneBox: (account + scheduling + login + compute) node + more compute nodes.
     */
    public deployMode: string | undefined;

    /**
     * @Property description: Cluster description, 2 to 128 characters.
     */
    public description: string | undefined;

    /**
     * @Property ecsChargeType: ECS instance payment type, PostPaid: Pay-As-You-Go.PrePaid: Subscription.If you choose PrePaid, automatic renewal will be enabled by default, and closed when node is released.
     */
    public ecsChargeType: string | undefined;

    /**
     * @Property haEnable: Availability is turned on, when turned on, the role of each control cluster will use two standby instances.
     */
    public haEnable: boolean | ros.IResolvable | undefined;

    /**
     * @Property imageId: Mirror Id, if ImageType a system, based on the image ID is determined only according OsTag; if self, others, or marketplace, ImageId is mandatory.
     */
    public imageId: string | undefined;

    /**
     * @Property imageOwnerAlias: Mirror type: system, self, others or marketplace
     */
    public imageOwnerAlias: string | undefined;

    /**
     * @Property jobQueue: Computing node added queue
     */
    public jobQueue: string | undefined;

    /**
     * @Property keyPairName: Key pair name.
     */
    public keyPairName: string | undefined;

    /**
     * @Property password: Root password of jump server (login node). 8 to 30 characters, must contain three (upper and lower case letters, numbers and special symbols). ! Supports the following special characters :() `~ @ # $% ^ & * - + = | {} []:; '<>, / Be sure to use the HTTPS protocol API call to avoid password leaks that may occur.?.
     */
    public password: string | undefined;

    /**
     * @Property period: The purchase of long resources, units: week / month / year. When the value of the parameter EcsChargeType when PrePaid take effect and for the selected value will be.
     */
    public period: number | undefined;

    /**
     * @Property periodUnit: The purchase of long-resources unit. Alternatively value Week / Month / year.
     */
    public periodUnit: string | undefined;

    /**
     * @Property postInstallScript:
     */
    public postInstallScript: Array<RosCluster.PostInstallScriptProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property remoteDirectory: Mount shared storage remote directory. The final path to the mount point and mount the remote directory composition: NasMountpoint: / RemoteDirectory
     */
    public remoteDirectory: string | undefined;

    /**
     * @Property sccClusterId: When SCC models, if you pass this field, then the specified SccCluster create Scc instance, otherwise it will create an instance for the user.
     */
    public sccClusterId: string | undefined;

    /**
     * @Property schedulerType: The scheduler type, currently support pbs.
     */
    public schedulerType: string | undefined;

    /**
     * @Property securityGroupId: Security group ID.
     */
    public securityGroupId: string | undefined;

    /**
     * @Property securityGroupName: If you do not use an existing security group (SecurityGroupId is empty), then use this name to create a new security group, the default policy. Format Requirements Reference ECS security group name.
     */
    public securityGroupName: string | undefined;

    /**
     * @Property volumeProtocol: Shared storage network protocols, currently only supports nfs.
     */
    public volumeProtocol: string | undefined;

    /**
     * @Property volumeType: Network shared storage types, currently supports only Ali cloud NAS.
     */
    public volumeType: string | undefined;

    /**
     * @Property zoneId: Available area ID.
     */
    public zoneId: string | undefined;

    /**
     * Create a new `ALIYUN::EHPC::Cluster`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClusterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCluster.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterId = ros.Token.asString(this.getAtt('ClusterId'));
        this.attrEcsInfo = ros.Token.asString(this.getAtt('EcsInfo'));
        this.attrName = ros.Token.asString(this.getAtt('Name'));
        this.attrSecurityGroupId = ros.Token.asString(this.getAtt('SecurityGroupId'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.ecsOrderComputeCount = props.ecsOrderComputeCount;
        this.ecsOrderComputeInstanceType = props.ecsOrderComputeInstanceType;
        this.ecsOrderLoginCount = props.ecsOrderLoginCount;
        this.ecsOrderLoginInstanceType = props.ecsOrderLoginInstanceType;
        this.ecsOrderManagerInstanceType = props.ecsOrderManagerInstanceType;
        this.ehpcVersion = props.ehpcVersion;
        this.name = props.name;
        this.osTag = props.osTag;
        this.volumeId = props.volumeId;
        this.volumeMountpoint = props.volumeMountpoint;
        this.vSwitchId = props.vSwitchId;
        this.accountType = props.accountType;
        this.application = props.application;
        this.autoRenew = props.autoRenew;
        this.autoRenewPeriod = props.autoRenewPeriod;
        this.computeSpotPriceLimit = props.computeSpotPriceLimit;
        this.computeSpotStrategy = props.computeSpotStrategy;
        this.deployMode = props.deployMode;
        this.description = props.description;
        this.ecsChargeType = props.ecsChargeType;
        this.haEnable = props.haEnable;
        this.imageId = props.imageId;
        this.imageOwnerAlias = props.imageOwnerAlias;
        this.jobQueue = props.jobQueue;
        this.keyPairName = props.keyPairName;
        this.password = props.password;
        this.period = props.period;
        this.periodUnit = props.periodUnit;
        this.postInstallScript = props.postInstallScript;
        this.remoteDirectory = props.remoteDirectory;
        this.sccClusterId = props.sccClusterId;
        this.schedulerType = props.schedulerType;
        this.securityGroupId = props.securityGroupId;
        this.securityGroupName = props.securityGroupName;
        this.volumeProtocol = props.volumeProtocol;
        this.volumeType = props.volumeType;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            ecsOrderComputeCount: this.ecsOrderComputeCount,
            ecsOrderComputeInstanceType: this.ecsOrderComputeInstanceType,
            ecsOrderLoginCount: this.ecsOrderLoginCount,
            ecsOrderLoginInstanceType: this.ecsOrderLoginInstanceType,
            ecsOrderManagerInstanceType: this.ecsOrderManagerInstanceType,
            ehpcVersion: this.ehpcVersion,
            name: this.name,
            osTag: this.osTag,
            volumeId: this.volumeId,
            volumeMountpoint: this.volumeMountpoint,
            vSwitchId: this.vSwitchId,
            accountType: this.accountType,
            application: this.application,
            autoRenew: this.autoRenew,
            autoRenewPeriod: this.autoRenewPeriod,
            computeSpotPriceLimit: this.computeSpotPriceLimit,
            computeSpotStrategy: this.computeSpotStrategy,
            deployMode: this.deployMode,
            description: this.description,
            ecsChargeType: this.ecsChargeType,
            haEnable: this.haEnable,
            imageId: this.imageId,
            imageOwnerAlias: this.imageOwnerAlias,
            jobQueue: this.jobQueue,
            keyPairName: this.keyPairName,
            password: this.password,
            period: this.period,
            periodUnit: this.periodUnit,
            postInstallScript: this.postInstallScript,
            remoteDirectory: this.remoteDirectory,
            sccClusterId: this.sccClusterId,
            schedulerType: this.schedulerType,
            securityGroupId: this.securityGroupId,
            securityGroupName: this.securityGroupName,
            volumeProtocol: this.volumeProtocol,
            volumeType: this.volumeType,
            zoneId: this.zoneId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosClusterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosCluster {
    /**
     * @stability external
     */
    export interface ApplicationProperty {
        /**
         * @Property tag: Application software tag (SoftwareTag), for example OpenMPI_11.1.
         */
        readonly tag: string;
    }
}
/**
 * Determine whether the given properties match those of a `ApplicationProperty`
 *
 * @param properties - the TypeScript properties of a `ApplicationProperty`
 *
 * @returns the result of the validation.
 */
function RosCluster_ApplicationPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('tag', ros.requiredValidator)(properties.tag));
    errors.collect(ros.propertyValidator('tag', ros.validateString)(properties.tag));
    return errors.wrap('supplied properties not correct for "ApplicationProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EHPC::Cluster.Application` resource
 *
 * @param properties - the TypeScript properties of a `ApplicationProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EHPC::Cluster.Application` resource.
 */
// @ts-ignore TS6133
function rosClusterApplicationPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCluster_ApplicationPropertyValidator(properties).assertSuccess();
    return {
      Tag: ros.stringToRosTemplate(properties.tag),
    };
}

export namespace RosCluster {
    /**
     * @stability external
     */
    export interface PostInstallScriptProperty {
        /**
         * @Property args: N-th (n numbered starting from 1, you can have multiple, maximum 16) execution parameters after the installation script.
         */
        readonly args?: string;
        /**
         * @Property url: N-th (n numbered starting with 1, can have multiple, maximum 16) after installation script Download.
         */
        readonly url?: string;
    }
}
/**
 * Determine whether the given properties match those of a `PostInstallScriptProperty`
 *
 * @param properties - the TypeScript properties of a `PostInstallScriptProperty`
 *
 * @returns the result of the validation.
 */
function RosCluster_PostInstallScriptPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('args', ros.validateString)(properties.args));
    errors.collect(ros.propertyValidator('url', ros.validateString)(properties.url));
    return errors.wrap('supplied properties not correct for "PostInstallScriptProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EHPC::Cluster.PostInstallScript` resource
 *
 * @param properties - the TypeScript properties of a `PostInstallScriptProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EHPC::Cluster.PostInstallScript` resource.
 */
// @ts-ignore TS6133
function rosClusterPostInstallScriptPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCluster_PostInstallScriptPropertyValidator(properties).assertSuccess();
    return {
      Args: ros.stringToRosTemplate(properties.args),
      Url: ros.stringToRosTemplate(properties.url),
    };
}
