import * as ros from '@alicloud/ros-cdk-core';
import { RosUserDefineRegion } from './edas.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * Represents a `UserDefineRegion`.
 */
export interface IUserDefineRegion extends ros.IResource {
    readonly props: UserDefineRegionProps;

    /**
     * Attribute BelongRegion: Under the physical region ID
     */
    readonly attrBelongRegion: ros.IResolvable | string;

    /**
     * Attribute DebugEnable: Whether debug is enable
     */
    readonly attrDebugEnable: ros.IResolvable | string;

    /**
     * Attribute Id: Resource ID
     */
    readonly attrId: ros.IResolvable | string;

    /**
     * Attribute RegionName: Region name
     */
    readonly attrRegionName: ros.IResolvable | string;

    /**
     * Attribute UserId: User account ID
     */
    readonly attrUserId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::EDAS::UserDefineRegion`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosUserDefineRegion`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-userdefineregion
 */
export class UserDefineRegion extends ros.Resource implements IUserDefineRegion {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: UserDefineRegionProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute BelongRegion: Under the physical region ID
     */
    public readonly attrBelongRegion: ros.IResolvable | string;

    /**
     * Attribute DebugEnable: Whether debug is enable
     */
    public readonly attrDebugEnable: ros.IResolvable | string;

    /**
     * Attribute Id: Resource ID
     */
    public readonly attrId: ros.IResolvable | string;

    /**
     * Attribute RegionName: Region name
     */
    public readonly attrRegionName: ros.IResolvable | string;

    /**
     * Attribute UserId: User account ID
     */
    public readonly attrUserId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: UserDefineRegionProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

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
