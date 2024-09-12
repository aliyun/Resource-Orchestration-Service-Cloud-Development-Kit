import * as ros from '@alicloud/ros-cdk-core';
import { RosDrdsDBs } from './drds.generated';
export { RosDrdsDBs as DrdsDBsProperty };
/**
 * Properties for defining a `DrdsDBs`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-drdsdbs
 */
export interface DrdsDBsProps {
    /**
     * Property instanceId: Drds Instance ID.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::DRDS::DrdsDBs`, which is used to query the details of databases on an instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDrdsDBs`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-drdsdbs
 */
export declare class DrdsDBs extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DrdsDBsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Databases: The list of drds databases.
     */
    readonly attrDatabases: ros.IResolvable;
    /**
     * Attribute DrdsDatabaseNames: The list of drds database names.
     */
    readonly attrDrdsDatabaseNames: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DrdsDBsProps, enableResourcePropertyConstraint?: boolean);
}
