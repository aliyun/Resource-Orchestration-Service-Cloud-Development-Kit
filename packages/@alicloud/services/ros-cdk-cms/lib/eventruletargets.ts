import * as ros from '@alicloud/ros-cdk-core';
import { RosEventRuleTargets } from './cms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosEventRuleTargets as EventRuleTargetsProperty };

/**
 * Properties for defining a `ALIYUN::CMS::EventRuleTargets`
 */
export interface EventRuleTargetsProps {

    /**
     * Property ruleName: The name of the alert rule.
     */
    readonly ruleName: string;

    /**
     * Property contactParameters: CONTACT configuration.A maximum of 5 parameters
     */
    readonly contactParameters?: Array<RosEventRuleTargets.ContactParametersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property fcParameters: FC configuration.A maximum of 5 parameters.
     */
    readonly fcParameters?: Array<RosEventRuleTargets.FcParametersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property mnsParameters: MNS configuration.A maximum of 5 parameters
     */
    readonly mnsParameters?: Array<RosEventRuleTargets.MnsParametersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property slsParameters: SLS configuration.A maximum of 5 parameters.
     */
    readonly slsParameters?: Array<RosEventRuleTargets.SlsParametersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property webhookParameters: WEBHOOK configuration.A maximum of 5 parameters.
     */
    readonly webhookParameters?: Array<RosEventRuleTargets.WebhookParametersProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::CMS::EventRuleTargets`
 */
export class EventRuleTargets extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Create a new `ALIYUN::CMS::EventRuleTargets`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: EventRuleTargetsProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosEventRuleTargets = new RosEventRuleTargets(this, id,  {
            contactParameters: props.contactParameters,
            slsParameters: props.slsParameters,
            webhookParameters: props.webhookParameters,
            fcParameters: props.fcParameters,
            ruleName: props.ruleName,
            mnsParameters: props.mnsParameters,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosEventRuleTargets;
    }
}
