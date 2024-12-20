import * as ros from '@alicloud/ros-cdk-core';
import { RosEnvironmentFeature } from './arms.generated';
export { RosEnvironmentFeature as EnvironmentFeatureProperty };
/**
 * Properties for defining a `EnvironmentFeature`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-environmentfeature
 */
export interface EnvironmentFeatureProps {
    /**
     * Property environmentId: The id of the environment.
     */
    readonly environmentId: string | ros.IResolvable;
    /**
     * Property featureName: The name of the feature. Valid values:
     * app-agent-pilot
     * metric-agent
     */
    readonly featureName: string | ros.IResolvable;
    /**
     * Property featureVersion: The version of the feature.
     */
    readonly featureVersion: string | ros.IResolvable;
    /**
     * Property config: The metadata of the feature.
     */
    readonly config?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ARMS::EnvironmentFeature`, which is used to install a feature.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosEnvironmentFeature`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-environmentfeature
 */
export declare class EnvironmentFeature extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: EnvironmentFeatureProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute EnvironmentId: The environment ID.
     */
    readonly attrEnvironmentId: ros.IResolvable;
    /**
     * Attribute Feature: The installation information of the feature.
     */
    readonly attrFeature: ros.IResolvable;
    /**
     * Attribute FeatureName: The name of the feature.
     */
    readonly attrFeatureName: ros.IResolvable;
    /**
     * Attribute FeatureStatus: The status of the feature.
     */
    readonly attrFeatureStatus: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: EnvironmentFeatureProps, enableResourcePropertyConstraint?: boolean);
}
