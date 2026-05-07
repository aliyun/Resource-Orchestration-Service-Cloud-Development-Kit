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
 * Represents a `CompliancePack`.
 */
export interface ICompliancePack extends ros.IResource {
    readonly props: CompliancePackProps;
    /**
     * Attribute AccountId: Aliyun User Id
     */
    readonly attrAccountId: ros.IResolvable | string;
    /**
     * Attribute CompliancePackId: Compliance Package ID
     */
    readonly attrCompliancePackId: ros.IResolvable | string;
    /**
     * Attribute CompliancePackName: Compliance Package Name
     */
    readonly attrCompliancePackName: ros.IResolvable | string;
    /**
     * Attribute CompliancePackTemplateId: Compliance Package Template Id
     */
    readonly attrCompliancePackTemplateId: ros.IResolvable | string;
    /**
     * Attribute Description: Description
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute RiskLevel: Ris Level, valid values: 1 | 2 | 3
     */
    readonly attrRiskLevel: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::Config::CompliancePack`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCompliancePack`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-compliancepack
 */
export declare class CompliancePack extends ros.Resource implements ICompliancePack {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: CompliancePackProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AccountId: Aliyun User Id
     */
    readonly attrAccountId: ros.IResolvable | string;
    /**
     * Attribute CompliancePackId: Compliance Package ID
     */
    readonly attrCompliancePackId: ros.IResolvable | string;
    /**
     * Attribute CompliancePackName: Compliance Package Name
     */
    readonly attrCompliancePackName: ros.IResolvable | string;
    /**
     * Attribute CompliancePackTemplateId: Compliance Package Template Id
     */
    readonly attrCompliancePackTemplateId: ros.IResolvable | string;
    /**
     * Attribute Description: Description
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute RiskLevel: Ris Level, valid values: 1 | 2 | 3
     */
    readonly attrRiskLevel: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CompliancePackProps, enableResourcePropertyConstraint?: boolean);
}
