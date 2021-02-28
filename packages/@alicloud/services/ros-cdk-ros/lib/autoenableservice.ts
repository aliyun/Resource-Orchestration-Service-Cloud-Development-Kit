import * as ros from '@alicloud/ros-cdk-core';
import { RosAutoEnableService } from './ros.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAutoEnableService as AutoEnableServiceProperty };

/**
 * Properties for defining a `ALIYUN::ROS::AutoEnableService`
 */
export interface AutoEnableServiceProps {

    /**
     * Property serviceName: Which service to enable. Valid values:
     * AHAS: Application High Availability Service
     * ARMS: Realtime Monitoring Service
     * ApiGateway: API Gateway
     * BatchCompute: Batch Compute
     * BrainIndustrial: Brain Industrial
     * CMS: Cloud Monitor Service
     * CS: Container Service
     * DataHub: Data Hub
     * DCDN: Dynamic Route for CDN
     * EMAS: Enterprise Mobile Application Studio
     * FC: Function Compute
     * FNF: Serverless Workflow
     * NAS: Network Attached Storage
     * HBR: Hybrid Backup Recovery
     * IMM: Intelligent Media Management
     * IOT: IoT Platform
     * KMS: Key Management Service
     * NLP: Natural Language Processing
     * OSS: Object Storage Service
     * OTS: Table Store
     * PrivateLink: Private Link
     * PrivateZone: Private Zone
     * RocketMQ: RocketMQ
     * SLS: Log Service
     * Xtrace: Tracing Anlaysis
     *
     */
    readonly serviceName: string;
}

/**
 * A ROS resource type:  `ALIYUN::ROS::AutoEnableService`
 */
export class AutoEnableService extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Create a new `ALIYUN::ROS::AutoEnableService`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AutoEnableServiceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosAutoEnableService = new RosAutoEnableService(this, id,  {
            serviceName: props.serviceName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAutoEnableService;
    }
}
