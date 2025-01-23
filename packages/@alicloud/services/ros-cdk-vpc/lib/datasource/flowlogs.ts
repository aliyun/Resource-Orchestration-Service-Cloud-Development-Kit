import * as ros from '@alicloud/ros-cdk-core';
import { RosFlowLogs } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosFlowLogs as FlowLogsProperty };

/**
 * Properties for defining a `FlowLogs`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-flowlogs
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
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

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
 * Represents a `FlowLogs`.
 */
export interface IFlowLogs extends ros.IResource {
    readonly props: FlowLogsProps;

    /**
     * Attribute FlowLogIds: The list of flow log IDs.
     */
    readonly attrFlowLogIds: ros.IResolvable | string;

    /**
     * Attribute FlowLogs: The list of flow logs.
     */
    readonly attrFlowLogs: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::FlowLogs`, which is used to query flow logs.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosFlowLogs`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-flowlogs
 */
export class FlowLogs extends ros.Resource implements IFlowLogs {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: FlowLogsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute FlowLogIds: The list of flow log IDs.
     */
    public readonly attrFlowLogIds: ros.IResolvable | string;

    /**
     * Attribute FlowLogs: The list of flow logs.
     */
    public readonly attrFlowLogs: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: FlowLogsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosFlowLogs = new RosFlowLogs(this, id,  {
            flowLogName: props.flowLogName,
            description: props.description,
            logStoreName: props.logStoreName,
            resourceId: props.resourceId,
            projectName: props.projectName,
            resourceType: props.resourceType,
            flowLogId: props.flowLogId,
            trafficType: props.trafficType,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosFlowLogs;
        this.attrFlowLogIds = rosFlowLogs.attrFlowLogIds;
        this.attrFlowLogs = rosFlowLogs.attrFlowLogs;
    }
}
