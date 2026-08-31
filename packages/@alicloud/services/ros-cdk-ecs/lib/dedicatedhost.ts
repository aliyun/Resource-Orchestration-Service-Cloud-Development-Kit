import * as ros from '@alicloud/ros-cdk-core';
import { RosDedicatedHost } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDedicatedHost as DedicatedHostProperty };

/**
 * Properties for defining a `DedicatedHost`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-dedicatedhost
 */
export interface DedicatedHostProps {

    /**
     * Property dedicatedHostType: The dedicated host type. You can call the [DescribeDedicatedHostTypes]()
     * operation to query the most recent list of dedicated host types.
     */
    readonly dedicatedHostType: string | ros.IResolvable;

    /**
     * Property actionOnMaintenance: The policy for migrating the instances deployed on the dedicated host when the
     * dedicated host fails or needs to be repaired online. Valid values:
     * - Migrate: The instances are migrated to another physical machine and then
     * restarted.
     * If cloud disks are attached to the dedicated host, the default value is Migrate.
     * - Stop: The instances are stopped. If the dedicated host cannot be repaired, the
     * instances are migrated to another physical machine and then restarted.
     * If local disks are attached to the dedicated host, the default value is Stop.
     */
    readonly actionOnMaintenance?: string | ros.IResolvable;

    /**
     * Property autoPlacement: Specifies whether the dedicated host is added to the resource pool for automatic deployment. If you do not specify the DedicatedHostId parameter when you create an instance on a dedicated host, Alibaba Cloud automatically selects a dedicated host from the resource pool to host the instance. For more information, see Automatic deployment. Valid values:on: The dedicated host is added to the resource pool for automatic deployment.off: The dedicated host is not added to the resource pool for automatic deployment.Default value: on.Note When you create a dedicated host: If you do not specify this parameter, the dedicated host is added to the automatic deployment resource pool.If you do not want to add the dedicated host to the automatic deployment resource pool, set the value to off.
     */
    readonly autoPlacement?: string | ros.IResolvable;

    /**
     * Property autoReleaseTime: The time when to automatically release the dedicated host. Specify the time in
     * the `ISO 8601` standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in
     * UTC.
     * >
     * - It must be at least half an hour later than the current time.
     * - It must be at most three years later than the current time.
     * - If the value of seconds (ss) is not 00, it is automatically set to 00.
     */
    readonly autoReleaseTime?: string | ros.IResolvable;

    /**
     * Property autoRenew: Whether renew the fee automatically? When the parameter InstanceChargeType is PrePaid, it will take effect. Range of value:True: automatic renewal.False: no automatic renewal. Default value is False.
     */
    readonly autoRenew?: string | ros.IResolvable;

    /**
     * Property autoRenewPeriod: The time period of auto renew. When the parameter InstanceChargeType is PrePaid, it will take effect.It could be 1, 2, 3, 6, 12, 24, 36, 48, 60. Default value is 1.
     */
    readonly autoRenewPeriod?: number | ros.IResolvable;

    /**
     * Property chargeType: Instance Charge type, allowed value: Prepaid and Postpaid. If specified Prepaid, please ensure you have sufficient balance in your account. Or instance creation will be failure. Default value is Postpaid.
     */
    readonly chargeType?: string | ros.IResolvable;

    /**
     * Property cpuOverCommitRatio: The CPU overcommit ratio. You can configure CPU overcommit ratios only for the
     * following dedicated host types: g6s, c6s, and r6s. Valid values: 1 to 5.
     * The CPU overcommit ratio affects the number of available vCPUs on a dedicated
     * host. You can use the following formula to calculate the number of available
     * vCPUs on a dedicated host: Number of available vCPUs = Number of physical CPU
     * cores * 2 * CPU overcommit ratio. For example, the number of physical CPU cores
     * on each g6s dedicated host is 52. If you set the CPU overcommit ratio of a g6s
     * dedicated host to 4, the number of available vCPUs on the dedicated host is 416.
     * For scenarios that have minimal requirements on CPU stability or where CPU load
     * is not heavy, such as development and test environments, you can increase the
     * number of available vCPUs on a dedicated host by increasing the CPU overcommit
     * ratio. This way, you can deploy more ECS instances of the same specifications on
     * the dedicated host and reduce the unit deployment cost.
     */
    readonly cpuOverCommitRatio?: number | ros.IResolvable;

    /**
     * Property dedicatedHostClusterId: The ID of the dedicated host cluster.
     */
    readonly dedicatedHostClusterId?: string | ros.IResolvable;

    /**
     * Property dedicatedHostName: The name of the dedicated host. The name must be 2 to 128 characters in length
     * and can contain letters and digits. The name can contain colons (:), underscores
     * (_), periods (.), and hyphens (-).
     */
    readonly dedicatedHostName?: string | ros.IResolvable;

    /**
     * Property description: The description of the dedicated host. The description must be 2 to 256
     * characters in length and cannot start with `http:\/\/` or `https:\/\/`.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property minQuantity: The minimum number of dedicated hosts to create. Valid values: 1 to 100.
     * > If the number of available dedicated hosts is less than the minimum number of
     * dedicated hosts to create, the dedicated hosts fail to be created.
     */
    readonly minQuantity?: number | ros.IResolvable;

    /**
     * Property networkAttributesSlbUdpTimeout: The duration of UDP timeout for sessions between Server Load Balancer (SLB) and the dedicated host. Unit: seconds. Valid values: 15 to 310.
     */
    readonly networkAttributesSlbUdpTimeout?: number | ros.IResolvable;

    /**
     * Property networkAttributesUdpTimeout: The duration of UDP timeout for sessions between users and instances on the dedicated host. Unit: seconds. Valid values: 15 to 310.
     */
    readonly networkAttributesUdpTimeout?: number | ros.IResolvable;

    /**
     * Property period: Prepaid time period. Unit is month, it could be from 1 to 9 or 12, 24, 36, 48, 60. Default value is 1.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * Property periodUnit: Unit of prepaid time period, it could be Week\/Month\/Year. Default value is Month.
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * Property quantity: The number of dedicated hosts that you want to create. Valid values: 1 to 100.Default value: 1.
     */
    readonly quantity?: number | ros.IResolvable;

    /**
     * Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property tags: Tags to attach to DedicatedHost. Max support 20 tags to add during create DedicatedHost. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosDedicatedHost.TagsProperty[];

    /**
     * Property zoneId: The ID of the zone in which to create the dedicated host.
     * This parameter is empty by default. If you do not specify a zone, the system
     * selects a zone.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * Represents a `DedicatedHost`.
 */
export interface IDedicatedHost extends ros.IResource {
    readonly props: DedicatedHostProps;

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable | string;

    /**
     * Attribute DedicatedHostIds: The host id list of created hosts
     */
    readonly attrDedicatedHostIds: ros.IResolvable | string;

    /**
     * Attribute OrderId: The order id list of created instance.
     */
    readonly attrOrderId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::DedicatedHost`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDedicatedHost`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-dedicatedhost
 */
export class DedicatedHost extends ros.Resource implements IDedicatedHost {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: DedicatedHostProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    public readonly attrArn: ros.IResolvable | string;

    /**
     * Attribute DedicatedHostIds: The host id list of created hosts
     */
    public readonly attrDedicatedHostIds: ros.IResolvable | string;

    /**
     * Attribute OrderId: The order id list of created instance.
     */
    public readonly attrOrderId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DedicatedHostProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDedicatedHost = new RosDedicatedHost(this, id,  {
            autoRenewPeriod: props.autoRenewPeriod === undefined || props.autoRenewPeriod === null ? 1 : props.autoRenewPeriod,
            description: props.description,
            networkAttributesSlbUdpTimeout: props.networkAttributesSlbUdpTimeout,
            zoneId: props.zoneId,
            resourceGroupId: props.resourceGroupId,
            networkAttributesUdpTimeout: props.networkAttributesUdpTimeout,
            autoRenew: props.autoRenew === undefined || props.autoRenew === null ? 'False' : props.autoRenew,
            autoPlacement: props.autoPlacement,
            period: props.period === undefined || props.period === null ? 1 : props.period,
            quantity: props.quantity === undefined || props.quantity === null ? 1 : props.quantity,
            dedicatedHostType: props.dedicatedHostType,
            minQuantity: props.minQuantity,
            dedicatedHostName: props.dedicatedHostName,
            chargeType: props.chargeType === undefined || props.chargeType === null ? 'PostPaid' : props.chargeType,
            cpuOverCommitRatio: props.cpuOverCommitRatio,
            actionOnMaintenance: props.actionOnMaintenance,
            tags: props.tags,
            dedicatedHostClusterId: props.dedicatedHostClusterId,
            periodUnit: props.periodUnit === undefined || props.periodUnit === null ? 'Month' : props.periodUnit,
            autoReleaseTime: props.autoReleaseTime,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDedicatedHost;
        this.attrArn = rosDedicatedHost.attrArn;
        this.attrDedicatedHostIds = rosDedicatedHost.attrDedicatedHostIds;
        this.attrOrderId = rosDedicatedHost.attrOrderId;
    }
}
