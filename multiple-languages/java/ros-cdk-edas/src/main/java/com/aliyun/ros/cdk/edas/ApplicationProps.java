package com.aliyun.ros.cdk.edas;

/**
 * Properties for defining a <code>Application</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-application
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:51.818Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.ApplicationProps")
@software.amazon.jsii.Jsii.Proxy(ApplicationProps.Jsii$Proxy.class)
public interface ApplicationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property applicationName: The application name (only allow the use of numbers, letters, -, _, up to 36 characters).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getApplicationName();

    /**
     * Property clusterId: Cluster ID of ECS application.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getClusterId();

    /**
     * Property buildPackId: EDAS-Container construct a packet number (available version list acquired through the ListBuildPack API (ConfigId of response) or "container version" table "Building packet number" column acquisition).
     * <p>
     * When creating HSF application, this parameter must be specified
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBuildPackId() {
        return null;
    }

    /**
     * Property componentIds: Application component ID (available through the query interface to obtain a list of components to the interface ListComponents), when creating the application runtime environment using Apache Tomcat (war packet format Dubbo Application required) or standard Java application (jar package format Spring Boot / Spring Cloud applications require) you need to specify when the operating environment.
     * <p>
     * Commonly used application component ID and meaning:
     * 4 represents Apache Tomcat 7.0.91,7 represented Apache Tomcat 8.5.42,5 represented OpenJDK 1.8.x, 6 represents OpenJDK
     * 1.7.x
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getComponentIds() {
        return null;
    }

    /**
     * Property deployment: Deploy application information to ECS clusters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeployment() {
        return null;
    }

    /**
     * Property description: Descriptive information.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property ecuInfo: Machine capacity is needed ecu_id (ECS Examples introducing another unique identity EDAS EDAS), the plurality of "," separated (by querying ListScaleOutEcu wherein ecu_id Interface to obtain).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEcuInfo() {
        return null;
    }

    /**
     * Property healthCheckUrl: Application Health Check URL.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckUrl() {
        return null;
    }

    /**
     * Property logicalRegionId: Namespace ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLogicalRegionId() {
        return null;
    }

    /**
     * Property packageType: Application packet format, possible values: war or jar.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPackageType() {
        return null;
    }

    /**
     * Property resourceGroupId: Resource group id.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ApplicationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ApplicationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ApplicationProps> {
        java.lang.Object applicationName;
        java.lang.Object clusterId;
        java.lang.Object buildPackId;
        java.lang.Object componentIds;
        java.lang.Object deployment;
        java.lang.Object description;
        java.lang.Object ecuInfo;
        java.lang.Object healthCheckUrl;
        java.lang.Object logicalRegionId;
        java.lang.Object packageType;
        java.lang.Object resourceGroupId;

        /**
         * Sets the value of {@link ApplicationProps#getApplicationName}
         * @param applicationName Property applicationName: The application name (only allow the use of numbers, letters, -, _, up to 36 characters). This parameter is required.
         * @return {@code this}
         */
        public Builder applicationName(java.lang.String applicationName) {
            this.applicationName = applicationName;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getApplicationName}
         * @param applicationName Property applicationName: The application name (only allow the use of numbers, letters, -, _, up to 36 characters). This parameter is required.
         * @return {@code this}
         */
        public Builder applicationName(com.aliyun.ros.cdk.core.IResolvable applicationName) {
            this.applicationName = applicationName;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getClusterId}
         * @param clusterId Property clusterId: Cluster ID of ECS application. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterId(java.lang.String clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getClusterId}
         * @param clusterId Property clusterId: Cluster ID of ECS application. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterId(com.aliyun.ros.cdk.core.IResolvable clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getBuildPackId}
         * @param buildPackId Property buildPackId: EDAS-Container construct a packet number (available version list acquired through the ListBuildPack API (ConfigId of response) or "container version" table "Building packet number" column acquisition).
         *                    When creating HSF application, this parameter must be specified
         * @return {@code this}
         */
        public Builder buildPackId(java.lang.Number buildPackId) {
            this.buildPackId = buildPackId;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getBuildPackId}
         * @param buildPackId Property buildPackId: EDAS-Container construct a packet number (available version list acquired through the ListBuildPack API (ConfigId of response) or "container version" table "Building packet number" column acquisition).
         *                    When creating HSF application, this parameter must be specified
         * @return {@code this}
         */
        public Builder buildPackId(com.aliyun.ros.cdk.core.IResolvable buildPackId) {
            this.buildPackId = buildPackId;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getComponentIds}
         * @param componentIds Property componentIds: Application component ID (available through the query interface to obtain a list of components to the interface ListComponents), when creating the application runtime environment using Apache Tomcat (war packet format Dubbo Application required) or standard Java application (jar package format Spring Boot / Spring Cloud applications require) you need to specify when the operating environment.
         *                     Commonly used application component ID and meaning:
         *                     4 represents Apache Tomcat 7.0.91,7 represented Apache Tomcat 8.5.42,5 represented OpenJDK 1.8.x, 6 represents OpenJDK
         *                     1.7.x
         * @return {@code this}
         */
        public Builder componentIds(java.lang.String componentIds) {
            this.componentIds = componentIds;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getComponentIds}
         * @param componentIds Property componentIds: Application component ID (available through the query interface to obtain a list of components to the interface ListComponents), when creating the application runtime environment using Apache Tomcat (war packet format Dubbo Application required) or standard Java application (jar package format Spring Boot / Spring Cloud applications require) you need to specify when the operating environment.
         *                     Commonly used application component ID and meaning:
         *                     4 represents Apache Tomcat 7.0.91,7 represented Apache Tomcat 8.5.42,5 represented OpenJDK 1.8.x, 6 represents OpenJDK
         *                     1.7.x
         * @return {@code this}
         */
        public Builder componentIds(com.aliyun.ros.cdk.core.IResolvable componentIds) {
            this.componentIds = componentIds;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getDeployment}
         * @param deployment Property deployment: Deploy application information to ECS clusters.
         * @return {@code this}
         */
        public Builder deployment(com.aliyun.ros.cdk.core.IResolvable deployment) {
            this.deployment = deployment;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getDeployment}
         * @param deployment Property deployment: Deploy application information to ECS clusters.
         * @return {@code this}
         */
        public Builder deployment(com.aliyun.ros.cdk.edas.RosApplication.DeploymentProperty deployment) {
            this.deployment = deployment;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getDescription}
         * @param description Property description: Descriptive information.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getDescription}
         * @param description Property description: Descriptive information.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getEcuInfo}
         * @param ecuInfo Property ecuInfo: Machine capacity is needed ecu_id (ECS Examples introducing another unique identity EDAS EDAS), the plurality of "," separated (by querying ListScaleOutEcu wherein ecu_id Interface to obtain).
         * @return {@code this}
         */
        public Builder ecuInfo(java.lang.String ecuInfo) {
            this.ecuInfo = ecuInfo;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getEcuInfo}
         * @param ecuInfo Property ecuInfo: Machine capacity is needed ecu_id (ECS Examples introducing another unique identity EDAS EDAS), the plurality of "," separated (by querying ListScaleOutEcu wherein ecu_id Interface to obtain).
         * @return {@code this}
         */
        public Builder ecuInfo(com.aliyun.ros.cdk.core.IResolvable ecuInfo) {
            this.ecuInfo = ecuInfo;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getHealthCheckUrl}
         * @param healthCheckUrl Property healthCheckUrl: Application Health Check URL.
         * @return {@code this}
         */
        public Builder healthCheckUrl(java.lang.String healthCheckUrl) {
            this.healthCheckUrl = healthCheckUrl;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getHealthCheckUrl}
         * @param healthCheckUrl Property healthCheckUrl: Application Health Check URL.
         * @return {@code this}
         */
        public Builder healthCheckUrl(com.aliyun.ros.cdk.core.IResolvable healthCheckUrl) {
            this.healthCheckUrl = healthCheckUrl;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getLogicalRegionId}
         * @param logicalRegionId Property logicalRegionId: Namespace ID.
         * @return {@code this}
         */
        public Builder logicalRegionId(java.lang.String logicalRegionId) {
            this.logicalRegionId = logicalRegionId;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getLogicalRegionId}
         * @param logicalRegionId Property logicalRegionId: Namespace ID.
         * @return {@code this}
         */
        public Builder logicalRegionId(com.aliyun.ros.cdk.core.IResolvable logicalRegionId) {
            this.logicalRegionId = logicalRegionId;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getPackageType}
         * @param packageType Property packageType: Application packet format, possible values: war or jar.
         * @return {@code this}
         */
        public Builder packageType(java.lang.String packageType) {
            this.packageType = packageType;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getPackageType}
         * @param packageType Property packageType: Application packet format, possible values: war or jar.
         * @return {@code this}
         */
        public Builder packageType(com.aliyun.ros.cdk.core.IResolvable packageType) {
            this.packageType = packageType;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ApplicationProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ApplicationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ApplicationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ApplicationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ApplicationProps {
        private final java.lang.Object applicationName;
        private final java.lang.Object clusterId;
        private final java.lang.Object buildPackId;
        private final java.lang.Object componentIds;
        private final java.lang.Object deployment;
        private final java.lang.Object description;
        private final java.lang.Object ecuInfo;
        private final java.lang.Object healthCheckUrl;
        private final java.lang.Object logicalRegionId;
        private final java.lang.Object packageType;
        private final java.lang.Object resourceGroupId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.applicationName = software.amazon.jsii.Kernel.get(this, "applicationName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clusterId = software.amazon.jsii.Kernel.get(this, "clusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.buildPackId = software.amazon.jsii.Kernel.get(this, "buildPackId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.componentIds = software.amazon.jsii.Kernel.get(this, "componentIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deployment = software.amazon.jsii.Kernel.get(this, "deployment", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ecuInfo = software.amazon.jsii.Kernel.get(this, "ecuInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.healthCheckUrl = software.amazon.jsii.Kernel.get(this, "healthCheckUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logicalRegionId = software.amazon.jsii.Kernel.get(this, "logicalRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.packageType = software.amazon.jsii.Kernel.get(this, "packageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.applicationName = java.util.Objects.requireNonNull(builder.applicationName, "applicationName is required");
            this.clusterId = java.util.Objects.requireNonNull(builder.clusterId, "clusterId is required");
            this.buildPackId = builder.buildPackId;
            this.componentIds = builder.componentIds;
            this.deployment = builder.deployment;
            this.description = builder.description;
            this.ecuInfo = builder.ecuInfo;
            this.healthCheckUrl = builder.healthCheckUrl;
            this.logicalRegionId = builder.logicalRegionId;
            this.packageType = builder.packageType;
            this.resourceGroupId = builder.resourceGroupId;
        }

        @Override
        public final java.lang.Object getApplicationName() {
            return this.applicationName;
        }

        @Override
        public final java.lang.Object getClusterId() {
            return this.clusterId;
        }

        @Override
        public final java.lang.Object getBuildPackId() {
            return this.buildPackId;
        }

        @Override
        public final java.lang.Object getComponentIds() {
            return this.componentIds;
        }

        @Override
        public final java.lang.Object getDeployment() {
            return this.deployment;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getEcuInfo() {
            return this.ecuInfo;
        }

        @Override
        public final java.lang.Object getHealthCheckUrl() {
            return this.healthCheckUrl;
        }

        @Override
        public final java.lang.Object getLogicalRegionId() {
            return this.logicalRegionId;
        }

        @Override
        public final java.lang.Object getPackageType() {
            return this.packageType;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("applicationName", om.valueToTree(this.getApplicationName()));
            data.set("clusterId", om.valueToTree(this.getClusterId()));
            if (this.getBuildPackId() != null) {
                data.set("buildPackId", om.valueToTree(this.getBuildPackId()));
            }
            if (this.getComponentIds() != null) {
                data.set("componentIds", om.valueToTree(this.getComponentIds()));
            }
            if (this.getDeployment() != null) {
                data.set("deployment", om.valueToTree(this.getDeployment()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getEcuInfo() != null) {
                data.set("ecuInfo", om.valueToTree(this.getEcuInfo()));
            }
            if (this.getHealthCheckUrl() != null) {
                data.set("healthCheckUrl", om.valueToTree(this.getHealthCheckUrl()));
            }
            if (this.getLogicalRegionId() != null) {
                data.set("logicalRegionId", om.valueToTree(this.getLogicalRegionId()));
            }
            if (this.getPackageType() != null) {
                data.set("packageType", om.valueToTree(this.getPackageType()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.ApplicationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ApplicationProps.Jsii$Proxy that = (ApplicationProps.Jsii$Proxy) o;

            if (!applicationName.equals(that.applicationName)) return false;
            if (!clusterId.equals(that.clusterId)) return false;
            if (this.buildPackId != null ? !this.buildPackId.equals(that.buildPackId) : that.buildPackId != null) return false;
            if (this.componentIds != null ? !this.componentIds.equals(that.componentIds) : that.componentIds != null) return false;
            if (this.deployment != null ? !this.deployment.equals(that.deployment) : that.deployment != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.ecuInfo != null ? !this.ecuInfo.equals(that.ecuInfo) : that.ecuInfo != null) return false;
            if (this.healthCheckUrl != null ? !this.healthCheckUrl.equals(that.healthCheckUrl) : that.healthCheckUrl != null) return false;
            if (this.logicalRegionId != null ? !this.logicalRegionId.equals(that.logicalRegionId) : that.logicalRegionId != null) return false;
            if (this.packageType != null ? !this.packageType.equals(that.packageType) : that.packageType != null) return false;
            return this.resourceGroupId != null ? this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.applicationName.hashCode();
            result = 31 * result + (this.clusterId.hashCode());
            result = 31 * result + (this.buildPackId != null ? this.buildPackId.hashCode() : 0);
            result = 31 * result + (this.componentIds != null ? this.componentIds.hashCode() : 0);
            result = 31 * result + (this.deployment != null ? this.deployment.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.ecuInfo != null ? this.ecuInfo.hashCode() : 0);
            result = 31 * result + (this.healthCheckUrl != null ? this.healthCheckUrl.hashCode() : 0);
            result = 31 * result + (this.logicalRegionId != null ? this.logicalRegionId.hashCode() : 0);
            result = 31 * result + (this.packageType != null ? this.packageType.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            return result;
        }
    }
}
