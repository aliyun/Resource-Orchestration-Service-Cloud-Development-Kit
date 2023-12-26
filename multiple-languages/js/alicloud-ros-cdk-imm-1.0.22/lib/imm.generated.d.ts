import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosProject`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-imm-project
 */
export interface RosProjectProps {
    /**
     * @Property project: The name of project.
     */
    readonly project: string | ros.IResolvable;
    /**
     * @Property serviceRole: Service role, which grants the IMM service the right to access other cloud resources (such as OSS). The default value is AliyunIMMDefaultRole.
     */
    readonly serviceRole?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::IMM::Project`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Project` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-imm-project
 */
export declare class RosProject extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::IMM::Project";
    /**
     * @Attribute Project: The name of project.
     */
    readonly attrProject: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property project: The name of project.
     */
    project: string | ros.IResolvable;
    /**
     * @Property serviceRole: Service role, which grants the IMM service the right to access other cloud resources (such as OSS). The default value is AliyunIMMDefaultRole.
     */
    serviceRole: string | ros.IResolvable | undefined;
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
