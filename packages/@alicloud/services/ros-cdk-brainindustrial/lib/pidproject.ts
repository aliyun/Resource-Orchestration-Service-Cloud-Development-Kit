import * as ros from '@alicloud/ros-cdk-core';
import { RosPidProject } from './brainindustrial.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosPidProject as PidProjectProperty };

/**
 * Properties for defining a `ALIYUN::BrainIndustrial::PidProject`
 */
export interface PidProjectProps {

    /**
     * Property pidOrganizationId: PidOrganizationId
     */
    readonly pidOrganizationId: string | ros.IResolvable;

    /**
     * Property pidProjectName: PidProjectName
     */
    readonly pidProjectName: string | ros.IResolvable;

    /**
     * Property pidProjectDesc: PidProjectDesc
     */
    readonly pidProjectDesc?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::BrainIndustrial::PidProject`
 */
export class PidProject extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute PidOrganizationId: PidOrganizationId
     */
    public readonly attrPidOrganizationId: ros.IResolvable;

    /**
     * Attribute PidProjectDesc: PidProjectDesc
     */
    public readonly attrPidProjectDesc: ros.IResolvable;

    /**
     * Attribute PidProjectId: PidProjectId
     */
    public readonly attrPidProjectId: ros.IResolvable;

    /**
     * Attribute PidProjectName: PidProjectName
     */
    public readonly attrPidProjectName: ros.IResolvable;

    /**
     * Create a new `ALIYUN::BrainIndustrial::PidProject`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PidProjectProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosPidProject = new RosPidProject(this, id,  {
            pidProjectDesc: props.pidProjectDesc,
            pidProjectName: props.pidProjectName,
            pidOrganizationId: props.pidOrganizationId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPidProject;
        this.attrPidOrganizationId = rosPidProject.attrPidOrganizationId;
        this.attrPidProjectDesc = rosPidProject.attrPidProjectDesc;
        this.attrPidProjectId = rosPidProject.attrPidProjectId;
        this.attrPidProjectName = rosPidProject.attrPidProjectName;
    }
}
