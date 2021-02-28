import * as ros from '@alicloud/ros-cdk-core';
import { RosMonitoringAgentProcess } from './cms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosMonitoringAgentProcess as MonitoringAgentProcessProperty };

/**
 * Properties for defining a `ALIYUN::CMS::MonitoringAgentProcess`
 */
export interface MonitoringAgentProcessProps {

    /**
     * Property instanceId: The ID of the instance.
     */
    readonly instanceId: string;

    /**
     * Property processName: The name of the process.
     */
    readonly processName?: string;

    /**
     * Property processUser: The user who launched the process.
     */
    readonly processUser?: string;
}

/**
 * A ROS resource type:  `ALIYUN::CMS::MonitoringAgentProcess`
 */
export class MonitoringAgentProcess extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute Id: The process ID.
     */
    public readonly attrId: any;

    /**
     * Create a new `ALIYUN::CMS::MonitoringAgentProcess`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MonitoringAgentProcessProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosMonitoringAgentProcess = new RosMonitoringAgentProcess(this, id,  {
            processName: props.processName,
            instanceId: props.instanceId,
            processUser: props.processUser,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosMonitoringAgentProcess;
        this.attrId = rosMonitoringAgentProcess.attrId;
    }
}
