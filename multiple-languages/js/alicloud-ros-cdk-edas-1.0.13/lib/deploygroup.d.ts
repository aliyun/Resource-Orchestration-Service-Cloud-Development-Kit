import * as ros from '@alicloud/ros-cdk-core';
import { RosDeployGroup } from './edas.generated';
export { RosDeployGroup as DeployGroupProperty };
/**
 * Properties for defining a `ALIYUN::EDAS::DeployGroup`
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
 * A ROS resource type:  `ALIYUN::EDAS::DeployGroup`
 */
export declare class DeployGroup extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
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
     * Create a new `ALIYUN::EDAS::DeployGroup`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DeployGroupProps, enableResourcePropertyConstraint?: boolean);
}
