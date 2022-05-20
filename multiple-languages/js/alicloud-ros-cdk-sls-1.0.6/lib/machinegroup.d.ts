import * as ros from '@alicloud/ros-cdk-core';
import { RosMachineGroup } from './sls.generated';
export { RosMachineGroup as MachineGroupProperty };
/**
 * Properties for defining a `ALIYUN::SLS::MachineGroup`
 */
export interface MachineGroupProps {
    /**
     * Property groupAttribute: Group attribute, default is null. The object value is groupToic and externalName
     */
    readonly groupAttribute?: string | ros.IResolvable;
    /**
     * Property groupName: Display name of the group name, the Project only. [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly groupName?: string | ros.IResolvable;
    /**
     * Property groupType: MachineGroup type, the value is empty or Armory
     */
    readonly groupType?: string | ros.IResolvable;
    /**
     * Property machineIdentifyType: Machine indentify type, the value is 'ip' or 'userdefined'
     */
    readonly machineIdentifyType?: string | ros.IResolvable;
    /**
     * Property machineList: The machine tag, the value is ip or userdefined-id.
     */
    readonly machineList?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * Property projectName: MachineGroup created in project.
     */
    readonly projectName?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::SLS::MachineGroup`
 */
export declare class MachineGroup extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute GroupName: GroupName of SLS.
     */
    readonly attrGroupName: ros.IResolvable;
    /**
     * Attribute ProjectName: ProjectName of SLS.
     */
    readonly attrProjectName: ros.IResolvable;
    /**
     * Create a new `ALIYUN::SLS::MachineGroup`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: MachineGroupProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=machinegroup.d.ts.map