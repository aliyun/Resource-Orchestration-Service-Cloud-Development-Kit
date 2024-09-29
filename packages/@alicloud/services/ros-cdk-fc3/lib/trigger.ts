import * as ros from '@alicloud/ros-cdk-core';
import { RosTrigger } from './fc3.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosTrigger as TriggerProperty };

/**
 * Properties for defining a `Trigger`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-trigger
 */
export interface TriggerProps {

    /**
     * Property functionName: The name of the function.
     */
    readonly functionName: string | ros.IResolvable;

    /**
     * Property triggerConfig: Trigger config.
     */
    readonly triggerConfig: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Property triggerName: Name of the trigger.
     */
    readonly triggerName: string | ros.IResolvable;

    /**
     * Property triggerType: Type of the trigger.
     */
    readonly triggerType: string | ros.IResolvable;

    /**
     * Property description: Description of the trigger.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property invocationRole: Invocation role.
     */
    readonly invocationRole?: string | ros.IResolvable;

    /**
     * Property qualifier: Qualifier of the trigger.
     */
    readonly qualifier?: string | ros.IResolvable;

    /**
     * Property sourceArn: Source ARN of the trigger.
     */
    readonly sourceArn?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::FC3::Trigger`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTrigger`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-trigger
 */
export class Trigger extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: TriggerProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute FunctionName: Function name.
     */
    public readonly attrFunctionName: ros.IResolvable;

    /**
     * Attribute TriggerId: The trigger ID.
     */
    public readonly attrTriggerId: ros.IResolvable;

    /**
     * Attribute TriggerName: Trigger name.
     */
    public readonly attrTriggerName: ros.IResolvable;

    /**
     * Attribute UrlInternet: The public domain address. You can access HTTP triggers over the Internet by using HTTP or HTTPS.
     */
    public readonly attrUrlInternet: ros.IResolvable;

    /**
     * Attribute UrlIntranet: The private endpoint. In a VPC, you can access HTTP triggers by using HTTP or HTTPS.
     */
    public readonly attrUrlIntranet: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TriggerProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosTrigger = new RosTrigger(this, id,  {
            triggerType: props.triggerType,
            functionName: props.functionName,
            description: props.description,
            triggerName: props.triggerName,
            sourceArn: props.sourceArn,
            triggerConfig: props.triggerConfig,
            invocationRole: props.invocationRole,
            qualifier: props.qualifier,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTrigger;
        this.attrFunctionName = rosTrigger.attrFunctionName;
        this.attrTriggerId = rosTrigger.attrTriggerId;
        this.attrTriggerName = rosTrigger.attrTriggerName;
        this.attrUrlInternet = rosTrigger.attrUrlInternet;
        this.attrUrlIntranet = rosTrigger.attrUrlIntranet;
    }
}
