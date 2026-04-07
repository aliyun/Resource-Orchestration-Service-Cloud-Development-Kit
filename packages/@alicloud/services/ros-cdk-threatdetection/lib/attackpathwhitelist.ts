import * as ros from '@alicloud/ros-cdk-core';
import { RosAttackPathWhitelist } from './threatdetection.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAttackPathWhitelist as AttackPathWhitelistProperty };

/**
 * Properties for defining a `AttackPathWhitelist`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-attackpathwhitelist
 */
export interface AttackPathWhitelistProps {

    /**
     * Property pathName: The whitelist path name.
     */
    readonly pathName: string | ros.IResolvable;

    /**
     * Property pathType: The whitelist path type.
     */
    readonly pathType: string | ros.IResolvable;

    /**
     * Property whitelistName: The whitelist name.
     */
    readonly whitelistName: string | ros.IResolvable;

    /**
     * Property whitelistType: The whitelist type.  Values:
     * * ALL_ASSET: All assets.
     * * PART_ASSET: Partial assets.
     */
    readonly whitelistType: string | ros.IResolvable;

    /**
     * Property attackPathAssetList: List of attack path assets.
     */
    readonly attackPathAssetList?: Array<RosAttackPathWhitelist.AttackPathAssetListProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property remark: Remark information.
     */
    readonly remark?: string | ros.IResolvable;
}

/**
 * Represents a `AttackPathWhitelist`.
 */
export interface IAttackPathWhitelist extends ros.IResource {
    readonly props: AttackPathWhitelistProps;

    /**
     * Attribute AttackPathAssetList: List of attack path assets.
     */
    readonly attrAttackPathAssetList: ros.IResolvable | string;

    /**
     * Attribute AttackPathWhitelistId: The attack path whitelist ID.
     */
    readonly attrAttackPathWhitelistId: ros.IResolvable | string;

    /**
     * Attribute PathName: The whitelist path name.
     */
    readonly attrPathName: ros.IResolvable | string;

    /**
     * Attribute PathType: The whitelist path type.
     */
    readonly attrPathType: ros.IResolvable | string;

    /**
     * Attribute Remark: Remark information.
     */
    readonly attrRemark: ros.IResolvable | string;

    /**
     * Attribute WhitelistName: The whitelist name.
     */
    readonly attrWhitelistName: ros.IResolvable | string;

    /**
     * Attribute WhitelistType: The whitelist type.
     */
    readonly attrWhitelistType: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ThreatDetection::AttackPathWhitelist`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAttackPathWhitelist`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-attackpathwhitelist
 */
export class AttackPathWhitelist extends ros.Resource implements IAttackPathWhitelist {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: AttackPathWhitelistProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AttackPathAssetList: List of attack path assets.
     */
    public readonly attrAttackPathAssetList: ros.IResolvable | string;

    /**
     * Attribute AttackPathWhitelistId: The attack path whitelist ID.
     */
    public readonly attrAttackPathWhitelistId: ros.IResolvable | string;

    /**
     * Attribute PathName: The whitelist path name.
     */
    public readonly attrPathName: ros.IResolvable | string;

    /**
     * Attribute PathType: The whitelist path type.
     */
    public readonly attrPathType: ros.IResolvable | string;

    /**
     * Attribute Remark: Remark information.
     */
    public readonly attrRemark: ros.IResolvable | string;

    /**
     * Attribute WhitelistName: The whitelist name.
     */
    public readonly attrWhitelistName: ros.IResolvable | string;

    /**
     * Attribute WhitelistType: The whitelist type.
     */
    public readonly attrWhitelistType: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AttackPathWhitelistProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosAttackPathWhitelist = new RosAttackPathWhitelist(this, id,  {
            pathType: props.pathType,
            attackPathAssetList: props.attackPathAssetList,
            whitelistType: props.whitelistType,
            whitelistName: props.whitelistName,
            pathName: props.pathName,
            remark: props.remark,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAttackPathWhitelist;
        this.attrAttackPathAssetList = rosAttackPathWhitelist.attrAttackPathAssetList;
        this.attrAttackPathWhitelistId = rosAttackPathWhitelist.attrAttackPathWhitelistId;
        this.attrPathName = rosAttackPathWhitelist.attrPathName;
        this.attrPathType = rosAttackPathWhitelist.attrPathType;
        this.attrRemark = rosAttackPathWhitelist.attrRemark;
        this.attrWhitelistName = rosAttackPathWhitelist.attrWhitelistName;
        this.attrWhitelistType = rosAttackPathWhitelist.attrWhitelistType;
    }
}
