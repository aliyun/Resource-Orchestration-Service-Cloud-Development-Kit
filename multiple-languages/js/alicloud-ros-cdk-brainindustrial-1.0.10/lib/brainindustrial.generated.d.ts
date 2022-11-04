import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::BrainIndustrial::PidOrganization`
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
 * A ROS template type:  `ALIYUN::BrainIndustrial::PidOrganization`
 */
export declare class RosPidOrganization extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::BrainIndustrial::PidOrganization";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `ALIYUN::BrainIndustrial::PidOrganization`.
     *
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
 * Properties for defining a `ALIYUN::BrainIndustrial::PidProject`
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
 * A ROS template type:  `ALIYUN::BrainIndustrial::PidProject`
 */
export declare class RosPidProject extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::BrainIndustrial::PidProject";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `ALIYUN::BrainIndustrial::PidProject`.
     *
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
