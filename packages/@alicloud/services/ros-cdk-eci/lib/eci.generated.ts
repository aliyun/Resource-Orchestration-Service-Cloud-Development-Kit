// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::ECI::ContainerGroup`
 */
export interface RosContainerGroupProps {

    /**
     * @Property container: The containers that constitute the container group.
     */
    readonly container: Array<RosContainerGroup.ContainerProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property containerGroupName: The name of the container group. 
     * The length is [2,128] English lowercase letters, numbers or hyphens (-), cannot begin or end with a hyphens.
     */
    readonly containerGroupName: string | ros.IResolvable;

    /**
     * @Property acrRegistryInfo: Enterprise Edition access credential configuration information.
     */
    readonly acrRegistryInfo?: Array<RosContainerGroup.AcrRegistryInfoProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property activeDeadlineSeconds: The validity period in seconds.
     */
    readonly activeDeadlineSeconds?: number | ros.IResolvable;

    /**
     * @Property autoMatchImageCache: Specifies whether to automatically match the image cache.
     */
    readonly autoMatchImageCache?: boolean | ros.IResolvable;

    /**
     * @Property cpu: CPU size
     */
    readonly cpu?: number | ros.IResolvable;

    /**
     * @Property dnsConfig: The information about DNS configurations.
     */
    readonly dnsConfig?: RosContainerGroup.DnsConfigProperty | ros.IResolvable;

    /**
     * @Property eipInstanceId: Elastic IP ID
     */
    readonly eipInstanceId?: string | ros.IResolvable;

    /**
     * @Property hostAliase: Customize the hostname mapping of a container inside the pod
     */
    readonly hostAliase?: Array<RosContainerGroup.HostAliaseProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property imageRegistryCredential: The information that you need to log on to the container image repository, including the server address, username, and password.
     */
    readonly imageRegistryCredential?: Array<RosContainerGroup.ImageRegistryCredentialProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property imageSnapshotId: Image cache ID or snapshot ID.
     */
    readonly imageSnapshotId?: string | ros.IResolvable;

    /**
     * @Property initContainer: The containers that constitute the container group for initializing.
     */
    readonly initContainer?: Array<RosContainerGroup.InitContainerProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property instanceType: The type of the ECS instance.
     */
    readonly instanceType?: string | ros.IResolvable;

    /**
     * @Property ipv6AddressCount: The number of IPv6 addresses.
     */
    readonly ipv6AddressCount?: number | ros.IResolvable;

    /**
     * @Property memory: memory size
     */
    readonly memory?: number | ros.IResolvable;

    /**
     * @Property ramRoleName: The RAM role that the container group assumes. ECI and ECS share the same RAM role.
     */
    readonly ramRoleName?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property restartPolicy: The policy for restarting the instance. Default value: Always.
     */
    readonly restartPolicy?: string | ros.IResolvable;

    /**
     * @Property securityContextSysctl: ECI Sysctl is valid for every container in ECI.
     * Currently only two Sysctl keyNames are supported:
     * Kernel.shm_rmid_forced
     * Kernel.msgmax
     */
    readonly securityContextSysctl?: Array<RosContainerGroup.SecurityContextSysctlProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property securityGroupId: The ID of the security group to which the instance belongs. Instances in the same security group can access one another.
     * If no security group is specified, the system automatically uses the default security group in the region you select.
     * If you do not have a default security group in this region, the system automatically creates a default security group and adds the container protocol and port you declared to the inbound direction rules of this security group.
     */
    readonly securityGroupId?: string | ros.IResolvable;

    /**
     * @Property slsEnable: Enable user log collection. The default is False.
     */
    readonly slsEnable?: boolean | ros.IResolvable;

    /**
     * @Property spotPriceLimit: Set the hourly maximum price of the instance. It supports a maximum of 3 decimal places. It takes effect when the value of the parameter SpotStrategy is SpotWithPriceLimit.
     */
    readonly spotPriceLimit?: number | ros.IResolvable;

    /**
     * @Property spotStrategy: Instance preemption strategy.
     * Ranges:
     * NoSpot (default): normal pay-as-you-go instances.
     * SpotWithPriceLimit: Preemptive instance that sets a cap price.
     * SpotAsPriceGo: The system automatically bids, following the current market actual price.
     */
    readonly spotStrategy?: string | ros.IResolvable;

    /**
     * @Property tag: The list of container group tags in the form of key/value pairs. You can define a maximum of 20 tags for each container group.
     */
    readonly tag?: Array<ros.RosTag | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property terminationGracePeriodSeconds: The buffer time for the program to handle operations before it is stopped.
     */
    readonly terminationGracePeriodSeconds?: number | ros.IResolvable;

    /**
     * @Property volume: The data volume. You can specify a maximum of 20 data volumes.
     */
    readonly volume?: Array<RosContainerGroup.VolumeProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property vSwitchId: The ID of the specified VSwitch.
     * If no switch is specified, the system automatically uses the default switch in the default VPC in the selected region.
     * If no default VPC or default switch is available in the region, the system automatically creates a default VPC and a default switch
     */
    readonly vSwitchId?: string | ros.IResolvable;

    /**
     * @Property zoneId: The ID of the zone in which the instance resides. If you leave the parameter blank, the system assigns a zone for you. The default value is blank.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosContainerGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosContainerGroupProps`
 *
 * @returns the result of the validation.
 */
function RosContainerGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('securityContextSysctl', ros.listValidator(RosContainerGroup_SecurityContextSysctlPropertyValidator))(properties.securityContextSysctl));
    errors.collect(ros.propertyValidator('memory', ros.validateNumber)(properties.memory));
    errors.collect(ros.propertyValidator('initContainer', ros.listValidator(RosContainerGroup_InitContainerPropertyValidator))(properties.initContainer));
    errors.collect(ros.propertyValidator('cpu', ros.validateNumber)(properties.cpu));
    errors.collect(ros.propertyValidator('eipInstanceId', ros.validateString)(properties.eipInstanceId));
    errors.collect(ros.propertyValidator('containerGroupName', ros.requiredValidator)(properties.containerGroupName));
    if(properties.containerGroupName && (Array.isArray(properties.containerGroupName) || (typeof properties.containerGroupName) === 'string')) {
        errors.collect(ros.propertyValidator('containerGroupName', ros.validateLength)({
            data: properties.containerGroupName.length,
            min: 2,
            max: 128,
          }));
    }
    errors.collect(ros.propertyValidator('containerGroupName', ros.validateString)(properties.containerGroupName));
    errors.collect(ros.propertyValidator('container', ros.requiredValidator)(properties.container));
    errors.collect(ros.propertyValidator('container', ros.listValidator(RosContainerGroup_ContainerPropertyValidator))(properties.container));
    errors.collect(ros.propertyValidator('imageSnapshotId', ros.validateString)(properties.imageSnapshotId));
    errors.collect(ros.propertyValidator('ramRoleName', ros.validateString)(properties.ramRoleName));
    errors.collect(ros.propertyValidator('dnsConfig', RosContainerGroup_DnsConfigPropertyValidator)(properties.dnsConfig));
    errors.collect(ros.propertyValidator('autoMatchImageCache', ros.validateBoolean)(properties.autoMatchImageCache));
    errors.collect(ros.propertyValidator('ipv6AddressCount', ros.validateNumber)(properties.ipv6AddressCount));
    if(properties.imageRegistryCredential && (Array.isArray(properties.imageRegistryCredential) || (typeof properties.imageRegistryCredential) === 'string')) {
        errors.collect(ros.propertyValidator('imageRegistryCredential', ros.validateLength)({
            data: properties.imageRegistryCredential.length,
            min: undefined,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('imageRegistryCredential', ros.listValidator(RosContainerGroup_ImageRegistryCredentialPropertyValidator))(properties.imageRegistryCredential));
    errors.collect(ros.propertyValidator('spotPriceLimit', ros.validateNumber)(properties.spotPriceLimit));
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    if(properties.spotStrategy && (typeof properties.spotStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('spotStrategy', ros.validateAllowedValues)({
          data: properties.spotStrategy,
          allowedValues: ["NoSpot","SpotWithPriceLimit","SpotAsPriceGo"],
        }));
    }
    errors.collect(ros.propertyValidator('spotStrategy', ros.validateString)(properties.spotStrategy));
    errors.collect(ros.propertyValidator('activeDeadlineSeconds', ros.validateNumber)(properties.activeDeadlineSeconds));
    errors.collect(ros.propertyValidator('hostAliase', ros.listValidator(RosContainerGroup_HostAliasePropertyValidator))(properties.hostAliase));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('terminationGracePeriodSeconds', ros.validateNumber)(properties.terminationGracePeriodSeconds));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('slsEnable', ros.validateBoolean)(properties.slsEnable));
    if(properties.restartPolicy && (typeof properties.restartPolicy) !== 'object') {
        errors.collect(ros.propertyValidator('restartPolicy', ros.validateAllowedValues)({
          data: properties.restartPolicy,
          allowedValues: ["Always","OnFailure","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('restartPolicy', ros.validateString)(properties.restartPolicy));
    if(properties.volume && (Array.isArray(properties.volume) || (typeof properties.volume) === 'string')) {
        errors.collect(ros.propertyValidator('volume', ros.validateLength)({
            data: properties.volume.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('volume', ros.listValidator(RosContainerGroup_VolumePropertyValidator))(properties.volume));
    errors.collect(ros.propertyValidator('acrRegistryInfo', ros.listValidator(RosContainerGroup_AcrRegistryInfoPropertyValidator))(properties.acrRegistryInfo));
    if(properties.tag && (Array.isArray(properties.tag) || (typeof properties.tag) === 'string')) {
        errors.collect(ros.propertyValidator('tag', ros.validateLength)({
            data: properties.tag.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tag', ros.listValidator(ros.validateRosTag))(properties.tag));
    return errors.wrap('supplied properties not correct for "RosContainerGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECI::ContainerGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosContainerGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECI::ContainerGroup` resource.
 */
// @ts-ignore TS6133
function rosContainerGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosContainerGroupPropsValidator(properties).assertSuccess();
    }
    return {
      Container: ros.listMapper(rosContainerGroupContainerPropertyToRosTemplate)(properties.container),
      ContainerGroupName: ros.stringToRosTemplate(properties.containerGroupName),
      AcrRegistryInfo: ros.listMapper(rosContainerGroupAcrRegistryInfoPropertyToRosTemplate)(properties.acrRegistryInfo),
      ActiveDeadlineSeconds: ros.numberToRosTemplate(properties.activeDeadlineSeconds),
      AutoMatchImageCache: ros.booleanToRosTemplate(properties.autoMatchImageCache),
      Cpu: ros.numberToRosTemplate(properties.cpu),
      DnsConfig: rosContainerGroupDnsConfigPropertyToRosTemplate(properties.dnsConfig),
      EipInstanceId: ros.stringToRosTemplate(properties.eipInstanceId),
      HostAliase: ros.listMapper(rosContainerGroupHostAliasePropertyToRosTemplate)(properties.hostAliase),
      ImageRegistryCredential: ros.listMapper(rosContainerGroupImageRegistryCredentialPropertyToRosTemplate)(properties.imageRegistryCredential),
      ImageSnapshotId: ros.stringToRosTemplate(properties.imageSnapshotId),
      InitContainer: ros.listMapper(rosContainerGroupInitContainerPropertyToRosTemplate)(properties.initContainer),
      InstanceType: ros.stringToRosTemplate(properties.instanceType),
      Ipv6AddressCount: ros.numberToRosTemplate(properties.ipv6AddressCount),
      Memory: ros.numberToRosTemplate(properties.memory),
      RamRoleName: ros.stringToRosTemplate(properties.ramRoleName),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      RestartPolicy: ros.stringToRosTemplate(properties.restartPolicy),
      SecurityContextSysctl: ros.listMapper(rosContainerGroupSecurityContextSysctlPropertyToRosTemplate)(properties.securityContextSysctl),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      SlsEnable: ros.booleanToRosTemplate(properties.slsEnable),
      SpotPriceLimit: ros.numberToRosTemplate(properties.spotPriceLimit),
      SpotStrategy: ros.stringToRosTemplate(properties.spotStrategy),
      Tag: ros.listMapper(ros.rosTagToRosTemplate)(properties.tag),
      TerminationGracePeriodSeconds: ros.numberToRosTemplate(properties.terminationGracePeriodSeconds),
      Volume: ros.listMapper(rosContainerGroupVolumePropertyToRosTemplate)(properties.volume),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * A ROS template type:  `ALIYUN::ECI::ContainerGroup`
 */
export class RosContainerGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECI::ContainerGroup";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ContainerGroupId: The ID of the container group.
     */
    public readonly attrContainerGroupId: ros.IResolvable;

    /**
     * @Attribute ContainerGroupName: The name of the container group.
     */
    public readonly attrContainerGroupName: ros.IResolvable;

    /**
     * @Attribute EniInstanceId: ENI instance ID.
     */
    public readonly attrEniInstanceId: ros.IResolvable;

    /**
     * @Attribute InternetIp: Internet IP.
     */
    public readonly attrInternetIp: ros.IResolvable;

    /**
     * @Attribute IntranetIp: Intranet IP.
     */
    public readonly attrIntranetIp: ros.IResolvable;

    /**
     * @Attribute Ipv6Address: Ipv6 address.
     */
    public readonly attrIpv6Address: ros.IResolvable;

    /**
     * @Attribute RegionId: The ID of the region in which the instance resides.
     */
    public readonly attrRegionId: ros.IResolvable;

    /**
     * @Attribute SecurityGroupId: The ID of the security group to which the instance belongs. Instances in the same security group can access one another.
     */
    public readonly attrSecurityGroupId: ros.IResolvable;

    /**
     * @Attribute VSwitchId: The ID of the VSwitch. Currently, ECI instances can only be deployed in VPCs.
     */
    public readonly attrVSwitchId: ros.IResolvable;

    /**
     * @Attribute ZoneId: The ID of the zone in which the instance resides. If you leave the parameter blank, the system assigns a zone for you. The default value is blank.
     */
    public readonly attrZoneId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property container: The containers that constitute the container group.
     */
    public container: Array<RosContainerGroup.ContainerProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property containerGroupName: The name of the container group. 
     * The length is [2,128] English lowercase letters, numbers or hyphens (-), cannot begin or end with a hyphens.
     */
    public containerGroupName: string | ros.IResolvable;

    /**
     * @Property acrRegistryInfo: Enterprise Edition access credential configuration information.
     */
    public acrRegistryInfo: Array<RosContainerGroup.AcrRegistryInfoProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property activeDeadlineSeconds: The validity period in seconds.
     */
    public activeDeadlineSeconds: number | ros.IResolvable | undefined;

    /**
     * @Property autoMatchImageCache: Specifies whether to automatically match the image cache.
     */
    public autoMatchImageCache: boolean | ros.IResolvable | undefined;

    /**
     * @Property cpu: CPU size
     */
    public cpu: number | ros.IResolvable | undefined;

    /**
     * @Property dnsConfig: The information about DNS configurations.
     */
    public dnsConfig: RosContainerGroup.DnsConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property eipInstanceId: Elastic IP ID
     */
    public eipInstanceId: string | ros.IResolvable | undefined;

    /**
     * @Property hostAliase: Customize the hostname mapping of a container inside the pod
     */
    public hostAliase: Array<RosContainerGroup.HostAliaseProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property imageRegistryCredential: The information that you need to log on to the container image repository, including the server address, username, and password.
     */
    public imageRegistryCredential: Array<RosContainerGroup.ImageRegistryCredentialProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property imageSnapshotId: Image cache ID or snapshot ID.
     */
    public imageSnapshotId: string | ros.IResolvable | undefined;

    /**
     * @Property initContainer: The containers that constitute the container group for initializing.
     */
    public initContainer: Array<RosContainerGroup.InitContainerProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property instanceType: The type of the ECS instance.
     */
    public instanceType: string | ros.IResolvable | undefined;

    /**
     * @Property ipv6AddressCount: The number of IPv6 addresses.
     */
    public ipv6AddressCount: number | ros.IResolvable | undefined;

    /**
     * @Property memory: memory size
     */
    public memory: number | ros.IResolvable | undefined;

    /**
     * @Property ramRoleName: The RAM role that the container group assumes. ECI and ECS share the same RAM role.
     */
    public ramRoleName: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property restartPolicy: The policy for restarting the instance. Default value: Always.
     */
    public restartPolicy: string | ros.IResolvable | undefined;

    /**
     * @Property securityContextSysctl: ECI Sysctl is valid for every container in ECI.
     * Currently only two Sysctl keyNames are supported:
     * Kernel.shm_rmid_forced
     * Kernel.msgmax
     */
    public securityContextSysctl: Array<RosContainerGroup.SecurityContextSysctlProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property securityGroupId: The ID of the security group to which the instance belongs. Instances in the same security group can access one another.
     * If no security group is specified, the system automatically uses the default security group in the region you select.
     * If you do not have a default security group in this region, the system automatically creates a default security group and adds the container protocol and port you declared to the inbound direction rules of this security group.
     */
    public securityGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property slsEnable: Enable user log collection. The default is False.
     */
    public slsEnable: boolean | ros.IResolvable | undefined;

    /**
     * @Property spotPriceLimit: Set the hourly maximum price of the instance. It supports a maximum of 3 decimal places. It takes effect when the value of the parameter SpotStrategy is SpotWithPriceLimit.
     */
    public spotPriceLimit: number | ros.IResolvable | undefined;

    /**
     * @Property spotStrategy: Instance preemption strategy.
     * Ranges:
     * NoSpot (default): normal pay-as-you-go instances.
     * SpotWithPriceLimit: Preemptive instance that sets a cap price.
     * SpotAsPriceGo: The system automatically bids, following the current market actual price.
     */
    public spotStrategy: string | ros.IResolvable | undefined;

    /**
     * @Property tag: The list of container group tags in the form of key/value pairs. You can define a maximum of 20 tags for each container group.
     */
    public tag: Array<ros.RosTag | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property terminationGracePeriodSeconds: The buffer time for the program to handle operations before it is stopped.
     */
    public terminationGracePeriodSeconds: number | ros.IResolvable | undefined;

    /**
     * @Property volume: The data volume. You can specify a maximum of 20 data volumes.
     */
    public volume: Array<RosContainerGroup.VolumeProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property vSwitchId: The ID of the specified VSwitch.
     * If no switch is specified, the system automatically uses the default switch in the default VPC in the selected region.
     * If no default VPC or default switch is available in the region, the system automatically creates a default VPC and a default switch
     */
    public vSwitchId: string | ros.IResolvable | undefined;

    /**
     * @Property zoneId: The ID of the zone in which the instance resides. If you leave the parameter blank, the system assigns a zone for you. The default value is blank.
     */
    public zoneId: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ECI::ContainerGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosContainerGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosContainerGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrContainerGroupId = this.getAtt('ContainerGroupId');
        this.attrContainerGroupName = this.getAtt('ContainerGroupName');
        this.attrEniInstanceId = this.getAtt('EniInstanceId');
        this.attrInternetIp = this.getAtt('InternetIp');
        this.attrIntranetIp = this.getAtt('IntranetIp');
        this.attrIpv6Address = this.getAtt('Ipv6Address');
        this.attrRegionId = this.getAtt('RegionId');
        this.attrSecurityGroupId = this.getAtt('SecurityGroupId');
        this.attrVSwitchId = this.getAtt('VSwitchId');
        this.attrZoneId = this.getAtt('ZoneId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.container = props.container;
        this.containerGroupName = props.containerGroupName;
        this.acrRegistryInfo = props.acrRegistryInfo;
        this.activeDeadlineSeconds = props.activeDeadlineSeconds;
        this.autoMatchImageCache = props.autoMatchImageCache;
        this.cpu = props.cpu;
        this.dnsConfig = props.dnsConfig;
        this.eipInstanceId = props.eipInstanceId;
        this.hostAliase = props.hostAliase;
        this.imageRegistryCredential = props.imageRegistryCredential;
        this.imageSnapshotId = props.imageSnapshotId;
        this.initContainer = props.initContainer;
        this.instanceType = props.instanceType;
        this.ipv6AddressCount = props.ipv6AddressCount;
        this.memory = props.memory;
        this.ramRoleName = props.ramRoleName;
        this.resourceGroupId = props.resourceGroupId;
        this.restartPolicy = props.restartPolicy;
        this.securityContextSysctl = props.securityContextSysctl;
        this.securityGroupId = props.securityGroupId;
        this.slsEnable = props.slsEnable;
        this.spotPriceLimit = props.spotPriceLimit;
        this.spotStrategy = props.spotStrategy;
        this.tag = props.tag;
        this.terminationGracePeriodSeconds = props.terminationGracePeriodSeconds;
        this.volume = props.volume;
        this.vSwitchId = props.vSwitchId;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            container: this.container,
            containerGroupName: this.containerGroupName,
            acrRegistryInfo: this.acrRegistryInfo,
            activeDeadlineSeconds: this.activeDeadlineSeconds,
            autoMatchImageCache: this.autoMatchImageCache,
            cpu: this.cpu,
            dnsConfig: this.dnsConfig,
            eipInstanceId: this.eipInstanceId,
            hostAliase: this.hostAliase,
            imageRegistryCredential: this.imageRegistryCredential,
            imageSnapshotId: this.imageSnapshotId,
            initContainer: this.initContainer,
            instanceType: this.instanceType,
            ipv6AddressCount: this.ipv6AddressCount,
            memory: this.memory,
            ramRoleName: this.ramRoleName,
            resourceGroupId: this.resourceGroupId,
            restartPolicy: this.restartPolicy,
            securityContextSysctl: this.securityContextSysctl,
            securityGroupId: this.securityGroupId,
            slsEnable: this.slsEnable,
            spotPriceLimit: this.spotPriceLimit,
            spotStrategy: this.spotStrategy,
            tag: this.tag,
            terminationGracePeriodSeconds: this.terminationGracePeriodSeconds,
            volume: this.volume,
            vSwitchId: this.vSwitchId,
            zoneId: this.zoneId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosContainerGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosContainerGroup {
    /**
     * @stability external
     */
    export interface AcrRegistryInfoProperty {
        /**
         * @Property instanceName: instance name
         */
        readonly instanceName?: string | ros.IResolvable;
        /**
         * @Property instanceId: Instance id
         */
        readonly instanceId: string | ros.IResolvable;
        /**
         * @Property regionId: The region to which it belongs. Optional, the default is the local region
         */
        readonly regionId?: string | ros.IResolvable;
        /**
         * @Property domain: domain
         */
        readonly domain?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AcrRegistryInfoProperty`
 *
 * @param properties - the TypeScript properties of a `AcrRegistryInfoProperty`
 *
 * @returns the result of the validation.
 */
function RosContainerGroup_AcrRegistryInfoPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('regionId', ros.validateString)(properties.regionId));
    errors.collect(ros.propertyValidator('domain', ros.listValidator(ros.validateString))(properties.domain));
    return errors.wrap('supplied properties not correct for "AcrRegistryInfoProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECI::ContainerGroup.AcrRegistryInfo` resource
 *
 * @param properties - the TypeScript properties of a `AcrRegistryInfoProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECI::ContainerGroup.AcrRegistryInfo` resource.
 */
// @ts-ignore TS6133
function rosContainerGroupAcrRegistryInfoPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosContainerGroup_AcrRegistryInfoPropertyValidator(properties).assertSuccess();
    return {
      InstanceName: ros.stringToRosTemplate(properties.instanceName),
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
      RegionId: ros.stringToRosTemplate(properties.regionId),
      Domain: ros.listMapper(ros.stringToRosTemplate)(properties.domain),
    };
}

export namespace RosContainerGroup {
    /**
     * @stability external
     */
    export interface ConfigFileVolumeConfigFileToPathProperty {
        /**
         * @Property path: The relative path in the configuration file. You can specify a location of a directory relative to another directory.
         */
        readonly path: string | ros.IResolvable;
        /**
         * @Property content: The content of the configuration file. Maximum size: 32 KB.
         */
        readonly content?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ConfigFileVolumeConfigFileToPathProperty`
 *
 * @param properties - the TypeScript properties of a `ConfigFileVolumeConfigFileToPathProperty`
 *
 * @returns the result of the validation.
 */
function RosContainerGroup_ConfigFileVolumeConfigFileToPathPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('path', ros.requiredValidator)(properties.path));
    errors.collect(ros.propertyValidator('path', ros.validateString)(properties.path));
    errors.collect(ros.propertyValidator('content', ros.validateString)(properties.content));
    return errors.wrap('supplied properties not correct for "ConfigFileVolumeConfigFileToPathProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECI::ContainerGroup.ConfigFileVolumeConfigFileToPath` resource
 *
 * @param properties - the TypeScript properties of a `ConfigFileVolumeConfigFileToPathProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECI::ContainerGroup.ConfigFileVolumeConfigFileToPath` resource.
 */
// @ts-ignore TS6133
function rosContainerGroupConfigFileVolumeConfigFileToPathPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosContainerGroup_ConfigFileVolumeConfigFileToPathPropertyValidator(properties).assertSuccess();
    return {
      Path: ros.stringToRosTemplate(properties.path),
      Content: ros.stringToRosTemplate(properties.content),
    };
}

export namespace RosContainerGroup {
    /**
     * @stability external
     */
    export interface ContainerProperty {
        /**
         * @Property readinessProbe: The readiness probe.
         */
        readonly readinessProbe?: RosContainerGroup.ReadinessProbeProperty | ros.IResolvable;
        /**
         * @Property livenessProbe: The liveness probe.
         */
        readonly livenessProbe?: RosContainerGroup.LivenessProbeProperty | ros.IResolvable;
        /**
         * @Property memory: The memory assigned to the container. Unit: GiB.
         */
        readonly memory?: number | ros.IResolvable;
        /**
         * @Property port: The open ports and protocols. You can set a maximum of 100 ports.
         */
        readonly port?: Array<RosContainerGroup.PortProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property cpu: The number of vCPUs assigned to the container. Unit: vCPUs (cores).
         */
        readonly cpu?: number | ros.IResolvable;
        /**
         * @Property image: The container image.
         */
        readonly image: string | ros.IResolvable;
        /**
         * @Property stdinOnce: undefined
         */
        readonly stdinOnce?: boolean | ros.IResolvable;
        /**
         * @Property name: The name of the container.
         */
        readonly name: string | ros.IResolvable;
        /**
         * @Property stdin: undefined
         */
        readonly stdin?: boolean | ros.IResolvable;
        /**
         * @Property workingDir: The working directory for the container.
         */
        readonly workingDir?: string | ros.IResolvable;
        /**
         * @Property imagePullPolicy: The image pull policy. You can use it to pull the image from the image repository.
         */
        readonly imagePullPolicy?: string | ros.IResolvable;
        /**
         * @Property command: The list of commands that you want to send to a container to run. You can specify a maximum of 1 commands. Maximum length per string: 256 characters.
         */
        readonly command?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property arg: The arguments passed to the commands. A maximum of 10 arguments are supported.
         */
        readonly arg?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property tty: undefined
         */
        readonly tty?: boolean | ros.IResolvable;
        /**
         * @Property securityContext: The security context of the container group.
         */
        readonly securityContext?: RosContainerGroup.SecurityContextProperty | ros.IResolvable;
        /**
         * @Property volumeMount: The number of volumes that are mounted to the container. A maximum of 16 volumes are supported.
         */
        readonly volumeMount?: Array<RosContainerGroup.VolumeMountProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property environmentVar: Environment variables in the operating system of the container. Each environment variable is a key/value pair, and both the key and value are strings. A maximum of 100 environment variables are supported. The key indicates the name of a variable. The value indicates the value of the variable.
         */
        readonly environmentVar?: Array<RosContainerGroup.EnvironmentVarProperty | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ContainerProperty`
 *
 * @param properties - the TypeScript properties of a `ContainerProperty`
 *
 * @returns the result of the validation.
 */
function RosContainerGroup_ContainerPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('readinessProbe', RosContainerGroup_ReadinessProbePropertyValidator)(properties.readinessProbe));
    errors.collect(ros.propertyValidator('livenessProbe', RosContainerGroup_LivenessProbePropertyValidator)(properties.livenessProbe));
    errors.collect(ros.propertyValidator('memory', ros.validateNumber)(properties.memory));
    if(properties.port && (Array.isArray(properties.port) || (typeof properties.port) === 'string')) {
        errors.collect(ros.propertyValidator('port', ros.validateLength)({
            data: properties.port.length,
            min: undefined,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('port', ros.listValidator(RosContainerGroup_PortPropertyValidator))(properties.port));
    errors.collect(ros.propertyValidator('cpu', ros.validateNumber)(properties.cpu));
    errors.collect(ros.propertyValidator('image', ros.requiredValidator)(properties.image));
    errors.collect(ros.propertyValidator('image', ros.validateString)(properties.image));
    errors.collect(ros.propertyValidator('stdinOnce', ros.validateBoolean)(properties.stdinOnce));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    errors.collect(ros.propertyValidator('stdin', ros.validateBoolean)(properties.stdin));
    errors.collect(ros.propertyValidator('workingDir', ros.validateString)(properties.workingDir));
    errors.collect(ros.propertyValidator('imagePullPolicy', ros.validateString)(properties.imagePullPolicy));
    if(properties.command && (Array.isArray(properties.command) || (typeof properties.command) === 'string')) {
        errors.collect(ros.propertyValidator('command', ros.validateLength)({
            data: properties.command.length,
            min: undefined,
            max: 1,
          }));
    }
    errors.collect(ros.propertyValidator('command', ros.listValidator(ros.validateString))(properties.command));
    if(properties.arg && (Array.isArray(properties.arg) || (typeof properties.arg) === 'string')) {
        errors.collect(ros.propertyValidator('arg', ros.validateLength)({
            data: properties.arg.length,
            min: undefined,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('arg', ros.listValidator(ros.validateString))(properties.arg));
    errors.collect(ros.propertyValidator('tty', ros.validateBoolean)(properties.tty));
    errors.collect(ros.propertyValidator('securityContext', RosContainerGroup_SecurityContextPropertyValidator)(properties.securityContext));
    if(properties.volumeMount && (Array.isArray(properties.volumeMount) || (typeof properties.volumeMount) === 'string')) {
        errors.collect(ros.propertyValidator('volumeMount', ros.validateLength)({
            data: properties.volumeMount.length,
            min: undefined,
            max: 16,
          }));
    }
    errors.collect(ros.propertyValidator('volumeMount', ros.listValidator(RosContainerGroup_VolumeMountPropertyValidator))(properties.volumeMount));
    if(properties.environmentVar && (Array.isArray(properties.environmentVar) || (typeof properties.environmentVar) === 'string')) {
        errors.collect(ros.propertyValidator('environmentVar', ros.validateLength)({
            data: properties.environmentVar.length,
            min: undefined,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('environmentVar', ros.listValidator(RosContainerGroup_EnvironmentVarPropertyValidator))(properties.environmentVar));
    return errors.wrap('supplied properties not correct for "ContainerProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECI::ContainerGroup.Container` resource
 *
 * @param properties - the TypeScript properties of a `ContainerProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECI::ContainerGroup.Container` resource.
 */
// @ts-ignore TS6133
function rosContainerGroupContainerPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosContainerGroup_ContainerPropertyValidator(properties).assertSuccess();
    return {
      ReadinessProbe: rosContainerGroupReadinessProbePropertyToRosTemplate(properties.readinessProbe),
      LivenessProbe: rosContainerGroupLivenessProbePropertyToRosTemplate(properties.livenessProbe),
      Memory: ros.numberToRosTemplate(properties.memory),
      Port: ros.listMapper(rosContainerGroupPortPropertyToRosTemplate)(properties.port),
      Cpu: ros.numberToRosTemplate(properties.cpu),
      Image: ros.stringToRosTemplate(properties.image),
      StdinOnce: ros.booleanToRosTemplate(properties.stdinOnce),
      Name: ros.stringToRosTemplate(properties.name),
      Stdin: ros.booleanToRosTemplate(properties.stdin),
      WorkingDir: ros.stringToRosTemplate(properties.workingDir),
      ImagePullPolicy: ros.stringToRosTemplate(properties.imagePullPolicy),
      Command: ros.listMapper(ros.stringToRosTemplate)(properties.command),
      Arg: ros.listMapper(ros.stringToRosTemplate)(properties.arg),
      Tty: ros.booleanToRosTemplate(properties.tty),
      SecurityContext: rosContainerGroupSecurityContextPropertyToRosTemplate(properties.securityContext),
      VolumeMount: ros.listMapper(rosContainerGroupVolumeMountPropertyToRosTemplate)(properties.volumeMount),
      EnvironmentVar: ros.listMapper(rosContainerGroupEnvironmentVarPropertyToRosTemplate)(properties.environmentVar),
    };
}

export namespace RosContainerGroup {
    /**
     * @stability external
     */
    export interface DnsConfigProperty {
        /**
         * @Property nameServer: The list of IP addresses for DNS servers.
         */
        readonly nameServer?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property search: The list of DNS search domains.
         */
        readonly search?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property option: The list of options. Each option includes a name and a value. The value is optional.
         */
        readonly option?: Array<RosContainerGroup.OptionProperty | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `DnsConfigProperty`
 *
 * @param properties - the TypeScript properties of a `DnsConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosContainerGroup_DnsConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('nameServer', ros.listValidator(ros.validateString))(properties.nameServer));
    errors.collect(ros.propertyValidator('search', ros.listValidator(ros.validateString))(properties.search));
    errors.collect(ros.propertyValidator('option', ros.listValidator(RosContainerGroup_OptionPropertyValidator))(properties.option));
    return errors.wrap('supplied properties not correct for "DnsConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECI::ContainerGroup.DnsConfig` resource
 *
 * @param properties - the TypeScript properties of a `DnsConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECI::ContainerGroup.DnsConfig` resource.
 */
// @ts-ignore TS6133
function rosContainerGroupDnsConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosContainerGroup_DnsConfigPropertyValidator(properties).assertSuccess();
    return {
      NameServer: ros.listMapper(ros.stringToRosTemplate)(properties.nameServer),
      Search: ros.listMapper(ros.stringToRosTemplate)(properties.search),
      Option: ros.listMapper(rosContainerGroupOptionPropertyToRosTemplate)(properties.option),
    };
}

export namespace RosContainerGroup {
    /**
     * @stability external
     */
    export interface EnvironmentVarProperty {
        /**
         * @Property value: The value of the variable.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: The name of the variable. The name must be [1,128] characters in length and can contain [, 0-9a-zA-Z, ], and underscores (_). It cannot start with a digit.
         */
        readonly key?: string | ros.IResolvable;
        /**
         * @Property fieldRefFieldPath: A reference to another variable. Currently, only status.podIP is supported.
         */
        readonly fieldRefFieldPath?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `EnvironmentVarProperty`
 *
 * @param properties - the TypeScript properties of a `EnvironmentVarProperty`
 *
 * @returns the result of the validation.
 */
function RosContainerGroup_EnvironmentVarPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.value && (Array.isArray(properties.value) || (typeof properties.value) === 'string')) {
        errors.collect(ros.propertyValidator('value', ros.validateLength)({
            data: properties.value.length,
            min: 0,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    if(properties.key && (Array.isArray(properties.key) || (typeof properties.key) === 'string')) {
        errors.collect(ros.propertyValidator('key', ros.validateLength)({
            data: properties.key.length,
            min: 1,
            max: 128,
          }));
    }
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    if(properties.fieldRefFieldPath && (typeof properties.fieldRefFieldPath) !== 'object') {
        errors.collect(ros.propertyValidator('fieldRefFieldPath', ros.validateAllowedValues)({
          data: properties.fieldRefFieldPath,
          allowedValues: ["status.podIP"],
        }));
    }
    errors.collect(ros.propertyValidator('fieldRefFieldPath', ros.validateString)(properties.fieldRefFieldPath));
    return errors.wrap('supplied properties not correct for "EnvironmentVarProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECI::ContainerGroup.EnvironmentVar` resource
 *
 * @param properties - the TypeScript properties of a `EnvironmentVarProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECI::ContainerGroup.EnvironmentVar` resource.
 */
// @ts-ignore TS6133
function rosContainerGroupEnvironmentVarPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosContainerGroup_EnvironmentVarPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
      FieldRefFieldPath: ros.stringToRosTemplate(properties.fieldRefFieldPath),
    };
}

export namespace RosContainerGroup {
    /**
     * @stability external
     */
    export interface HostAliaseProperty {
        /**
         * @Property ip: undefined
         */
        readonly ip?: string | ros.IResolvable;
        /**
         * @Property hostname: undefined
         */
        readonly hostname?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `HostAliaseProperty`
 *
 * @param properties - the TypeScript properties of a `HostAliaseProperty`
 *
 * @returns the result of the validation.
 */
function RosContainerGroup_HostAliasePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('ip', ros.validateString)(properties.ip));
    errors.collect(ros.propertyValidator('hostname', ros.listValidator(ros.validateString))(properties.hostname));
    return errors.wrap('supplied properties not correct for "HostAliaseProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECI::ContainerGroup.HostAliase` resource
 *
 * @param properties - the TypeScript properties of a `HostAliaseProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECI::ContainerGroup.HostAliase` resource.
 */
// @ts-ignore TS6133
function rosContainerGroupHostAliasePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosContainerGroup_HostAliasePropertyValidator(properties).assertSuccess();
    return {
      Ip: ros.stringToRosTemplate(properties.ip),
      Hostname: ros.listMapper(ros.stringToRosTemplate)(properties.hostname),
    };
}

export namespace RosContainerGroup {
    /**
     * @stability external
     */
    export interface ImageRegistryCredentialProperty {
        /**
         * @Property userName: The username that is used to log on to the image repository.
         */
        readonly userName: string | ros.IResolvable;
        /**
         * @Property server: The IP address of the image repository. This address does not include a protocol prefix, such as http:// or https://.
         */
        readonly server: string | ros.IResolvable;
        /**
         * @Property password: The password that is used to log on to the image repository.
         */
        readonly password: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ImageRegistryCredentialProperty`
 *
 * @param properties - the TypeScript properties of a `ImageRegistryCredentialProperty`
 *
 * @returns the result of the validation.
 */
function RosContainerGroup_ImageRegistryCredentialPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('userName', ros.requiredValidator)(properties.userName));
    errors.collect(ros.propertyValidator('userName', ros.validateString)(properties.userName));
    errors.collect(ros.propertyValidator('server', ros.requiredValidator)(properties.server));
    errors.collect(ros.propertyValidator('server', ros.validateString)(properties.server));
    errors.collect(ros.propertyValidator('password', ros.requiredValidator)(properties.password));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    return errors.wrap('supplied properties not correct for "ImageRegistryCredentialProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECI::ContainerGroup.ImageRegistryCredential` resource
 *
 * @param properties - the TypeScript properties of a `ImageRegistryCredentialProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECI::ContainerGroup.ImageRegistryCredential` resource.
 */
// @ts-ignore TS6133
function rosContainerGroupImageRegistryCredentialPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosContainerGroup_ImageRegistryCredentialPropertyValidator(properties).assertSuccess();
    return {
      UserName: ros.stringToRosTemplate(properties.userName),
      Server: ros.stringToRosTemplate(properties.server),
      Password: ros.stringToRosTemplate(properties.password),
    };
}

export namespace RosContainerGroup {
    /**
     * @stability external
     */
    export interface InitContainerProperty {
        /**
         * @Property workingDir: The working directory for the container.
         */
        readonly workingDir?: string | ros.IResolvable;
        /**
         * @Property imagePullPolicy: The image pull policy. You can use it to pull the image from the image repository.
         */
        readonly imagePullPolicy?: string | ros.IResolvable;
        /**
         * @Property command: The list of commands that you want to send to a container to run. You can specify a maximum of 1 commands. Maximum length per string: 256 characters.
         */
        readonly command?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property memory: The memory assigned to the container. Unit: GiB.
         */
        readonly memory?: number | ros.IResolvable;
        /**
         * @Property port: The open ports and protocols. You can set a maximum of 100 ports.
         */
        readonly port?: Array<RosContainerGroup.InitContainerPortProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property arg: The arguments passed to the commands. A maximum of 10 arguments are supported.
         */
        readonly arg?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property securityContext: The security context of the container group.
         */
        readonly securityContext?: RosContainerGroup.InitContainerSecurityContextProperty | ros.IResolvable;
        /**
         * @Property volumeMount: The number of volumes that are mounted to the container. A maximum of 16 volumes are supported.
         */
        readonly volumeMount?: Array<RosContainerGroup.InitContainerVolumeMountProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property cpu: The number of vCPUs assigned to the container. Unit: vCPUs (cores).
         */
        readonly cpu?: number | ros.IResolvable;
        /**
         * @Property image: The container image.
         */
        readonly image?: string | ros.IResolvable;
        /**
         * @Property environmentVar: Environment variables in the operating system of the container. Each environment variable is a key/value pair, and both the key and value are strings. A maximum of 100 environment variables are supported. The key indicates the name of a variable. The value indicates the value of the variable.
         */
        readonly environmentVar?: Array<RosContainerGroup.InitContainerEnvironmentVarProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property name: The name of the container.
         */
        readonly name?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `InitContainerProperty`
 *
 * @param properties - the TypeScript properties of a `InitContainerProperty`
 *
 * @returns the result of the validation.
 */
function RosContainerGroup_InitContainerPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('workingDir', ros.validateString)(properties.workingDir));
    errors.collect(ros.propertyValidator('imagePullPolicy', ros.validateString)(properties.imagePullPolicy));
    if(properties.command && (Array.isArray(properties.command) || (typeof properties.command) === 'string')) {
        errors.collect(ros.propertyValidator('command', ros.validateLength)({
            data: properties.command.length,
            min: undefined,
            max: 1,
          }));
    }
    errors.collect(ros.propertyValidator('command', ros.listValidator(ros.validateString))(properties.command));
    errors.collect(ros.propertyValidator('memory', ros.validateNumber)(properties.memory));
    if(properties.port && (Array.isArray(properties.port) || (typeof properties.port) === 'string')) {
        errors.collect(ros.propertyValidator('port', ros.validateLength)({
            data: properties.port.length,
            min: undefined,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('port', ros.listValidator(RosContainerGroup_InitContainerPortPropertyValidator))(properties.port));
    if(properties.arg && (Array.isArray(properties.arg) || (typeof properties.arg) === 'string')) {
        errors.collect(ros.propertyValidator('arg', ros.validateLength)({
            data: properties.arg.length,
            min: undefined,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('arg', ros.listValidator(ros.validateString))(properties.arg));
    errors.collect(ros.propertyValidator('securityContext', RosContainerGroup_InitContainerSecurityContextPropertyValidator)(properties.securityContext));
    if(properties.volumeMount && (Array.isArray(properties.volumeMount) || (typeof properties.volumeMount) === 'string')) {
        errors.collect(ros.propertyValidator('volumeMount', ros.validateLength)({
            data: properties.volumeMount.length,
            min: undefined,
            max: 16,
          }));
    }
    errors.collect(ros.propertyValidator('volumeMount', ros.listValidator(RosContainerGroup_InitContainerVolumeMountPropertyValidator))(properties.volumeMount));
    errors.collect(ros.propertyValidator('cpu', ros.validateNumber)(properties.cpu));
    errors.collect(ros.propertyValidator('image', ros.validateString)(properties.image));
    if(properties.environmentVar && (Array.isArray(properties.environmentVar) || (typeof properties.environmentVar) === 'string')) {
        errors.collect(ros.propertyValidator('environmentVar', ros.validateLength)({
            data: properties.environmentVar.length,
            min: undefined,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('environmentVar', ros.listValidator(RosContainerGroup_InitContainerEnvironmentVarPropertyValidator))(properties.environmentVar));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "InitContainerProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECI::ContainerGroup.InitContainer` resource
 *
 * @param properties - the TypeScript properties of a `InitContainerProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECI::ContainerGroup.InitContainer` resource.
 */
// @ts-ignore TS6133
function rosContainerGroupInitContainerPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosContainerGroup_InitContainerPropertyValidator(properties).assertSuccess();
    return {
      WorkingDir: ros.stringToRosTemplate(properties.workingDir),
      ImagePullPolicy: ros.stringToRosTemplate(properties.imagePullPolicy),
      Command: ros.listMapper(ros.stringToRosTemplate)(properties.command),
      Memory: ros.numberToRosTemplate(properties.memory),
      Port: ros.listMapper(rosContainerGroupInitContainerPortPropertyToRosTemplate)(properties.port),
      Arg: ros.listMapper(ros.stringToRosTemplate)(properties.arg),
      SecurityContext: rosContainerGroupInitContainerSecurityContextPropertyToRosTemplate(properties.securityContext),
      VolumeMount: ros.listMapper(rosContainerGroupInitContainerVolumeMountPropertyToRosTemplate)(properties.volumeMount),
      Cpu: ros.numberToRosTemplate(properties.cpu),
      Image: ros.stringToRosTemplate(properties.image),
      EnvironmentVar: ros.listMapper(rosContainerGroupInitContainerEnvironmentVarPropertyToRosTemplate)(properties.environmentVar),
      Name: ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosContainerGroup {
    /**
     * @stability external
     */
    export interface InitContainerEnvironmentVarProperty {
        /**
         * @Property value: The value of the variable. The value must be [0,256] characters in length.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: The name of the variable. The name must be [1,128] characters in length and can contain [, 0-9a-zA-Z, ], and underscores (_). It cannot start with a digit.
         */
        readonly key?: string | ros.IResolvable;
        /**
         * @Property fieldRefFieldPath: A reference to another variable. Currently, only status.podIP is supported.
         */
        readonly fieldRefFieldPath?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `InitContainerEnvironmentVarProperty`
 *
 * @param properties - the TypeScript properties of a `InitContainerEnvironmentVarProperty`
 *
 * @returns the result of the validation.
 */
function RosContainerGroup_InitContainerEnvironmentVarPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.value && (Array.isArray(properties.value) || (typeof properties.value) === 'string')) {
        errors.collect(ros.propertyValidator('value', ros.validateLength)({
            data: properties.value.length,
            min: 0,
            max: 256,
          }));
    }
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    if(properties.key && (Array.isArray(properties.key) || (typeof properties.key) === 'string')) {
        errors.collect(ros.propertyValidator('key', ros.validateLength)({
            data: properties.key.length,
            min: 1,
            max: 128,
          }));
    }
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    if(properties.fieldRefFieldPath && (typeof properties.fieldRefFieldPath) !== 'object') {
        errors.collect(ros.propertyValidator('fieldRefFieldPath', ros.validateAllowedValues)({
          data: properties.fieldRefFieldPath,
          allowedValues: ["status.podIP"],
        }));
    }
    errors.collect(ros.propertyValidator('fieldRefFieldPath', ros.validateString)(properties.fieldRefFieldPath));
    return errors.wrap('supplied properties not correct for "InitContainerEnvironmentVarProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECI::ContainerGroup.InitContainerEnvironmentVar` resource
 *
 * @param properties - the TypeScript properties of a `InitContainerEnvironmentVarProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECI::ContainerGroup.InitContainerEnvironmentVar` resource.
 */
// @ts-ignore TS6133
function rosContainerGroupInitContainerEnvironmentVarPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosContainerGroup_InitContainerEnvironmentVarPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
      FieldRefFieldPath: ros.stringToRosTemplate(properties.fieldRefFieldPath),
    };
}

export namespace RosContainerGroup {
    /**
     * @stability external
     */
    export interface InitContainerPortProperty {
        /**
         * @Property port: The port number. Valid values: 1-65535.
         */
        readonly port?: number | ros.IResolvable;
        /**
         * @Property protocol: The protocol that the port uses. Valid values: TCP and UDP
         */
        readonly protocol?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `InitContainerPortProperty`
 *
 * @param properties - the TypeScript properties of a `InitContainerPortProperty`
 *
 * @returns the result of the validation.
 */
function RosContainerGroup_InitContainerPortPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.port && (typeof properties.port) !== 'object') {
        errors.collect(ros.propertyValidator('port', ros.validateRange)({
            data: properties.port,
            min: 1,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('port', ros.validateNumber)(properties.port));
    if(properties.protocol && (typeof properties.protocol) !== 'object') {
        errors.collect(ros.propertyValidator('protocol', ros.validateAllowedValues)({
          data: properties.protocol,
          allowedValues: ["TCP","UDP"],
        }));
    }
    errors.collect(ros.propertyValidator('protocol', ros.validateString)(properties.protocol));
    return errors.wrap('supplied properties not correct for "InitContainerPortProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECI::ContainerGroup.InitContainerPort` resource
 *
 * @param properties - the TypeScript properties of a `InitContainerPortProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECI::ContainerGroup.InitContainerPort` resource.
 */
// @ts-ignore TS6133
function rosContainerGroupInitContainerPortPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosContainerGroup_InitContainerPortPropertyValidator(properties).assertSuccess();
    return {
      Port: ros.numberToRosTemplate(properties.port),
      Protocol: ros.stringToRosTemplate(properties.protocol),
    };
}

export namespace RosContainerGroup {
    /**
     * @stability external
     */
    export interface InitContainerSecurityContextProperty {
        /**
         * @Property runAsUser: Valid value: 1337.
         */
        readonly runAsUser?: number | ros.IResolvable;
        /**
         * @Property readOnlyRootFilesystem: Valid value: True.
         */
        readonly readOnlyRootFilesystem?: boolean | ros.IResolvable;
        /**
         * @Property capabilityAdd: undefined
         */
        readonly capabilityAdd?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `InitContainerSecurityContextProperty`
 *
 * @param properties - the TypeScript properties of a `InitContainerSecurityContextProperty`
 *
 * @returns the result of the validation.
 */
function RosContainerGroup_InitContainerSecurityContextPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.runAsUser && (typeof properties.runAsUser) !== 'object') {
        errors.collect(ros.propertyValidator('runAsUser', ros.validateAllowedValues)({
          data: properties.runAsUser,
          allowedValues: [1337],
        }));
    }
    errors.collect(ros.propertyValidator('runAsUser', ros.validateNumber)(properties.runAsUser));
    if(properties.readOnlyRootFilesystem && (typeof properties.readOnlyRootFilesystem) !== 'object') {
        errors.collect(ros.propertyValidator('readOnlyRootFilesystem', ros.validateAllowedValues)({
          data: properties.readOnlyRootFilesystem,
          allowedValues: [true],
        }));
    }
    errors.collect(ros.propertyValidator('readOnlyRootFilesystem', ros.validateBoolean)(properties.readOnlyRootFilesystem));
    errors.collect(ros.propertyValidator('capabilityAdd', ros.listValidator(ros.validateString))(properties.capabilityAdd));
    return errors.wrap('supplied properties not correct for "InitContainerSecurityContextProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECI::ContainerGroup.InitContainerSecurityContext` resource
 *
 * @param properties - the TypeScript properties of a `InitContainerSecurityContextProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECI::ContainerGroup.InitContainerSecurityContext` resource.
 */
// @ts-ignore TS6133
function rosContainerGroupInitContainerSecurityContextPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosContainerGroup_InitContainerSecurityContextPropertyValidator(properties).assertSuccess();
    return {
      RunAsUser: ros.numberToRosTemplate(properties.runAsUser),
      ReadOnlyRootFilesystem: ros.booleanToRosTemplate(properties.readOnlyRootFilesystem),
      CapabilityAdd: ros.listMapper(ros.stringToRosTemplate)(properties.capabilityAdd),
    };
}

export namespace RosContainerGroup {
    /**
     * @stability external
     */
    export interface InitContainerVolumeMountProperty {
        /**
         * @Property readOnly: Default value: False.
         */
        readonly readOnly?: boolean | ros.IResolvable;
        /**
         * @Property mountPath: A mount path. The data in the target directory is overwritten by the data in the mounted volume. Therefore, use caution when you mount a volume to a directory.
         */
        readonly mountPath?: string | ros.IResolvable;
        /**
         * @Property name: The name of the volume. The name is the same as that specified for the Name parameter in the Volume section.
         */
        readonly name?: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `InitContainerVolumeMountProperty`
 *
 * @param properties - the TypeScript properties of a `InitContainerVolumeMountProperty`
 *
 * @returns the result of the validation.
 */
function RosContainerGroup_InitContainerVolumeMountPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('readOnly', ros.validateBoolean)(properties.readOnly));
    errors.collect(ros.propertyValidator('mountPath', ros.validateString)(properties.mountPath));
    errors.collect(ros.propertyValidator('name', ros.validateNumber)(properties.name));
    return errors.wrap('supplied properties not correct for "InitContainerVolumeMountProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECI::ContainerGroup.InitContainerVolumeMount` resource
 *
 * @param properties - the TypeScript properties of a `InitContainerVolumeMountProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECI::ContainerGroup.InitContainerVolumeMount` resource.
 */
// @ts-ignore TS6133
function rosContainerGroupInitContainerVolumeMountPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosContainerGroup_InitContainerVolumeMountPropertyValidator(properties).assertSuccess();
    return {
      ReadOnly: ros.booleanToRosTemplate(properties.readOnly),
      MountPath: ros.stringToRosTemplate(properties.mountPath),
      Name: ros.numberToRosTemplate(properties.name),
    };
}

export namespace RosContainerGroup {
    /**
     * @stability external
     */
    export interface LivenessProbeProperty {
        /**
         * @Property timeoutSeconds: The number of seconds after which the probe times out. Default value: 1. Minimum value: 1.
         */
        readonly timeoutSeconds?: number | ros.IResolvable;
        /**
         * @Property initialDelaySeconds: The number of seconds after the container has started before probes are initiated.
         */
        readonly initialDelaySeconds?: number | ros.IResolvable;
        /**
         * @Property periodSeconds: Specifies the period at which the probe is performed. Unit: seconds. Default value: 10. Minimum value: 1.
         */
        readonly periodSeconds?: number | ros.IResolvable;
        /**
         * @Property failureThreshold: The minimum consecutive failures for the probe to be considered to have failed after having succeeded. Default value: 3.
         */
        readonly failureThreshold?: number | ros.IResolvable;
        /**
         * @Property successThreshold: The minimum consecutive successes for the probe to be considered successful after having failed. Default value: 1.
         */
        readonly successThreshold?: number | ros.IResolvable;
        /**
         * @Property execCommand: The commands for running the readiness probe.
         */
        readonly execCommand?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property httpGetPath: The path to which the system sends an HTTP GET request to perform the check.
         */
        readonly httpGetPath?: string | ros.IResolvable;
        /**
         * @Property httpGetPort: The port to which the system sends an HTTP GET request to perform the check.
         */
        readonly httpGetPort?: number | ros.IResolvable;
        /**
         * @Property httpGetScheme: The protocol that is used to connect the host. Valid values: HTTP and HTTPS.
         */
        readonly httpGetScheme?: string | ros.IResolvable;
        /**
         * @Property tcpSocketPort: The port to which the system sends a TCP SOCKET request to perform the check.
         */
        readonly tcpSocketPort?: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `LivenessProbeProperty`
 *
 * @param properties - the TypeScript properties of a `LivenessProbeProperty`
 *
 * @returns the result of the validation.
 */
function RosContainerGroup_LivenessProbePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.timeoutSeconds && (typeof properties.timeoutSeconds) !== 'object') {
        errors.collect(ros.propertyValidator('timeoutSeconds', ros.validateRange)({
            data: properties.timeoutSeconds,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('timeoutSeconds', ros.validateNumber)(properties.timeoutSeconds));
    errors.collect(ros.propertyValidator('initialDelaySeconds', ros.validateNumber)(properties.initialDelaySeconds));
    if(properties.periodSeconds && (typeof properties.periodSeconds) !== 'object') {
        errors.collect(ros.propertyValidator('periodSeconds', ros.validateRange)({
            data: properties.periodSeconds,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('periodSeconds', ros.validateNumber)(properties.periodSeconds));
    errors.collect(ros.propertyValidator('failureThreshold', ros.validateNumber)(properties.failureThreshold));
    errors.collect(ros.propertyValidator('successThreshold', ros.validateNumber)(properties.successThreshold));
    errors.collect(ros.propertyValidator('execCommand', ros.listValidator(ros.validateString))(properties.execCommand));
    errors.collect(ros.propertyValidator('httpGetPath', ros.validateString)(properties.httpGetPath));
    errors.collect(ros.propertyValidator('httpGetPort', ros.validateNumber)(properties.httpGetPort));
    if(properties.httpGetScheme && (typeof properties.httpGetScheme) !== 'object') {
        errors.collect(ros.propertyValidator('httpGetScheme', ros.validateAllowedValues)({
          data: properties.httpGetScheme,
          allowedValues: ["HTTP","HTTPS"],
        }));
    }
    errors.collect(ros.propertyValidator('httpGetScheme', ros.validateString)(properties.httpGetScheme));
    errors.collect(ros.propertyValidator('tcpSocketPort', ros.validateNumber)(properties.tcpSocketPort));
    return errors.wrap('supplied properties not correct for "LivenessProbeProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECI::ContainerGroup.LivenessProbe` resource
 *
 * @param properties - the TypeScript properties of a `LivenessProbeProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECI::ContainerGroup.LivenessProbe` resource.
 */
// @ts-ignore TS6133
function rosContainerGroupLivenessProbePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosContainerGroup_LivenessProbePropertyValidator(properties).assertSuccess();
    return {
      TimeoutSeconds: ros.numberToRosTemplate(properties.timeoutSeconds),
      InitialDelaySeconds: ros.numberToRosTemplate(properties.initialDelaySeconds),
      PeriodSeconds: ros.numberToRosTemplate(properties.periodSeconds),
      FailureThreshold: ros.numberToRosTemplate(properties.failureThreshold),
      SuccessThreshold: ros.numberToRosTemplate(properties.successThreshold),
      ExecCommand: ros.listMapper(ros.stringToRosTemplate)(properties.execCommand),
      HttpGetPath: ros.stringToRosTemplate(properties.httpGetPath),
      HttpGetPort: ros.numberToRosTemplate(properties.httpGetPort),
      HttpGetScheme: ros.stringToRosTemplate(properties.httpGetScheme),
      TcpSocketPort: ros.numberToRosTemplate(properties.tcpSocketPort),
    };
}

export namespace RosContainerGroup {
    /**
     * @stability external
     */
    export interface OptionProperty {
        /**
         * @Property value: The value of the option.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property name: The name of the option.
         */
        readonly name?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `OptionProperty`
 *
 * @param properties - the TypeScript properties of a `OptionProperty`
 *
 * @returns the result of the validation.
 */
function RosContainerGroup_OptionPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "OptionProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECI::ContainerGroup.Option` resource
 *
 * @param properties - the TypeScript properties of a `OptionProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECI::ContainerGroup.Option` resource.
 */
// @ts-ignore TS6133
function rosContainerGroupOptionPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosContainerGroup_OptionPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Name: ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosContainerGroup {
    /**
     * @stability external
     */
    export interface PortProperty {
        /**
         * @Property port: The port number. Valid values: 1-65535.
         */
        readonly port?: number | ros.IResolvable;
        /**
         * @Property protocol: The protocol that the port uses. Valid values: TCP and UDP
         */
        readonly protocol?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `PortProperty`
 *
 * @param properties - the TypeScript properties of a `PortProperty`
 *
 * @returns the result of the validation.
 */
function RosContainerGroup_PortPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.port && (typeof properties.port) !== 'object') {
        errors.collect(ros.propertyValidator('port', ros.validateRange)({
            data: properties.port,
            min: 1,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('port', ros.validateNumber)(properties.port));
    if(properties.protocol && (typeof properties.protocol) !== 'object') {
        errors.collect(ros.propertyValidator('protocol', ros.validateAllowedValues)({
          data: properties.protocol,
          allowedValues: ["TCP","UDP"],
        }));
    }
    errors.collect(ros.propertyValidator('protocol', ros.validateString)(properties.protocol));
    return errors.wrap('supplied properties not correct for "PortProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECI::ContainerGroup.Port` resource
 *
 * @param properties - the TypeScript properties of a `PortProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECI::ContainerGroup.Port` resource.
 */
// @ts-ignore TS6133
function rosContainerGroupPortPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosContainerGroup_PortPropertyValidator(properties).assertSuccess();
    return {
      Port: ros.numberToRosTemplate(properties.port),
      Protocol: ros.stringToRosTemplate(properties.protocol),
    };
}

export namespace RosContainerGroup {
    /**
     * @stability external
     */
    export interface ReadinessProbeProperty {
        /**
         * @Property timeoutSeconds: The number of seconds after which the probe times out. Default value: 1. Minimum value: 1.
         */
        readonly timeoutSeconds?: number | ros.IResolvable;
        /**
         * @Property initialDelaySeconds: The number of seconds after the container has started before probes are initiated.
         */
        readonly initialDelaySeconds?: number | ros.IResolvable;
        /**
         * @Property periodSeconds: Specifies the period at which the probe is performed. Unit: seconds. Default value: 10. Minimum value: 1.
         */
        readonly periodSeconds?: number | ros.IResolvable;
        /**
         * @Property failureThreshold: The minimum consecutive failures for the probe to be considered to have failed after having succeeded. Default value: 3.
         */
        readonly failureThreshold?: number | ros.IResolvable;
        /**
         * @Property successThreshold: The minimum consecutive successes for the probe to be considered successful after having failed. Default value: 1.
         */
        readonly successThreshold?: number | ros.IResolvable;
        /**
         * @Property execCommand: The commands for running the readiness probe.
         */
        readonly execCommand?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property httpGetPath: The path to which the system sends an HTTP GET request to perform the check.
         */
        readonly httpGetPath?: string | ros.IResolvable;
        /**
         * @Property httpGetPort: The port to which the system sends an HTTP GET request to perform the check.
         */
        readonly httpGetPort?: number | ros.IResolvable;
        /**
         * @Property httpGetScheme: The protocol that is used to connect the host. Valid values: HTTP and HTTPS.
         */
        readonly httpGetScheme?: string | ros.IResolvable;
        /**
         * @Property tcpSocketPort: The port to which the system sends a TCP SOCKET request to perform the check.
         */
        readonly tcpSocketPort?: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ReadinessProbeProperty`
 *
 * @param properties - the TypeScript properties of a `ReadinessProbeProperty`
 *
 * @returns the result of the validation.
 */
function RosContainerGroup_ReadinessProbePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.timeoutSeconds && (typeof properties.timeoutSeconds) !== 'object') {
        errors.collect(ros.propertyValidator('timeoutSeconds', ros.validateRange)({
            data: properties.timeoutSeconds,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('timeoutSeconds', ros.validateNumber)(properties.timeoutSeconds));
    errors.collect(ros.propertyValidator('initialDelaySeconds', ros.validateNumber)(properties.initialDelaySeconds));
    if(properties.periodSeconds && (typeof properties.periodSeconds) !== 'object') {
        errors.collect(ros.propertyValidator('periodSeconds', ros.validateRange)({
            data: properties.periodSeconds,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('periodSeconds', ros.validateNumber)(properties.periodSeconds));
    errors.collect(ros.propertyValidator('failureThreshold', ros.validateNumber)(properties.failureThreshold));
    errors.collect(ros.propertyValidator('successThreshold', ros.validateNumber)(properties.successThreshold));
    errors.collect(ros.propertyValidator('execCommand', ros.listValidator(ros.validateString))(properties.execCommand));
    errors.collect(ros.propertyValidator('httpGetPath', ros.validateString)(properties.httpGetPath));
    errors.collect(ros.propertyValidator('httpGetPort', ros.validateNumber)(properties.httpGetPort));
    if(properties.httpGetScheme && (typeof properties.httpGetScheme) !== 'object') {
        errors.collect(ros.propertyValidator('httpGetScheme', ros.validateAllowedValues)({
          data: properties.httpGetScheme,
          allowedValues: ["HTTP","HTTPS"],
        }));
    }
    errors.collect(ros.propertyValidator('httpGetScheme', ros.validateString)(properties.httpGetScheme));
    errors.collect(ros.propertyValidator('tcpSocketPort', ros.validateNumber)(properties.tcpSocketPort));
    return errors.wrap('supplied properties not correct for "ReadinessProbeProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECI::ContainerGroup.ReadinessProbe` resource
 *
 * @param properties - the TypeScript properties of a `ReadinessProbeProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECI::ContainerGroup.ReadinessProbe` resource.
 */
// @ts-ignore TS6133
function rosContainerGroupReadinessProbePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosContainerGroup_ReadinessProbePropertyValidator(properties).assertSuccess();
    return {
      TimeoutSeconds: ros.numberToRosTemplate(properties.timeoutSeconds),
      InitialDelaySeconds: ros.numberToRosTemplate(properties.initialDelaySeconds),
      PeriodSeconds: ros.numberToRosTemplate(properties.periodSeconds),
      FailureThreshold: ros.numberToRosTemplate(properties.failureThreshold),
      SuccessThreshold: ros.numberToRosTemplate(properties.successThreshold),
      ExecCommand: ros.listMapper(ros.stringToRosTemplate)(properties.execCommand),
      HttpGetPath: ros.stringToRosTemplate(properties.httpGetPath),
      HttpGetPort: ros.numberToRosTemplate(properties.httpGetPort),
      HttpGetScheme: ros.stringToRosTemplate(properties.httpGetScheme),
      TcpSocketPort: ros.numberToRosTemplate(properties.tcpSocketPort),
    };
}

export namespace RosContainerGroup {
    /**
     * @stability external
     */
    export interface SecurityContextProperty {
        /**
         * @Property runAsUser: User ID.
         */
        readonly runAsUser?: number | ros.IResolvable;
        /**
         * @Property readOnlyRootFilesystem: Valid value: True.
         */
        readonly readOnlyRootFilesystem?: boolean | ros.IResolvable;
        /**
         * @Property capabilityAdd: undefined
         */
        readonly capabilityAdd?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `SecurityContextProperty`
 *
 * @param properties - the TypeScript properties of a `SecurityContextProperty`
 *
 * @returns the result of the validation.
 */
function RosContainerGroup_SecurityContextPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('runAsUser', ros.validateNumber)(properties.runAsUser));
    if(properties.readOnlyRootFilesystem && (typeof properties.readOnlyRootFilesystem) !== 'object') {
        errors.collect(ros.propertyValidator('readOnlyRootFilesystem', ros.validateAllowedValues)({
          data: properties.readOnlyRootFilesystem,
          allowedValues: [true],
        }));
    }
    errors.collect(ros.propertyValidator('readOnlyRootFilesystem', ros.validateBoolean)(properties.readOnlyRootFilesystem));
    errors.collect(ros.propertyValidator('capabilityAdd', ros.listValidator(ros.validateString))(properties.capabilityAdd));
    return errors.wrap('supplied properties not correct for "SecurityContextProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECI::ContainerGroup.SecurityContext` resource
 *
 * @param properties - the TypeScript properties of a `SecurityContextProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECI::ContainerGroup.SecurityContext` resource.
 */
// @ts-ignore TS6133
function rosContainerGroupSecurityContextPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosContainerGroup_SecurityContextPropertyValidator(properties).assertSuccess();
    return {
      RunAsUser: ros.numberToRosTemplate(properties.runAsUser),
      ReadOnlyRootFilesystem: ros.booleanToRosTemplate(properties.readOnlyRootFilesystem),
      CapabilityAdd: ros.listMapper(ros.stringToRosTemplate)(properties.capabilityAdd),
    };
}

export namespace RosContainerGroup {
    /**
     * @stability external
     */
    export interface SecurityContextSysctlProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property name: undefined
         */
        readonly name?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `SecurityContextSysctlProperty`
 *
 * @param properties - the TypeScript properties of a `SecurityContextSysctlProperty`
 *
 * @returns the result of the validation.
 */
function RosContainerGroup_SecurityContextSysctlPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    if(properties.name && (typeof properties.name) !== 'object') {
        errors.collect(ros.propertyValidator('name', ros.validateAllowedValues)({
          data: properties.name,
          allowedValues: ["kernel.shm_rmid_forced","kernel.msgmax"],
        }));
    }
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "SecurityContextSysctlProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECI::ContainerGroup.SecurityContextSysctl` resource
 *
 * @param properties - the TypeScript properties of a `SecurityContextSysctlProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECI::ContainerGroup.SecurityContextSysctl` resource.
 */
// @ts-ignore TS6133
function rosContainerGroupSecurityContextSysctlPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosContainerGroup_SecurityContextSysctlPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Name: ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosContainerGroup {
    /**
     * @stability external
     */
    export interface TagProperty {
        /**
         * @Property value: The value of the tag.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: The keyword of the tag.
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TagProperty`
 *
 * @param properties - the TypeScript properties of a `TagProperty`
 *
 * @returns the result of the validation.
 */
function RosContainerGroup_TagPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECI::ContainerGroup.Tag` resource
 *
 * @param properties - the TypeScript properties of a `TagProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECI::ContainerGroup.Tag` resource.
 */
// @ts-ignore TS6133
function rosContainerGroupTagPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosContainerGroup_TagPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

export namespace RosContainerGroup {
    /**
     * @stability external
     */
    export interface VolumeProperty {
        /**
         * @Property type: The type of volume. Valid values: EmptyDirVolume, NFSVolume, and ConfigFileVolume.
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property name: The name of the volume.
         */
        readonly name: string | ros.IResolvable;
        /**
         * @Property configFileVolumeConfigFileToPath: The path to the configuration file.
         */
        readonly configFileVolumeConfigFileToPath?: Array<RosContainerGroup.ConfigFileVolumeConfigFileToPathProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property emptyDirVolumeMedium: The storage medium for EmptyDirVolume. By default, the file system on the node is used. Default value: not specified. Valid value: Memory. If this parameter is set to Memory, the EmptyDirVolume volume is stored in memory.
         */
        readonly emptyDirVolumeMedium?: string | ros.IResolvable;
        /**
         * @Property nfsVolumePath: The path to the NFS volume.
         */
        readonly nfsVolumePath?: string | ros.IResolvable;
        /**
         * @Property nfsVolumeReadOnly: Default value: False.
         */
        readonly nfsVolumeReadOnly?: boolean | ros.IResolvable;
        /**
         * @Property nfsVolumeServer: The IP address of the NFS server.
         */
        readonly nfsVolumeServer?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `VolumeProperty`
 *
 * @param properties - the TypeScript properties of a `VolumeProperty`
 *
 * @returns the result of the validation.
 */
function RosContainerGroup_VolumePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["EmptyDirVolume","NFSVolume","ConfigFileVolume"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    errors.collect(ros.propertyValidator('configFileVolumeConfigFileToPath', ros.listValidator(RosContainerGroup_ConfigFileVolumeConfigFileToPathPropertyValidator))(properties.configFileVolumeConfigFileToPath));
    if(properties.emptyDirVolumeMedium && (typeof properties.emptyDirVolumeMedium) !== 'object') {
        errors.collect(ros.propertyValidator('emptyDirVolumeMedium', ros.validateAllowedValues)({
          data: properties.emptyDirVolumeMedium,
          allowedValues: ["Memory"],
        }));
    }
    errors.collect(ros.propertyValidator('emptyDirVolumeMedium', ros.validateString)(properties.emptyDirVolumeMedium));
    errors.collect(ros.propertyValidator('nfsVolumePath', ros.validateString)(properties.nfsVolumePath));
    errors.collect(ros.propertyValidator('nfsVolumeReadOnly', ros.validateBoolean)(properties.nfsVolumeReadOnly));
    errors.collect(ros.propertyValidator('nfsVolumeServer', ros.validateString)(properties.nfsVolumeServer));
    return errors.wrap('supplied properties not correct for "VolumeProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECI::ContainerGroup.Volume` resource
 *
 * @param properties - the TypeScript properties of a `VolumeProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECI::ContainerGroup.Volume` resource.
 */
// @ts-ignore TS6133
function rosContainerGroupVolumePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosContainerGroup_VolumePropertyValidator(properties).assertSuccess();
    return {
      Type: ros.stringToRosTemplate(properties.type),
      Name: ros.stringToRosTemplate(properties.name),
      ConfigFileVolumeConfigFileToPath: ros.listMapper(rosContainerGroupConfigFileVolumeConfigFileToPathPropertyToRosTemplate)(properties.configFileVolumeConfigFileToPath),
      EmptyDirVolumeMedium: ros.stringToRosTemplate(properties.emptyDirVolumeMedium),
      NFSVolumePath: ros.stringToRosTemplate(properties.nfsVolumePath),
      NFSVolumeReadOnly: ros.booleanToRosTemplate(properties.nfsVolumeReadOnly),
      NFSVolumeServer: ros.stringToRosTemplate(properties.nfsVolumeServer),
    };
}

export namespace RosContainerGroup {
    /**
     * @stability external
     */
    export interface VolumeMountProperty {
        /**
         * @Property readOnly: Default value: False.
         */
        readonly readOnly?: boolean | ros.IResolvable;
        /**
         * @Property mountPath: A mount path. The data in the target directory is overwritten by the data in the mounted volume. Therefore, use caution when you mount a volume to a directory.
         */
        readonly mountPath?: string | ros.IResolvable;
        /**
         * @Property name: The name of the volume. The name is the same as that specified for the Name parameter in the Volume section.
         */
        readonly name?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `VolumeMountProperty`
 *
 * @param properties - the TypeScript properties of a `VolumeMountProperty`
 *
 * @returns the result of the validation.
 */
function RosContainerGroup_VolumeMountPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('readOnly', ros.validateBoolean)(properties.readOnly));
    errors.collect(ros.propertyValidator('mountPath', ros.validateString)(properties.mountPath));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "VolumeMountProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECI::ContainerGroup.VolumeMount` resource
 *
 * @param properties - the TypeScript properties of a `VolumeMountProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECI::ContainerGroup.VolumeMount` resource.
 */
// @ts-ignore TS6133
function rosContainerGroupVolumeMountPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosContainerGroup_VolumeMountPropertyValidator(properties).assertSuccess();
    return {
      ReadOnly: ros.booleanToRosTemplate(properties.readOnly),
      MountPath: ros.stringToRosTemplate(properties.mountPath),
      Name: ros.stringToRosTemplate(properties.name),
    };
}

/**
 * Properties for defining a `ALIYUN::ECI::ImageCache`
 */
export interface RosImageCacheProps {

    /**
     * @Property image: The image list to be cached.
     */
    readonly image: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property imageCacheName: Image cache name.
     */
    readonly imageCacheName: string | ros.IResolvable;

    /**
     * @Property securityGroupId: Security group ID.
     */
    readonly securityGroupId: string | ros.IResolvable;

    /**
     * @Property vSwitchId: VSwitch ID.
     */
    readonly vSwitchId: string | ros.IResolvable;

    /**
     * @Property acrRegistryInfo: Enterprise Edition access credential configuration information.
     */
    readonly acrRegistryInfo?: Array<RosImageCache.AcrRegistryInfoProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property autoMatchImageCache: Specifies whether to enable reuse of image cache layers. If you enable this feature, and the image cache that you want to createand an existing image cache contain duplicate image layers, the system reuses the duplicate image layers to create the new image cache.
     *  This accelerates the creation of the image cache. 
     * Valid values: true: enables reuse of image cache layers.
     * false: disables reuse of image cache layers.
     * Default value: false.
     */
    readonly autoMatchImageCache?: boolean | ros.IResolvable;

    /**
     * @Property eipInstanceId: If you want to pull the public network image, you need to configure the public network ip or configure the switch NAT gateway.
     */
    readonly eipInstanceId?: string | ros.IResolvable;

    /**
     * @Property imageCacheSize: The size of the image cache. Unit: GiB. Default value: 20.
     */
    readonly imageCacheSize?: number | ros.IResolvable;

    /**
     * @Property imageRegistryCredential: Private image password. Alibaba Cloud ACR image can be left blank.
     */
    readonly imageRegistryCredential?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property retentionDays: The retention period of the image cache. Unit: days. When the retention period ends, the image cache expires and is deleted.
     *  By default, image caches never expire.
     * Note: The image caches that fail to be created are only retained for one day.
     */
    readonly retentionDays?: number | ros.IResolvable;

    /**
     * @Property zoneId: The zone ID of the image cache.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosImageCacheProps`
 *
 * @param properties - the TypeScript properties of a `RosImageCacheProps`
 *
 * @returns the result of the validation.
 */
function RosImageCachePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('imageCacheSize', ros.validateNumber)(properties.imageCacheSize));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('autoMatchImageCache', ros.validateBoolean)(properties.autoMatchImageCache));
    errors.collect(ros.propertyValidator('securityGroupId', ros.requiredValidator)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('imageCacheName', ros.requiredValidator)(properties.imageCacheName));
    errors.collect(ros.propertyValidator('imageCacheName', ros.validateString)(properties.imageCacheName));
    if(properties.imageRegistryCredential && (Array.isArray(properties.imageRegistryCredential) || (typeof properties.imageRegistryCredential) === 'string')) {
        errors.collect(ros.propertyValidator('imageRegistryCredential', ros.validateLength)({
            data: properties.imageRegistryCredential.length,
            min: undefined,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('imageRegistryCredential', ros.listValidator(ros.validateString))(properties.imageRegistryCredential));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('acrRegistryInfo', ros.listValidator(RosImageCache_AcrRegistryInfoPropertyValidator))(properties.acrRegistryInfo));
    errors.collect(ros.propertyValidator('retentionDays', ros.validateNumber)(properties.retentionDays));
    errors.collect(ros.propertyValidator('image', ros.requiredValidator)(properties.image));
    if(properties.image && (Array.isArray(properties.image) || (typeof properties.image) === 'string')) {
        errors.collect(ros.propertyValidator('image', ros.validateLength)({
            data: properties.image.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('image', ros.listValidator(ros.validateString))(properties.image));
    errors.collect(ros.propertyValidator('eipInstanceId', ros.validateString)(properties.eipInstanceId));
    return errors.wrap('supplied properties not correct for "RosImageCacheProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECI::ImageCache` resource
 *
 * @param properties - the TypeScript properties of a `RosImageCacheProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECI::ImageCache` resource.
 */
// @ts-ignore TS6133
function rosImageCachePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosImageCachePropsValidator(properties).assertSuccess();
    }
    return {
      Image: ros.listMapper(ros.stringToRosTemplate)(properties.image),
      ImageCacheName: ros.stringToRosTemplate(properties.imageCacheName),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      AcrRegistryInfo: ros.listMapper(rosImageCacheAcrRegistryInfoPropertyToRosTemplate)(properties.acrRegistryInfo),
      AutoMatchImageCache: ros.booleanToRosTemplate(properties.autoMatchImageCache),
      EipInstanceId: ros.stringToRosTemplate(properties.eipInstanceId),
      ImageCacheSize: ros.numberToRosTemplate(properties.imageCacheSize),
      ImageRegistryCredential: ros.listMapper(ros.stringToRosTemplate)(properties.imageRegistryCredential),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      RetentionDays: ros.numberToRosTemplate(properties.retentionDays),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * A ROS template type:  `ALIYUN::ECI::ImageCache`
 */
export class RosImageCache extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECI::ImageCache";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ImageCacheId: The ID of the image cache.
     */
    public readonly attrImageCacheId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property image: The image list to be cached.
     */
    public image: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property imageCacheName: Image cache name.
     */
    public imageCacheName: string | ros.IResolvable;

    /**
     * @Property securityGroupId: Security group ID.
     */
    public securityGroupId: string | ros.IResolvable;

    /**
     * @Property vSwitchId: VSwitch ID.
     */
    public vSwitchId: string | ros.IResolvable;

    /**
     * @Property acrRegistryInfo: Enterprise Edition access credential configuration information.
     */
    public acrRegistryInfo: Array<RosImageCache.AcrRegistryInfoProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property autoMatchImageCache: Specifies whether to enable reuse of image cache layers. If you enable this feature, and the image cache that you want to createand an existing image cache contain duplicate image layers, the system reuses the duplicate image layers to create the new image cache.
     *  This accelerates the creation of the image cache. 
     * Valid values: true: enables reuse of image cache layers.
     * false: disables reuse of image cache layers.
     * Default value: false.
     */
    public autoMatchImageCache: boolean | ros.IResolvable | undefined;

    /**
     * @Property eipInstanceId: If you want to pull the public network image, you need to configure the public network ip or configure the switch NAT gateway.
     */
    public eipInstanceId: string | ros.IResolvable | undefined;

    /**
     * @Property imageCacheSize: The size of the image cache. Unit: GiB. Default value: 20.
     */
    public imageCacheSize: number | ros.IResolvable | undefined;

    /**
     * @Property imageRegistryCredential: Private image password. Alibaba Cloud ACR image can be left blank.
     */
    public imageRegistryCredential: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property retentionDays: The retention period of the image cache. Unit: days. When the retention period ends, the image cache expires and is deleted.
     *  By default, image caches never expire.
     * Note: The image caches that fail to be created are only retained for one day.
     */
    public retentionDays: number | ros.IResolvable | undefined;

    /**
     * @Property zoneId: The zone ID of the image cache.
     */
    public zoneId: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::ECI::ImageCache`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosImageCacheProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosImageCache.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrImageCacheId = this.getAtt('ImageCacheId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.image = props.image;
        this.imageCacheName = props.imageCacheName;
        this.securityGroupId = props.securityGroupId;
        this.vSwitchId = props.vSwitchId;
        this.acrRegistryInfo = props.acrRegistryInfo;
        this.autoMatchImageCache = props.autoMatchImageCache;
        this.eipInstanceId = props.eipInstanceId;
        this.imageCacheSize = props.imageCacheSize;
        this.imageRegistryCredential = props.imageRegistryCredential;
        this.resourceGroupId = props.resourceGroupId;
        this.retentionDays = props.retentionDays;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            image: this.image,
            imageCacheName: this.imageCacheName,
            securityGroupId: this.securityGroupId,
            vSwitchId: this.vSwitchId,
            acrRegistryInfo: this.acrRegistryInfo,
            autoMatchImageCache: this.autoMatchImageCache,
            eipInstanceId: this.eipInstanceId,
            imageCacheSize: this.imageCacheSize,
            imageRegistryCredential: this.imageRegistryCredential,
            resourceGroupId: this.resourceGroupId,
            retentionDays: this.retentionDays,
            zoneId: this.zoneId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosImageCachePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosImageCache {
    /**
     * @stability external
     */
    export interface AcrRegistryInfoProperty {
        /**
         * @Property instanceName: instance name
         */
        readonly instanceName?: string | ros.IResolvable;
        /**
         * @Property instanceId: Instance id
         */
        readonly instanceId: string | ros.IResolvable;
        /**
         * @Property regionId: The region to which it belongs. Optional, the default is the local region
         */
        readonly regionId?: string | ros.IResolvable;
        /**
         * @Property domain: domain
         */
        readonly domain?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AcrRegistryInfoProperty`
 *
 * @param properties - the TypeScript properties of a `AcrRegistryInfoProperty`
 *
 * @returns the result of the validation.
 */
function RosImageCache_AcrRegistryInfoPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('regionId', ros.validateString)(properties.regionId));
    errors.collect(ros.propertyValidator('domain', ros.listValidator(ros.validateString))(properties.domain));
    return errors.wrap('supplied properties not correct for "AcrRegistryInfoProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ECI::ImageCache.AcrRegistryInfo` resource
 *
 * @param properties - the TypeScript properties of a `AcrRegistryInfoProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ECI::ImageCache.AcrRegistryInfo` resource.
 */
// @ts-ignore TS6133
function rosImageCacheAcrRegistryInfoPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosImageCache_AcrRegistryInfoPropertyValidator(properties).assertSuccess();
    return {
      InstanceName: ros.stringToRosTemplate(properties.instanceName),
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
      RegionId: ros.stringToRosTemplate(properties.regionId),
      Domain: ros.listMapper(ros.stringToRosTemplate)(properties.domain),
    };
}
