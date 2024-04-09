import * as ros from '@alicloud/ros-cdk-core';
import { RosAllFwSwitch } from './cloudfw.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAllFwSwitch as AllFwSwitchProperty };

/**
 * Properties for defining a `AllFwSwitch`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-allfwswitch
 */
export interface AllFwSwitchProps {

    /**
     * Property instanceId: The ID of the cloud firewall instance.
     */
    readonly instanceId?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CLOUDFW::AllFwSwitch`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAllFwSwitch`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudfw-allfwswitch
 */
export class AllFwSwitch extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AllFwSwitchProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AllFwSwitchProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosAllFwSwitch = new RosAllFwSwitch(this, id,  {
            instanceId: props.instanceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAllFwSwitch;
    }
}
