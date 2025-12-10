import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosListener`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gwlb-listener
 */
export interface RosListenerProps {
    /**
     * @Property loadBalancerId: The ID of the gateway load balancer instance.
     */
    readonly loadBalancerId: string | ros.IResolvable;
    /**
     * @Property serverGroupId: The ID of the server group.
     */
    readonly serverGroupId: string | ros.IResolvable;
    /**
     * @Property listenerDescription: The custom listener description.
     * The length is limited to 2 to 256 characters. It supports Chinese and English letters and can contain numbers, half-width commas (,), half-width periods (.), half-width semicolons (;), forward slashes (\/), at(@), underscores (_), and dashes (-).
     */
    readonly listenerDescription?: string | ros.IResolvable;
    /**
     * @Property tags: Tags of listener.
     */
    readonly tags?: RosListener.TagsProperty[];
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GWLB::Listener`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Listener` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gwlb-listener
 */
export declare class RosListener extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GWLB::Listener";
    /**
     * @Attribute ListenerDescription: The custom listener description.
     */
    readonly attrListenerDescription: ros.IResolvable;
    /**
     * @Attribute ListenerId: The ID of listener.
     */
    readonly attrListenerId: ros.IResolvable;
    /**
     * @Attribute LoadBalancerId: The ID of the gateway load balancer instance.
     */
    readonly attrLoadBalancerId: ros.IResolvable;
    /**
     * @Attribute ServerGroupId: The ID of the server group.
     */
    readonly attrServerGroupId: ros.IResolvable;
    /**
     * @Attribute Tags: The list of tags.
     */
    readonly attrTags: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property loadBalancerId: The ID of the gateway load balancer instance.
     */
    loadBalancerId: string | ros.IResolvable;
    /**
     * @Property serverGroupId: The ID of the server group.
     */
    serverGroupId: string | ros.IResolvable;
    /**
     * @Property listenerDescription: The custom listener description.
     * The length is limited to 2 to 256 characters. It supports Chinese and English letters and can contain numbers, half-width commas (,), half-width periods (.), half-width semicolons (;), forward slashes (\/), at(@), underscores (_), and dashes (-).
     */
    listenerDescription: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags of listener.
     */
    tags: RosListener.TagsProperty[] | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosListenerProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosListener {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosLoadBalancer`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gwlb-loadbalancer
 */
export interface RosLoadBalancerProps {
    /**
     * @Property vpcId: The ID of the VPC which the Gateway Load Balancer instance belongs.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * @Property zoneMappings: The List of zones and vSwitches mapped. You must add at least one zone and a maximum of 20 zones. If the current region supports two or more zones, we recommend that you add two or more zones.
     */
    readonly zoneMappings: Array<RosLoadBalancer.ZoneMappingsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property addressIpVersion: The protocol version. Value:
     * - Ipv4: Ipv4 type.
     */
    readonly addressIpVersion?: string | ros.IResolvable;
    /**
     * @Property loadBalancerName: The name of the Gateway Load Balancer instance.
     * It must be 2 to 128 English or Chinese characters in length. It must start with a letter or a Chinese character and can contain digits, half-width periods (.), underscores (_), and dashes (-).
     */
    readonly loadBalancerName?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property tags: Tags of load balancer.
     */
    readonly tags?: RosLoadBalancer.TagsProperty[];
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GWLB::LoadBalancer`.
 * @Note This class does not contain additional functions, so it is recommended to use the `LoadBalancer` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gwlb-loadbalancer
 */
export declare class RosLoadBalancer extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GWLB::LoadBalancer";
    /**
     * @Attribute AddressIpVersion: The protocol version.
     */
    readonly attrAddressIpVersion: ros.IResolvable;
    /**
     * @Attribute BusinessStatus: The business status of Gateway Load Balancing.
     */
    readonly attrBusinessStatus: ros.IResolvable;
    /**
     * @Attribute CreateTime: The resource creation time, in Greenwich Mean Time, in the format of **yyyy-MM-ddTHH:mm:ssZ**.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute LoadBalancerId: The ID of the Gateway Load Balancer instance.
     */
    readonly attrLoadBalancerId: ros.IResolvable;
    /**
     * @Attribute LoadBalancerName: The name of the Gateway Load Balancer instance.
     */
    readonly attrLoadBalancerName: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute Tags: The list of tags.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * @Attribute VpcId: The ID of the VPC which the Gateway Load Balancer instance belongs.
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * @Attribute ZoneMappings: The List of zones and vSwitches mapped. You must add at least one zone and a maximum of 20 zones. If the current region supports two or more zones, we recommend that you add two or more zones.
     */
    readonly attrZoneMappings: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property vpcId: The ID of the VPC which the Gateway Load Balancer instance belongs.
     */
    vpcId: string | ros.IResolvable;
    /**
     * @Property zoneMappings: The List of zones and vSwitches mapped. You must add at least one zone and a maximum of 20 zones. If the current region supports two or more zones, we recommend that you add two or more zones.
     */
    zoneMappings: Array<RosLoadBalancer.ZoneMappingsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property addressIpVersion: The protocol version. Value:
     * - Ipv4: Ipv4 type.
     */
    addressIpVersion: string | ros.IResolvable | undefined;
    /**
     * @Property loadBalancerName: The name of the Gateway Load Balancer instance.
     * It must be 2 to 128 English or Chinese characters in length. It must start with a letter or a Chinese character and can contain digits, half-width periods (.), underscores (_), and dashes (-).
     */
    loadBalancerName: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags of load balancer.
     */
    tags: RosLoadBalancer.TagsProperty[] | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosLoadBalancerProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosLoadBalancer {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
export declare namespace RosLoadBalancer {
    /**
     * @stability external
     */
    interface ZoneMappingsProperty {
        /**
         * @Property zoneId: The ID of the zone to which the Gateway Load Balancer instance belongs.
         */
        readonly zoneId: string | ros.IResolvable;
        /**
         * @Property vSwitchId: The ID of the vSwitch that corresponds to the zone. Each zone can use only one vSwitch and subnet.
         */
        readonly vSwitchId: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosServerGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gwlb-servergroup
 */
export interface RosServerGroupProps {
    /**
     * @Property vpcId: The VPC instance ID.
     * > If the value of ServerGroupType is Instance, only servers in the VPC can be added to the server group.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * @Property connectionDrainConfig: Connected graceful interrupt configuration.
     */
    readonly connectionDrainConfig?: RosServerGroup.ConnectionDrainConfigProperty | ros.IResolvable;
    /**
     * @Property healthCheckConfig: Health check configurations.
     */
    readonly healthCheckConfig?: RosServerGroup.HealthCheckConfigProperty | ros.IResolvable;
    /**
     * @Property protocol: Backend Protocol. Value:
     * **GENEVE (default)**.
     */
    readonly protocol?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property scheduler: Scheduling algorithm. Value:
     * - **5TCH (default)**: quintuple hash, which is based on the consistent hash of the quintuple (source IP, Destination IP, source port, destination port, and protocol). The same flow is scheduled to the same backend server.
     * - **3TCH**: a three-tuple hash, which is based on the consistent hash of three tuples (source IP address, destination IP address, and protocol). The same flow is dispatched to the same backend server.
     * - **2TCH**: Binary Group hash, which is based on the consistent hash of the binary group (source IP and destination IP). The same flow is scheduled to the same backend server.
     */
    readonly scheduler?: string | ros.IResolvable;
    /**
     * @Property serverGroupName: The server group name.
     * It must be 2 to 128 characters in length, start with an uppercase letter or a Chinese character, and can contain digits, half-width periods (.), underscores (_), and dashes (-).
     */
    readonly serverGroupName?: string | ros.IResolvable;
    /**
     * @Property serverGroupType: The server group type. Value:
     * - **Instance (default)**: The instance type. You can add Ecs, Eni, and Eci instances to the server group.
     * - **Ip**: The Ip address type. You can directly add backend servers of the Ip address type to the server group.
     */
    readonly serverGroupType?: string | ros.IResolvable;
    /**
     * @Property servers: List of servers.
     */
    readonly servers?: Array<RosServerGroup.ServersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property tags: Tags of server group.
     */
    readonly tags?: RosServerGroup.TagsProperty[];
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GWLB::ServerGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ServerGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gwlb-servergroup
 */
export declare class RosServerGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GWLB::ServerGroup";
    /**
     * @Attribute ConnectionDrainConfig: Connected graceful interrupt configuration.
     */
    readonly attrConnectionDrainConfig: ros.IResolvable;
    /**
     * @Attribute CreateTime: The creation time of the server group.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute HealthCheckConfig: Health check configurations.
     */
    readonly attrHealthCheckConfig: ros.IResolvable;
    /**
     * @Attribute Protocol: Backend Protocol.
     */
    readonly attrProtocol: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute Scheduler: Scheduling algorithm.
     */
    readonly attrScheduler: ros.IResolvable;
    /**
     * @Attribute ServerGroupId: The server group ID.
     */
    readonly attrServerGroupId: ros.IResolvable;
    /**
     * @Attribute ServerGroupName: The server group name.
     */
    readonly attrServerGroupName: ros.IResolvable;
    /**
     * @Attribute ServerGroupType: The server group type.
     */
    readonly attrServerGroupType: ros.IResolvable;
    /**
     * @Attribute Servers: List of servers.
     */
    readonly attrServers: ros.IResolvable;
    /**
     * @Attribute Tags: List of resource tags.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * @Attribute VpcId: The VPC instance ID.
     */
    readonly attrVpcId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property vpcId: The VPC instance ID.
     * > If the value of ServerGroupType is Instance, only servers in the VPC can be added to the server group.
     */
    vpcId: string | ros.IResolvable;
    /**
     * @Property connectionDrainConfig: Connected graceful interrupt configuration.
     */
    connectionDrainConfig: RosServerGroup.ConnectionDrainConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property healthCheckConfig: Health check configurations.
     */
    healthCheckConfig: RosServerGroup.HealthCheckConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property protocol: Backend Protocol. Value:
     * **GENEVE (default)**.
     */
    protocol: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property scheduler: Scheduling algorithm. Value:
     * - **5TCH (default)**: quintuple hash, which is based on the consistent hash of the quintuple (source IP, Destination IP, source port, destination port, and protocol). The same flow is scheduled to the same backend server.
     * - **3TCH**: a three-tuple hash, which is based on the consistent hash of three tuples (source IP address, destination IP address, and protocol). The same flow is dispatched to the same backend server.
     * - **2TCH**: Binary Group hash, which is based on the consistent hash of the binary group (source IP and destination IP). The same flow is scheduled to the same backend server.
     */
    scheduler: string | ros.IResolvable | undefined;
    /**
     * @Property serverGroupName: The server group name.
     * It must be 2 to 128 characters in length, start with an uppercase letter or a Chinese character, and can contain digits, half-width periods (.), underscores (_), and dashes (-).
     */
    serverGroupName: string | ros.IResolvable | undefined;
    /**
     * @Property serverGroupType: The server group type. Value:
     * - **Instance (default)**: The instance type. You can add Ecs, Eni, and Eci instances to the server group.
     * - **Ip**: The Ip address type. You can directly add backend servers of the Ip address type to the server group.
     */
    serverGroupType: string | ros.IResolvable | undefined;
    /**
     * @Property servers: List of servers.
     */
    servers: Array<RosServerGroup.ServersProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags of server group.
     */
    tags: RosServerGroup.TagsProperty[] | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosServerGroupProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosServerGroup {
    /**
     * @stability external
     */
    interface ConnectionDrainConfigProperty {
        /**
         * @Property connectionDrainEnabled: Whether to open the connection graceful interrupt. Value:
     * - **true**: enabled.
     * - **false**: Closed.
         */
        readonly connectionDrainEnabled?: boolean | ros.IResolvable;
        /**
         * @Property connectionDrainTimeout: Connection Grace interrupt timeout.
     * Unit: seconds.
     * Value range: 1~3600.
         */
        readonly connectionDrainTimeout?: number | ros.IResolvable;
    }
}
export declare namespace RosServerGroup {
    /**
     * @stability external
     */
    interface HealthCheckConfigProperty {
        /**
         * @Property healthCheckInterval: The time interval of the health check.
     * Unit: seconds.
     * Value range: **1~50**.
     * Default value: **10**.
         */
        readonly healthCheckInterval?: number | ros.IResolvable;
        /**
         * @Property healthCheckConnectPort: The port of the backend server used for health check.
     * Value range: **1 to 65535**.
     * Default value: **80**.
         */
        readonly healthCheckConnectPort?: number | ros.IResolvable;
        /**
         * @Property unhealthyThreshold: The number of consecutive failed health checks that determine the health check status of the backend server from success to failure.
     * Value range: **2 to 10**.
     * Default value: **2**.
         */
        readonly unhealthyThreshold?: number | ros.IResolvable;
        /**
         * @Property healthyThreshold: After the number of consecutive successful health checks, the health check status of the backend server is determined as successful from failed.
     * Value range: **2 to 10**.
     * Default value: **2**.
         */
        readonly healthyThreshold?: number | ros.IResolvable;
        /**
         * @Property healthCheckPath: Health check path.
     * It can be 1 to 80 characters in length and can only use upper and lower case letters, digits, dashes (-), forward slashes (\/), half-width periods (.), percent signs (%), and half-width question marks (?), Pound sign (#) and and(&) and extended character set_;~! ()*[]@$^: ',+ =
     * Must start with a forward slash (\/).
     * > This parameter takes effect only when the HealthCheckProtocol is HTTP.
         */
        readonly healthCheckPath?: string | ros.IResolvable;
        /**
         * @Property healthCheckProtocol: Health check protocol, value:
     * - **TCP** (default): Sends a SYN handshake packet to check whether the server port is alive.
     * - **HTTP**: Sends a GET request to simulate the access behavior of the browser to check whether the server application is healthy.
         */
        readonly healthCheckProtocol?: string | ros.IResolvable;
        /**
         * @Property healthCheckConnectTimeout: The maximum timeout period for health check responses.
     * Unit: seconds.
     * Value range: **1 to 300**.
     * Default value: **5**.
         */
        readonly healthCheckConnectTimeout?: number | ros.IResolvable;
        /**
         * @Property healthCheckDomain: The domain name used for health checks. Value:
     * - **$SERVER_IP (default)**: Use the internal IP address of the backend server.
     * - **domain**: Specify a specific domain name. The length is limited to 1 to 80 characters. Only uppercase and lowercase letters, digits, dashes (-), and periods (.) can be used.
     * > This parameter takes effect only when the HealthCheckProtocol is HTTP.
         */
        readonly healthCheckDomain?: string | ros.IResolvable;
        /**
         * @Property healthCheckEnabled: Whether to enable health check. Value:
     * - **true (default)**: enabled.
     * - **false**: Closed.
         */
        readonly healthCheckEnabled?: boolean | ros.IResolvable;
        /**
         * @Property healthCheckHttpCode: Health status return code list.
         */
        readonly healthCheckHttpCode?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosServerGroup {
    /**
     * @stability external
     */
    interface ServersProperty {
        /**
         * @Property serverType: Backend server type. Valid values:
     * - **Ecs**: ECS instance.
     * - **Eni**: ENI instance.
     * - **Eci**: ECI elastic container.
     * - **Ip**: Ip address.
         */
        readonly serverType: string | ros.IResolvable;
        /**
         * @Property serverId: The ID of the backend server.
         */
        readonly serverId: string | ros.IResolvable;
        /**
         * @Property port: The port used by the backend server
         */
        readonly port?: number | ros.IResolvable;
        /**
         * @Property serverIp: Server ip.
         */
        readonly serverIp?: string | ros.IResolvable;
    }
}
export declare namespace RosServerGroup {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
