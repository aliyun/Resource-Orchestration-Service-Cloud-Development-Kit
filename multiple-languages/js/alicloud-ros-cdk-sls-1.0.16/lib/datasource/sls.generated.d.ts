import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `DATASOURCE::SLS::Logstores`
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
 * A ROS template type:  `DATASOURCE::SLS::Logstores`
 */
export declare class RosLogstores extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::SLS::Logstores";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `DATASOURCE::SLS::Logstores`.
     *
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
 * Properties for defining a `DATASOURCE::SLS::Projects`
 */
export interface RosProjectsProps {
}
/**
 * A ROS template type:  `DATASOURCE::SLS::Projects`
 */
export declare class RosProjects extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::SLS::Projects";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `DATASOURCE::SLS::Projects`.
     *
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
