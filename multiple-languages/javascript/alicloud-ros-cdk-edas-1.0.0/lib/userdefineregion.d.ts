import * as ros from '@alicloud/ros-cdk-core';
import { RosUserDefineRegion } from './edas.generated';
export { RosUserDefineRegion as UserDefineRegionProperty };
/**
 * Properties for defining a `ALIYUN::EDAS::UserDefineRegion`
 */
export interface UserDefineRegionProps {
    /**
     * @Property regionName: Logical region (or namespace) name
     */
    readonly regionName: string;
    /**
     * @Property regionTag: Logic region (or namespace) ID (format: "physical region ID: logical zone identifier", or "logical zone identifier")
     */
    readonly regionTag: string;
    /**
     * @Property debugEnable: Whether debug is enable
     */
    readonly debugEnable?: boolean | ros.IResolvable;
    /**
     * @Property description: Logic region (or namespace) description
     */
    readonly description?: string;
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
     * @Attribute BelongRegion: Under the physical region ID
     */
    readonly attrBelongRegion: any;
    /**
     * @Attribute DebugEnable: Whether debug is enable
     */
    readonly attrDebugEnable: any;
    /**
     * @Attribute Id: Resource ID
     */
    readonly attrId: any;
    /**
     * @Attribute RegionName: Region name
     */
    readonly attrRegionName: any;
    /**
     * @Attribute UserId: User account ID
     */
    readonly attrUserId: any;
    /**
     * Create a new `ALIYUN::EDAS::UserDefineRegion`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: UserDefineRegionProps, enableResourcePropertyConstraint?: boolean);
}
