import * as ros from '@alicloud/ros-cdk-core';
import { RosSharedTarget } from './resourcemanager.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSharedTarget as SharedTargetProperty };

/**
 * Properties for defining a `SharedTarget`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-sharedtarget
 */
export interface SharedTargetProps {

    /**
     * Property resourceShareId: The ID of the resource share.
     */
    readonly resourceShareId: string | ros.IResolvable;

    /**
     * Property targetId: The ID of the principal.
     */
    readonly targetId?: string | ros.IResolvable;
}

/**
 * Represents a `SharedTarget`.
 */
export interface ISharedTarget extends ros.IResource {
    readonly props: SharedTargetProps;

    /**
     * Attribute CreateTime: Create time of the resource share.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute ResourceShareId: The ID of the resource share.
     */
    readonly attrResourceShareId: ros.IResolvable | string;

    /**
     * Attribute ResourceShareName: The name of the resource share.
     */
    readonly attrResourceShareName: ros.IResolvable | string;

    /**
     * Attribute TargetId: The ID of the principal.
     */
    readonly attrTargetId: ros.IResolvable | string;

    /**
     * Attribute UpdateTime: Update time of the resource share.
     */
    readonly attrUpdateTime: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ResourceManager::SharedTarget`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSharedTarget`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-sharedtarget
 */
export class SharedTarget extends ros.Resource implements ISharedTarget {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: SharedTargetProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreateTime: Create time of the resource share.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute ResourceShareId: The ID of the resource share.
     */
    public readonly attrResourceShareId: ros.IResolvable | string;

    /**
     * Attribute ResourceShareName: The name of the resource share.
     */
    public readonly attrResourceShareName: ros.IResolvable | string;

    /**
     * Attribute TargetId: The ID of the principal.
     */
    public readonly attrTargetId: ros.IResolvable | string;

    /**
     * Attribute UpdateTime: Update time of the resource share.
     */
    public readonly attrUpdateTime: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SharedTargetProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosSharedTarget = new RosSharedTarget(this, id,  {
            resourceShareId: props.resourceShareId,
            targetId: props.targetId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSharedTarget;
        this.attrCreateTime = rosSharedTarget.attrCreateTime;
        this.attrResourceShareId = rosSharedTarget.attrResourceShareId;
        this.attrResourceShareName = rosSharedTarget.attrResourceShareName;
        this.attrTargetId = rosSharedTarget.attrTargetId;
        this.attrUpdateTime = rosSharedTarget.attrUpdateTime;
    }
}
