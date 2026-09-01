import * as ros from '@alicloud/ros-cdk-core';
import { RosApplyAlertRuleTemplate } from './arms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosApplyAlertRuleTemplate as ApplyAlertRuleTemplateProperty };

/**
 * Properties for defining a `ApplyAlertRuleTemplate`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-applyalertruletemplate
 */
export interface ApplyAlertRuleTemplateProps {

    /**
     * Property clusterIds: The IDs list of Prometheus Instances.
     */
    readonly clusterIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property templateIds: The IDs list of Prometheus alert rule templates.
     */
    readonly templateIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property update: Whether to update created alert rules. Default false.
     */
    readonly update?: boolean | ros.IResolvable;
}

/**
 * Represents a `ApplyAlertRuleTemplate`.
 */
export interface IApplyAlertRuleTemplate extends ros.IResource {
    readonly props: ApplyAlertRuleTemplateProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ARMS::ApplyAlertRuleTemplate`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosApplyAlertRuleTemplate`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-applyalertruletemplate
 */
export class ApplyAlertRuleTemplate extends ros.Resource implements IApplyAlertRuleTemplate {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ApplyAlertRuleTemplateProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ApplyAlertRuleTemplateProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosApplyAlertRuleTemplate = new RosApplyAlertRuleTemplate(this, id,  {
            update: props.update,
            clusterIds: props.clusterIds,
            templateIds: props.templateIds,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosApplyAlertRuleTemplate;
    }
}
