import * as ros from '@alicloud/ros-cdk-core';
import { RosInspectionConfigEnable } from './green.generated';
export { RosInspectionConfigEnable as InspectionConfigEnableProperty };
/**
 * Properties for defining a `InspectionConfigEnable`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-green-inspectionconfigenable
 */
export interface InspectionConfigEnableProps {
    /**
     * Property configType: The type of the configuration to be enabled for inspection.
     */
    readonly configType: string | ros.IResolvable;
    /**
     * Property serviceCode: The code of the service to be enabled for inspection.
     */
    readonly serviceCode: string | ros.IResolvable;
}
/**
 * Represents a `InspectionConfigEnable`.
 */
export interface IInspectionConfigEnable extends ros.IResource {
    readonly props: InspectionConfigEnableProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::Green::InspectionConfigEnable`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInspectionConfigEnable`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-green-inspectionconfigenable
 */
export declare class InspectionConfigEnable extends ros.Resource implements IInspectionConfigEnable {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: InspectionConfigEnableProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InspectionConfigEnableProps, enableResourcePropertyConstraint?: boolean);
}
