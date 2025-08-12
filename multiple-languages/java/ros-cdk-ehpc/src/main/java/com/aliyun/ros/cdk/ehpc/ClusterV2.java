package com.aliyun.ros.cdk.ehpc;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::EHPC::ClusterV2</code>, which is used to create a cluster in Elastic High Performance Computing (E-HPC) of the new version.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:47.075Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ehpc.$Module.class, fqn = "@alicloud/ros-cdk-ehpc.ClusterV2")
public class ClusterV2 extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ehpc.IClusterV2 {

    protected ClusterV2(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ClusterV2(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ClusterV2(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ehpc.ClusterV2Props props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ClusterV2(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ehpc.ClusterV2Props props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ClusterId: Cluster Id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ehpc.ClusterV2Props getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ehpc.ClusterV2Props.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ehpc.ClusterV2}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ehpc.ClusterV2> {
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
        private final com.aliyun.ros.cdk.ehpc.ClusterV2Props.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ehpc.ClusterV2Props.Builder();
        }

        /**
         * Property clusterName: Cluster name.
         * <p>
         * The length is from 2 to 128 characters, and it supports English, Chinese and numbers. You can include a dash (-) and an underscore (_).
         * <p>
         * @return {@code this}
         * @param clusterName Property clusterName: Cluster name. This parameter is required.
         */
        public Builder clusterName(final java.lang.String clusterName) {
            this.props.clusterName(clusterName);
            return this;
        }
        /**
         * Property clusterName: Cluster name.
         * <p>
         * The length is from 2 to 128 characters, and it supports English, Chinese and numbers. You can include a dash (-) and an underscore (_).
         * <p>
         * @return {@code this}
         * @param clusterName Property clusterName: Cluster name. This parameter is required.
         */
        public Builder clusterName(final com.aliyun.ros.cdk.core.IResolvable clusterName) {
            this.props.clusterName(clusterName);
            return this;
        }

        /**
         * Property sharedStorages: The list of shared storage configurations.
         * <p>
         * @return {@code this}
         * @param sharedStorages Property sharedStorages: The list of shared storage configurations. This parameter is required.
         */
        public Builder sharedStorages(final com.aliyun.ros.cdk.core.IResolvable sharedStorages) {
            this.props.sharedStorages(sharedStorages);
            return this;
        }
        /**
         * Property sharedStorages: The list of shared storage configurations.
         * <p>
         * @return {@code this}
         * @param sharedStorages Property sharedStorages: The list of shared storage configurations. This parameter is required.
         */
        public Builder sharedStorages(final java.util.List<? extends java.lang.Object> sharedStorages) {
            this.props.sharedStorages(sharedStorages);
            return this;
        }

        /**
         * Property vpcId: The ID of the VPC used by the cluster.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the VPC used by the cluster. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The ID of the VPC used by the cluster.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the VPC used by the cluster. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property vSwitchId: The ID of the VSwitch used by the cluster.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of the VSwitch used by the cluster. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: The ID of the VSwitch used by the cluster.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of the VSwitch used by the cluster. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * Property additionalPackages: A list of software to install on the cluster.
         * <p>
         * Range from 0 to 10.
         * <p>
         * @return {@code this}
         * @param additionalPackages Property additionalPackages: A list of software to install on the cluster. This parameter is required.
         */
        public Builder additionalPackages(final com.aliyun.ros.cdk.core.IResolvable additionalPackages) {
            this.props.additionalPackages(additionalPackages);
            return this;
        }
        /**
         * Property additionalPackages: A list of software to install on the cluster.
         * <p>
         * Range from 0 to 10.
         * <p>
         * @return {@code this}
         * @param additionalPackages Property additionalPackages: A list of software to install on the cluster. This parameter is required.
         */
        public Builder additionalPackages(final java.util.List<? extends java.lang.Object> additionalPackages) {
            this.props.additionalPackages(additionalPackages);
            return this;
        }

        /**
         * Property addons: Cluster custom service component configuration to support only one component.
         * <p>
         * @return {@code this}
         * @param addons Property addons: Cluster custom service component configuration to support only one component. This parameter is required.
         */
        public Builder addons(final com.aliyun.ros.cdk.core.IResolvable addons) {
            this.props.addons(addons);
            return this;
        }
        /**
         * Property addons: Cluster custom service component configuration to support only one component.
         * <p>
         * @return {@code this}
         * @param addons Property addons: Cluster custom service component configuration to support only one component. This parameter is required.
         */
        public Builder addons(final java.util.List<? extends java.lang.Object> addons) {
            this.props.addons(addons);
            return this;
        }

        /**
         * Property clientVersion: Cluster client version.
         * <p>
         * By default, the latest version is used.
         * <p>
         * @return {@code this}
         * @param clientVersion Property clientVersion: Cluster client version. This parameter is required.
         */
        public Builder clientVersion(final java.lang.String clientVersion) {
            this.props.clientVersion(clientVersion);
            return this;
        }
        /**
         * Property clientVersion: Cluster client version.
         * <p>
         * By default, the latest version is used.
         * <p>
         * @return {@code this}
         * @param clientVersion Property clientVersion: Cluster client version. This parameter is required.
         */
        public Builder clientVersion(final com.aliyun.ros.cdk.core.IResolvable clientVersion) {
            this.props.clientVersion(clientVersion);
            return this;
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
         * <p>
         * @return {@code this}
         * @param clusterCategory Property clusterCategory: Cluster series. This parameter is required.
         */
        public Builder clusterCategory(final java.lang.String clusterCategory) {
            this.props.clusterCategory(clusterCategory);
            return this;
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
         * <p>
         * @return {@code this}
         * @param clusterCategory Property clusterCategory: Cluster series. This parameter is required.
         */
        public Builder clusterCategory(final com.aliyun.ros.cdk.core.IResolvable clusterCategory) {
            this.props.clusterCategory(clusterCategory);
            return this;
        }

        /**
         * Property clusterCredentials: Security credentials for the cluster.
         * <p>
         * @return {@code this}
         * @param clusterCredentials Property clusterCredentials: Security credentials for the cluster. This parameter is required.
         */
        public Builder clusterCredentials(final com.aliyun.ros.cdk.core.IResolvable clusterCredentials) {
            this.props.clusterCredentials(clusterCredentials);
            return this;
        }
        /**
         * Property clusterCredentials: Security credentials for the cluster.
         * <p>
         * @return {@code this}
         * @param clusterCredentials Property clusterCredentials: Security credentials for the cluster. This parameter is required.
         */
        public Builder clusterCredentials(final com.aliyun.ros.cdk.ehpc.RosClusterV2.ClusterCredentialsProperty clusterCredentials) {
            this.props.clusterCredentials(clusterCredentials);
            return this;
        }

        /**
         * Property clusterCustomConfiguration: Cluster post-processing scripts.
         * <p>
         * @return {@code this}
         * @param clusterCustomConfiguration Property clusterCustomConfiguration: Cluster post-processing scripts. This parameter is required.
         */
        public Builder clusterCustomConfiguration(final com.aliyun.ros.cdk.core.IResolvable clusterCustomConfiguration) {
            this.props.clusterCustomConfiguration(clusterCustomConfiguration);
            return this;
        }
        /**
         * Property clusterCustomConfiguration: Cluster post-processing scripts.
         * <p>
         * @return {@code this}
         * @param clusterCustomConfiguration Property clusterCustomConfiguration: Cluster post-processing scripts. This parameter is required.
         */
        public Builder clusterCustomConfiguration(final com.aliyun.ros.cdk.ehpc.RosClusterV2.ClusterCustomConfigurationProperty clusterCustomConfiguration) {
            this.props.clusterCustomConfiguration(clusterCustomConfiguration);
            return this;
        }

        /**
         * Property clusterDescription: Cluster description.
         * <p>
         * The length is from 2 to 128 characters, and it supports English, Chinese and numbers. You can include a dash (-) and an underscore (_).
         * <p>
         * @return {@code this}
         * @param clusterDescription Property clusterDescription: Cluster description. This parameter is required.
         */
        public Builder clusterDescription(final java.lang.String clusterDescription) {
            this.props.clusterDescription(clusterDescription);
            return this;
        }
        /**
         * Property clusterDescription: Cluster description.
         * <p>
         * The length is from 2 to 128 characters, and it supports English, Chinese and numbers. You can include a dash (-) and an underscore (_).
         * <p>
         * @return {@code this}
         * @param clusterDescription Property clusterDescription: Cluster description. This parameter is required.
         */
        public Builder clusterDescription(final com.aliyun.ros.cdk.core.IResolvable clusterDescription) {
            this.props.clusterDescription(clusterDescription);
            return this;
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
         * <p>
         * @return {@code this}
         * @param clusterMode Property clusterMode: Cluster deployment type. This parameter is required.
         */
        public Builder clusterMode(final java.lang.String clusterMode) {
            this.props.clusterMode(clusterMode);
            return this;
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
         * <p>
         * @return {@code this}
         * @param clusterMode Property clusterMode: Cluster deployment type. This parameter is required.
         */
        public Builder clusterMode(final com.aliyun.ros.cdk.core.IResolvable clusterMode) {
            this.props.clusterMode(clusterMode);
            return this;
        }

        /**
         * Property deletionProtection: The cluster deletion protection property, which specifies whether cluster deletion via the console or the DeleteCluster API is supported.
         * <p>
         * <ul>
         * <li>true: Cluster deletion protection is enabled.</li>
         * <li>false: This turns off cluster deletion protection.
         * Default value: false</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param deletionProtection Property deletionProtection: The cluster deletion protection property, which specifies whether cluster deletion via the console or the DeleteCluster API is supported. This parameter is required.
         */
        public Builder deletionProtection(final java.lang.Boolean deletionProtection) {
            this.props.deletionProtection(deletionProtection);
            return this;
        }
        /**
         * Property deletionProtection: The cluster deletion protection property, which specifies whether cluster deletion via the console or the DeleteCluster API is supported.
         * <p>
         * <ul>
         * <li>true: Cluster deletion protection is enabled.</li>
         * <li>false: This turns off cluster deletion protection.
         * Default value: false</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param deletionProtection Property deletionProtection: The cluster deletion protection property, which specifies whether cluster deletion via the console or the DeleteCluster API is supported. This parameter is required.
         */
        public Builder deletionProtection(final com.aliyun.ros.cdk.core.IResolvable deletionProtection) {
            this.props.deletionProtection(deletionProtection);
            return this;
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
         * <p>
         * @return {@code this}
         * @param isEnterpriseSecurityGroup Property isEnterpriseSecurityGroup: Whether to create an enterprise security group. This parameter is required.
         */
        public Builder isEnterpriseSecurityGroup(final java.lang.Boolean isEnterpriseSecurityGroup) {
            this.props.isEnterpriseSecurityGroup(isEnterpriseSecurityGroup);
            return this;
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
         * <p>
         * @return {@code this}
         * @param isEnterpriseSecurityGroup Property isEnterpriseSecurityGroup: Whether to create an enterprise security group. This parameter is required.
         */
        public Builder isEnterpriseSecurityGroup(final com.aliyun.ros.cdk.core.IResolvable isEnterpriseSecurityGroup) {
            this.props.isEnterpriseSecurityGroup(isEnterpriseSecurityGroup);
            return this;
        }

        /**
         * Property manager: The cluster manages node configuration.
         * <p>
         * @return {@code this}
         * @param manager Property manager: The cluster manages node configuration. This parameter is required.
         */
        public Builder manager(final com.aliyun.ros.cdk.core.IResolvable manager) {
            this.props.manager(manager);
            return this;
        }
        /**
         * Property manager: The cluster manages node configuration.
         * <p>
         * @return {@code this}
         * @param manager Property manager: The cluster manages node configuration. This parameter is required.
         */
        public Builder manager(final com.aliyun.ros.cdk.ehpc.RosClusterV2.ManagerProperty manager) {
            this.props.manager(manager);
            return this;
        }

        /**
         * Property maxCoreCount: Total number of cores that the cluster can manage on compute nodes, ranging from 0 to 100,000.
         * <p>
         * @return {@code this}
         * @param maxCoreCount Property maxCoreCount: Total number of cores that the cluster can manage on compute nodes, ranging from 0 to 100,000. This parameter is required.
         */
        public Builder maxCoreCount(final java.lang.Number maxCoreCount) {
            this.props.maxCoreCount(maxCoreCount);
            return this;
        }
        /**
         * Property maxCoreCount: Total number of cores that the cluster can manage on compute nodes, ranging from 0 to 100,000.
         * <p>
         * @return {@code this}
         * @param maxCoreCount Property maxCoreCount: Total number of cores that the cluster can manage on compute nodes, ranging from 0 to 100,000. This parameter is required.
         */
        public Builder maxCoreCount(final com.aliyun.ros.cdk.core.IResolvable maxCoreCount) {
            this.props.maxCoreCount(maxCoreCount);
            return this;
        }

        /**
         * Property maxCount: Number of compute nodes that can be managed by the cluster, ranging from 0 to 5,000.
         * <p>
         * @return {@code this}
         * @param maxCount Property maxCount: Number of compute nodes that can be managed by the cluster, ranging from 0 to 5,000. This parameter is required.
         */
        public Builder maxCount(final java.lang.Number maxCount) {
            this.props.maxCount(maxCount);
            return this;
        }
        /**
         * Property maxCount: Number of compute nodes that can be managed by the cluster, ranging from 0 to 5,000.
         * <p>
         * @return {@code this}
         * @param maxCount Property maxCount: Number of compute nodes that can be managed by the cluster, ranging from 0 to 5,000. This parameter is required.
         */
        public Builder maxCount(final com.aliyun.ros.cdk.core.IResolvable maxCount) {
            this.props.maxCount(maxCount);
            return this;
        }

        /**
         * Property queues: Cluster queue configuration.
         * <p>
         * The number of queues is supported from 0 to 8.
         * <p>
         * @return {@code this}
         * @param queues Property queues: Cluster queue configuration. This parameter is required.
         */
        public Builder queues(final com.aliyun.ros.cdk.core.IResolvable queues) {
            this.props.queues(queues);
            return this;
        }
        /**
         * Property queues: Cluster queue configuration.
         * <p>
         * The number of queues is supported from 0 to 8.
         * <p>
         * @return {@code this}
         * @param queues Property queues: Cluster queue configuration. This parameter is required.
         */
        public Builder queues(final java.util.List<? extends java.lang.Object> queues) {
            this.props.queues(queues);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property securityGroupId: Specifies the security group ID to which the newly created cluster belongs.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: Specifies the security group ID to which the newly created cluster belongs. This parameter is required.
         */
        public Builder securityGroupId(final java.lang.String securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }
        /**
         * Property securityGroupId: Specifies the security group ID to which the newly created cluster belongs.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: Specifies the security group ID to which the newly created cluster belongs. This parameter is required.
         */
        public Builder securityGroupId(final com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }

        /**
         * Property tags: Tags to attach to cluster_v2.
         * <p>
         * Max support 20 tags to add during create cluster_v2. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to cluster_v2. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.ehpc.RosClusterV2.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ehpc.ClusterV2}.
         */
        @Override
        public com.aliyun.ros.cdk.ehpc.ClusterV2 build() {
            return new com.aliyun.ros.cdk.ehpc.ClusterV2(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
