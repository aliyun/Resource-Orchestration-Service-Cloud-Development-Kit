import * as ros from '@alicloud/ros-cdk-core';
import { RosHandshake } from './resourcemanager.generated';
// Generated from the AliCloud ROS Resource Specification
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
export class Handshake extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: HandshakeProps;
    protected enableResourcePropertyConstraint: boolean;

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
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: HandshakeProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

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
