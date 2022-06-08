import * as ros from '@alicloud/ros-cdk-core';
import { RosSiteMonitor } from './cms.generated';
export { RosSiteMonitor as SiteMonitorProperty };
/**
 * Properties for defining a `ALIYUN::CMS::SiteMonitor`
 */
export interface SiteMonitorProps {
    /**
     * Property address: The URL or IP address monitored by the monitoring task.
     */
    readonly address: string | ros.IResolvable;
    /**
     * Property taskName: The name of the site monitoring task. The name must be 4 to 100 characters in length.
     * It can contain letters, digits, and underscores (_).
     */
    readonly taskName: string | ros.IResolvable;
    /**
     * Property taskType: The protocol used by the site monitoring task. Valid values: HTTP, HTTPS, PING, TCP,
     * UDP, DNS, SMTP, POP3, and FTP.
     */
    readonly taskType: string | ros.IResolvable;
    /**
     * Property alertIds:
     */
    readonly alertIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property interval: The interval at which detection requests are sent. Valid values: 1, 5, and 15. Unit:
     * minutes. Default value: 1.
     */
    readonly interval?: number | ros.IResolvable;
    /**
     * Property ispCities: The information about detection points, which is specified in a JSON array. Example:
     * [{"city":"546","isp":"465"},{"city":"572","isp":"465"},{"city":"738","isp":"465"}]. The three city codes represent Beijing, Hangzhou, and Qingdao.
     * Note You can call the DescribeSiteMonitorISPCityList API operation to query the detection
     * points that can be used to create site monitoring tasks. For more information, see
     * DescribeSiteMonitorISPCityList . If this parameter is not specified, the system randomly selects three detection
     * points for site monitoring.
     */
    readonly ispCities?: Array<RosSiteMonitor.IspCitiesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property optionsJson: The extended options of the protocol that is used by the site monitoring task. The
     * options vary based on the protocol.
     */
    readonly optionsJson?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::CMS::SiteMonitor`
 */
export declare class SiteMonitor extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute TaskId: The ID of the site monitoring task.
     */
    readonly attrTaskId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::CMS::SiteMonitor`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SiteMonitorProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=sitemonitor.d.ts.map