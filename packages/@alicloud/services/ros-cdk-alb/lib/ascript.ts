import * as ros from '@alicloud/ros-cdk-core';
import { RosAScript } from './alb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAScript as AScriptProperty };

/**
 * Properties for defining a `AScript`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-ascript
 */
export interface AScriptProps {

    /**
     * Property aScriptName: The name of the AScript rule.
     * The name must be 2 to 128 character in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
     */
    readonly aScriptName: string | ros.IResolvable;

    /**
     * Property listenerId: The listener ID.
     */
    readonly listenerId: string | ros.IResolvable;

    /**
     * Property scriptContent: The content of the AScript rule.
     */
    readonly scriptContent: string | ros.IResolvable;

    /**
     * Property enabled: Specifies whether to enable the AScript rule. Valid values:
     * true
     * false (default)
     */
    readonly enabled?: boolean | ros.IResolvable;

    /**
     * Property extAttributeEnabled: Specifies whether to enable the extended attributes of the AScript rule. Valid values:
     * true
     * false (default)
     */
    readonly extAttributeEnabled?: boolean | ros.IResolvable;

    /**
     * Property extAttributes: The extended attributes.
     */
    readonly extAttributes?: Array<RosAScript.ExtAttributesProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * Represents a `AScript`.
 */
export interface IAScript extends ros.IResource {
    readonly props: AScriptProps;

    /**
     * Attribute AScriptId: The AScript rule ID.
     */
    readonly attrAScriptId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ALB::AScript`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAScript`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-ascript
 */
export class AScript extends ros.Resource implements IAScript {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: AScriptProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AScriptId: The AScript rule ID.
     */
    public readonly attrAScriptId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AScriptProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosAScript = new RosAScript(this, id,  {
            scriptContent: props.scriptContent,
            aScriptName: props.aScriptName,
            enabled: props.enabled,
            extAttributeEnabled: props.extAttributeEnabled,
            extAttributes: props.extAttributes,
            listenerId: props.listenerId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAScript;
        this.attrAScriptId = rosAScript.attrAScriptId;
    }
}
