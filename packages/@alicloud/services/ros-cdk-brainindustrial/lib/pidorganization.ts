import * as ros from '@alicloud/ros-cdk-core';
import { RosPidOrganization } from './brainindustrial.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosPidOrganization as PidOrganizationProperty };

/**
 * Properties for defining a `ALIYUN::BrainIndustrial::PidOrganization`
 */
export interface PidOrganizationProps {

    /**
     * Property pidOrganizationName: PidOrganizationName
     */
    readonly pidOrganizationName: string | ros.IResolvable;

    /**
     * Property parentPidOrganizationId: ParentPidOrganizationId
     */
    readonly parentPidOrganizationId?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::BrainIndustrial::PidOrganization`
 */
export class PidOrganization extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ParentPidOrganizationId: ParentPidOrganizationId
     */
    public readonly attrParentPidOrganizationId: ros.IResolvable;

    /**
     * Attribute PidOrganizationId: PidOrganizationId
     */
    public readonly attrPidOrganizationId: ros.IResolvable;

    /**
     * Attribute PidOrganizationLevel: PidOrganizationLevel
     */
    public readonly attrPidOrganizationLevel: ros.IResolvable;

    /**
     * Attribute PidOrganizationName: PidOrganizationName
     */
    public readonly attrPidOrganizationName: ros.IResolvable;

    /**
     * Create a new `ALIYUN::BrainIndustrial::PidOrganization`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PidOrganizationProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosPidOrganization = new RosPidOrganization(this, id,  {
            pidOrganizationName: props.pidOrganizationName,
            parentPidOrganizationId: props.parentPidOrganizationId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPidOrganization;
        this.attrParentPidOrganizationId = rosPidOrganization.attrParentPidOrganizationId;
        this.attrPidOrganizationId = rosPidOrganization.attrPidOrganizationId;
        this.attrPidOrganizationLevel = rosPidOrganization.attrPidOrganizationLevel;
        this.attrPidOrganizationName = rosPidOrganization.attrPidOrganizationName;
    }
}
