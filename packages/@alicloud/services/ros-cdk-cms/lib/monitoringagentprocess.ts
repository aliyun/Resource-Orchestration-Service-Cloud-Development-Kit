import * as ros from '@alicloud/ros-cdk-core';
import { RosMonitoringAgentProcess } from './cms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosMonitoringAgentProcess as MonitoringAgentProcessProperty };

/**
 * Properties for defining a `MonitoringAgentProcess`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-monitoringagentprocess
 */
export interface MonitoringAgentProcessProps {

    /**
     * Property instanceId: The ID of the instance.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * Property processName: The name of the process.
     */
    readonly processName?: string | ros.IResolvable;

    /**
     * Property processUser: The user who launched the process.
     */
    readonly processUser?: string | ros.IResolvable;
}

/**
 * Represents a `MonitoringAgentProcess`.
 */
export interface IMonitoringAgentProcess extends ros.IResource {
    readonly props: MonitoringAgentProcessProps;

    /**
     * Attribute Id: The process ID.
     */
    readonly attrId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CMS::MonitoringAgentProcess`, which is used to create a process monitoring task.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosMonitoringAgentProcess`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-monitoringagentprocess
 */
export class MonitoringAgentProcess extends ros.Resource implements IMonitoringAgentProcess {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: MonitoringAgentProcessProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Id: The process ID.
     */
    public readonly attrId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MonitoringAgentProcessProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosMonitoringAgentProcess = new RosMonitoringAgentProcess(this, id,  {
            processName: props.processName,
            instanceId: props.instanceId,
            processUser: props.processUser,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosMonitoringAgentProcess;
        this.attrId = rosMonitoringAgentProcess.attrId;
    }
}
