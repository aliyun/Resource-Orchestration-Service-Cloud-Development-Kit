import * as ros from '@alicloud/ros-cdk-core';
import { RosFcTrigger } from './cdn.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosFcTrigger as FcTriggerProperty };

/**
 * Properties for defining a `FcTrigger`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-fctrigger
 */
export interface FcTriggerProps {

    /**
     * Property eventMetaName: The event meta name.
     */
    readonly eventMetaName: string | ros.IResolvable;

    /**
     * Property eventMetaVersion: The event meta version.
     */
    readonly eventMetaVersion: string | ros.IResolvable;

    /**
     * Property notes: The notes.
     */
    readonly notes: string | ros.IResolvable;

    /**
     * Property roleArn: The role ARN.
     */
    readonly roleArn: string | ros.IResolvable;

    /**
     * Property sourceArn: The source ARN.
     */
    readonly sourceArn: string | ros.IResolvable;

    /**
     * Property triggerArn: The trigger ARN.
     */
    readonly triggerArn: string | ros.IResolvable;

    /**
     * Property functionArn: The function ARN.
     */
    readonly functionArn?: string | ros.IResolvable;
}

/**
 * Represents a `FcTrigger`.
 */
export interface IFcTrigger extends ros.IResource {
    readonly props: FcTriggerProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CDN::FcTrigger`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosFcTrigger`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-fctrigger
 */
export class FcTrigger extends ros.Resource implements IFcTrigger {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: FcTriggerProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: FcTriggerProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosFcTrigger = new RosFcTrigger(this, id,  {
            functionArn: props.functionArn,
            triggerArn: props.triggerArn,
            eventMetaName: props.eventMetaName,
            sourceArn: props.sourceArn,
            eventMetaVersion: props.eventMetaVersion,
            roleArn: props.roleArn,
            notes: props.notes,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosFcTrigger;
    }
}
