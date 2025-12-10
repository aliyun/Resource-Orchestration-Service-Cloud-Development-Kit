package com.aliyun.ros.cdk.acs;

/**
 * Properties for defining a <code>Cluster</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-acs-cluster
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:51.847Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.acs.$Module.class, fqn = "@alicloud/ros-cdk-acs.ClusterProps")
@software.amazon.jsii.Jsii.Proxy(ClusterProps.Jsii$Proxy.class)
public interface ClusterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property name: The name of the cluster.
     * <p>
     * The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     * Property addons: The add-ons to be installed for the cluster.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAddons() {
        return null;
    }

    /**
     * Property clusterSpec: The managed cluster spec.
     * <p>
     * Value:
     * ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
     * ack.standard: Standard hosting cluster.
     * Default value: ack.pro.small.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClusterSpec() {
        return null;
    }

    /**
     * Property computeClass: The compute class of the cluster.
     * <p>
     * This parameter is only used as a parameter query for ZoneIds and is not used in the actual creation.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getComputeClass() {
        return null;
    }

    /**
     * Property deleteOptions: Delete options, only work for deleting resource.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeleteOptions() {
        return null;
    }

    /**
     * Property deletionProtection: Specifies whether to enable deletion protection for the cluster.
     * <p>
     * After deletion protection is enabled, the cluster cannot be deleted
     * in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
     * false: disables deletion protection for the cluster.
     * Default value: false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeletionProtection() {
        return null;
    }

    /**
     * Property endpointPublicAccess: Whether to enable the public network API Server: true: which means that the public network API Server is open.
     * <p>
     * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEndpointPublicAccess() {
        return null;
    }

    /**
     * Property ipStack: The IP stack of the cluster.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpStack() {
        return null;
    }

    /**
     * Property isEnterpriseSecurityGroup: Specifies whether to create an advanced security group.
     * <p>
     * This parameter takes effect only if security_group_id is left empty.
     * Note You must specify an advanced security group for a cluster that has Terway installed.
     * true: creates an advanced security group.
     * false: does not create an advanced security group.
     * Default value: false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIsEnterpriseSecurityGroup() {
        return null;
    }

    /**
     * Property kubernetesVersion: The version of the Kubernetes cluster.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKubernetesVersion() {
        return null;
    }

    /**
     * Property loadBalancerSpec: The specification of the Server Load Balancer instance.
     * <p>
     * Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLoadBalancerSpec() {
        return null;
    }

    /**
     * Property loggingType: The logging type of the cluster.
     * <p>
     * By default, no logging service is used.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLoggingType() {
        return null;
    }

    /**
     * Property maintenanceWindow: The maintenance window of the cluster.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMaintenanceWindow() {
        return null;
    }

    /**
     * Property podPostpaidSpec: Postpaid pod spec for inquiry.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPodPostpaidSpec() {
        return null;
    }

    /**
     * Property podVSwitchIds: The list of pod vSwitches.
     * <p>
     * For each vSwitch that is allocated to nodes,
     * you must specify at least one pod vSwitch in the same zone.
     * The pod vSwitches cannot be the same as the node vSwitches.
     * We recommend that you set the mask length of the CIDR block to a value no
     * greater than 19 for the pod vSwitches.
     * The pod_vswitch_ids parameter is required when the Terway network
     * plug-in is selected for the cluster.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPodVSwitchIds() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment.
     * <p>
     * When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServiceCidr() {
        return null;
    }

    /**
     * Property serviceDiscoveryTypes: Intra-cluster service discovery type, used to specify the service discovery method in the ASK cluster.
     * <p>
     * CoreDNS: To use Kubernetes native standard service discovery component CoreDNS,
     * a set of containers needs to be deployed in the cluster for DNS resolution.
     * By default, two ECI instances with a size of 0.25 Core and 512 MiB are used.
     * PrivateZone: To use Alibaba Cloud PrivateZone products to provide service discovery capabilities,
     * the PrivateZone service needs to be enabled.
     * Default value: off
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServiceDiscoveryTypes() {
        return null;
    }

    /**
     * Property slsProjectName: The SLS project name of the cluster.
     * <p>
     * If LoggingType is set to SLS and SlsProjectName is empty, a new Project is created.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSlsProjectName() {
        return null;
    }

    /**
     * Property snatEntry: Whether to configure SNAT for the network.
     * <p>
     * When a VPC can access the public network environment, set it to false.
     * When an existing VPC cannot access the public network environment:
     * When set to True, SNAT is configured and the public network environment can be accessed at this time.
     * If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
     * Default to true.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSnatEntry() {
        return null;
    }

    /**
     * Property tags: Tag the cluster.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.acs.RosCluster.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property timeZone: The time zone of the cluster.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTimeZone() {
        return null;
    }

    /**
     * Property vpcId: VPC ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     * Property vSwitchIds: The IDs of VSwitches.
     * <p>
     * If you leave this property empty, the system automatically creates a VSwitch.
     * Note You must specify both the VpcId and VSwitchIds or leave both of them empty.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchIds() {
        return null;
    }

    /**
     * Property zoneIds: The zone IDs of the cluster.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneIds() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ClusterProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ClusterProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ClusterProps> {
        java.lang.Object name;
        java.lang.Object addons;
        java.lang.Object clusterSpec;
        java.lang.Object computeClass;
        java.lang.Object deleteOptions;
        java.lang.Object deletionProtection;
        java.lang.Object endpointPublicAccess;
        java.lang.Object ipStack;
        java.lang.Object isEnterpriseSecurityGroup;
        java.lang.Object kubernetesVersion;
        java.lang.Object loadBalancerSpec;
        java.lang.Object loggingType;
        java.lang.Object maintenanceWindow;
        java.lang.Object podPostpaidSpec;
        java.lang.Object podVSwitchIds;
        java.lang.Object resourceGroupId;
        java.lang.Object serviceCidr;
        java.lang.Object serviceDiscoveryTypes;
        java.lang.Object slsProjectName;
        java.lang.Object snatEntry;
        java.util.List<com.aliyun.ros.cdk.acs.RosCluster.TagsProperty> tags;
        java.lang.Object timeZone;
        java.lang.Object vpcId;
        java.lang.Object vSwitchIds;
        java.lang.Object zoneIds;

        /**
         * Sets the value of {@link ClusterProps#getName}
         * @param name Property name: The name of the cluster. This parameter is required.
         *             The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getName}
         * @param name Property name: The name of the cluster. This parameter is required.
         *             The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getAddons}
         * @param addons Property addons: The add-ons to be installed for the cluster.
         * @return {@code this}
         */
        public Builder addons(com.aliyun.ros.cdk.core.IResolvable addons) {
            this.addons = addons;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getAddons}
         * @param addons Property addons: The add-ons to be installed for the cluster.
         * @return {@code this}
         */
        public Builder addons(java.util.List<? extends java.lang.Object> addons) {
            this.addons = addons;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getClusterSpec}
         * @param clusterSpec Property clusterSpec: The managed cluster spec.
         *                    Value:
         *                    ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
         *                    ack.standard: Standard hosting cluster.
         *                    Default value: ack.pro.small.
         * @return {@code this}
         */
        public Builder clusterSpec(java.lang.String clusterSpec) {
            this.clusterSpec = clusterSpec;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getClusterSpec}
         * @param clusterSpec Property clusterSpec: The managed cluster spec.
         *                    Value:
         *                    ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
         *                    ack.standard: Standard hosting cluster.
         *                    Default value: ack.pro.small.
         * @return {@code this}
         */
        public Builder clusterSpec(com.aliyun.ros.cdk.core.IResolvable clusterSpec) {
            this.clusterSpec = clusterSpec;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getComputeClass}
         * @param computeClass Property computeClass: The compute class of the cluster.
         *                     This parameter is only used as a parameter query for ZoneIds and is not used in the actual creation.
         * @return {@code this}
         */
        public Builder computeClass(java.lang.String computeClass) {
            this.computeClass = computeClass;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getComputeClass}
         * @param computeClass Property computeClass: The compute class of the cluster.
         *                     This parameter is only used as a parameter query for ZoneIds and is not used in the actual creation.
         * @return {@code this}
         */
        public Builder computeClass(com.aliyun.ros.cdk.core.IResolvable computeClass) {
            this.computeClass = computeClass;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getDeleteOptions}
         * @param deleteOptions Property deleteOptions: Delete options, only work for deleting resource.
         * @return {@code this}
         */
        public Builder deleteOptions(com.aliyun.ros.cdk.core.IResolvable deleteOptions) {
            this.deleteOptions = deleteOptions;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getDeleteOptions}
         * @param deleteOptions Property deleteOptions: Delete options, only work for deleting resource.
         * @return {@code this}
         */
        public Builder deleteOptions(java.util.List<? extends java.lang.Object> deleteOptions) {
            this.deleteOptions = deleteOptions;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getDeletionProtection}
         * @param deletionProtection Property deletionProtection: Specifies whether to enable deletion protection for the cluster.
         *                           After deletion protection is enabled, the cluster cannot be deleted
         *                           in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
         *                           false: disables deletion protection for the cluster.
         *                           Default value: false.
         * @return {@code this}
         */
        public Builder deletionProtection(java.lang.Boolean deletionProtection) {
            this.deletionProtection = deletionProtection;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getDeletionProtection}
         * @param deletionProtection Property deletionProtection: Specifies whether to enable deletion protection for the cluster.
         *                           After deletion protection is enabled, the cluster cannot be deleted
         *                           in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
         *                           false: disables deletion protection for the cluster.
         *                           Default value: false.
         * @return {@code this}
         */
        public Builder deletionProtection(com.aliyun.ros.cdk.core.IResolvable deletionProtection) {
            this.deletionProtection = deletionProtection;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getEndpointPublicAccess}
         * @param endpointPublicAccess Property endpointPublicAccess: Whether to enable the public network API Server: true: which means that the public network API Server is open.
         *                             false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
         * @return {@code this}
         */
        public Builder endpointPublicAccess(java.lang.Boolean endpointPublicAccess) {
            this.endpointPublicAccess = endpointPublicAccess;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getEndpointPublicAccess}
         * @param endpointPublicAccess Property endpointPublicAccess: Whether to enable the public network API Server: true: which means that the public network API Server is open.
         *                             false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
         * @return {@code this}
         */
        public Builder endpointPublicAccess(com.aliyun.ros.cdk.core.IResolvable endpointPublicAccess) {
            this.endpointPublicAccess = endpointPublicAccess;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getIpStack}
         * @param ipStack Property ipStack: The IP stack of the cluster.
         * @return {@code this}
         */
        public Builder ipStack(java.lang.String ipStack) {
            this.ipStack = ipStack;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getIpStack}
         * @param ipStack Property ipStack: The IP stack of the cluster.
         * @return {@code this}
         */
        public Builder ipStack(com.aliyun.ros.cdk.core.IResolvable ipStack) {
            this.ipStack = ipStack;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getIsEnterpriseSecurityGroup}
         * @param isEnterpriseSecurityGroup Property isEnterpriseSecurityGroup: Specifies whether to create an advanced security group.
         *                                  This parameter takes effect only if security_group_id is left empty.
         *                                  Note You must specify an advanced security group for a cluster that has Terway installed.
         *                                  true: creates an advanced security group.
         *                                  false: does not create an advanced security group.
         *                                  Default value: false.
         * @return {@code this}
         */
        public Builder isEnterpriseSecurityGroup(java.lang.Boolean isEnterpriseSecurityGroup) {
            this.isEnterpriseSecurityGroup = isEnterpriseSecurityGroup;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getIsEnterpriseSecurityGroup}
         * @param isEnterpriseSecurityGroup Property isEnterpriseSecurityGroup: Specifies whether to create an advanced security group.
         *                                  This parameter takes effect only if security_group_id is left empty.
         *                                  Note You must specify an advanced security group for a cluster that has Terway installed.
         *                                  true: creates an advanced security group.
         *                                  false: does not create an advanced security group.
         *                                  Default value: false.
         * @return {@code this}
         */
        public Builder isEnterpriseSecurityGroup(com.aliyun.ros.cdk.core.IResolvable isEnterpriseSecurityGroup) {
            this.isEnterpriseSecurityGroup = isEnterpriseSecurityGroup;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getKubernetesVersion}
         * @param kubernetesVersion Property kubernetesVersion: The version of the Kubernetes cluster.
         * @return {@code this}
         */
        public Builder kubernetesVersion(java.lang.String kubernetesVersion) {
            this.kubernetesVersion = kubernetesVersion;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getKubernetesVersion}
         * @param kubernetesVersion Property kubernetesVersion: The version of the Kubernetes cluster.
         * @return {@code this}
         */
        public Builder kubernetesVersion(com.aliyun.ros.cdk.core.IResolvable kubernetesVersion) {
            this.kubernetesVersion = kubernetesVersion;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getLoadBalancerSpec}
         * @param loadBalancerSpec Property loadBalancerSpec: The specification of the Server Load Balancer instance.
         *                         Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large
         * @return {@code this}
         */
        public Builder loadBalancerSpec(java.lang.String loadBalancerSpec) {
            this.loadBalancerSpec = loadBalancerSpec;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getLoadBalancerSpec}
         * @param loadBalancerSpec Property loadBalancerSpec: The specification of the Server Load Balancer instance.
         *                         Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large
         * @return {@code this}
         */
        public Builder loadBalancerSpec(com.aliyun.ros.cdk.core.IResolvable loadBalancerSpec) {
            this.loadBalancerSpec = loadBalancerSpec;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getLoggingType}
         * @param loggingType Property loggingType: The logging type of the cluster.
         *                    By default, no logging service is used.
         * @return {@code this}
         */
        public Builder loggingType(java.lang.String loggingType) {
            this.loggingType = loggingType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getLoggingType}
         * @param loggingType Property loggingType: The logging type of the cluster.
         *                    By default, no logging service is used.
         * @return {@code this}
         */
        public Builder loggingType(com.aliyun.ros.cdk.core.IResolvable loggingType) {
            this.loggingType = loggingType;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getMaintenanceWindow}
         * @param maintenanceWindow Property maintenanceWindow: The maintenance window of the cluster.
         * @return {@code this}
         */
        public Builder maintenanceWindow(com.aliyun.ros.cdk.core.IResolvable maintenanceWindow) {
            this.maintenanceWindow = maintenanceWindow;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getMaintenanceWindow}
         * @param maintenanceWindow Property maintenanceWindow: The maintenance window of the cluster.
         * @return {@code this}
         */
        public Builder maintenanceWindow(com.aliyun.ros.cdk.acs.RosCluster.MaintenanceWindowProperty maintenanceWindow) {
            this.maintenanceWindow = maintenanceWindow;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getPodPostpaidSpec}
         * @param podPostpaidSpec Property podPostpaidSpec: Postpaid pod spec for inquiry.
         * @return {@code this}
         */
        public Builder podPostpaidSpec(com.aliyun.ros.cdk.core.IResolvable podPostpaidSpec) {
            this.podPostpaidSpec = podPostpaidSpec;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getPodPostpaidSpec}
         * @param podPostpaidSpec Property podPostpaidSpec: Postpaid pod spec for inquiry.
         * @return {@code this}
         */
        public Builder podPostpaidSpec(com.aliyun.ros.cdk.acs.RosCluster.PodPostpaidSpecProperty podPostpaidSpec) {
            this.podPostpaidSpec = podPostpaidSpec;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getPodVSwitchIds}
         * @param podVSwitchIds Property podVSwitchIds: The list of pod vSwitches.
         *                      For each vSwitch that is allocated to nodes,
         *                      you must specify at least one pod vSwitch in the same zone.
         *                      The pod vSwitches cannot be the same as the node vSwitches.
         *                      We recommend that you set the mask length of the CIDR block to a value no
         *                      greater than 19 for the pod vSwitches.
         *                      The pod_vswitch_ids parameter is required when the Terway network
         *                      plug-in is selected for the cluster.
         * @return {@code this}
         */
        public Builder podVSwitchIds(com.aliyun.ros.cdk.core.IResolvable podVSwitchIds) {
            this.podVSwitchIds = podVSwitchIds;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getPodVSwitchIds}
         * @param podVSwitchIds Property podVSwitchIds: The list of pod vSwitches.
         *                      For each vSwitch that is allocated to nodes,
         *                      you must specify at least one pod vSwitch in the same zone.
         *                      The pod vSwitches cannot be the same as the node vSwitches.
         *                      We recommend that you set the mask length of the CIDR block to a value no
         *                      greater than 19 for the pod vSwitches.
         *                      The pod_vswitch_ids parameter is required when the Terway network
         *                      plug-in is selected for the cluster.
         * @return {@code this}
         */
        public Builder podVSwitchIds(java.util.List<? extends java.lang.Object> podVSwitchIds) {
            this.podVSwitchIds = podVSwitchIds;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getServiceCidr}
         * @param serviceCidr Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment.
         *                    When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
         * @return {@code this}
         */
        public Builder serviceCidr(java.lang.String serviceCidr) {
            this.serviceCidr = serviceCidr;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getServiceCidr}
         * @param serviceCidr Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment.
         *                    When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
         * @return {@code this}
         */
        public Builder serviceCidr(com.aliyun.ros.cdk.core.IResolvable serviceCidr) {
            this.serviceCidr = serviceCidr;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getServiceDiscoveryTypes}
         * @param serviceDiscoveryTypes Property serviceDiscoveryTypes: Intra-cluster service discovery type, used to specify the service discovery method in the ASK cluster.
         *                              CoreDNS: To use Kubernetes native standard service discovery component CoreDNS,
         *                              a set of containers needs to be deployed in the cluster for DNS resolution.
         *                              By default, two ECI instances with a size of 0.25 Core and 512 MiB are used.
         *                              PrivateZone: To use Alibaba Cloud PrivateZone products to provide service discovery capabilities,
         *                              the PrivateZone service needs to be enabled.
         *                              Default value: off
         * @return {@code this}
         */
        public Builder serviceDiscoveryTypes(com.aliyun.ros.cdk.core.IResolvable serviceDiscoveryTypes) {
            this.serviceDiscoveryTypes = serviceDiscoveryTypes;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getServiceDiscoveryTypes}
         * @param serviceDiscoveryTypes Property serviceDiscoveryTypes: Intra-cluster service discovery type, used to specify the service discovery method in the ASK cluster.
         *                              CoreDNS: To use Kubernetes native standard service discovery component CoreDNS,
         *                              a set of containers needs to be deployed in the cluster for DNS resolution.
         *                              By default, two ECI instances with a size of 0.25 Core and 512 MiB are used.
         *                              PrivateZone: To use Alibaba Cloud PrivateZone products to provide service discovery capabilities,
         *                              the PrivateZone service needs to be enabled.
         *                              Default value: off
         * @return {@code this}
         */
        public Builder serviceDiscoveryTypes(java.util.List<? extends java.lang.Object> serviceDiscoveryTypes) {
            this.serviceDiscoveryTypes = serviceDiscoveryTypes;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getSlsProjectName}
         * @param slsProjectName Property slsProjectName: The SLS project name of the cluster.
         *                       If LoggingType is set to SLS and SlsProjectName is empty, a new Project is created.
         * @return {@code this}
         */
        public Builder slsProjectName(java.lang.String slsProjectName) {
            this.slsProjectName = slsProjectName;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getSlsProjectName}
         * @param slsProjectName Property slsProjectName: The SLS project name of the cluster.
         *                       If LoggingType is set to SLS and SlsProjectName is empty, a new Project is created.
         * @return {@code this}
         */
        public Builder slsProjectName(com.aliyun.ros.cdk.core.IResolvable slsProjectName) {
            this.slsProjectName = slsProjectName;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getSnatEntry}
         * @param snatEntry Property snatEntry: Whether to configure SNAT for the network.
         *                  When a VPC can access the public network environment, set it to false.
         *                  When an existing VPC cannot access the public network environment:
         *                  When set to True, SNAT is configured and the public network environment can be accessed at this time.
         *                  If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
         *                  Default to true.
         * @return {@code this}
         */
        public Builder snatEntry(java.lang.Boolean snatEntry) {
            this.snatEntry = snatEntry;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getSnatEntry}
         * @param snatEntry Property snatEntry: Whether to configure SNAT for the network.
         *                  When a VPC can access the public network environment, set it to false.
         *                  When an existing VPC cannot access the public network environment:
         *                  When set to True, SNAT is configured and the public network environment can be accessed at this time.
         *                  If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
         *                  Default to true.
         * @return {@code this}
         */
        public Builder snatEntry(com.aliyun.ros.cdk.core.IResolvable snatEntry) {
            this.snatEntry = snatEntry;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getTags}
         * @param tags Property tags: Tag the cluster.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.acs.RosCluster.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.acs.RosCluster.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getTimeZone}
         * @param timeZone Property timeZone: The time zone of the cluster.
         * @return {@code this}
         */
        public Builder timeZone(java.lang.String timeZone) {
            this.timeZone = timeZone;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getTimeZone}
         * @param timeZone Property timeZone: The time zone of the cluster.
         * @return {@code this}
         */
        public Builder timeZone(com.aliyun.ros.cdk.core.IResolvable timeZone) {
            this.timeZone = timeZone;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getVpcId}
         * @param vpcId Property vpcId: VPC ID.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getVpcId}
         * @param vpcId Property vpcId: VPC ID.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getVSwitchIds}
         * @param vSwitchIds Property vSwitchIds: The IDs of VSwitches.
         *                   If you leave this property empty, the system automatically creates a VSwitch.
         *                   Note You must specify both the VpcId and VSwitchIds or leave both of them empty.
         * @return {@code this}
         */
        public Builder vSwitchIds(com.aliyun.ros.cdk.core.IResolvable vSwitchIds) {
            this.vSwitchIds = vSwitchIds;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getVSwitchIds}
         * @param vSwitchIds Property vSwitchIds: The IDs of VSwitches.
         *                   If you leave this property empty, the system automatically creates a VSwitch.
         *                   Note You must specify both the VpcId and VSwitchIds or leave both of them empty.
         * @return {@code this}
         */
        public Builder vSwitchIds(java.util.List<? extends java.lang.Object> vSwitchIds) {
            this.vSwitchIds = vSwitchIds;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getZoneIds}
         * @param zoneIds Property zoneIds: The zone IDs of the cluster.
         * @return {@code this}
         */
        public Builder zoneIds(com.aliyun.ros.cdk.core.IResolvable zoneIds) {
            this.zoneIds = zoneIds;
            return this;
        }

        /**
         * Sets the value of {@link ClusterProps#getZoneIds}
         * @param zoneIds Property zoneIds: The zone IDs of the cluster.
         * @return {@code this}
         */
        public Builder zoneIds(java.util.List<? extends java.lang.Object> zoneIds) {
            this.zoneIds = zoneIds;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ClusterProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ClusterProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ClusterProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ClusterProps {
        private final java.lang.Object name;
        private final java.lang.Object addons;
        private final java.lang.Object clusterSpec;
        private final java.lang.Object computeClass;
        private final java.lang.Object deleteOptions;
        private final java.lang.Object deletionProtection;
        private final java.lang.Object endpointPublicAccess;
        private final java.lang.Object ipStack;
        private final java.lang.Object isEnterpriseSecurityGroup;
        private final java.lang.Object kubernetesVersion;
        private final java.lang.Object loadBalancerSpec;
        private final java.lang.Object loggingType;
        private final java.lang.Object maintenanceWindow;
        private final java.lang.Object podPostpaidSpec;
        private final java.lang.Object podVSwitchIds;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object serviceCidr;
        private final java.lang.Object serviceDiscoveryTypes;
        private final java.lang.Object slsProjectName;
        private final java.lang.Object snatEntry;
        private final java.util.List<com.aliyun.ros.cdk.acs.RosCluster.TagsProperty> tags;
        private final java.lang.Object timeZone;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchIds;
        private final java.lang.Object zoneIds;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.addons = software.amazon.jsii.Kernel.get(this, "addons", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clusterSpec = software.amazon.jsii.Kernel.get(this, "clusterSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.computeClass = software.amazon.jsii.Kernel.get(this, "computeClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deleteOptions = software.amazon.jsii.Kernel.get(this, "deleteOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deletionProtection = software.amazon.jsii.Kernel.get(this, "deletionProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endpointPublicAccess = software.amazon.jsii.Kernel.get(this, "endpointPublicAccess", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipStack = software.amazon.jsii.Kernel.get(this, "ipStack", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.isEnterpriseSecurityGroup = software.amazon.jsii.Kernel.get(this, "isEnterpriseSecurityGroup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.kubernetesVersion = software.amazon.jsii.Kernel.get(this, "kubernetesVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loadBalancerSpec = software.amazon.jsii.Kernel.get(this, "loadBalancerSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loggingType = software.amazon.jsii.Kernel.get(this, "loggingType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.maintenanceWindow = software.amazon.jsii.Kernel.get(this, "maintenanceWindow", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.podPostpaidSpec = software.amazon.jsii.Kernel.get(this, "podPostpaidSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.podVSwitchIds = software.amazon.jsii.Kernel.get(this, "podVSwitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serviceCidr = software.amazon.jsii.Kernel.get(this, "serviceCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serviceDiscoveryTypes = software.amazon.jsii.Kernel.get(this, "serviceDiscoveryTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.slsProjectName = software.amazon.jsii.Kernel.get(this, "slsProjectName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.snatEntry = software.amazon.jsii.Kernel.get(this, "snatEntry", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.acs.RosCluster.TagsProperty.class)));
            this.timeZone = software.amazon.jsii.Kernel.get(this, "timeZone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchIds = software.amazon.jsii.Kernel.get(this, "vSwitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneIds = software.amazon.jsii.Kernel.get(this, "zoneIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.addons = builder.addons;
            this.clusterSpec = builder.clusterSpec;
            this.computeClass = builder.computeClass;
            this.deleteOptions = builder.deleteOptions;
            this.deletionProtection = builder.deletionProtection;
            this.endpointPublicAccess = builder.endpointPublicAccess;
            this.ipStack = builder.ipStack;
            this.isEnterpriseSecurityGroup = builder.isEnterpriseSecurityGroup;
            this.kubernetesVersion = builder.kubernetesVersion;
            this.loadBalancerSpec = builder.loadBalancerSpec;
            this.loggingType = builder.loggingType;
            this.maintenanceWindow = builder.maintenanceWindow;
            this.podPostpaidSpec = builder.podPostpaidSpec;
            this.podVSwitchIds = builder.podVSwitchIds;
            this.resourceGroupId = builder.resourceGroupId;
            this.serviceCidr = builder.serviceCidr;
            this.serviceDiscoveryTypes = builder.serviceDiscoveryTypes;
            this.slsProjectName = builder.slsProjectName;
            this.snatEntry = builder.snatEntry;
            this.tags = (java.util.List<com.aliyun.ros.cdk.acs.RosCluster.TagsProperty>)builder.tags;
            this.timeZone = builder.timeZone;
            this.vpcId = builder.vpcId;
            this.vSwitchIds = builder.vSwitchIds;
            this.zoneIds = builder.zoneIds;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getAddons() {
            return this.addons;
        }

        @Override
        public final java.lang.Object getClusterSpec() {
            return this.clusterSpec;
        }

        @Override
        public final java.lang.Object getComputeClass() {
            return this.computeClass;
        }

        @Override
        public final java.lang.Object getDeleteOptions() {
            return this.deleteOptions;
        }

        @Override
        public final java.lang.Object getDeletionProtection() {
            return this.deletionProtection;
        }

        @Override
        public final java.lang.Object getEndpointPublicAccess() {
            return this.endpointPublicAccess;
        }

        @Override
        public final java.lang.Object getIpStack() {
            return this.ipStack;
        }

        @Override
        public final java.lang.Object getIsEnterpriseSecurityGroup() {
            return this.isEnterpriseSecurityGroup;
        }

        @Override
        public final java.lang.Object getKubernetesVersion() {
            return this.kubernetesVersion;
        }

        @Override
        public final java.lang.Object getLoadBalancerSpec() {
            return this.loadBalancerSpec;
        }

        @Override
        public final java.lang.Object getLoggingType() {
            return this.loggingType;
        }

        @Override
        public final java.lang.Object getMaintenanceWindow() {
            return this.maintenanceWindow;
        }

        @Override
        public final java.lang.Object getPodPostpaidSpec() {
            return this.podPostpaidSpec;
        }

        @Override
        public final java.lang.Object getPodVSwitchIds() {
            return this.podVSwitchIds;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getServiceCidr() {
            return this.serviceCidr;
        }

        @Override
        public final java.lang.Object getServiceDiscoveryTypes() {
            return this.serviceDiscoveryTypes;
        }

        @Override
        public final java.lang.Object getSlsProjectName() {
            return this.slsProjectName;
        }

        @Override
        public final java.lang.Object getSnatEntry() {
            return this.snatEntry;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.acs.RosCluster.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getTimeZone() {
            return this.timeZone;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getVSwitchIds() {
            return this.vSwitchIds;
        }

        @Override
        public final java.lang.Object getZoneIds() {
            return this.zoneIds;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("name", om.valueToTree(this.getName()));
            if (this.getAddons() != null) {
                data.set("addons", om.valueToTree(this.getAddons()));
            }
            if (this.getClusterSpec() != null) {
                data.set("clusterSpec", om.valueToTree(this.getClusterSpec()));
            }
            if (this.getComputeClass() != null) {
                data.set("computeClass", om.valueToTree(this.getComputeClass()));
            }
            if (this.getDeleteOptions() != null) {
                data.set("deleteOptions", om.valueToTree(this.getDeleteOptions()));
            }
            if (this.getDeletionProtection() != null) {
                data.set("deletionProtection", om.valueToTree(this.getDeletionProtection()));
            }
            if (this.getEndpointPublicAccess() != null) {
                data.set("endpointPublicAccess", om.valueToTree(this.getEndpointPublicAccess()));
            }
            if (this.getIpStack() != null) {
                data.set("ipStack", om.valueToTree(this.getIpStack()));
            }
            if (this.getIsEnterpriseSecurityGroup() != null) {
                data.set("isEnterpriseSecurityGroup", om.valueToTree(this.getIsEnterpriseSecurityGroup()));
            }
            if (this.getKubernetesVersion() != null) {
                data.set("kubernetesVersion", om.valueToTree(this.getKubernetesVersion()));
            }
            if (this.getLoadBalancerSpec() != null) {
                data.set("loadBalancerSpec", om.valueToTree(this.getLoadBalancerSpec()));
            }
            if (this.getLoggingType() != null) {
                data.set("loggingType", om.valueToTree(this.getLoggingType()));
            }
            if (this.getMaintenanceWindow() != null) {
                data.set("maintenanceWindow", om.valueToTree(this.getMaintenanceWindow()));
            }
            if (this.getPodPostpaidSpec() != null) {
                data.set("podPostpaidSpec", om.valueToTree(this.getPodPostpaidSpec()));
            }
            if (this.getPodVSwitchIds() != null) {
                data.set("podVSwitchIds", om.valueToTree(this.getPodVSwitchIds()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getServiceCidr() != null) {
                data.set("serviceCidr", om.valueToTree(this.getServiceCidr()));
            }
            if (this.getServiceDiscoveryTypes() != null) {
                data.set("serviceDiscoveryTypes", om.valueToTree(this.getServiceDiscoveryTypes()));
            }
            if (this.getSlsProjectName() != null) {
                data.set("slsProjectName", om.valueToTree(this.getSlsProjectName()));
            }
            if (this.getSnatEntry() != null) {
                data.set("snatEntry", om.valueToTree(this.getSnatEntry()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getTimeZone() != null) {
                data.set("timeZone", om.valueToTree(this.getTimeZone()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }
            if (this.getVSwitchIds() != null) {
                data.set("vSwitchIds", om.valueToTree(this.getVSwitchIds()));
            }
            if (this.getZoneIds() != null) {
                data.set("zoneIds", om.valueToTree(this.getZoneIds()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-acs.ClusterProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ClusterProps.Jsii$Proxy that = (ClusterProps.Jsii$Proxy) o;

            if (!name.equals(that.name)) return false;
            if (this.addons != null ? !this.addons.equals(that.addons) : that.addons != null) return false;
            if (this.clusterSpec != null ? !this.clusterSpec.equals(that.clusterSpec) : that.clusterSpec != null) return false;
            if (this.computeClass != null ? !this.computeClass.equals(that.computeClass) : that.computeClass != null) return false;
            if (this.deleteOptions != null ? !this.deleteOptions.equals(that.deleteOptions) : that.deleteOptions != null) return false;
            if (this.deletionProtection != null ? !this.deletionProtection.equals(that.deletionProtection) : that.deletionProtection != null) return false;
            if (this.endpointPublicAccess != null ? !this.endpointPublicAccess.equals(that.endpointPublicAccess) : that.endpointPublicAccess != null) return false;
            if (this.ipStack != null ? !this.ipStack.equals(that.ipStack) : that.ipStack != null) return false;
            if (this.isEnterpriseSecurityGroup != null ? !this.isEnterpriseSecurityGroup.equals(that.isEnterpriseSecurityGroup) : that.isEnterpriseSecurityGroup != null) return false;
            if (this.kubernetesVersion != null ? !this.kubernetesVersion.equals(that.kubernetesVersion) : that.kubernetesVersion != null) return false;
            if (this.loadBalancerSpec != null ? !this.loadBalancerSpec.equals(that.loadBalancerSpec) : that.loadBalancerSpec != null) return false;
            if (this.loggingType != null ? !this.loggingType.equals(that.loggingType) : that.loggingType != null) return false;
            if (this.maintenanceWindow != null ? !this.maintenanceWindow.equals(that.maintenanceWindow) : that.maintenanceWindow != null) return false;
            if (this.podPostpaidSpec != null ? !this.podPostpaidSpec.equals(that.podPostpaidSpec) : that.podPostpaidSpec != null) return false;
            if (this.podVSwitchIds != null ? !this.podVSwitchIds.equals(that.podVSwitchIds) : that.podVSwitchIds != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.serviceCidr != null ? !this.serviceCidr.equals(that.serviceCidr) : that.serviceCidr != null) return false;
            if (this.serviceDiscoveryTypes != null ? !this.serviceDiscoveryTypes.equals(that.serviceDiscoveryTypes) : that.serviceDiscoveryTypes != null) return false;
            if (this.slsProjectName != null ? !this.slsProjectName.equals(that.slsProjectName) : that.slsProjectName != null) return false;
            if (this.snatEntry != null ? !this.snatEntry.equals(that.snatEntry) : that.snatEntry != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.timeZone != null ? !this.timeZone.equals(that.timeZone) : that.timeZone != null) return false;
            if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
            if (this.vSwitchIds != null ? !this.vSwitchIds.equals(that.vSwitchIds) : that.vSwitchIds != null) return false;
            return this.zoneIds != null ? this.zoneIds.equals(that.zoneIds) : that.zoneIds == null;
        }

        @Override
        public final int hashCode() {
            int result = this.name.hashCode();
            result = 31 * result + (this.addons != null ? this.addons.hashCode() : 0);
            result = 31 * result + (this.clusterSpec != null ? this.clusterSpec.hashCode() : 0);
            result = 31 * result + (this.computeClass != null ? this.computeClass.hashCode() : 0);
            result = 31 * result + (this.deleteOptions != null ? this.deleteOptions.hashCode() : 0);
            result = 31 * result + (this.deletionProtection != null ? this.deletionProtection.hashCode() : 0);
            result = 31 * result + (this.endpointPublicAccess != null ? this.endpointPublicAccess.hashCode() : 0);
            result = 31 * result + (this.ipStack != null ? this.ipStack.hashCode() : 0);
            result = 31 * result + (this.isEnterpriseSecurityGroup != null ? this.isEnterpriseSecurityGroup.hashCode() : 0);
            result = 31 * result + (this.kubernetesVersion != null ? this.kubernetesVersion.hashCode() : 0);
            result = 31 * result + (this.loadBalancerSpec != null ? this.loadBalancerSpec.hashCode() : 0);
            result = 31 * result + (this.loggingType != null ? this.loggingType.hashCode() : 0);
            result = 31 * result + (this.maintenanceWindow != null ? this.maintenanceWindow.hashCode() : 0);
            result = 31 * result + (this.podPostpaidSpec != null ? this.podPostpaidSpec.hashCode() : 0);
            result = 31 * result + (this.podVSwitchIds != null ? this.podVSwitchIds.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.serviceCidr != null ? this.serviceCidr.hashCode() : 0);
            result = 31 * result + (this.serviceDiscoveryTypes != null ? this.serviceDiscoveryTypes.hashCode() : 0);
            result = 31 * result + (this.slsProjectName != null ? this.slsProjectName.hashCode() : 0);
            result = 31 * result + (this.snatEntry != null ? this.snatEntry.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.timeZone != null ? this.timeZone.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            result = 31 * result + (this.vSwitchIds != null ? this.vSwitchIds.hashCode() : 0);
            result = 31 * result + (this.zoneIds != null ? this.zoneIds.hashCode() : 0);
            return result;
        }
    }
}
