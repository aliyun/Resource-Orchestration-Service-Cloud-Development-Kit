import * as ros from '@alicloud/ros-cdk-core';
import { RosCustomCheckStandardPolicy } from './threatdetection.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCustomCheckStandardPolicy as CustomCheckStandardPolicyProperty };

/**
 * Properties for defining a `CustomCheckStandardPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-customcheckstandardpolicy
 */
export interface CustomCheckStandardPolicyProps {

    /**
     * Property policyShowName: The name of the custom policy.
     */
    readonly policyShowName: string | ros.IResolvable;

    /**
     * Property policyType: The category type of the custom check policy:
     * - STANDARD: standard.
     * - REQUIREMENT: requirement.
     * - SECTION: section.
     */
    readonly policyType: string | ros.IResolvable;

    /**
     * Property dependentPolicyId: The ID of the parent policy.
     * (Dependency order from low to high: Section -> Requirement -> Standard)
     */
    readonly dependentPolicyId?: number | ros.IResolvable;

    /**
     * Property type: The category name of the associated policy (required when PolicyType is STANDARD):
     * - AISPM: AI Security Posture Management (AISPM).
     * - IDENTITY_PERMISSION: Identity and Entitlement Management (CIEM).
     * - RISK: Security Risk.
     * - COMPLIANCE: Compliance Risk.
     */
    readonly type?: string | ros.IResolvable;
}

/**
 * Represents a `CustomCheckStandardPolicy`.
 */
export interface ICustomCheckStandardPolicy extends ros.IResource {
    readonly props: CustomCheckStandardPolicyProps;

    /**
     * Attribute PolicyId: The ID of the custom check policy.
     */
    readonly attrPolicyId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ThreatDetection::CustomCheckStandardPolicy`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCustomCheckStandardPolicy`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-customcheckstandardpolicy
 */
export class CustomCheckStandardPolicy extends ros.Resource implements ICustomCheckStandardPolicy {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: CustomCheckStandardPolicyProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute PolicyId: The ID of the custom check policy.
     */
    public readonly attrPolicyId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CustomCheckStandardPolicyProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosCustomCheckStandardPolicy = new RosCustomCheckStandardPolicy(this, id,  {
            policyType: props.policyType,
            type: props.type,
            dependentPolicyId: props.dependentPolicyId,
            policyShowName: props.policyShowName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCustomCheckStandardPolicy;
        this.attrPolicyId = rosCustomCheckStandardPolicy.attrPolicyId;
    }
}
