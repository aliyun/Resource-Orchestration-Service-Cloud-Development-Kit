// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosDedicatedHostGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cddc-dedicatedhostgroup
 */
export interface RosDedicatedHostGroupProps {

    /**
     * @Property dedicatedHostGroupId: Dedicated Host Group ID.
     */
    readonly dedicatedHostGroupId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('dedicatedHostGroupId', ros.requiredValidator)(properties.dedicatedHostGroupId));
    errors.collect(ros.propertyValidator('dedicatedHostGroupId', ros.validateString)(properties.dedicatedHostGroupId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosDedicatedHostGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::CDDC::DedicatedHostGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosDedicatedHostGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::CDDC::DedicatedHostGroup` resource.
 */
// @ts-ignore TS6133
function rosDedicatedHostGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDedicatedHostGroupPropsValidator(properties).assertSuccess();
    }
    return {
      'DedicatedHostGroupId': ros.stringToRosTemplate(properties.dedicatedHostGroupId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CDDC::DedicatedHostGroup`, which is used to query the information about a dedicated cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `DedicatedHostGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cddc-dedicatedhostgroup
 */
export class RosDedicatedHostGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CDDC::DedicatedHostGroup";

    /**
     * @Attribute AllocationPolicy: Allocation Policy.
     */
    public readonly attrAllocationPolicy: ros.IResolvable;

    /**
     * @Attribute BastionInstanceId: BastionInstanceId.
     */
    public readonly attrBastionInstanceId: ros.IResolvable;

    /**
     * @Attribute Category: The dedicated cluster family to which the host belongs.
     */
    public readonly attrCategory: ros.IResolvable;

    /**
     * @Attribute CpuAllocateRation: CpuAllocateRation.
     */
    public readonly attrCpuAllocateRation: ros.IResolvable;

    /**
     * @Attribute CpuAllocatedAmount: CpuAllocatedAmount.
     */
    public readonly attrCpuAllocatedAmount: ros.IResolvable;

    /**
     * @Attribute CpuAllocationRatio: Cpu Allocation Ratio.
     */
    public readonly attrCpuAllocationRatio: ros.IResolvable;

    /**
     * @Attribute CreateTime: Create Time.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute DedicatedHostCountGroupByHostType: DedicatedHostCountGroupByHostType.
     */
    public readonly attrDedicatedHostCountGroupByHostType: ros.IResolvable;

    /**
     * @Attribute DedicatedHostGroupDesc: Dedicated Host Group Description.
     */
    public readonly attrDedicatedHostGroupDesc: ros.IResolvable;

    /**
     * @Attribute DedicatedHostGroupId: Dedicated Host Group ID.
     */
    public readonly attrDedicatedHostGroupId: ros.IResolvable;

    /**
     * @Attribute DeployType: DeployType.
     */
    public readonly attrDeployType: ros.IResolvable;

    /**
     * @Attribute DiskAllocateRation: DiskAllocateRation.
     */
    public readonly attrDiskAllocateRation: ros.IResolvable;

    /**
     * @Attribute DiskAllocatedAmount: DiskAllocatedAmount.
     */
    public readonly attrDiskAllocatedAmount: ros.IResolvable;

    /**
     * @Attribute DiskAllocationRatio: Disk Allocation Ratio.
     */
    public readonly attrDiskAllocationRatio: ros.IResolvable;

    /**
     * @Attribute DiskUsedAmount: DiskUsedAmount.
     */
    public readonly attrDiskUsedAmount: ros.IResolvable;

    /**
     * @Attribute DiskUtility: DiskUtility.
     */
    public readonly attrDiskUtility: ros.IResolvable;

    /**
     * @Attribute Engine: Database Engine Type.
     */
    public readonly attrEngine: ros.IResolvable;

    /**
     * @Attribute HostNumber: Total Host Number.
     */
    public readonly attrHostNumber: ros.IResolvable;

    /**
     * @Attribute HostReplacePolicy: Host Replace Policy.
     */
    public readonly attrHostReplacePolicy: ros.IResolvable;

    /**
     * @Attribute InstanceNumber: Total Instance Number.
     */
    public readonly attrInstanceNumber: ros.IResolvable;

    /**
     * @Attribute MemAllocateRation: MemAllocateRation.
     */
    public readonly attrMemAllocateRation: ros.IResolvable;

    /**
     * @Attribute MemAllocatedAmount: MemAllocatedAmount.
     */
    public readonly attrMemAllocatedAmount: ros.IResolvable;

    /**
     * @Attribute MemAllocationRatio: Memory Allocation Ratio.
     */
    public readonly attrMemAllocationRatio: ros.IResolvable;

    /**
     * @Attribute MemUsedAmount: MemUsedAmount.
     */
    public readonly attrMemUsedAmount: ros.IResolvable;

    /**
     * @Attribute MemUtility: MemUtility.
     */
    public readonly attrMemUtility: ros.IResolvable;

    /**
     * @Attribute OpenPermission: Whether Open OS Permission.
     */
    public readonly attrOpenPermission: ros.IResolvable;

    /**
     * @Attribute Text: Text.
     */
    public readonly attrText: ros.IResolvable;

    /**
     * @Attribute VpcId: VPC ID.
     */
    public readonly attrVpcId: ros.IResolvable;

    /**
     * @Attribute ZoneIdList: ZoneIDList.
     */
    public readonly attrZoneIdList: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dedicatedHostGroupId: Dedicated Host Group ID.
     */
    public dedicatedHostGroupId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDedicatedHostGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDedicatedHostGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAllocationPolicy = this.getAtt('AllocationPolicy');
        this.attrBastionInstanceId = this.getAtt('BastionInstanceId');
        this.attrCategory = this.getAtt('Category');
        this.attrCpuAllocateRation = this.getAtt('CpuAllocateRation');
        this.attrCpuAllocatedAmount = this.getAtt('CpuAllocatedAmount');
        this.attrCpuAllocationRatio = this.getAtt('CpuAllocationRatio');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDedicatedHostCountGroupByHostType = this.getAtt('DedicatedHostCountGroupByHostType');
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
        this.attrZoneIdList = this.getAtt('ZoneIdList');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dedicatedHostGroupId = props.dedicatedHostGroupId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dedicatedHostGroupId: this.dedicatedHostGroupId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDedicatedHostGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosDedicatedHostGroups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cddc-dedicatedhostgroups
 */
export interface RosDedicatedHostGroupsProps {

    /**
     * @Property dedicatedHostGroupId: Dedicated Host Group ID.
     */
    readonly dedicatedHostGroupId?: string | ros.IResolvable;

    /**
     * @Property engine: Database Engine Type.
     */
    readonly engine?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDedicatedHostGroupsProps`
 *
 * @param properties - the TypeScript properties of a `RosDedicatedHostGroupsProps`
 *
 * @returns the result of the validation.
 */
function RosDedicatedHostGroupsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dedicatedHostGroupId', ros.validateString)(properties.dedicatedHostGroupId));
    errors.collect(ros.propertyValidator('engine', ros.validateString)(properties.engine));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosDedicatedHostGroupsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::CDDC::DedicatedHostGroups` resource
 *
 * @param properties - the TypeScript properties of a `RosDedicatedHostGroupsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::CDDC::DedicatedHostGroups` resource.
 */
// @ts-ignore TS6133
function rosDedicatedHostGroupsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDedicatedHostGroupsPropsValidator(properties).assertSuccess();
    }
    return {
      'DedicatedHostGroupId': ros.stringToRosTemplate(properties.dedicatedHostGroupId),
      'Engine': ros.stringToRosTemplate(properties.engine),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CDDC::DedicatedHostGroups`, which is used to query the information about resources in dedicated clusters.
 * @Note This class does not contain additional functions, so it is recommended to use the `DedicatedHostGroups` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cddc-dedicatedhostgroups
 */
export class RosDedicatedHostGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CDDC::DedicatedHostGroups";

    /**
     * @Attribute DedicatedHostGroupIds: The list of dedicated host group IDs.
     */
    public readonly attrDedicatedHostGroupIds: ros.IResolvable;

    /**
     * @Attribute DedicatedHostGroups: The list of dedicated host groups.
     */
    public readonly attrDedicatedHostGroups: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dedicatedHostGroupId: Dedicated Host Group ID.
     */
    public dedicatedHostGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property engine: Database Engine Type.
     */
    public engine: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDedicatedHostGroupsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDedicatedHostGroups.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDedicatedHostGroupIds = this.getAtt('DedicatedHostGroupIds');
        this.attrDedicatedHostGroups = this.getAtt('DedicatedHostGroups');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dedicatedHostGroupId = props.dedicatedHostGroupId;
        this.engine = props.engine;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dedicatedHostGroupId: this.dedicatedHostGroupId,
            engine: this.engine,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDedicatedHostGroupsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
