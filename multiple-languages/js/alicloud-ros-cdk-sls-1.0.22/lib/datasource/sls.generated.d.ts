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
 * Properties for defining a `RosProjects`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sls-projects
 */
export interface RosProjectsProps {
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SLS::Projects`.
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
