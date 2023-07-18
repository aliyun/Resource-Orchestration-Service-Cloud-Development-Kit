// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `DATASOURCE::EMR::FlowProjects`
 */
export interface RosFlowProjectsProps {

    /**
     * @Property flowProjectId: The first ID of the resource
     */
    readonly flowProjectId?: string | ros.IResolvable;

    /**
     * @Property flowProjectName: Project name.
     */
    readonly flowProjectName?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosFlowProjectsProps`
 *
 * @param properties - the TypeScript properties of a `RosFlowProjectsProps`
 *
 * @returns the result of the validation.
 */
function RosFlowProjectsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('flowProjectName', ros.validateString)(properties.flowProjectName));
    errors.collect(ros.propertyValidator('flowProjectId', ros.validateString)(properties.flowProjectId));
    return errors.wrap('supplied properties not correct for "RosFlowProjectsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::EMR::FlowProjects` resource
 *
 * @param properties - the TypeScript properties of a `RosFlowProjectsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::EMR::FlowProjects` resource.
 */
// @ts-ignore TS6133
function rosFlowProjectsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosFlowProjectsPropsValidator(properties).assertSuccess();
    }
    return {
      FlowProjectId: ros.stringToRosTemplate(properties.flowProjectId),
      FlowProjectName: ros.stringToRosTemplate(properties.flowProjectName),
    };
}

/**
 * A ROS template type:  `DATASOURCE::EMR::FlowProjects`
 */
export class RosFlowProjects extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::EMR::FlowProjects";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute FlowProjectIds: The list of flow project IDs.
     */
    public readonly attrFlowProjectIds: ros.IResolvable;

    /**
     * @Attribute FlowProjects: The list of flow projects.
     */
    public readonly attrFlowProjects: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property flowProjectId: The first ID of the resource
     */
    public flowProjectId: string | ros.IResolvable | undefined;

    /**
     * @Property flowProjectName: Project name.
     */
    public flowProjectName: string | ros.IResolvable | undefined;

    /**
     * Create a new `DATASOURCE::EMR::FlowProjects`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosFlowProjectsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosFlowProjects.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrFlowProjectIds = this.getAtt('FlowProjectIds');
        this.attrFlowProjects = this.getAtt('FlowProjects');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.flowProjectId = props.flowProjectId;
        this.flowProjectName = props.flowProjectName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            flowProjectId: this.flowProjectId,
            flowProjectName: this.flowProjectName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosFlowProjectsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
