package com.aliyun.ros.cdk.cs;

/**
 * Properties for defining a `ALIYUN::CS::ManagedKubernetesCluster`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.59.0 (build eb02c92)", date = "2022-05-20T02:42:01.384Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.ManagedKubernetesClusterProps")
@software.amazon.jsii.Jsii.Proxy(ManagedKubernetesClusterProps.Jsii$Proxy.class)
public interface ManagedKubernetesClusterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property name: The name of the cluster.
     * <p>
     * The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     * Property vpcId: VPC ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     * Property vSwitchIds: The virtual switch ID of the worker node.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchIds();

    /**
     * Property workerInstanceTypes: Worker node ECS specification type code.
     * <p>
     * For more details, see Instance Specification Family.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getWorkerInstanceTypes();

    /**
     * Property addons: A combination of addon plugins for Kubernetes clusters.
     * <p>
     * Network plug-in: including Flannel and Terway network plug-ins
     * Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
     * Ingress: The installation of the Ingress component is enabled by default.
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
     * Property cisEnabled: Specifies whether to enable Center for Internet Security (CIS) reinforcement.
     * <p>
     * For more information, see CIS reinforcement.
     * Valid values:
     * true: enables CIS reinforcement.
     * false: disables CIS reinforcement.
     * Default value: false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCisEnabled() {
        return null;
    }

    /**
     * Property cloudMonitorFlags: Whether to install the cloud monitoring plugin: true: indicates installation false: Do not install Default to false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCloudMonitorFlags() {
        return null;
    }

    /**
     * Property clusterSpec: The managed cluster spec.
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
     * Property encryptionProviderKey: The ID of the key that is managed by Key Management Service (KMS).
     * <p>
     * This key is used to encrypt data disks.You can use KMS in only professional managed Kubernetes clusters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEncryptionProviderKey() {
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
     * Property formatDisk: Specifies whether to mount a data disk to nodes that are created  on existing Elastic Compute Service (ECS) instances.
     * <p>
     * Valid values:
     * true: stores the data of containers and images on a data disk.
     * The original data on the disk will be overwritten.
     * Back up data before you mount the disk.
     * false: does not store the data of containers and images on a data disk.
     * Default value: false.
     * How to mount a data disk:
     * If the ECS instances have data disks mounted and the file system of the last
     * data disk is not initialized, the system automatically formats the data disk to ext4.
     * Then, the system mounts the data disk to /var/lib/docker and /var/lib/kubelet.
     * The system does not create or mount a new data disk if no data disk has been
     * mounted to the ECS instances.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFormatDisk() {
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
     * Property keepInstanceName: Specifies whether to retain the names of existing ECS instances that are used in the cluster.
     * <p>
     * true: retains the names.
     * false: does not retain the names. The new names are assigned by the system.
     * Default value: true.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKeepInstanceName() {
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
     * Property numOfNodes: Number of worker nodes.
     * <p>
     * The range is [0,300].
     * Default to 3.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNumOfNodes() {
        return null;
    }

    /**
     * Property osType: The type of operating system.
     * <p>
     * Valid values:
     * Windows
     * Linux
     * Default value: Linux.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOsType() {
        return null;
    }

    /**
     * Property period: The duration of the annual subscription and monthly subscription.
     * <p>
     * It takes effect when the ChargeType value is PrePaid and is a required value. The value range is:
     * When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
     * When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
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
     * Default to Month
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriodUnit() {
        return null;
    }

    /**
     * Property platform: The release version of the operating system.
     * <p>
     * Valid values:
     * CentOS
     * AliyunLinux
     * QbootAliyunLinux
     * Qboot
     * Windows
     * WindowsCore
     * Default value: CentOS.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPlatform() {
        return null;
    }

    /**
     * Property podVswitchIds: The list of pod vSwitches.
     * <p>
     * For each vSwitch that is allocated to nodes,
     * you must specify at least one pod vSwitch in the same zone.
     * The pod vSwitches cannot be the same as the node vSwitches.
     * We recommend that you set the mask length of the CIDR block to a value no
     * greater than 19 for the pod vSwitches.
     * The pod_vswitch_ids parameter is required when the Terway network
     * plug-in is selected for the cluster.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPodVswitchIds() {
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
     * Property runtime: The container runtime of the cluster.
     * <p>
     * The default runtime is Docker.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRuntime() {
        return null;
    }

    /**
     * Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupId() {
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
     * Property socEnabled: Valid values: true: enables reinforcement based on classified protection.
     * <p>
     * false: disables reinforcement based on classified protection.
     * Default value: false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSocEnabled() {
        return null;
    }

    /**
     * Property tags: Tag the cluster.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property taint: It is used to mark nodes with taints.
     * <p>
     * It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTaint() {
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
     * Property userData: The user-defined data.
     * <p>
     * [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUserData() {
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
     * Property workerDataDisks: A combination of configurations such as worker data disk type and size.
     * <p>
     * This parameter is valid only when the worker node data disk is mounted.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWorkerDataDisks() {
        return null;
    }

    /**
     * Property workerSystemDiskCategory: Worker node system disk type.
     * <p>
     * The value includes:
     * cloud_efficiency: efficient cloud disk
     * cloud_ssd: SSD cloud disk
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
     * @return a {@link Builder} of {@link ManagedKubernetesClusterProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ManagedKubernetesClusterProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ManagedKubernetesClusterProps> {
        java.lang.Object name;
        java.lang.Object vpcId;
        java.lang.Object vSwitchIds;
        java.lang.Object workerInstanceTypes;
        java.lang.Object addons;
        java.lang.Object autoRenew;
        java.lang.Object autoRenewPeriod;
        java.lang.Object chargeType;
        java.lang.Object cisEnabled;
        java.lang.Object cloudMonitorFlags;
        java.lang.Object clusterSpec;
        java.lang.Object containerCidr;
        java.lang.Object deletionProtection;
        java.lang.Object disableRollback;
        java.lang.Object encryptionProviderKey;
        java.lang.Object endpointPublicAccess;
        java.lang.Object formatDisk;
        java.lang.Object isEnterpriseSecurityGroup;
        java.lang.Object keepInstanceName;
        java.lang.Object keyPair;
        java.lang.Object kubernetesVersion;
        java.lang.Object loadBalancerSpec;
        java.lang.Object loginPassword;
        java.lang.Object nodeCidrMask;
        java.lang.Object numOfNodes;
        java.lang.Object osType;
        java.lang.Object period;
        java.lang.Object periodUnit;
        java.lang.Object platform;
        java.lang.Object podVswitchIds;
        java.lang.Object proxyMode;
        java.lang.Object resourceGroupId;
        java.lang.Object runtime;
        java.lang.Object securityGroupId;
        java.lang.Object serviceCidr;
        java.lang.Object snatEntry;
        java.lang.Object socEnabled;
        java.util.List<com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster.TagsProperty> tags;
        java.lang.Object taint;
        java.lang.Object timeoutMins;
        java.lang.Object userData;
        java.lang.Object workerDataDisk;
        java.lang.Object workerDataDisks;
        java.lang.Object workerSystemDiskCategory;
        java.lang.Object workerSystemDiskSize;
        java.lang.Object zoneIds;

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getName}
         * @param name Property name: The name of the cluster. This parameter is required.
         *             The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getName}
         * @param name Property name: The name of the cluster. This parameter is required.
         *             The cluster name can use uppercase and lowercase letters, Chinese characters, numbers, and dashes.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getVpcId}
         * @param vpcId Property vpcId: VPC ID. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getVpcId}
         * @param vpcId Property vpcId: VPC ID. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getVSwitchIds}
         * @param vSwitchIds Property vSwitchIds: The virtual switch ID of the worker node. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchIds(java.util.List<? extends java.lang.Object> vSwitchIds) {
            this.vSwitchIds = vSwitchIds;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getVSwitchIds}
         * @param vSwitchIds Property vSwitchIds: The virtual switch ID of the worker node. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchIds(com.aliyun.ros.cdk.core.IResolvable vSwitchIds) {
            this.vSwitchIds = vSwitchIds;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getWorkerInstanceTypes}
         * @param workerInstanceTypes Property workerInstanceTypes: Worker node ECS specification type code. This parameter is required.
         *                            For more details, see Instance Specification Family.
         * @return {@code this}
         */
        public Builder workerInstanceTypes(com.aliyun.ros.cdk.core.IResolvable workerInstanceTypes) {
            this.workerInstanceTypes = workerInstanceTypes;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getWorkerInstanceTypes}
         * @param workerInstanceTypes Property workerInstanceTypes: Worker node ECS specification type code. This parameter is required.
         *                            For more details, see Instance Specification Family.
         * @return {@code this}
         */
        public Builder workerInstanceTypes(java.util.List<? extends java.lang.Object> workerInstanceTypes) {
            this.workerInstanceTypes = workerInstanceTypes;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getAddons}
         * @param addons Property addons: A combination of addon plugins for Kubernetes clusters.
         *               Network plug-in: including Flannel and Terway network plug-ins
         *               Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
         *               Ingress: The installation of the Ingress component is enabled by default.
         * @return {@code this}
         */
        public Builder addons(com.aliyun.ros.cdk.core.IResolvable addons) {
            this.addons = addons;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getAddons}
         * @param addons Property addons: A combination of addon plugins for Kubernetes clusters.
         *               Network plug-in: including Flannel and Terway network plug-ins
         *               Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
         *               Ingress: The installation of the Ingress component is enabled by default.
         * @return {@code this}
         */
        public Builder addons(java.util.List<? extends java.lang.Object> addons) {
            this.addons = addons;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getAutoRenew}
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
         * Sets the value of {@link ManagedKubernetesClusterProps#getAutoRenew}
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
         * Sets the value of {@link ManagedKubernetesClusterProps#getAutoRenewPeriod}
         * @param autoRenewPeriod Property autoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required: When PeriodUnit = Week, the values are: {"1", "2", "3"} When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"} Default to 1.
         * @return {@code this}
         */
        public Builder autoRenewPeriod(java.lang.Number autoRenewPeriod) {
            this.autoRenewPeriod = autoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getAutoRenewPeriod}
         * @param autoRenewPeriod Property autoRenewPeriod: Automatic renewal cycle, which takes effect when prepaid and automatic renewal are selected, and is required: When PeriodUnit = Week, the values are: {"1", "2", "3"} When PeriodUnit = Month, the value is {"1", "2", "3", "6", "12"} Default to 1.
         * @return {@code this}
         */
        public Builder autoRenewPeriod(com.aliyun.ros.cdk.core.IResolvable autoRenewPeriod) {
            this.autoRenewPeriod = autoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getChargeType}
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
         * Sets the value of {@link ManagedKubernetesClusterProps#getChargeType}
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
         * Sets the value of {@link ManagedKubernetesClusterProps#getCisEnabled}
         * @param cisEnabled Property cisEnabled: Specifies whether to enable Center for Internet Security (CIS) reinforcement.
         *                   For more information, see CIS reinforcement.
         *                   Valid values:
         *                   true: enables CIS reinforcement.
         *                   false: disables CIS reinforcement.
         *                   Default value: false.
         * @return {@code this}
         */
        public Builder cisEnabled(java.lang.Boolean cisEnabled) {
            this.cisEnabled = cisEnabled;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getCisEnabled}
         * @param cisEnabled Property cisEnabled: Specifies whether to enable Center for Internet Security (CIS) reinforcement.
         *                   For more information, see CIS reinforcement.
         *                   Valid values:
         *                   true: enables CIS reinforcement.
         *                   false: disables CIS reinforcement.
         *                   Default value: false.
         * @return {@code this}
         */
        public Builder cisEnabled(com.aliyun.ros.cdk.core.IResolvable cisEnabled) {
            this.cisEnabled = cisEnabled;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getCloudMonitorFlags}
         * @param cloudMonitorFlags Property cloudMonitorFlags: Whether to install the cloud monitoring plugin: true: indicates installation false: Do not install Default to false.
         * @return {@code this}
         */
        public Builder cloudMonitorFlags(java.lang.Boolean cloudMonitorFlags) {
            this.cloudMonitorFlags = cloudMonitorFlags;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getCloudMonitorFlags}
         * @param cloudMonitorFlags Property cloudMonitorFlags: Whether to install the cloud monitoring plugin: true: indicates installation false: Do not install Default to false.
         * @return {@code this}
         */
        public Builder cloudMonitorFlags(com.aliyun.ros.cdk.core.IResolvable cloudMonitorFlags) {
            this.cloudMonitorFlags = cloudMonitorFlags;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getClusterSpec}
         * @param clusterSpec Property clusterSpec: The managed cluster spec.
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
         * Sets the value of {@link ManagedKubernetesClusterProps#getClusterSpec}
         * @param clusterSpec Property clusterSpec: The managed cluster spec.
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
         * Sets the value of {@link ManagedKubernetesClusterProps#getContainerCidr}
         * @param containerCidr Property containerCidr: The container network segment cannot conflict with the VPC network segment.
         *                      When the system is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
         * @return {@code this}
         */
        public Builder containerCidr(java.lang.String containerCidr) {
            this.containerCidr = containerCidr;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getContainerCidr}
         * @param containerCidr Property containerCidr: The container network segment cannot conflict with the VPC network segment.
         *                      When the system is selected to automatically create a VPC, the network segment 172.16.0.0/16 is used by default.
         * @return {@code this}
         */
        public Builder containerCidr(com.aliyun.ros.cdk.core.IResolvable containerCidr) {
            this.containerCidr = containerCidr;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getDeletionProtection}
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
         * Sets the value of {@link ManagedKubernetesClusterProps#getDeletionProtection}
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
         * Sets the value of {@link ManagedKubernetesClusterProps#getDisableRollback}
         * @param disableRollback Property disableRollback: Whether the failure was rolled back: true: indicates that it fails to roll back false: rollback failed The default is true.
         *                        If rollback fails, resources produced during the creation process will be released. False is not recommended.
         * @return {@code this}
         */
        public Builder disableRollback(java.lang.Boolean disableRollback) {
            this.disableRollback = disableRollback;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getDisableRollback}
         * @param disableRollback Property disableRollback: Whether the failure was rolled back: true: indicates that it fails to roll back false: rollback failed The default is true.
         *                        If rollback fails, resources produced during the creation process will be released. False is not recommended.
         * @return {@code this}
         */
        public Builder disableRollback(com.aliyun.ros.cdk.core.IResolvable disableRollback) {
            this.disableRollback = disableRollback;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getEncryptionProviderKey}
         * @param encryptionProviderKey Property encryptionProviderKey: The ID of the key that is managed by Key Management Service (KMS).
         *                              This key is used to encrypt data disks.You can use KMS in only professional managed Kubernetes clusters.
         * @return {@code this}
         */
        public Builder encryptionProviderKey(java.lang.String encryptionProviderKey) {
            this.encryptionProviderKey = encryptionProviderKey;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getEncryptionProviderKey}
         * @param encryptionProviderKey Property encryptionProviderKey: The ID of the key that is managed by Key Management Service (KMS).
         *                              This key is used to encrypt data disks.You can use KMS in only professional managed Kubernetes clusters.
         * @return {@code this}
         */
        public Builder encryptionProviderKey(com.aliyun.ros.cdk.core.IResolvable encryptionProviderKey) {
            this.encryptionProviderKey = encryptionProviderKey;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getEndpointPublicAccess}
         * @param endpointPublicAccess Property endpointPublicAccess: Whether to enable the public network API Server: true: which means that the public network API Server is open.
         *                             false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
         * @return {@code this}
         */
        public Builder endpointPublicAccess(java.lang.Boolean endpointPublicAccess) {
            this.endpointPublicAccess = endpointPublicAccess;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getEndpointPublicAccess}
         * @param endpointPublicAccess Property endpointPublicAccess: Whether to enable the public network API Server: true: which means that the public network API Server is open.
         *                             false: If set to false, the API server on the public network will not be created, only the API server on the private network will be created.Default to false.
         * @return {@code this}
         */
        public Builder endpointPublicAccess(com.aliyun.ros.cdk.core.IResolvable endpointPublicAccess) {
            this.endpointPublicAccess = endpointPublicAccess;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getFormatDisk}
         * @param formatDisk Property formatDisk: Specifies whether to mount a data disk to nodes that are created  on existing Elastic Compute Service (ECS) instances.
         *                   Valid values:
         *                   true: stores the data of containers and images on a data disk.
         *                   The original data on the disk will be overwritten.
         *                   Back up data before you mount the disk.
         *                   false: does not store the data of containers and images on a data disk.
         *                   Default value: false.
         *                   How to mount a data disk:
         *                   If the ECS instances have data disks mounted and the file system of the last
         *                   data disk is not initialized, the system automatically formats the data disk to ext4.
         *                   Then, the system mounts the data disk to /var/lib/docker and /var/lib/kubelet.
         *                   The system does not create or mount a new data disk if no data disk has been
         *                   mounted to the ECS instances.
         * @return {@code this}
         */
        public Builder formatDisk(java.lang.Boolean formatDisk) {
            this.formatDisk = formatDisk;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getFormatDisk}
         * @param formatDisk Property formatDisk: Specifies whether to mount a data disk to nodes that are created  on existing Elastic Compute Service (ECS) instances.
         *                   Valid values:
         *                   true: stores the data of containers and images on a data disk.
         *                   The original data on the disk will be overwritten.
         *                   Back up data before you mount the disk.
         *                   false: does not store the data of containers and images on a data disk.
         *                   Default value: false.
         *                   How to mount a data disk:
         *                   If the ECS instances have data disks mounted and the file system of the last
         *                   data disk is not initialized, the system automatically formats the data disk to ext4.
         *                   Then, the system mounts the data disk to /var/lib/docker and /var/lib/kubelet.
         *                   The system does not create or mount a new data disk if no data disk has been
         *                   mounted to the ECS instances.
         * @return {@code this}
         */
        public Builder formatDisk(com.aliyun.ros.cdk.core.IResolvable formatDisk) {
            this.formatDisk = formatDisk;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getIsEnterpriseSecurityGroup}
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
         * Sets the value of {@link ManagedKubernetesClusterProps#getIsEnterpriseSecurityGroup}
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
         * Sets the value of {@link ManagedKubernetesClusterProps#getKeepInstanceName}
         * @param keepInstanceName Property keepInstanceName: Specifies whether to retain the names of existing ECS instances that are used in the cluster.
         *                         true: retains the names.
         *                         false: does not retain the names. The new names are assigned by the system.
         *                         Default value: true.
         * @return {@code this}
         */
        public Builder keepInstanceName(java.lang.Boolean keepInstanceName) {
            this.keepInstanceName = keepInstanceName;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getKeepInstanceName}
         * @param keepInstanceName Property keepInstanceName: Specifies whether to retain the names of existing ECS instances that are used in the cluster.
         *                         true: retains the names.
         *                         false: does not retain the names. The new names are assigned by the system.
         *                         Default value: true.
         * @return {@code this}
         */
        public Builder keepInstanceName(com.aliyun.ros.cdk.core.IResolvable keepInstanceName) {
            this.keepInstanceName = keepInstanceName;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getKeyPair}
         * @param keyPair Property keyPair: Key pair name.
         *                Specify one of KeyPair or LoginPassword.
         * @return {@code this}
         */
        public Builder keyPair(java.lang.String keyPair) {
            this.keyPair = keyPair;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getKeyPair}
         * @param keyPair Property keyPair: Key pair name.
         *                Specify one of KeyPair or LoginPassword.
         * @return {@code this}
         */
        public Builder keyPair(com.aliyun.ros.cdk.core.IResolvable keyPair) {
            this.keyPair = keyPair;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getKubernetesVersion}
         * @param kubernetesVersion Property kubernetesVersion: The version of the Kubernetes cluster.
         * @return {@code this}
         */
        public Builder kubernetesVersion(java.lang.String kubernetesVersion) {
            this.kubernetesVersion = kubernetesVersion;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getKubernetesVersion}
         * @param kubernetesVersion Property kubernetesVersion: The version of the Kubernetes cluster.
         * @return {@code this}
         */
        public Builder kubernetesVersion(com.aliyun.ros.cdk.core.IResolvable kubernetesVersion) {
            this.kubernetesVersion = kubernetesVersion;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getLoadBalancerSpec}
         * @param loadBalancerSpec Property loadBalancerSpec: The specification of the Server Load Balancer instance.
         *                         Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large
         * @return {@code this}
         */
        public Builder loadBalancerSpec(java.lang.String loadBalancerSpec) {
            this.loadBalancerSpec = loadBalancerSpec;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getLoadBalancerSpec}
         * @param loadBalancerSpec Property loadBalancerSpec: The specification of the Server Load Balancer instance.
         *                         Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large
         * @return {@code this}
         */
        public Builder loadBalancerSpec(com.aliyun.ros.cdk.core.IResolvable loadBalancerSpec) {
            this.loadBalancerSpec = loadBalancerSpec;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getLoginPassword}
         * @param loginPassword Property loginPassword: SSH login password.
         *                      Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
         * @return {@code this}
         */
        public Builder loginPassword(java.lang.String loginPassword) {
            this.loginPassword = loginPassword;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getLoginPassword}
         * @param loginPassword Property loginPassword: SSH login password.
         *                      Password rules are 8-30 characters and contain three items (upper and lower case letters, numbers, and special symbols). Specify one of KeyPair or LoginPassword.
         * @return {@code this}
         */
        public Builder loginPassword(com.aliyun.ros.cdk.core.IResolvable loginPassword) {
            this.loginPassword = loginPassword;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getNodeCidrMask}
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
         * Sets the value of {@link ManagedKubernetesClusterProps#getNodeCidrMask}
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
         * Sets the value of {@link ManagedKubernetesClusterProps#getNumOfNodes}
         * @param numOfNodes Property numOfNodes: Number of worker nodes.
         *                   The range is [0,300].
         *                   Default to 3.
         * @return {@code this}
         */
        public Builder numOfNodes(java.lang.Number numOfNodes) {
            this.numOfNodes = numOfNodes;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getNumOfNodes}
         * @param numOfNodes Property numOfNodes: Number of worker nodes.
         *                   The range is [0,300].
         *                   Default to 3.
         * @return {@code this}
         */
        public Builder numOfNodes(com.aliyun.ros.cdk.core.IResolvable numOfNodes) {
            this.numOfNodes = numOfNodes;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getOsType}
         * @param osType Property osType: The type of operating system.
         *               Valid values:
         *               Windows
         *               Linux
         *               Default value: Linux.
         * @return {@code this}
         */
        public Builder osType(java.lang.String osType) {
            this.osType = osType;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getOsType}
         * @param osType Property osType: The type of operating system.
         *               Valid values:
         *               Windows
         *               Linux
         *               Default value: Linux.
         * @return {@code this}
         */
        public Builder osType(com.aliyun.ros.cdk.core.IResolvable osType) {
            this.osType = osType;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getPeriod}
         * @param period Property period: The duration of the annual subscription and monthly subscription.
         *               It takes effect when the ChargeType value is PrePaid and is a required value. The value range is:
         *               When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
         *               When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
         *               Default to 1.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getPeriod}
         * @param period Property period: The duration of the annual subscription and monthly subscription.
         *               It takes effect when the ChargeType value is PrePaid and is a required value. The value range is:
         *               When PeriodUnit = Week, Period values are: {"1", "2", "3", "4"}
         *               When PeriodUnit = Month, Period values are: {"1", "2", "3", "4", "5", "6", "7", "8", "9", "12", "24", "36", "48", "60"}
         *               Default to 1.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getPeriodUnit}
         * @param periodUnit Property periodUnit: When you specify PrePaid, you need to specify the period.
         *                   The options are:
         *                   Week: Time is measured in weeks
         *                   Month: time in months
         *                   Default to Month
         * @return {@code this}
         */
        public Builder periodUnit(java.lang.String periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getPeriodUnit}
         * @param periodUnit Property periodUnit: When you specify PrePaid, you need to specify the period.
         *                   The options are:
         *                   Week: Time is measured in weeks
         *                   Month: time in months
         *                   Default to Month
         * @return {@code this}
         */
        public Builder periodUnit(com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getPlatform}
         * @param platform Property platform: The release version of the operating system.
         *                 Valid values:
         *                 CentOS
         *                 AliyunLinux
         *                 QbootAliyunLinux
         *                 Qboot
         *                 Windows
         *                 WindowsCore
         *                 Default value: CentOS.
         * @return {@code this}
         */
        public Builder platform(java.lang.String platform) {
            this.platform = platform;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getPlatform}
         * @param platform Property platform: The release version of the operating system.
         *                 Valid values:
         *                 CentOS
         *                 AliyunLinux
         *                 QbootAliyunLinux
         *                 Qboot
         *                 Windows
         *                 WindowsCore
         *                 Default value: CentOS.
         * @return {@code this}
         */
        public Builder platform(com.aliyun.ros.cdk.core.IResolvable platform) {
            this.platform = platform;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getPodVswitchIds}
         * @param podVswitchIds Property podVswitchIds: The list of pod vSwitches.
         *                      For each vSwitch that is allocated to nodes,
         *                      you must specify at least one pod vSwitch in the same zone.
         *                      The pod vSwitches cannot be the same as the node vSwitches.
         *                      We recommend that you set the mask length of the CIDR block to a value no
         *                      greater than 19 for the pod vSwitches.
         *                      The pod_vswitch_ids parameter is required when the Terway network
         *                      plug-in is selected for the cluster.
         * @return {@code this}
         */
        public Builder podVswitchIds(com.aliyun.ros.cdk.core.IResolvable podVswitchIds) {
            this.podVswitchIds = podVswitchIds;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getPodVswitchIds}
         * @param podVswitchIds Property podVswitchIds: The list of pod vSwitches.
         *                      For each vSwitch that is allocated to nodes,
         *                      you must specify at least one pod vSwitch in the same zone.
         *                      The pod vSwitches cannot be the same as the node vSwitches.
         *                      We recommend that you set the mask length of the CIDR block to a value no
         *                      greater than 19 for the pod vSwitches.
         *                      The pod_vswitch_ids parameter is required when the Terway network
         *                      plug-in is selected for the cluster.
         * @return {@code this}
         */
        public Builder podVswitchIds(java.util.List<? extends java.lang.Object> podVswitchIds) {
            this.podVswitchIds = podVswitchIds;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getProxyMode}
         * @param proxyMode Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes.
         *                  The default is iptables.
         * @return {@code this}
         */
        public Builder proxyMode(java.lang.String proxyMode) {
            this.proxyMode = proxyMode;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getProxyMode}
         * @param proxyMode Property proxyMode: kube-proxy proxy mode, supports both iptables and ipvs modes.
         *                  The default is iptables.
         * @return {@code this}
         */
        public Builder proxyMode(com.aliyun.ros.cdk.core.IResolvable proxyMode) {
            this.proxyMode = proxyMode;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getRuntime}
         * @param runtime Property runtime: The container runtime of the cluster.
         *                The default runtime is Docker.
         * @return {@code this}
         */
        public Builder runtime(com.aliyun.ros.cdk.core.IResolvable runtime) {
            this.runtime = runtime;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getRuntime}
         * @param runtime Property runtime: The container runtime of the cluster.
         *                The default runtime is Docker.
         * @return {@code this}
         */
        public Builder runtime(com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster.RuntimeProperty runtime) {
            this.runtime = runtime;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: Specifies the ID of the security group to which the cluster ECS instance belongs.
         * @return {@code this}
         */
        public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getServiceCidr}
         * @param serviceCidr Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment.
         *                    When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
         * @return {@code this}
         */
        public Builder serviceCidr(java.lang.String serviceCidr) {
            this.serviceCidr = serviceCidr;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getServiceCidr}
         * @param serviceCidr Property serviceCidr: The service network segment cannot conflict with the VPC network segment and the container network segment.
         *                    When the system is selected to automatically create a VPC, the network segment 172.19.0.0/20 is used by default.
         * @return {@code this}
         */
        public Builder serviceCidr(com.aliyun.ros.cdk.core.IResolvable serviceCidr) {
            this.serviceCidr = serviceCidr;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getSnatEntry}
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
         * Sets the value of {@link ManagedKubernetesClusterProps#getSnatEntry}
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
         * Sets the value of {@link ManagedKubernetesClusterProps#getSocEnabled}
         * @param socEnabled Property socEnabled: Valid values: true: enables reinforcement based on classified protection.
         *                   false: disables reinforcement based on classified protection.
         *                   Default value: false.
         * @return {@code this}
         */
        public Builder socEnabled(java.lang.Boolean socEnabled) {
            this.socEnabled = socEnabled;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getSocEnabled}
         * @param socEnabled Property socEnabled: Valid values: true: enables reinforcement based on classified protection.
         *                   false: disables reinforcement based on classified protection.
         *                   Default value: false.
         * @return {@code this}
         */
        public Builder socEnabled(com.aliyun.ros.cdk.core.IResolvable socEnabled) {
            this.socEnabled = socEnabled;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getTags}
         * @param tags Property tags: Tag the cluster.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getTaint}
         * @param taint Property taint: It is used to mark nodes with taints.
         *              It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
         * @return {@code this}
         */
        public Builder taint(com.aliyun.ros.cdk.core.IResolvable taint) {
            this.taint = taint;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getTaint}
         * @param taint Property taint: It is used to mark nodes with taints.
         *              It is usually used for the scheduling strategy of Pods. The corresponding concept is: tolerance. If there is a corresponding tolerance mark on the Pods, the stain on the node can be tolerated and scheduled to the node.
         * @return {@code this}
         */
        public Builder taint(java.util.List<? extends java.util.Map<java.lang.String, ? extends java.lang.Object>> taint) {
            this.taint = taint;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getTimeoutMins}
         * @param timeoutMins Property timeoutMins: Cluster resource stack creation timeout, in minutes.
         *                    The default value is 60.
         * @return {@code this}
         */
        public Builder timeoutMins(java.lang.Number timeoutMins) {
            this.timeoutMins = timeoutMins;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getTimeoutMins}
         * @param timeoutMins Property timeoutMins: Cluster resource stack creation timeout, in minutes.
         *                    The default value is 60.
         * @return {@code this}
         */
        public Builder timeoutMins(com.aliyun.ros.cdk.core.IResolvable timeoutMins) {
            this.timeoutMins = timeoutMins;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getUserData}
         * @param userData Property userData: The user-defined data.
         *                 [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
         * @return {@code this}
         */
        public Builder userData(java.lang.String userData) {
            this.userData = userData;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getUserData}
         * @param userData Property userData: The user-defined data.
         *                 [1, 16KB] characters.User data should not be base64 encoded. If you want to pass base64 encoded string to the property, use function Fn::Base64Decode to decode the base64 string first.
         * @return {@code this}
         */
        public Builder userData(com.aliyun.ros.cdk.core.IResolvable userData) {
            this.userData = userData;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getWorkerDataDisk}
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
         * Sets the value of {@link ManagedKubernetesClusterProps#getWorkerDataDisk}
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
         * Sets the value of {@link ManagedKubernetesClusterProps#getWorkerDataDisks}
         * @param workerDataDisks Property workerDataDisks: A combination of configurations such as worker data disk type and size.
         *                        This parameter is valid only when the worker node data disk is mounted.
         * @return {@code this}
         */
        public Builder workerDataDisks(com.aliyun.ros.cdk.core.IResolvable workerDataDisks) {
            this.workerDataDisks = workerDataDisks;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getWorkerDataDisks}
         * @param workerDataDisks Property workerDataDisks: A combination of configurations such as worker data disk type and size.
         *                        This parameter is valid only when the worker node data disk is mounted.
         * @return {@code this}
         */
        public Builder workerDataDisks(java.util.List<? extends java.lang.Object> workerDataDisks) {
            this.workerDataDisks = workerDataDisks;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getWorkerSystemDiskCategory}
         * @param workerSystemDiskCategory Property workerSystemDiskCategory: Worker node system disk type.
         *                                 The value includes:
         *                                 cloud_efficiency: efficient cloud disk
         *                                 cloud_ssd: SSD cloud disk
         *                                 Default to cloud_efficiency.
         * @return {@code this}
         */
        public Builder workerSystemDiskCategory(java.lang.String workerSystemDiskCategory) {
            this.workerSystemDiskCategory = workerSystemDiskCategory;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getWorkerSystemDiskCategory}
         * @param workerSystemDiskCategory Property workerSystemDiskCategory: Worker node system disk type.
         *                                 The value includes:
         *                                 cloud_efficiency: efficient cloud disk
         *                                 cloud_ssd: SSD cloud disk
         *                                 Default to cloud_efficiency.
         * @return {@code this}
         */
        public Builder workerSystemDiskCategory(com.aliyun.ros.cdk.core.IResolvable workerSystemDiskCategory) {
            this.workerSystemDiskCategory = workerSystemDiskCategory;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getWorkerSystemDiskSize}
         * @param workerSystemDiskSize Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
         *                             Default to 120.
         * @return {@code this}
         */
        public Builder workerSystemDiskSize(java.lang.Number workerSystemDiskSize) {
            this.workerSystemDiskSize = workerSystemDiskSize;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getWorkerSystemDiskSize}
         * @param workerSystemDiskSize Property workerSystemDiskSize: Worker disk system disk size, the unit is GiB.
         *                             Default to 120.
         * @return {@code this}
         */
        public Builder workerSystemDiskSize(com.aliyun.ros.cdk.core.IResolvable workerSystemDiskSize) {
            this.workerSystemDiskSize = workerSystemDiskSize;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getZoneIds}
         * @param zoneIds Property zoneIds: Zone ids of worker node virtual switches belongs to.
         * @return {@code this}
         */
        public Builder zoneIds(com.aliyun.ros.cdk.core.IResolvable zoneIds) {
            this.zoneIds = zoneIds;
            return this;
        }

        /**
         * Sets the value of {@link ManagedKubernetesClusterProps#getZoneIds}
         * @param zoneIds Property zoneIds: Zone ids of worker node virtual switches belongs to.
         * @return {@code this}
         */
        public Builder zoneIds(java.util.List<? extends java.lang.Object> zoneIds) {
            this.zoneIds = zoneIds;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ManagedKubernetesClusterProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ManagedKubernetesClusterProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ManagedKubernetesClusterProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ManagedKubernetesClusterProps {
        private final java.lang.Object name;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchIds;
        private final java.lang.Object workerInstanceTypes;
        private final java.lang.Object addons;
        private final java.lang.Object autoRenew;
        private final java.lang.Object autoRenewPeriod;
        private final java.lang.Object chargeType;
        private final java.lang.Object cisEnabled;
        private final java.lang.Object cloudMonitorFlags;
        private final java.lang.Object clusterSpec;
        private final java.lang.Object containerCidr;
        private final java.lang.Object deletionProtection;
        private final java.lang.Object disableRollback;
        private final java.lang.Object encryptionProviderKey;
        private final java.lang.Object endpointPublicAccess;
        private final java.lang.Object formatDisk;
        private final java.lang.Object isEnterpriseSecurityGroup;
        private final java.lang.Object keepInstanceName;
        private final java.lang.Object keyPair;
        private final java.lang.Object kubernetesVersion;
        private final java.lang.Object loadBalancerSpec;
        private final java.lang.Object loginPassword;
        private final java.lang.Object nodeCidrMask;
        private final java.lang.Object numOfNodes;
        private final java.lang.Object osType;
        private final java.lang.Object period;
        private final java.lang.Object periodUnit;
        private final java.lang.Object platform;
        private final java.lang.Object podVswitchIds;
        private final java.lang.Object proxyMode;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object runtime;
        private final java.lang.Object securityGroupId;
        private final java.lang.Object serviceCidr;
        private final java.lang.Object snatEntry;
        private final java.lang.Object socEnabled;
        private final java.util.List<com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster.TagsProperty> tags;
        private final java.lang.Object taint;
        private final java.lang.Object timeoutMins;
        private final java.lang.Object userData;
        private final java.lang.Object workerDataDisk;
        private final java.lang.Object workerDataDisks;
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
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchIds = software.amazon.jsii.Kernel.get(this, "vSwitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workerInstanceTypes = software.amazon.jsii.Kernel.get(this, "workerInstanceTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.addons = software.amazon.jsii.Kernel.get(this, "addons", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenewPeriod = software.amazon.jsii.Kernel.get(this, "autoRenewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.chargeType = software.amazon.jsii.Kernel.get(this, "chargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cisEnabled = software.amazon.jsii.Kernel.get(this, "cisEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cloudMonitorFlags = software.amazon.jsii.Kernel.get(this, "cloudMonitorFlags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clusterSpec = software.amazon.jsii.Kernel.get(this, "clusterSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.containerCidr = software.amazon.jsii.Kernel.get(this, "containerCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deletionProtection = software.amazon.jsii.Kernel.get(this, "deletionProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.disableRollback = software.amazon.jsii.Kernel.get(this, "disableRollback", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.encryptionProviderKey = software.amazon.jsii.Kernel.get(this, "encryptionProviderKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endpointPublicAccess = software.amazon.jsii.Kernel.get(this, "endpointPublicAccess", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.formatDisk = software.amazon.jsii.Kernel.get(this, "formatDisk", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.isEnterpriseSecurityGroup = software.amazon.jsii.Kernel.get(this, "isEnterpriseSecurityGroup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.keepInstanceName = software.amazon.jsii.Kernel.get(this, "keepInstanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.keyPair = software.amazon.jsii.Kernel.get(this, "keyPair", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.kubernetesVersion = software.amazon.jsii.Kernel.get(this, "kubernetesVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loadBalancerSpec = software.amazon.jsii.Kernel.get(this, "loadBalancerSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loginPassword = software.amazon.jsii.Kernel.get(this, "loginPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.nodeCidrMask = software.amazon.jsii.Kernel.get(this, "nodeCidrMask", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.numOfNodes = software.amazon.jsii.Kernel.get(this, "numOfNodes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.osType = software.amazon.jsii.Kernel.get(this, "osType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.platform = software.amazon.jsii.Kernel.get(this, "platform", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.podVswitchIds = software.amazon.jsii.Kernel.get(this, "podVswitchIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.proxyMode = software.amazon.jsii.Kernel.get(this, "proxyMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.runtime = software.amazon.jsii.Kernel.get(this, "runtime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serviceCidr = software.amazon.jsii.Kernel.get(this, "serviceCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.snatEntry = software.amazon.jsii.Kernel.get(this, "snatEntry", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.socEnabled = software.amazon.jsii.Kernel.get(this, "socEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster.TagsProperty.class)));
            this.taint = software.amazon.jsii.Kernel.get(this, "taint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.timeoutMins = software.amazon.jsii.Kernel.get(this, "timeoutMins", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.userData = software.amazon.jsii.Kernel.get(this, "userData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workerDataDisk = software.amazon.jsii.Kernel.get(this, "workerDataDisk", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workerDataDisks = software.amazon.jsii.Kernel.get(this, "workerDataDisks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.vSwitchIds = java.util.Objects.requireNonNull(builder.vSwitchIds, "vSwitchIds is required");
            this.workerInstanceTypes = java.util.Objects.requireNonNull(builder.workerInstanceTypes, "workerInstanceTypes is required");
            this.addons = builder.addons;
            this.autoRenew = builder.autoRenew;
            this.autoRenewPeriod = builder.autoRenewPeriod;
            this.chargeType = builder.chargeType;
            this.cisEnabled = builder.cisEnabled;
            this.cloudMonitorFlags = builder.cloudMonitorFlags;
            this.clusterSpec = builder.clusterSpec;
            this.containerCidr = builder.containerCidr;
            this.deletionProtection = builder.deletionProtection;
            this.disableRollback = builder.disableRollback;
            this.encryptionProviderKey = builder.encryptionProviderKey;
            this.endpointPublicAccess = builder.endpointPublicAccess;
            this.formatDisk = builder.formatDisk;
            this.isEnterpriseSecurityGroup = builder.isEnterpriseSecurityGroup;
            this.keepInstanceName = builder.keepInstanceName;
            this.keyPair = builder.keyPair;
            this.kubernetesVersion = builder.kubernetesVersion;
            this.loadBalancerSpec = builder.loadBalancerSpec;
            this.loginPassword = builder.loginPassword;
            this.nodeCidrMask = builder.nodeCidrMask;
            this.numOfNodes = builder.numOfNodes;
            this.osType = builder.osType;
            this.period = builder.period;
            this.periodUnit = builder.periodUnit;
            this.platform = builder.platform;
            this.podVswitchIds = builder.podVswitchIds;
            this.proxyMode = builder.proxyMode;
            this.resourceGroupId = builder.resourceGroupId;
            this.runtime = builder.runtime;
            this.securityGroupId = builder.securityGroupId;
            this.serviceCidr = builder.serviceCidr;
            this.snatEntry = builder.snatEntry;
            this.socEnabled = builder.socEnabled;
            this.tags = (java.util.List<com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster.TagsProperty>)builder.tags;
            this.taint = builder.taint;
            this.timeoutMins = builder.timeoutMins;
            this.userData = builder.userData;
            this.workerDataDisk = builder.workerDataDisk;
            this.workerDataDisks = builder.workerDataDisks;
            this.workerSystemDiskCategory = builder.workerSystemDiskCategory;
            this.workerSystemDiskSize = builder.workerSystemDiskSize;
            this.zoneIds = builder.zoneIds;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
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
        public final java.lang.Object getWorkerInstanceTypes() {
            return this.workerInstanceTypes;
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
        public final java.lang.Object getCisEnabled() {
            return this.cisEnabled;
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
        public final java.lang.Object getEncryptionProviderKey() {
            return this.encryptionProviderKey;
        }

        @Override
        public final java.lang.Object getEndpointPublicAccess() {
            return this.endpointPublicAccess;
        }

        @Override
        public final java.lang.Object getFormatDisk() {
            return this.formatDisk;
        }

        @Override
        public final java.lang.Object getIsEnterpriseSecurityGroup() {
            return this.isEnterpriseSecurityGroup;
        }

        @Override
        public final java.lang.Object getKeepInstanceName() {
            return this.keepInstanceName;
        }

        @Override
        public final java.lang.Object getKeyPair() {
            return this.keyPair;
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
        public final java.lang.Object getLoginPassword() {
            return this.loginPassword;
        }

        @Override
        public final java.lang.Object getNodeCidrMask() {
            return this.nodeCidrMask;
        }

        @Override
        public final java.lang.Object getNumOfNodes() {
            return this.numOfNodes;
        }

        @Override
        public final java.lang.Object getOsType() {
            return this.osType;
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
        public final java.lang.Object getPlatform() {
            return this.platform;
        }

        @Override
        public final java.lang.Object getPodVswitchIds() {
            return this.podVswitchIds;
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
        public final java.lang.Object getRuntime() {
            return this.runtime;
        }

        @Override
        public final java.lang.Object getSecurityGroupId() {
            return this.securityGroupId;
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
        public final java.lang.Object getSocEnabled() {
            return this.socEnabled;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.cs.RosManagedKubernetesCluster.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getTaint() {
            return this.taint;
        }

        @Override
        public final java.lang.Object getTimeoutMins() {
            return this.timeoutMins;
        }

        @Override
        public final java.lang.Object getUserData() {
            return this.userData;
        }

        @Override
        public final java.lang.Object getWorkerDataDisk() {
            return this.workerDataDisk;
        }

        @Override
        public final java.lang.Object getWorkerDataDisks() {
            return this.workerDataDisks;
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
            data.set("vpcId", om.valueToTree(this.getVpcId()));
            data.set("vSwitchIds", om.valueToTree(this.getVSwitchIds()));
            data.set("workerInstanceTypes", om.valueToTree(this.getWorkerInstanceTypes()));
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
            if (this.getCisEnabled() != null) {
                data.set("cisEnabled", om.valueToTree(this.getCisEnabled()));
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
            if (this.getEncryptionProviderKey() != null) {
                data.set("encryptionProviderKey", om.valueToTree(this.getEncryptionProviderKey()));
            }
            if (this.getEndpointPublicAccess() != null) {
                data.set("endpointPublicAccess", om.valueToTree(this.getEndpointPublicAccess()));
            }
            if (this.getFormatDisk() != null) {
                data.set("formatDisk", om.valueToTree(this.getFormatDisk()));
            }
            if (this.getIsEnterpriseSecurityGroup() != null) {
                data.set("isEnterpriseSecurityGroup", om.valueToTree(this.getIsEnterpriseSecurityGroup()));
            }
            if (this.getKeepInstanceName() != null) {
                data.set("keepInstanceName", om.valueToTree(this.getKeepInstanceName()));
            }
            if (this.getKeyPair() != null) {
                data.set("keyPair", om.valueToTree(this.getKeyPair()));
            }
            if (this.getKubernetesVersion() != null) {
                data.set("kubernetesVersion", om.valueToTree(this.getKubernetesVersion()));
            }
            if (this.getLoadBalancerSpec() != null) {
                data.set("loadBalancerSpec", om.valueToTree(this.getLoadBalancerSpec()));
            }
            if (this.getLoginPassword() != null) {
                data.set("loginPassword", om.valueToTree(this.getLoginPassword()));
            }
            if (this.getNodeCidrMask() != null) {
                data.set("nodeCidrMask", om.valueToTree(this.getNodeCidrMask()));
            }
            if (this.getNumOfNodes() != null) {
                data.set("numOfNodes", om.valueToTree(this.getNumOfNodes()));
            }
            if (this.getOsType() != null) {
                data.set("osType", om.valueToTree(this.getOsType()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getPeriodUnit() != null) {
                data.set("periodUnit", om.valueToTree(this.getPeriodUnit()));
            }
            if (this.getPlatform() != null) {
                data.set("platform", om.valueToTree(this.getPlatform()));
            }
            if (this.getPodVswitchIds() != null) {
                data.set("podVswitchIds", om.valueToTree(this.getPodVswitchIds()));
            }
            if (this.getProxyMode() != null) {
                data.set("proxyMode", om.valueToTree(this.getProxyMode()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getRuntime() != null) {
                data.set("runtime", om.valueToTree(this.getRuntime()));
            }
            if (this.getSecurityGroupId() != null) {
                data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
            }
            if (this.getServiceCidr() != null) {
                data.set("serviceCidr", om.valueToTree(this.getServiceCidr()));
            }
            if (this.getSnatEntry() != null) {
                data.set("snatEntry", om.valueToTree(this.getSnatEntry()));
            }
            if (this.getSocEnabled() != null) {
                data.set("socEnabled", om.valueToTree(this.getSocEnabled()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getTaint() != null) {
                data.set("taint", om.valueToTree(this.getTaint()));
            }
            if (this.getTimeoutMins() != null) {
                data.set("timeoutMins", om.valueToTree(this.getTimeoutMins()));
            }
            if (this.getUserData() != null) {
                data.set("userData", om.valueToTree(this.getUserData()));
            }
            if (this.getWorkerDataDisk() != null) {
                data.set("workerDataDisk", om.valueToTree(this.getWorkerDataDisk()));
            }
            if (this.getWorkerDataDisks() != null) {
                data.set("workerDataDisks", om.valueToTree(this.getWorkerDataDisks()));
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cs.ManagedKubernetesClusterProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ManagedKubernetesClusterProps.Jsii$Proxy that = (ManagedKubernetesClusterProps.Jsii$Proxy) o;

            if (!name.equals(that.name)) return false;
            if (!vpcId.equals(that.vpcId)) return false;
            if (!vSwitchIds.equals(that.vSwitchIds)) return false;
            if (!workerInstanceTypes.equals(that.workerInstanceTypes)) return false;
            if (this.addons != null ? !this.addons.equals(that.addons) : that.addons != null) return false;
            if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
            if (this.autoRenewPeriod != null ? !this.autoRenewPeriod.equals(that.autoRenewPeriod) : that.autoRenewPeriod != null) return false;
            if (this.chargeType != null ? !this.chargeType.equals(that.chargeType) : that.chargeType != null) return false;
            if (this.cisEnabled != null ? !this.cisEnabled.equals(that.cisEnabled) : that.cisEnabled != null) return false;
            if (this.cloudMonitorFlags != null ? !this.cloudMonitorFlags.equals(that.cloudMonitorFlags) : that.cloudMonitorFlags != null) return false;
            if (this.clusterSpec != null ? !this.clusterSpec.equals(that.clusterSpec) : that.clusterSpec != null) return false;
            if (this.containerCidr != null ? !this.containerCidr.equals(that.containerCidr) : that.containerCidr != null) return false;
            if (this.deletionProtection != null ? !this.deletionProtection.equals(that.deletionProtection) : that.deletionProtection != null) return false;
            if (this.disableRollback != null ? !this.disableRollback.equals(that.disableRollback) : that.disableRollback != null) return false;
            if (this.encryptionProviderKey != null ? !this.encryptionProviderKey.equals(that.encryptionProviderKey) : that.encryptionProviderKey != null) return false;
            if (this.endpointPublicAccess != null ? !this.endpointPublicAccess.equals(that.endpointPublicAccess) : that.endpointPublicAccess != null) return false;
            if (this.formatDisk != null ? !this.formatDisk.equals(that.formatDisk) : that.formatDisk != null) return false;
            if (this.isEnterpriseSecurityGroup != null ? !this.isEnterpriseSecurityGroup.equals(that.isEnterpriseSecurityGroup) : that.isEnterpriseSecurityGroup != null) return false;
            if (this.keepInstanceName != null ? !this.keepInstanceName.equals(that.keepInstanceName) : that.keepInstanceName != null) return false;
            if (this.keyPair != null ? !this.keyPair.equals(that.keyPair) : that.keyPair != null) return false;
            if (this.kubernetesVersion != null ? !this.kubernetesVersion.equals(that.kubernetesVersion) : that.kubernetesVersion != null) return false;
            if (this.loadBalancerSpec != null ? !this.loadBalancerSpec.equals(that.loadBalancerSpec) : that.loadBalancerSpec != null) return false;
            if (this.loginPassword != null ? !this.loginPassword.equals(that.loginPassword) : that.loginPassword != null) return false;
            if (this.nodeCidrMask != null ? !this.nodeCidrMask.equals(that.nodeCidrMask) : that.nodeCidrMask != null) return false;
            if (this.numOfNodes != null ? !this.numOfNodes.equals(that.numOfNodes) : that.numOfNodes != null) return false;
            if (this.osType != null ? !this.osType.equals(that.osType) : that.osType != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.periodUnit != null ? !this.periodUnit.equals(that.periodUnit) : that.periodUnit != null) return false;
            if (this.platform != null ? !this.platform.equals(that.platform) : that.platform != null) return false;
            if (this.podVswitchIds != null ? !this.podVswitchIds.equals(that.podVswitchIds) : that.podVswitchIds != null) return false;
            if (this.proxyMode != null ? !this.proxyMode.equals(that.proxyMode) : that.proxyMode != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.runtime != null ? !this.runtime.equals(that.runtime) : that.runtime != null) return false;
            if (this.securityGroupId != null ? !this.securityGroupId.equals(that.securityGroupId) : that.securityGroupId != null) return false;
            if (this.serviceCidr != null ? !this.serviceCidr.equals(that.serviceCidr) : that.serviceCidr != null) return false;
            if (this.snatEntry != null ? !this.snatEntry.equals(that.snatEntry) : that.snatEntry != null) return false;
            if (this.socEnabled != null ? !this.socEnabled.equals(that.socEnabled) : that.socEnabled != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.taint != null ? !this.taint.equals(that.taint) : that.taint != null) return false;
            if (this.timeoutMins != null ? !this.timeoutMins.equals(that.timeoutMins) : that.timeoutMins != null) return false;
            if (this.userData != null ? !this.userData.equals(that.userData) : that.userData != null) return false;
            if (this.workerDataDisk != null ? !this.workerDataDisk.equals(that.workerDataDisk) : that.workerDataDisk != null) return false;
            if (this.workerDataDisks != null ? !this.workerDataDisks.equals(that.workerDataDisks) : that.workerDataDisks != null) return false;
            if (this.workerSystemDiskCategory != null ? !this.workerSystemDiskCategory.equals(that.workerSystemDiskCategory) : that.workerSystemDiskCategory != null) return false;
            if (this.workerSystemDiskSize != null ? !this.workerSystemDiskSize.equals(that.workerSystemDiskSize) : that.workerSystemDiskSize != null) return false;
            return this.zoneIds != null ? this.zoneIds.equals(that.zoneIds) : that.zoneIds == null;
        }

        @Override
        public final int hashCode() {
            int result = this.name.hashCode();
            result = 31 * result + (this.vpcId.hashCode());
            result = 31 * result + (this.vSwitchIds.hashCode());
            result = 31 * result + (this.workerInstanceTypes.hashCode());
            result = 31 * result + (this.addons != null ? this.addons.hashCode() : 0);
            result = 31 * result + (this.autoRenew != null ? this.autoRenew.hashCode() : 0);
            result = 31 * result + (this.autoRenewPeriod != null ? this.autoRenewPeriod.hashCode() : 0);
            result = 31 * result + (this.chargeType != null ? this.chargeType.hashCode() : 0);
            result = 31 * result + (this.cisEnabled != null ? this.cisEnabled.hashCode() : 0);
            result = 31 * result + (this.cloudMonitorFlags != null ? this.cloudMonitorFlags.hashCode() : 0);
            result = 31 * result + (this.clusterSpec != null ? this.clusterSpec.hashCode() : 0);
            result = 31 * result + (this.containerCidr != null ? this.containerCidr.hashCode() : 0);
            result = 31 * result + (this.deletionProtection != null ? this.deletionProtection.hashCode() : 0);
            result = 31 * result + (this.disableRollback != null ? this.disableRollback.hashCode() : 0);
            result = 31 * result + (this.encryptionProviderKey != null ? this.encryptionProviderKey.hashCode() : 0);
            result = 31 * result + (this.endpointPublicAccess != null ? this.endpointPublicAccess.hashCode() : 0);
            result = 31 * result + (this.formatDisk != null ? this.formatDisk.hashCode() : 0);
            result = 31 * result + (this.isEnterpriseSecurityGroup != null ? this.isEnterpriseSecurityGroup.hashCode() : 0);
            result = 31 * result + (this.keepInstanceName != null ? this.keepInstanceName.hashCode() : 0);
            result = 31 * result + (this.keyPair != null ? this.keyPair.hashCode() : 0);
            result = 31 * result + (this.kubernetesVersion != null ? this.kubernetesVersion.hashCode() : 0);
            result = 31 * result + (this.loadBalancerSpec != null ? this.loadBalancerSpec.hashCode() : 0);
            result = 31 * result + (this.loginPassword != null ? this.loginPassword.hashCode() : 0);
            result = 31 * result + (this.nodeCidrMask != null ? this.nodeCidrMask.hashCode() : 0);
            result = 31 * result + (this.numOfNodes != null ? this.numOfNodes.hashCode() : 0);
            result = 31 * result + (this.osType != null ? this.osType.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.periodUnit != null ? this.periodUnit.hashCode() : 0);
            result = 31 * result + (this.platform != null ? this.platform.hashCode() : 0);
            result = 31 * result + (this.podVswitchIds != null ? this.podVswitchIds.hashCode() : 0);
            result = 31 * result + (this.proxyMode != null ? this.proxyMode.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.runtime != null ? this.runtime.hashCode() : 0);
            result = 31 * result + (this.securityGroupId != null ? this.securityGroupId.hashCode() : 0);
            result = 31 * result + (this.serviceCidr != null ? this.serviceCidr.hashCode() : 0);
            result = 31 * result + (this.snatEntry != null ? this.snatEntry.hashCode() : 0);
            result = 31 * result + (this.socEnabled != null ? this.socEnabled.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.taint != null ? this.taint.hashCode() : 0);
            result = 31 * result + (this.timeoutMins != null ? this.timeoutMins.hashCode() : 0);
            result = 31 * result + (this.userData != null ? this.userData.hashCode() : 0);
            result = 31 * result + (this.workerDataDisk != null ? this.workerDataDisk.hashCode() : 0);
            result = 31 * result + (this.workerDataDisks != null ? this.workerDataDisks.hashCode() : 0);
            result = 31 * result + (this.workerSystemDiskCategory != null ? this.workerSystemDiskCategory.hashCode() : 0);
            result = 31 * result + (this.workerSystemDiskSize != null ? this.workerSystemDiskSize.hashCode() : 0);
            result = 31 * result + (this.zoneIds != null ? this.zoneIds.hashCode() : 0);
            return result;
        }
    }
}
