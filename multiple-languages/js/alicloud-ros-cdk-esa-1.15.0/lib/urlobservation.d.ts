import * as ros from '@alicloud/ros-cdk-core';
import { RosUrlObservation } from './esa.generated';
export { RosUrlObservation as UrlObservationProperty };
/**
 * Properties for defining a `UrlObservation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-urlobservation
 */
export interface UrlObservationProps {
    /**
     * Property sdkType: SDK integration mode. Value:
     * - **automatic**: automatic integration.
     * - **manual**: manual integration.
     */
    readonly sdkType: string | ros.IResolvable;
    /**
     * Property siteId: The site ID.
     */
    readonly siteId: number | ros.IResolvable;
    /**
     * Property url: The URL of the page to monitor.
     */
    readonly url: string | ros.IResolvable;
}
/**
 * Represents a `UrlObservation`.
 */
export interface IUrlObservation extends ros.IResource {
    readonly props: UrlObservationProps;
    /**
     * Attribute ConfigId: Config Id.
     */
    readonly attrConfigId: ros.IResolvable | string;
    /**
     * Attribute SdkType: SDK integration mode.
     */
    readonly attrSdkType: ros.IResolvable | string;
    /**
     * Attribute Url: The URL of the page to monitor.
     */
    readonly attrUrl: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ESA::UrlObservation`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosUrlObservation`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-urlobservation
 */
export declare class UrlObservation extends ros.Resource implements IUrlObservation {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: UrlObservationProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ConfigId: Config Id.
     */
    readonly attrConfigId: ros.IResolvable | string;
    /**
     * Attribute SdkType: SDK integration mode.
     */
    readonly attrSdkType: ros.IResolvable | string;
    /**
     * Attribute Url: The URL of the page to monitor.
     */
    readonly attrUrl: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: UrlObservationProps, enableResourcePropertyConstraint?: boolean);
}
