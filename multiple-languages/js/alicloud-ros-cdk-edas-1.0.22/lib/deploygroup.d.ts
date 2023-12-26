import * as ros from '@alicloud/ros-cdk-core';
import { RosDeployGroup } from './edas.generated';
export { RosDeployGroup as DeployGroupProperty };
/**
 * Properties for defining a `DeployGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-deploygroup
 */
export interface DeployGroupProps {
    /**
     * Property appId: Application ID
     */
    readonly appId: string | ros.IResolvable;
    /**
     * Property groupName: Group name, maximum length of 64.
     */
    readonly groupName: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::EDAS::DeployGroup`, which is used to create an instance group for an application.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDeployGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-deploygroup
 */
export declare class DeployGroup extends ros.Resource {
    /**
     * Attribute AppId: Application ID
     */
    readonly attrAppId: ros.IResolvable;
    /**
     * Attribute GroupName: Deploy group name
     */
    readonly attrGroupName: ros.IResolvable;
    /**
     * Attribute Id: Deploy group ID
     */
    readonly attrId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DeployGroupProps, enableResourcePropertyConstraint?: boolean);
}
