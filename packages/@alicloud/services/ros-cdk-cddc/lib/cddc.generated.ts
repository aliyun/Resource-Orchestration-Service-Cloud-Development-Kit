// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosDedicatedHost`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-dedicatedhost
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
      'DedicatedHostGroupId': ros.stringToRosTemplate(properties.dedicatedHostGroupId),
      'HostClass': ros.stringToRosTemplate(properties.hostClass),
      'PaymentType': ros.stringToRosTemplate(properties.paymentType),
      'VSwitchId': ros.stringToRosTemplate(properties.vSwitchId),
      'ZoneId': ros.stringToRosTemplate(properties.zoneId),
      'AutoRenew': ros.stringToRosTemplate(properties.autoRenew),
      'HostName': ros.stringToRosTemplate(properties.hostName),
      'ImageCategory': ros.stringToRosTemplate(properties.imageCategory),
      'OsPassword': ros.stringToRosTemplate(properties.osPassword),
      'Period': ros.stringToRosTemplate(properties.period),
      'Tags': ros.listMapper(rosDedicatedHostTagsPropertyToRosTemplate)(properties.tags),
      'UsedTime': ros.stringToRosTemplate(properties.usedTime),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CDDC::DedicatedHost`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DedicatedHost` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-dedicatedhost
 */
export class RosDedicatedHost extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CDDC::DedicatedHost";

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
      'TagKey': ros.stringToRosTemplate(properties.tagKey),
      'TagValue': ros.stringToRosTemplate(properties.tagValue),
    };
}

/**
 * Properties for defining a `RosDedicatedHostGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-dedicatedhostgroup
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
      'Engine': ros.stringToRosTemplate(properties.engine),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'AllocationPolicy': ros.stringToRosTemplate(properties.allocationPolicy),
      'CpuAllocationRatio': ros.numberToRosTemplate(properties.cpuAllocationRatio),
      'DedicatedHostGroupDesc': ros.stringToRosTemplate(properties.dedicatedHostGroupDesc),
      'DiskAllocationRatio': ros.numberToRosTemplate(properties.diskAllocationRatio),
      'HostReplacePolicy': ros.stringToRosTemplate(properties.hostReplacePolicy),
      'MemAllocationRatio': ros.numberToRosTemplate(properties.memAllocationRatio),
      'OpenPermission': ros.stringToRosTemplate(properties.openPermission),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CDDC::DedicatedHostGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DedicatedHostGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-dedicatedhostgroup
 */
export class RosDedicatedHostGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CDDC::DedicatedHostGroup";

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

/**
 * Properties for defining a `RosMyBase`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-mybase
 */
export interface RosMyBaseProps {

    /**
     * @Property ecsClassList: ECS Class List.
     */
    readonly ecsClassList: Array<{ [key: string]: any }> | ros.IResolvable;

    /**
     * @Property engine: Database type.
     */
    readonly engine: string | ros.IResolvable;

    /**
     * @Property payType: Payment type, currently only supports PrePaid.
     */
    readonly payType: string | ros.IResolvable;

    /**
     * @Property period: The period of the subscription in months.
     */
    readonly period: number | ros.IResolvable;

    /**
     * @Property securityGroupId: The ID of the security group.
     */
    readonly securityGroupId: string | ros.IResolvable;

    /**
     * @Property vpcId: The ID of the VPC.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * @Property vSwitchId: Virtual switch ID.
     */
    readonly vSwitchId: string | ros.IResolvable;

    /**
     * @Property zoneId: Availability Zone ID.
     */
    readonly zoneId: string | ros.IResolvable;

    /**
     * @Property autoRenew: Whether to enable auto renew.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * @Property dedicatedHostGroupDescription: The name of the dedicated cluster.
     */
    readonly dedicatedHostGroupDescription?: string | ros.IResolvable;

    /**
     * @Property dedicatedHostGroupId: The ID of the dedicated cluster.
     */
    readonly dedicatedHostGroupId?: string | ros.IResolvable;

    /**
     * @Property ecsDeploymentSetId: The ID of the deployment set.
     */
    readonly ecsDeploymentSetId?: string | ros.IResolvable;

    /**
     * @Property ecsHostName: The host name of the ECS instance.
     */
    readonly ecsHostName?: string | ros.IResolvable;

    /**
     * @Property ecsInstanceName: The name of the ECS instance.
     */
    readonly ecsInstanceName?: string | ros.IResolvable;

    /**
     * @Property ecsUniqueSuffix: The unique suffix of the ECS instance.
     */
    readonly ecsUniqueSuffix?: boolean | ros.IResolvable;

    /**
     * @Property imageId: The image ID.
     */
    readonly imageId?: string | ros.IResolvable;

    /**
     * @Property internetChargeType: Network billing type. Value range: 
     * PayByBandwidth: billed based on fixed bandwidth. 
     * PayByTraffic: Pay by traffic usage.
     */
    readonly internetChargeType?: string | ros.IResolvable;

    /**
     * @Property internetMaxBandwidthOut: Set internet output bandwidth of instance. Unit is Mbps(Mega bit per second). 
     * Range is [0,200]. Default is 1. 
     * While the property is not 0, public ip will be assigned for instance.
     */
    readonly internetMaxBandwidthOut?: number | ros.IResolvable;

    /**
     * @Property keyPairName: The name of the key pair.
     */
    readonly keyPairName?: string | ros.IResolvable;

    /**
     * @Property osPassword: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
     */
    readonly osPassword?: string | ros.IResolvable;

    /**
     * @Property passwordInherit: Whether to inherit the password from the parent cluster.
     */
    readonly passwordInherit?: boolean | ros.IResolvable;

    /**
     * @Property periodType: Prepaid type, currently only supports Monthly (monthly subscription).
     */
    readonly periodType?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property userData: User-defined script data, the original data is up to 16KB.
     */
    readonly userData?: string | ros.IResolvable;

    /**
     * @Property userDataInBase64: The user data of the ECS instance.
     */
    readonly userDataInBase64?: boolean | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosMyBaseProps`
 *
 * @param properties - the TypeScript properties of a `RosMyBaseProps`
 *
 * @returns the result of the validation.
 */
function RosMyBasePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('ecsInstanceName', ros.validateString)(properties.ecsInstanceName));
    errors.collect(ros.propertyValidator('periodType', ros.validateString)(properties.periodType));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('userData', ros.validateString)(properties.userData));
    errors.collect(ros.propertyValidator('dedicatedHostGroupDescription', ros.validateString)(properties.dedicatedHostGroupDescription));
    errors.collect(ros.propertyValidator('dedicatedHostGroupId', ros.validateString)(properties.dedicatedHostGroupId));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateBoolean)(properties.autoRenew));
    errors.collect(ros.propertyValidator('ecsUniqueSuffix', ros.validateBoolean)(properties.ecsUniqueSuffix));
    errors.collect(ros.propertyValidator('imageId', ros.validateString)(properties.imageId));
    errors.collect(ros.propertyValidator('userDataInBase64', ros.validateBoolean)(properties.userDataInBase64));
    errors.collect(ros.propertyValidator('ecsHostName', ros.validateString)(properties.ecsHostName));
    errors.collect(ros.propertyValidator('engine', ros.requiredValidator)(properties.engine));
    errors.collect(ros.propertyValidator('engine', ros.validateString)(properties.engine));
    errors.collect(ros.propertyValidator('passwordInherit', ros.validateBoolean)(properties.passwordInherit));
    errors.collect(ros.propertyValidator('keyPairName', ros.validateString)(properties.keyPairName));
    errors.collect(ros.propertyValidator('zoneId', ros.requiredValidator)(properties.zoneId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.requiredValidator)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('ecsClassList', ros.requiredValidator)(properties.ecsClassList));
    if(properties.ecsClassList && (Array.isArray(properties.ecsClassList) || (typeof properties.ecsClassList) === 'string')) {
        errors.collect(ros.propertyValidator('ecsClassList', ros.validateLength)({
            data: properties.ecsClassList.length,
            min: 1,
            max: 1,
          }));
    }
    errors.collect(ros.propertyValidator('ecsClassList', ros.listValidator(ros.validateAnyDict))(properties.ecsClassList));
    errors.collect(ros.propertyValidator('period', ros.requiredValidator)(properties.period));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateRange)({
            data: properties.period,
            min: 1,
            max: 12,
          }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('payType', ros.requiredValidator)(properties.payType));
    if(properties.payType && (typeof properties.payType) !== 'object') {
        errors.collect(ros.propertyValidator('payType', ros.validateAllowedValues)({
          data: properties.payType,
          allowedValues: ["Subscription","PrePaid","Prepaid","PrePay","Prepay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('payType', ros.validateString)(properties.payType));
    if(properties.internetChargeType && (typeof properties.internetChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('internetChargeType', ros.validateAllowedValues)({
          data: properties.internetChargeType,
          allowedValues: ["PayByBandwidth","PayByTraffic"],
        }));
    }
    errors.collect(ros.propertyValidator('internetChargeType', ros.validateString)(properties.internetChargeType));
    errors.collect(ros.propertyValidator('ecsDeploymentSetId', ros.validateString)(properties.ecsDeploymentSetId));
    if(properties.internetMaxBandwidthOut && (typeof properties.internetMaxBandwidthOut) !== 'object') {
        errors.collect(ros.propertyValidator('internetMaxBandwidthOut', ros.validateRange)({
            data: properties.internetMaxBandwidthOut,
            min: 0,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('internetMaxBandwidthOut', ros.validateNumber)(properties.internetMaxBandwidthOut));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('osPassword', ros.validateString)(properties.osPassword));
    return errors.wrap('supplied properties not correct for "RosMyBaseProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CDDC::MyBase` resource
 *
 * @param properties - the TypeScript properties of a `RosMyBaseProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CDDC::MyBase` resource.
 */
// @ts-ignore TS6133
function rosMyBasePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosMyBasePropsValidator(properties).assertSuccess();
    }
    return {
      'ECSClassList': ros.listMapper(ros.anyDictToRosTemplate)(properties.ecsClassList),
      'Engine': ros.stringToRosTemplate(properties.engine),
      'PayType': ros.stringToRosTemplate(properties.payType),
      'Period': ros.numberToRosTemplate(properties.period),
      'SecurityGroupId': ros.stringToRosTemplate(properties.securityGroupId),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'VSwitchId': ros.stringToRosTemplate(properties.vSwitchId),
      'ZoneId': ros.stringToRosTemplate(properties.zoneId),
      'AutoRenew': ros.booleanToRosTemplate(properties.autoRenew),
      'DedicatedHostGroupDescription': ros.stringToRosTemplate(properties.dedicatedHostGroupDescription),
      'DedicatedHostGroupId': ros.stringToRosTemplate(properties.dedicatedHostGroupId),
      'EcsDeploymentSetId': ros.stringToRosTemplate(properties.ecsDeploymentSetId),
      'EcsHostName': ros.stringToRosTemplate(properties.ecsHostName),
      'EcsInstanceName': ros.stringToRosTemplate(properties.ecsInstanceName),
      'EcsUniqueSuffix': ros.booleanToRosTemplate(properties.ecsUniqueSuffix),
      'ImageId': ros.stringToRosTemplate(properties.imageId),
      'InternetChargeType': ros.stringToRosTemplate(properties.internetChargeType),
      'InternetMaxBandwidthOut': ros.numberToRosTemplate(properties.internetMaxBandwidthOut),
      'KeyPairName': ros.stringToRosTemplate(properties.keyPairName),
      'OsPassword': ros.stringToRosTemplate(properties.osPassword),
      'PasswordInherit': ros.booleanToRosTemplate(properties.passwordInherit),
      'PeriodType': ros.stringToRosTemplate(properties.periodType),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'UserData': ros.stringToRosTemplate(properties.userData),
      'UserDataInBase64': ros.booleanToRosTemplate(properties.userDataInBase64),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CDDC::MyBase`.
 * @Note This class does not contain additional functions, so it is recommended to use the `MyBase` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-mybase
 */
export class RosMyBase extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CDDC::MyBase";

    /**
     * @Attribute InstanceIds: The instance id list of created ecs instances
     */
    public readonly attrInstanceIds: ros.IResolvable;

    /**
     * @Attribute OrderIds: The order id list.
     */
    public readonly attrOrderIds: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property ecsClassList: ECS Class List.
     */
    public ecsClassList: Array<{ [key: string]: any }> | ros.IResolvable;

    /**
     * @Property engine: Database type.
     */
    public engine: string | ros.IResolvable;

    /**
     * @Property payType: Payment type, currently only supports PrePaid.
     */
    public payType: string | ros.IResolvable;

    /**
     * @Property period: The period of the subscription in months.
     */
    public period: number | ros.IResolvable;

    /**
     * @Property securityGroupId: The ID of the security group.
     */
    public securityGroupId: string | ros.IResolvable;

    /**
     * @Property vpcId: The ID of the VPC.
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property vSwitchId: Virtual switch ID.
     */
    public vSwitchId: string | ros.IResolvable;

    /**
     * @Property zoneId: Availability Zone ID.
     */
    public zoneId: string | ros.IResolvable;

    /**
     * @Property autoRenew: Whether to enable auto renew.
     */
    public autoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property dedicatedHostGroupDescription: The name of the dedicated cluster.
     */
    public dedicatedHostGroupDescription: string | ros.IResolvable | undefined;

    /**
     * @Property dedicatedHostGroupId: The ID of the dedicated cluster.
     */
    public dedicatedHostGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property ecsDeploymentSetId: The ID of the deployment set.
     */
    public ecsDeploymentSetId: string | ros.IResolvable | undefined;

    /**
     * @Property ecsHostName: The host name of the ECS instance.
     */
    public ecsHostName: string | ros.IResolvable | undefined;

    /**
     * @Property ecsInstanceName: The name of the ECS instance.
     */
    public ecsInstanceName: string | ros.IResolvable | undefined;

    /**
     * @Property ecsUniqueSuffix: The unique suffix of the ECS instance.
     */
    public ecsUniqueSuffix: boolean | ros.IResolvable | undefined;

    /**
     * @Property imageId: The image ID.
     */
    public imageId: string | ros.IResolvable | undefined;

    /**
     * @Property internetChargeType: Network billing type. Value range: 
     * PayByBandwidth: billed based on fixed bandwidth. 
     * PayByTraffic: Pay by traffic usage.
     */
    public internetChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property internetMaxBandwidthOut: Set internet output bandwidth of instance. Unit is Mbps(Mega bit per second). 
     * Range is [0,200]. Default is 1. 
     * While the property is not 0, public ip will be assigned for instance.
     */
    public internetMaxBandwidthOut: number | ros.IResolvable | undefined;

    /**
     * @Property keyPairName: The name of the key pair.
     */
    public keyPairName: string | ros.IResolvable | undefined;

    /**
     * @Property osPassword: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
     */
    public osPassword: string | ros.IResolvable | undefined;

    /**
     * @Property passwordInherit: Whether to inherit the password from the parent cluster.
     */
    public passwordInherit: boolean | ros.IResolvable | undefined;

    /**
     * @Property periodType: Prepaid type, currently only supports Monthly (monthly subscription).
     */
    public periodType: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property userData: User-defined script data, the original data is up to 16KB.
     */
    public userData: string | ros.IResolvable | undefined;

    /**
     * @Property userDataInBase64: The user data of the ECS instance.
     */
    public userDataInBase64: boolean | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMyBaseProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosMyBase.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceIds = this.getAtt('InstanceIds');
        this.attrOrderIds = this.getAtt('OrderIds');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.ecsClassList = props.ecsClassList;
        this.engine = props.engine;
        this.payType = props.payType;
        this.period = props.period;
        this.securityGroupId = props.securityGroupId;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
        this.zoneId = props.zoneId;
        this.autoRenew = props.autoRenew;
        this.dedicatedHostGroupDescription = props.dedicatedHostGroupDescription;
        this.dedicatedHostGroupId = props.dedicatedHostGroupId;
        this.ecsDeploymentSetId = props.ecsDeploymentSetId;
        this.ecsHostName = props.ecsHostName;
        this.ecsInstanceName = props.ecsInstanceName;
        this.ecsUniqueSuffix = props.ecsUniqueSuffix;
        this.imageId = props.imageId;
        this.internetChargeType = props.internetChargeType;
        this.internetMaxBandwidthOut = props.internetMaxBandwidthOut;
        this.keyPairName = props.keyPairName;
        this.osPassword = props.osPassword;
        this.passwordInherit = props.passwordInherit;
        this.periodType = props.periodType;
        this.resourceGroupId = props.resourceGroupId;
        this.userData = props.userData;
        this.userDataInBase64 = props.userDataInBase64;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            ecsClassList: this.ecsClassList,
            engine: this.engine,
            payType: this.payType,
            period: this.period,
            securityGroupId: this.securityGroupId,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
            zoneId: this.zoneId,
            autoRenew: this.autoRenew,
            dedicatedHostGroupDescription: this.dedicatedHostGroupDescription,
            dedicatedHostGroupId: this.dedicatedHostGroupId,
            ecsDeploymentSetId: this.ecsDeploymentSetId,
            ecsHostName: this.ecsHostName,
            ecsInstanceName: this.ecsInstanceName,
            ecsUniqueSuffix: this.ecsUniqueSuffix,
            imageId: this.imageId,
            internetChargeType: this.internetChargeType,
            internetMaxBandwidthOut: this.internetMaxBandwidthOut,
            keyPairName: this.keyPairName,
            osPassword: this.osPassword,
            passwordInherit: this.passwordInherit,
            periodType: this.periodType,
            resourceGroupId: this.resourceGroupId,
            userData: this.userData,
            userDataInBase64: this.userDataInBase64,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosMyBasePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
