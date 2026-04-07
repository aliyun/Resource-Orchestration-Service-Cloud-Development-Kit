import * as ros from '@alicloud/ros-cdk-core';
import { RosSwimmingLane } from './edas.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSwimmingLane as SwimmingLaneProperty };

/**
 * Properties for defining a `SwimmingLane`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-swimminglane
 */
export interface SwimmingLaneProps {

    /**
     * Property entryRules: The entry rules of the swimming lane.
     */
    readonly entryRules: Array<{ [key: string]: any }> | ros.IResolvable;

    /**
     * Property groupId: The group ID of the swimming lane.
     */
    readonly groupId: number | ros.IResolvable;

    /**
     * Property logicalRegionId: The RegionId of the logical region. Format: `physicalRegion:customNamespaceIdentifier`.
     */
    readonly logicalRegionId: string | ros.IResolvable;

    /**
     * Property name: The name of the swimming lane.
     */
    readonly name: string | ros.IResolvable;

    /**
     * Property tag: The tag of the swimming lane.
     */
    readonly tag: string | ros.IResolvable;

    /**
     * Property appInfos: Application information involved in the swimming lane.
     */
    readonly appInfos?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property enableRules: Whether to enable flow control rules.
     */
    readonly enableRules?: boolean | ros.IResolvable;
}

/**
 * Represents a `SwimmingLane`.
 */
export interface ISwimmingLane extends ros.IResource {
    readonly props: SwimmingLaneProps;

    /**
     * Attribute LaneId: The ID of the swimming lane.
     */
    readonly attrLaneId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::EDAS::SwimmingLane`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSwimmingLane`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-swimminglane
 */
export class SwimmingLane extends ros.Resource implements ISwimmingLane {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: SwimmingLaneProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute LaneId: The ID of the swimming lane.
     */
    public readonly attrLaneId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SwimmingLaneProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosSwimmingLane = new RosSwimmingLane(this, id,  {
            logicalRegionId: props.logicalRegionId,
            entryRules: props.entryRules,
            appInfos: props.appInfos,
            tag: props.tag,
            enableRules: props.enableRules,
            name: props.name,
            groupId: props.groupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSwimmingLane;
        this.attrLaneId = rosSwimmingLane.attrLaneId;
    }
}
