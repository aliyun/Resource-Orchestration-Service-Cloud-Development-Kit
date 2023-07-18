import * as ros from '@alicloud/ros-cdk-core';
import { RosFlowLogs } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosFlowLogs as FlowLogsProperty };

/**
 * Properties for defining a `DATASOURCE::VPC::FlowLogs`
 */
export interface FlowLogsProps {

    /**
     * Property description: The description of the flow log.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property flowLogId: The ID of a flow log.
     */
    readonly flowLogId?: string | ros.IResolvable;

    /**
     * Property flowLogName: The name of the flow log.
     */
    readonly flowLogName?: string | ros.IResolvable;

    /**
     * Property logStoreName: A LogStore that stores captured traffic.
     */
    readonly logStoreName?: string | ros.IResolvable;

    /**
     * Property projectName: Manage the captured traffic of the Project.
     */
    readonly projectName?: string | ros.IResolvable;

    /**
     * Property resourceId: The ID of the resource group to which the flow log belongs.
     */
    readonly resourceId?: string | ros.IResolvable;

    /**
     * Property resourceType: The resource type of traffic to capture. Value:
     * NetworkInterface: Elastic NIC.
     * VSwitch: All ENIs within the VSwitch.
     * VPC: All ENIs in a VPC.
     */
    readonly resourceType?: string | ros.IResolvable;

    /**
     * Property trafficType: The type of traffic collected. Value:
     * All: All traffic.
     * Allow: Traffic allowed by access control.
     * Drop: Traffic denied by access control.
     */
    readonly trafficType?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `DATASOURCE::VPC::FlowLogs`
 */
export class FlowLogs extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute FlowLogIds: The list of flow log IDs.
     */
    public readonly attrFlowLogIds: ros.IResolvable;

    /**
     * Attribute FlowLogs: The list of flow logs.
     */
    public readonly attrFlowLogs: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::VPC::FlowLogs`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: FlowLogsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosFlowLogs = new RosFlowLogs(this, id,  {
            flowLogName: props.flowLogName,
            description: props.description,
            logStoreName: props.logStoreName,
            resourceId: props.resourceId,
            projectName: props.projectName,
            resourceType: props.resourceType,
            flowLogId: props.flowLogId,
            trafficType: props.trafficType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosFlowLogs;
        this.attrFlowLogIds = rosFlowLogs.attrFlowLogIds;
        this.attrFlowLogs = rosFlowLogs.attrFlowLogs;
    }
}
