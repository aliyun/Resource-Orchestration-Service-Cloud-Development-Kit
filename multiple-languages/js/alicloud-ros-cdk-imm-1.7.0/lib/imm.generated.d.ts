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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::IMM::Project`, which is used to create an Intelligent Media Management (IMM) project.
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
/**
 * Properties for defining a `RosProject2`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-imm-project2
 */
export interface RosProject2Props {
    /**
     * @Property projectName: The name of project.
     */
    readonly projectName: string | ros.IResolvable;
    /**
     * @Property datasetMaxBindCount: The maximum number of bindings for each dataset. Valid values: 1 to 10. Default value: 10.
     */
    readonly datasetMaxBindCount?: number | ros.IResolvable;
    /**
     * @Property datasetMaxEntityCount: The maximum number of metadata entities in each dataset. Default value: 10000000000.
     */
    readonly datasetMaxEntityCount?: number | ros.IResolvable;
    /**
     * @Property datasetMaxFileCount: The maximum number of files in each dataset. Valid values: 1 to 100000000. Default value: 100000000.
     */
    readonly datasetMaxFileCount?: number | ros.IResolvable;
    /**
     * @Property datasetMaxRelationCount: The maximum number of metadata entities in each dataset. Default value: 100000000000.
     */
    readonly datasetMaxRelationCount?: number | ros.IResolvable;
    /**
     * @Property datasetMaxTotalFileSize: The maximum size of files in each dataset. If the maximum size is exceeded, no indexes can be added. Unit: bytes. Default value: 90000000000000000.
     */
    readonly datasetMaxTotalFileSize?: number | ros.IResolvable;
    /**
     * @Property description: The description of project.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property projectMaxDatasetCount: The maximum number of datasets in the project. Valid values: 1 to 1000000000. Default value: 1000000000.
     */
    readonly projectMaxDatasetCount?: number | ros.IResolvable;
    /**
     * @Property serviceRole: 	The name of the Resource Access Management (RAM) role. You must attach the RAM role to IMM to allow IMM to access other cloud resources, such as Object Storage Service (OSS). Default value: AliyunIMMDefaultRole.
     */
    readonly serviceRole?: string | ros.IResolvable;
    /**
     * @Property templateId: The ID of the workflow template. You can leave this parameter empty.
     */
    readonly templateId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::IMM::Project2`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Project2` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-imm-project2
 */
export declare class RosProject2 extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::IMM::Project2";
    /**
     * @Attribute ProjectName: The name of project.
     */
    readonly attrProjectName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property projectName: The name of project.
     */
    projectName: string | ros.IResolvable;
    /**
     * @Property datasetMaxBindCount: The maximum number of bindings for each dataset. Valid values: 1 to 10. Default value: 10.
     */
    datasetMaxBindCount: number | ros.IResolvable | undefined;
    /**
     * @Property datasetMaxEntityCount: The maximum number of metadata entities in each dataset. Default value: 10000000000.
     */
    datasetMaxEntityCount: number | ros.IResolvable | undefined;
    /**
     * @Property datasetMaxFileCount: The maximum number of files in each dataset. Valid values: 1 to 100000000. Default value: 100000000.
     */
    datasetMaxFileCount: number | ros.IResolvable | undefined;
    /**
     * @Property datasetMaxRelationCount: The maximum number of metadata entities in each dataset. Default value: 100000000000.
     */
    datasetMaxRelationCount: number | ros.IResolvable | undefined;
    /**
     * @Property datasetMaxTotalFileSize: The maximum size of files in each dataset. If the maximum size is exceeded, no indexes can be added. Unit: bytes. Default value: 90000000000000000.
     */
    datasetMaxTotalFileSize: number | ros.IResolvable | undefined;
    /**
     * @Property description: The description of project.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property projectMaxDatasetCount: The maximum number of datasets in the project. Valid values: 1 to 1000000000. Default value: 1000000000.
     */
    projectMaxDatasetCount: number | ros.IResolvable | undefined;
    /**
     * @Property serviceRole: 	The name of the Resource Access Management (RAM) role. You must attach the RAM role to IMM to allow IMM to access other cloud resources, such as Object Storage Service (OSS). Default value: AliyunIMMDefaultRole.
     */
    serviceRole: string | ros.IResolvable | undefined;
    /**
     * @Property templateId: The ID of the workflow template. You can leave this parameter empty.
     */
    templateId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosProject2Props, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
