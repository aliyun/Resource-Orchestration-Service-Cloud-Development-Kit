import * as ros from '@alicloud/ros-cdk-core';
import { RosHandshake } from './resourcemanager.generated';
export { RosHandshake as HandshakeProperty };
/**
 * Properties for defining a `Handshake`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-handshake
 */
export interface HandshakeProps {
    /**
     * Property targetEntity: Invited account ID or login email
     */
    readonly targetEntity: string | ros.IResolvable;
    /**
     * Property targetType: Type of account being invited. Valid values: Account, Email
     */
    readonly targetType: string | ros.IResolvable;
    /**
     * Property note: Remarks
     */
    readonly note?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ResourceManager::Handshake`, which is used to create an invitation.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosHandshake`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-handshake
 */
export declare class Handshake extends ros.Resource {
    /**
     * Attribute HandshakeId: This ID of Resource Manager handshake
     */
    readonly attrHandshakeId: ros.IResolvable;
    /**
     * Attribute MasterAccountId: Resource account master account ID
     */
    readonly attrMasterAccountId: ros.IResolvable;
    /**
     * Attribute MasterAccountName: The name of the main account of the resource directory
     */
    readonly attrMasterAccountName: ros.IResolvable;
    /**
     * Attribute Note: Remarks
     */
    readonly attrNote: ros.IResolvable;
    /**
     * Attribute ResourceDirectoryId: Resource directory ID
     */
    readonly attrResourceDirectoryId: ros.IResolvable;
    /**
     * Attribute TargetEntity: Invited account ID or login email
     */
    readonly attrTargetEntity: ros.IResolvable;
    /**
     * Attribute TargetType: Type of account being invited. Valid values: Account, Email
     */
    readonly attrTargetType: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: HandshakeProps, enableResourcePropertyConstraint?: boolean);
}
