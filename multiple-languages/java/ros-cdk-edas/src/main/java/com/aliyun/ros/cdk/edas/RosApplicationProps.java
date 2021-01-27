package com.aliyun.ros.cdk.edas;

/**
 * Properties for defining a `ALIYUN::EDAS::Application`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:33.833Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.edas.$Module.class, fqn = "@alicloud/ros-cdk-edas.RosApplicationProps")
@software.amazon.jsii.Jsii.Proxy(RosApplicationProps.Jsii$Proxy.class)
public interface RosApplicationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getApplicationName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getClusterId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getBuildPackId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getComponentIds() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getEcuInfo() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getHealthCheckUrl() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getLogicalRegionId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getPackageType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosApplicationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosApplicationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosApplicationProps> {
        private java.lang.String applicationName;
        private java.lang.String clusterId;
        private java.lang.Number buildPackId;
        private java.lang.String componentIds;
        private java.lang.String description;
        private java.lang.String ecuInfo;
        private java.lang.String healthCheckUrl;
        private java.lang.String logicalRegionId;
        private java.lang.String packageType;

        /**
         * Sets the value of {@link RosApplicationProps#getApplicationName}
         * @param applicationName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder applicationName(java.lang.String applicationName) {
            this.applicationName = applicationName;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getClusterId}
         * @param clusterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterId(java.lang.String clusterId) {
            this.clusterId = clusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getBuildPackId}
         * @param buildPackId the value to be set.
         * @return {@code this}
         */
        public Builder buildPackId(java.lang.Number buildPackId) {
            this.buildPackId = buildPackId;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getComponentIds}
         * @param componentIds the value to be set.
         * @return {@code this}
         */
        public Builder componentIds(java.lang.String componentIds) {
            this.componentIds = componentIds;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getEcuInfo}
         * @param ecuInfo the value to be set.
         * @return {@code this}
         */
        public Builder ecuInfo(java.lang.String ecuInfo) {
            this.ecuInfo = ecuInfo;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getHealthCheckUrl}
         * @param healthCheckUrl the value to be set.
         * @return {@code this}
         */
        public Builder healthCheckUrl(java.lang.String healthCheckUrl) {
            this.healthCheckUrl = healthCheckUrl;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getLogicalRegionId}
         * @param logicalRegionId the value to be set.
         * @return {@code this}
         */
        public Builder logicalRegionId(java.lang.String logicalRegionId) {
            this.logicalRegionId = logicalRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosApplicationProps#getPackageType}
         * @param packageType the value to be set.
         * @return {@code this}
         */
        public Builder packageType(java.lang.String packageType) {
            this.packageType = packageType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosApplicationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosApplicationProps build() {
            return new Jsii$Proxy(applicationName, clusterId, buildPackId, componentIds, description, ecuInfo, healthCheckUrl, logicalRegionId, packageType);
        }
    }

    /**
     * An implementation for {@link RosApplicationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosApplicationProps {
        private final java.lang.String applicationName;
        private final java.lang.String clusterId;
        private final java.lang.Number buildPackId;
        private final java.lang.String componentIds;
        private final java.lang.String description;
        private final java.lang.String ecuInfo;
        private final java.lang.String healthCheckUrl;
        private final java.lang.String logicalRegionId;
        private final java.lang.String packageType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.applicationName = software.amazon.jsii.Kernel.get(this, "applicationName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.clusterId = software.amazon.jsii.Kernel.get(this, "clusterId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.buildPackId = software.amazon.jsii.Kernel.get(this, "buildPackId", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.componentIds = software.amazon.jsii.Kernel.get(this, "componentIds", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.ecuInfo = software.amazon.jsii.Kernel.get(this, "ecuInfo", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.healthCheckUrl = software.amazon.jsii.Kernel.get(this, "healthCheckUrl", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.logicalRegionId = software.amazon.jsii.Kernel.get(this, "logicalRegionId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.packageType = software.amazon.jsii.Kernel.get(this, "packageType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String applicationName, final java.lang.String clusterId, final java.lang.Number buildPackId, final java.lang.String componentIds, final java.lang.String description, final java.lang.String ecuInfo, final java.lang.String healthCheckUrl, final java.lang.String logicalRegionId, final java.lang.String packageType) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.applicationName = java.util.Objects.requireNonNull(applicationName, "applicationName is required");
            this.clusterId = java.util.Objects.requireNonNull(clusterId, "clusterId is required");
            this.buildPackId = buildPackId;
            this.componentIds = componentIds;
            this.description = description;
            this.ecuInfo = ecuInfo;
            this.healthCheckUrl = healthCheckUrl;
            this.logicalRegionId = logicalRegionId;
            this.packageType = packageType;
        }

        @Override
        public final java.lang.String getApplicationName() {
            return this.applicationName;
        }

        @Override
        public final java.lang.String getClusterId() {
            return this.clusterId;
        }

        @Override
        public final java.lang.Number getBuildPackId() {
            return this.buildPackId;
        }

        @Override
        public final java.lang.String getComponentIds() {
            return this.componentIds;
        }

        @Override
        public final java.lang.String getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.String getEcuInfo() {
            return this.ecuInfo;
        }

        @Override
        public final java.lang.String getHealthCheckUrl() {
            return this.healthCheckUrl;
        }

        @Override
        public final java.lang.String getLogicalRegionId() {
            return this.logicalRegionId;
        }

        @Override
        public final java.lang.String getPackageType() {
            return this.packageType;
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

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-edas.RosApplicationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosApplicationProps.Jsii$Proxy that = (RosApplicationProps.Jsii$Proxy) o;

            if (!applicationName.equals(that.applicationName)) return false;
            if (!clusterId.equals(that.clusterId)) return false;
            if (this.buildPackId != null ? !this.buildPackId.equals(that.buildPackId) : that.buildPackId != null) return false;
            if (this.componentIds != null ? !this.componentIds.equals(that.componentIds) : that.componentIds != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.ecuInfo != null ? !this.ecuInfo.equals(that.ecuInfo) : that.ecuInfo != null) return false;
            if (this.healthCheckUrl != null ? !this.healthCheckUrl.equals(that.healthCheckUrl) : that.healthCheckUrl != null) return false;
            if (this.logicalRegionId != null ? !this.logicalRegionId.equals(that.logicalRegionId) : that.logicalRegionId != null) return false;
            return this.packageType != null ? this.packageType.equals(that.packageType) : that.packageType == null;
        }

        @Override
        public final int hashCode() {
            int result = this.applicationName.hashCode();
            result = 31 * result + (this.clusterId.hashCode());
            result = 31 * result + (this.buildPackId != null ? this.buildPackId.hashCode() : 0);
            result = 31 * result + (this.componentIds != null ? this.componentIds.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.ecuInfo != null ? this.ecuInfo.hashCode() : 0);
            result = 31 * result + (this.healthCheckUrl != null ? this.healthCheckUrl.hashCode() : 0);
            result = 31 * result + (this.logicalRegionId != null ? this.logicalRegionId.hashCode() : 0);
            result = 31 * result + (this.packageType != null ? this.packageType.hashCode() : 0);
            return result;
        }
    }
}
