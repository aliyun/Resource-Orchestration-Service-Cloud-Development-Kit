import * as ros from '@alicloud/ros-cdk-core';
import { RosSceneDefensePolicy } from './ddospro.generated';
export { RosSceneDefensePolicy as SceneDefensePolicyProperty };
/**
 * Properties for defining a `SceneDefensePolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-scenedefensepolicy
 */
export interface SceneDefensePolicyProps {
    /**
     * Property endTime: The end time of the policy. This value is a UNIX timestamp. Units: milliseconds.
     */
    readonly endTime: number | ros.IResolvable;
    /**
     * Property name: The name of the policy.
     */
    readonly name: string | ros.IResolvable;
    /**
     * Property startTime: The start time of the policy. This value is a UNIX timestamp. Units: milliseconds.
     */
    readonly startTime: number | ros.IResolvable;
    /**
     * Property template: The template of the policy. Valid values:
     * promotion: important activity
     * bypass: all traffic forwarded
     */
    readonly template: string | ros.IResolvable;
}
/**
 * Represents a `SceneDefensePolicy`.
 */
export interface ISceneDefensePolicy extends ros.IResource {
    readonly props: SceneDefensePolicyProps;
    /**
     * Attribute Name: The name of the policy.
     */
    readonly attrName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DDoSPro::SceneDefensePolicy`, which is used to create a scenario-specific custom policy.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSceneDefensePolicy`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-scenedefensepolicy
 */
export declare class SceneDefensePolicy extends ros.Resource implements ISceneDefensePolicy {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: SceneDefensePolicyProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Name: The name of the policy.
     */
    readonly attrName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SceneDefensePolicyProps, enableResourcePropertyConstraint?: boolean);
}
