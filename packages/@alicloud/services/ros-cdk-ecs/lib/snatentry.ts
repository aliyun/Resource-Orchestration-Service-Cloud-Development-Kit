import * as ros from '@alicloud/ros-cdk-core';
import { RosSNatEntry } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSNatEntry as SNatEntryProperty };

/**
 * Properties for defining a `SNatEntry`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-snatentry
 */
export interface SNatEntryProps {

    /**
     * Property sNatIp: Source IP, must belongs to bandwidth package internet IP
     */
    readonly sNatIp: string | ros.IResolvable;

    /**
     * Property sNatTableId: Create SNAT entry in specified SNAT table.
     */
    readonly sNatTableId: string | ros.IResolvable;

    /**
     * Property snatEntryName: he name of the SNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:\/\/ or https:\/\/.
     */
    readonly snatEntryName?: string | ros.IResolvable;

    /**
     * Property sourceCidr: Specifies the network segment of the switch. For example, 10.0.0.1\/24. This parameter and the SourceVSwtichId parameter are mutually exclusive and cannot appear at the same time.
     */
    readonly sourceCidr?: string | ros.IResolvable;

    /**
     * Property sourceVSwitchId: Allow which switch can access internet.
     */
    readonly sourceVSwitchId?: string | ros.IResolvable;
}

/**
 * Represents a `SNatEntry`.
 */
export interface ISNatEntry extends ros.IResource {
    readonly props: SNatEntryProps;

    /**
     * Attribute SNatEntryId: The id of created SNAT entry.
     */
    readonly attrSNatEntryId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::SNatEntry`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSNatEntry`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-snatentry
 */
export class SNatEntry extends ros.Resource implements ISNatEntry {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: SNatEntryProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute SNatEntryId: The id of created SNAT entry.
     */
    public readonly attrSNatEntryId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SNatEntryProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosSNatEntry = new RosSNatEntry(this, id,  {
            sourceVSwitchId: props.sourceVSwitchId,
            snatEntryName: props.snatEntryName,
            sourceCidr: props.sourceCidr,
            sNatTableId: props.sNatTableId,
            sNatIp: props.sNatIp,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSNatEntry;
        this.attrSNatEntryId = rosSNatEntry.attrSNatEntryId;
    }
}
