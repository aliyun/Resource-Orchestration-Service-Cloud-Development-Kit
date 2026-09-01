import * as ros from '@alicloud/ros-cdk-core';
import { RosDedicatedHostAccount } from './cddc.generated';
export { RosDedicatedHostAccount as DedicatedHostAccountProperty };
/**
 * Properties for defining a `DedicatedHostAccount`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-dedicatedhostaccount
 */
export interface DedicatedHostAccountProps {
    /**
     * Property accountName: The name of the account.
     */
    readonly accountName: string | ros.IResolvable;
    /**
     * Property accountPassword: The password for the host account. The password must meet the following
     * requirements:
     * - The password must be 6 to 32 characters in length.
     * - It must contain uppercase letters, lowercase letters, digits, and special
     * characters.
     * - Supported special characters: `!@#$%^&*()_+-=`
     * > If your engine is SQL Server, the password cannot contain the account name
     * (case-insensitive).
     */
    readonly accountPassword: string | ros.IResolvable;
    /**
     * Property dedicatedHostId: The ID of the dedicated host.
     */
    readonly dedicatedHostId: string | ros.IResolvable;
    /**
     * Property accountType: The type of the account.
     */
    readonly accountType?: string | ros.IResolvable;
    /**
     * Property bastionInstanceId: The ID of the bastion instance.
     */
    readonly bastionInstanceId?: string | ros.IResolvable;
}
/**
 * Represents a `DedicatedHostAccount`.
 */
export interface IDedicatedHostAccount extends ros.IResource {
    readonly props: DedicatedHostAccountProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CDDC::DedicatedHostAccount`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDedicatedHostAccount`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cddc-dedicatedhostaccount
 */
export declare class DedicatedHostAccount extends ros.Resource implements IDedicatedHostAccount {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: DedicatedHostAccountProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DedicatedHostAccountProps, enableResourcePropertyConstraint?: boolean);
}
