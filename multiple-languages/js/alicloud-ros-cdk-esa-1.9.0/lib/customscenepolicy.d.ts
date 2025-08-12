import * as ros from '@alicloud/ros-cdk-core';
import { RosCustomScenePolicy } from './esa.generated';
export { RosCustomScenePolicy as CustomScenePolicyProperty };
/**
 * Properties for defining a `CustomScenePolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-customscenepolicy
 */
export interface CustomScenePolicyProps {
    /**
     * Property createTime: The time when the policy takes effect.
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    readonly createTime: string | ros.IResolvable;
    /**
     * Property customScenePolicyName: The policy name.
     */
    readonly customScenePolicyName: string | ros.IResolvable;
    /**
     * Property endTime: The time when the policy expires.
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    readonly endTime: string | ros.IResolvable;
    /**
     * Property objects: The IDs of the websites that you want to associate with the policy. Separate multiple IDs with commas (,).
     */
    readonly objects: string | ros.IResolvable;
    /**
     * Property template: The name of the policy template. Valid value:
     * promotion: major events.
     */
    readonly template: string | ros.IResolvable;
}
/**
 * Represents a `CustomScenePolicy`.
 */
export interface ICustomScenePolicy extends ros.IResource {
    readonly props: CustomScenePolicyProps;
    /**
     * Attribute CreateTime: The time when the policy takes effect.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute CustomScenePolicyName: The name of the policy.
     */
    readonly attrCustomScenePolicyName: ros.IResolvable | string;
    /**
     * Attribute EndTime: The time when the policy expires.
     */
    readonly attrEndTime: ros.IResolvable | string;
    /**
     * Attribute Objects: The IDs of websites associated.
     */
    readonly attrObjects: ros.IResolvable | string;
    /**
     * Attribute PolicyId: The Id of the Policy.
     */
    readonly attrPolicyId: ros.IResolvable | string;
    /**
     * Attribute Template: The name of the policy template.
     */
    readonly attrTemplate: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ESA::CustomScenePolicy`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCustomScenePolicy`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-customscenepolicy
 */
export declare class CustomScenePolicy extends ros.Resource implements ICustomScenePolicy {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: CustomScenePolicyProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CreateTime: The time when the policy takes effect.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute CustomScenePolicyName: The name of the policy.
     */
    readonly attrCustomScenePolicyName: ros.IResolvable | string;
    /**
     * Attribute EndTime: The time when the policy expires.
     */
    readonly attrEndTime: ros.IResolvable | string;
    /**
     * Attribute Objects: The IDs of websites associated.
     */
    readonly attrObjects: ros.IResolvable | string;
    /**
     * Attribute PolicyId: The Id of the Policy.
     */
    readonly attrPolicyId: ros.IResolvable | string;
    /**
     * Attribute Template: The name of the policy template.
     */
    readonly attrTemplate: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CustomScenePolicyProps, enableResourcePropertyConstraint?: boolean);
}
