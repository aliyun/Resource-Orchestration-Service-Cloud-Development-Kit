import * as ros from '@alicloud/ros-cdk-core';
import { RosEventRuleTargets } from './cms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosEventRuleTargets as EventRuleTargetsProperty };

/**
 * Properties for defining a `EventRuleTargets`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-eventruletargets
 */
export interface EventRuleTargetsProps {

    /**
     * Property ruleName: The name of the alert rule.
     */
    readonly ruleName: string | ros.IResolvable;

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
 * This class encapsulates and extends the ROS resource type `ALIYUN::CMS::EventRuleTargets`, which is used to add or change the recipients to which alert notifications are sent based on an event-triggered alert rule.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosEventRuleTargets`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-eventruletargets
 */
export class EventRuleTargets extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: EventRuleTargetsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: EventRuleTargetsProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

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
