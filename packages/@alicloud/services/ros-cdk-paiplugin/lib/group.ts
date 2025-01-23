import * as ros from '@alicloud/ros-cdk-core';
import { RosGroup } from './paiplugin.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosGroup as GroupProperty };

/**
 * Properties for defining a `Group`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-group
 */
export interface GroupProps {

    /**
     * Property name: The name of the user group.
     */
    readonly name: string | ros.IResolvable;

    /**
     * Property source: Crowd source. Valid values:
     * 0: Enter phone numbers.
     * 1: Single-column CSV File (Phone Numbers).
     * 2: Multi-column CSV File.
     * 3: MaxCompute Table.
     * 4: Algorithm.
     */
    readonly source: number | ros.IResolvable;

    /**
     * Property algorithm: Association algorithm. This must be specified when Source is 4(Algorithm).
     */
    readonly algorithm?: string | ros.IResolvable;

    /**
     * Property column: Mobile phone number column name. The Source is 2(Multi-column CSV File) or 3(MaxCompute Table) needs to be specified when it contains mobile phone numbers.
     */
    readonly column?: string | ros.IResolvable;

    /**
     * Property filter: Filter condition. This condition can be specified when Source is 3(MaxCompute Table).
     */
    readonly filter?: string | ros.IResolvable;

    /**
     * Property inferenceJobId: Prediction task ID.This condition can be specified when Source is 4(Algorithm).
     */
    readonly inferenceJobId?: string | ros.IResolvable;

    /**
     * Property phoneNumber: Whether to include mobile phone numbers. People with mobile phone numbers can be used for reach plans.
     */
    readonly phoneNumber?: string | ros.IResolvable;

    /**
     * Property project: MaxCompute (ODPS) project name. This parameter must be specified when Source is 3(MaxCompute Table).
     */
    readonly project?: string | ros.IResolvable;

    /**
     * Property remark: The notes of the user group.
     */
    readonly remark?: string | ros.IResolvable;

    /**
     * Property table: MaxCompute (ODPS) table name. This parameter must be specified when Source is 3(MaxCompute Table).
     */
    readonly table?: string | ros.IResolvable;

    /**
     * Property text: The text of the phone number. This must be specified when Source is 0(Enter phone numbers).
     */
    readonly text?: string | ros.IResolvable;

    /**
     * Property uri: File address. It needs to be specified when Source is 1(Single-column CSV File) or 2(Multi-column CSV File).
     */
    readonly uri?: string | ros.IResolvable;
}

/**
 * Represents a `Group`.
 */
export interface IGroup extends ros.IResource {
    readonly props: GroupProps;

    /**
     * Attribute Amount: The number of the user group.
     */
    readonly attrAmount: ros.IResolvable | string;

    /**
     * Attribute CreatedTime: The creation time of the user group.
     */
    readonly attrCreatedTime: ros.IResolvable | string;

    /**
     * Attribute Id: The ID of the user group.
     */
    readonly attrId: ros.IResolvable | string;

    /**
     * Attribute Name: The name of the user group.
     */
    readonly attrName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::PAIPlugin::Group`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-group
 */
export class Group extends ros.Resource implements IGroup {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: GroupProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Amount: The number of the user group.
     */
    public readonly attrAmount: ros.IResolvable | string;

    /**
     * Attribute CreatedTime: The creation time of the user group.
     */
    public readonly attrCreatedTime: ros.IResolvable | string;

    /**
     * Attribute Id: The ID of the user group.
     */
    public readonly attrId: ros.IResolvable | string;

    /**
     * Attribute Name: The name of the user group.
     */
    public readonly attrName: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: GroupProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosGroup = new RosGroup(this, id,  {
            project: props.project,
            table: props.table,
            inferenceJobId: props.inferenceJobId,
            filter: props.filter,
            column: props.column,
            phoneNumber: props.phoneNumber,
            text: props.text,
            algorithm: props.algorithm,
            uri: props.uri,
            source: props.source,
            remark: props.remark,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosGroup;
        this.attrAmount = rosGroup.attrAmount;
        this.attrCreatedTime = rosGroup.attrCreatedTime;
        this.attrId = rosGroup.attrId;
        this.attrName = rosGroup.attrName;
    }
}
