import * as ros from '@alicloud/ros-cdk-core';
import { RosUserDefineRegion } from './edas.generated';
export { RosUserDefineRegion as UserDefineRegionProperty };
/**
 * Properties for defining a `UserDefineRegion`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-userdefineregion
 */
export interface UserDefineRegionProps {
    /**
     * Property regionName: Logical region (or namespace) name
     */
    readonly regionName: string | ros.IResolvable;
    /**
     * Property regionTag: Logic region (or namespace) ID (format: "physical region ID: logical zone identifier", or "logical zone identifier")
     */
    readonly regionTag: string | ros.IResolvable;
    /**
     * Property debugEnable: Whether debug is enable
     */
    readonly debugEnable?: boolean | ros.IResolvable;
    /**
     * Property description: Logic region (or namespace) description
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::EDAS::UserDefineRegion`, which is used to create or edit a custom namespace.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosUserDefineRegion`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-userdefineregion
 */
export declare class UserDefineRegion extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: UserDefineRegionProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute BelongRegion: Under the physical region ID
     */
    readonly attrBelongRegion: ros.IResolvable;
    /**
     * Attribute DebugEnable: Whether debug is enable
     */
    readonly attrDebugEnable: ros.IResolvable;
    /**
     * Attribute Id: Resource ID
     */
    readonly attrId: ros.IResolvable;
    /**
     * Attribute RegionName: Region name
     */
    readonly attrRegionName: ros.IResolvable;
    /**
     * Attribute UserId: User account ID
     */
    readonly attrUserId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: UserDefineRegionProps, enableResourcePropertyConstraint?: boolean);
}
