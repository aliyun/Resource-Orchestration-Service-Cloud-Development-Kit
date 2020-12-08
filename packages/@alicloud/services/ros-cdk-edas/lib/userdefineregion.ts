import * as ros from '@alicloud/ros-cdk-core';
import { RosUserDefineRegion } from './edas.generated';
// Generated from the AliCloud ROS Resource Specification
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
export class UserDefineRegion extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute BelongRegion: Under the physical region ID
     */
    public readonly attrBelongRegion: any;

    /**
     * @Attribute DebugEnable: Whether debug is enable
     */
    public readonly attrDebugEnable: any;

    /**
     * @Attribute Id: Resource ID
     */
    public readonly attrId: any;

    /**
     * @Attribute RegionName: Region name
     */
    public readonly attrRegionName: any;

    /**
     * @Attribute UserId: User account ID
     */
    public readonly attrUserId: any;

    /**
     * Create a new `ALIYUN::EDAS::UserDefineRegion`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: UserDefineRegionProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosUserDefineRegion = new RosUserDefineRegion(this, id,  {
            description: props.description,
            regionName: props.regionName,
            regionTag: props.regionTag,
            debugEnable: props.debugEnable,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosUserDefineRegion;
        this.attrBelongRegion = rosUserDefineRegion.attrBelongRegion;
        this.attrDebugEnable = rosUserDefineRegion.attrDebugEnable;
        this.attrId = rosUserDefineRegion.attrId;
        this.attrRegionName = rosUserDefineRegion.attrRegionName;
        this.attrUserId = rosUserDefineRegion.attrUserId;
    }
}
