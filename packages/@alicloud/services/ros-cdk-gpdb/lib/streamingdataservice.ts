import * as ros from '@alicloud/ros-cdk-core';
import { RosStreamingDataService } from './gpdb.generated';
// Generated from the AliCloud ROS Resource Specification
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
export class StreamingDataService extends ros.Resource implements IStreamingDataService {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: StreamingDataServiceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreateTime: Create time.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute ModifyTime: Modify time.
     */
    public readonly attrModifyTime: ros.IResolvable | string;

    /**
     * Attribute ServiceDescription: The description of the service.
     */
    public readonly attrServiceDescription: ros.IResolvable | string;

    /**
     * Attribute ServiceId: Service ID.
     */
    public readonly attrServiceId: ros.IResolvable | string;

    /**
     * Attribute ServiceIp: Service VIP.
     */
    public readonly attrServiceIp: ros.IResolvable | string;

    /**
     * Attribute ServiceManaged: Service used by Cloud products, ture is used.
     */
    public readonly attrServiceManaged: ros.IResolvable | string;

    /**
     * Attribute ServiceName: Service Name.
     */
    public readonly attrServiceName: ros.IResolvable | string;

    /**
     * Attribute ServiceOwnerId: Service id of Cloud products.
     */
    public readonly attrServiceOwnerId: ros.IResolvable | string;

    /**
     * Attribute ServicePort: Service vPort.
     */
    public readonly attrServicePort: ros.IResolvable | string;

    /**
     * Attribute ServiceSpec: Resource Specifications.
     */
    public readonly attrServiceSpec: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: StreamingDataServiceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosStreamingDataService = new RosStreamingDataService(this, id,  {
            serviceName: props.serviceName,
            dbInstanceId: props.dbInstanceId,
            serviceDescription: props.serviceDescription,
            serviceSpec: props.serviceSpec,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosStreamingDataService;
        this.attrCreateTime = rosStreamingDataService.attrCreateTime;
        this.attrModifyTime = rosStreamingDataService.attrModifyTime;
        this.attrServiceDescription = rosStreamingDataService.attrServiceDescription;
        this.attrServiceId = rosStreamingDataService.attrServiceId;
        this.attrServiceIp = rosStreamingDataService.attrServiceIp;
        this.attrServiceManaged = rosStreamingDataService.attrServiceManaged;
        this.attrServiceName = rosStreamingDataService.attrServiceName;
        this.attrServiceOwnerId = rosStreamingDataService.attrServiceOwnerId;
        this.attrServicePort = rosStreamingDataService.attrServicePort;
        this.attrServiceSpec = rosStreamingDataService.attrServiceSpec;
    }
}
