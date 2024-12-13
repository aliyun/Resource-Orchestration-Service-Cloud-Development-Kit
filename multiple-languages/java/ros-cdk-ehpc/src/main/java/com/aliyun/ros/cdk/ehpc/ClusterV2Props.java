package com.aliyun.ros.cdk.ehpc;

/**
 * Properties for defining a <code>ClusterV2</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-clusterv2
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-12-13T06:45:07.935Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ehpc.$Module.class, fqn = "@alicloud/ros-cdk-ehpc.ClusterV2Props")
@software.amazon.jsii.Jsii.Proxy(ClusterV2Props.Jsii$Proxy.class)
public interface ClusterV2Props extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property clusterName: Cluster name.
     * <p>
     * The length is from 2 to 128 characters, and it supports English, Chinese and numbers. You can include a dash (-) and an underscore (_).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getClusterName();

    /**
     * Property sharedStorages: The list of shared storage configurations.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSharedStorages();

    /**
     * Property vpcId: The ID of the VPC used by the cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     * Property vSwitchId: The ID of the VSwitch used by the cluster.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchId();

    /**
     * Property additionalPackages: A list of software to install on the cluster.
     * <p>
     * Range from 0 to 10.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAdditionalPackages() {
        return null;
    }

    /**
     * Property addons: Cluster custom service component configuration to support only one component.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAddons() {
        return null;
    }

    /**
     * Property clientVersion: Cluster client version.
     * <p>
     * By default, the latest version is used.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClientVersion() {
        return null;
    }

    /**
     * Property clusterCategory: Cluster series.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>Standard: The standard version.</li>
     * <li>Serverless: Hosted version</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClusterCategory() {
        return null;
    }

    /**
     * Property clusterCredentials: Security credentials for the cluster.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClusterCredentials() {
        return null;
    }

    /**
     * Property clusterCustomConfiguration: Cluster post-processing scripts.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClusterCustomConfiguration() {
        return null;
    }

    /**
     * Property clusterDescription: Cluster description.
     * <p>
     * The length is from 2 to 128 characters, and it supports English, Chinese and numbers. You can include a dash (-) and an underscore (_).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClusterDescription() {
        return null;
    }

    /**
     * Property clusterMode: Cluster deployment type.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>Integrated: Public cloud clustering.</li>
     * <li>Hybrid: Hybrid cloud cluster.</li>
     * <li>Custom: The cluster is customized</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClusterMode() {
        return null;
    }

    /**
     * Property deletionProtection: The cluster deletion protection property, which specifies whether cluster deletion via the console or the DeleteCluster API is supported.
     * <p>
     * <ul>
     * <li>true: Cluster deletion protection is enabled.</li>
     * <li>false: This turns off cluster deletion protection.
     * Default value: false</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeletionProtection() {
        return null;
    }

    /**
     * Property isEnterpriseSecurityGroup: Whether to create an enterprise security group.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>true: Enterprise security groups are automatically created and used.</li>
     * <li>false: Normal security groups are automatically created and used instead of enterprise security groups.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIsEnterpriseSecurityGroup() {
        return null;
    }

    /**
     * Property manager: The cluster manages node configuration.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getManager() {
        return null;
    }

    /**
     * Property maxCoreCount: Total number of cores that the cluster can manage on compute nodes, ranging from 0 to 100,000.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMaxCoreCount() {
        return null;
    }

    /**
     * Property maxCount: Number of compute nodes that can be managed by the cluster, ranging from 0 to 5,000.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMaxCount() {
        return null;
    }

    /**
     * Property queues: Cluster queue configuration.
     * <p>
     * The number of queues is supported from 0 to 8.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getQueues() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property securityGroupId: Specifies the security group ID to which the newly created cluster belongs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupId() {
        return null;
    }

    /**
     * Property tags: Tags to attach to cluster_v2.
     * <p>
     * Max support 20 tags to add during create cluster_v2. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ehpc.RosClusterV2.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ClusterV2Props}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ClusterV2Props}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ClusterV2Props> {
        java.lang.Object clusterName;
        java.lang.Object sharedStorages;
        java.lang.Object vpcId;
        java.lang.Object vSwitchId;
        java.lang.Object additionalPackages;
        java.lang.Object addons;
        java.lang.Object clientVersion;
        java.lang.Object clusterCategory;
        java.lang.Object clusterCredentials;
        java.lang.Object clusterCustomConfiguration;
        java.lang.Object clusterDescription;
        java.lang.Object clusterMode;
        java.lang.Object deletionProtection;
        java.lang.Object isEnterpriseSecurityGroup;
        java.lang.Object manager;
        java.lang.Object maxCoreCount;
        java.lang.Object maxCount;
        java.lang.Object queues;
        java.lang.Object resourceGroupId;
        java.lang.Object securityGroupId;
        java.util.List<com.aliyun.ros.cdk.ehpc.RosClusterV2.TagsProperty> tags;

        /**
         * Sets the value of {@link ClusterV2Props#getClusterName}
         * @param clusterName Property clusterName: Cluster name. This parameter is required.
         *                    The length is from 2 to 128 characters, and it supports English, Chinese and numbers. You can include a dash (-) and an underscore (_).
         * @return {@code this}
         */
        public Builder clusterName(java.lang.String clusterName) {
            this.clusterName = clusterName;
            return this;
        }

        /**
         * Sets the value of {@link ClusterV2Props#getClusterName}
         * @param clusterName Property clusterName: Cluster name. This parameter is required.
         *                    The length is from 2 to 128 characters, and it supports English, Chinese and numbers. You can include a dash (-) and an underscore (_).
         * @return {@code this}
         */
        public Builder clusterName(com.aliyun.ros.cdk.core.IResolvable clusterName) {
            this.clusterName = clusterName;
            return this;
        }

        /**
         * Sets the value of {@link ClusterV2Props#getSharedStorages}
         * @param sharedStorages Property sharedStorages: The list of shared storage configurations. This parameter is required.
         * @return {@code this}
         */
        public Builder sharedStorages(com.aliyun.ros.cdk.core.IResolvable sharedStorages) {
            this.sharedStorages = sharedStorages;
            return this;
        }

        /**
         * Sets the value of {@link ClusterV2Props#getSharedStorages}
         * @param sharedStorages Property sharedStorages: The list of shared storage configurations. This parameter is required.
         * @return {@code this}
         */
        public Builder sharedStorages(java.util.List<? extends java.lang.Object> sharedStorages) {
            this.sharedStorages = sharedStorages;
            return this;
        }

        /**
         * Sets the value of {@link ClusterV2Props#getVpcId}
         * @param vpcId Property vpcId: The ID of the VPC used by the cluster. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterV2Props#getVpcId}
         * @param vpcId Property vpcId: The ID of the VPC used by the cluster. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterV2Props#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The ID of the VSwitch used by the cluster. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterV2Props#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The ID of the VSwitch used by the cluster. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterV2Props#getAdditionalPackages}
         * @param additionalPackages Property additionalPackages: A list of software to install on the cluster.
         *                           Range from 0 to 10.
         * @return {@code this}
         */
        public Builder additionalPackages(com.aliyun.ros.cdk.core.IResolvable additionalPackages) {
            this.additionalPackages = additionalPackages;
            return this;
        }

        /**
         * Sets the value of {@link ClusterV2Props#getAdditionalPackages}
         * @param additionalPackages Property additionalPackages: A list of software to install on the cluster.
         *                           Range from 0 to 10.
         * @return {@code this}
         */
        public Builder additionalPackages(java.util.List<? extends java.lang.Object> additionalPackages) {
            this.additionalPackages = additionalPackages;
            return this;
        }

        /**
         * Sets the value of {@link ClusterV2Props#getAddons}
         * @param addons Property addons: Cluster custom service component configuration to support only one component.
         * @return {@code this}
         */
        public Builder addons(com.aliyun.ros.cdk.core.IResolvable addons) {
            this.addons = addons;
            return this;
        }

        /**
         * Sets the value of {@link ClusterV2Props#getAddons}
         * @param addons Property addons: Cluster custom service component configuration to support only one component.
         * @return {@code this}
         */
        public Builder addons(java.util.List<? extends java.lang.Object> addons) {
            this.addons = addons;
            return this;
        }

        /**
         * Sets the value of {@link ClusterV2Props#getClientVersion}
         * @param clientVersion Property clientVersion: Cluster client version.
         *                      By default, the latest version is used.
         * @return {@code this}
         */
        public Builder clientVersion(java.lang.String clientVersion) {
            this.clientVersion = clientVersion;
            return this;
        }

        /**
         * Sets the value of {@link ClusterV2Props#getClientVersion}
         * @param clientVersion Property clientVersion: Cluster client version.
         *                      By default, the latest version is used.
         * @return {@code this}
         */
        public Builder clientVersion(com.aliyun.ros.cdk.core.IResolvable clientVersion) {
            this.clientVersion = clientVersion;
            return this;
        }

        /**
         * Sets the value of {@link ClusterV2Props#getClusterCategory}
         * @param clusterCategory Property clusterCategory: Cluster series.
         *                        Valid values:
         *                        <p>
         *                        <ul>
         *                        <li>Standard: The standard version.</li>
         *                        <li>Serverless: Hosted version</li>
         *                        </ul>
         * @return {@code this}
         */
        public Builder clusterCategory(java.lang.String clusterCategory) {
            this.clusterCategory = clusterCategory;
            return this;
        }

        /**
         * Sets the value of {@link ClusterV2Props#getClusterCategory}
         * @param clusterCategory Property clusterCategory: Cluster series.
         *                        Valid values:
         *                        <p>
         *                        <ul>
         *                        <li>Standard: The standard version.</li>
         *                        <li>Serverless: Hosted version</li>
         *                        </ul>
         * @return {@code this}
         */
        public Builder clusterCategory(com.aliyun.ros.cdk.core.IResolvable clusterCategory) {
            this.clusterCategory = clusterCategory;
            return this;
        }

        /**
         * Sets the value of {@link ClusterV2Props#getClusterCredentials}
         * @param clusterCredentials Property clusterCredentials: Security credentials for the cluster.
         * @return {@code this}
         */
        public Builder clusterCredentials(com.aliyun.ros.cdk.core.IResolvable clusterCredentials) {
            this.clusterCredentials = clusterCredentials;
            return this;
        }

        /**
         * Sets the value of {@link ClusterV2Props#getClusterCredentials}
         * @param clusterCredentials Property clusterCredentials: Security credentials for the cluster.
         * @return {@code this}
         */
        public Builder clusterCredentials(com.aliyun.ros.cdk.ehpc.RosClusterV2.ClusterCredentialsProperty clusterCredentials) {
            this.clusterCredentials = clusterCredentials;
            return this;
        }

        /**
         * Sets the value of {@link ClusterV2Props#getClusterCustomConfiguration}
         * @param clusterCustomConfiguration Property clusterCustomConfiguration: Cluster post-processing scripts.
         * @return {@code this}
         */
        public Builder clusterCustomConfiguration(com.aliyun.ros.cdk.core.IResolvable clusterCustomConfiguration) {
            this.clusterCustomConfiguration = clusterCustomConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link ClusterV2Props#getClusterCustomConfiguration}
         * @param clusterCustomConfiguration Property clusterCustomConfiguration: Cluster post-processing scripts.
         * @return {@code this}
         */
        public Builder clusterCustomConfiguration(com.aliyun.ros.cdk.ehpc.RosClusterV2.ClusterCustomConfigurationProperty clusterCustomConfiguration) {
            this.clusterCustomConfiguration = clusterCustomConfiguration;
            return this;
        }

        /**
         * Sets the value of {@link ClusterV2Props#getClusterDescription}
         * @param clusterDescription Property clusterDescription: Cluster description.
         *                           The length is from 2 to 128 characters, and it supports English, Chinese and numbers. You can include a dash (-) and an underscore (_).
         * @return {@code this}
         */
        public Builder clusterDescription(java.lang.String clusterDescription) {
            this.clusterDescription = clusterDescription;
            return this;
        }

        /**
         * Sets the value of {@link ClusterV2Props#getClusterDescription}
         * @param clusterDescription Property clusterDescription: Cluster description.
         *                           The length is from 2 to 128 characters, and it supports English, Chinese and numbers. You can include a dash (-) and an underscore (_).
         * @return {@code this}
         */
        public Builder clusterDescription(com.aliyun.ros.cdk.core.IResolvable clusterDescription) {
            this.clusterDescription = clusterDescription;
            return this;
        }

        /**
         * Sets the value of {@link ClusterV2Props#getClusterMode}
         * @param clusterMode Property clusterMode: Cluster deployment type.
         *                    Valid values:
         *                    <p>
         *                    <ul>
         *                    <li>Integrated: Public cloud clustering.</li>
         *                    <li>Hybrid: Hybrid cloud cluster.</li>
         *                    <li>Custom: The cluster is customized</li>
         *                    </ul>
         * @return {@code this}
         */
        public Builder clusterMode(java.lang.String clusterMode) {
            this.clusterMode = clusterMode;
            return this;
        }

        /**
         * Sets the value of {@link ClusterV2Props#getClusterMode}
         * @param clusterMode Property clusterMode: Cluster deployment type.
         *                    Valid values:
         *                    <p>
         *                    <ul>
         *                    <li>Integrated: Public cloud clustering.</li>
         *                    <li>Hybrid: Hybrid cloud cluster.</li>
         *                    <li>Custom: The cluster is customized</li>
         *                    </ul>
         * @return {@code this}
         */
        public Builder clusterMode(com.aliyun.ros.cdk.core.IResolvable clusterMode) {
            this.clusterMode = clusterMode;
            return this;
        }

        /**
         * Sets the value of {@link ClusterV2Props#getDeletionProtection}
         * @param deletionProtection Property deletionProtection: The cluster deletion protection property, which specifies whether cluster deletion via the console or the DeleteCluster API is supported.
         *                           <ul>
         *                           <li>true: Cluster deletion protection is enabled.</li>
         *                           <li>false: This turns off cluster deletion protection.
         *                           Default value: false</li>
         *                           </ul>
         * @return {@code this}
         */
        public Builder deletionProtection(java.lang.Boolean deletionProtection) {
            this.deletionProtection = deletionProtection;
            return this;
        }

        /**
         * Sets the value of {@link ClusterV2Props#getDeletionProtection}
         * @param deletionProtection Property deletionProtection: The cluster deletion protection property, which specifies whether cluster deletion via the console or the DeleteCluster API is supported.
         *                           <ul>
         *                           <li>true: Cluster deletion protection is enabled.</li>
         *                           <li>false: This turns off cluster deletion protection.
         *                           Default value: false</li>
         *                           </ul>
         * @return {@code this}
         */
        public Builder deletionProtection(com.aliyun.ros.cdk.core.IResolvable deletionProtection) {
            this.deletionProtection = deletionProtection;
            return this;
        }

        /**
         * Sets the value of {@link ClusterV2Props#getIsEnterpriseSecurityGroup}
         * @param isEnterpriseSecurityGroup Property isEnterpriseSecurityGroup: Whether to create an enterprise security group.
         *                                  Valid values:
         *                                  <p>
         *                                  <ul>
         *                                  <li>true: Enterprise security groups are automatically created and used.</li>
         *                                  <li>false: Normal security groups are automatically created and used instead of enterprise security groups.</li>
         *                                  </ul>
         * @return {@code this}
         */
        public Builder isEnterpriseSecurityGroup(java.lang.Boolean isEnterpriseSecurityGroup) {
            this.isEnterpriseSecurityGroup = isEnterpriseSecurityGroup;
            return this;
        }

        /**
         * Sets the value of {@link ClusterV2Props#getIsEnterpriseSecurityGroup}
         * @param isEnterpriseSecurityGroup Property isEnterpriseSecurityGroup: Whether to create an enterprise security group.
         *                                  Valid values:
         *                                  <p>
         *                                  <ul>
         *                                  <li>true: Enterprise security groups are automatically created and used.</li>
         *                                  <li>false: Normal security groups are automatically created and used instead of enterprise security groups.</li>
         *                                  </ul>
         * @return {@code this}
         */
        public Builder isEnterpriseSecurityGroup(com.aliyun.ros.cdk.core.IResolvable isEnterpriseSecurityGroup) {
            this.isEnterpriseSecurityGroup = isEnterpriseSecurityGroup;
            return this;
        }

        /**
         * Sets the value of {@link ClusterV2Props#getManager}
         * @param manager Property manager: The cluster manages node configuration.
         * @return {@code this}
         */
        public Builder manager(com.aliyun.ros.cdk.core.IResolvable manager) {
            this.manager = manager;
            return this;
        }

        /**
         * Sets the value of {@link ClusterV2Props#getManager}
         * @param manager Property manager: The cluster manages node configuration.
         * @return {@code this}
         */
        public Builder manager(com.aliyun.ros.cdk.ehpc.RosClusterV2.ManagerProperty manager) {
            this.manager = manager;
            return this;
        }

        /**
         * Sets the value of {@link ClusterV2Props#getMaxCoreCount}
         * @param maxCoreCount Property maxCoreCount: Total number of cores that the cluster can manage on compute nodes, ranging from 0 to 100,000.
         * @return {@code this}
         */
        public Builder maxCoreCount(java.lang.Number maxCoreCount) {
            this.maxCoreCount = maxCoreCount;
            return this;
        }

        /**
         * Sets the value of {@link ClusterV2Props#getMaxCoreCount}
         * @param maxCoreCount Property maxCoreCount: Total number of cores that the cluster can manage on compute nodes, ranging from 0 to 100,000.
         * @return {@code this}
         */
        public Builder maxCoreCount(com.aliyun.ros.cdk.core.IResolvable maxCoreCount) {
            this.maxCoreCount = maxCoreCount;
            return this;
        }

        /**
         * Sets the value of {@link ClusterV2Props#getMaxCount}
         * @param maxCount Property maxCount: Number of compute nodes that can be managed by the cluster, ranging from 0 to 5,000.
         * @return {@code this}
         */
        public Builder maxCount(java.lang.Number maxCount) {
            this.maxCount = maxCount;
            return this;
        }

        /**
         * Sets the value of {@link ClusterV2Props#getMaxCount}
         * @param maxCount Property maxCount: Number of compute nodes that can be managed by the cluster, ranging from 0 to 5,000.
         * @return {@code this}
         */
        public Builder maxCount(com.aliyun.ros.cdk.core.IResolvable maxCount) {
            this.maxCount = maxCount;
            return this;
        }

        /**
         * Sets the value of {@link ClusterV2Props#getQueues}
         * @param queues Property queues: Cluster queue configuration.
         *               The number of queues is supported from 0 to 8.
         * @return {@code this}
         */
        public Builder queues(com.aliyun.ros.cdk.core.IResolvable queues) {
            this.queues = queues;
            return this;
        }

        /**
         * Sets the value of {@link ClusterV2Props#getQueues}
         * @param queues Property queues: Cluster queue configuration.
         *               The number of queues is supported from 0 to 8.
         * @return {@code this}
         */
        public Builder queues(java.util.List<? extends java.lang.Object> queues) {
            this.queues = queues;
            return this;
        }

        /**
         * Sets the value of {@link ClusterV2Props#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterV2Props#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterV2Props#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: Specifies the security group ID to which the newly created cluster belongs.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterV2Props#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: Specifies the security group ID to which the newly created cluster belongs.
         * @return {@code this}
         */
        public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ClusterV2Props#getTags}
         * @param tags Property tags: Tags to attach to cluster_v2.
         *             Max support 20 tags to add during create cluster_v2. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ehpc.RosClusterV2.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ehpc.RosClusterV2.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ClusterV2Props}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ClusterV2Props build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ClusterV2Props}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ClusterV2Props {
        private final java.lang.Object clusterName;
        private final java.lang.Object sharedStorages;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object additionalPackages;
        private final java.lang.Object addons;
        private final java.lang.Object clientVersion;
        private final java.lang.Object clusterCategory;
        private final java.lang.Object clusterCredentials;
        private final java.lang.Object clusterCustomConfiguration;
        private final java.lang.Object clusterDescription;
        private final java.lang.Object clusterMode;
        private final java.lang.Object deletionProtection;
        private final java.lang.Object isEnterpriseSecurityGroup;
        private final java.lang.Object manager;
        private final java.lang.Object maxCoreCount;
        private final java.lang.Object maxCount;
        private final java.lang.Object queues;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object securityGroupId;
        private final java.util.List<com.aliyun.ros.cdk.ehpc.RosClusterV2.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.clusterName = software.amazon.jsii.Kernel.get(this, "clusterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sharedStorages = software.amazon.jsii.Kernel.get(this, "sharedStorages", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.additionalPackages = software.amazon.jsii.Kernel.get(this, "additionalPackages", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.addons = software.amazon.jsii.Kernel.get(this, "addons", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clientVersion = software.amazon.jsii.Kernel.get(this, "clientVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clusterCategory = software.amazon.jsii.Kernel.get(this, "clusterCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clusterCredentials = software.amazon.jsii.Kernel.get(this, "clusterCredentials", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clusterCustomConfiguration = software.amazon.jsii.Kernel.get(this, "clusterCustomConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clusterDescription = software.amazon.jsii.Kernel.get(this, "clusterDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clusterMode = software.amazon.jsii.Kernel.get(this, "clusterMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deletionProtection = software.amazon.jsii.Kernel.get(this, "deletionProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.isEnterpriseSecurityGroup = software.amazon.jsii.Kernel.get(this, "isEnterpriseSecurityGroup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.manager = software.amazon.jsii.Kernel.get(this, "manager", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.maxCoreCount = software.amazon.jsii.Kernel.get(this, "maxCoreCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.maxCount = software.amazon.jsii.Kernel.get(this, "maxCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.queues = software.amazon.jsii.Kernel.get(this, "queues", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ehpc.RosClusterV2.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.clusterName = java.util.Objects.requireNonNull(builder.clusterName, "clusterName is required");
            this.sharedStorages = java.util.Objects.requireNonNull(builder.sharedStorages, "sharedStorages is required");
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.vSwitchId = java.util.Objects.requireNonNull(builder.vSwitchId, "vSwitchId is required");
            this.additionalPackages = builder.additionalPackages;
            this.addons = builder.addons;
            this.clientVersion = builder.clientVersion;
            this.clusterCategory = builder.clusterCategory;
            this.clusterCredentials = builder.clusterCredentials;
            this.clusterCustomConfiguration = builder.clusterCustomConfiguration;
            this.clusterDescription = builder.clusterDescription;
            this.clusterMode = builder.clusterMode;
            this.deletionProtection = builder.deletionProtection;
            this.isEnterpriseSecurityGroup = builder.isEnterpriseSecurityGroup;
            this.manager = builder.manager;
            this.maxCoreCount = builder.maxCoreCount;
            this.maxCount = builder.maxCount;
            this.queues = builder.queues;
            this.resourceGroupId = builder.resourceGroupId;
            this.securityGroupId = builder.securityGroupId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ehpc.RosClusterV2.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getClusterName() {
            return this.clusterName;
        }

        @Override
        public final java.lang.Object getSharedStorages() {
            return this.sharedStorages;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        public final java.lang.Object getAdditionalPackages() {
            return this.additionalPackages;
        }

        @Override
        public final java.lang.Object getAddons() {
            return this.addons;
        }

        @Override
        public final java.lang.Object getClientVersion() {
            return this.clientVersion;
        }

        @Override
        public final java.lang.Object getClusterCategory() {
            return this.clusterCategory;
        }

        @Override
        public final java.lang.Object getClusterCredentials() {
            return this.clusterCredentials;
        }

        @Override
        public final java.lang.Object getClusterCustomConfiguration() {
            return this.clusterCustomConfiguration;
        }

        @Override
        public final java.lang.Object getClusterDescription() {
            return this.clusterDescription;
        }

        @Override
        public final java.lang.Object getClusterMode() {
            return this.clusterMode;
        }

        @Override
        public final java.lang.Object getDeletionProtection() {
            return this.deletionProtection;
        }

        @Override
        public final java.lang.Object getIsEnterpriseSecurityGroup() {
            return this.isEnterpriseSecurityGroup;
        }

        @Override
        public final java.lang.Object getManager() {
            return this.manager;
        }

        @Override
        public final java.lang.Object getMaxCoreCount() {
            return this.maxCoreCount;
        }

        @Override
        public final java.lang.Object getMaxCount() {
            return this.maxCount;
        }

        @Override
        public final java.lang.Object getQueues() {
            return this.queues;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getSecurityGroupId() {
            return this.securityGroupId;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.ehpc.RosClusterV2.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("clusterName", om.valueToTree(this.getClusterName()));
            data.set("sharedStorages", om.valueToTree(this.getSharedStorages()));
            data.set("vpcId", om.valueToTree(this.getVpcId()));
            data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            if (this.getAdditionalPackages() != null) {
                data.set("additionalPackages", om.valueToTree(this.getAdditionalPackages()));
            }
            if (this.getAddons() != null) {
                data.set("addons", om.valueToTree(this.getAddons()));
            }
            if (this.getClientVersion() != null) {
                data.set("clientVersion", om.valueToTree(this.getClientVersion()));
            }
            if (this.getClusterCategory() != null) {
                data.set("clusterCategory", om.valueToTree(this.getClusterCategory()));
            }
            if (this.getClusterCredentials() != null) {
                data.set("clusterCredentials", om.valueToTree(this.getClusterCredentials()));
            }
            if (this.getClusterCustomConfiguration() != null) {
                data.set("clusterCustomConfiguration", om.valueToTree(this.getClusterCustomConfiguration()));
            }
            if (this.getClusterDescription() != null) {
                data.set("clusterDescription", om.valueToTree(this.getClusterDescription()));
            }
            if (this.getClusterMode() != null) {
                data.set("clusterMode", om.valueToTree(this.getClusterMode()));
            }
            if (this.getDeletionProtection() != null) {
                data.set("deletionProtection", om.valueToTree(this.getDeletionProtection()));
            }
            if (this.getIsEnterpriseSecurityGroup() != null) {
                data.set("isEnterpriseSecurityGroup", om.valueToTree(this.getIsEnterpriseSecurityGroup()));
            }
            if (this.getManager() != null) {
                data.set("manager", om.valueToTree(this.getManager()));
            }
            if (this.getMaxCoreCount() != null) {
                data.set("maxCoreCount", om.valueToTree(this.getMaxCoreCount()));
            }
            if (this.getMaxCount() != null) {
                data.set("maxCount", om.valueToTree(this.getMaxCount()));
            }
            if (this.getQueues() != null) {
                data.set("queues", om.valueToTree(this.getQueues()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSecurityGroupId() != null) {
                data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ehpc.ClusterV2Props"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ClusterV2Props.Jsii$Proxy that = (ClusterV2Props.Jsii$Proxy) o;

            if (!clusterName.equals(that.clusterName)) return false;
            if (!sharedStorages.equals(that.sharedStorages)) return false;
            if (!vpcId.equals(that.vpcId)) return false;
            if (!vSwitchId.equals(that.vSwitchId)) return false;
            if (this.additionalPackages != null ? !this.additionalPackages.equals(that.additionalPackages) : that.additionalPackages != null) return false;
            if (this.addons != null ? !this.addons.equals(that.addons) : that.addons != null) return false;
            if (this.clientVersion != null ? !this.clientVersion.equals(that.clientVersion) : that.clientVersion != null) return false;
            if (this.clusterCategory != null ? !this.clusterCategory.equals(that.clusterCategory) : that.clusterCategory != null) return false;
            if (this.clusterCredentials != null ? !this.clusterCredentials.equals(that.clusterCredentials) : that.clusterCredentials != null) return false;
            if (this.clusterCustomConfiguration != null ? !this.clusterCustomConfiguration.equals(that.clusterCustomConfiguration) : that.clusterCustomConfiguration != null) return false;
            if (this.clusterDescription != null ? !this.clusterDescription.equals(that.clusterDescription) : that.clusterDescription != null) return false;
            if (this.clusterMode != null ? !this.clusterMode.equals(that.clusterMode) : that.clusterMode != null) return false;
            if (this.deletionProtection != null ? !this.deletionProtection.equals(that.deletionProtection) : that.deletionProtection != null) return false;
            if (this.isEnterpriseSecurityGroup != null ? !this.isEnterpriseSecurityGroup.equals(that.isEnterpriseSecurityGroup) : that.isEnterpriseSecurityGroup != null) return false;
            if (this.manager != null ? !this.manager.equals(that.manager) : that.manager != null) return false;
            if (this.maxCoreCount != null ? !this.maxCoreCount.equals(that.maxCoreCount) : that.maxCoreCount != null) return false;
            if (this.maxCount != null ? !this.maxCount.equals(that.maxCount) : that.maxCount != null) return false;
            if (this.queues != null ? !this.queues.equals(that.queues) : that.queues != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.securityGroupId != null ? !this.securityGroupId.equals(that.securityGroupId) : that.securityGroupId != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.clusterName.hashCode();
            result = 31 * result + (this.sharedStorages.hashCode());
            result = 31 * result + (this.vpcId.hashCode());
            result = 31 * result + (this.vSwitchId.hashCode());
            result = 31 * result + (this.additionalPackages != null ? this.additionalPackages.hashCode() : 0);
            result = 31 * result + (this.addons != null ? this.addons.hashCode() : 0);
            result = 31 * result + (this.clientVersion != null ? this.clientVersion.hashCode() : 0);
            result = 31 * result + (this.clusterCategory != null ? this.clusterCategory.hashCode() : 0);
            result = 31 * result + (this.clusterCredentials != null ? this.clusterCredentials.hashCode() : 0);
            result = 31 * result + (this.clusterCustomConfiguration != null ? this.clusterCustomConfiguration.hashCode() : 0);
            result = 31 * result + (this.clusterDescription != null ? this.clusterDescription.hashCode() : 0);
            result = 31 * result + (this.clusterMode != null ? this.clusterMode.hashCode() : 0);
            result = 31 * result + (this.deletionProtection != null ? this.deletionProtection.hashCode() : 0);
            result = 31 * result + (this.isEnterpriseSecurityGroup != null ? this.isEnterpriseSecurityGroup.hashCode() : 0);
            result = 31 * result + (this.manager != null ? this.manager.hashCode() : 0);
            result = 31 * result + (this.maxCoreCount != null ? this.maxCoreCount.hashCode() : 0);
            result = 31 * result + (this.maxCount != null ? this.maxCount.hashCode() : 0);
            result = 31 * result + (this.queues != null ? this.queues.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.securityGroupId != null ? this.securityGroupId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
