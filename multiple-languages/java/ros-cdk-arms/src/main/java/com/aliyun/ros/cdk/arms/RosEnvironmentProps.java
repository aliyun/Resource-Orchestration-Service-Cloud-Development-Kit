package com.aliyun.ros.cdk.arms;

/**
 * Properties for defining a <code>RosEnvironment</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-environment
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:36.392Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.arms.$Module.class, fqn = "@alicloud/ros-cdk-arms.RosEnvironmentProps")
@software.amazon.jsii.Jsii.Proxy(RosEnvironmentProps.Jsii$Proxy.class)
public interface RosEnvironmentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBindResourceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEnvironmentName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEnvironmentSubType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEnvironmentType();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeletePromInstance() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFeePackage() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGrafanaWorkspaceId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getManagedType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrometheusInstanceId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.arms.RosEnvironment.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosEnvironmentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosEnvironmentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosEnvironmentProps> {
        java.lang.Object bindResourceId;
        java.lang.Object environmentName;
        java.lang.Object environmentSubType;
        java.lang.Object environmentType;
        java.lang.Object deletePromInstance;
        java.lang.Object feePackage;
        java.lang.Object grafanaWorkspaceId;
        java.lang.Object managedType;
        java.lang.Object prometheusInstanceId;
        java.lang.Object resourceGroupId;
        java.util.List<com.aliyun.ros.cdk.arms.RosEnvironment.TagsProperty> tags;

        /**
         * Sets the value of {@link RosEnvironmentProps#getBindResourceId}
         * @param bindResourceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bindResourceId(java.lang.String bindResourceId) {
            this.bindResourceId = bindResourceId;
            return this;
        }

        /**
         * Sets the value of {@link RosEnvironmentProps#getBindResourceId}
         * @param bindResourceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bindResourceId(com.aliyun.ros.cdk.core.IResolvable bindResourceId) {
            this.bindResourceId = bindResourceId;
            return this;
        }

        /**
         * Sets the value of {@link RosEnvironmentProps#getEnvironmentName}
         * @param environmentName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder environmentName(java.lang.String environmentName) {
            this.environmentName = environmentName;
            return this;
        }

        /**
         * Sets the value of {@link RosEnvironmentProps#getEnvironmentName}
         * @param environmentName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder environmentName(com.aliyun.ros.cdk.core.IResolvable environmentName) {
            this.environmentName = environmentName;
            return this;
        }

        /**
         * Sets the value of {@link RosEnvironmentProps#getEnvironmentSubType}
         * @param environmentSubType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder environmentSubType(java.lang.String environmentSubType) {
            this.environmentSubType = environmentSubType;
            return this;
        }

        /**
         * Sets the value of {@link RosEnvironmentProps#getEnvironmentSubType}
         * @param environmentSubType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder environmentSubType(com.aliyun.ros.cdk.core.IResolvable environmentSubType) {
            this.environmentSubType = environmentSubType;
            return this;
        }

        /**
         * Sets the value of {@link RosEnvironmentProps#getEnvironmentType}
         * @param environmentType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder environmentType(java.lang.String environmentType) {
            this.environmentType = environmentType;
            return this;
        }

        /**
         * Sets the value of {@link RosEnvironmentProps#getEnvironmentType}
         * @param environmentType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder environmentType(com.aliyun.ros.cdk.core.IResolvable environmentType) {
            this.environmentType = environmentType;
            return this;
        }

        /**
         * Sets the value of {@link RosEnvironmentProps#getDeletePromInstance}
         * @param deletePromInstance the value to be set.
         * @return {@code this}
         */
        public Builder deletePromInstance(java.lang.Boolean deletePromInstance) {
            this.deletePromInstance = deletePromInstance;
            return this;
        }

        /**
         * Sets the value of {@link RosEnvironmentProps#getDeletePromInstance}
         * @param deletePromInstance the value to be set.
         * @return {@code this}
         */
        public Builder deletePromInstance(com.aliyun.ros.cdk.core.IResolvable deletePromInstance) {
            this.deletePromInstance = deletePromInstance;
            return this;
        }

        /**
         * Sets the value of {@link RosEnvironmentProps#getFeePackage}
         * @param feePackage the value to be set.
         * @return {@code this}
         */
        public Builder feePackage(java.lang.String feePackage) {
            this.feePackage = feePackage;
            return this;
        }

        /**
         * Sets the value of {@link RosEnvironmentProps#getFeePackage}
         * @param feePackage the value to be set.
         * @return {@code this}
         */
        public Builder feePackage(com.aliyun.ros.cdk.core.IResolvable feePackage) {
            this.feePackage = feePackage;
            return this;
        }

        /**
         * Sets the value of {@link RosEnvironmentProps#getGrafanaWorkspaceId}
         * @param grafanaWorkspaceId the value to be set.
         * @return {@code this}
         */
        public Builder grafanaWorkspaceId(java.lang.String grafanaWorkspaceId) {
            this.grafanaWorkspaceId = grafanaWorkspaceId;
            return this;
        }

        /**
         * Sets the value of {@link RosEnvironmentProps#getGrafanaWorkspaceId}
         * @param grafanaWorkspaceId the value to be set.
         * @return {@code this}
         */
        public Builder grafanaWorkspaceId(com.aliyun.ros.cdk.core.IResolvable grafanaWorkspaceId) {
            this.grafanaWorkspaceId = grafanaWorkspaceId;
            return this;
        }

        /**
         * Sets the value of {@link RosEnvironmentProps#getManagedType}
         * @param managedType the value to be set.
         * @return {@code this}
         */
        public Builder managedType(java.lang.String managedType) {
            this.managedType = managedType;
            return this;
        }

        /**
         * Sets the value of {@link RosEnvironmentProps#getManagedType}
         * @param managedType the value to be set.
         * @return {@code this}
         */
        public Builder managedType(com.aliyun.ros.cdk.core.IResolvable managedType) {
            this.managedType = managedType;
            return this;
        }

        /**
         * Sets the value of {@link RosEnvironmentProps#getPrometheusInstanceId}
         * @param prometheusInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder prometheusInstanceId(java.lang.String prometheusInstanceId) {
            this.prometheusInstanceId = prometheusInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosEnvironmentProps#getPrometheusInstanceId}
         * @param prometheusInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder prometheusInstanceId(com.aliyun.ros.cdk.core.IResolvable prometheusInstanceId) {
            this.prometheusInstanceId = prometheusInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosEnvironmentProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosEnvironmentProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosEnvironmentProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.arms.RosEnvironment.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.arms.RosEnvironment.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosEnvironmentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosEnvironmentProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosEnvironmentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosEnvironmentProps {
        private final java.lang.Object bindResourceId;
        private final java.lang.Object environmentName;
        private final java.lang.Object environmentSubType;
        private final java.lang.Object environmentType;
        private final java.lang.Object deletePromInstance;
        private final java.lang.Object feePackage;
        private final java.lang.Object grafanaWorkspaceId;
        private final java.lang.Object managedType;
        private final java.lang.Object prometheusInstanceId;
        private final java.lang.Object resourceGroupId;
        private final java.util.List<com.aliyun.ros.cdk.arms.RosEnvironment.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.bindResourceId = software.amazon.jsii.Kernel.get(this, "bindResourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.environmentName = software.amazon.jsii.Kernel.get(this, "environmentName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.environmentSubType = software.amazon.jsii.Kernel.get(this, "environmentSubType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.environmentType = software.amazon.jsii.Kernel.get(this, "environmentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deletePromInstance = software.amazon.jsii.Kernel.get(this, "deletePromInstance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.feePackage = software.amazon.jsii.Kernel.get(this, "feePackage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.grafanaWorkspaceId = software.amazon.jsii.Kernel.get(this, "grafanaWorkspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.managedType = software.amazon.jsii.Kernel.get(this, "managedType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.prometheusInstanceId = software.amazon.jsii.Kernel.get(this, "prometheusInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.arms.RosEnvironment.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.bindResourceId = java.util.Objects.requireNonNull(builder.bindResourceId, "bindResourceId is required");
            this.environmentName = java.util.Objects.requireNonNull(builder.environmentName, "environmentName is required");
            this.environmentSubType = java.util.Objects.requireNonNull(builder.environmentSubType, "environmentSubType is required");
            this.environmentType = java.util.Objects.requireNonNull(builder.environmentType, "environmentType is required");
            this.deletePromInstance = builder.deletePromInstance;
            this.feePackage = builder.feePackage;
            this.grafanaWorkspaceId = builder.grafanaWorkspaceId;
            this.managedType = builder.managedType;
            this.prometheusInstanceId = builder.prometheusInstanceId;
            this.resourceGroupId = builder.resourceGroupId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.arms.RosEnvironment.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getBindResourceId() {
            return this.bindResourceId;
        }

        @Override
        public final java.lang.Object getEnvironmentName() {
            return this.environmentName;
        }

        @Override
        public final java.lang.Object getEnvironmentSubType() {
            return this.environmentSubType;
        }

        @Override
        public final java.lang.Object getEnvironmentType() {
            return this.environmentType;
        }

        @Override
        public final java.lang.Object getDeletePromInstance() {
            return this.deletePromInstance;
        }

        @Override
        public final java.lang.Object getFeePackage() {
            return this.feePackage;
        }

        @Override
        public final java.lang.Object getGrafanaWorkspaceId() {
            return this.grafanaWorkspaceId;
        }

        @Override
        public final java.lang.Object getManagedType() {
            return this.managedType;
        }

        @Override
        public final java.lang.Object getPrometheusInstanceId() {
            return this.prometheusInstanceId;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.arms.RosEnvironment.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("bindResourceId", om.valueToTree(this.getBindResourceId()));
            data.set("environmentName", om.valueToTree(this.getEnvironmentName()));
            data.set("environmentSubType", om.valueToTree(this.getEnvironmentSubType()));
            data.set("environmentType", om.valueToTree(this.getEnvironmentType()));
            if (this.getDeletePromInstance() != null) {
                data.set("deletePromInstance", om.valueToTree(this.getDeletePromInstance()));
            }
            if (this.getFeePackage() != null) {
                data.set("feePackage", om.valueToTree(this.getFeePackage()));
            }
            if (this.getGrafanaWorkspaceId() != null) {
                data.set("grafanaWorkspaceId", om.valueToTree(this.getGrafanaWorkspaceId()));
            }
            if (this.getManagedType() != null) {
                data.set("managedType", om.valueToTree(this.getManagedType()));
            }
            if (this.getPrometheusInstanceId() != null) {
                data.set("prometheusInstanceId", om.valueToTree(this.getPrometheusInstanceId()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-arms.RosEnvironmentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosEnvironmentProps.Jsii$Proxy that = (RosEnvironmentProps.Jsii$Proxy) o;

            if (!bindResourceId.equals(that.bindResourceId)) return false;
            if (!environmentName.equals(that.environmentName)) return false;
            if (!environmentSubType.equals(that.environmentSubType)) return false;
            if (!environmentType.equals(that.environmentType)) return false;
            if (this.deletePromInstance != null ? !this.deletePromInstance.equals(that.deletePromInstance) : that.deletePromInstance != null) return false;
            if (this.feePackage != null ? !this.feePackage.equals(that.feePackage) : that.feePackage != null) return false;
            if (this.grafanaWorkspaceId != null ? !this.grafanaWorkspaceId.equals(that.grafanaWorkspaceId) : that.grafanaWorkspaceId != null) return false;
            if (this.managedType != null ? !this.managedType.equals(that.managedType) : that.managedType != null) return false;
            if (this.prometheusInstanceId != null ? !this.prometheusInstanceId.equals(that.prometheusInstanceId) : that.prometheusInstanceId != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.bindResourceId.hashCode();
            result = 31 * result + (this.environmentName.hashCode());
            result = 31 * result + (this.environmentSubType.hashCode());
            result = 31 * result + (this.environmentType.hashCode());
            result = 31 * result + (this.deletePromInstance != null ? this.deletePromInstance.hashCode() : 0);
            result = 31 * result + (this.feePackage != null ? this.feePackage.hashCode() : 0);
            result = 31 * result + (this.grafanaWorkspaceId != null ? this.grafanaWorkspaceId.hashCode() : 0);
            result = 31 * result + (this.managedType != null ? this.managedType.hashCode() : 0);
            result = 31 * result + (this.prometheusInstanceId != null ? this.prometheusInstanceId.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
