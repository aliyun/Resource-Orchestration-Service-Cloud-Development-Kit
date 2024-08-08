package com.aliyun.ros.cdk.emr;

/**
 * Properties for defining a <code>RosCluster2</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-cluster2
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-08T09:17:10.724Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.RosCluster2Props")
@software.amazon.jsii.Jsii.Proxy(RosCluster2Props.Jsii$Proxy.class)
public interface RosCluster2Props extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getApplications();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getClusterName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getClusterType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNodeAttributes();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNodeGroups();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getReleaseVersion();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getApplicationConfigs() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBootstrapScripts() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeployMode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPaymentType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityMode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSubscriptionConfig() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.emr.RosCluster2.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosCluster2Props}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosCluster2Props}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosCluster2Props> {
        java.lang.Object applications;
        java.lang.Object clusterName;
        java.lang.Object clusterType;
        java.lang.Object nodeAttributes;
        java.lang.Object nodeGroups;
        java.lang.Object releaseVersion;
        java.lang.Object applicationConfigs;
        java.lang.Object bootstrapScripts;
        java.lang.Object deployMode;
        java.lang.Object paymentType;
        java.lang.Object resourceGroupId;
        java.lang.Object securityMode;
        java.lang.Object subscriptionConfig;
        java.util.List<com.aliyun.ros.cdk.emr.RosCluster2.TagsProperty> tags;

        /**
         * Sets the value of {@link RosCluster2Props#getApplications}
         * @param applications the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder applications(com.aliyun.ros.cdk.core.IResolvable applications) {
            this.applications = applications;
            return this;
        }

        /**
         * Sets the value of {@link RosCluster2Props#getApplications}
         * @param applications the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder applications(java.util.List<? extends java.lang.Object> applications) {
            this.applications = applications;
            return this;
        }

        /**
         * Sets the value of {@link RosCluster2Props#getClusterName}
         * @param clusterName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterName(java.lang.String clusterName) {
            this.clusterName = clusterName;
            return this;
        }

        /**
         * Sets the value of {@link RosCluster2Props#getClusterName}
         * @param clusterName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterName(com.aliyun.ros.cdk.core.IResolvable clusterName) {
            this.clusterName = clusterName;
            return this;
        }

        /**
         * Sets the value of {@link RosCluster2Props#getClusterType}
         * @param clusterType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterType(java.lang.String clusterType) {
            this.clusterType = clusterType;
            return this;
        }

        /**
         * Sets the value of {@link RosCluster2Props#getClusterType}
         * @param clusterType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterType(com.aliyun.ros.cdk.core.IResolvable clusterType) {
            this.clusterType = clusterType;
            return this;
        }

        /**
         * Sets the value of {@link RosCluster2Props#getNodeAttributes}
         * @param nodeAttributes the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder nodeAttributes(com.aliyun.ros.cdk.core.IResolvable nodeAttributes) {
            this.nodeAttributes = nodeAttributes;
            return this;
        }

        /**
         * Sets the value of {@link RosCluster2Props#getNodeAttributes}
         * @param nodeAttributes the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder nodeAttributes(com.aliyun.ros.cdk.emr.RosCluster2.NodeAttributesProperty nodeAttributes) {
            this.nodeAttributes = nodeAttributes;
            return this;
        }

        /**
         * Sets the value of {@link RosCluster2Props#getNodeGroups}
         * @param nodeGroups the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder nodeGroups(com.aliyun.ros.cdk.core.IResolvable nodeGroups) {
            this.nodeGroups = nodeGroups;
            return this;
        }

        /**
         * Sets the value of {@link RosCluster2Props#getNodeGroups}
         * @param nodeGroups the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder nodeGroups(java.util.List<? extends java.lang.Object> nodeGroups) {
            this.nodeGroups = nodeGroups;
            return this;
        }

        /**
         * Sets the value of {@link RosCluster2Props#getReleaseVersion}
         * @param releaseVersion the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder releaseVersion(java.lang.String releaseVersion) {
            this.releaseVersion = releaseVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosCluster2Props#getReleaseVersion}
         * @param releaseVersion the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder releaseVersion(com.aliyun.ros.cdk.core.IResolvable releaseVersion) {
            this.releaseVersion = releaseVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosCluster2Props#getApplicationConfigs}
         * @param applicationConfigs the value to be set.
         * @return {@code this}
         */
        public Builder applicationConfigs(com.aliyun.ros.cdk.core.IResolvable applicationConfigs) {
            this.applicationConfigs = applicationConfigs;
            return this;
        }

        /**
         * Sets the value of {@link RosCluster2Props#getApplicationConfigs}
         * @param applicationConfigs the value to be set.
         * @return {@code this}
         */
        public Builder applicationConfigs(java.util.List<? extends java.lang.Object> applicationConfigs) {
            this.applicationConfigs = applicationConfigs;
            return this;
        }

        /**
         * Sets the value of {@link RosCluster2Props#getBootstrapScripts}
         * @param bootstrapScripts the value to be set.
         * @return {@code this}
         */
        public Builder bootstrapScripts(com.aliyun.ros.cdk.core.IResolvable bootstrapScripts) {
            this.bootstrapScripts = bootstrapScripts;
            return this;
        }

        /**
         * Sets the value of {@link RosCluster2Props#getBootstrapScripts}
         * @param bootstrapScripts the value to be set.
         * @return {@code this}
         */
        public Builder bootstrapScripts(java.util.List<? extends java.lang.Object> bootstrapScripts) {
            this.bootstrapScripts = bootstrapScripts;
            return this;
        }

        /**
         * Sets the value of {@link RosCluster2Props#getDeployMode}
         * @param deployMode the value to be set.
         * @return {@code this}
         */
        public Builder deployMode(java.lang.String deployMode) {
            this.deployMode = deployMode;
            return this;
        }

        /**
         * Sets the value of {@link RosCluster2Props#getDeployMode}
         * @param deployMode the value to be set.
         * @return {@code this}
         */
        public Builder deployMode(com.aliyun.ros.cdk.core.IResolvable deployMode) {
            this.deployMode = deployMode;
            return this;
        }

        /**
         * Sets the value of {@link RosCluster2Props#getPaymentType}
         * @param paymentType the value to be set.
         * @return {@code this}
         */
        public Builder paymentType(java.lang.String paymentType) {
            this.paymentType = paymentType;
            return this;
        }

        /**
         * Sets the value of {@link RosCluster2Props#getPaymentType}
         * @param paymentType the value to be set.
         * @return {@code this}
         */
        public Builder paymentType(com.aliyun.ros.cdk.core.IResolvable paymentType) {
            this.paymentType = paymentType;
            return this;
        }

        /**
         * Sets the value of {@link RosCluster2Props#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosCluster2Props#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosCluster2Props#getSecurityMode}
         * @param securityMode the value to be set.
         * @return {@code this}
         */
        public Builder securityMode(java.lang.String securityMode) {
            this.securityMode = securityMode;
            return this;
        }

        /**
         * Sets the value of {@link RosCluster2Props#getSecurityMode}
         * @param securityMode the value to be set.
         * @return {@code this}
         */
        public Builder securityMode(com.aliyun.ros.cdk.core.IResolvable securityMode) {
            this.securityMode = securityMode;
            return this;
        }

        /**
         * Sets the value of {@link RosCluster2Props#getSubscriptionConfig}
         * @param subscriptionConfig the value to be set.
         * @return {@code this}
         */
        public Builder subscriptionConfig(com.aliyun.ros.cdk.core.IResolvable subscriptionConfig) {
            this.subscriptionConfig = subscriptionConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosCluster2Props#getSubscriptionConfig}
         * @param subscriptionConfig the value to be set.
         * @return {@code this}
         */
        public Builder subscriptionConfig(com.aliyun.ros.cdk.emr.RosCluster2.SubscriptionConfigProperty subscriptionConfig) {
            this.subscriptionConfig = subscriptionConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosCluster2Props#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.emr.RosCluster2.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.emr.RosCluster2.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosCluster2Props}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosCluster2Props build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosCluster2Props}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosCluster2Props {
        private final java.lang.Object applications;
        private final java.lang.Object clusterName;
        private final java.lang.Object clusterType;
        private final java.lang.Object nodeAttributes;
        private final java.lang.Object nodeGroups;
        private final java.lang.Object releaseVersion;
        private final java.lang.Object applicationConfigs;
        private final java.lang.Object bootstrapScripts;
        private final java.lang.Object deployMode;
        private final java.lang.Object paymentType;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object securityMode;
        private final java.lang.Object subscriptionConfig;
        private final java.util.List<com.aliyun.ros.cdk.emr.RosCluster2.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.applications = software.amazon.jsii.Kernel.get(this, "applications", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clusterName = software.amazon.jsii.Kernel.get(this, "clusterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clusterType = software.amazon.jsii.Kernel.get(this, "clusterType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.nodeAttributes = software.amazon.jsii.Kernel.get(this, "nodeAttributes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.nodeGroups = software.amazon.jsii.Kernel.get(this, "nodeGroups", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.releaseVersion = software.amazon.jsii.Kernel.get(this, "releaseVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.applicationConfigs = software.amazon.jsii.Kernel.get(this, "applicationConfigs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.bootstrapScripts = software.amazon.jsii.Kernel.get(this, "bootstrapScripts", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deployMode = software.amazon.jsii.Kernel.get(this, "deployMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.paymentType = software.amazon.jsii.Kernel.get(this, "paymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityMode = software.amazon.jsii.Kernel.get(this, "securityMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.subscriptionConfig = software.amazon.jsii.Kernel.get(this, "subscriptionConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.emr.RosCluster2.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.applications = java.util.Objects.requireNonNull(builder.applications, "applications is required");
            this.clusterName = java.util.Objects.requireNonNull(builder.clusterName, "clusterName is required");
            this.clusterType = java.util.Objects.requireNonNull(builder.clusterType, "clusterType is required");
            this.nodeAttributes = java.util.Objects.requireNonNull(builder.nodeAttributes, "nodeAttributes is required");
            this.nodeGroups = java.util.Objects.requireNonNull(builder.nodeGroups, "nodeGroups is required");
            this.releaseVersion = java.util.Objects.requireNonNull(builder.releaseVersion, "releaseVersion is required");
            this.applicationConfigs = builder.applicationConfigs;
            this.bootstrapScripts = builder.bootstrapScripts;
            this.deployMode = builder.deployMode;
            this.paymentType = builder.paymentType;
            this.resourceGroupId = builder.resourceGroupId;
            this.securityMode = builder.securityMode;
            this.subscriptionConfig = builder.subscriptionConfig;
            this.tags = (java.util.List<com.aliyun.ros.cdk.emr.RosCluster2.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getApplications() {
            return this.applications;
        }

        @Override
        public final java.lang.Object getClusterName() {
            return this.clusterName;
        }

        @Override
        public final java.lang.Object getClusterType() {
            return this.clusterType;
        }

        @Override
        public final java.lang.Object getNodeAttributes() {
            return this.nodeAttributes;
        }

        @Override
        public final java.lang.Object getNodeGroups() {
            return this.nodeGroups;
        }

        @Override
        public final java.lang.Object getReleaseVersion() {
            return this.releaseVersion;
        }

        @Override
        public final java.lang.Object getApplicationConfigs() {
            return this.applicationConfigs;
        }

        @Override
        public final java.lang.Object getBootstrapScripts() {
            return this.bootstrapScripts;
        }

        @Override
        public final java.lang.Object getDeployMode() {
            return this.deployMode;
        }

        @Override
        public final java.lang.Object getPaymentType() {
            return this.paymentType;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getSecurityMode() {
            return this.securityMode;
        }

        @Override
        public final java.lang.Object getSubscriptionConfig() {
            return this.subscriptionConfig;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.emr.RosCluster2.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("applications", om.valueToTree(this.getApplications()));
            data.set("clusterName", om.valueToTree(this.getClusterName()));
            data.set("clusterType", om.valueToTree(this.getClusterType()));
            data.set("nodeAttributes", om.valueToTree(this.getNodeAttributes()));
            data.set("nodeGroups", om.valueToTree(this.getNodeGroups()));
            data.set("releaseVersion", om.valueToTree(this.getReleaseVersion()));
            if (this.getApplicationConfigs() != null) {
                data.set("applicationConfigs", om.valueToTree(this.getApplicationConfigs()));
            }
            if (this.getBootstrapScripts() != null) {
                data.set("bootstrapScripts", om.valueToTree(this.getBootstrapScripts()));
            }
            if (this.getDeployMode() != null) {
                data.set("deployMode", om.valueToTree(this.getDeployMode()));
            }
            if (this.getPaymentType() != null) {
                data.set("paymentType", om.valueToTree(this.getPaymentType()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSecurityMode() != null) {
                data.set("securityMode", om.valueToTree(this.getSecurityMode()));
            }
            if (this.getSubscriptionConfig() != null) {
                data.set("subscriptionConfig", om.valueToTree(this.getSubscriptionConfig()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-emr.RosCluster2Props"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosCluster2Props.Jsii$Proxy that = (RosCluster2Props.Jsii$Proxy) o;

            if (!applications.equals(that.applications)) return false;
            if (!clusterName.equals(that.clusterName)) return false;
            if (!clusterType.equals(that.clusterType)) return false;
            if (!nodeAttributes.equals(that.nodeAttributes)) return false;
            if (!nodeGroups.equals(that.nodeGroups)) return false;
            if (!releaseVersion.equals(that.releaseVersion)) return false;
            if (this.applicationConfigs != null ? !this.applicationConfigs.equals(that.applicationConfigs) : that.applicationConfigs != null) return false;
            if (this.bootstrapScripts != null ? !this.bootstrapScripts.equals(that.bootstrapScripts) : that.bootstrapScripts != null) return false;
            if (this.deployMode != null ? !this.deployMode.equals(that.deployMode) : that.deployMode != null) return false;
            if (this.paymentType != null ? !this.paymentType.equals(that.paymentType) : that.paymentType != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.securityMode != null ? !this.securityMode.equals(that.securityMode) : that.securityMode != null) return false;
            if (this.subscriptionConfig != null ? !this.subscriptionConfig.equals(that.subscriptionConfig) : that.subscriptionConfig != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.applications.hashCode();
            result = 31 * result + (this.clusterName.hashCode());
            result = 31 * result + (this.clusterType.hashCode());
            result = 31 * result + (this.nodeAttributes.hashCode());
            result = 31 * result + (this.nodeGroups.hashCode());
            result = 31 * result + (this.releaseVersion.hashCode());
            result = 31 * result + (this.applicationConfigs != null ? this.applicationConfigs.hashCode() : 0);
            result = 31 * result + (this.bootstrapScripts != null ? this.bootstrapScripts.hashCode() : 0);
            result = 31 * result + (this.deployMode != null ? this.deployMode.hashCode() : 0);
            result = 31 * result + (this.paymentType != null ? this.paymentType.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.securityMode != null ? this.securityMode.hashCode() : 0);
            result = 31 * result + (this.subscriptionConfig != null ? this.subscriptionConfig.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
