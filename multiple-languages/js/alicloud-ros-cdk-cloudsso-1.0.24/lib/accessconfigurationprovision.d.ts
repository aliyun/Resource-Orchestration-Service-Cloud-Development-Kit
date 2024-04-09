import * as ros from '@alicloud/ros-cdk-core';
import { RosAccessConfigurationProvision } from './cloudsso.generated';
export { RosAccessConfigurationProvision as AccessConfigurationProvisionProperty };
/**
 * Properties for defining a `AccessConfigurationProvision`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-accessconfigurationprovision
 */
export interface AccessConfigurationProvisionProps {
    /**
     * Property accessConfigurationId: The ID of the access configuration.
     */
    readonly accessConfigurationId: string | ros.IResolvable;
    /**
     * Property directoryId: The ID of the directory.
     */
    readonly directoryId: string | ros.IResolvable;
    /**
     * Property targetId: The ID of the task object.
     */
    readonly targetId: string | ros.IResolvable;
    /**
     * Property targetType: The type of the task object. Set the value to RD-Account, which specifies the accounts in the resource directory.
     */
    readonly targetType: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CloudSSO::AccessConfigurationProvision`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccessConfigurationProvision`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-accessconfigurationprovision
 */
export declare class AccessConfigurationProvision extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AccessConfigurationProvisionProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccessConfigurationProvisionProps, enableResourcePropertyConstraint?: boolean);
}
