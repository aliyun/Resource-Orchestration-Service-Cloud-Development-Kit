import * as ros from '@alicloud/ros-cdk-core';
import { RosDomainRecords } from './dns.generated';
export { RosDomainRecords as DomainRecordsProperty };
/**
 * Properties for defining a `DomainRecords`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dns-domainrecords
 */
export interface DomainRecordsProps {
    /**
     * Property domainName: The domain name for which you want to query DNS records.
     */
    readonly domainName: string | ros.IResolvable;
    /**
     * Property direction: The order in which the returned DNS records are sorted.
     */
    readonly direction?: string | ros.IResolvable;
    /**
     * Property groupId: The ID of the domain name group.
     */
    readonly groupId?: string | ros.IResolvable;
    /**
     * Property keyWord: The keyword for searches in "%KeyWord%" mode. The value is not case-sensitive.
     */
    readonly keyWord?: string | ros.IResolvable;
    /**
     * Property lang: The language type.
     */
    readonly lang?: string | ros.IResolvable;
    /**
     * Property line: The line based on which the system queries DNS records.
     */
    readonly line?: string | ros.IResolvable;
    /**
     * Property orderBy: The method that is used to sort the returned DNS records.
     */
    readonly orderBy?: string | ros.IResolvable;
    /**
     * Property rrKeyWord: The resource record (RR) keyword based on which the system queries DNS records.
     */
    readonly rrKeyWord?: string | ros.IResolvable;
    /**
     * Property searchMode: The search mode.
     */
    readonly searchMode?: string | ros.IResolvable;
    /**
     * Property status: The status of the DNS records to query.
     */
    readonly status?: string | ros.IResolvable;
    /**
     * Property type: The type of the DNS records to query.
     */
    readonly type?: string | ros.IResolvable;
    /**
     * Property typeKeyWord: The type keyword based on which the system queries DNS records.
     */
    readonly typeKeyWord?: string | ros.IResolvable;
    /**
     * Property valueKeyWord: The record value keyword based on which the system queries DNS records.
     */
    readonly valueKeyWord?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::DNS::DomainRecords`, which is used to query domain name system (DNS) records.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDomainRecords`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dns-domainrecords
 */
export declare class DomainRecords extends ros.Resource {
    /**
     * Attribute DomainRecordIds: The list of The DNS domain record ids.
     */
    readonly attrDomainRecordIds: ros.IResolvable;
    /**
     * Attribute DomainRecords: The information about DNS records.
     */
    readonly attrDomainRecords: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DomainRecordsProps, enableResourcePropertyConstraint?: boolean);
}
