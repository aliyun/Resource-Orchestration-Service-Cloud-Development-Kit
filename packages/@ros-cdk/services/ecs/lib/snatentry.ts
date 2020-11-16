import * as ros from '@ros-cdk/core';
import { RosSNatEntry } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSNatEntry as SNatEntryProperty };

/**
 * Properties for defining a `ALIYUN::ECS::SNatEntry`
 */
export interface SNatEntryProps {

    /**
     * @Property sNatIp: Source IP, must belongs to bandwidth package internet IP
     */
    readonly sNatIp: string;

    /**
     * @Property sNatTableId: Create SNAT entry in specified SNAT table.
     */
    readonly sNatTableId: string;

    /**
     * @Property sourceVSwitchId: Allow which switch can access internet.
     */
    readonly sourceVSwitchId: string;
}

/**
 * A ROS resource type:  `ALIYUN::ECS::SNatEntry`
 */
export class SNatEntry extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute SNatEntryId: The id of created SNAT entry.
     */
    public readonly attrSNatEntryId: any;

    /**
     * Create a new `ALIYUN::ECS::SNatEntry`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SNatEntryProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosSNatEntry = new RosSNatEntry(this, id,  {
            sourceVSwitchId: props.sourceVSwitchId,
            sNatTableId: props.sNatTableId,
            sNatIp: props.sNatIp,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSNatEntry;
        this.attrSNatEntryId = rosSNatEntry.attrSNatEntryId;
    }
}
