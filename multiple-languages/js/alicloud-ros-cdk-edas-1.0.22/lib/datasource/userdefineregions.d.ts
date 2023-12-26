import * as ros from '@alicloud/ros-cdk-core';
import { RosUserDefineRegions } from './edas.generated';
export { RosUserDefineRegions as UserDefineRegionsProperty };
/**
 * Properties for defining a `UserDefineRegions`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-edas-userdefineregions
 */
export interface UserDefineRegionsProps {
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::EDAS::UserDefineRegions`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosUserDefineRegions`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-edas-userdefineregions
 */
export declare class UserDefineRegions extends ros.Resource {
    /**
     * Attribute Ids: The list of user define region IDs.
     */
    readonly attrIds: ros.IResolvable;
    /**
     * Attribute UserDefineRegions: The list of user define regions.
     */
    readonly attrUserDefineRegions: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: UserDefineRegionsProps, enableResourcePropertyConstraint?: boolean);
}
