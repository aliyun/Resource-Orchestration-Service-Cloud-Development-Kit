import * as ros from '@alicloud/ros-cdk-core';
import { RosInstanceClasses } from './redis.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstanceClasses as InstanceClassesProperty };

/**
 * Properties for defining a `DATASOURCE::REDIS::InstanceClasses`
 */
export interface InstanceClassesProps {

    /**
     * Property acceptLanguage: The language of the return values. Valid values:
     *  zh-CN: Chinese. This is the default value.
     *  en-US: English.
     */
    readonly acceptLanguage?: string | ros.IResolvable;

    /**
     * Property engine: The engine type. Valid values:
     * Redis
     * Memcache
     */
    readonly engine?: string | ros.IResolvable;

    /**
     * Property instanceChargeType: The billing method. Valid values:
     * PrePaid: subscription
     * PostPaid: pay-as-you-go
     * Note Default value: PrePaid.
     */
    readonly instanceChargeType?: string | ros.IResolvable;

    /**
     * Property instanceId: The ID of the resource group. You can call the ListResourceGroups operation to query the IDs of resource groups.
     *  Note You can also query the IDs of resource groups in the Resource Management console. For more information, see View basic information about a resource group.
     */
    readonly instanceId?: string | ros.IResolvable;

    /**
     * Property nodeId: The ID of the data node for which you want to query available instance types. You can call the DescribeLogicInstanceTopology operation to query the ID of the data node. Remove the number sign (#) and the content that follows the number sign. For example, retain only r-bp10noxlhcoim2****-db-0.
     *  Note Before you set this parameter, you must set the InstanceId parameter to the ID of an instance in the cluster or read/write splitting architecture.
     */
    readonly nodeId?: string | ros.IResolvable;

    /**
     * Property orderType: The order type. Valid values:
     * BUY: the orders that are used to purchase instances.
     * UPGRADE: the orders that are used to upgrade instances.
     * DOWNGRADE: the orders that are used to downgrade instances.
     */
    readonly orderType?: string | ros.IResolvable;

    /**
     * Property productType: The edition or series of instances. Valid values:
     *  Local: ApsaraDB for Redis Community Edition instances or performance-enhanced instances of ApsaraDB for Redis Enhanced Edition (Tair)
     *  Tair_scm: persistent memory-optimized instances
     *  Tair_essd: storage-optimized instances
     */
    readonly productType?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the instance.
     *  Note This parameter is required only if the OrderType parameter is set to UPGRADE or RENEW.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property zoneId: The ID of the zone where PolarDB resources that you want to query reside.
     * Note You can call the DescribeRegions operation to query information about zones.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `DATASOURCE::REDIS::InstanceClasses`
 */
export class InstanceClasses extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute InstanceClassIds: The list of db instance class ids.
     */
    public readonly attrInstanceClassIds: ros.IResolvable;

    /**
     * Attribute InstanceClasses: The list of instance classes.
     */
    public readonly attrInstanceClasses: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::REDIS::InstanceClasses`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceClassesProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosInstanceClasses = new RosInstanceClasses(this, id,  {
            orderType: props.orderType,
            zoneId: props.zoneId,
            resourceGroupId: props.resourceGroupId,
            instanceId: props.instanceId,
            instanceChargeType: props.instanceChargeType === undefined || props.instanceChargeType === null ? 'PrePaid' : props.instanceChargeType,
            nodeId: props.nodeId,
            productType: props.productType,
            acceptLanguage: props.acceptLanguage,
            engine: props.engine,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstanceClasses;
        this.attrInstanceClassIds = rosInstanceClasses.attrInstanceClassIds;
        this.attrInstanceClasses = rosInstanceClasses.attrInstanceClasses;
    }
}
