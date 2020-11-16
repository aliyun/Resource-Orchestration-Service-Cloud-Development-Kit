import * as ros from '@ros-cdk/core';
import { RosPrepayInstanceGroupClone } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosPrepayInstanceGroupClone as PrepayInstanceGroupCloneProperty };

/**
 * Properties for defining a `ALIYUN::ECS::PrepayInstanceGroupClone`
 */
export interface PrepayInstanceGroupCloneProps {

    /**
     * @Property maxAmount: Max number of instances to create, should be smaller than 'MaxAmount' and smaller than 100.
     */
    readonly maxAmount: number;

    /**
     * @Property minAmount: Max number of instances to create, should be bigger than 'MinAmount' and smaller than 100.
     */
    readonly minAmount: number;

    /**
     * @Property period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
     */
    readonly period: number;

    /**
     * @Property periodType: Charge period for created instances.
     */
    readonly periodType: string;

    /**
     * @Property sourceInstanceId: Source ecs instance used to copy properties to clone new ecs instance. It will copy the InstanceType, ImageId, InternetChargeType, InternetMaxBandwidthIn, InternetMaxBandwidthOut and the system disk and data disk configurations. If the instance network is VPC, it will also clone the relative properties. If specified instance with more than one security group, it will use the first security group to create instance. you can also specify the SecurityGroupId to override it.
     */
    readonly sourceInstanceId: string;

    /**
     * @Property autoRenew: Whether renew the fee automatically? When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.Old instances will not be changed.
     */
    readonly autoRenew?: string;

    /**
     * @Property autoRenewPeriod: The time period of auto renew. When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.Old instances will not be changed.
     */
    readonly autoRenewPeriod?: number;

    /**
     * @Property deploymentSetId: Deployment set ID. The change of the property does not affect existing instances.
     */
    readonly deploymentSetId?: string;

    /**
     * @Property description: Description of the instance, [2, 256] characters. Do not fill or empty, the default is empty. Old instances will not be changed.
     */
    readonly description?: string;

    /**
     * @Property diskMappings: Disk mappings to attach to instance. Max support 16 disks.
     * If the image contains a data disk, you can specify other parameters of the data disk via the same value of parameter "Device". If parameter "Category" is not specified, it will be cloud_efficiency instead of "Category" of data disk in the image.Old instances will not be changed.
     */
    readonly diskMappings?: Array<RosPrepayInstanceGroupClone.DiskMappingsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property eniMappings: NetworkInterface to attach to instance. Max support 1 ENI.
     */
    readonly eniMappings?: Array<RosPrepayInstanceGroupClone.EniMappingsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property hpcClusterId: The HPC cluster ID to which the instance belongs.The change of the property does not affect existing instances.
     */
    readonly hpcClusterId?: string;

    /**
     * @Property imageId: Image ID to create ecs instance.
     */
    readonly imageId?: string;

    /**
     * @Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly instanceName?: string;

    /**
     * @Property internetMaxBandwidthIn: Max internet out band width setting, unit in Mbps(Mega bit per second). The range is [1,200], default is 200 Mbps.
     */
    readonly internetMaxBandwidthIn?: number;

    /**
     * @Property internetMaxBandwidthOut: Set internet output bandwidth of instance. Unit is Mbps(Mega bit per second). Range is [0,200]. Default is 1.While the property is not 0, public ip will be assigned for instance.
     */
    readonly internetMaxBandwidthOut?: number;

    /**
     * @Property keyPairName: SSH key pair name.Old instances will not be changed.
     */
    readonly keyPairName?: string;

    /**
     * @Property launchTemplateId: ID of launch template. Launch template id or name must be specified to use launch template
     */
    readonly launchTemplateId?: string;

    /**
     * @Property launchTemplateName: Name of launch template. Launch template id or name must be specified to use launch template
     */
    readonly launchTemplateName?: string;

    /**
     * @Property launchTemplateVersion: Version of launch template. Default version is used if version is not specified.
     */
    readonly launchTemplateVersion?: string;

    /**
     * @Property password: Password of created ecs instance. Must contain at least 3 types of special character, lower character, upper character, number.
     */
    readonly password?: string;

    /**
     * @Property periodUnit: Unit of prepaid time period, it could be Week/Month. Default value is Month.Old instances will not be changed.
     */
    readonly periodUnit?: string;

    /**
     * @Property ramRoleName: Instance RAM role name. The name is provided and maintained by Resource Access Management (RAM) and can be queried using ListRoles. For more information, see RAM API CreateRole and ListRoles.
     */
    readonly ramRoleName?: string;

    /**
     * @Property securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
     */
    readonly securityGroupId?: string;

    /**
     * @Property securityGroupIds: The IDs of security groups N to which the instance belongs. The valid values of N are based on the maximum number of security groups to which an instance can belong. For more information, see Security group limits.Note: You cannot specify both SecurityGroupId and SecurityGroupIds at the same time.
     */
    readonly securityGroupIds?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property systemDiskAutoSnapshotPolicyId: Auto snapshot policy ID.
     */
    readonly systemDiskAutoSnapshotPolicyId?: string;

    /**
     * @Property systemDiskCategory: Category of system disk. Default is cloud_efficiency. support cloud|cloud_efficiency|cloud_ssd|cloud_essd|ephemeral_ssd.Old instances will not be changed.
     */
    readonly systemDiskCategory?: string;

    /**
     * @Property systemDiskDescription: Description of created system disk.Old instances will not be changed.
     */
    readonly systemDiskDescription?: string;

    /**
     * @Property systemDiskDiskName: Name of created system disk.Old instances will not be changed.
     */
    readonly systemDiskDiskName?: string;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: { [key: string]: any }[];

    /**
     * @Property zoneId: current zone to create the instance.
     */
    readonly zoneId?: string;
}

/**
 * A ROS resource type:  `ALIYUN::ECS::PrepayInstanceGroupClone`
 */
export class PrepayInstanceGroupClone extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute HostNames: Host names of created instance.
     */
    public readonly attrHostNames: any;

    /**
     * @Attribute InnerIps: Inner IP address list of the specified instance. Only for classical instance.
     */
    public readonly attrInnerIps: any;

    /**
     * @Attribute InstanceIds: The instance id list of created ecs instance
     */
    public readonly attrInstanceIds: any;

    /**
     * @Attribute OrderId: The order id list of created instance.
     */
    public readonly attrOrderId: any;

    /**
     * @Attribute PrivateIps: Private IP address list of created ecs instance. Only for VPC instance.
     */
    public readonly attrPrivateIps: any;

    /**
     * @Attribute PublicIps: Public IP address list of created ecs instance.
     */
    public readonly attrPublicIps: any;

    /**
     * @Attribute RelatedOrderIds: The related order id list of created ecs instances
     */
    public readonly attrRelatedOrderIds: any;

    /**
     * @Attribute ZoneIds: Zone id of created instance.
     */
    public readonly attrZoneIds: any;

    /**
     * Create a new `ALIYUN::ECS::PrepayInstanceGroupClone`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PrepayInstanceGroupCloneProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosPrepayInstanceGroupClone = new RosPrepayInstanceGroupClone(this, id,  {
            periodType: props.periodType,
            description: props.description,
            diskMappings: props.diskMappings,
            systemDiskDescription: props.systemDiskDescription,
            autoRenew: props.autoRenew ? props.autoRenew : 'False',
            sourceInstanceId: props.sourceInstanceId,
            maxAmount: props.maxAmount,
            systemDiskAutoSnapshotPolicyId: props.systemDiskAutoSnapshotPolicyId,
            ramRoleName: props.ramRoleName,
            minAmount: props.minAmount ? props.minAmount : 1,
            imageId: props.imageId,
            systemDiskDiskName: props.systemDiskDiskName,
            tags: ros.tagFactory(props.tags),
            password: props.password,
            autoRenewPeriod: props.autoRenewPeriod ? props.autoRenewPeriod : 1,
            keyPairName: props.keyPairName,
            launchTemplateName: props.launchTemplateName,
            zoneId: props.zoneId,
            hpcClusterId: props.hpcClusterId,
            securityGroupId: props.securityGroupId,
            period: props.period ? props.period : 1,
            launchTemplateId: props.launchTemplateId,
            securityGroupIds: props.securityGroupIds,
            systemDiskCategory: props.systemDiskCategory ? props.systemDiskCategory : 'cloud_efficiency',
            eniMappings: props.eniMappings,
            instanceName: props.instanceName,
            deploymentSetId: props.deploymentSetId,
            internetMaxBandwidthOut: props.internetMaxBandwidthOut,
            internetMaxBandwidthIn: props.internetMaxBandwidthIn ? props.internetMaxBandwidthIn : 200,
            launchTemplateVersion: props.launchTemplateVersion,
            periodUnit: props.periodUnit ? props.periodUnit : 'Month',
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPrepayInstanceGroupClone;
        this.attrHostNames = rosPrepayInstanceGroupClone.attrHostNames;
        this.attrInnerIps = rosPrepayInstanceGroupClone.attrInnerIps;
        this.attrInstanceIds = rosPrepayInstanceGroupClone.attrInstanceIds;
        this.attrOrderId = rosPrepayInstanceGroupClone.attrOrderId;
        this.attrPrivateIps = rosPrepayInstanceGroupClone.attrPrivateIps;
        this.attrPublicIps = rosPrepayInstanceGroupClone.attrPublicIps;
        this.attrRelatedOrderIds = rosPrepayInstanceGroupClone.attrRelatedOrderIds;
        this.attrZoneIds = rosPrepayInstanceGroupClone.attrZoneIds;
    }
}
