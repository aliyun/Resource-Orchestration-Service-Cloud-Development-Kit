import * as ros from '@alicloud/ros-cdk-core';
import { RosCompliancePack } from './config.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCompliancePack as CompliancePackProperty };

/**
 * Properties for defining a `ALIYUN::Config::CompliancePack`
 */
export interface CompliancePackProps {

    /**
     * Property compliancePackName: Compliance Package Name
     */
    readonly compliancePackName: string | ros.IResolvable;

    /**
     * Property description: Description
     */
    readonly description: string | ros.IResolvable;

    /**
     * Property riskLevel: Ris Level
     */
    readonly riskLevel: number | ros.IResolvable;

    /**
     * Property compliancePackTemplateId: Compliance Package Template Id
     */
    readonly compliancePackTemplateId?: string | ros.IResolvable;

    /**
     * Property configRules: Config Rule List
     */
    readonly configRules?: Array<RosCompliancePack.ConfigRulesProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::Config::CompliancePack`
 */
export class CompliancePack extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

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
     * Attribute RiskLevel: Ris Level
     */
    public readonly attrRiskLevel: ros.IResolvable;

    /**
     * Create a new `ALIYUN::Config::CompliancePack`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CompliancePackProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosCompliancePack = new RosCompliancePack(this, id,  {
            compliancePackName: props.compliancePackName,
            description: props.description,
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
