import * as ros from '@alicloud/ros-cdk-core';
import { RosAggregateCompliancePack } from './config.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAggregateCompliancePack as AggregateCompliancePackProperty };

/**
 * Properties for defining a `AggregateCompliancePack`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-aggregatecompliancepack
 */
export interface AggregateCompliancePackProps {

    /**
     * Property aggregatorId: Aggregator id.
     */
    readonly aggregatorId: string | ros.IResolvable;

    /**
     * Property compliancePackName: Compliance package name.
     */
    readonly compliancePackName: string | ros.IResolvable;

    /**
     * Property description: The description of compliance pack.
     */
    readonly description: string | ros.IResolvable;

    /**
     * Property riskLevel: Compliance package risk level. Value:
     * 1: High risk.
     * 2: Medium risk.
     * 3: Low risk.
     */
    readonly riskLevel: number | ros.IResolvable;

    /**
     * Property compliancePackTemplateId: Compliance package template ID.
     */
    readonly compliancePackTemplateId?: string | ros.IResolvable;

    /**
     * Property configRules: List of rules in the compliance package.
     * Note: Either this parameter or TemplateContent must be set.
     */
    readonly configRules?: Array<RosAggregateCompliancePack.ConfigRulesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property defaultEnable: Whether the rule supports quick activation. Value:
     * true: This rule will be enabled when the compliance package is quickly enabled.
     * false (default): disable
     */
    readonly defaultEnable?: boolean | ros.IResolvable;

    /**
     * Property excludeRegionIdsScope: The compliance package is invalid for the specified region ID.
     */
    readonly excludeRegionIdsScope?: string | ros.IResolvable;

    /**
     * Property excludeResourceGroupIdsScope: The compliance package is invalid for the specified resource group ID.
     */
    readonly excludeResourceGroupIdsScope?: string | ros.IResolvable;

    /**
     * Property excludeResourceIdsScope: The compliance package is invalid for the specified resource ID, that is, no evaluation is performed on the resource.
     */
    readonly excludeResourceIdsScope?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property regionIdsScope: The compliance package only takes effect for resources in the specified region ID.
     */
    readonly regionIdsScope?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property resourceGroupIdsScope: The compliance package only takes effect on resources in the specified resource group ID.
     */
    readonly resourceGroupIdsScope?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property resourceIdsScope: The compliance package only takes effect on the specified resource ID.
     */
    readonly resourceIdsScope?: string | ros.IResolvable;

    /**
     * Property tagKeyScope: Compliance packages only take effect on resources bound to the specified tag key.
     */
    readonly tagKeyScope?: string | ros.IResolvable;

    /**
     * Property tagValueScope: Compliance packages only take effect on resources bound to specified tag key-value pairs.TagValueScope needs to be used in conjunction with TagKeyScope.
     */
    readonly tagValueScope?: string | ros.IResolvable;

    /**
     * Property templateContent: Template information used to generate compliance packages.
     * Note: Either this parameter or ConfigRules must be set.
     */
    readonly templateContent?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::Config::AggregateCompliancePack`, which is used to create a compliance package for an account group.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAggregateCompliancePack`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-aggregatecompliancepack
 */
export class AggregateCompliancePack extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AggregateCompliancePackProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CompliancePackId: The ID of the compliance pack id.
     */
    public readonly attrCompliancePackId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AggregateCompliancePackProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosAggregateCompliancePack = new RosAggregateCompliancePack(this, id,  {
            tagKeyScope: props.tagKeyScope,
            tagValueScope: props.tagValueScope,
            excludeResourceGroupIdsScope: props.excludeResourceGroupIdsScope,
            description: props.description,
            excludeResourceIdsScope: props.excludeResourceIdsScope,
            resourceIdsScope: props.resourceIdsScope,
            templateContent: props.templateContent,
            configRules: props.configRules,
            defaultEnable: props.defaultEnable,
            compliancePackName: props.compliancePackName,
            excludeRegionIdsScope: props.excludeRegionIdsScope,
            regionIdsScope: props.regionIdsScope,
            resourceGroupIdsScope: props.resourceGroupIdsScope,
            compliancePackTemplateId: props.compliancePackTemplateId,
            riskLevel: props.riskLevel,
            aggregatorId: props.aggregatorId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAggregateCompliancePack;
        this.attrCompliancePackId = rosAggregateCompliancePack.attrCompliancePackId;
    }
}
