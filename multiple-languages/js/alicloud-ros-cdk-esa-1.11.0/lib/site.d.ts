import * as ros from '@alicloud/ros-cdk-core';
import { RosSite } from './esa.generated';
export { RosSite as SiteProperty };
/**
 * Properties for defining a `Site`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-site
 */
export interface SiteProps {
    /**
     * Property instanceId: The ID of the associated package instance.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * Property siteName: The name of the Site.
     */
    readonly siteName: string | ros.IResolvable;
    /**
     * Property accessType: The Access Type of the Site.
     */
    readonly accessType?: string | ros.IResolvable;
    /**
     * Property coverage: Acceleration area.
     */
    readonly coverage?: string | ros.IResolvable;
    /**
     * Property paymentType: Payment type.
     */
    readonly paymentType?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property tags: Tags of the site.
     */
    readonly tags?: RosSite.TagsProperty[];
}
/**
 * Represents a `Site`.
 */
export interface ISite extends ros.IResource {
    readonly props: SiteProps;
    /**
     * Attribute AccessType: Site Access Type.
     */
    readonly attrAccessType: ros.IResolvable | string;
    /**
     * Attribute Coverage: Acceleration area.
     */
    readonly attrCoverage: ros.IResolvable | string;
    /**
     * Attribute CreateTime: Creation time.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute InstanceId: The ID of the associated package instance.
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Attribute ModifyTime: Modification time.
     */
    readonly attrModifyTime: ros.IResolvable | string;
    /**
     * Attribute NameServerList: Site Resolution Name Server List.
     */
    readonly attrNameServerList: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute SiteId: The ID of the Site.
     */
    readonly attrSiteId: ros.IResolvable | string;
    /**
     * Attribute SiteName: The name of the Site.
     */
    readonly attrSiteName: ros.IResolvable | string;
    /**
     * Attribute Tags: The tags of the Site.
     */
    readonly attrTags: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ESA::Site`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSite`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-site
 */
export declare class Site extends ros.Resource implements ISite {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: SiteProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AccessType: Site Access Type.
     */
    readonly attrAccessType: ros.IResolvable | string;
    /**
     * Attribute Coverage: Acceleration area.
     */
    readonly attrCoverage: ros.IResolvable | string;
    /**
     * Attribute CreateTime: Creation time.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute InstanceId: The ID of the associated package instance.
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Attribute ModifyTime: Modification time.
     */
    readonly attrModifyTime: ros.IResolvable | string;
    /**
     * Attribute NameServerList: Site Resolution Name Server List.
     */
    readonly attrNameServerList: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute SiteId: The ID of the Site.
     */
    readonly attrSiteId: ros.IResolvable | string;
    /**
     * Attribute SiteName: The name of the Site.
     */
    readonly attrSiteName: ros.IResolvable | string;
    /**
     * Attribute Tags: The tags of the Site.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SiteProps, enableResourcePropertyConstraint?: boolean);
}
