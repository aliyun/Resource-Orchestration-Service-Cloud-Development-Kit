import * as ros from '@alicloud/ros-cdk-core';
import { RosPipeline } from './devops.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosPipeline as PipelineProperty };

/**
 * Properties for defining a `ALIYUN::DEVOPS::Pipeline`
 */
export interface PipelineProps {

    /**
     * Property content: Pipeline description in YAML format.
     */
    readonly content: string | ros.IResolvable;

    /**
     * Property name: Pipeline name.
     */
    readonly name: string | ros.IResolvable;

    /**
     * Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
     */
    readonly organizationId: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::DEVOPS::Pipeline`
 */
export class Pipeline extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute PipelineId: Pipeline id.
     */
    public readonly attrPipelineId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::DEVOPS::Pipeline`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PipelineProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosPipeline = new RosPipeline(this, id,  {
            content: props.content,
            organizationId: props.organizationId,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPipeline;
        this.attrPipelineId = rosPipeline.attrPipelineId;
    }
}
