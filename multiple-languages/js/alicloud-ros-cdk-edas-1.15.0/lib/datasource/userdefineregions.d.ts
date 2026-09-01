import * as ros from '@alicloud/ros-cdk-core';
import { RosUserDefineRegions } from './edas.generated';
export { RosUserDefineRegions as UserDefineRegionsProperty };
/**
 * Properties for defining a `UserDefineRegions`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-edas-userdefineregions
 */
export interface UserDefineRegionsProps {
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `UserDefineRegions`.
 */
export interface IUserDefineRegions extends ros.IResource {
    readonly props: UserDefineRegionsProps;
    /**
     * Attribute Ids: The list of user define region IDs.
     */
    readonly attrIds: ros.IResolvable | string;
    /**
     * Attribute UserDefineRegions: The list of user define regions.
     */
    readonly attrUserDefineRegions: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::EDAS::UserDefineRegions`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosUserDefineRegions`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-edas-userdefineregions
 */
export declare class UserDefineRegions extends ros.Resource implements IUserDefineRegions {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: UserDefineRegionsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Ids: The list of user define region IDs.
     */
    readonly attrIds: ros.IResolvable | string;
    /**
     * Attribute UserDefineRegions: The list of user define regions.
     */
    readonly attrUserDefineRegions: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: UserDefineRegionsProps, enableResourcePropertyConstraint?: boolean);
}
