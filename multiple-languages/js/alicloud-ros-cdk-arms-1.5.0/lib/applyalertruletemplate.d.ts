import * as ros from '@alicloud/ros-cdk-core';
import { RosApplyAlertRuleTemplate } from './arms.generated';
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::ARMS::ApplyAlertRuleTemplate`, which is used to create an alert rule of Alibaba Cloud Managed Service for Prometheus.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosApplyAlertRuleTemplate`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-applyalertruletemplate
 */
export declare class ApplyAlertRuleTemplate extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ApplyAlertRuleTemplateProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: ApplyAlertRuleTemplateProps, enableResourcePropertyConstraint?: boolean);
}
