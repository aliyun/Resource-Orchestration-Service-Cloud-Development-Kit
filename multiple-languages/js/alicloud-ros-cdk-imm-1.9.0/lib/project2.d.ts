import * as ros from '@alicloud/ros-cdk-core';
import { RosProject2 } from './imm.generated';
export { RosProject2 as Project2Property };
/**
 * Properties for defining a `Project2`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-imm-project2
 */
export interface Project2Props {
    /**
     * Property projectName: The name of project.
     */
    readonly projectName: string | ros.IResolvable;
    /**
     * Property datasetMaxBindCount: The maximum number of bindings for each dataset. Valid values: 1 to 10. Default value: 10.
     */
    readonly datasetMaxBindCount?: number | ros.IResolvable;
    /**
     * Property datasetMaxEntityCount: The maximum number of metadata entities in each dataset. Default value: 10000000000.
     */
    readonly datasetMaxEntityCount?: number | ros.IResolvable;
    /**
     * Property datasetMaxFileCount: The maximum number of files in each dataset. Valid values: 1 to 100000000. Default value: 100000000.
     */
    readonly datasetMaxFileCount?: number | ros.IResolvable;
    /**
     * Property datasetMaxRelationCount: The maximum number of metadata entities in each dataset. Default value: 100000000000.
     */
    readonly datasetMaxRelationCount?: number | ros.IResolvable;
    /**
     * Property datasetMaxTotalFileSize: The maximum size of files in each dataset. If the maximum size is exceeded, no indexes can be added. Unit: bytes. Default value: 90000000000000000.
     */
    readonly datasetMaxTotalFileSize?: number | ros.IResolvable;
    /**
     * Property description: The description of project.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property projectMaxDatasetCount: The maximum number of datasets in the project. Valid values: 1 to 1000000000. Default value: 1000000000.
     */
    readonly projectMaxDatasetCount?: number | ros.IResolvable;
    /**
     * Property serviceRole: 	The name of the Resource Access Management (RAM) role. You must attach the RAM role to IMM to allow IMM to access other cloud resources, such as Object Storage Service (OSS). Default value: AliyunIMMDefaultRole.
     */
    readonly serviceRole?: string | ros.IResolvable;
    /**
     * Property templateId: The ID of the workflow template. You can leave this parameter empty.
     */
    readonly templateId?: string | ros.IResolvable;
}
/**
 * Represents a `Project2`.
 */
export interface IProject2 extends ros.IResource {
    readonly props: Project2Props;
    /**
     * Attribute ProjectName: The name of project.
     */
    readonly attrProjectName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::IMM::Project2`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosProject2`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-imm-project2
 */
export declare class Project2 extends ros.Resource implements IProject2 {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: Project2Props;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ProjectName: The name of project.
     */
    readonly attrProjectName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: Project2Props, enableResourcePropertyConstraint?: boolean);
}
