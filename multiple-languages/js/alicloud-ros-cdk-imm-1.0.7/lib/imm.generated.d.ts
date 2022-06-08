import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::IMM::Project`
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
 * A ROS template type:  `ALIYUN::IMM::Project`
 */
export declare class RosProject extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::IMM::Project";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `ALIYUN::IMM::Project`.
     *
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
//# sourceMappingURL=imm.generated.d.ts.map