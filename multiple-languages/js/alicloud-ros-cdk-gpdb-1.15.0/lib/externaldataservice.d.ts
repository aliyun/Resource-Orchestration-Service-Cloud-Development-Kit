import * as ros from '@alicloud/ros-cdk-core';
import { RosExternalDataService } from './gpdb.generated';
export { RosExternalDataService as ExternalDataServiceProperty };
/**
 * Properties for defining a `ExternalDataService`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-externaldataservice
 */
export interface ExternalDataServiceProps {
    /**
     * Property dbInstanceId: Instance ID.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * Property serviceName: Service Name.
     */
    readonly serviceName: string | ros.IResolvable;
    /**
     * Property serviceSpec: Service Specifications.
     */
    readonly serviceSpec: number | ros.IResolvable;
    /**
     * Property serviceDescription: Service Description.
     */
    readonly serviceDescription?: string | ros.IResolvable;
}
/**
 * Represents a `ExternalDataService`.
 */
export interface IExternalDataService extends ros.IResource {
    readonly props: ExternalDataServiceProps;
    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute ModifyTime: Last modification time.
     */
    readonly attrModifyTime: ros.IResolvable | string;
    /**
     * Attribute ServiceDescription: Service Description.
     */
    readonly attrServiceDescription: ros.IResolvable | string;
    /**
     * Attribute ServiceId: Service ID.
     */
    readonly attrServiceId: ros.IResolvable | string;
    /**
     * Attribute ServiceName: Service Name.
     */
    readonly attrServiceName: ros.IResolvable | string;
    /**
     * Attribute ServiceSpec: Service Specifications.
     */
    readonly attrServiceSpec: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::GPDB::ExternalDataService`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosExternalDataService`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-externaldataservice
 */
export declare class ExternalDataService extends ros.Resource implements IExternalDataService {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ExternalDataServiceProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute ModifyTime: Last modification time.
     */
    readonly attrModifyTime: ros.IResolvable | string;
    /**
     * Attribute ServiceDescription: Service Description.
     */
    readonly attrServiceDescription: ros.IResolvable | string;
    /**
     * Attribute ServiceId: Service ID.
     */
    readonly attrServiceId: ros.IResolvable | string;
    /**
     * Attribute ServiceName: Service Name.
     */
    readonly attrServiceName: ros.IResolvable | string;
    /**
     * Attribute ServiceSpec: Service Specifications.
     */
    readonly attrServiceSpec: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ExternalDataServiceProps, enableResourcePropertyConstraint?: boolean);
}
