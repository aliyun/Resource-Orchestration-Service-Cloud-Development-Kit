import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosAntiBruteForceRules`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-threatdetection-antibruteforcerules
 */
export interface RosAntiBruteForceRulesProps {
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ThreatDetection::AntiBruteForceRules`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AntiBruteForceRules` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-threatdetection-antibruteforcerules
 */
export declare class RosAntiBruteForceRules extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ThreatDetection::AntiBruteForceRules";
    /**
     * @Attribute AntiBruteForceRuleIds: The list of anti brute force rule IDs.
     */
    readonly attrAntiBruteForceRuleIds: ros.IResolvable;
    /**
     * @Attribute AntiBruteForceRules: The list of anti brute force rules.
     */
    readonly attrAntiBruteForceRules: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAntiBruteForceRulesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-threatdetection-instances
 */
export interface RosInstancesProps {
    /**
     * @Property instanceId: The first ID of the resource.
     */
    readonly instanceId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ThreatDetection::Instances`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instances` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-threatdetection-instances
 */
export declare class RosInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ThreatDetection::Instances";
    /**
     * @Attribute InstanceIds: The list of instance IDs.
     */
    readonly attrInstanceIds: ros.IResolvable;
    /**
     * @Attribute Instances: The list of instances.
     */
    readonly attrInstances: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: The first ID of the resource.
     */
    instanceId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstancesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
