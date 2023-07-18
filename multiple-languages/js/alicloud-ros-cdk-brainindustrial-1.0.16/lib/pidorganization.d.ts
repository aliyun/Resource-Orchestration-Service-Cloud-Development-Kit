import * as ros from '@alicloud/ros-cdk-core';
import { RosPidOrganization } from './brainindustrial.generated';
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
export declare class PidOrganization extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute ParentPidOrganizationId: ParentPidOrganizationId
     */
    readonly attrParentPidOrganizationId: ros.IResolvable;
    /**
     * Attribute PidOrganizationId: PidOrganizationId
     */
    readonly attrPidOrganizationId: ros.IResolvable;
    /**
     * Attribute PidOrganizationLevel: PidOrganizationLevel
     */
    readonly attrPidOrganizationLevel: ros.IResolvable;
    /**
     * Attribute PidOrganizationName: PidOrganizationName
     */
    readonly attrPidOrganizationName: ros.IResolvable;
    /**
     * Create a new `ALIYUN::BrainIndustrial::PidOrganization`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PidOrganizationProps, enableResourcePropertyConstraint?: boolean);
}
