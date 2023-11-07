import * as ros from '@alicloud/ros-cdk-core';
import { RosPipelineRelations } from './devops.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosPipelineRelations as PipelineRelationsProperty };

/**
 * Properties for defining a `ALIYUN::DEVOPS::PipelineRelations`
 */
export interface PipelineRelationsProps {

    /**
     * Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
     */
    readonly organizationId: string | ros.IResolvable;

    /**
     * Property pipelineId: The pipeline ID, which can be obtained from the pipeline link.
     */
    readonly pipelineId: number | ros.IResolvable;

    /**
     * Property relObjectIds: Ids of the associated resource. For now, only variable group ids are supported.
     */
    readonly relObjectIds: Array<number | ros.IResolvable> | ros.IResolvable;

    /**
     * Property relObjectType: Associated resource type. Valid values:
     * - VARIABLE_GROUP
     * - OOS_APP_ID
     * For now, only VARIABLE GROUP is supported.
     */
    readonly relObjectType: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::DEVOPS::PipelineRelations`
 */
export class PipelineRelations extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Create a new `ALIYUN::DEVOPS::PipelineRelations`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PipelineRelationsProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosPipelineRelations = new RosPipelineRelations(this, id,  {
            relObjectType: props.relObjectType,
            relObjectIds: props.relObjectIds,
            pipelineId: props.pipelineId,
            organizationId: props.organizationId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPipelineRelations;
    }
}
