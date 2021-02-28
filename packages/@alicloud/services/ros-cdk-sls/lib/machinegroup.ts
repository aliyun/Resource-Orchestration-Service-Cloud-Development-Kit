import * as ros from '@alicloud/ros-cdk-core';
import { RosMachineGroup } from './sls.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosMachineGroup as MachineGroupProperty };

/**
 * Properties for defining a `ALIYUN::SLS::MachineGroup`
 */
export interface MachineGroupProps {

    /**
     * Property groupAttribute: Group attribute, default is null. The object value is groupToic and externalName
     */
    readonly groupAttribute?: string;

    /**
     * Property groupName: Display name of the group name, the Project only. [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly groupName?: string;

    /**
     * Property groupType: MachineGroup type, the value is empty or Armory
     */
    readonly groupType?: string;

    /**
     * Property machineIdentifyType: Machine indentify type, the value is 'ip' or 'userdefined'
     */
    readonly machineIdentifyType?: string;

    /**
     * Property machineList: The machine tag, the value is ip or userdefined-id.
     */
    readonly machineList?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * Property projectName: MachineGroup created in project.
     */
    readonly projectName?: string;
}

/**
 * A ROS resource type:  `ALIYUN::SLS::MachineGroup`
 */
export class MachineGroup extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute GroupName: GroupName of SLS.
     */
    public readonly attrGroupName: any;

    /**
     * Attribute ProjectName: ProjectName of SLS.
     */
    public readonly attrProjectName: any;

    /**
     * Create a new `ALIYUN::SLS::MachineGroup`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MachineGroupProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosMachineGroup = new RosMachineGroup(this, id,  {
            machineList: props.machineList,
            groupName: props.groupName,
            groupType: props.groupType,
            projectName: props.projectName,
            machineIdentifyType: props.machineIdentifyType,
            groupAttribute: props.groupAttribute,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosMachineGroup;
        this.attrGroupName = rosMachineGroup.attrGroupName;
        this.attrProjectName = rosMachineGroup.attrProjectName;
    }
}
