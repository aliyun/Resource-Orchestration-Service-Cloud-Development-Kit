import * as ros from '@alicloud/ros-cdk-core';
import { RosDedicatedHost } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDedicatedHost as DedicatedHostProperty };

/**
 * Properties for defining a `ALIYUN::ECS::DedicatedHost`
 */
export interface DedicatedHostProps {

    /**
     * Property dedicatedHostType: The instance type of host.
     */
    readonly dedicatedHostType: string;

    /**
     * Property actionOnMaintenance: The policy used to migrate the instances from the dedicated hostwhen the dedicated host fails or needs to be repaired online.Valid values: Migrate: Instances are migrated to another physical server and restarted.If the dedicated host is attached with disks that are not local disks, the default value is Migrate.Stop: Instances on the dedicated host are stopped. If the dedicated host cannot be repaired,the instances are migrated to another physical server and restarted.If the dedicated host is attached with local disks, the default value is Stop.
     */
    readonly actionOnMaintenance?: string;

    /**
     * Property autoPlacement: Specifies whether the dedicated host is added to the resource pool for automatic deployment. If you do not specify the DedicatedHostId parameter when you create an instance on a dedicated host, Alibaba Cloud automatically selects a dedicated host from the resource pool to host the instance. For more information, see Automatic deployment. Valid values:on: The dedicated host is added to the resource pool for automatic deployment.off: The dedicated host is not added to the resource pool for automatic deployment.Default value: on.Note When you create a dedicated host: If you do not specify this parameter, the dedicated host is added to the automatic deployment resource pool.If you do not want to add the dedicated host to the automatic deployment resource pool, set the value to off.
     */
    readonly autoPlacement?: string;

    /**
     * Property autoReleaseTime: Auto release time for created host, Follow ISO8601 standard using UTC time. format is 'yyyy-MM-ddTHH:mm:ssZ'. Not bigger than 3 years from this day onwards
     */
    readonly autoReleaseTime?: string;

    /**
     * Property autoRenew: Whether renew the fee automatically? When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.
     */
    readonly autoRenew?: string;

    /**
     * Property autoRenewPeriod: The time period of auto renew. When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12. Default value is 1.
     */
    readonly autoRenewPeriod?: number;

    /**
     * Property chargeType: Instance Charge type, allowed value: Prepaid and Postpaid. If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.
     */
    readonly chargeType?: string;

    /**
     * Property dedicatedHostName: The name of the dedicated host, [2, 128] English or Chinese characters. It must begin with an uppercase/lowercase letter or a Chinese character, and may contain numbers, '_' or '-'. It cannot begin with http:// or https://.
     */
    readonly dedicatedHostName?: string;

    /**
     * Property description: The description of host.
     */
    readonly description?: string;

    /**
     * Property networkAttributesSlbUdpTimeout: The duration of UDP timeout for sessions between Server Load Balancer (SLB) and the dedicated host. Unit: seconds. Valid values: 15 to 310.
     */
    readonly networkAttributesSlbUdpTimeout?: number;

    /**
     * Property networkAttributesUdpTimeout: The duration of UDP timeout for sessions between users and instances on the dedicated host. Unit: seconds. Valid values: 15 to 310.
     */
    readonly networkAttributesUdpTimeout?: number;

    /**
     * Property period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.
     */
    readonly period?: number;

    /**
     * Property periodUnit: Unit of prepaid time period, it could be Week/Month/Year. Default value is Month.
     */
    readonly periodUnit?: string;

    /**
     * Property quantity: The number of dedicated hosts that you want to create. Valid values: 1 to 100.Default value: 1.
     */
    readonly quantity?: number;

    /**
     * Property resourceGroupId: The ID of the resource group. If this is left blank, the system automatically fills in the ID of the default resource group.
     */
    readonly resourceGroupId?: string;

    /**
     * Property tags: Tags to attach to DedicatedHost. Max support 20 tags to add during create DedicatedHost. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: { [key: string]: any }[];

    /**
     * Property zoneId: The zone to create the host.
     */
    readonly zoneId?: string;
}

/**
 * A ROS resource type:  `ALIYUN::ECS::DedicatedHost`
 */
export class DedicatedHost extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute DedicatedHostIds: The host id list of created hosts
     */
    public readonly attrDedicatedHostIds: any;

    /**
     * Attribute OrderId: The order id list of created instance.
     */
    public readonly attrOrderId: any;

    /**
     * Create a new `ALIYUN::ECS::DedicatedHost`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DedicatedHostProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosDedicatedHost = new RosDedicatedHost(this, id,  {
            autoRenewPeriod: props.autoRenewPeriod ? props.autoRenewPeriod : 1,
            description: props.description,
            networkAttributesSlbUdpTimeout: props.networkAttributesSlbUdpTimeout,
            resourceGroupId: props.resourceGroupId,
            zoneId: props.zoneId,
            networkAttributesUdpTimeout: props.networkAttributesUdpTimeout,
            autoRenew: props.autoRenew ? props.autoRenew : 'False',
            autoPlacement: props.autoPlacement,
            quantity: props.quantity ? props.quantity : 1,
            period: props.period ? props.period : 1,
            dedicatedHostType: props.dedicatedHostType,
            dedicatedHostName: props.dedicatedHostName,
            chargeType: props.chargeType ? props.chargeType : 'PostPaid',
            actionOnMaintenance: props.actionOnMaintenance,
            tags: ros.tagFactory(props.tags),
            periodUnit: props.periodUnit ? props.periodUnit : 'Month',
            autoReleaseTime: props.autoReleaseTime,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDedicatedHost;
        this.attrDedicatedHostIds = rosDedicatedHost.attrDedicatedHostIds;
        this.attrOrderId = rosDedicatedHost.attrOrderId;
    }
}
