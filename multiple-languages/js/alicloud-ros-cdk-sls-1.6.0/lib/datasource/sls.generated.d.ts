import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosLogstores`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sls-logstores
 */
export interface RosLogstoresProps {
    /**
     * @Property project: Project name.
     */
    readonly project: string | ros.IResolvable;
    /**
     * @Property logstoreName: Logstore name.
     */
    readonly logstoreName?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SLS::Logstores`, which is used to query Logstores.
 * @Note This class does not contain additional functions, so it is recommended to use the `Logstores` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sls-logstores
 */
export declare class RosLogstores extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::SLS::Logstores";
    /**
     * @Attribute Logstores: The list of logstores.
     */
    readonly attrLogstores: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property project: Project name.
     */
    project: string | ros.IResolvable;
    /**
     * @Property logstoreName: Logstore name.
     */
    logstoreName: string | ros.IResolvable | undefined;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosLogstoresProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosProject`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sls-project
 */
export interface RosProjectProps {
    /**
     * @Property projectName: The name of the project.
     */
    readonly projectName: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SLS::Project`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Project` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sls-project
 */
export declare class RosProject extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::SLS::Project";
    /**
     * @Attribute CreateTime: The time at which the project was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute DataRedundancyType: Data redundancy type.
     */
    readonly attrDataRedundancyType: ros.IResolvable;
    /**
     * @Attribute Description: The description of the project.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute LastModifyTime: The time at which the project was last modified.
     */
    readonly attrLastModifyTime: ros.IResolvable;
    /**
     * @Attribute Owner: The ID of the Alibaba Cloud account that is used to create the project.
     */
    readonly attrOwner: ros.IResolvable;
    /**
     * @Attribute ProjectName: The name of the project.
     */
    readonly attrProjectName: ros.IResolvable;
    /**
     * @Attribute Quota: Project quota.
     */
    readonly attrQuota: ros.IResolvable;
    /**
     * @Attribute Region: The region to which the project belongs.
     */
    readonly attrRegion: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group to which the project belongs.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute Status: The status of the project.
     */
    readonly attrStatus: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property projectName: The name of the project.
     */
    projectName: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosProjectProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosProjects`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sls-projects
 */
export interface RosProjectsProps {
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SLS::Projects`, which is used to query the information about Simple Log Service (SLS) projects.
 * @Note This class does not contain additional functions, so it is recommended to use the `Projects` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sls-projects
 */
export declare class RosProjects extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::SLS::Projects";
    /**
     * @Attribute ProjectNames: The list of project names.
     */
    readonly attrProjectNames: ros.IResolvable;
    /**
     * @Attribute Projects: The list of projects.
     */
    readonly attrProjects: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosProjectsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
