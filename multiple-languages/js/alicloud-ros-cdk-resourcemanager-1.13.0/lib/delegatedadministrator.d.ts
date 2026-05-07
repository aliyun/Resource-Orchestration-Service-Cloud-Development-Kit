import * as ros from '@alicloud/ros-cdk-core';
import { RosDelegatedAdministrator } from './resourcemanager.generated';
export { RosDelegatedAdministrator as DelegatedAdministratorProperty };
/**
 * Properties for defining a `DelegatedAdministrator`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-delegatedadministrator
 */
export interface DelegatedAdministratorProps {
    /**
     * Property accountId: The Alibaba Cloud account ID of the member in the resource directory.
     */
    readonly accountId: string | ros.IResolvable;
    /**
     * Property servicePrincipal: The identifier of the trusted service.
     */
    readonly servicePrincipal: string | ros.IResolvable;
}
/**
 * Represents a `DelegatedAdministrator`.
 */
export interface IDelegatedAdministrator extends ros.IResource {
    readonly props: DelegatedAdministratorProps;
    /**
     * Attribute AccountId: The Alibaba Cloud account ID of the member in the resource directory.
     */
    readonly attrAccountId: ros.IResolvable | string;
    /**
     * Attribute DelegationEnabledTime: Set as the timestamp of the delegated administrator account.
     */
    readonly attrDelegationEnabledTime: ros.IResolvable | string;
    /**
     * Attribute ServicePrincipal: The identifier of the trusted service.
     */
    readonly attrServicePrincipal: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ResourceManager::DelegatedAdministrator`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDelegatedAdministrator`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-delegatedadministrator
 */
export declare class DelegatedAdministrator extends ros.Resource implements IDelegatedAdministrator {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: DelegatedAdministratorProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AccountId: The Alibaba Cloud account ID of the member in the resource directory.
     */
    readonly attrAccountId: ros.IResolvable | string;
    /**
     * Attribute DelegationEnabledTime: Set as the timestamp of the delegated administrator account.
     */
    readonly attrDelegationEnabledTime: ros.IResolvable | string;
    /**
     * Attribute ServicePrincipal: The identifier of the trusted service.
     */
    readonly attrServicePrincipal: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DelegatedAdministratorProps, enableResourcePropertyConstraint?: boolean);
}
