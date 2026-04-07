import * as ros from '@alicloud/ros-cdk-core';
import { RosApplication } from './polardb.generated';
export { RosApplication as ApplicationProperty };
/**
 * Properties for defining a `Application`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-application
 */
export interface ApplicationProps {
    /**
     * Property applicationType: The type of the application. This parameter is required.
     */
    readonly applicationType: string | ros.IResolvable;
    /**
     * Property architecture: The architecture of the application. This parameter is required.
     */
    readonly architecture: string | ros.IResolvable;
    /**
     * Property dbClusterId: The ID of the database cluster.
     */
    readonly dbClusterId: string | ros.IResolvable;
    /**
     * Property autoCreatePolarFs: Whether to auto create PolarFS.
     */
    readonly autoCreatePolarFs?: boolean | ros.IResolvable;
    /**
     * Property components: The list of components.
     */
    readonly components?: Array<RosApplication.ComponentsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property description: The description of the application.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property payType: The billing method of the cluster. Valid values:
     * Postpaid: pay-as-you-go
     * Prepaid: subscription
     */
    readonly payType?: string | ros.IResolvable;
    /**
     * Property period: The period of the application.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * Property polarFsInstanceId: The ID of the PolarFS instance.
     */
    readonly polarFsInstanceId?: string | ros.IResolvable;
    /**
     * Property securityGroupId: The ID of the security group.
     */
    readonly securityGroupId?: string | ros.IResolvable;
    /**
     * Property securityIpList: The security IP list of the component.
     */
    readonly securityIpList?: string | ros.IResolvable;
    /**
     * Property vpcId: The ID of the VPC.
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * Property vSwitchId: The ID of the VSwitch.
     */
    readonly vSwitchId?: string | ros.IResolvable;
    /**
     * Property zoneId: The ID of the zone.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * Represents a `Application`.
 */
export interface IApplication extends ros.IResource {
    readonly props: ApplicationProps;
    /**
     * Attribute ApplicationId: The ID of the application.
     */
    readonly attrApplicationId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::POLARDB::Application`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosApplication`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-application
 */
export declare class Application extends ros.Resource implements IApplication {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ApplicationProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ApplicationId: The ID of the application.
     */
    readonly attrApplicationId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ApplicationProps, enableResourcePropertyConstraint?: boolean);
}
