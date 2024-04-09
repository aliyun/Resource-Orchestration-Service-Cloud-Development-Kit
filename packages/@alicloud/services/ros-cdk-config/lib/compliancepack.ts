import * as ros from '@alicloud/ros-cdk-core';
import { RosCompliancePack } from './config.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCompliancePack as CompliancePackProperty };

/**
 * Properties for defining a `CompliancePack`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-compliancepack
 */
export interface CompliancePackProps {

    /**
     * Property compliancePackName: Compliance Package Name
     */
    readonly compliancePackName: string | ros.IResolvable;

    /**
     * Property configRules:
     */
    readonly configRules: string | ros.IResolvable;

    /**
     * Property riskLevel: Ris Level, valid values: 1 | 2 | 3
     */
    readonly riskLevel: number | ros.IResolvable;

    /**
     * Property compliancePackTemplateId: Compliance Package Template Id
     */
    readonly compliancePackTemplateId?: string | ros.IResolvable;

    /**
     * Property configRuleIds: Compliance Package rule ID list
     */
    readonly configRuleIds?: Array<RosCompliancePack.ConfigRuleIdsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property description: Description
     */
    readonly description?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::Config::CompliancePack`, which is used to create a compliance package.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCompliancePack`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-compliancepack
 */
export class CompliancePack extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: CompliancePackProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AccountId: Aliyun User Id
     */
    public readonly attrAccountId: ros.IResolvable;

    /**
     * Attribute CompliancePackId: Compliance Package ID
     */
    public readonly attrCompliancePackId: ros.IResolvable;

    /**
     * Attribute CompliancePackName: Compliance Package Name
     */
    public readonly attrCompliancePackName: ros.IResolvable;

    /**
     * Attribute CompliancePackTemplateId: Compliance Package Template Id
     */
    public readonly attrCompliancePackTemplateId: ros.IResolvable;

    /**
     * Attribute Description: Description
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * Attribute RiskLevel: Ris Level, valid values: 1 | 2 | 3
     */
    public readonly attrRiskLevel: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CompliancePackProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosCompliancePack = new RosCompliancePack(this, id,  {
            configRuleIds: props.configRuleIds,
            description: props.description,
            compliancePackName: props.compliancePackName,
            configRules: props.configRules,
            compliancePackTemplateId: props.compliancePackTemplateId,
            riskLevel: props.riskLevel,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCompliancePack;
        this.attrAccountId = rosCompliancePack.attrAccountId;
        this.attrCompliancePackId = rosCompliancePack.attrCompliancePackId;
        this.attrCompliancePackName = rosCompliancePack.attrCompliancePackName;
        this.attrCompliancePackTemplateId = rosCompliancePack.attrCompliancePackTemplateId;
        this.attrDescription = rosCompliancePack.attrDescription;
        this.attrRiskLevel = rosCompliancePack.attrRiskLevel;
    }
}
