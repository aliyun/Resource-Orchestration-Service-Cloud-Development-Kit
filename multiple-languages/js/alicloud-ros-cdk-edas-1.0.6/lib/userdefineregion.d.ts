import * as ros from '@alicloud/ros-cdk-core';
import { RosUserDefineRegion } from './edas.generated';
export { RosUserDefineRegion as UserDefineRegionProperty };
/**
 * Properties for defining a `ALIYUN::EDAS::UserDefineRegion`
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
 * A ROS resource type:  `ALIYUN::EDAS::UserDefineRegion`
 */
export declare class UserDefineRegion extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
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
     * Create a new `ALIYUN::EDAS::UserDefineRegion`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: UserDefineRegionProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=userdefineregion.d.ts.map