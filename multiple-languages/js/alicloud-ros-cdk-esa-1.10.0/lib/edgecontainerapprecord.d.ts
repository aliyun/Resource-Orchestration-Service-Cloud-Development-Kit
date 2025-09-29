import * as ros from '@alicloud/ros-cdk-core';
import { RosEdgeContainerAppRecord } from './esa.generated';
export { RosEdgeContainerAppRecord as EdgeContainerAppRecordProperty };
/**
 * Properties for defining a `EdgeContainerAppRecord`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-edgecontainerapprecord
 */
export interface EdgeContainerAppRecordProps {
    /**
     * Property appId: The application ID.
     */
    readonly appId: string | ros.IResolvable;
    /**
     * Property recordName: The associated domain name.
     */
    readonly recordName: string | ros.IResolvable;
    /**
     * Property siteId: The website ID.
     */
    readonly siteId: number | ros.IResolvable;
}
/**
 * Represents a `EdgeContainerAppRecord`.
 */
export interface IEdgeContainerAppRecord extends ros.IResource {
    readonly props: EdgeContainerAppRecordProps;
    /**
     * Attribute AppId: The application ID.
     */
    readonly attrAppId: ros.IResolvable | string;
    /**
     * Attribute Cname: The CNAME of the associated domain name.
     */
    readonly attrCname: ros.IResolvable | string;
    /**
     * Attribute ConfigId: The configuration ID of the associated domain name.
     */
    readonly attrConfigId: ros.IResolvable | string;
    /**
     * Attribute CreateTime: The time when the domain name was added. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute RecordId: The record ID of the associated domain name.
     */
    readonly attrRecordId: ros.IResolvable | string;
    /**
     * Attribute RecordName: The associated domain name.
     */
    readonly attrRecordName: ros.IResolvable | string;
    /**
     * Attribute SchemdId: The scheduling domain ID of the associated domain name.
     */
    readonly attrSchemdId: ros.IResolvable | string;
    /**
     * Attribute SiteId: The website ID.
     */
    readonly attrSiteId: ros.IResolvable | string;
    /**
     * Attribute UpdateTime: The time when the scheduling domain ID or CNAME was last modified. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
     */
    readonly attrUpdateTime: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ESA::EdgeContainerAppRecord`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosEdgeContainerAppRecord`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-edgecontainerapprecord
 */
export declare class EdgeContainerAppRecord extends ros.Resource implements IEdgeContainerAppRecord {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: EdgeContainerAppRecordProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AppId: The application ID.
     */
    readonly attrAppId: ros.IResolvable | string;
    /**
     * Attribute Cname: The CNAME of the associated domain name.
     */
    readonly attrCname: ros.IResolvable | string;
    /**
     * Attribute ConfigId: The configuration ID of the associated domain name.
     */
    readonly attrConfigId: ros.IResolvable | string;
    /**
     * Attribute CreateTime: The time when the domain name was added. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute RecordId: The record ID of the associated domain name.
     */
    readonly attrRecordId: ros.IResolvable | string;
    /**
     * Attribute RecordName: The associated domain name.
     */
    readonly attrRecordName: ros.IResolvable | string;
    /**
     * Attribute SchemdId: The scheduling domain ID of the associated domain name.
     */
    readonly attrSchemdId: ros.IResolvable | string;
    /**
     * Attribute SiteId: The website ID.
     */
    readonly attrSiteId: ros.IResolvable | string;
    /**
     * Attribute UpdateTime: The time when the scheduling domain ID or CNAME was last modified. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
     */
    readonly attrUpdateTime: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: EdgeContainerAppRecordProps, enableResourcePropertyConstraint?: boolean);
}
