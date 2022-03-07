// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::EHPC::Cluster`
 */
export interface RosClusterProps {

    /**
     * @Property ecsOrderComputeCount: Computing node number, which ranges from: 1-99.
     */
    readonly ecsOrderComputeCount: number | ros.IResolvable;

    /**
     * @Property ecsOrderComputeInstanceType: Cluster computing node instance specifications.
     */
    readonly ecsOrderComputeInstanceType: string | ros.IResolvable;

    /**
     * @Property ecsOrderLoginCount: Login node number can only be 1.
     */
    readonly ecsOrderLoginCount: number | ros.IResolvable;

    /**
     * @Property ecsOrderLoginInstanceType: Log cluster node instance specifications.
     */
    readonly ecsOrderLoginInstanceType: string | ros.IResolvable;

    /**
     * @Property ecsOrderManagerInstanceType: Cluster control node instance specifications.
     */
    readonly ecsOrderManagerInstanceType: string | ros.IResolvable;

    /**
     * @Property name: Cluster name. 2-64 characters in length, allowing only include Chinese, letters, numbers, dashes (-) and underscore (_), must begin with a letter or Chinese.
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property osTag: Operating system image tag. You can call ListImages API to query.
     */
    readonly osTag: string | ros.IResolvable;

    /**
     * @Property vSwitchId: VPC in switch ID. Products currently only supports VPC network.
     */
    readonly vSwitchId: string | ros.IResolvable;

    /**
     * @Property accountType: The service type of the domain account. Valid values:
     * nis
     * ldap
     * Default value: nis
     */
    readonly accountType?: string | ros.IResolvable;

    /**
     * @Property additionalVolumes:
     */
    readonly additionalVolumes?: Array<RosCluster.AdditionalVolumesProperty | ros.IResolvable> | ros.IResolvable;

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
    readonly autoRenewPeriod?: number | ros.IResolvable;

    /**
     * @Property clientVersion: The version of the E-HPC client. By default, the parameter is set to the latest version number.
     * You can call the ListCurrentClientVersion operation to query the current version of the E-HPC client.
     */
    readonly clientVersion?: string | ros.IResolvable;

    /**
     * @Property computeEnableHt: Specifies whether the compute nodes support hyper-threading. Valid values:
     * true: Hyper-threading is supported.
     * false: Hyper-threading is not supported.
     * Default value: true
     */
    readonly computeEnableHt?: boolean | ros.IResolvable;

    /**
     * @Property computeSpotPriceLimit: Set an example of the highest price per hour, are floating-point values, in the range of the current price range.
     */
    readonly computeSpotPriceLimit?: string | ros.IResolvable;

    /**
     * @Property computeSpotStrategy: Compute nodes bidding strategy, value NoSpot, SpotWithPriceLimit or SpotAsPriceGo
     */
    readonly computeSpotStrategy?: string | ros.IResolvable;

    /**
     * @Property deployMode: The mode in which the cluster is deployed. Valid values:
     * Standard: An account node, a scheduling node, a logon node, and multiple compute nodes are separately deployed.
     * Simple: A management node, a logon node, and multiple compute nodes are deployed. The management node consists of an account node and a scheduling node. The logon node and compute nodes are separately deployed.
     * Tiny: A management node and multiple compute nodes are deployed. The management node consists of an account node, a scheduling node, and a logon node. The compute nodes are separately deployed.
     * Default value: Standard
     */
    readonly deployMode?: string | ros.IResolvable;

    /**
     * @Property description: Cluster description, 2 to 128 characters.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property ecsChargeType: ECS instance payment type, PostPaid: Pay-As-You-Go.PrePaid: Subscription.If you choose PrePaid, automatic renewal will be enabled by default, and closed when node is released.
     */
    readonly ecsChargeType?: string | ros.IResolvable;

    /**
     * @Property ecsOrderManagerCount: Control node number can be 1, 2
     */
    readonly ecsOrderManagerCount?: number | ros.IResolvable;

    /**
     * @Property ehpcVersion: The version of E-HPC. By default, the parameter is set to the latest version number.
     */
    readonly ehpcVersion?: string | ros.IResolvable;

    /**
     * @Property haEnable: Specifies whether to enable the high availability feature. Valid values:
     * true: enables the high availability feature
     * false: disables the high availability feature
     * Default value: false
     * Note If high availability is enabled, primary management nodes and secondary management nodes are used.
     */
    readonly haEnable?: boolean | ros.IResolvable;

    /**
     * @Property imageId: Mirror Id, if ImageType a system, based on the image ID is determined only according OsTag; if self, others, or marketplace, ImageId is mandatory.
     */
    readonly imageId?: string | ros.IResolvable;

    /**
     * @Property imageOwnerAlias: Mirror type: system, self, others or marketplace
     */
    readonly imageOwnerAlias?: string | ros.IResolvable;

    /**
     * @Property inputFileUrl: The URL of the job files that are uploaded to an Object Storage Service (OSS) bucket.
     */
    readonly inputFileUrl?: string | ros.IResolvable;

    /**
     * @Property isComputeEss: Specifies whether to enable auto scaling. Valid values:
     * true: enables auto scaling
     * false: disables auto scaling
     * Default value: false
     */
    readonly isComputeEss?: boolean | ros.IResolvable;

    /**
     * @Property jobQueue: 	The queue to which the compute nodes are added.
     */
    readonly jobQueue?: string | ros.IResolvable;

    /**
     * @Property keyPairName: Key pair name.
     */
    readonly keyPairName?: string | ros.IResolvable;

    /**
     * @Property password: Root password of jump server (login node). 8 to 30 characters, must contain three (upper and lower case letters, numbers and special symbols). ! Supports the following special characters :() `~ @ # $% ^ & * - + = | {} []:; '<>, / Be sure to use the HTTPS protocol API call to avoid password leaks that may occur.?.
     */
    readonly password?: string | ros.IResolvable;

    /**
     * @Property period: The purchase of long resources, units: week / month / year. When the value of the parameter EcsChargeType when PrePaid take effect and for the selected value will be.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * @Property periodUnit: The purchase of long-resources unit. Alternatively value Week / Month / year.
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * @Property postInstallScript:
     */
    readonly postInstallScript?: Array<RosCluster.PostInstallScriptProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property remoteDirectory: Mount shared storage remote directory. The final path to the mount point and mount the remote directory composition: NasMountpoint: / RemoteDirectory
     */
    readonly remoteDirectory?: string | ros.IResolvable;

    /**
     * @Property remoteVisEnable: Specifies whether to enable Virtual Network Computing (VNC). Valid values:
     * true: enables VNC
     * false: disables VNC
     * Default value: false
     */
    readonly remoteVisEnable?: boolean | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     * You can call the ListResourceGroups operation to obtain the ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property sccClusterId: When SCC models, if you pass this field, then the specified SccCluster create Scc instance, otherwise it will create an instance for the user.
     */
    readonly sccClusterId?: string | ros.IResolvable;

    /**
     * @Property schedulerType: The type of the scheduler. Valid values:
     * pbs
     * slurm
     * opengridscheduler
     * deadline
     * Default value: pbs
     */
    readonly schedulerType?: string | ros.IResolvable;

    /**
     * @Property securityGroupId: Security group ID.
     */
    readonly securityGroupId?: string | ros.IResolvable;

    /**
     * @Property securityGroupName: If you do not use an existing security group (SecurityGroupId is empty), then use this name to create a new security group, the default policy. Format Requirements Reference ECS security group name.
     */
    readonly securityGroupName?: string | ros.IResolvable;

    /**
     * @Property systemDiskLevel: The performance level of the ESSD that is created as the system disk. Valid values:
     * PL0: A single ESSD can deliver up to 10,000 input/output operations per second (IOPS) of random read/write.
     * PL1: A single ESSD can deliver up to 50,000 IOPS of random read/write.
     * PL2: A single ESSD can deliver up to 100,000 IOPS of random read/write.
     * PL3: A single ESSD can deliver up to 1,000,000 IOPS of random read/write.
     * Default value: PL1
     */
    readonly systemDiskLevel?: string | ros.IResolvable;

    /**
     * @Property systemDiskSize: The size of the system disk. Unit: GB
     * Valid values: 40 to 500
     * Default value: 40
     */
    readonly systemDiskSize?: number | ros.IResolvable;

    /**
     * @Property systemDiskType: The type of the system disk. Valid values:
     * cloud_efficiency: ultra disk.
     * cloud_ssd: SSD.
     * cloud_essd: ESSD.
     * Default value: cloud_ssd
     */
    readonly systemDiskType?: string | ros.IResolvable;

    /**
     * @Property volumeId: The ID of the file system. If you leave the parameter empty, a Performance NAS file system is created by default.
     */
    readonly volumeId?: string | ros.IResolvable;

    /**
     * @Property volumeMountpoint: The mount target of the file system. Take note of the following information:
     * If you do not specify the VolumeId parameter, you can leave the VolumeMountpoint parameter empty. A mount target is created by default.
     * If you specify the VolumeId parameter, the VolumeMountpoint parameter is required.
     */
    readonly volumeMountpoint?: string | ros.IResolvable;

    /**
     * @Property volumeProtocol: The type of the protocol that is used by the file system. Valid values:
     * nfs
     * smb
     * Default value: nfs
     */
    readonly volumeProtocol?: string | ros.IResolvable;

    /**
     * @Property volumeType: The type of the shared storage. Only Apsara File Storage nas file systems are supported.
     */
    readonly volumeType?: string | ros.IResolvable;

    /**
     * @Property withoutElasticIp: Specifies whether the logon node uses an elastic IP address (EIP). Default value: false
     */
    readonly withoutElasticIp?: boolean | ros.IResolvable;

    /**
     * @Property zoneId: Available area ID.
     */
    readonly zoneId?: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('volumeProtocol', ros.validateString)(properties.volumeProtocol));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('computeEnableHt', ros.validateBoolean)(properties.computeEnableHt));
    errors.collect(ros.propertyValidator('withoutElasticIp', ros.validateBoolean)(properties.withoutElasticIp));
    errors.collect(ros.propertyValidator('systemDiskType', ros.validateString)(properties.systemDiskType));
    errors.collect(ros.propertyValidator('remoteVisEnable', ros.validateBoolean)(properties.remoteVisEnable));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    errors.collect(ros.propertyValidator('volumeId', ros.validateString)(properties.volumeId));
    errors.collect(ros.propertyValidator('deployMode', ros.validateString)(properties.deployMode));
    if(properties.postInstallScript && (Array.isArray(properties.postInstallScript) || (typeof properties.postInstallScript) === 'string')) {
        errors.collect(ros.propertyValidator('postInstallScript', ros.validateLength)({
            data: properties.postInstallScript.length,
            min: undefined,
            max: 16,
          }));
    }
    errors.collect(ros.propertyValidator('postInstallScript', ros.listValidator(RosCluster_PostInstallScriptPropertyValidator))(properties.postInstallScript));
    errors.collect(ros.propertyValidator('imageId', ros.validateString)(properties.imageId));
    errors.collect(ros.propertyValidator('isComputeEss', ros.validateBoolean)(properties.isComputeEss));
    errors.collect(ros.propertyValidator('ecsOrderLoginInstanceType', ros.requiredValidator)(properties.ecsOrderLoginInstanceType));
    errors.collect(ros.propertyValidator('ecsOrderLoginInstanceType', ros.validateString)(properties.ecsOrderLoginInstanceType));
    errors.collect(ros.propertyValidator('jobQueue', ros.validateString)(properties.jobQueue));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    if(properties.computeSpotStrategy && (typeof properties.computeSpotStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('computeSpotStrategy', ros.validateAllowedValues)({
          data: properties.computeSpotStrategy,
          allowedValues: ["NoSpot","SpotWithPriceLimit","SpotAsPriceGo"],
        }));
    }
    errors.collect(ros.propertyValidator('computeSpotStrategy', ros.validateString)(properties.computeSpotStrategy));
    errors.collect(ros.propertyValidator('ecsOrderManagerInstanceType', ros.requiredValidator)(properties.ecsOrderManagerInstanceType));
    errors.collect(ros.propertyValidator('ecsOrderManagerInstanceType', ros.validateString)(properties.ecsOrderManagerInstanceType));
    errors.collect(ros.propertyValidator('ehpcVersion', ros.validateString)(properties.ehpcVersion));
    errors.collect(ros.propertyValidator('volumeMountpoint', ros.validateString)(properties.volumeMountpoint));
    errors.collect(ros.propertyValidator('ecsOrderManagerCount', ros.validateNumber)(properties.ecsOrderManagerCount));
    errors.collect(ros.propertyValidator('ecsOrderComputeInstanceType', ros.requiredValidator)(properties.ecsOrderComputeInstanceType));
    errors.collect(ros.propertyValidator('ecsOrderComputeInstanceType', ros.validateString)(properties.ecsOrderComputeInstanceType));
    if(properties.application && (Array.isArray(properties.application) || (typeof properties.application) === 'string')) {
        errors.collect(ros.propertyValidator('application', ros.validateLength)({
            data: properties.application.length,
            min: undefined,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('application', ros.listValidator(RosCluster_ApplicationPropertyValidator))(properties.application));
    if(properties.periodUnit && (typeof properties.periodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('periodUnit', ros.validateAllowedValues)({
          data: properties.periodUnit,
          allowedValues: ["Week","Month","Year"],
        }));
    }
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    if(properties.imageOwnerAlias && (typeof properties.imageOwnerAlias) !== 'object') {
        errors.collect(ros.propertyValidator('imageOwnerAlias', ros.validateAllowedValues)({
          data: properties.imageOwnerAlias,
          allowedValues: ["system","self","others","marketplace"],
        }));
    }
    errors.collect(ros.propertyValidator('imageOwnerAlias', ros.validateString)(properties.imageOwnerAlias));
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
    errors.collect(ros.propertyValidator('systemDiskSize', ros.validateNumber)(properties.systemDiskSize));
    if(properties.additionalVolumes && (Array.isArray(properties.additionalVolumes) || (typeof properties.additionalVolumes) === 'string')) {
        errors.collect(ros.propertyValidator('additionalVolumes', ros.validateLength)({
            data: properties.additionalVolumes.length,
            min: undefined,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('additionalVolumes', ros.listValidator(RosCluster_AdditionalVolumesPropertyValidator))(properties.additionalVolumes));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateBoolean)(properties.autoRenew));
    errors.collect(ros.propertyValidator('computeSpotPriceLimit', ros.validateString)(properties.computeSpotPriceLimit));
    errors.collect(ros.propertyValidator('clientVersion', ros.validateString)(properties.clientVersion));
    errors.collect(ros.propertyValidator('volumeType', ros.validateString)(properties.volumeType));
    errors.collect(ros.propertyValidator('inputFileUrl', ros.validateString)(properties.inputFileUrl));
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
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('systemDiskLevel', ros.validateString)(properties.systemDiskLevel));
    errors.collect(ros.propertyValidator('ecsOrderLoginCount', ros.requiredValidator)(properties.ecsOrderLoginCount));
    if(properties.ecsOrderLoginCount && (typeof properties.ecsOrderLoginCount) !== 'object') {
        errors.collect(ros.propertyValidator('ecsOrderLoginCount', ros.validateRange)({
            data: properties.ecsOrderLoginCount,
            min: 1,
            max: 1,
          }));
    }
    errors.collect(ros.propertyValidator('ecsOrderLoginCount', ros.validateNumber)(properties.ecsOrderLoginCount));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('schedulerType', ros.validateString)(properties.schedulerType));
    errors.collect(ros.propertyValidator('accountType', ros.validateString)(properties.accountType));
    errors.collect(ros.propertyValidator('haEnable', ros.validateBoolean)(properties.haEnable));
    errors.collect(ros.propertyValidator('osTag', ros.requiredValidator)(properties.osTag));
    errors.collect(ros.propertyValidator('osTag', ros.validateString)(properties.osTag));
    errors.collect(ros.propertyValidator('ecsChargeType', ros.validateString)(properties.ecsChargeType));
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
      Name: ros.stringToRosTemplate(properties.name),
      OsTag: ros.stringToRosTemplate(properties.osTag),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      AccountType: ros.stringToRosTemplate(properties.accountType),
      AdditionalVolumes: ros.listMapper(rosClusterAdditionalVolumesPropertyToRosTemplate)(properties.additionalVolumes),
      Application: ros.listMapper(rosClusterApplicationPropertyToRosTemplate)(properties.application),
      AutoRenew: ros.booleanToRosTemplate(properties.autoRenew),
      AutoRenewPeriod: ros.numberToRosTemplate(properties.autoRenewPeriod),
      ClientVersion: ros.stringToRosTemplate(properties.clientVersion),
      ComputeEnableHt: ros.booleanToRosTemplate(properties.computeEnableHt),
      ComputeSpotPriceLimit: ros.stringToRosTemplate(properties.computeSpotPriceLimit),
      ComputeSpotStrategy: ros.stringToRosTemplate(properties.computeSpotStrategy),
      DeployMode: ros.stringToRosTemplate(properties.deployMode),
      Description: ros.stringToRosTemplate(properties.description),
      EcsChargeType: ros.stringToRosTemplate(properties.ecsChargeType),
      EcsOrderManagerCount: ros.numberToRosTemplate(properties.ecsOrderManagerCount),
      EhpcVersion: ros.stringToRosTemplate(properties.ehpcVersion),
      HaEnable: ros.booleanToRosTemplate(properties.haEnable),
      ImageId: ros.stringToRosTemplate(properties.imageId),
      ImageOwnerAlias: ros.stringToRosTemplate(properties.imageOwnerAlias),
      InputFileUrl: ros.stringToRosTemplate(properties.inputFileUrl),
      IsComputeEss: ros.booleanToRosTemplate(properties.isComputeEss),
      JobQueue: ros.stringToRosTemplate(properties.jobQueue),
      KeyPairName: ros.stringToRosTemplate(properties.keyPairName),
      Password: ros.stringToRosTemplate(properties.password),
      Period: ros.numberToRosTemplate(properties.period),
      PeriodUnit: ros.stringToRosTemplate(properties.periodUnit),
      PostInstallScript: ros.listMapper(rosClusterPostInstallScriptPropertyToRosTemplate)(properties.postInstallScript),
      RemoteDirectory: ros.stringToRosTemplate(properties.remoteDirectory),
      RemoteVisEnable: ros.booleanToRosTemplate(properties.remoteVisEnable),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      SccClusterId: ros.stringToRosTemplate(properties.sccClusterId),
      SchedulerType: ros.stringToRosTemplate(properties.schedulerType),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      SecurityGroupName: ros.stringToRosTemplate(properties.securityGroupName),
      SystemDiskLevel: ros.stringToRosTemplate(properties.systemDiskLevel),
      SystemDiskSize: ros.numberToRosTemplate(properties.systemDiskSize),
      SystemDiskType: ros.stringToRosTemplate(properties.systemDiskType),
      VolumeId: ros.stringToRosTemplate(properties.volumeId),
      VolumeMountpoint: ros.stringToRosTemplate(properties.volumeMountpoint),
      VolumeProtocol: ros.stringToRosTemplate(properties.volumeProtocol),
      VolumeType: ros.stringToRosTemplate(properties.volumeType),
      WithoutElasticIp: ros.booleanToRosTemplate(properties.withoutElasticIp),
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
    public readonly attrClusterId: ros.IResolvable;

    /**
     * @Attribute EcsInfo: A data structure describing the number and specifications of ECS for various components of the cluster.
You will get results similar to the following: EcsInfo: {"Manager": {"Count": 2, "InstanceType": "ecs.n1.large"}, "Compute": {"Count": 8, "InstanceType": "ecs.n1.large"}, "Login": {"Count": 1, "InstanceType": "ecs.n1.large"}}
     */
    public readonly attrEcsInfo: ros.IResolvable;

    /**
     * @Attribute Name: Cluster name.
     */
    public readonly attrName: ros.IResolvable;

    /**
     * @Attribute SecurityGroupId: Security group ID.
     */
    public readonly attrSecurityGroupId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property ecsOrderComputeCount: Computing node number, which ranges from: 1-99.
     */
    public ecsOrderComputeCount: number | ros.IResolvable;

    /**
     * @Property ecsOrderComputeInstanceType: Cluster computing node instance specifications.
     */
    public ecsOrderComputeInstanceType: string | ros.IResolvable;

    /**
     * @Property ecsOrderLoginCount: Login node number can only be 1.
     */
    public ecsOrderLoginCount: number | ros.IResolvable;

    /**
     * @Property ecsOrderLoginInstanceType: Log cluster node instance specifications.
     */
    public ecsOrderLoginInstanceType: string | ros.IResolvable;

    /**
     * @Property ecsOrderManagerInstanceType: Cluster control node instance specifications.
     */
    public ecsOrderManagerInstanceType: string | ros.IResolvable;

    /**
     * @Property name: Cluster name. 2-64 characters in length, allowing only include Chinese, letters, numbers, dashes (-) and underscore (_), must begin with a letter or Chinese.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property osTag: Operating system image tag. You can call ListImages API to query.
     */
    public osTag: string | ros.IResolvable;

    /**
     * @Property vSwitchId: VPC in switch ID. Products currently only supports VPC network.
     */
    public vSwitchId: string | ros.IResolvable;

    /**
     * @Property accountType: The service type of the domain account. Valid values:
     * nis
     * ldap
     * Default value: nis
     */
    public accountType: string | ros.IResolvable | undefined;

    /**
     * @Property additionalVolumes:
     */
    public additionalVolumes: Array<RosCluster.AdditionalVolumesProperty | ros.IResolvable> | ros.IResolvable | undefined;

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
    public autoRenewPeriod: number | ros.IResolvable | undefined;

    /**
     * @Property clientVersion: The version of the E-HPC client. By default, the parameter is set to the latest version number.
     * You can call the ListCurrentClientVersion operation to query the current version of the E-HPC client.
     */
    public clientVersion: string | ros.IResolvable | undefined;

    /**
     * @Property computeEnableHt: Specifies whether the compute nodes support hyper-threading. Valid values:
     * true: Hyper-threading is supported.
     * false: Hyper-threading is not supported.
     * Default value: true
     */
    public computeEnableHt: boolean | ros.IResolvable | undefined;

    /**
     * @Property computeSpotPriceLimit: Set an example of the highest price per hour, are floating-point values, in the range of the current price range.
     */
    public computeSpotPriceLimit: string | ros.IResolvable | undefined;

    /**
     * @Property computeSpotStrategy: Compute nodes bidding strategy, value NoSpot, SpotWithPriceLimit or SpotAsPriceGo
     */
    public computeSpotStrategy: string | ros.IResolvable | undefined;

    /**
     * @Property deployMode: The mode in which the cluster is deployed. Valid values:
     * Standard: An account node, a scheduling node, a logon node, and multiple compute nodes are separately deployed.
     * Simple: A management node, a logon node, and multiple compute nodes are deployed. The management node consists of an account node and a scheduling node. The logon node and compute nodes are separately deployed.
     * Tiny: A management node and multiple compute nodes are deployed. The management node consists of an account node, a scheduling node, and a logon node. The compute nodes are separately deployed.
     * Default value: Standard
     */
    public deployMode: string | ros.IResolvable | undefined;

    /**
     * @Property description: Cluster description, 2 to 128 characters.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property ecsChargeType: ECS instance payment type, PostPaid: Pay-As-You-Go.PrePaid: Subscription.If you choose PrePaid, automatic renewal will be enabled by default, and closed when node is released.
     */
    public ecsChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property ecsOrderManagerCount: Control node number can be 1, 2
     */
    public ecsOrderManagerCount: number | ros.IResolvable | undefined;

    /**
     * @Property ehpcVersion: The version of E-HPC. By default, the parameter is set to the latest version number.
     */
    public ehpcVersion: string | ros.IResolvable | undefined;

    /**
     * @Property haEnable: Specifies whether to enable the high availability feature. Valid values:
     * true: enables the high availability feature
     * false: disables the high availability feature
     * Default value: false
     * Note If high availability is enabled, primary management nodes and secondary management nodes are used.
     */
    public haEnable: boolean | ros.IResolvable | undefined;

    /**
     * @Property imageId: Mirror Id, if ImageType a system, based on the image ID is determined only according OsTag; if self, others, or marketplace, ImageId is mandatory.
     */
    public imageId: string | ros.IResolvable | undefined;

    /**
     * @Property imageOwnerAlias: Mirror type: system, self, others or marketplace
     */
    public imageOwnerAlias: string | ros.IResolvable | undefined;

    /**
     * @Property inputFileUrl: The URL of the job files that are uploaded to an Object Storage Service (OSS) bucket.
     */
    public inputFileUrl: string | ros.IResolvable | undefined;

    /**
     * @Property isComputeEss: Specifies whether to enable auto scaling. Valid values:
     * true: enables auto scaling
     * false: disables auto scaling
     * Default value: false
     */
    public isComputeEss: boolean | ros.IResolvable | undefined;

    /**
     * @Property jobQueue: 	The queue to which the compute nodes are added.
     */
    public jobQueue: string | ros.IResolvable | undefined;

    /**
     * @Property keyPairName: Key pair name.
     */
    public keyPairName: string | ros.IResolvable | undefined;

    /**
     * @Property password: Root password of jump server (login node). 8 to 30 characters, must contain three (upper and lower case letters, numbers and special symbols). ! Supports the following special characters :() `~ @ # $% ^ & * - + = | {} []:; '<>, / Be sure to use the HTTPS protocol API call to avoid password leaks that may occur.?.
     */
    public password: string | ros.IResolvable | undefined;

    /**
     * @Property period: The purchase of long resources, units: week / month / year. When the value of the parameter EcsChargeType when PrePaid take effect and for the selected value will be.
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property periodUnit: The purchase of long-resources unit. Alternatively value Week / Month / year.
     */
    public periodUnit: string | ros.IResolvable | undefined;

    /**
     * @Property postInstallScript:
     */
    public postInstallScript: Array<RosCluster.PostInstallScriptProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property remoteDirectory: Mount shared storage remote directory. The final path to the mount point and mount the remote directory composition: NasMountpoint: / RemoteDirectory
     */
    public remoteDirectory: string | ros.IResolvable | undefined;

    /**
     * @Property remoteVisEnable: Specifies whether to enable Virtual Network Computing (VNC). Valid values:
     * true: enables VNC
     * false: disables VNC
     * Default value: false
     */
    public remoteVisEnable: boolean | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     * You can call the ListResourceGroups operation to obtain the ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property sccClusterId: When SCC models, if you pass this field, then the specified SccCluster create Scc instance, otherwise it will create an instance for the user.
     */
    public sccClusterId: string | ros.IResolvable | undefined;

    /**
     * @Property schedulerType: The type of the scheduler. Valid values:
     * pbs
     * slurm
     * opengridscheduler
     * deadline
     * Default value: pbs
     */
    public schedulerType: string | ros.IResolvable | undefined;

    /**
     * @Property securityGroupId: Security group ID.
     */
    public securityGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property securityGroupName: If you do not use an existing security group (SecurityGroupId is empty), then use this name to create a new security group, the default policy. Format Requirements Reference ECS security group name.
     */
    public securityGroupName: string | ros.IResolvable | undefined;

    /**
     * @Property systemDiskLevel: The performance level of the ESSD that is created as the system disk. Valid values:
     * PL0: A single ESSD can deliver up to 10,000 input/output operations per second (IOPS) of random read/write.
     * PL1: A single ESSD can deliver up to 50,000 IOPS of random read/write.
     * PL2: A single ESSD can deliver up to 100,000 IOPS of random read/write.
     * PL3: A single ESSD can deliver up to 1,000,000 IOPS of random read/write.
     * Default value: PL1
     */
    public systemDiskLevel: string | ros.IResolvable | undefined;

    /**
     * @Property systemDiskSize: The size of the system disk. Unit: GB
     * Valid values: 40 to 500
     * Default value: 40
     */
    public systemDiskSize: number | ros.IResolvable | undefined;

    /**
     * @Property systemDiskType: The type of the system disk. Valid values:
     * cloud_efficiency: ultra disk.
     * cloud_ssd: SSD.
     * cloud_essd: ESSD.
     * Default value: cloud_ssd
     */
    public systemDiskType: string | ros.IResolvable | undefined;

    /**
     * @Property volumeId: The ID of the file system. If you leave the parameter empty, a Performance NAS file system is created by default.
     */
    public volumeId: string | ros.IResolvable | undefined;

    /**
     * @Property volumeMountpoint: The mount target of the file system. Take note of the following information:
     * If you do not specify the VolumeId parameter, you can leave the VolumeMountpoint parameter empty. A mount target is created by default.
     * If you specify the VolumeId parameter, the VolumeMountpoint parameter is required.
     */
    public volumeMountpoint: string | ros.IResolvable | undefined;

    /**
     * @Property volumeProtocol: The type of the protocol that is used by the file system. Valid values:
     * nfs
     * smb
     * Default value: nfs
     */
    public volumeProtocol: string | ros.IResolvable | undefined;

    /**
     * @Property volumeType: The type of the shared storage. Only Apsara File Storage nas file systems are supported.
     */
    public volumeType: string | ros.IResolvable | undefined;

    /**
     * @Property withoutElasticIp: Specifies whether the logon node uses an elastic IP address (EIP). Default value: false
     */
    public withoutElasticIp: boolean | ros.IResolvable | undefined;

    /**
     * @Property zoneId: Available area ID.
     */
    public zoneId: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::EHPC::Cluster`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClusterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCluster.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterId = this.getAtt('ClusterId');
        this.attrEcsInfo = this.getAtt('EcsInfo');
        this.attrName = this.getAtt('Name');
        this.attrSecurityGroupId = this.getAtt('SecurityGroupId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.ecsOrderComputeCount = props.ecsOrderComputeCount;
        this.ecsOrderComputeInstanceType = props.ecsOrderComputeInstanceType;
        this.ecsOrderLoginCount = props.ecsOrderLoginCount;
        this.ecsOrderLoginInstanceType = props.ecsOrderLoginInstanceType;
        this.ecsOrderManagerInstanceType = props.ecsOrderManagerInstanceType;
        this.name = props.name;
        this.osTag = props.osTag;
        this.vSwitchId = props.vSwitchId;
        this.accountType = props.accountType;
        this.additionalVolumes = props.additionalVolumes;
        this.application = props.application;
        this.autoRenew = props.autoRenew;
        this.autoRenewPeriod = props.autoRenewPeriod;
        this.clientVersion = props.clientVersion;
        this.computeEnableHt = props.computeEnableHt;
        this.computeSpotPriceLimit = props.computeSpotPriceLimit;
        this.computeSpotStrategy = props.computeSpotStrategy;
        this.deployMode = props.deployMode;
        this.description = props.description;
        this.ecsChargeType = props.ecsChargeType;
        this.ecsOrderManagerCount = props.ecsOrderManagerCount;
        this.ehpcVersion = props.ehpcVersion;
        this.haEnable = props.haEnable;
        this.imageId = props.imageId;
        this.imageOwnerAlias = props.imageOwnerAlias;
        this.inputFileUrl = props.inputFileUrl;
        this.isComputeEss = props.isComputeEss;
        this.jobQueue = props.jobQueue;
        this.keyPairName = props.keyPairName;
        this.password = props.password;
        this.period = props.period;
        this.periodUnit = props.periodUnit;
        this.postInstallScript = props.postInstallScript;
        this.remoteDirectory = props.remoteDirectory;
        this.remoteVisEnable = props.remoteVisEnable;
        this.resourceGroupId = props.resourceGroupId;
        this.sccClusterId = props.sccClusterId;
        this.schedulerType = props.schedulerType;
        this.securityGroupId = props.securityGroupId;
        this.securityGroupName = props.securityGroupName;
        this.systemDiskLevel = props.systemDiskLevel;
        this.systemDiskSize = props.systemDiskSize;
        this.systemDiskType = props.systemDiskType;
        this.volumeId = props.volumeId;
        this.volumeMountpoint = props.volumeMountpoint;
        this.volumeProtocol = props.volumeProtocol;
        this.volumeType = props.volumeType;
        this.withoutElasticIp = props.withoutElasticIp;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            ecsOrderComputeCount: this.ecsOrderComputeCount,
            ecsOrderComputeInstanceType: this.ecsOrderComputeInstanceType,
            ecsOrderLoginCount: this.ecsOrderLoginCount,
            ecsOrderLoginInstanceType: this.ecsOrderLoginInstanceType,
            ecsOrderManagerInstanceType: this.ecsOrderManagerInstanceType,
            name: this.name,
            osTag: this.osTag,
            vSwitchId: this.vSwitchId,
            accountType: this.accountType,
            additionalVolumes: this.additionalVolumes,
            application: this.application,
            autoRenew: this.autoRenew,
            autoRenewPeriod: this.autoRenewPeriod,
            clientVersion: this.clientVersion,
            computeEnableHt: this.computeEnableHt,
            computeSpotPriceLimit: this.computeSpotPriceLimit,
            computeSpotStrategy: this.computeSpotStrategy,
            deployMode: this.deployMode,
            description: this.description,
            ecsChargeType: this.ecsChargeType,
            ecsOrderManagerCount: this.ecsOrderManagerCount,
            ehpcVersion: this.ehpcVersion,
            haEnable: this.haEnable,
            imageId: this.imageId,
            imageOwnerAlias: this.imageOwnerAlias,
            inputFileUrl: this.inputFileUrl,
            isComputeEss: this.isComputeEss,
            jobQueue: this.jobQueue,
            keyPairName: this.keyPairName,
            password: this.password,
            period: this.period,
            periodUnit: this.periodUnit,
            postInstallScript: this.postInstallScript,
            remoteDirectory: this.remoteDirectory,
            remoteVisEnable: this.remoteVisEnable,
            resourceGroupId: this.resourceGroupId,
            sccClusterId: this.sccClusterId,
            schedulerType: this.schedulerType,
            securityGroupId: this.securityGroupId,
            securityGroupName: this.securityGroupName,
            systemDiskLevel: this.systemDiskLevel,
            systemDiskSize: this.systemDiskSize,
            systemDiskType: this.systemDiskType,
            volumeId: this.volumeId,
            volumeMountpoint: this.volumeMountpoint,
            volumeProtocol: this.volumeProtocol,
            volumeType: this.volumeType,
            withoutElasticIp: this.withoutElasticIp,
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
    export interface AdditionalVolumesProperty {
        /**
         * @Property volumeProtocol: The type of the protocol that is used by the additional file system. Valid values:
     * nfs
     * smb
     * Default value: nfs
         */
        readonly volumeProtocol?: string | ros.IResolvable;
        /**
         * @Property localDirectory: The local directory to which the additional file system is mounted.
         */
        readonly localDirectory: string | ros.IResolvable;
        /**
         * @Property volumeId: The ID of the additional file system.
         */
        readonly volumeId: string | ros.IResolvable;
        /**
         * @Property remoteDirectory: The remote directory to which the additional file system is mounted.
         */
        readonly remoteDirectory?: string | ros.IResolvable;
        /**
         * @Property volumeType: The type of the additional shared storage. Only nas file systems are supported.
         */
        readonly volumeType?: string | ros.IResolvable;
        /**
         * @Property jobQueue: The queue of the nodes to which the additional file system is attached.
         */
        readonly jobQueue?: string | ros.IResolvable;
        /**
         * @Property volumeMountpoint: The mount target of the additional file system.
         */
        readonly volumeMountpoint: string | ros.IResolvable;
        /**
         * @Property location: The type of the cluster. Valid value: PublicCloud.
         */
        readonly location?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AdditionalVolumesProperty`
 *
 * @param properties - the TypeScript properties of a `AdditionalVolumesProperty`
 *
 * @returns the result of the validation.
 */
function RosCluster_AdditionalVolumesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('volumeProtocol', ros.validateString)(properties.volumeProtocol));
    errors.collect(ros.propertyValidator('localDirectory', ros.requiredValidator)(properties.localDirectory));
    errors.collect(ros.propertyValidator('localDirectory', ros.validateString)(properties.localDirectory));
    errors.collect(ros.propertyValidator('volumeId', ros.requiredValidator)(properties.volumeId));
    errors.collect(ros.propertyValidator('volumeId', ros.validateString)(properties.volumeId));
    errors.collect(ros.propertyValidator('remoteDirectory', ros.validateString)(properties.remoteDirectory));
    errors.collect(ros.propertyValidator('volumeType', ros.validateString)(properties.volumeType));
    errors.collect(ros.propertyValidator('jobQueue', ros.validateString)(properties.jobQueue));
    errors.collect(ros.propertyValidator('volumeMountpoint', ros.requiredValidator)(properties.volumeMountpoint));
    errors.collect(ros.propertyValidator('volumeMountpoint', ros.validateString)(properties.volumeMountpoint));
    errors.collect(ros.propertyValidator('location', ros.validateString)(properties.location));
    return errors.wrap('supplied properties not correct for "AdditionalVolumesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EHPC::Cluster.AdditionalVolumes` resource
 *
 * @param properties - the TypeScript properties of a `AdditionalVolumesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EHPC::Cluster.AdditionalVolumes` resource.
 */
// @ts-ignore TS6133
function rosClusterAdditionalVolumesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCluster_AdditionalVolumesPropertyValidator(properties).assertSuccess();
    return {
      VolumeProtocol: ros.stringToRosTemplate(properties.volumeProtocol),
      LocalDirectory: ros.stringToRosTemplate(properties.localDirectory),
      VolumeId: ros.stringToRosTemplate(properties.volumeId),
      RemoteDirectory: ros.stringToRosTemplate(properties.remoteDirectory),
      VolumeType: ros.stringToRosTemplate(properties.volumeType),
      JobQueue: ros.stringToRosTemplate(properties.jobQueue),
      VolumeMountpoint: ros.stringToRosTemplate(properties.volumeMountpoint),
      Location: ros.stringToRosTemplate(properties.location),
    };
}

export namespace RosCluster {
    /**
     * @stability external
     */
    export interface ApplicationProperty {
        /**
         * @Property tag: Application software tag (SoftwareTag), for example OpenMPI_11.1.
         */
        readonly tag: string | ros.IResolvable;
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
        readonly args?: string | ros.IResolvable;
        /**
         * @Property url: N-th (n numbered starting with 1, can have multiple, maximum 16) after installation script Download.
         */
        readonly url?: string | ros.IResolvable;
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
