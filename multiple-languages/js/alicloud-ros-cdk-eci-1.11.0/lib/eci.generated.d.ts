import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosContainerGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eci-containergroup
 */
export interface RosContainerGroupProps {
    /**
     * @Property container: The containers that constitute the container group.
     */
    readonly container: Array<RosContainerGroup.ContainerProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property containerGroupName: The name of the container group.
     * The length is [2,128] English lowercase letters, numbers or hyphens (-), cannot begin or end with a hyphens.
     */
    readonly containerGroupName: string | ros.IResolvable;
    /**
     * @Property acrRegistryInfo: Enterprise Edition access credential configuration information.
     */
    readonly acrRegistryInfo?: Array<RosContainerGroup.AcrRegistryInfoProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property activeDeadlineSeconds: The validity period in seconds.
     */
    readonly activeDeadlineSeconds?: number | ros.IResolvable;
    /**
     * @Property autoMatchImageCache: Specifies whether to automatically match the image cache.
     */
    readonly autoMatchImageCache?: boolean | ros.IResolvable;
    /**
     * @Property cpu: CPU size
     */
    readonly cpu?: number | ros.IResolvable;
    /**
     * @Property dnsConfig: The information about DNS configurations.
     */
    readonly dnsConfig?: RosContainerGroup.DnsConfigProperty | ros.IResolvable;
    /**
     * @Property eipInstanceId: Elastic IP ID
     */
    readonly eipInstanceId?: string | ros.IResolvable;
    /**
     * @Property hostAliase: Customize the hostname mapping of a container inside the pod
     */
    readonly hostAliase?: Array<RosContainerGroup.HostAliaseProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property imageRegistryCredential: The information that you need to log on to the container image repository, including the server address, username, and password.
     */
    readonly imageRegistryCredential?: Array<RosContainerGroup.ImageRegistryCredentialProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property imageSnapshotId: Image cache ID or snapshot ID.
     */
    readonly imageSnapshotId?: string | ros.IResolvable;
    /**
     * @Property initContainer: The containers that constitute the container group for initializing.
     */
    readonly initContainer?: Array<RosContainerGroup.InitContainerProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property instanceType: The type of the ECS instance.
     */
    readonly instanceType?: string | ros.IResolvable;
    /**
     * @Property ipv6AddressCount: The number of IPv6 addresses.
     */
    readonly ipv6AddressCount?: number | ros.IResolvable;
    /**
     * @Property memory: memory size
     */
    readonly memory?: number | ros.IResolvable;
    /**
     * @Property ramRoleName: The RAM role that the container group assumes. ECI and ECS share the same RAM role.
     */
    readonly ramRoleName?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property restartPolicy: The policy for restarting the instance. Default value: Always.
     */
    readonly restartPolicy?: string | ros.IResolvable;
    /**
     * @Property securityContextSysctl: ECI Sysctl is valid for every container in ECI.
     * Currently only two Sysctl keyNames are supported:
     * Kernel.shm_rmid_forced
     * Kernel.msgmax
     */
    readonly securityContextSysctl?: Array<RosContainerGroup.SecurityContextSysctlProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property securityGroupId: The ID of the security group to which the instance belongs. Instances in the same security group can access one another.
     * If no security group is specified, the system automatically uses the default security group in the region you select.
     * If you do not have a default security group in this region, the system automatically creates a default security group and adds the container protocol and port you declared to the inbound direction rules of this security group.
     */
    readonly securityGroupId?: string | ros.IResolvable;
    /**
     * @Property slsEnable: Enable user log collection. The default is False.
     */
    readonly slsEnable?: boolean | ros.IResolvable;
    /**
     * @Property spotPriceLimit: Set the hourly maximum price of the instance. It supports a maximum of 3 decimal places. It takes effect when the value of the parameter SpotStrategy is SpotWithPriceLimit.
     */
    readonly spotPriceLimit?: number | ros.IResolvable;
    /**
     * @Property spotStrategy: Instance preemption strategy.
     * Ranges:
     * NoSpot (default): normal pay-as-you-go instances.
     * SpotWithPriceLimit: Preemptive instance that sets a cap price.
     * SpotAsPriceGo: The system automatically bids, following the current market actual price.
     */
    readonly spotStrategy?: string | ros.IResolvable;
    /**
     * @Property tag: The list of container group tags in the form of key\/value pairs. You can define a maximum of 20 tags for each container group.
     */
    readonly tag?: Array<ros.RosTag | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property terminationGracePeriodSeconds: The buffer time for the program to handle operations before it is stopped.
     */
    readonly terminationGracePeriodSeconds?: number | ros.IResolvable;
    /**
     * @Property volume: The data volume. You can specify a maximum of 20 data volumes.
     */
    readonly volume?: Array<RosContainerGroup.VolumeProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property vSwitchId: The ID of the specified VSwitch.
     * If no switch is specified, the system automatically uses the default switch in the default VPC in the selected region.
     * If no default VPC or default switch is available in the region, the system automatically creates a default VPC and a default switch
     */
    readonly vSwitchId?: string | ros.IResolvable;
    /**
     * @Property zoneId: The ID of the zone in which the instance resides. If you leave the parameter blank, the system assigns a zone for you. The default value is blank.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECI::ContainerGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ContainerGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eci-containergroup
 */
export declare class RosContainerGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECI::ContainerGroup";
    /**
     * @Attribute ContainerGroupId: The ID of the container group.
     */
    readonly attrContainerGroupId: ros.IResolvable;
    /**
     * @Attribute ContainerGroupName: The name of the container group.
     */
    readonly attrContainerGroupName: ros.IResolvable;
    /**
     * @Attribute EniInstanceId: ENI instance ID.
     */
    readonly attrEniInstanceId: ros.IResolvable;
    /**
     * @Attribute InternetIp: Internet IP.
     */
    readonly attrInternetIp: ros.IResolvable;
    /**
     * @Attribute IntranetIp: Intranet IP.
     */
    readonly attrIntranetIp: ros.IResolvable;
    /**
     * @Attribute Ipv6Address: Ipv6 address.
     */
    readonly attrIpv6Address: ros.IResolvable;
    /**
     * @Attribute RegionId: The ID of the region in which the instance resides.
     */
    readonly attrRegionId: ros.IResolvable;
    /**
     * @Attribute SecurityGroupId: The ID of the security group to which the instance belongs. Instances in the same security group can access one another.
     */
    readonly attrSecurityGroupId: ros.IResolvable;
    /**
     * @Attribute VSwitchId: The ID of the VSwitch. Currently, ECI instances can only be deployed in VPCs.
     */
    readonly attrVSwitchId: ros.IResolvable;
    /**
     * @Attribute ZoneId: The ID of the zone in which the instance resides. If you leave the parameter blank, the system assigns a zone for you. The default value is blank.
     */
    readonly attrZoneId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property container: The containers that constitute the container group.
     */
    container: Array<RosContainerGroup.ContainerProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property containerGroupName: The name of the container group.
     * The length is [2,128] English lowercase letters, numbers or hyphens (-), cannot begin or end with a hyphens.
     */
    containerGroupName: string | ros.IResolvable;
    /**
     * @Property acrRegistryInfo: Enterprise Edition access credential configuration information.
     */
    acrRegistryInfo: Array<RosContainerGroup.AcrRegistryInfoProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property activeDeadlineSeconds: The validity period in seconds.
     */
    activeDeadlineSeconds: number | ros.IResolvable | undefined;
    /**
     * @Property autoMatchImageCache: Specifies whether to automatically match the image cache.
     */
    autoMatchImageCache: boolean | ros.IResolvable | undefined;
    /**
     * @Property cpu: CPU size
     */
    cpu: number | ros.IResolvable | undefined;
    /**
     * @Property dnsConfig: The information about DNS configurations.
     */
    dnsConfig: RosContainerGroup.DnsConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property eipInstanceId: Elastic IP ID
     */
    eipInstanceId: string | ros.IResolvable | undefined;
    /**
     * @Property hostAliase: Customize the hostname mapping of a container inside the pod
     */
    hostAliase: Array<RosContainerGroup.HostAliaseProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property imageRegistryCredential: The information that you need to log on to the container image repository, including the server address, username, and password.
     */
    imageRegistryCredential: Array<RosContainerGroup.ImageRegistryCredentialProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property imageSnapshotId: Image cache ID or snapshot ID.
     */
    imageSnapshotId: string | ros.IResolvable | undefined;
    /**
     * @Property initContainer: The containers that constitute the container group for initializing.
     */
    initContainer: Array<RosContainerGroup.InitContainerProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property instanceType: The type of the ECS instance.
     */
    instanceType: string | ros.IResolvable | undefined;
    /**
     * @Property ipv6AddressCount: The number of IPv6 addresses.
     */
    ipv6AddressCount: number | ros.IResolvable | undefined;
    /**
     * @Property memory: memory size
     */
    memory: number | ros.IResolvable | undefined;
    /**
     * @Property ramRoleName: The RAM role that the container group assumes. ECI and ECS share the same RAM role.
     */
    ramRoleName: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property restartPolicy: The policy for restarting the instance. Default value: Always.
     */
    restartPolicy: string | ros.IResolvable | undefined;
    /**
     * @Property securityContextSysctl: ECI Sysctl is valid for every container in ECI.
     * Currently only two Sysctl keyNames are supported:
     * Kernel.shm_rmid_forced
     * Kernel.msgmax
     */
    securityContextSysctl: Array<RosContainerGroup.SecurityContextSysctlProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property securityGroupId: The ID of the security group to which the instance belongs. Instances in the same security group can access one another.
     * If no security group is specified, the system automatically uses the default security group in the region you select.
     * If you do not have a default security group in this region, the system automatically creates a default security group and adds the container protocol and port you declared to the inbound direction rules of this security group.
     */
    securityGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property slsEnable: Enable user log collection. The default is False.
     */
    slsEnable: boolean | ros.IResolvable | undefined;
    /**
     * @Property spotPriceLimit: Set the hourly maximum price of the instance. It supports a maximum of 3 decimal places. It takes effect when the value of the parameter SpotStrategy is SpotWithPriceLimit.
     */
    spotPriceLimit: number | ros.IResolvable | undefined;
    /**
     * @Property spotStrategy: Instance preemption strategy.
     * Ranges:
     * NoSpot (default): normal pay-as-you-go instances.
     * SpotWithPriceLimit: Preemptive instance that sets a cap price.
     * SpotAsPriceGo: The system automatically bids, following the current market actual price.
     */
    spotStrategy: string | ros.IResolvable | undefined;
    /**
     * @Property tag: The list of container group tags in the form of key\/value pairs. You can define a maximum of 20 tags for each container group.
     */
    tag: Array<ros.RosTag | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property terminationGracePeriodSeconds: The buffer time for the program to handle operations before it is stopped.
     */
    terminationGracePeriodSeconds: number | ros.IResolvable | undefined;
    /**
     * @Property volume: The data volume. You can specify a maximum of 20 data volumes.
     */
    volume: Array<RosContainerGroup.VolumeProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: The ID of the specified VSwitch.
     * If no switch is specified, the system automatically uses the default switch in the default VPC in the selected region.
     * If no default VPC or default switch is available in the region, the system automatically creates a default VPC and a default switch
     */
    vSwitchId: string | ros.IResolvable | undefined;
    /**
     * @Property zoneId: The ID of the zone in which the instance resides. If you leave the parameter blank, the system assigns a zone for you. The default value is blank.
     */
    zoneId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosContainerGroupProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosContainerGroup {
    /**
     * @stability external
     */
    interface AcrRegistryInfoProperty {
        /**
         * @Property instanceName: instance name
         */
        readonly instanceName?: string | ros.IResolvable;
        /**
         * @Property instanceId: Instance id
         */
        readonly instanceId: string | ros.IResolvable;
        /**
         * @Property regionId: The region to which it belongs. Optional, the default is the local region
         */
        readonly regionId?: string | ros.IResolvable;
        /**
         * @Property domain: domain
         */
        readonly domain?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosContainerGroup {
    /**
     * @stability external
     */
    interface ConfigFileVolumeConfigFileToPathProperty {
        /**
         * @Property path: The relative path in the configuration file. You can specify a location of a directory relative to another directory.
         */
        readonly path: string | ros.IResolvable;
        /**
         * @Property content: The content of the configuration file. Maximum size: 32 KB.
         */
        readonly content?: string | ros.IResolvable;
    }
}
export declare namespace RosContainerGroup {
    /**
     * @stability external
     */
    interface ContainerProperty {
        /**
         * @Property readinessProbe: The readiness probe.
         */
        readonly readinessProbe?: RosContainerGroup.ReadinessProbeProperty | ros.IResolvable;
        /**
         * @Property livenessProbe: The liveness probe.
         */
        readonly livenessProbe?: RosContainerGroup.LivenessProbeProperty | ros.IResolvable;
        /**
         * @Property memory: The memory assigned to the container. Unit: GiB.
         */
        readonly memory?: number | ros.IResolvable;
        /**
         * @Property port: The open ports and protocols. You can set a maximum of 100 ports.
         */
        readonly port?: Array<RosContainerGroup.PortProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property cpu: The number of vCPUs assigned to the container. Unit: vCPUs (cores).
         */
        readonly cpu?: number | ros.IResolvable;
        /**
         * @Property image: The container image.
         */
        readonly image: string | ros.IResolvable;
        /**
         * @Property stdinOnce: undefined
         */
        readonly stdinOnce?: boolean | ros.IResolvable;
        /**
         * @Property name: The name of the container.
         */
        readonly name: string | ros.IResolvable;
        /**
         * @Property stdin: undefined
         */
        readonly stdin?: boolean | ros.IResolvable;
        /**
         * @Property workingDir: The working directory for the container.
         */
        readonly workingDir?: string | ros.IResolvable;
        /**
         * @Property imagePullPolicy: The image pull policy. You can use it to pull the image from the image repository.
         */
        readonly imagePullPolicy?: string | ros.IResolvable;
        /**
         * @Property command: The list of commands that you want to send to a container to run. You can specify a maximum of 1 commands. Maximum length per string: 256 characters.
         */
        readonly command?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property arg: The arguments passed to the commands. A maximum of 10 arguments are supported.
         */
        readonly arg?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property tty: undefined
         */
        readonly tty?: boolean | ros.IResolvable;
        /**
         * @Property securityContext: The security context of the container group.
         */
        readonly securityContext?: RosContainerGroup.SecurityContextProperty | ros.IResolvable;
        /**
         * @Property volumeMount: The number of volumes that are mounted to the container. A maximum of 16 volumes are supported.
         */
        readonly volumeMount?: Array<RosContainerGroup.VolumeMountProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property environmentVar: Environment variables in the operating system of the container. Each environment variable is a key\/value pair, and both the key and value are strings. A maximum of 100 environment variables are supported. The key indicates the name of a variable. The value indicates the value of the variable.
         */
        readonly environmentVar?: Array<RosContainerGroup.EnvironmentVarProperty | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosContainerGroup {
    /**
     * @stability external
     */
    interface DnsConfigProperty {
        /**
         * @Property nameServer: The list of IP addresses for DNS servers.
         */
        readonly nameServer?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property search: The list of DNS search domains.
         */
        readonly search?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property option: The list of options. Each option includes a name and a value. The value is optional.
         */
        readonly option?: Array<RosContainerGroup.OptionProperty | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosContainerGroup {
    /**
     * @stability external
     */
    interface EnvironmentVarProperty {
        /**
         * @Property value: The value of the variable.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: The name of the variable. The name must be [1,128] characters in length and can contain [, 0-9a-zA-Z, ], and underscores (_). It cannot start with a digit.
         */
        readonly key?: string | ros.IResolvable;
        /**
         * @Property fieldRefFieldPath: A reference to another variable. Currently, only status.podIP is supported.
         */
        readonly fieldRefFieldPath?: string | ros.IResolvable;
    }
}
export declare namespace RosContainerGroup {
    /**
     * @stability external
     */
    interface HostAliaseProperty {
        /**
         * @Property ip: undefined
         */
        readonly ip?: string | ros.IResolvable;
        /**
         * @Property hostname: undefined
         */
        readonly hostname?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosContainerGroup {
    /**
     * @stability external
     */
    interface ImageRegistryCredentialProperty {
        /**
         * @Property userName: The username that is used to log on to the image repository.
         */
        readonly userName: string | ros.IResolvable;
        /**
         * @Property server: The IP address of the image repository. This address does not include a protocol prefix, such as http:\/\/ or https:\/\/.
         */
        readonly server: string | ros.IResolvable;
        /**
         * @Property password: The password that is used to log on to the image repository.
         */
        readonly password: string | ros.IResolvable;
    }
}
export declare namespace RosContainerGroup {
    /**
     * @stability external
     */
    interface InitContainerProperty {
        /**
         * @Property workingDir: The working directory for the container.
         */
        readonly workingDir?: string | ros.IResolvable;
        /**
         * @Property imagePullPolicy: The image pull policy. You can use it to pull the image from the image repository.
         */
        readonly imagePullPolicy?: string | ros.IResolvable;
        /**
         * @Property command: The list of commands that you want to send to a container to run. You can specify a maximum of 1 commands. Maximum length per string: 256 characters.
         */
        readonly command?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property memory: The memory assigned to the container. Unit: GiB.
         */
        readonly memory?: number | ros.IResolvable;
        /**
         * @Property port: The open ports and protocols. You can set a maximum of 100 ports.
         */
        readonly port?: Array<RosContainerGroup.InitContainerPortProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property arg: The arguments passed to the commands. A maximum of 10 arguments are supported.
         */
        readonly arg?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property securityContext: The security context of the container group.
         */
        readonly securityContext?: RosContainerGroup.InitContainerSecurityContextProperty | ros.IResolvable;
        /**
         * @Property volumeMount: The number of volumes that are mounted to the container. A maximum of 16 volumes are supported.
         */
        readonly volumeMount?: Array<RosContainerGroup.InitContainerVolumeMountProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property cpu: The number of vCPUs assigned to the container. Unit: vCPUs (cores).
         */
        readonly cpu?: number | ros.IResolvable;
        /**
         * @Property image: The container image.
         */
        readonly image?: string | ros.IResolvable;
        /**
         * @Property environmentVar: Environment variables in the operating system of the container. Each environment variable is a key\/value pair, and both the key and value are strings. A maximum of 100 environment variables are supported. The key indicates the name of a variable. The value indicates the value of the variable.
         */
        readonly environmentVar?: Array<RosContainerGroup.InitContainerEnvironmentVarProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property name: The name of the container.
         */
        readonly name?: string | ros.IResolvable;
    }
}
export declare namespace RosContainerGroup {
    /**
     * @stability external
     */
    interface InitContainerEnvironmentVarProperty {
        /**
         * @Property value: The value of the variable. The value must be [0,256] characters in length.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: The name of the variable. The name must be [1,128] characters in length and can contain [, 0-9a-zA-Z, ], and underscores (_). It cannot start with a digit.
         */
        readonly key?: string | ros.IResolvable;
        /**
         * @Property fieldRefFieldPath: A reference to another variable. Currently, only status.podIP is supported.
         */
        readonly fieldRefFieldPath?: string | ros.IResolvable;
    }
}
export declare namespace RosContainerGroup {
    /**
     * @stability external
     */
    interface InitContainerPortProperty {
        /**
         * @Property port: The port number. Valid values: 1-65535.
         */
        readonly port?: number | ros.IResolvable;
        /**
         * @Property protocol: The protocol that the port uses. Valid values: TCP and UDP
         */
        readonly protocol?: string | ros.IResolvable;
    }
}
export declare namespace RosContainerGroup {
    /**
     * @stability external
     */
    interface InitContainerSecurityContextProperty {
        /**
         * @Property runAsUser: Valid value: 1337.
         */
        readonly runAsUser?: number | ros.IResolvable;
        /**
         * @Property readOnlyRootFilesystem: Valid value: True.
         */
        readonly readOnlyRootFilesystem?: boolean | ros.IResolvable;
        /**
         * @Property capabilityAdd: undefined
         */
        readonly capabilityAdd?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosContainerGroup {
    /**
     * @stability external
     */
    interface InitContainerVolumeMountProperty {
        /**
         * @Property readOnly: Default value: False.
         */
        readonly readOnly?: boolean | ros.IResolvable;
        /**
         * @Property mountPath: A mount path. The data in the target directory is overwritten by the data in the mounted volume. Therefore, use caution when you mount a volume to a directory.
         */
        readonly mountPath?: string | ros.IResolvable;
        /**
         * @Property name: The name of the volume. The name is the same as that specified for the Name parameter in the Volume section.
         */
        readonly name?: number | ros.IResolvable;
    }
}
export declare namespace RosContainerGroup {
    /**
     * @stability external
     */
    interface LivenessProbeProperty {
        /**
         * @Property timeoutSeconds: The number of seconds after which the probe times out. Default value: 1. Minimum value: 1.
         */
        readonly timeoutSeconds?: number | ros.IResolvable;
        /**
         * @Property initialDelaySeconds: The number of seconds after the container has started before probes are initiated.
         */
        readonly initialDelaySeconds?: number | ros.IResolvable;
        /**
         * @Property periodSeconds: Specifies the period at which the probe is performed. Unit: seconds. Default value: 10. Minimum value: 1.
         */
        readonly periodSeconds?: number | ros.IResolvable;
        /**
         * @Property failureThreshold: The minimum consecutive failures for the probe to be considered to have failed after having succeeded. Default value: 3.
         */
        readonly failureThreshold?: number | ros.IResolvable;
        /**
         * @Property successThreshold: The minimum consecutive successes for the probe to be considered successful after having failed. Default value: 1.
         */
        readonly successThreshold?: number | ros.IResolvable;
        /**
         * @Property execCommand: The commands for running the readiness probe.
         */
        readonly execCommand?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property httpGetPath: The path to which the system sends an HTTP GET request to perform the check.
         */
        readonly httpGetPath?: string | ros.IResolvable;
        /**
         * @Property httpGetPort: The port to which the system sends an HTTP GET request to perform the check.
         */
        readonly httpGetPort?: number | ros.IResolvable;
        /**
         * @Property httpGetScheme: The protocol that is used to connect the host. Valid values: HTTP and HTTPS.
         */
        readonly httpGetScheme?: string | ros.IResolvable;
        /**
         * @Property tcpSocketPort: The port to which the system sends a TCP SOCKET request to perform the check.
         */
        readonly tcpSocketPort?: number | ros.IResolvable;
    }
}
export declare namespace RosContainerGroup {
    /**
     * @stability external
     */
    interface OptionProperty {
        /**
         * @Property value: The value of the option.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property name: The name of the option.
         */
        readonly name?: string | ros.IResolvable;
    }
}
export declare namespace RosContainerGroup {
    /**
     * @stability external
     */
    interface PortProperty {
        /**
         * @Property port: The port number. Valid values: 1-65535.
         */
        readonly port?: number | ros.IResolvable;
        /**
         * @Property protocol: The protocol that the port uses. Valid values: TCP and UDP
         */
        readonly protocol?: string | ros.IResolvable;
    }
}
export declare namespace RosContainerGroup {
    /**
     * @stability external
     */
    interface ReadinessProbeProperty {
        /**
         * @Property timeoutSeconds: The number of seconds after which the probe times out. Default value: 1. Minimum value: 1.
         */
        readonly timeoutSeconds?: number | ros.IResolvable;
        /**
         * @Property initialDelaySeconds: The number of seconds after the container has started before probes are initiated.
         */
        readonly initialDelaySeconds?: number | ros.IResolvable;
        /**
         * @Property periodSeconds: Specifies the period at which the probe is performed. Unit: seconds. Default value: 10. Minimum value: 1.
         */
        readonly periodSeconds?: number | ros.IResolvable;
        /**
         * @Property failureThreshold: The minimum consecutive failures for the probe to be considered to have failed after having succeeded. Default value: 3.
         */
        readonly failureThreshold?: number | ros.IResolvable;
        /**
         * @Property successThreshold: The minimum consecutive successes for the probe to be considered successful after having failed. Default value: 1.
         */
        readonly successThreshold?: number | ros.IResolvable;
        /**
         * @Property execCommand: The commands for running the readiness probe.
         */
        readonly execCommand?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property httpGetPath: The path to which the system sends an HTTP GET request to perform the check.
         */
        readonly httpGetPath?: string | ros.IResolvable;
        /**
         * @Property httpGetPort: The port to which the system sends an HTTP GET request to perform the check.
         */
        readonly httpGetPort?: number | ros.IResolvable;
        /**
         * @Property httpGetScheme: The protocol that is used to connect the host. Valid values: HTTP and HTTPS.
         */
        readonly httpGetScheme?: string | ros.IResolvable;
        /**
         * @Property tcpSocketPort: The port to which the system sends a TCP SOCKET request to perform the check.
         */
        readonly tcpSocketPort?: number | ros.IResolvable;
    }
}
export declare namespace RosContainerGroup {
    /**
     * @stability external
     */
    interface SecurityContextProperty {
        /**
         * @Property runAsUser: User ID.
         */
        readonly runAsUser?: number | ros.IResolvable;
        /**
         * @Property readOnlyRootFilesystem: Valid value: True.
         */
        readonly readOnlyRootFilesystem?: boolean | ros.IResolvable;
        /**
         * @Property capabilityAdd: undefined
         */
        readonly capabilityAdd?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosContainerGroup {
    /**
     * @stability external
     */
    interface SecurityContextSysctlProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property name: undefined
         */
        readonly name?: string | ros.IResolvable;
    }
}
export declare namespace RosContainerGroup {
    /**
     * @stability external
     */
    interface TagProperty {
        /**
         * @Property value: The value of the tag.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: The keyword of the tag.
         */
        readonly key: string | ros.IResolvable;
    }
}
export declare namespace RosContainerGroup {
    /**
     * @stability external
     */
    interface VolumeProperty {
        /**
         * @Property type: The type of volume. Valid values:
     * - EmptyDirVolume: A data volume of type EmptyDir that represents an empty directory.
     * - NFSVolume: A data volume of type NFS that represents a network filesystem
     * - ConfigFileVolume: A data volume of type ConfigFile, which represents configuration files
     * - FlexVolume: Use FlexVolume plug-in to extend the storage type and support mounting cloud disk.
     * - HostPathVolume: A data volume of type HostPath, representing a file or directory of the host node.
     * - DiskVolume (not recommended) : Cloud disk volume FlexVolume is recommended to mount the cloud disk.
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property name: The name of the volume.
         */
        readonly name: string | ros.IResolvable;
        /**
         * @Property configFileVolumeConfigFileToPath: The path to the configuration file.
         */
        readonly configFileVolumeConfigFileToPath?: Array<RosContainerGroup.ConfigFileVolumeConfigFileToPathProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property emptyDirVolumeMedium: The storage medium for EmptyDirVolume. By default, the file system on the node is used. Default value: not specified. Valid value: Memory. If this parameter is set to Memory, the EmptyDirVolume volume is stored in memory.
         */
        readonly emptyDirVolumeMedium?: string | ros.IResolvable;
        /**
         * @Property flexVolumeDriver: Driver type when using the FlexVolume plug-in to mount a data volume. Valid values:
     * - alicloud\/disk: Mount the cloud disk
     * - alicloud\/nas: Mount NAS
     * - alicloud\/oss: Mount OSS
         */
        readonly flexVolumeDriver?: string | ros.IResolvable;
        /**
         * @Property flexVolumeFsType: The type of file system to mount depends, by default, on FlexVolume's script.
         */
        readonly flexVolumeFsType?: string | ros.IResolvable;
        /**
         * @Property flexVolumeOptions: The options of FlexVolume.
         */
        readonly flexVolumeOptions?: {
            [key: string]: (any | ros.IResolvable);
        } | ros.IResolvable;
        /**
         * @Property nfsVolumePath: The path to the NFS volume.
         */
        readonly nfsVolumePath?: string | ros.IResolvable;
        /**
         * @Property nfsVolumeReadOnly: Default value: False.
         */
        readonly nfsVolumeReadOnly?: boolean | ros.IResolvable;
        /**
         * @Property nfsVolumeServer: The IP address of the NFS server.
         */
        readonly nfsVolumeServer?: string | ros.IResolvable;
    }
}
export declare namespace RosContainerGroup {
    /**
     * @stability external
     */
    interface VolumeMountProperty {
        /**
         * @Property mountPath: A mount path. The data in the target directory is overwritten by the data in the mounted volume. Therefore, use caution when you mount a volume to a directory.
         */
        readonly mountPath?: string | ros.IResolvable;
        /**
         * @Property readOnly: Default value: False.
         */
        readonly readOnly?: boolean | ros.IResolvable;
        /**
         * @Property subPath: A subdirectory under the data volume. The convenience instance mounts different directories under the same data volume to different directories of the container.
         */
        readonly subPath?: string | ros.IResolvable;
        /**
         * @Property mountPropagation: Mount propagation Settings for data volumes. Mount propagation allows container mounted volumes to be shared to other containers on the same ECI instance, or even to other ECI instances on the same host machine. Valid values:
     * - None: This volume is not aware of any subsequent mount operations performed on this volume or its subdirectories.
     * - HostToContainer: This volume will be aware of subsequent mount operations on this volume or its subdirectories
     * - Bidirectional: Mount aware, similar to HostToContainer In addition, the volume will be propagated back to the host and to all containers of all ECI instances that use the same volume.
     * Default value: None
         */
        readonly mountPropagation?: string | ros.IResolvable;
        /**
         * @Property name: The name of the volume. The name is the same as that specified for the Name parameter in the Volume section.
         */
        readonly name?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosImageCache`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eci-imagecache
 */
export interface RosImageCacheProps {
    /**
     * @Property image: The image list to be cached.
     */
    readonly image: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property imageCacheName: Image cache name.
     */
    readonly imageCacheName: string | ros.IResolvable;
    /**
     * @Property securityGroupId: Security group ID.
     */
    readonly securityGroupId: string | ros.IResolvable;
    /**
     * @Property vSwitchId: VSwitch ID.
     */
    readonly vSwitchId: string | ros.IResolvable;
    /**
     * @Property acrRegistryInfo: Enterprise Edition access credential configuration information.
     */
    readonly acrRegistryInfo?: Array<RosImageCache.AcrRegistryInfoProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property autoMatchImageCache: Specifies whether to enable reuse of image cache layers. If you enable this feature, and the image cache that you want to createand an existing image cache contain duplicate image layers, the system reuses the duplicate image layers to create the new image cache.
     *  This accelerates the creation of the image cache.
     * Valid values: true: enables reuse of image cache layers.
     * false: disables reuse of image cache layers.
     * Default value: false.
     */
    readonly autoMatchImageCache?: boolean | ros.IResolvable;
    /**
     * @Property eipInstanceId: If you want to pull the public network image, you need to configure the public network ip or configure the switch NAT gateway.
     */
    readonly eipInstanceId?: string | ros.IResolvable;
    /**
     * @Property imageCacheSize: The size of the image cache. Unit: GiB. Default value: 20.
     */
    readonly imageCacheSize?: number | ros.IResolvable;
    /**
     * @Property imageRegistryCredential: Private image password. Alibaba Cloud ACR image can be left blank.
     */
    readonly imageRegistryCredential?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property retentionDays: The retention period of the image cache. Unit: days. When the retention period ends, the image cache expires and is deleted.
     *  By default, image caches never expire.
     * Note: The image caches that fail to be created are only retained for one day.
     */
    readonly retentionDays?: number | ros.IResolvable;
    /**
     * @Property zoneId: The zone ID of the image cache.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ECI::ImageCache`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ImageCache` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eci-imagecache
 */
export declare class RosImageCache extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ECI::ImageCache";
    /**
     * @Attribute ImageCacheId: The ID of the image cache.
     */
    readonly attrImageCacheId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property image: The image list to be cached.
     */
    image: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property imageCacheName: Image cache name.
     */
    imageCacheName: string | ros.IResolvable;
    /**
     * @Property securityGroupId: Security group ID.
     */
    securityGroupId: string | ros.IResolvable;
    /**
     * @Property vSwitchId: VSwitch ID.
     */
    vSwitchId: string | ros.IResolvable;
    /**
     * @Property acrRegistryInfo: Enterprise Edition access credential configuration information.
     */
    acrRegistryInfo: Array<RosImageCache.AcrRegistryInfoProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property autoMatchImageCache: Specifies whether to enable reuse of image cache layers. If you enable this feature, and the image cache that you want to createand an existing image cache contain duplicate image layers, the system reuses the duplicate image layers to create the new image cache.
     *  This accelerates the creation of the image cache.
     * Valid values: true: enables reuse of image cache layers.
     * false: disables reuse of image cache layers.
     * Default value: false.
     */
    autoMatchImageCache: boolean | ros.IResolvable | undefined;
    /**
     * @Property eipInstanceId: If you want to pull the public network image, you need to configure the public network ip or configure the switch NAT gateway.
     */
    eipInstanceId: string | ros.IResolvable | undefined;
    /**
     * @Property imageCacheSize: The size of the image cache. Unit: GiB. Default value: 20.
     */
    imageCacheSize: number | ros.IResolvable | undefined;
    /**
     * @Property imageRegistryCredential: Private image password. Alibaba Cloud ACR image can be left blank.
     */
    imageRegistryCredential: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property retentionDays: The retention period of the image cache. Unit: days. When the retention period ends, the image cache expires and is deleted.
     *  By default, image caches never expire.
     * Note: The image caches that fail to be created are only retained for one day.
     */
    retentionDays: number | ros.IResolvable | undefined;
    /**
     * @Property zoneId: The zone ID of the image cache.
     */
    zoneId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosImageCacheProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosImageCache {
    /**
     * @stability external
     */
    interface AcrRegistryInfoProperty {
        /**
         * @Property instanceName: instance name
         */
        readonly instanceName?: string | ros.IResolvable;
        /**
         * @Property instanceId: Instance id
         */
        readonly instanceId: string | ros.IResolvable;
        /**
         * @Property regionId: The region to which it belongs. Optional, the default is the local region
         */
        readonly regionId?: string | ros.IResolvable;
        /**
         * @Property domain: domain
         */
        readonly domain?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
