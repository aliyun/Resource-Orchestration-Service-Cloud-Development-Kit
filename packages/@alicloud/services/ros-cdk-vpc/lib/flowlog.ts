import * as ros from '@alicloud/ros-cdk-core';
import { RosFlowLog } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosFlowLog as FlowLogProperty };

/**
 * Properties for defining a `ALIYUN::VPC::FlowLog`
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
 * A ROS resource type:  `ALIYUN::VPC::FlowLog`
 */
export class FlowLog extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute Description: The Description of flow log.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * Attribute FlowLogId: The flow log ID.
     */
    public readonly attrFlowLogId: ros.IResolvable;

    /**
     * Attribute FlowLogName: The flow log name.
     */
    public readonly attrFlowLogName: ros.IResolvable;

    /**
     * Attribute LogStoreName: The log store name.
     */
    public readonly attrLogStoreName: ros.IResolvable;

    /**
     * Attribute ProjectName: The project name.
     */
    public readonly attrProjectName: ros.IResolvable;

    /**
     * Attribute ResourceId: The resource id.
     */
    public readonly attrResourceId: ros.IResolvable;

    /**
     * Attribute ResourceType: The resource type.
     */
    public readonly attrResourceType: ros.IResolvable;

    /**
     * Attribute TrafficType: The traffic type.
     */
    public readonly attrTrafficType: ros.IResolvable;

    /**
     * Create a new `ALIYUN::VPC::FlowLog`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: FlowLogProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

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
