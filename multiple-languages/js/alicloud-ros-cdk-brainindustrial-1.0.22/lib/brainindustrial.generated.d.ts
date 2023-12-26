import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosPidOrganization`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-brainindustrial-pidorganization
 */
export interface RosPidOrganizationProps {
    /**
     * @Property pidOrganizationName: PidOrganizationName
     */
    readonly pidOrganizationName: string | ros.IResolvable;
    /**
     * @Property parentPidOrganizationId: ParentPidOrganizationId
     */
    readonly parentPidOrganizationId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::BrainIndustrial::PidOrganization`, which is used to configure the architecture of a project.
 * @Note This class does not contain additional functions, so it is recommended to use the `PidOrganization` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-brainindustrial-pidorganization
 */
export declare class RosPidOrganization extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::BrainIndustrial::PidOrganization";
    /**
     * @Attribute ParentPidOrganizationId: ParentPidOrganizationId
     */
    readonly attrParentPidOrganizationId: ros.IResolvable;
    /**
     * @Attribute PidOrganizationId: PidOrganizationId
     */
    readonly attrPidOrganizationId: ros.IResolvable;
    /**
     * @Attribute PidOrganizationLevel: PidOrganizationLevel
     */
    readonly attrPidOrganizationLevel: ros.IResolvable;
    /**
     * @Attribute PidOrganizationName: PidOrganizationName
     */
    readonly attrPidOrganizationName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property pidOrganizationName: PidOrganizationName
     */
    pidOrganizationName: string | ros.IResolvable;
    /**
     * @Property parentPidOrganizationId: ParentPidOrganizationId
     */
    parentPidOrganizationId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPidOrganizationProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosPidProject`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-brainindustrial-pidproject
 */
export interface RosPidProjectProps {
    /**
     * @Property pidOrganizationId: PidOrganizationId
     */
    readonly pidOrganizationId: string | ros.IResolvable;
    /**
     * @Property pidProjectName: PidProjectName
     */
    readonly pidProjectName: string | ros.IResolvable;
    /**
     * @Property pidProjectDesc: PidProjectDesc
     */
    readonly pidProjectDesc?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::BrainIndustrial::PidProject`, which is used to add a project.
 * @Note This class does not contain additional functions, so it is recommended to use the `PidProject` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-brainindustrial-pidproject
 */
export declare class RosPidProject extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::BrainIndustrial::PidProject";
    /**
     * @Attribute PidOrganizationId: PidOrganizationId
     */
    readonly attrPidOrganizationId: ros.IResolvable;
    /**
     * @Attribute PidProjectDesc: PidProjectDesc
     */
    readonly attrPidProjectDesc: ros.IResolvable;
    /**
     * @Attribute PidProjectId: PidProjectId
     */
    readonly attrPidProjectId: ros.IResolvable;
    /**
     * @Attribute PidProjectName: PidProjectName
     */
    readonly attrPidProjectName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property pidOrganizationId: PidOrganizationId
     */
    pidOrganizationId: string | ros.IResolvable;
    /**
     * @Property pidProjectName: PidProjectName
     */
    pidProjectName: string | ros.IResolvable;
    /**
     * @Property pidProjectDesc: PidProjectDesc
     */
    pidProjectDesc: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPidProjectProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
