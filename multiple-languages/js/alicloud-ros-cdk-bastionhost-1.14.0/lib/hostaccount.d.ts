import * as ros from '@alicloud/ros-cdk-core';
import { RosHostAccount } from './bastionhost.generated';
export { RosHostAccount as HostAccountProperty };
/**
 * Properties for defining a `HostAccount`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-hostaccount
 */
export interface HostAccountProps {
    /**
     * Property hostAccountName: The name of the host account.
     */
    readonly hostAccountName: string | ros.IResolvable;
    /**
     * Property hostId: The ID of the host.
     */
    readonly hostId: string | ros.IResolvable;
    /**
     * Property instanceId: The ID of the bastion host instance.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * Property protocolName: The protocol name of the host account. Valid values: SSH, RDP.
     */
    readonly protocolName: string | ros.IResolvable;
    /**
     * Property hostShareKeyId: The ID of the host share key. This parameter is required when the protocol is SSH.
     */
    readonly hostShareKeyId?: string | ros.IResolvable;
    /**
     * Property passPhrase: The passphrase of the host account. This parameter is required when the protocol is SSH and the private key is encrypted.
     */
    readonly passPhrase?: string | ros.IResolvable;
    /**
     * Property password: The password of the host account. This parameter is required when the protocol is SSH or RDP.
     */
    readonly password?: string | ros.IResolvable;
    /**
     * Property privateKey: The private key of the host account. This parameter is required when the protocol is SSH.
     */
    readonly privateKey?: string | ros.IResolvable;
    /**
     * Property privilegeType: The privilege type of the host account. Valid values: Normal, Administrator.
     */
    readonly privilegeType?: string | ros.IResolvable;
    /**
     * Property rotationMode: The rotation mode of the host account. Valid values: Manual, Automatic.
     */
    readonly rotationMode?: string | ros.IResolvable;
}
/**
 * Represents a `HostAccount`.
 */
export interface IHostAccount extends ros.IResource {
    readonly props: HostAccountProps;
    /**
     * Attribute HostAccountId: The ID of the host account.
     */
    readonly attrHostAccountId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::BastionHost::HostAccount`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosHostAccount`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-hostaccount
 */
export declare class HostAccount extends ros.Resource implements IHostAccount {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: HostAccountProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute HostAccountId: The ID of the host account.
     */
    readonly attrHostAccountId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: HostAccountProps, enableResourcePropertyConstraint?: boolean);
}
