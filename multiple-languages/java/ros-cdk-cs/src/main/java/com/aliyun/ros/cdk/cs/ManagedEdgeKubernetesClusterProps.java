package com.aliyun.ros.cdk.cs;

/**
 * Properties for defining a `ALIYUN::CS::ManagedEdgeKubernetesCluster`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-22T06:16:28.100Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.ManagedEdgeKubernetesClusterProps")
@software.amazon.jsii.Jsii.Proxy(ManagedEdgeKubernetesClusterProps.Jsii$Proxy.class)
public interface ManagedEdgeKubernetesClusterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property name: The name of the cluster.
     * <p>
     * The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     * Property numOfNodes: Number of worker nodes.
     * <p>
     * The range is [0,300]
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNumOfNodes();

    /**
     * Property addons: The add-ons to be installed for the cluster.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAddons() {
        return null;
    }

    /**
     * Property autoRenew: Whether the cluster automatically renews.
     * <p>
     * It takes effect when the value of ChargeType is PrePaid. The optional values are:
     * true: automatic renewal
     * false: do not renew automatically
     * Default to true.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return null;
    }

    /**
     * Property autoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required: When PeriodUnit = Week, the values are: {"1", "2", "3"} When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"} Default to 1.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenewPeriod() {
        return null;
    }

    /**
     * Property chargeType: cluster payment type.
     * <p>
     * The optional values are:
     * PrePaid: prepaid
     * PostPaid: Pay as you go
     * Default to PostPaid.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getChargeType() {
        return null;
    }

    /**
     * Property cloudMonitorFlags: Whether to install the cloud monitoring plugin: true: indicates installation false: Do not install Default to false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCloudMonitorFlags() {
        return null;
    }

    /**
     * Property clusterSpec: The edge managed cluster spec.
     * <p>
     * Value:
     * ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
     * ack.standard: Standard hosting cluster.
     * Default value: ack.standard. The value can be empty. When it is empty, a standard managed cluster will be created.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClusterSpec() {
        return null;
    }

    /**
     * Property containerCidr: The container network segment cannot conflict with the VPC network segment.
     * <p>
     * When the system is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getContainerCidr() {
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
     * Property disableRollback: Whether the failure was rolled back: true: indicates that it fails to roll back false: rollback failed The default is true.
     * <p>
     * If rollback fails, resources produced during the creation process will be released. False is not recommended.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDisableRollback() {
        return null;
    }

    /**
     * Property endpointPublicAccess: Whether to enable the public network API Server: true: which means that the public network API Server is open.
     * <p>
     * false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to true.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEndpointPublicAccess() {
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
     * Property keyPair: Key pair name.
     * <p>
     * Specify one of KeyPair or LoginPassword.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKeyPair() {
        return null;
    }

    /**
     * Property loginPassword: SSH login password.
     * <p>
     * Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLoginPassword() {
        return null;
    }

    /**
     * Property nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes.
     * <p>
     * This number is determined by the specified pod CIDR block.
     * This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNodeCidrMask() {
        return null;
    }

    /**
     * Property period: The duration of the annual subscription and monthly subscription.
     * <p>
     * It takes effect when the ChargeType value is PrePaid and is a required value. The value range is:
     * When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
     * When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
     * When PeriodUnit = Year, Period values are: {"1", "2", "3", "4", "5"}
     * Default to 1.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     * Property periodUnit: When you specify PrePaid, you need to specify the period.
     * <p>
     * The options are:
     * Week: Time is measured in weeks
     * Month: time in months
     * Year: time in years
     * Default to Month
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriodUnit() {
        return null;
    }

    /**
     * Property profile: Edge cluster ID.
     * <p>
     * The default value is Edge.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProfile() {
        return null;
    }

    /**
     * Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes.
     * <p>
     * The default is iptables.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProxyMode() {
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
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.cs.RosManagedEdgeKubernetesCluster.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property timeoutMins: Cluster resource stack creation timeout, in minutes.
     * <p>
     * The default value is 60.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTimeoutMins() {
        return null;
    }

    /**
     * Property vpcId: VPC ID.
     * <p>
     * If not set, the system will automatically create a VPC, and the VPC network segment created by the system is 192.168.0.0/16.
     * VpcId and VSwitchId can only be empty at the same time or set the corresponding values at the same time.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     * Property vSwitchIds: The virtual switch ID of the worker node.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchIds() {
        return null;
    }

    /**
     * Property workerDataDisk: Whether to mount the data disk.
     * <p>
     * The options are as follows:
     * true: indicates that the worker node mounts data disks.
     * false: indicates that the worker node does not mount data disks.
     * Default to false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWorkerDataDisk() {
        return null;
    }

    /**
     * Property workerDataDiskCategory: Data disk type.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWorkerDataDiskCategory() {
        return null;
    }

    /**
     * Property workerDataDisks: A combination of configurations such as worker data disk type and size.
     * <p>
     * This parameter is valid only when the worker node data disk is mounted.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWorkerDataDisks() {
        return null;
    }

    /**
     * Property workerDataDiskSize: Data disk size in GiB.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWorkerDataDiskSize() {
        return null;
    }

    /**
     * Property workerInstanceTypes: Worker node ECS specification type code.
     * <p>
     * For more details, see Instance Specification Family.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWorkerInstanceTypes() {
        return null;
    }

    /**
     * Property workerSystemDiskCategory: Worker node system disk type.
     * <p>
     * Default to cloud_efficiency.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWorkerSystemDiskCategory() {
        return null;
    }

    /**
     * Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
     * <p>
     * Default to 120.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWorkerSystemDiskSize() {
        return null;
    }

    /**
     * Property zoneIds: Zone ids of worker node virtual switches belongs to.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneIds() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ManagedEdgeKubernetesClusterProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ManagedEdgeKubernetesClusterProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ManagedEdgeKubernetesClusterProps> {
        java.lang.Object name;
        java.lang.Object numOfNodes;
        java.lang.Object addons;
        java.lang.Object autoRenew;
        java.lang.Object autoRenewPeriod;
        java.lang.Object chargeType;
        java.lang.Object cloudMonitorFlags;
        java.lang.Object clusterSpec;
        java.lang.Object containerCidr;
        java.lang.Object deletionProtection;
        java.lang.Object disableRollback;
        java.lang.Object endpointPublicAccess;
        java.lang.Object isEnterpriseSecurityGroup;
        java.lang.Object keyPair;
        java.lang.Object loginPassword;
        java.lang.Object nodeCidrMask;
        java.lang.Object period;
        java.lang.Object periodUnit;
        java.lang.Object profile;
        java.lang.Object proxyMode;
        java.lang.Object resourceGroupId;
        java.lang.Object serviceCidr;
        java.lang.Object snatEntry;
        java.util.List<com.aliyun.ros.cdk.cs.RosManagedEdgeKubernetesCluster.TagsProperty> tags;
        java.lang.Object timeoutMins;
        java.lang.Object vpcId;
        java.lang.Object vSwitchIds;
        java.lang.Object workerDataDisk;
        java.lang.Object workerDataDiskCategory;
        java.lang.Object workerDataDisks;
        java.lang.Object workerDataDiskSize;
        java.lang.Object workerInstanceTypes;
        java.lang.Object workerSystemDiskCategory;
        java.lang.Object workerSystemDiskSize;
        java.lang.Object zoneIds;

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getName}
         * @param name Property name: The name of the cluster. This parameter is required.
         *             The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getName}
         * @param name Property name: The name of the cluster. This parameter is required.
         *             The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getNumOfNodes}
         * @param numOfNodes Property numOfNodes: Number of worker nodes. This parameter is required.
         *                   The range is [0,300]
         * @return {@code this}
         */
        public Builder numOfNodes(java.lang.Number numOfNodes) {
            this.numOfNodes = numOfNodes;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getNumOfNodes}
         * @param numOfNodes Property numOfNodes: Number of worker nodes. This parameter is required.
         *                   The range is [0,300]
         * @return {@code this}
         */
        public Builder numOfNodes(com.aliyun.ros.cdk.core.IResolvable numOfNodes) {
            this.numOfNodes = numOfNodes;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getAddons}
         * @param addons Property addons: The add-ons to be installed for the cluster.
         * @return {@code this}
         */
        public Builder addons(com.aliyun.ros.cdk.core.IResolvable addons) {
            this.addons = addons;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getAddons}
         * @param addons Property addons: The add-ons to be installed for the cluster.
         * @return {@code this}
         */
        public Builder addons(java.util.List<? extends java.lang.Object> addons) {
            this.addons = addons;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getAutoRenew}
         * @param autoRenew Property autoRenew: Whether the cluster automatically renews.
         *                  It takes effect when the value of ChargeType is PrePaid. The optional values are:
         *                  true: automatic renewal
         *                  false: do not renew automatically
         *                  Default to true.
         * @return {@code this}
         */
        public Builder autoRenew(java.lang.Boolean autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getAutoRenew}
         * @param autoRenew Property autoRenew: Whether the cluster automatically renews.
         *                  It takes effect when the value of ChargeType is PrePaid. The optional values are:
         *                  true: automatic renewal
         *                  false: do not renew automatically
         *                  Default to true.
         * @return {@code this}
         */
        public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getAutoRenewPeriod}
         * @param autoRenewPeriod Property autoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required: When PeriodUnit = Week, the values are: {"1", "2", "3"} When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"} Default to 1.
         * @return {@code this}
         */
        public Builder autoRenewPeriod(java.lang.Number autoRenewPeriod) {
            this.autoRenewPeriod = autoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getAutoRenewPeriod}
         * @param autoRenewPeriod Property autoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required: When PeriodUnit = Week, the values are: {"1", "2", "3"} When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"} Default to 1.
         * @return {@code this}
         */
        public Builder autoRenewPeriod(com.aliyun.ros.cdk.core.IResolvable autoRenewPeriod) {
            this.autoRenewPeriod = autoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getChargeType}
         * @param chargeType Property chargeType: cluster payment type.
         *                   The optional values are:
         *                   PrePaid: prepaid
         *                   PostPaid: Pay as you go
         *                   Default to PostPaid.
         * @return {@code this}
         */
        public Builder chargeType(java.lang.String chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getChargeType}
         * @param chargeType Property chargeType: cluster payment type.
         *                   The optional values are:
         *                   PrePaid: prepaid
         *                   PostPaid: Pay as you go
         *                   Default to PostPaid.
         * @return {@code this}
         */
        public Builder chargeType(com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getCloudMonitorFlags}
         * @param cloudMonitorFlags Property cloudMonitorFlags: Whether to install the cloud monitoring plugin: true: indicates installation false: Do not install Default to false.
         * @return {@code this}
         */
        public Builder cloudMonitorFlags(java.lang.Boolean cloudMonitorFlags) {
            this.cloudMonitorFlags = cloudMonitorFlags;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getCloudMonitorFlags}
         * @param cloudMonitorFlags Property cloudMonitorFlags: Whether to install the cloud monitoring plugin: true: indicates installation false: Do not install Default to false.
         * @return {@code this}
         */
        public Builder cloudMonitorFlags(com.aliyun.ros.cdk.core.IResolvable cloudMonitorFlags) {
            this.cloudMonitorFlags = cloudMonitorFlags;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getClusterSpec}
         * @param clusterSpec Property clusterSpec: The edge managed cluster spec.
         *                    Value:
         *                    ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
         *                    ack.standard: Standard hosting cluster.
         *                    Default value: ack.standard. The value can be empty. When it is empty, a standard managed cluster will be created.
         * @return {@code this}
         */
        public Builder clusterSpec(java.lang.String clusterSpec) {
            this.clusterSpec = clusterSpec;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getClusterSpec}
         * @param clusterSpec Property clusterSpec: The edge managed cluster spec.
         *                    Value:
         *                    ack.pro.small: Professional hosting cluster, namely: "ACK Pro version cluster".
         *                    ack.standard: Standard hosting cluster.
         *                    Default value: ack.standard. The value can be empty. When it is empty, a standard managed cluster will be created.
         * @return {@code this}
         */
        public Builder clusterSpec(com.aliyun.ros.cdk.core.IResolvable clusterSpec) {
            this.clusterSpec = clusterSpec;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getContainerCidr}
         * @param containerCidr Property containerCidr: The container network segment cannot conflict with the VPC network segment.
         *                      When the system is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
         * @return {@code this}
         */
        public Builder containerCidr(java.lang.String containerCidr) {
            this.containerCidr = containerCidr;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getContainerCidr}
         * @param containerCidr Property containerCidr: The container network segment cannot conflict with the VPC network segment.
         *                      When the system is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
         * @return {@code this}
         */
        public Builder containerCidr(com.aliyun.ros.cdk.core.IResolvable containerCidr) {
            this.containerCidr = containerCidr;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getDeletionProtection}
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
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getDeletionProtection}
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
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getDisableRollback}
         * @param disableRollback Property disableRollback: Whether the failure was rolled back: true: indicates that it fails to roll back false: rollback failed The default is true.
         *                        If rollback fails, resources produced during the creation process will be released. False is not recommended.
         * @return {@code this}
         */
        public Builder disableRollback(java.lang.Boolean disableRollback) {
            this.disableRollback = disableRollback;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getDisableRollback}
         * @param disableRollback Property disableRollback: Whether the failure was rolled back: true: indicates that it fails to roll back false: rollback failed The default is true.
         *                        If rollback fails, resources produced during the creation process will be released. False is not recommended.
         * @return {@code this}
         */
        public Builder disableRollback(com.aliyun.ros.cdk.core.IResolvable disableRollback) {
            this.disableRollback = disableRollback;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getEndpointPublicAccess}
         * @param endpointPublicAccess Property endpointPublicAccess: Whether to enable the public network API Server: true: which means that the public network API Server is open.
         *                             false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to true.
         * @return {@code this}
         */
        public Builder endpointPublicAccess(java.lang.Boolean endpointPublicAccess) {
            this.endpointPublicAccess = endpointPublicAccess;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getEndpointPublicAccess}
         * @param endpointPublicAccess Property endpointPublicAccess: Whether to enable the public network API Server: true: which means that the public network API Server is open.
         *                             false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to true.
         * @return {@code this}
         */
        public Builder endpointPublicAccess(com.aliyun.ros.cdk.core.IResolvable endpointPublicAccess) {
            this.endpointPublicAccess = endpointPublicAccess;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getIsEnterpriseSecurityGroup}
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
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getIsEnterpriseSecurityGroup}
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
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getKeyPair}
         * @param keyPair Property keyPair: Key pair name.
         *                Specify one of KeyPair or LoginPassword.
         * @return {@code this}
         */
        public Builder keyPair(java.lang.String keyPair) {
            this.keyPair = keyPair;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getKeyPair}
         * @param keyPair Property keyPair: Key pair name.
         *                Specify one of KeyPair or LoginPassword.
         * @return {@code this}
         */
        public Builder keyPair(com.aliyun.ros.cdk.core.IResolvable keyPair) {
            this.keyPair = keyPair;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getLoginPassword}
         * @param loginPassword Property loginPassword: SSH login password.
         *                      Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
         * @return {@code this}
         */
        public Builder loginPassword(java.lang.String loginPassword) {
            this.loginPassword = loginPassword;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getLoginPassword}
         * @param loginPassword Property loginPassword: SSH login password.
         *                      Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
         * @return {@code this}
         */
        public Builder loginPassword(com.aliyun.ros.cdk.core.IResolvable loginPassword) {
            this.loginPassword = loginPassword;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getNodeCidrMask}
         * @param nodeCidrMask Property nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes.
         *                     This number is determined by the specified pod CIDR block.
         *                     This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
         * @return {@code this}
         */
        public Builder nodeCidrMask(java.lang.String nodeCidrMask) {
            this.nodeCidrMask = nodeCidrMask;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getNodeCidrMask}
         * @param nodeCidrMask Property nodeCidrMask: The maximum number of IP addresses that can be assigned to nodes.
         *                     This number is determined by the specified pod CIDR block.
         *                     This parameter takes effect only if the cluster uses the Flannel plug-in.Default value: 25.
         * @return {@code this}
         */
        public Builder nodeCidrMask(com.aliyun.ros.cdk.core.IResolvable nodeCidrMask) {
            this.nodeCidrMask = nodeCidrMask;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getPeriod}
         * @param period Property period: The duration of the annual subscription and monthly subscription.
         *               It takes effect when the ChargeType value is PrePaid and is a required value. The value range is:
         *               When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
         *               When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
         *               When PeriodUnit = Year, Period values are: {"1", "2", "3", "4", "5"}
         *               Default to 1.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getPeriod}
         * @param period Property period: The duration of the annual subscription and monthly subscription.
         *               It takes effect when the ChargeType value is PrePaid and is a required value. The value range is:
         *               When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
         *               When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
         *               When PeriodUnit = Year, Period values are: {"1", "2", "3", "4", "5"}
         *               Default to 1.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getPeriodUnit}
         * @param periodUnit Property periodUnit: When you specify PrePaid, you need to specify the period.
         *                   The options are:
         *                   Week: Time is measured in weeks
         *                   Month: time in months
         *                   Year: time in years
         *                   Default to Month
         * @return {@code this}
         */
        public Builder periodUnit(java.lang.String periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getPeriodUnit}
         * @param periodUnit Property periodUnit: When you specify PrePaid, you need to specify the period.
         *                   The options are:
         *                   Week: Time is measured in weeks
         *                   Month: time in months
         *                   Year: time in years
         *                   Default to Month
         * @return {@code this}
         */
        public Builder periodUnit(com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getProfile}
         * @param profile Property profile: Edge cluster ID.
         *                The default value is Edge.
         * @return {@code this}
         */
        public Builder profile(java.lang.String profile) {
            this.profile = profile;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getProfile}
         * @param profile Property profile: Edge cluster ID.
         *                The default value is Edge.
         * @return {@code this}
         */
        public Builder profile(com.aliyun.ros.cdk.core.IResolvable profile) {
            this.profile = profile;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getProxyMode}
         * @param proxyMode Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes.
         *                  The default is iptables.
         * @return {@code this}
         */
        public Builder proxyMode(java.lang.String proxyMode) {
            this.proxyMode = proxyMode;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getProxyMode}
         * @param proxyMode Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes.
         *                  The default is iptables.
         * @return {@code this}
         */
        public Builder proxyMode(com.aliyun.ros.cdk.core.IResolvable proxyMode) {
            this.proxyMode = proxyMode;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getServiceCidr}
         * @param serviceCidr Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment.
         *                    When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
         * @return {@code this}
         */
        public Builder serviceCidr(java.lang.String serviceCidr) {
            this.serviceCidr = serviceCidr;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getServiceCidr}
         * @param serviceCidr Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment.
         *                    When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
         * @return {@code this}
         */
        public Builder serviceCidr(com.aliyun.ros.cdk.core.IResolvable serviceCidr) {
            this.serviceCidr = serviceCidr;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getSnatEntry}
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
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getSnatEntry}
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
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getTags}
         * @param tags Property tags: Tag the cluster.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.cs.RosManagedEdgeKubernetesCluster.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.cs.RosManagedEdgeKubernetesCluster.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getTimeoutMins}
         * @param timeoutMins Property timeoutMins: Cluster resource stack creation timeout, in minutes.
         *                    The default value is 60.
         * @return {@code this}
         */
        public Builder timeoutMins(java.lang.Number timeoutMins) {
            this.timeoutMins = timeoutMins;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getTimeoutMins}
         * @param timeoutMins Property timeoutMins: Cluster resource stack creation timeout, in minutes.
         *                    The default value is 60.
         * @return {@code this}
         */
        public Builder timeoutMins(com.aliyun.ros.cdk.core.IResolvable timeoutMins) {
            this.timeoutMins = timeoutMins;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getVpcId}
         * @param vpcId Property vpcId: VPC ID.
         *              If not set, the system will automatically create a VPC, and the VPC network segment created by the system is 192.168.0.0/16.
         *              VpcId and VSwitchId can only be empty at the same time or set the corresponding values at the same time.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getVpcId}
         * @param vpcId Property vpcId: VPC ID.
         *              If not set, the system will automatically create a VPC, and the VPC network segment created by the system is 192.168.0.0/16.
         *              VpcId and VSwitchId can only be empty at the same time or set the corresponding values at the same time.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getVSwitchIds}
         * @param vSwitchIds Property vSwitchIds: The virtual switch ID of the worker node.
         * @return {@code this}
         */
        public Builder vSwitchIds(java.util.List<? extends java.lang.Object> vSwitchIds) {
            this.vSwitchIds = vSwitchIds;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getVSwitchIds}
         * @param vSwitchIds Property vSwitchIds: The virtual switch ID of the worker node.
         * @return {@code this}
         */
        public Builder vSwitchIds(com.aliyun.ros.cdk.core.IResolvable vSwitchIds) {
            this.vSwitchIds = vSwitchIds;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getWorkerDataDisk}
         * @param workerDataDisk Property workerDataDisk: Whether to mount the data disk.
         *                       The options are as follows:
         *                       true: indicates that the worker node mounts data disks.
         *                       false: indicates that the worker node does not mount data disks.
         *                       Default to false.
         * @return {@code this}
         */
        public Builder workerDataDisk(java.lang.Boolean workerDataDisk) {
            this.workerDataDisk = workerDataDisk;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getWorkerDataDisk}
         * @param workerDataDisk Property workerDataDisk: Whether to mount the data disk.
         *                       The options are as follows:
         *                       true: indicates that the worker node mounts data disks.
         *                       false: indicates that the worker node does not mount data disks.
         *                       Default to false.
         * @return {@code this}
         */
        public Builder workerDataDisk(com.aliyun.ros.cdk.core.IResolvable workerDataDisk) {
            this.workerDataDisk = workerDataDisk;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getWorkerDataDiskCategory}
         * @param workerDataDiskCategory Property workerDataDiskCategory: Data disk type.
         * @return {@code this}
         */
        public Builder workerDataDiskCategory(java.lang.String workerDataDiskCategory) {
            this.workerDataDiskCategory = workerDataDiskCategory;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getWorkerDataDiskCategory}
         * @param workerDataDiskCategory Property workerDataDiskCategory: Data disk type.
         * @return {@code this}
         */
        public Builder workerDataDiskCategory(com.aliyun.ros.cdk.core.IResolvable workerDataDiskCategory) {
            this.workerDataDiskCategory = workerDataDiskCategory;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getWorkerDataDisks}
         * @param workerDataDisks Property workerDataDisks: A combination of configurations such as worker data disk type and size.
         *                        This parameter is valid only when the worker node data disk is mounted.
         * @return {@code this}
         */
        public Builder workerDataDisks(com.aliyun.ros.cdk.core.IResolvable workerDataDisks) {
            this.workerDataDisks = workerDataDisks;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getWorkerDataDisks}
         * @param workerDataDisks Property workerDataDisks: A combination of configurations such as worker data disk type and size.
         *                        This parameter is valid only when the worker node data disk is mounted.
         * @return {@code this}
         */
        public Builder workerDataDisks(java.util.List<? extends java.lang.Object> workerDataDisks) {
            this.workerDataDisks = workerDataDisks;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getWorkerDataDiskSize}
         * @param workerDataDiskSize Property workerDataDiskSize: Data disk size in GiB.
         * @return {@code this}
         */
        public Builder workerDataDiskSize(java.lang.Number workerDataDiskSize) {
            this.workerDataDiskSize = workerDataDiskSize;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getWorkerDataDiskSize}
         * @param workerDataDiskSize Property workerDataDiskSize: Data disk size in GiB.
         * @return {@code this}
         */
        public Builder workerDataDiskSize(com.aliyun.ros.cdk.core.IResolvable workerDataDiskSize) {
            this.workerDataDiskSize = workerDataDiskSize;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getWorkerInstanceTypes}
         * @param workerInstanceTypes Property workerInstanceTypes: Worker node ECS specification type code.
         *                            For more details, see Instance Specification Family.
         * @return {@code this}
         */
        public Builder workerInstanceTypes(com.aliyun.ros.cdk.core.IResolvable workerInstanceTypes) {
            this.workerInstanceTypes = workerInstanceTypes;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getWorkerInstanceTypes}
         * @param workerInstanceTypes Property workerInstanceTypes: Worker node ECS specification type code.
         *                            For more details, see Instance Specification Family.
         * @return {@code this}
         */
        public Builder workerInstanceTypes(java.util.List<? extends java.lang.Object> workerInstanceTypes) {
            this.workerInstanceTypes = workerInstanceTypes;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getWorkerSystemDiskCategory}
         * @param workerSystemDiskCategory Property workerSystemDiskCategory: Worker node system disk type.
         *                                 Default to cloud_efficiency.
         * @return {@code this}
         */
        public Builder workerSystemDiskCategory(java.lang.String workerSystemDiskCategory) {
            this.workerSystemDiskCategory = workerSystemDiskCategory;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getWorkerSystemDiskCategory}
         * @param workerSystemDiskCategory Property workerSystemDiskCategory: Worker node system disk type.
         *                                 Default to cloud_efficiency.
         * @return {@code this}
         */
        public Builder workerSystemDiskCategory(com.aliyun.ros.cdk.core.IResolvable workerSystemDiskCategory) {
            this.workerSystemDiskCategory = workerSystemDiskCategory;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getWorkerSystemDiskSize}
         * @param workerSystemDiskSize Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
         *                             Default to 120.
         * @return {@code this}
         */
        public Builder workerSystemDiskSize(java.lang.Number workerSystemDiskSize) {
            this.workerSystemDiskSize = workerSystemDiskSize;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getWorkerSystemDiskSize}
         * @param workerSystemDiskSize Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
         *                             Default to 120.
         * @return {@code this}
         */
        public Builder workerSystemDiskSize(com.aliyun.ros.cdk.core.IResolvable workerSystemDiskSize) {
            this.workerSystemDiskSize = workerSystemDiskSize;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getZoneIds}
         * @param zoneIds Property zoneIds: Zone ids of worker node virtual switches belongs to.
         * @return {@code this}
         */
        public Builder zoneIds(com.aliyun.ros.cdk.core.IResolvable zoneIds) {
            this.zoneIds = zoneIds;
            return this;
        }

        /**
         * Sets the value of {@link ManagedEdgeKubernetesClusterProps#getZoneIds}
         * @param zoneIds Property zoneIds: Zone ids of worker node virtual switches belongs to.
         * @return {@code this}
         */
        public Builder zoneIds(java.util.List<? extends java.lang.Object> zoneIds) {
            this.zoneIds = zoneIds;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ManagedEdgeKubernetesClusterProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ManagedEdgeKubernetesClusterProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ManagedEdgeKubernetesClusterProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ManagedEdgeKubernetesClusterProps {
        private final java.lang.Object name;
        private final java.lang.Object numOfNodes;
        private final java.lang.Object addons;
        private final java.lang.Object autoRenew;
        private final java.lang.Object autoRenewPeriod;
        private final java.lang.Object chargeType;
        private final java.lang.Object cloudMonitorFlags;
        private final java.lang.Object clusterSpec;
        private final java.lang.Object containerCidr;
        private final java.lang.Object deletionProtection;
        private final java.lang.Object disableRollback;
        private final java.lang.Object endpointPublicAccess;
        private final java.lang.Object isEnterpriseSecurityGroup;
        private final java.lang.Object keyPair;
        private final java.lang.Object loginPassword;
        private final java.lang.Object nodeCidrMask;
        private final java.lang.Object period;
        private final java.lang.Object periodUnit;
        private final java.lang.Object profile;
        private final java.lang.Object proxyMode;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object serviceCidr;
        private final java.lang.Object snatEntry;
        private final java.util.List<com.aliyun.ros.cdk.cs.RosManagedEdgeKubernetesCluster.TagsProperty> tags;
        private final java.lang.Object timeoutMins;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchIds;
        private final java.lang.Object workerDataDisk;
        private final java.lang.Object workerDataDiskCategory;
        private final java.lang.Object workerDataDisks;
        private final java.lang.Object workerDataDiskSize;
        private final java.lang.Object workerInstanceTypes;
        private final java.lang.Object workerSystemDiskCategory;
        private final java.lang.Object workerSystemDiskSize;
        private final java.lang.Object zoneIds;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.numOfNodes = software.amazon.jsii.Kernel.get(this, "numOfNodes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.addons = software.amazon.jsii.Kernel.get(this, "addons", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenewPeriod = software.amazon.jsii.Kernel.get(this, "autoRenewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.chargeType = software.amazon.jsii.Kernel.get(this, "chargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cloudMonitorFlags = software.amazon.jsii.Kernel.get(this, "cloudMonitorFlags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clusterSpec = software.amazon.jsii.Kernel.get(this, "clusterSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.containerCidr = software.amazon.jsii.Kernel.get(this, "containerCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deletionProtection = software.amazon.jsii.Kernel.get(this, "deletionProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.disableRollback = software.amazon.jsii.Kernel.get(this, "disableRollback", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endpointPublicAccess = software.amazon.jsii.Kernel.get(this, "endpointPublicAccess", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.isEnterpriseSecurityGroup = software.amazon.jsii.Kernel.get(this, "isEnterpriseSecurityGroup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.keyPair = software.amazon.jsii.Kernel.get(this, "keyPair", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loginPassword = software.amazon.jsii.Kernel.get(this, "loginPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.nodeCidrMask = software.amazon.jsii.Kernel.get(this, "nodeCidrMask", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.profile = software.amazon.jsii.Kernel.get(this, "profile", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.proxyMode = software.amazon.jsii.Kernel.get(this, "proxyMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serviceCidr = software.amazon.jsii.Kernel.get(this, "serviceCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.snatEntry = software.amazon.jsii.Kernel.get(this, "snatEntry", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cs.RosManagedEdgeKubernetesCluster.TagsProperty.class)));
            this.timeoutMins = software.amazon.jsii.Kernel.get(this, "timeoutMins", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchIds = software.amazon.jsii.Kernel.get(this, "vSwitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workerDataDisk = software.amazon.jsii.Kernel.get(this, "workerDataDisk", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workerDataDiskCategory = software.amazon.jsii.Kernel.get(this, "workerDataDiskCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workerDataDisks = software.amazon.jsii.Kernel.get(this, "workerDataDisks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workerDataDiskSize = software.amazon.jsii.Kernel.get(this, "workerDataDiskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workerInstanceTypes = software.amazon.jsii.Kernel.get(this, "workerInstanceTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workerSystemDiskCategory = software.amazon.jsii.Kernel.get(this, "workerSystemDiskCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workerSystemDiskSize = software.amazon.jsii.Kernel.get(this, "workerSystemDiskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneIds = software.amazon.jsii.Kernel.get(this, "zoneIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.numOfNodes = java.util.Objects.requireNonNull(builder.numOfNodes, "numOfNodes is required");
            this.addons = builder.addons;
            this.autoRenew = builder.autoRenew;
            this.autoRenewPeriod = builder.autoRenewPeriod;
            this.chargeType = builder.chargeType;
            this.cloudMonitorFlags = builder.cloudMonitorFlags;
            this.clusterSpec = builder.clusterSpec;
            this.containerCidr = builder.containerCidr;
            this.deletionProtection = builder.deletionProtection;
            this.disableRollback = builder.disableRollback;
            this.endpointPublicAccess = builder.endpointPublicAccess;
            this.isEnterpriseSecurityGroup = builder.isEnterpriseSecurityGroup;
            this.keyPair = builder.keyPair;
            this.loginPassword = builder.loginPassword;
            this.nodeCidrMask = builder.nodeCidrMask;
            this.period = builder.period;
            this.periodUnit = builder.periodUnit;
            this.profile = builder.profile;
            this.proxyMode = builder.proxyMode;
            this.resourceGroupId = builder.resourceGroupId;
            this.serviceCidr = builder.serviceCidr;
            this.snatEntry = builder.snatEntry;
            this.tags = (java.util.List<com.aliyun.ros.cdk.cs.RosManagedEdgeKubernetesCluster.TagsProperty>)builder.tags;
            this.timeoutMins = builder.timeoutMins;
            this.vpcId = builder.vpcId;
            this.vSwitchIds = builder.vSwitchIds;
            this.workerDataDisk = builder.workerDataDisk;
            this.workerDataDiskCategory = builder.workerDataDiskCategory;
            this.workerDataDisks = builder.workerDataDisks;
            this.workerDataDiskSize = builder.workerDataDiskSize;
            this.workerInstanceTypes = builder.workerInstanceTypes;
            this.workerSystemDiskCategory = builder.workerSystemDiskCategory;
            this.workerSystemDiskSize = builder.workerSystemDiskSize;
            this.zoneIds = builder.zoneIds;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getNumOfNodes() {
            return this.numOfNodes;
        }

        @Override
        public final java.lang.Object getAddons() {
            return this.addons;
        }

        @Override
        public final java.lang.Object getAutoRenew() {
            return this.autoRenew;
        }

        @Override
        public final java.lang.Object getAutoRenewPeriod() {
            return this.autoRenewPeriod;
        }

        @Override
        public final java.lang.Object getChargeType() {
            return this.chargeType;
        }

        @Override
        public final java.lang.Object getCloudMonitorFlags() {
            return this.cloudMonitorFlags;
        }

        @Override
        public final java.lang.Object getClusterSpec() {
            return this.clusterSpec;
        }

        @Override
        public final java.lang.Object getContainerCidr() {
            return this.containerCidr;
        }

        @Override
        public final java.lang.Object getDeletionProtection() {
            return this.deletionProtection;
        }

        @Override
        public final java.lang.Object getDisableRollback() {
            return this.disableRollback;
        }

        @Override
        public final java.lang.Object getEndpointPublicAccess() {
            return this.endpointPublicAccess;
        }

        @Override
        public final java.lang.Object getIsEnterpriseSecurityGroup() {
            return this.isEnterpriseSecurityGroup;
        }

        @Override
        public final java.lang.Object getKeyPair() {
            return this.keyPair;
        }

        @Override
        public final java.lang.Object getLoginPassword() {
            return this.loginPassword;
        }

        @Override
        public final java.lang.Object getNodeCidrMask() {
            return this.nodeCidrMask;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getPeriodUnit() {
            return this.periodUnit;
        }

        @Override
        public final java.lang.Object getProfile() {
            return this.profile;
        }

        @Override
        public final java.lang.Object getProxyMode() {
            return this.proxyMode;
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
        public final java.lang.Object getSnatEntry() {
            return this.snatEntry;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.cs.RosManagedEdgeKubernetesCluster.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getTimeoutMins() {
            return this.timeoutMins;
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
        public final java.lang.Object getWorkerDataDisk() {
            return this.workerDataDisk;
        }

        @Override
        public final java.lang.Object getWorkerDataDiskCategory() {
            return this.workerDataDiskCategory;
        }

        @Override
        public final java.lang.Object getWorkerDataDisks() {
            return this.workerDataDisks;
        }

        @Override
        public final java.lang.Object getWorkerDataDiskSize() {
            return this.workerDataDiskSize;
        }

        @Override
        public final java.lang.Object getWorkerInstanceTypes() {
            return this.workerInstanceTypes;
        }

        @Override
        public final java.lang.Object getWorkerSystemDiskCategory() {
            return this.workerSystemDiskCategory;
        }

        @Override
        public final java.lang.Object getWorkerSystemDiskSize() {
            return this.workerSystemDiskSize;
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
            data.set("numOfNodes", om.valueToTree(this.getNumOfNodes()));
            if (this.getAddons() != null) {
                data.set("addons", om.valueToTree(this.getAddons()));
            }
            if (this.getAutoRenew() != null) {
                data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
            }
            if (this.getAutoRenewPeriod() != null) {
                data.set("autoRenewPeriod", om.valueToTree(this.getAutoRenewPeriod()));
            }
            if (this.getChargeType() != null) {
                data.set("chargeType", om.valueToTree(this.getChargeType()));
            }
            if (this.getCloudMonitorFlags() != null) {
                data.set("cloudMonitorFlags", om.valueToTree(this.getCloudMonitorFlags()));
            }
            if (this.getClusterSpec() != null) {
                data.set("clusterSpec", om.valueToTree(this.getClusterSpec()));
            }
            if (this.getContainerCidr() != null) {
                data.set("containerCidr", om.valueToTree(this.getContainerCidr()));
            }
            if (this.getDeletionProtection() != null) {
                data.set("deletionProtection", om.valueToTree(this.getDeletionProtection()));
            }
            if (this.getDisableRollback() != null) {
                data.set("disableRollback", om.valueToTree(this.getDisableRollback()));
            }
            if (this.getEndpointPublicAccess() != null) {
                data.set("endpointPublicAccess", om.valueToTree(this.getEndpointPublicAccess()));
            }
            if (this.getIsEnterpriseSecurityGroup() != null) {
                data.set("isEnterpriseSecurityGroup", om.valueToTree(this.getIsEnterpriseSecurityGroup()));
            }
            if (this.getKeyPair() != null) {
                data.set("keyPair", om.valueToTree(this.getKeyPair()));
            }
            if (this.getLoginPassword() != null) {
                data.set("loginPassword", om.valueToTree(this.getLoginPassword()));
            }
            if (this.getNodeCidrMask() != null) {
                data.set("nodeCidrMask", om.valueToTree(this.getNodeCidrMask()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getPeriodUnit() != null) {
                data.set("periodUnit", om.valueToTree(this.getPeriodUnit()));
            }
            if (this.getProfile() != null) {
                data.set("profile", om.valueToTree(this.getProfile()));
            }
            if (this.getProxyMode() != null) {
                data.set("proxyMode", om.valueToTree(this.getProxyMode()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getServiceCidr() != null) {
                data.set("serviceCidr", om.valueToTree(this.getServiceCidr()));
            }
            if (this.getSnatEntry() != null) {
                data.set("snatEntry", om.valueToTree(this.getSnatEntry()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getTimeoutMins() != null) {
                data.set("timeoutMins", om.valueToTree(this.getTimeoutMins()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }
            if (this.getVSwitchIds() != null) {
                data.set("vSwitchIds", om.valueToTree(this.getVSwitchIds()));
            }
            if (this.getWorkerDataDisk() != null) {
                data.set("workerDataDisk", om.valueToTree(this.getWorkerDataDisk()));
            }
            if (this.getWorkerDataDiskCategory() != null) {
                data.set("workerDataDiskCategory", om.valueToTree(this.getWorkerDataDiskCategory()));
            }
            if (this.getWorkerDataDisks() != null) {
                data.set("workerDataDisks", om.valueToTree(this.getWorkerDataDisks()));
            }
            if (this.getWorkerDataDiskSize() != null) {
                data.set("workerDataDiskSize", om.valueToTree(this.getWorkerDataDiskSize()));
            }
            if (this.getWorkerInstanceTypes() != null) {
                data.set("workerInstanceTypes", om.valueToTree(this.getWorkerInstanceTypes()));
            }
            if (this.getWorkerSystemDiskCategory() != null) {
                data.set("workerSystemDiskCategory", om.valueToTree(this.getWorkerSystemDiskCategory()));
            }
            if (this.getWorkerSystemDiskSize() != null) {
                data.set("workerSystemDiskSize", om.valueToTree(this.getWorkerSystemDiskSize()));
            }
            if (this.getZoneIds() != null) {
                data.set("zoneIds", om.valueToTree(this.getZoneIds()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.ManagedEdgeKubernetesClusterProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ManagedEdgeKubernetesClusterProps.Jsii$Proxy that = (ManagedEdgeKubernetesClusterProps.Jsii$Proxy) o;

            if (!name.equals(that.name)) return false;
            if (!numOfNodes.equals(that.numOfNodes)) return false;
            if (this.addons != null ? !this.addons.equals(that.addons) : that.addons != null) return false;
            if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
            if (this.autoRenewPeriod != null ? !this.autoRenewPeriod.equals(that.autoRenewPeriod) : that.autoRenewPeriod != null) return false;
            if (this.chargeType != null ? !this.chargeType.equals(that.chargeType) : that.chargeType != null) return false;
            if (this.cloudMonitorFlags != null ? !this.cloudMonitorFlags.equals(that.cloudMonitorFlags) : that.cloudMonitorFlags != null) return false;
            if (this.clusterSpec != null ? !this.clusterSpec.equals(that.clusterSpec) : that.clusterSpec != null) return false;
            if (this.containerCidr != null ? !this.containerCidr.equals(that.containerCidr) : that.containerCidr != null) return false;
            if (this.deletionProtection != null ? !this.deletionProtection.equals(that.deletionProtection) : that.deletionProtection != null) return false;
            if (this.disableRollback != null ? !this.disableRollback.equals(that.disableRollback) : that.disableRollback != null) return false;
            if (this.endpointPublicAccess != null ? !this.endpointPublicAccess.equals(that.endpointPublicAccess) : that.endpointPublicAccess != null) return false;
            if (this.isEnterpriseSecurityGroup != null ? !this.isEnterpriseSecurityGroup.equals(that.isEnterpriseSecurityGroup) : that.isEnterpriseSecurityGroup != null) return false;
            if (this.keyPair != null ? !this.keyPair.equals(that.keyPair) : that.keyPair != null) return false;
            if (this.loginPassword != null ? !this.loginPassword.equals(that.loginPassword) : that.loginPassword != null) return false;
            if (this.nodeCidrMask != null ? !this.nodeCidrMask.equals(that.nodeCidrMask) : that.nodeCidrMask != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.periodUnit != null ? !this.periodUnit.equals(that.periodUnit) : that.periodUnit != null) return false;
            if (this.profile != null ? !this.profile.equals(that.profile) : that.profile != null) return false;
            if (this.proxyMode != null ? !this.proxyMode.equals(that.proxyMode) : that.proxyMode != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.serviceCidr != null ? !this.serviceCidr.equals(that.serviceCidr) : that.serviceCidr != null) return false;
            if (this.snatEntry != null ? !this.snatEntry.equals(that.snatEntry) : that.snatEntry != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.timeoutMins != null ? !this.timeoutMins.equals(that.timeoutMins) : that.timeoutMins != null) return false;
            if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
            if (this.vSwitchIds != null ? !this.vSwitchIds.equals(that.vSwitchIds) : that.vSwitchIds != null) return false;
            if (this.workerDataDisk != null ? !this.workerDataDisk.equals(that.workerDataDisk) : that.workerDataDisk != null) return false;
            if (this.workerDataDiskCategory != null ? !this.workerDataDiskCategory.equals(that.workerDataDiskCategory) : that.workerDataDiskCategory != null) return false;
            if (this.workerDataDisks != null ? !this.workerDataDisks.equals(that.workerDataDisks) : that.workerDataDisks != null) return false;
            if (this.workerDataDiskSize != null ? !this.workerDataDiskSize.equals(that.workerDataDiskSize) : that.workerDataDiskSize != null) return false;
            if (this.workerInstanceTypes != null ? !this.workerInstanceTypes.equals(that.workerInstanceTypes) : that.workerInstanceTypes != null) return false;
            if (this.workerSystemDiskCategory != null ? !this.workerSystemDiskCategory.equals(that.workerSystemDiskCategory) : that.workerSystemDiskCategory != null) return false;
            if (this.workerSystemDiskSize != null ? !this.workerSystemDiskSize.equals(that.workerSystemDiskSize) : that.workerSystemDiskSize != null) return false;
            return this.zoneIds != null ? this.zoneIds.equals(that.zoneIds) : that.zoneIds == null;
        }

        @Override
        public final int hashCode() {
            int result = this.name.hashCode();
            result = 31 * result + (this.numOfNodes.hashCode());
            result = 31 * result + (this.addons != null ? this.addons.hashCode() : 0);
            result = 31 * result + (this.autoRenew != null ? this.autoRenew.hashCode() : 0);
            result = 31 * result + (this.autoRenewPeriod != null ? this.autoRenewPeriod.hashCode() : 0);
            result = 31 * result + (this.chargeType != null ? this.chargeType.hashCode() : 0);
            result = 31 * result + (this.cloudMonitorFlags != null ? this.cloudMonitorFlags.hashCode() : 0);
            result = 31 * result + (this.clusterSpec != null ? this.clusterSpec.hashCode() : 0);
            result = 31 * result + (this.containerCidr != null ? this.containerCidr.hashCode() : 0);
            result = 31 * result + (this.deletionProtection != null ? this.deletionProtection.hashCode() : 0);
            result = 31 * result + (this.disableRollback != null ? this.disableRollback.hashCode() : 0);
            result = 31 * result + (this.endpointPublicAccess != null ? this.endpointPublicAccess.hashCode() : 0);
            result = 31 * result + (this.isEnterpriseSecurityGroup != null ? this.isEnterpriseSecurityGroup.hashCode() : 0);
            result = 31 * result + (this.keyPair != null ? this.keyPair.hashCode() : 0);
            result = 31 * result + (this.loginPassword != null ? this.loginPassword.hashCode() : 0);
            result = 31 * result + (this.nodeCidrMask != null ? this.nodeCidrMask.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.periodUnit != null ? this.periodUnit.hashCode() : 0);
            result = 31 * result + (this.profile != null ? this.profile.hashCode() : 0);
            result = 31 * result + (this.proxyMode != null ? this.proxyMode.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.serviceCidr != null ? this.serviceCidr.hashCode() : 0);
            result = 31 * result + (this.snatEntry != null ? this.snatEntry.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.timeoutMins != null ? this.timeoutMins.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            result = 31 * result + (this.vSwitchIds != null ? this.vSwitchIds.hashCode() : 0);
            result = 31 * result + (this.workerDataDisk != null ? this.workerDataDisk.hashCode() : 0);
            result = 31 * result + (this.workerDataDiskCategory != null ? this.workerDataDiskCategory.hashCode() : 0);
            result = 31 * result + (this.workerDataDisks != null ? this.workerDataDisks.hashCode() : 0);
            result = 31 * result + (this.workerDataDiskSize != null ? this.workerDataDiskSize.hashCode() : 0);
            result = 31 * result + (this.workerInstanceTypes != null ? this.workerInstanceTypes.hashCode() : 0);
            result = 31 * result + (this.workerSystemDiskCategory != null ? this.workerSystemDiskCategory.hashCode() : 0);
            result = 31 * result + (this.workerSystemDiskSize != null ? this.workerSystemDiskSize.hashCode() : 0);
            result = 31 * result + (this.zoneIds != null ? this.zoneIds.hashCode() : 0);
            return result;
        }
    }
}
