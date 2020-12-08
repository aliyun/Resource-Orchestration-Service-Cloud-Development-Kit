import * as ros from '@alicloud/ros-cdk-core';
import { RosHandshake } from './resourcemanager.generated';
export { RosHandshake as HandshakeProperty };
/**
 * Properties for defining a `ALIYUN::ResourceManager::Handshake`
 */
export interface HandshakeProps {
    /**
     * @Property targetEntity: Invited account ID or login email
     */
    readonly targetEntity: string;
    /**
     * @Property targetType: Type of account being invited. Valid values: Account, Email
     */
    readonly targetType: string;
    /**
     * @Property note: Remarks
     */
    readonly note?: string;
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
     * @Attribute HandshakeId: This ID of Resource Manager handshake
     */
    readonly attrHandshakeId: any;
    /**
     * @Attribute MasterAccountId: Resource account master account ID
     */
    readonly attrMasterAccountId: any;
    /**
     * @Attribute MasterAccountName: The name of the main account of the resource directory
     */
    readonly attrMasterAccountName: any;
    /**
     * @Attribute Note: Remarks
     */
    readonly attrNote: any;
    /**
     * @Attribute ResourceDirectoryId: Resource directory ID
     */
    readonly attrResourceDirectoryId: any;
    /**
     * @Attribute TargetEntity: Invited account ID or login email
     */
    readonly attrTargetEntity: any;
    /**
     * @Attribute TargetType: Type of account being invited. Valid values: Account, Email
     */
    readonly attrTargetType: any;
    /**
     * Create a new `ALIYUN::ResourceManager::Handshake`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: HandshakeProps, enableResourcePropertyConstraint?: boolean);
}
