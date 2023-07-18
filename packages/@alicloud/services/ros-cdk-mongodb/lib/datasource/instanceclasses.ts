import * as ros from '@alicloud/ros-cdk-core';
import { RosInstanceClasses } from './mongodb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstanceClasses as InstanceClassesProperty };

/**
 * Properties for defining a `DATASOURCE::MONGODB::InstanceClasses`
 */
export interface InstanceClassesProps {

    /**
     * Property dbType: The database engine type of the instance.
     * normal: replica set instance
     * sharding: sharded cluster instance
     */
    readonly dbType?: string | ros.IResolvable;

    /**
     * Property instanceChargeType: The billing method of the instance. Default value: PostPaid. Valid values:
     * PrePaid: subscription
     * PostPaid: pay-as-you-go
     */
    readonly instanceChargeType?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property zoneId: The zone ID of the instance. You can call the DescribeRegions operation to query the most recent zone list.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `DATASOURCE::MONGODB::InstanceClasses`
 */
export class InstanceClasses extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute InstanceClassIds: The list of The instance class Ids.
     */
    public readonly attrInstanceClassIds: ros.IResolvable;

    /**
     * Attribute InstanceClasses: The list of The instance classes.
     */
    public readonly attrInstanceClasses: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::MONGODB::InstanceClasses`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceClassesProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosInstanceClasses = new RosInstanceClasses(this, id,  {
            resourceGroupId: props.resourceGroupId,
            zoneId: props.zoneId,
            instanceChargeType: props.instanceChargeType === undefined || props.instanceChargeType === null ? 'PostPaid' : props.instanceChargeType,
            dbType: props.dbType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstanceClasses;
        this.attrInstanceClassIds = rosInstanceClasses.attrInstanceClassIds;
        this.attrInstanceClasses = rosInstanceClasses.attrInstanceClasses;
    }
}
