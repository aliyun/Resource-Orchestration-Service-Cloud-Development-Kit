import * as ros from '@alicloud/ros-cdk-core';
import { RosDrdsInstances } from './drds.generated';
export { RosDrdsInstances as DrdsInstancesProperty };
/**
 * Properties for defining a `DrdsInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-drdsinstances
 */
export interface DrdsInstancesProps {
    /**
     * Property description: Example description.
     */
    readonly description?: string | ros.IResolvable;
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
     * Property type: Instance type.
     * Enumeration Value:
     * 1: PRIVATE
     * 0: PUBLIC
     */
    readonly type?: string | ros.IResolvable;
}
/**
 * Represents a `DrdsInstances`.
 */
export interface IDrdsInstances extends ros.IResource {
    readonly props: DrdsInstancesProps;
    /**
     * Attribute InstanceIds: The list of drds instance IDs.
     */
    readonly attrInstanceIds: ros.IResolvable | string;
    /**
     * Attribute Instances: The list of drds instances.
     */
    readonly attrInstances: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::DRDS::DrdsInstances`, which is used to query instances.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDrdsInstances`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-drdsinstances
 */
export declare class DrdsInstances extends ros.Resource implements IDrdsInstances {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: DrdsInstancesProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute InstanceIds: The list of drds instance IDs.
     */
    readonly attrInstanceIds: ros.IResolvable | string;
    /**
     * Attribute Instances: The list of drds instances.
     */
    readonly attrInstances: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: DrdsInstancesProps, enableResourcePropertyConstraint?: boolean);
}
