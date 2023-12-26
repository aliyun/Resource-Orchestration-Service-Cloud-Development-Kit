import * as ros from '@alicloud/ros-cdk-core';
import { RosPidOrganization } from './brainindustrial.generated';
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
export declare class PidOrganization extends ros.Resource {
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
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PidOrganizationProps, enableResourcePropertyConstraint?: boolean);
}
