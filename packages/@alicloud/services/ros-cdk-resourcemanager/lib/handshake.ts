import * as ros from '@alicloud/ros-cdk-core';
import { RosHandshake } from './resourcemanager.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosHandshake as HandshakeProperty };

/**
 * Properties for defining a `ALIYUN::ResourceManager::Handshake`
 */
export interface HandshakeProps {

    /**
     * Property targetEntity: Invited account ID or login email
     */
    readonly targetEntity: string;

    /**
     * Property targetType: Type of account being invited. Valid values: Account, Email
     */
    readonly targetType: string;

    /**
     * Property note: Remarks
     */
    readonly note?: string;
}

/**
 * A ROS resource type:  `ALIYUN::ResourceManager::Handshake`
 */
export class Handshake extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute HandshakeId: This ID of Resource Manager handshake
     */
    public readonly attrHandshakeId: any;

    /**
     * Attribute MasterAccountId: Resource account master account ID
     */
    public readonly attrMasterAccountId: any;

    /**
     * Attribute MasterAccountName: The name of the main account of the resource directory
     */
    public readonly attrMasterAccountName: any;

    /**
     * Attribute Note: Remarks
     */
    public readonly attrNote: any;

    /**
     * Attribute ResourceDirectoryId: Resource directory ID
     */
    public readonly attrResourceDirectoryId: any;

    /**
     * Attribute TargetEntity: Invited account ID or login email
     */
    public readonly attrTargetEntity: any;

    /**
     * Attribute TargetType: Type of account being invited. Valid values: Account, Email
     */
    public readonly attrTargetType: any;

    /**
     * Create a new `ALIYUN::ResourceManager::Handshake`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: HandshakeProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosHandshake = new RosHandshake(this, id,  {
            note: props.note,
            targetType: props.targetType,
            targetEntity: props.targetEntity,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosHandshake;
        this.attrHandshakeId = rosHandshake.attrHandshakeId;
        this.attrMasterAccountId = rosHandshake.attrMasterAccountId;
        this.attrMasterAccountName = rosHandshake.attrMasterAccountName;
        this.attrNote = rosHandshake.attrNote;
        this.attrResourceDirectoryId = rosHandshake.attrResourceDirectoryId;
        this.attrTargetEntity = rosHandshake.attrTargetEntity;
        this.attrTargetType = rosHandshake.attrTargetType;
    }
}
