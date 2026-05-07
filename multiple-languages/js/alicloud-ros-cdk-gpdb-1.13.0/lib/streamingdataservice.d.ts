import * as ros from '@alicloud/ros-cdk-core';
import { RosStreamingDataService } from './gpdb.generated';
export { RosStreamingDataService as StreamingDataServiceProperty };
/**
 * Properties for defining a `StreamingDataService`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-streamingdataservice
 */
export interface StreamingDataServiceProps {
    /**
     * Property dbInstanceId: The ID of the associated instance.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * Property serviceName: Service Name.
     */
    readonly serviceName: string | ros.IResolvable;
    /**
     * Property serviceSpec: Resource Specifications.
     */
    readonly serviceSpec: number | ros.IResolvable;
    /**
     * Property serviceDescription: The description of the service.
     */
    readonly serviceDescription?: string | ros.IResolvable;
}
/**
 * Represents a `StreamingDataService`.
 */
export interface IStreamingDataService extends ros.IResource {
    readonly props: StreamingDataServiceProps;
    /**
     * Attribute CreateTime: Create time.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute ModifyTime: Modify time.
     */
    readonly attrModifyTime: ros.IResolvable | string;
    /**
     * Attribute ServiceDescription: The description of the service.
     */
    readonly attrServiceDescription: ros.IResolvable | string;
    /**
     * Attribute ServiceId: Service ID.
     */
    readonly attrServiceId: ros.IResolvable | string;
    /**
     * Attribute ServiceIp: Service VIP.
     */
    readonly attrServiceIp: ros.IResolvable | string;
    /**
     * Attribute ServiceManaged: Service used by Cloud products, ture is used.
     */
    readonly attrServiceManaged: ros.IResolvable | string;
    /**
     * Attribute ServiceName: Service Name.
     */
    readonly attrServiceName: ros.IResolvable | string;
    /**
     * Attribute ServiceOwnerId: Service id of Cloud products.
     */
    readonly attrServiceOwnerId: ros.IResolvable | string;
    /**
     * Attribute ServicePort: Service vPort.
     */
    readonly attrServicePort: ros.IResolvable | string;
    /**
     * Attribute ServiceSpec: Resource Specifications.
     */
    readonly attrServiceSpec: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::GPDB::StreamingDataService`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosStreamingDataService`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-streamingdataservice
 */
export declare class StreamingDataService extends ros.Resource implements IStreamingDataService {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: StreamingDataServiceProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CreateTime: Create time.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute ModifyTime: Modify time.
     */
    readonly attrModifyTime: ros.IResolvable | string;
    /**
     * Attribute ServiceDescription: The description of the service.
     */
    readonly attrServiceDescription: ros.IResolvable | string;
    /**
     * Attribute ServiceId: Service ID.
     */
    readonly attrServiceId: ros.IResolvable | string;
    /**
     * Attribute ServiceIp: Service VIP.
     */
    readonly attrServiceIp: ros.IResolvable | string;
    /**
     * Attribute ServiceManaged: Service used by Cloud products, ture is used.
     */
    readonly attrServiceManaged: ros.IResolvable | string;
    /**
     * Attribute ServiceName: Service Name.
     */
    readonly attrServiceName: ros.IResolvable | string;
    /**
     * Attribute ServiceOwnerId: Service id of Cloud products.
     */
    readonly attrServiceOwnerId: ros.IResolvable | string;
    /**
     * Attribute ServicePort: Service vPort.
     */
    readonly attrServicePort: ros.IResolvable | string;
    /**
     * Attribute ServiceSpec: Resource Specifications.
     */
    readonly attrServiceSpec: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: StreamingDataServiceProps, enableResourcePropertyConstraint?: boolean);
}
