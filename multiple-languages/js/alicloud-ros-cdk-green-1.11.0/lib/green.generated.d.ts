import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosInspectionConfigEnable`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-green-inspectionconfigenable
 */
export interface RosInspectionConfigEnableProps {
    /**
     * @Property configType: The type of the configuration to be enabled for inspection.
     */
    readonly configType: string | ros.IResolvable;
    /**
     * @Property serviceCode: The code of the service to be enabled for inspection.
     */
    readonly serviceCode: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::Green::InspectionConfigEnable`.
 * @Note This class does not contain additional functions, so it is recommended to use the `InspectionConfigEnable` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-green-inspectionconfigenable
 */
export declare class RosInspectionConfigEnable extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Green::InspectionConfigEnable";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property configType: The type of the configuration to be enabled for inspection.
     */
    configType: string | ros.IResolvable;
    /**
     * @Property serviceCode: The code of the service to be enabled for inspection.
     */
    serviceCode: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInspectionConfigEnableProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
