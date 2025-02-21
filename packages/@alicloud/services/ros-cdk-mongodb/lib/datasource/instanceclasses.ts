import * as ros from '@alicloud/ros-cdk-core';
import { RosInstanceClasses } from './mongodb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstanceClasses as InstanceClassesProperty };

/**
 * Properties for defining a `InstanceClasses`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mongodb-instanceclasses
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
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

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
 * Represents a `InstanceClasses`.
 */
export interface IInstanceClasses extends ros.IResource {
    readonly props: InstanceClassesProps;

    /**
     * Attribute InstanceClassIds: The list of The instance class Ids.
     */
    readonly attrInstanceClassIds: ros.IResolvable | string;

    /**
     * Attribute InstanceClasses: The list of The instance classes.
     */
    readonly attrInstanceClasses: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::MONGODB::InstanceClasses`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstanceClasses`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mongodb-instanceclasses
 */
export class InstanceClasses extends ros.Resource implements IInstanceClasses {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: InstanceClassesProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute InstanceClassIds: The list of The instance class Ids.
     */
    public readonly attrInstanceClassIds: ros.IResolvable | string;

    /**
     * Attribute InstanceClasses: The list of The instance classes.
     */
    public readonly attrInstanceClasses: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceClassesProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosInstanceClasses = new RosInstanceClasses(this, id,  {
            resourceGroupId: props.resourceGroupId,
            zoneId: props.zoneId,
            instanceChargeType: props.instanceChargeType === undefined || props.instanceChargeType === null ? 'PostPaid' : props.instanceChargeType,
            dbType: props.dbType,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstanceClasses;
        this.attrInstanceClassIds = rosInstanceClasses.attrInstanceClassIds;
        this.attrInstanceClasses = rosInstanceClasses.attrInstanceClasses;
    }
}
