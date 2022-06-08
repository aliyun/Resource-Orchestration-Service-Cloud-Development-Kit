import * as ros from '@alicloud/ros-cdk-core';
import { RosHandshake } from './resourcemanager.generated';
export { RosHandshake as HandshakeProperty };
/**
 * Properties for defining a `ALIYUN::ResourceManager::Handshake`
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
 * A ROS resource type:  `ALIYUN::ResourceManager::Handshake`
 */
export declare class Handshake extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
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
     * Create a new `ALIYUN::ResourceManager::Handshake`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: HandshakeProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=handshake.d.ts.map