import * as ros from '@alicloud/ros-cdk-core';
import { RosZnode } from './mse.generated';
export { RosZnode as ZnodeProperty };
/**
 * Properties for defining a `Znode`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-znode
 */
export interface ZnodeProps {
    /**
     * Property clusterId: The ID of the cluster.
     */
    readonly clusterId: string | ros.IResolvable;
    /**
     * Property path: The path of the znode.
     */
    readonly path: string | ros.IResolvable;
    /**
     * Property data: The data of the znode.
     */
    readonly data?: string | ros.IResolvable;
    /**
     * Property instanceId: The ID of the instance.
     */
    readonly instanceId?: string | ros.IResolvable;
    /**
     * Property type: The type of the znode.
     */
    readonly type?: string | ros.IResolvable;
}
/**
 * Represents a `Znode`.
 */
export interface IZnode extends ros.IResource {
    readonly props: ZnodeProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::MSE::Znode`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosZnode`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-znode
 */
export declare class Znode extends ros.Resource implements IZnode {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ZnodeProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ZnodeProps, enableResourcePropertyConstraint?: boolean);
}
