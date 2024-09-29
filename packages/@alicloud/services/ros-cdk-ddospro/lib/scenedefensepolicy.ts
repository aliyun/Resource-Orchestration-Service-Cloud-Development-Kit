import * as ros from '@alicloud/ros-cdk-core';
import { RosSceneDefensePolicy } from './ddospro.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::DDoSPro::SceneDefensePolicy`, which is used to create a scenario-specific custom policy.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSceneDefensePolicy`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-scenedefensepolicy
 */
export class SceneDefensePolicy extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: SceneDefensePolicyProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Name: The name of the policy.
     */
    public readonly attrName: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SceneDefensePolicyProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosSceneDefensePolicy = new RosSceneDefensePolicy(this, id,  {
            endTime: props.endTime,
            startTime: props.startTime,
            name: props.name,
            template: props.template,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSceneDefensePolicy;
        this.attrName = rosSceneDefensePolicy.attrName;
    }
}
