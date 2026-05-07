import * as ros from '@alicloud/ros-cdk-core';
import { RosFlowLog } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosFlowLog as FlowLogProperty };

/**
 * Properties for defining a `FlowLog`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-flowlog
 */
export interface FlowLogProps {

    /**
     * Property logStoreName: The log store name.
     */
    readonly logStoreName: string | ros.IResolvable;

    /**
     * Property projectName: The project name.
     */
    readonly projectName: string | ros.IResolvable;

    /**
     * Property resourceId: The resource id.
     */
    readonly resourceId: string | ros.IResolvable;

    /**
     * Property resourceType: The resource type.
     */
    readonly resourceType: string | ros.IResolvable;

    /**
     * Property trafficType: The traffic type.
     */
    readonly trafficType: string | ros.IResolvable;

    /**
     * Property description: The Description of flow log.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property flowLogName: The flow log name.
     */
    readonly flowLogName?: string | ros.IResolvable;
}

/**
 * Represents a `FlowLog`.
 */
export interface IFlowLog extends ros.IResource {
    readonly props: FlowLogProps;

    /**
     * Attribute Description: The Description of flow log.
     */
    readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute FlowLogId: The flow log ID.
     */
    readonly attrFlowLogId: ros.IResolvable | string;

    /**
     * Attribute FlowLogName: The flow log name.
     */
    readonly attrFlowLogName: ros.IResolvable | string;

    /**
     * Attribute LogStoreName: The log store name.
     */
    readonly attrLogStoreName: ros.IResolvable | string;

    /**
     * Attribute ProjectName: The project name.
     */
    readonly attrProjectName: ros.IResolvable | string;

    /**
     * Attribute ResourceId: The resource id.
     */
    readonly attrResourceId: ros.IResolvable | string;

    /**
     * Attribute ResourceType: The resource type.
     */
    readonly attrResourceType: ros.IResolvable | string;

    /**
     * Attribute TrafficType: The traffic type.
     */
    readonly attrTrafficType: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::FlowLog`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosFlowLog`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-flowlog
 */
export class FlowLog extends ros.Resource implements IFlowLog {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: FlowLogProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Description: The Description of flow log.
     */
    public readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute FlowLogId: The flow log ID.
     */
    public readonly attrFlowLogId: ros.IResolvable | string;

    /**
     * Attribute FlowLogName: The flow log name.
     */
    public readonly attrFlowLogName: ros.IResolvable | string;

    /**
     * Attribute LogStoreName: The log store name.
     */
    public readonly attrLogStoreName: ros.IResolvable | string;

    /**
     * Attribute ProjectName: The project name.
     */
    public readonly attrProjectName: ros.IResolvable | string;

    /**
     * Attribute ResourceId: The resource id.
     */
    public readonly attrResourceId: ros.IResolvable | string;

    /**
     * Attribute ResourceType: The resource type.
     */
    public readonly attrResourceType: ros.IResolvable | string;

    /**
     * Attribute TrafficType: The traffic type.
     */
    public readonly attrTrafficType: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: FlowLogProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosFlowLog = new RosFlowLog(this, id,  {
            flowLogName: props.flowLogName,
            description: props.description,
            logStoreName: props.logStoreName,
            resourceId: props.resourceId,
            projectName: props.projectName,
            resourceType: props.resourceType,
            trafficType: props.trafficType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosFlowLog;
        this.attrDescription = rosFlowLog.attrDescription;
        this.attrFlowLogId = rosFlowLog.attrFlowLogId;
        this.attrFlowLogName = rosFlowLog.attrFlowLogName;
        this.attrLogStoreName = rosFlowLog.attrLogStoreName;
        this.attrProjectName = rosFlowLog.attrProjectName;
        this.attrResourceId = rosFlowLog.attrResourceId;
        this.attrResourceType = rosFlowLog.attrResourceType;
        this.attrTrafficType = rosFlowLog.attrTrafficType;
    }
}
