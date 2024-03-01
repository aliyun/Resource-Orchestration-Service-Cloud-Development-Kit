import * as ros from '@alicloud/ros-cdk-core';
import { RosPidProject } from './brainindustrial.generated';
export { RosPidProject as PidProjectProperty };
/**
 * Properties for defining a `PidProject`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-brainindustrial-pidproject
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::BrainIndustrial::PidProject`, which is used to add a project.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPidProject`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-brainindustrial-pidproject
 */
export declare class PidProject extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: PidProjectProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute PidOrganizationId: PidOrganizationId
     */
    readonly attrPidOrganizationId: ros.IResolvable;
    /**
     * Attribute PidProjectDesc: PidProjectDesc
     */
    readonly attrPidProjectDesc: ros.IResolvable;
    /**
     * Attribute PidProjectId: PidProjectId
     */
    readonly attrPidProjectId: ros.IResolvable;
    /**
     * Attribute PidProjectName: PidProjectName
     */
    readonly attrPidProjectName: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PidProjectProps, enableResourcePropertyConstraint?: boolean);
}
