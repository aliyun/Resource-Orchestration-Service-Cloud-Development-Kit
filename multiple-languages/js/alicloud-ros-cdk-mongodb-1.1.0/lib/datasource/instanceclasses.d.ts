import * as ros from '@alicloud/ros-cdk-core';
import { RosInstanceClasses } from './mongodb.generated';
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::MONGODB::InstanceClasses`, which is used to query the instance types that are supported by ApsaraDB for MongoDB in the specified zone.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstanceClasses`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mongodb-instanceclasses
 */
export declare class InstanceClasses extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: InstanceClassesProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute InstanceClassIds: The list of The instance class Ids.
     */
    readonly attrInstanceClassIds: ros.IResolvable;
    /**
     * Attribute InstanceClasses: The list of The instance classes.
     */
    readonly attrInstanceClasses: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: InstanceClassesProps, enableResourcePropertyConstraint?: boolean);
}
