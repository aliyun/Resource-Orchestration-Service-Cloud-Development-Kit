import * as ros from '@alicloud/ros-cdk-core';
import { RosFlowProject } from './emr.generated';
export { RosFlowProject as FlowProjectProperty };
/**
 * Properties for defining a `FlowProject`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-flowproject
 */
export interface FlowProjectProps {
    /**
     * Property description: The description of the project.
     */
    readonly description: string | ros.IResolvable;
    /**
     * Property flowProjectName: The name of the project.
     */
    readonly flowProjectName: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the enterprise resource group to which the EMR instances and ECS node instances belong.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * Represents a `FlowProject`.
 */
export interface IFlowProject extends ros.IResource {
    readonly props: FlowProjectProps;
    /**
     * Attribute CreateTime: The time when the project was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Description: The description of the project.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute FlowProjectId: The ID of the project.
     */
    readonly attrFlowProjectId: ros.IResolvable | string;
    /**
     * Attribute FlowProjectName: The name of the project.
     */
    readonly attrFlowProjectName: ros.IResolvable | string;
    /**
     * Attribute GmtModified: The time when the project was modified.
     */
    readonly attrGmtModified: ros.IResolvable | string;
    /**
     * Attribute UserId: The ID of the primary account.
     */
    readonly attrUserId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::EMR::FlowProject`, which is used to create a data development project.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosFlowProject`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-flowproject
 */
export declare class FlowProject extends ros.Resource implements IFlowProject {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: FlowProjectProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CreateTime: The time when the project was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Description: The description of the project.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute FlowProjectId: The ID of the project.
     */
    readonly attrFlowProjectId: ros.IResolvable | string;
    /**
     * Attribute FlowProjectName: The name of the project.
     */
    readonly attrFlowProjectName: ros.IResolvable | string;
    /**
     * Attribute GmtModified: The time when the project was modified.
     */
    readonly attrGmtModified: ros.IResolvable | string;
    /**
     * Attribute UserId: The ID of the primary account.
     */
    readonly attrUserId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: FlowProjectProps, enableResourcePropertyConstraint?: boolean);
}
