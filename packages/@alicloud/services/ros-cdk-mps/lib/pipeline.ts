import * as ros from '@alicloud/ros-cdk-core';
import { RosPipeline } from './mps.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosPipeline as PipelineProperty };

/**
 * Properties for defining a `Pipeline`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mps-pipeline
 */
export interface PipelineProps {

    /**
     * Property name: The new name of the MPS queue. The value can contain letters, digits, and special
     * characters such as hyphens (-) and can be up to 128 bytes in size. The value cannot
     * start with a special character.
     */
    readonly name: string | ros.IResolvable;

    /**
     * Property notifyConfig: The Message Service (MNS) configuration, such as the information about the MNS queue
     * or topic. For more information, see NotifyConfig.
     */
    readonly notifyConfig?: RosPipeline.NotifyConfigProperty | ros.IResolvable;

    /**
     * Property role: The role that is assigned to the current RAM user. To obtain the role, you can log on to the RAM console and choose Identities > Roles in the left-side navigation pane.
     */
    readonly role?: string | ros.IResolvable;

    /**
     * Property speed: Pipe type. Value:
     * Boost: Double-speed transcoding
     * Standard: ordinary pipe
     * NarrowBandHDV2: Narrowband HD 2.0
     * AIVideoCover: Smart Screenshots
     * AIVideoTag: video tag (supports regions Shanghai, Beijing, Hangzhou).
     * Default: Standard.
     */
    readonly speed?: string | ros.IResolvable;

    /**
     * Property speedLevel: Speed level.
     */
    readonly speedLevel?: number | ros.IResolvable;

    /**
     * Property state: The new state of the MPS queue.
     * Active: The MPS queue is active. Jobs in the MPS queue can be scheduled and run by MPS.
     * Paused: The MPS queue is paused. Jobs in the MPS queue cannot be scheduled or run by MPS, and all jobs remain in the Submitted state. Jobs that are running will not be affected.
     */
    readonly state?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::MPS::Pipeline`, which is used to create an ApsaraVideo Media Processing (MPS) queue.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPipeline`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mps-pipeline
 */
export class Pipeline extends ros.Resource {

    /**
     * Attribute PipelineId: The ID of the MPS queue.
     */
    public readonly attrPipelineId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PipelineProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosPipeline = new RosPipeline(this, id,  {
            role: props.role,
            speed: props.speed,
            speedLevel: props.speedLevel,
            state: props.state,
            notifyConfig: props.notifyConfig,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPipeline;
        this.attrPipelineId = rosPipeline.attrPipelineId;
    }
}
