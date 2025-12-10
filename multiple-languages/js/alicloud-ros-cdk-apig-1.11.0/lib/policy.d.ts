import * as ros from '@alicloud/ros-cdk-core';
import { RosPolicy } from './apig.generated';
export { RosPolicy as PolicyProperty };
/**
 * Properties for defining a `Policy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-policy
 */
export interface PolicyProps {
    /**
     * Property attachResourceIds: The Mount point id list.
     */
    readonly attachResourceIds: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property attachResourceType: Policies support mount point types.
     * HttpApi:HttpApi.
     * Operation: the Operation of the HttpApi.
     * GatewayRoute: Gateway route.
     * GatewayService: Gateway service.
     * GatewayServicePort: The Gateway service port.
     * Domain: The Gateway Domain name.
     * Gateway: Gateway.
     */
    readonly attachResourceType: string | ros.IResolvable;
    /**
     * Property environmentId: The id of the environment.
     */
    readonly environmentId: string | ros.IResolvable;
    /**
     * Property gatewayId: The ID of the Gateway.
     */
    readonly gatewayId: string | ros.IResolvable;
    /**
     * Property policyClassName: The name of the policy class.
     */
    readonly policyClassName: string | ros.IResolvable;
    /**
     * Property policyConfig: Policy Configuration.
     */
    readonly policyConfig: string | ros.IResolvable;
    /**
     * Property policyName: The name of the policy.
     */
    readonly policyName?: string | ros.IResolvable;
}
/**
 * Represents a `Policy`.
 */
export interface IPolicy extends ros.IResource {
    readonly props: PolicyProps;
    /**
     * Attribute PolicyClassId: The ID of policy class.
     */
    readonly attrPolicyClassId: ros.IResolvable | string;
    /**
     * Attribute PolicyClassName: The name of policy class.
     */
    readonly attrPolicyClassName: ros.IResolvable | string;
    /**
     * Attribute PolicyConfig: Policy Configuration.
     */
    readonly attrPolicyConfig: ros.IResolvable | string;
    /**
     * Attribute PolicyId: The ID of the policy.
     */
    readonly attrPolicyId: ros.IResolvable | string;
    /**
     * Attribute PolicyName: The name of the policy.
     */
    readonly attrPolicyName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::APIG::Policy`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPolicy`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-policy
 */
export declare class Policy extends ros.Resource implements IPolicy {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: PolicyProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute PolicyClassId: The ID of policy class.
     */
    readonly attrPolicyClassId: ros.IResolvable | string;
    /**
     * Attribute PolicyClassName: The name of policy class.
     */
    readonly attrPolicyClassName: ros.IResolvable | string;
    /**
     * Attribute PolicyConfig: Policy Configuration.
     */
    readonly attrPolicyConfig: ros.IResolvable | string;
    /**
     * Attribute PolicyId: The ID of the policy.
     */
    readonly attrPolicyId: ros.IResolvable | string;
    /**
     * Attribute PolicyName: The name of the policy.
     */
    readonly attrPolicyName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PolicyProps, enableResourcePropertyConstraint?: boolean);
}
