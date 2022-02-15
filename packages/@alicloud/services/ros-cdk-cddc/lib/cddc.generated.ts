// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::CDDC::DedicatedHost`
 */
export interface RosDedicatedHostProps {

    /**
     * @Property dedicatedHostGroupId: Dedicated Host Group ID
     */
    readonly dedicatedHostGroupId: string | ros.IResolvable;

    /**
     * @Property hostClass: Host Class
     */
    readonly hostClass: string | ros.IResolvable;

    /**
     * @Property paymentType: Payment Type
     */
    readonly paymentType: string | ros.IResolvable;

    /**
     * @Property vSwitchId: VSwitch ID
     */
    readonly vSwitchId: string | ros.IResolvable;

    /**
     * @Property zoneId: Zone ID
     */
    readonly zoneId: string | ros.IResolvable;

    /**
     * @Property autoRenew: Whether Auto Renew
     */
    readonly autoRenew?: string | ros.IResolvable;

    /**
     * @Property hostName: Host Name
     */
    readonly hostName?: string | ros.IResolvable;

    /**
     * @Property imageCategory: Host Image Category
     */
    readonly imageCategory?: string | ros.IResolvable;

    /**
     * @Property osPassword:
     */
    readonly osPassword?: string | ros.IResolvable;

    /**
     * @Property period:
     */
    readonly period?: string | ros.IResolvable;

    /**
     * @Property tags: The tag of the resource
     */
    readonly tags?: RosDedicatedHost.TagsProperty[];

    /**
     * @Property usedTime:
     */
    readonly usedTime?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDedicatedHostProps`
 *
 * @param properties - the TypeScript properties of a `RosDedicatedHostProps`
 *
 * @returns the result of the validation.
 */
function RosDedicatedHostPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('hostClass', ros.requiredValidator)(properties.hostClass));
    errors.collect(ros.propertyValidator('hostClass', ros.validateString)(properties.hostClass));
    errors.collect(ros.propertyValidator('osPassword', ros.validateString)(properties.osPassword));
    errors.collect(ros.propertyValidator('zoneId', ros.requiredValidator)(properties.zoneId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('dedicatedHostGroupId', ros.requiredValidator)(properties.dedicatedHostGroupId));
    errors.collect(ros.propertyValidator('dedicatedHostGroupId', ros.validateString)(properties.dedicatedHostGroupId));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateString)(properties.autoRenew));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('usedTime', ros.validateString)(properties.usedTime));
    errors.collect(ros.propertyValidator('imageCategory', ros.validateString)(properties.imageCategory));
    errors.collect(ros.propertyValidator('period', ros.validateString)(properties.period));
    errors.collect(ros.propertyValidator('paymentType', ros.requiredValidator)(properties.paymentType));
    errors.collect(ros.propertyValidator('paymentType', ros.validateString)(properties.paymentType));
    errors.collect(ros.propertyValidator('hostName', ros.validateString)(properties.hostName));
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosDedicatedHost_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosDedicatedHostProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CDDC::DedicatedHost` resource
 *
 * @param properties - the TypeScript properties of a `RosDedicatedHostProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CDDC::DedicatedHost` resource.
 */
// @ts-ignore TS6133
function rosDedicatedHostPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDedicatedHostPropsValidator(properties).assertSuccess();
    }
    return {
      DedicatedHostGroupId: ros.stringToRosTemplate(properties.dedicatedHostGroupId),
      HostClass: ros.stringToRosTemplate(properties.hostClass),
      PaymentType: ros.stringToRosTemplate(properties.paymentType),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
      AutoRenew: ros.stringToRosTemplate(properties.autoRenew),
      HostName: ros.stringToRosTemplate(properties.hostName),
      ImageCategory: ros.stringToRosTemplate(properties.imageCategory),
      OsPassword: ros.stringToRosTemplate(properties.osPassword),
      Period: ros.stringToRosTemplate(properties.period),
      Tags: ros.listMapper(rosDedicatedHostTagsPropertyToRosTemplate)(properties.tags),
      UsedTime: ros.stringToRosTemplate(properties.usedTime),
    };
}

/**
 * A ROS template type:  `ALIYUN::CDDC::DedicatedHost`
 */
export class RosDedicatedHost extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CDDC::DedicatedHost";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AutoRenew: Whether Auto Renew
     */
    public readonly attrAutoRenew: ros.IResolvable;

    /**
     * @Attribute CpuAllocationRatio: CPU Allocation Ratio
     */
    public readonly attrCpuAllocationRatio: ros.IResolvable;

    /**
     * @Attribute CpuUsed: CPU Used
     */
    public readonly attrCpuUsed: ros.IResolvable;

    /**
     * @Attribute DedicatedHostGroupId: Dedicated Host Group ID
     */
    public readonly attrDedicatedHostGroupId: ros.IResolvable;

    /**
     * @Attribute DedicatedHostId: The first ID of the resource
     */
    public readonly attrDedicatedHostId: ros.IResolvable;

    /**
     * @Attribute DiskAllocationRatio: Disk Allocation Ratio
     */
    public readonly attrDiskAllocationRatio: ros.IResolvable;

    /**
     * @Attribute EcsClassCode: ECS Class Code
     */
    public readonly attrEcsClassCode: ros.IResolvable;

    /**
     * @Attribute HostClass: Host Class
     */
    public readonly attrHostClass: ros.IResolvable;

    /**
     * @Attribute HostCpu: Host CPU
     */
    public readonly attrHostCpu: ros.IResolvable;

    /**
     * @Attribute HostMem: Host Memory
     */
    public readonly attrHostMem: ros.IResolvable;

    /**
     * @Attribute HostName: Host Name
     */
    public readonly attrHostName: ros.IResolvable;

    /**
     * @Attribute HostStorage: Host Storage
     */
    public readonly attrHostStorage: ros.IResolvable;

    /**
     * @Attribute HostType: Host Storage Type
     */
    public readonly attrHostType: ros.IResolvable;

    /**
     * @Attribute ImageCategory: Host Image Category
     */
    public readonly attrImageCategory: ros.IResolvable;

    /**
     * @Attribute IpAddress: Host IP Address
     */
    public readonly attrIpAddress: ros.IResolvable;

    /**
     * @Attribute MemAllocationRatio: Memory Allocation Ratio
     */
    public readonly attrMemAllocationRatio: ros.IResolvable;

    /**
     * @Attribute MemoryUsed: Host Memory Used
     */
    public readonly attrMemoryUsed: ros.IResolvable;

    /**
     * @Attribute OpenPermission: Whether Open OS Permission
     */
    public readonly attrOpenPermission: ros.IResolvable;

    /**
     * @Attribute PaymentType: Payment Type
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * @Attribute StorageUsed: Storage Used
     */
    public readonly attrStorageUsed: ros.IResolvable;

    /**
     * @Attribute VSwitchId: VSwitch ID
     */
    public readonly attrVSwitchId: ros.IResolvable;

    /**
     * @Attribute VpcId: VPC ID
     */
    public readonly attrVpcId: ros.IResolvable;

    /**
     * @Attribute ZoneId: Zone ID
     */
    public readonly attrZoneId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dedicatedHostGroupId: Dedicated Host Group ID
     */
    public dedicatedHostGroupId: string | ros.IResolvable;

    /**
     * @Property hostClass: Host Class
     */
    public hostClass: string | ros.IResolvable;

    /**
     * @Property paymentType: Payment Type
     */
    public paymentType: string | ros.IResolvable;

    /**
     * @Property vSwitchId: VSwitch ID
     */
    public vSwitchId: string | ros.IResolvable;

    /**
     * @Property zoneId: Zone ID
     */
    public zoneId: string | ros.IResolvable;

    /**
     * @Property autoRenew: Whether Auto Renew
     */
    public autoRenew: string | ros.IResolvable | undefined;

    /**
     * @Property hostName: Host Name
     */
    public hostName: string | ros.IResolvable | undefined;

    /**
     * @Property imageCategory: Host Image Category
     */
    public imageCategory: string | ros.IResolvable | undefined;

    /**
     * @Property osPassword:
     */
    public osPassword: string | ros.IResolvable | undefined;

    /**
     * @Property period:
     */
    public period: string | ros.IResolvable | undefined;

    /**
     * @Property tags: The tag of the resource
     */
    public tags: RosDedicatedHost.TagsProperty[] | undefined;

    /**
     * @Property usedTime:
     */
    public usedTime: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::CDDC::DedicatedHost`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDedicatedHostProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDedicatedHost.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAutoRenew = this.getAtt('AutoRenew');
        this.attrCpuAllocationRatio = this.getAtt('CpuAllocationRatio');
        this.attrCpuUsed = this.getAtt('CpuUsed');
        this.attrDedicatedHostGroupId = this.getAtt('DedicatedHostGroupId');
        this.attrDedicatedHostId = this.getAtt('DedicatedHostId');
        this.attrDiskAllocationRatio = this.getAtt('DiskAllocationRatio');
        this.attrEcsClassCode = this.getAtt('EcsClassCode');
        this.attrHostClass = this.getAtt('HostClass');
        this.attrHostCpu = this.getAtt('HostCpu');
        this.attrHostMem = this.getAtt('HostMem');
        this.attrHostName = this.getAtt('HostName');
        this.attrHostStorage = this.getAtt('HostStorage');
        this.attrHostType = this.getAtt('HostType');
        this.attrImageCategory = this.getAtt('ImageCategory');
        this.attrIpAddress = this.getAtt('IpAddress');
        this.attrMemAllocationRatio = this.getAtt('MemAllocationRatio');
        this.attrMemoryUsed = this.getAtt('MemoryUsed');
        this.attrOpenPermission = this.getAtt('OpenPermission');
        this.attrPaymentType = this.getAtt('PaymentType');
        this.attrStorageUsed = this.getAtt('StorageUsed');
        this.attrVSwitchId = this.getAtt('VSwitchId');
        this.attrVpcId = this.getAtt('VpcId');
        this.attrZoneId = this.getAtt('ZoneId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dedicatedHostGroupId = props.dedicatedHostGroupId;
        this.hostClass = props.hostClass;
        this.paymentType = props.paymentType;
        this.vSwitchId = props.vSwitchId;
        this.zoneId = props.zoneId;
        this.autoRenew = props.autoRenew;
        this.hostName = props.hostName;
        this.imageCategory = props.imageCategory;
        this.osPassword = props.osPassword;
        this.period = props.period;
        this.tags = props.tags;
        this.usedTime = props.usedTime;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dedicatedHostGroupId: this.dedicatedHostGroupId,
            hostClass: this.hostClass,
            paymentType: this.paymentType,
            vSwitchId: this.vSwitchId,
            zoneId: this.zoneId,
            autoRenew: this.autoRenew,
            hostName: this.hostName,
            imageCategory: this.imageCategory,
            osPassword: this.osPassword,
            period: this.period,
            tags: this.tags,
            usedTime: this.usedTime,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDedicatedHostPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosDedicatedHost {
    /**
     * @stability external
     */
    export interface TagsProperty {
        /**
         * @Property tagKey: The key of the tags
         */
        readonly tagKey?: string | ros.IResolvable;
        /**
         * @Property tagValue: The value of the tags
         */
        readonly tagValue?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosDedicatedHost_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('tagKey', ros.validateString)(properties.tagKey));
    errors.collect(ros.propertyValidator('tagValue', ros.validateString)(properties.tagValue));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CDDC::DedicatedHost.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CDDC::DedicatedHost.Tags` resource.
 */
// @ts-ignore TS6133
function rosDedicatedHostTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDedicatedHost_TagsPropertyValidator(properties).assertSuccess();
    return {
      TagKey: ros.stringToRosTemplate(properties.tagKey),
      TagValue: ros.stringToRosTemplate(properties.tagValue),
    };
}

/**
 * Properties for defining a `ALIYUN::CDDC::DedicatedHostGroup`
 */
export interface RosDedicatedHostGroupProps {

    /**
     * @Property engine: Database Engine Type
     */
    readonly engine: string | ros.IResolvable;

    /**
     * @Property vpcId: VPC ID
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * @Property allocationPolicy: Allocation Policy
     */
    readonly allocationPolicy?: string | ros.IResolvable;

    /**
     * @Property cpuAllocationRatio: Cpu Allocation Ratio
     */
    readonly cpuAllocationRatio?: number | ros.IResolvable;

    /**
     * @Property dedicatedHostGroupDesc: Dedicated Host Group Description
     */
    readonly dedicatedHostGroupDesc?: string | ros.IResolvable;

    /**
     * @Property diskAllocationRatio: Disk Allocation Ratio
     */
    readonly diskAllocationRatio?: number | ros.IResolvable;

    /**
     * @Property hostReplacePolicy: Host Replace Policy
     */
    readonly hostReplacePolicy?: string | ros.IResolvable;

    /**
     * @Property memAllocationRatio: Memory Allocation Ratio
     */
    readonly memAllocationRatio?: number | ros.IResolvable;

    /**
     * @Property openPermission: Whether Open OS Permission
     */
    readonly openPermission?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDedicatedHostGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosDedicatedHostGroupProps`
 *
 * @returns the result of the validation.
 */
function RosDedicatedHostGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('diskAllocationRatio', ros.validateNumber)(properties.diskAllocationRatio));
    errors.collect(ros.propertyValidator('allocationPolicy', ros.validateString)(properties.allocationPolicy));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('memAllocationRatio', ros.validateNumber)(properties.memAllocationRatio));
    errors.collect(ros.propertyValidator('hostReplacePolicy', ros.validateString)(properties.hostReplacePolicy));
    errors.collect(ros.propertyValidator('cpuAllocationRatio', ros.validateNumber)(properties.cpuAllocationRatio));
    errors.collect(ros.propertyValidator('engine', ros.requiredValidator)(properties.engine));
    errors.collect(ros.propertyValidator('engine', ros.validateString)(properties.engine));
    errors.collect(ros.propertyValidator('dedicatedHostGroupDesc', ros.validateString)(properties.dedicatedHostGroupDesc));
    errors.collect(ros.propertyValidator('openPermission', ros.validateString)(properties.openPermission));
    return errors.wrap('supplied properties not correct for "RosDedicatedHostGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CDDC::DedicatedHostGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosDedicatedHostGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CDDC::DedicatedHostGroup` resource.
 */
// @ts-ignore TS6133
function rosDedicatedHostGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDedicatedHostGroupPropsValidator(properties).assertSuccess();
    }
    return {
      Engine: ros.stringToRosTemplate(properties.engine),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      AllocationPolicy: ros.stringToRosTemplate(properties.allocationPolicy),
      CpuAllocationRatio: ros.numberToRosTemplate(properties.cpuAllocationRatio),
      DedicatedHostGroupDesc: ros.stringToRosTemplate(properties.dedicatedHostGroupDesc),
      DiskAllocationRatio: ros.numberToRosTemplate(properties.diskAllocationRatio),
      HostReplacePolicy: ros.stringToRosTemplate(properties.hostReplacePolicy),
      MemAllocationRatio: ros.numberToRosTemplate(properties.memAllocationRatio),
      OpenPermission: ros.stringToRosTemplate(properties.openPermission),
    };
}

/**
 * A ROS template type:  `ALIYUN::CDDC::DedicatedHostGroup`
 */
export class RosDedicatedHostGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CDDC::DedicatedHostGroup";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AllocationPolicy: Allocation Policy
     */
    public readonly attrAllocationPolicy: ros.IResolvable;

    /**
     * @Attribute BastionInstanceId: BastionInstanceId
     */
    public readonly attrBastionInstanceId: ros.IResolvable;

    /**
     * @Attribute CpuAllocateRation: CpuAllocateRation
     */
    public readonly attrCpuAllocateRation: ros.IResolvable;

    /**
     * @Attribute CpuAllocatedAmount: CpuAllocatedAmount
     */
    public readonly attrCpuAllocatedAmount: ros.IResolvable;

    /**
     * @Attribute CpuAllocationRatio: Cpu Allocation Ratio
     */
    public readonly attrCpuAllocationRatio: ros.IResolvable;

    /**
     * @Attribute DedicatedHostGroupDesc: Dedicated Host Group Description
     */
    public readonly attrDedicatedHostGroupDesc: ros.IResolvable;

    /**
     * @Attribute DedicatedHostGroupId: Dedicated Host Group ID
     */
    public readonly attrDedicatedHostGroupId: ros.IResolvable;

    /**
     * @Attribute DeployType: DeployType
     */
    public readonly attrDeployType: ros.IResolvable;

    /**
     * @Attribute DiskAllocateRation: DiskAllocateRation
     */
    public readonly attrDiskAllocateRation: ros.IResolvable;

    /**
     * @Attribute DiskAllocatedAmount: DiskAllocatedAmount
     */
    public readonly attrDiskAllocatedAmount: ros.IResolvable;

    /**
     * @Attribute DiskAllocationRatio: Disk Allocation Ratio
     */
    public readonly attrDiskAllocationRatio: ros.IResolvable;

    /**
     * @Attribute DiskUsedAmount: DiskUsedAmount
     */
    public readonly attrDiskUsedAmount: ros.IResolvable;

    /**
     * @Attribute DiskUtility: DiskUtility
     */
    public readonly attrDiskUtility: ros.IResolvable;

    /**
     * @Attribute Engine: Database Engine Type
     */
    public readonly attrEngine: ros.IResolvable;

    /**
     * @Attribute HostNumber: Total Host Number
     */
    public readonly attrHostNumber: ros.IResolvable;

    /**
     * @Attribute HostReplacePolicy: Host Replace Policy
     */
    public readonly attrHostReplacePolicy: ros.IResolvable;

    /**
     * @Attribute InstanceNumber: Total Instance Number
     */
    public readonly attrInstanceNumber: ros.IResolvable;

    /**
     * @Attribute MemAllocateRation: MemAllocateRation
     */
    public readonly attrMemAllocateRation: ros.IResolvable;

    /**
     * @Attribute MemAllocatedAmount: MemAllocatedAmount
     */
    public readonly attrMemAllocatedAmount: ros.IResolvable;

    /**
     * @Attribute MemAllocationRatio: Memory Allocation Ratio
     */
    public readonly attrMemAllocationRatio: ros.IResolvable;

    /**
     * @Attribute MemUsedAmount: MemUsedAmount
     */
    public readonly attrMemUsedAmount: ros.IResolvable;

    /**
     * @Attribute MemUtility: MemUtility
     */
    public readonly attrMemUtility: ros.IResolvable;

    /**
     * @Attribute OpenPermission: Whether Open OS Permission
     */
    public readonly attrOpenPermission: ros.IResolvable;

    /**
     * @Attribute Text: Text
     */
    public readonly attrText: ros.IResolvable;

    /**
     * @Attribute VpcId: VPC ID
     */
    public readonly attrVpcId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property engine: Database Engine Type
     */
    public engine: string | ros.IResolvable;

    /**
     * @Property vpcId: VPC ID
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property allocationPolicy: Allocation Policy
     */
    public allocationPolicy: string | ros.IResolvable | undefined;

    /**
     * @Property cpuAllocationRatio: Cpu Allocation Ratio
     */
    public cpuAllocationRatio: number | ros.IResolvable | undefined;

    /**
     * @Property dedicatedHostGroupDesc: Dedicated Host Group Description
     */
    public dedicatedHostGroupDesc: string | ros.IResolvable | undefined;

    /**
     * @Property diskAllocationRatio: Disk Allocation Ratio
     */
    public diskAllocationRatio: number | ros.IResolvable | undefined;

    /**
     * @Property hostReplacePolicy: Host Replace Policy
     */
    public hostReplacePolicy: string | ros.IResolvable | undefined;

    /**
     * @Property memAllocationRatio: Memory Allocation Ratio
     */
    public memAllocationRatio: number | ros.IResolvable | undefined;

    /**
     * @Property openPermission: Whether Open OS Permission
     */
    public openPermission: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::CDDC::DedicatedHostGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDedicatedHostGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDedicatedHostGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAllocationPolicy = this.getAtt('AllocationPolicy');
        this.attrBastionInstanceId = this.getAtt('BastionInstanceId');
        this.attrCpuAllocateRation = this.getAtt('CpuAllocateRation');
        this.attrCpuAllocatedAmount = this.getAtt('CpuAllocatedAmount');
        this.attrCpuAllocationRatio = this.getAtt('CpuAllocationRatio');
        this.attrDedicatedHostGroupDesc = this.getAtt('DedicatedHostGroupDesc');
        this.attrDedicatedHostGroupId = this.getAtt('DedicatedHostGroupId');
        this.attrDeployType = this.getAtt('DeployType');
        this.attrDiskAllocateRation = this.getAtt('DiskAllocateRation');
        this.attrDiskAllocatedAmount = this.getAtt('DiskAllocatedAmount');
        this.attrDiskAllocationRatio = this.getAtt('DiskAllocationRatio');
        this.attrDiskUsedAmount = this.getAtt('DiskUsedAmount');
        this.attrDiskUtility = this.getAtt('DiskUtility');
        this.attrEngine = this.getAtt('Engine');
        this.attrHostNumber = this.getAtt('HostNumber');
        this.attrHostReplacePolicy = this.getAtt('HostReplacePolicy');
        this.attrInstanceNumber = this.getAtt('InstanceNumber');
        this.attrMemAllocateRation = this.getAtt('MemAllocateRation');
        this.attrMemAllocatedAmount = this.getAtt('MemAllocatedAmount');
        this.attrMemAllocationRatio = this.getAtt('MemAllocationRatio');
        this.attrMemUsedAmount = this.getAtt('MemUsedAmount');
        this.attrMemUtility = this.getAtt('MemUtility');
        this.attrOpenPermission = this.getAtt('OpenPermission');
        this.attrText = this.getAtt('Text');
        this.attrVpcId = this.getAtt('VpcId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.engine = props.engine;
        this.vpcId = props.vpcId;
        this.allocationPolicy = props.allocationPolicy;
        this.cpuAllocationRatio = props.cpuAllocationRatio;
        this.dedicatedHostGroupDesc = props.dedicatedHostGroupDesc;
        this.diskAllocationRatio = props.diskAllocationRatio;
        this.hostReplacePolicy = props.hostReplacePolicy;
        this.memAllocationRatio = props.memAllocationRatio;
        this.openPermission = props.openPermission;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            engine: this.engine,
            vpcId: this.vpcId,
            allocationPolicy: this.allocationPolicy,
            cpuAllocationRatio: this.cpuAllocationRatio,
            dedicatedHostGroupDesc: this.dedicatedHostGroupDesc,
            diskAllocationRatio: this.diskAllocationRatio,
            hostReplacePolicy: this.hostReplacePolicy,
            memAllocationRatio: this.memAllocationRatio,
            openPermission: this.openPermission,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDedicatedHostGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
