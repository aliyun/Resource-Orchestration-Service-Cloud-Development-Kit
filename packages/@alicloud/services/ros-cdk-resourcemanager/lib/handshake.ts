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
export class Handshake extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute HandshakeId: This ID of Resource Manager handshake
     */
    public readonly attrHandshakeId: ros.IResolvable;

    /**
     * Attribute MasterAccountId: Resource account master account ID
     */
    public readonly attrMasterAccountId: ros.IResolvable;

    /**
     * Attribute MasterAccountName: The name of the main account of the resource directory
     */
    public readonly attrMasterAccountName: ros.IResolvable;

    /**
     * Attribute Note: Remarks
     */
    public readonly attrNote: ros.IResolvable;

    /**
     * Attribute ResourceDirectoryId: Resource directory ID
     */
    public readonly attrResourceDirectoryId: ros.IResolvable;

    /**
     * Attribute TargetEntity: Invited account ID or login email
     */
    public readonly attrTargetEntity: ros.IResolvable;

    /**
     * Attribute TargetType: Type of account being invited. Valid values: Account, Email
     */
    public readonly attrTargetType: ros.IResolvable;

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
