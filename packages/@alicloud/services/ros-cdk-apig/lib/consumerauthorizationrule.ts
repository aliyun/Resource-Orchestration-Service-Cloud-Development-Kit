import * as ros from '@alicloud/ros-cdk-core';
import { RosConsumerAuthorizationRule } from './apig.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosConsumerAuthorizationRule as ConsumerAuthorizationRuleProperty };

/**
 * Properties for defining a `ConsumerAuthorizationRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-consumerauthorizationrule
 */
export interface ConsumerAuthorizationRuleProps {

    /**
     * Property consumerId: The consumer ID.
     */
    readonly consumerId: string | ros.IResolvable;

    /**
     * Property resourceIdentifier: Resource identifier for non-standard code sources.
     */
    readonly resourceIdentifier: RosConsumerAuthorizationRule.ResourceIdentifierProperty | ros.IResolvable;

    /**
     * Property resourceType: The resource type.
     */
    readonly resourceType: string | ros.IResolvable;

    /**
     * Property expireMode: The expire mode. Valid values: LongTerm, ShortTerm.
     */
    readonly expireMode?: string | ros.IResolvable;

    /**
     * Property expireTimestamp: The expire timestamp in milliseconds.
     */
    readonly expireTimestamp?: number | ros.IResolvable;
}

/**
 * Represents a `ConsumerAuthorizationRule`.
 */
export interface IConsumerAuthorizationRule extends ros.IResource {
    readonly props: ConsumerAuthorizationRuleProps;

    /**
     * Attribute ConsumerAuthorizationRuleId: The ID of the consumer authorization rule.
     */
    readonly attrConsumerAuthorizationRuleId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::APIG::ConsumerAuthorizationRule`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosConsumerAuthorizationRule`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-consumerauthorizationrule
 */
export class ConsumerAuthorizationRule extends ros.Resource implements IConsumerAuthorizationRule {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ConsumerAuthorizationRuleProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ConsumerAuthorizationRuleId: The ID of the consumer authorization rule.
     */
    public readonly attrConsumerAuthorizationRuleId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ConsumerAuthorizationRuleProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosConsumerAuthorizationRule = new RosConsumerAuthorizationRule(this, id,  {
            resourceIdentifier: props.resourceIdentifier,
            expireTimestamp: props.expireTimestamp,
            consumerId: props.consumerId,
            resourceType: props.resourceType,
            expireMode: props.expireMode,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosConsumerAuthorizationRule;
        this.attrConsumerAuthorizationRuleId = rosConsumerAuthorizationRule.attrConsumerAuthorizationRuleId;
    }
}
