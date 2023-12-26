import * as ros from '@alicloud/ros-cdk-core';
import { RosPidOrganization } from './brainindustrial.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosPidOrganization as PidOrganizationProperty };

/**
 * Properties for defining a `PidOrganization`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-brainindustrial-pidorganization
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::BrainIndustrial::PidOrganization`, which is used to configure the architecture of a project.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPidOrganization`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-brainindustrial-pidorganization
 */
export class PidOrganization extends ros.Resource {

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
