package com.aliyun.ros.cdk.acs;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ACS::Cluster</code>, which is used to create a Container Compute Service (ACS) cluster.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:20.339Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.acs.$Module.class, fqn = "@alicloud/ros-cdk-acs.Cluster")
public class Cluster extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.acs.ICluster {

    protected Cluster(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Cluster(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Cluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.acs.ClusterProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Cluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.acs.ClusterProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute APIServerSLBId: The id of API server SLB.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrApiServerSlbId() {
        return software.amazon.jsii.Kernel.get(this, "attrApiServerSlbId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ClusterId: Cluster instance ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DefaultUserKubeConfig: Default user kubernetes config which is used for configuring cluster credentials.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDefaultUserKubeConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrDefaultUserKubeConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute IngressSLBId: The id of ingress SLB.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIngressSlbId() {
        return software.amazon.jsii.Kernel.get(this, "attrIngressSlbId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Nodes: The list of cluster nodes.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNodes() {
        return software.amazon.jsii.Kernel.get(this, "attrNodes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PrivateUserKubConfig: Private user kubernetes config which is used for configuring cluster credentials.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateUserKubConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrPrivateUserKubConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ScalingConfigurationId: Scaling configuration id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingConfigurationId() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingConfigurationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ScalingGroupId: Scaling group id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ScalingRuleId: Scaling rule id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrScalingRuleId() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TaskId: Task ID.
     * <p>
     * Automatically assigned by the system, the user queries the task status.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTaskId() {
        return software.amazon.jsii.Kernel.get(this, "attrTaskId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute WorkerRamRoleName: Worker ram role name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkerRamRoleName() {
        return software.amazon.jsii.Kernel.get(this, "attrWorkerRamRoleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.acs.ClusterProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.acs.ClusterProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.acs.Cluster}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.acs.Cluster> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.acs.ClusterProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.acs.ClusterProps.Builder();
        }

        /**
         * Property name: The name of the cluster.
         * <p>
         * The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the cluster. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The name of the cluster.
         * <p>
         * The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the cluster. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property addons: The add-ons to be installed for the cluster.
         * <p>
         * @return {@code this}
         * @param addons Property addons: The add-ons to be installed for the cluster. This parameter is required.
         */
        public Builder addons(final com.aliyun.ros.cdk.core.IResolvable addons) {
            this.props.addons(addons);
            return this;
        }
        /**
         * Property addons: The add-ons to be installed for the cluster.
         * <p>
         * @return {@code this}
         * @param addons Property addons: The add-ons to be installed for the cluster. This parameter is required.
         */
        public Builder addons(final java.util.List<? extends java.lang.Object> addons) {
            this.props.addons(addons);
            return this;
        }

        /**
         * Property clusterSpec: The managed cluster spec.
         * <p>
         * Value:
         * ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
         * ack.standard: Standard hosting cluster.
         * Default value: ack.pro.small.
         * <p>
         * @return {@code this}
         * @param clusterSpec Property clusterSpec: The managed cluster spec. This parameter is required.
         */
        public Builder clusterSpec(final java.lang.String clusterSpec) {
            this.props.clusterSpec(clusterSpec);
            return this;
        }
        /**
         * Property clusterSpec: The managed cluster spec.
         * <p>
         * Value:
         * ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
         * ack.standard: Standard hosting cluster.
         * Default value: ack.pro.small.
         * <p>
         * @return {@code this}
         * @param clusterSpec Property clusterSpec: The managed cluster spec. This parameter is required.
         */
        public Builder clusterSpec(final com.aliyun.ros.cdk.core.IResolvable clusterSpec) {
            this.props.clusterSpec(clusterSpec);
            return this;
        }

        /**
         * Property computeClass: The compute class of the cluster.
         * <p>
         * This parameter is only used as a parameter query for ZoneIds and is not used in the actual creation.
         * <p>
         * @return {@code this}
         * @param computeClass Property computeClass: The compute class of the cluster. This parameter is required.
         */
        public Builder computeClass(final java.lang.String computeClass) {
            this.props.computeClass(computeClass);
            return this;
        }
        /**
         * Property computeClass: The compute class of the cluster.
         * <p>
         * This parameter is only used as a parameter query for ZoneIds and is not used in the actual creation.
         * <p>
         * @return {@code this}
         * @param computeClass Property computeClass: The compute class of the cluster. This parameter is required.
         */
        public Builder computeClass(final com.aliyun.ros.cdk.core.IResolvable computeClass) {
            this.props.computeClass(computeClass);
            return this;
        }

        /**
         * Property deleteOptions: Delete options, only work for deleting resource.
         * <p>
         * @return {@code this}
         * @param deleteOptions Property deleteOptions: Delete options, only work for deleting resource. This parameter is required.
         */
        public Builder deleteOptions(final com.aliyun.ros.cdk.core.IResolvable deleteOptions) {
            this.props.deleteOptions(deleteOptions);
            return this;
        }
        /**
         * Property deleteOptions: Delete options, only work for deleting resource.
         * <p>
         * @return {@code this}
         * @param deleteOptions Property deleteOptions: Delete options, only work for deleting resource. This parameter is required.
         */
        public Builder deleteOptions(final java.util.List<? extends java.lang.Object> deleteOptions) {
            this.props.deleteOptions(deleteOptions);
            return this;
        }

        /**
         * Property deletionProtection: Specifies whether to enable deletion protection for the cluster.
         * <p>
         * After deletion protection is enabled, the cluster cannot be deleted
         * in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
         * false: disables deletion protection for the cluster.
         * Default value: false.
         * <p>
         * @return {@code this}
         * @param deletionProtection Property deletionProtection: Specifies whether to enable deletion protection for the cluster. This parameter is required.
         */
        public Builder deletionProtection(final java.lang.Boolean deletionProtection) {
            this.props.deletionProtection(deletionProtection);
            return this;
        }
        /**
         * Property deletionProtection: Specifies whether to enable deletion protection for the cluster.
         * <p>
         * After deletion protection is enabled, the cluster cannot be deleted
         * in the ACK console or by calling API operations. Valid values:true: enables deletion protection for the cluster.
         * false: disables deletion protection for the cluster.
         * Default value: false.
         * <p>
         * @return {@code this}
         * @param deletionProtection Property deletionProtection: Specifies whether to enable deletion protection for the cluster. This parameter is required.
         */
        public Builder deletionProtection(final com.aliyun.ros.cdk.core.IResolvable deletionProtection) {
            this.props.deletionProtection(deletionProtection);
            return this;
        }

        /**
         * Property endpointPublicAccess: Whether to enable the public network API Server: true: which means that the public network API Server is open.
         * <p>
         * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
         * <p>
         * @return {@code this}
         * @param endpointPublicAccess Property endpointPublicAccess: Whether to enable the public network API Server: true: which means that the public network API Server is open. This parameter is required.
         */
        public Builder endpointPublicAccess(final java.lang.Boolean endpointPublicAccess) {
            this.props.endpointPublicAccess(endpointPublicAccess);
            return this;
        }
        /**
         * Property endpointPublicAccess: Whether to enable the public network API Server: true: which means that the public network API Server is open.
         * <p>
         * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
         * <p>
         * @return {@code this}
         * @param endpointPublicAccess Property endpointPublicAccess: Whether to enable the public network API Server: true: which means that the public network API Server is open. This parameter is required.
         */
        public Builder endpointPublicAccess(final com.aliyun.ros.cdk.core.IResolvable endpointPublicAccess) {
            this.props.endpointPublicAccess(endpointPublicAccess);
            return this;
        }

        /**
         * Property ipStack: The IP stack of the cluster.
         * <p>
         * @return {@code this}
         * @param ipStack Property ipStack: The IP stack of the cluster. This parameter is required.
         */
        public Builder ipStack(final java.lang.String ipStack) {
            this.props.ipStack(ipStack);
            return this;
        }
        /**
         * Property ipStack: The IP stack of the cluster.
         * <p>
         * @return {@code this}
         * @param ipStack Property ipStack: The IP stack of the cluster. This parameter is required.
         */
        public Builder ipStack(final com.aliyun.ros.cdk.core.IResolvable ipStack) {
            this.props.ipStack(ipStack);
            return this;
        }

        /**
         * Property kubernetesVersion: The version of the Kubernetes cluster.
         * <p>
         * @return {@code this}
         * @param kubernetesVersion Property kubernetesVersion: The version of the Kubernetes cluster. This parameter is required.
         */
        public Builder kubernetesVersion(final java.lang.String kubernetesVersion) {
            this.props.kubernetesVersion(kubernetesVersion);
            return this;
        }
        /**
         * Property kubernetesVersion: The version of the Kubernetes cluster.
         * <p>
         * @return {@code this}
         * @param kubernetesVersion Property kubernetesVersion: The version of the Kubernetes cluster. This parameter is required.
         */
        public Builder kubernetesVersion(final com.aliyun.ros.cdk.core.IResolvable kubernetesVersion) {
            this.props.kubernetesVersion(kubernetesVersion);
            return this;
        }

        /**
         * Property loadBalancerSpec: The specification of the Server Load Balancer instance.
         * <p>
         * Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large
         * <p>
         * @return {@code this}
         * @param loadBalancerSpec Property loadBalancerSpec: The specification of the Server Load Balancer instance. This parameter is required.
         */
        public Builder loadBalancerSpec(final java.lang.String loadBalancerSpec) {
            this.props.loadBalancerSpec(loadBalancerSpec);
            return this;
        }
        /**
         * Property loadBalancerSpec: The specification of the Server Load Balancer instance.
         * <p>
         * Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large
         * <p>
         * @return {@code this}
         * @param loadBalancerSpec Property loadBalancerSpec: The specification of the Server Load Balancer instance. This parameter is required.
         */
        public Builder loadBalancerSpec(final com.aliyun.ros.cdk.core.IResolvable loadBalancerSpec) {
            this.props.loadBalancerSpec(loadBalancerSpec);
            return this;
        }

        /**
         * Property loggingType: The logging type of the cluster.
         * <p>
         * By default, no logging service is used.
         * <p>
         * @return {@code this}
         * @param loggingType Property loggingType: The logging type of the cluster. This parameter is required.
         */
        public Builder loggingType(final java.lang.String loggingType) {
            this.props.loggingType(loggingType);
            return this;
        }
        /**
         * Property loggingType: The logging type of the cluster.
         * <p>
         * By default, no logging service is used.
         * <p>
         * @return {@code this}
         * @param loggingType Property loggingType: The logging type of the cluster. This parameter is required.
         */
        public Builder loggingType(final com.aliyun.ros.cdk.core.IResolvable loggingType) {
            this.props.loggingType(loggingType);
            return this;
        }

        /**
         * Property maintenanceWindow: The maintenance window of the cluster.
         * <p>
         * @return {@code this}
         * @param maintenanceWindow Property maintenanceWindow: The maintenance window of the cluster. This parameter is required.
         */
        public Builder maintenanceWindow(final com.aliyun.ros.cdk.core.IResolvable maintenanceWindow) {
            this.props.maintenanceWindow(maintenanceWindow);
            return this;
        }
        /**
         * Property maintenanceWindow: The maintenance window of the cluster.
         * <p>
         * @return {@code this}
         * @param maintenanceWindow Property maintenanceWindow: The maintenance window of the cluster. This parameter is required.
         */
        public Builder maintenanceWindow(final com.aliyun.ros.cdk.acs.RosCluster.MaintenanceWindowProperty maintenanceWindow) {
            this.props.maintenanceWindow(maintenanceWindow);
            return this;
        }

        /**
         * Property podPostpaidSpec: Postpaid pod spec for inquiry.
         * <p>
         * @return {@code this}
         * @param podPostpaidSpec Property podPostpaidSpec: Postpaid pod spec for inquiry. This parameter is required.
         */
        public Builder podPostpaidSpec(final com.aliyun.ros.cdk.core.IResolvable podPostpaidSpec) {
            this.props.podPostpaidSpec(podPostpaidSpec);
            return this;
        }
        /**
         * Property podPostpaidSpec: Postpaid pod spec for inquiry.
         * <p>
         * @return {@code this}
         * @param podPostpaidSpec Property podPostpaidSpec: Postpaid pod spec for inquiry. This parameter is required.
         */
        public Builder podPostpaidSpec(final com.aliyun.ros.cdk.acs.RosCluster.PodPostpaidSpecProperty podPostpaidSpec) {
            this.props.podPostpaidSpec(podPostpaidSpec);
            return this;
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
         * <p>
         * @return {@code this}
         * @param podVSwitchIds Property podVSwitchIds: The list of pod vSwitches. This parameter is required.
         */
        public Builder podVSwitchIds(final com.aliyun.ros.cdk.core.IResolvable podVSwitchIds) {
            this.props.podVSwitchIds(podVSwitchIds);
            return this;
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
         * <p>
         * @return {@code this}
         * @param podVSwitchIds Property podVSwitchIds: The list of pod vSwitches. This parameter is required.
         */
        public Builder podVSwitchIds(final java.util.List<? extends java.lang.Object> podVSwitchIds) {
            this.props.podVSwitchIds(podVSwitchIds);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of resource group. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of resource group. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment.
         * <p>
         * When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
         * <p>
         * @return {@code this}
         * @param serviceCidr Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. This parameter is required.
         */
        public Builder serviceCidr(final java.lang.String serviceCidr) {
            this.props.serviceCidr(serviceCidr);
            return this;
        }
        /**
         * Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment.
         * <p>
         * When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
         * <p>
         * @return {@code this}
         * @param serviceCidr Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment. This parameter is required.
         */
        public Builder serviceCidr(final com.aliyun.ros.cdk.core.IResolvable serviceCidr) {
            this.props.serviceCidr(serviceCidr);
            return this;
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
         * <p>
         * @return {@code this}
         * @param serviceDiscoveryTypes Property serviceDiscoveryTypes: Intra-cluster service discovery type, used to specify the service discovery method in the ASK cluster. This parameter is required.
         */
        public Builder serviceDiscoveryTypes(final com.aliyun.ros.cdk.core.IResolvable serviceDiscoveryTypes) {
            this.props.serviceDiscoveryTypes(serviceDiscoveryTypes);
            return this;
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
         * <p>
         * @return {@code this}
         * @param serviceDiscoveryTypes Property serviceDiscoveryTypes: Intra-cluster service discovery type, used to specify the service discovery method in the ASK cluster. This parameter is required.
         */
        public Builder serviceDiscoveryTypes(final java.util.List<? extends java.lang.Object> serviceDiscoveryTypes) {
            this.props.serviceDiscoveryTypes(serviceDiscoveryTypes);
            return this;
        }

        /**
         * Property slsProjectName: The SLS project name of the cluster.
         * <p>
         * If LoggingType is set to SLS and SlsProjectName is empty, a new Project is created.
         * <p>
         * @return {@code this}
         * @param slsProjectName Property slsProjectName: The SLS project name of the cluster. This parameter is required.
         */
        public Builder slsProjectName(final java.lang.String slsProjectName) {
            this.props.slsProjectName(slsProjectName);
            return this;
        }
        /**
         * Property slsProjectName: The SLS project name of the cluster.
         * <p>
         * If LoggingType is set to SLS and SlsProjectName is empty, a new Project is created.
         * <p>
         * @return {@code this}
         * @param slsProjectName Property slsProjectName: The SLS project name of the cluster. This parameter is required.
         */
        public Builder slsProjectName(final com.aliyun.ros.cdk.core.IResolvable slsProjectName) {
            this.props.slsProjectName(slsProjectName);
            return this;
        }

        /**
         * Property snatEntry: Whether to configure SNAT for the network.
         * <p>
         * When a VPC can access the public network environment, set it to false.
         * When an existing VPC cannot access the public network environment:
         * When set to True, SNAT is configured and the public network environment can be accessed at this time.
         * If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
         * Default to true.
         * <p>
         * @return {@code this}
         * @param snatEntry Property snatEntry: Whether to configure SNAT for the network. This parameter is required.
         */
        public Builder snatEntry(final java.lang.Boolean snatEntry) {
            this.props.snatEntry(snatEntry);
            return this;
        }
        /**
         * Property snatEntry: Whether to configure SNAT for the network.
         * <p>
         * When a VPC can access the public network environment, set it to false.
         * When an existing VPC cannot access the public network environment:
         * When set to True, SNAT is configured and the public network environment can be accessed at this time.
         * If set to false, it means that SNAT is not configured and the public network environment cannot be accessed at this time.
         * Default to true.
         * <p>
         * @return {@code this}
         * @param snatEntry Property snatEntry: Whether to configure SNAT for the network. This parameter is required.
         */
        public Builder snatEntry(final com.aliyun.ros.cdk.core.IResolvable snatEntry) {
            this.props.snatEntry(snatEntry);
            return this;
        }

        /**
         * Property tags: Tag the cluster.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tag the cluster. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.acs.RosCluster.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property timeZone: The time zone of the cluster.
         * <p>
         * @return {@code this}
         * @param timeZone Property timeZone: The time zone of the cluster. This parameter is required.
         */
        public Builder timeZone(final java.lang.String timeZone) {
            this.props.timeZone(timeZone);
            return this;
        }
        /**
         * Property timeZone: The time zone of the cluster.
         * <p>
         * @return {@code this}
         * @param timeZone Property timeZone: The time zone of the cluster. This parameter is required.
         */
        public Builder timeZone(final com.aliyun.ros.cdk.core.IResolvable timeZone) {
            this.props.timeZone(timeZone);
            return this;
        }

        /**
         * Property vpcId: VPC ID.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: VPC ID. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: VPC ID.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: VPC ID. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property vSwitchIds: The IDs of VSwitches.
         * <p>
         * If you leave this property empty, the system automatically creates a VSwitch.
         * Note You must specify both the VpcId and VSwitchIds or leave both of them empty.
         * <p>
         * @return {@code this}
         * @param vSwitchIds Property vSwitchIds: The IDs of VSwitches. This parameter is required.
         */
        public Builder vSwitchIds(final com.aliyun.ros.cdk.core.IResolvable vSwitchIds) {
            this.props.vSwitchIds(vSwitchIds);
            return this;
        }
        /**
         * Property vSwitchIds: The IDs of VSwitches.
         * <p>
         * If you leave this property empty, the system automatically creates a VSwitch.
         * Note You must specify both the VpcId and VSwitchIds or leave both of them empty.
         * <p>
         * @return {@code this}
         * @param vSwitchIds Property vSwitchIds: The IDs of VSwitches. This parameter is required.
         */
        public Builder vSwitchIds(final java.util.List<? extends java.lang.Object> vSwitchIds) {
            this.props.vSwitchIds(vSwitchIds);
            return this;
        }

        /**
         * Property zoneIds: The zone IDs of the cluster.
         * <p>
         * @return {@code this}
         * @param zoneIds Property zoneIds: The zone IDs of the cluster. This parameter is required.
         */
        public Builder zoneIds(final com.aliyun.ros.cdk.core.IResolvable zoneIds) {
            this.props.zoneIds(zoneIds);
            return this;
        }
        /**
         * Property zoneIds: The zone IDs of the cluster.
         * <p>
         * @return {@code this}
         * @param zoneIds Property zoneIds: The zone IDs of the cluster. This parameter is required.
         */
        public Builder zoneIds(final java.util.List<? extends java.lang.Object> zoneIds) {
            this.props.zoneIds(zoneIds);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.acs.Cluster}.
         */
        @Override
        public com.aliyun.ros.cdk.acs.Cluster build() {
            return new com.aliyun.ros.cdk.acs.Cluster(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
