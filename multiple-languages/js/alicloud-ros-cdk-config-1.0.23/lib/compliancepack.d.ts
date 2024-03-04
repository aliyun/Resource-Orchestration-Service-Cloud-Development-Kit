import * as ros from '@alicloud/ros-cdk-core';
import { RosCompliancePack } from './config.generated';
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::Config::CompliancePack`, which is used to create a compliance package.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCompliancePack`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-compliancepack
 */
export declare class CompliancePack extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: CompliancePackProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AccountId: Aliyun User Id
     */
    readonly attrAccountId: ros.IResolvable;
    /**
     * Attribute CompliancePackId: Compliance Package ID
     */
    readonly attrCompliancePackId: ros.IResolvable;
    /**
     * Attribute CompliancePackName: Compliance Package Name
     */
    readonly attrCompliancePackName: ros.IResolvable;
    /**
     * Attribute CompliancePackTemplateId: Compliance Package Template Id
     */
    readonly attrCompliancePackTemplateId: ros.IResolvable;
    /**
     * Attribute Description: Description
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * Attribute RiskLevel: Ris Level
     */
    readonly attrRiskLevel: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CompliancePackProps, enableResourcePropertyConstraint?: boolean);
}
