import * as ros from '@alicloud/ros-cdk-core';
import { RosApplyConfigToMachineGroup } from './sls.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosApplyConfigToMachineGroup as ApplyConfigToMachineGroupProperty };

/**
 * Properties for defining a `ALIYUN::SLS::ApplyConfigToMachineGroup`
 */
export interface ApplyConfigToMachineGroupProps {

    /**
     * Property configName: Apply config to the config name
     */
    readonly configName?: string;

    /**
     * Property groupName: Apply config to the group name
     */
    readonly groupName?: string;

    /**
     * Property projectName: Apply config to the project name.
     */
    readonly projectName?: string;
}

/**
 * A ROS resource type:  `ALIYUN::SLS::ApplyConfigToMachineGroup`
 */
export class ApplyConfigToMachineGroup extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Create a new `ALIYUN::SLS::ApplyConfigToMachineGroup`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ApplyConfigToMachineGroupProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosApplyConfigToMachineGroup = new RosApplyConfigToMachineGroup(this, id,  {
            groupName: props.groupName,
            configName: props.configName,
            projectName: props.projectName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosApplyConfigToMachineGroup;
    }
}
