import * as ros from '@alicloud/ros-cdk-core';
import { RosAutoEnableService } from './ros.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAutoEnableService as AutoEnableServiceProperty };

/**
 * Properties for defining a `AutoEnableService`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-autoenableservice
 */
export interface AutoEnableServiceProps {

    /**
     * Property serviceName: Which service to enable. Valid values:
     * AHAS: Application High Availability Service
     * ARMS: Realtime Monitoring Service
     * ApiGateway: API Gateway
     * BatchCompute: Batch Compute
     * BrainIndustrial: Brain Industrial
     * CloudStorageGateway: Cloud Storage Gateway
     * CMS: Cloud Monitor Service
     * CR: Container Registry
     * CS: Container Service
     * DataHub: Data Hub
     * DataWorks: DataWorks
     * DCDN: Dynamic Route for CDN
     * EDAS: Enterprise Distributed Application Service
     * EMAS: Enterprise Mobile Application Studio
     * FC: Function Compute
     * FNF: Serverless Workflow
     * MaxCompute: MaxCompute
     * NAS: Network Attached Storage
     * MNS: Message Service (MNS)
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
     * SAE: Serverless App Engine
     * SLS: Log Service
     * TrafficMirror: VPC Traffic Mirroring
     * VS: Video Surveillance
     * Xtrace: Tracing Anlaysis
     * CDN: Content Delivery Network
     * CDT: Cloud Data Transfer
     * CDTCb: Cloud Data Transfer for Cross Border
     * TransitRouter: Cen Transit Router
     * PAI: Platform of Artificial Intelligence
     * Config: Cloud Config
     * TrustedService\/ROS: Trusted Service for ROS
     * CloudSSO: Cloud SSO
     * ControlPolicy: Control Policy
     */
    readonly serviceName: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ROS::AutoEnableService`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAutoEnableService`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-autoenableservice
 */
export class AutoEnableService extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AutoEnableServiceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AutoEnableServiceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosAutoEnableService = new RosAutoEnableService(this, id,  {
            serviceName: props.serviceName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAutoEnableService;
    }
}
