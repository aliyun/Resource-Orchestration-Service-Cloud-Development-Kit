import * as ros from '@alicloud/ros-cdk-core';
import { RosDeployGroup } from './edas.generated';
export { RosDeployGroup as DeployGroupProperty };
/**
 * Properties for defining a `ALIYUN::EDAS::DeployGroup`
 */
export interface DeployGroupProps {
    /**
     * @Property appId: Application ID
     */
    readonly appId: string;
    /**
     * @Property groupName: Group name, maximum length of 64.
     */
    readonly groupName: string;
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
     * @Attribute AppId: Application ID
     */
    readonly attrAppId: any;
    /**
     * @Attribute GroupName: Deploy group name
     */
    readonly attrGroupName: any;
    /**
     * @Attribute Id: Deploy group ID
     */
    readonly attrId: any;
    /**
     * Create a new `ALIYUN::EDAS::DeployGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DeployGroupProps, enableResourcePropertyConstraint?: boolean);
}
