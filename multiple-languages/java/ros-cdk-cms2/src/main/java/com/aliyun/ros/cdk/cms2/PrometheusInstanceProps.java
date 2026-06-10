package com.aliyun.ros.cdk.cms2;

/**
 * Properties for defining a <code>PrometheusInstance</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-prometheusinstance
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T10:59:01.338Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms2.$Module.class, fqn = "@alicloud/ros-cdk-cms2.PrometheusInstanceProps")
@software.amazon.jsii.Jsii.Proxy(PrometheusInstanceProps.Jsii$Proxy.class)
public interface PrometheusInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property prometheusInstanceName: The name of the Prometheus instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPrometheusInstanceName();

    /**
     * Property archiveDuration: The archive duration of the Prometheus instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getArchiveDuration() {
        return null;
    }

    /**
     * Property authFreeReadPolicy: The authentication-free read policy of the Prometheus instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAuthFreeReadPolicy() {
        return null;
    }

    /**
     * Property authFreeWritePolicy: The authentication-free write policy of the Prometheus instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAuthFreeWritePolicy() {
        return null;
    }

    /**
     * Property basicMetricQueryLimit: The basic metric query limit of the Prometheus instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBasicMetricQueryLimit() {
        return null;
    }

    /**
     * Property enableAuthFreeRead: Whether to enable authentication-free read for the Prometheus instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableAuthFreeRead() {
        return null;
    }

    /**
     * Property enableAuthFreeWrite: Whether to enable authentication-free write for the Prometheus instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableAuthFreeWrite() {
        return null;
    }

    /**
     * Property enableAuthToken: Whether to enable authentication token for the Prometheus instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableAuthToken() {
        return null;
    }

    /**
     * Property paymentType: The payment type of the Prometheus instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPaymentType() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property status: The status of the Prometheus instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStatus() {
        return null;
    }

    /**
     * Property storageDuration: The storage duration of the Prometheus instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStorageDuration() {
        return null;
    }

    /**
     * Property workspace: The workspace of the Prometheus instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWorkspace() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link PrometheusInstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link PrometheusInstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<PrometheusInstanceProps> {
        java.lang.Object prometheusInstanceName;
        java.lang.Object archiveDuration;
        java.lang.Object authFreeReadPolicy;
        java.lang.Object authFreeWritePolicy;
        java.lang.Object basicMetricQueryLimit;
        java.lang.Object enableAuthFreeRead;
        java.lang.Object enableAuthFreeWrite;
        java.lang.Object enableAuthToken;
        java.lang.Object paymentType;
        java.lang.Object resourceGroupId;
        java.lang.Object status;
        java.lang.Object storageDuration;
        java.lang.Object workspace;

        /**
         * Sets the value of {@link PrometheusInstanceProps#getPrometheusInstanceName}
         * @param prometheusInstanceName Property prometheusInstanceName: The name of the Prometheus instance. This parameter is required.
         * @return {@code this}
         */
        public Builder prometheusInstanceName(java.lang.String prometheusInstanceName) {
            this.prometheusInstanceName = prometheusInstanceName;
            return this;
        }

        /**
         * Sets the value of {@link PrometheusInstanceProps#getPrometheusInstanceName}
         * @param prometheusInstanceName Property prometheusInstanceName: The name of the Prometheus instance. This parameter is required.
         * @return {@code this}
         */
        public Builder prometheusInstanceName(com.aliyun.ros.cdk.core.IResolvable prometheusInstanceName) {
            this.prometheusInstanceName = prometheusInstanceName;
            return this;
        }

        /**
         * Sets the value of {@link PrometheusInstanceProps#getArchiveDuration}
         * @param archiveDuration Property archiveDuration: The archive duration of the Prometheus instance.
         * @return {@code this}
         */
        public Builder archiveDuration(java.lang.Number archiveDuration) {
            this.archiveDuration = archiveDuration;
            return this;
        }

        /**
         * Sets the value of {@link PrometheusInstanceProps#getArchiveDuration}
         * @param archiveDuration Property archiveDuration: The archive duration of the Prometheus instance.
         * @return {@code this}
         */
        public Builder archiveDuration(com.aliyun.ros.cdk.core.IResolvable archiveDuration) {
            this.archiveDuration = archiveDuration;
            return this;
        }

        /**
         * Sets the value of {@link PrometheusInstanceProps#getAuthFreeReadPolicy}
         * @param authFreeReadPolicy Property authFreeReadPolicy: The authentication-free read policy of the Prometheus instance.
         * @return {@code this}
         */
        public Builder authFreeReadPolicy(java.lang.String authFreeReadPolicy) {
            this.authFreeReadPolicy = authFreeReadPolicy;
            return this;
        }

        /**
         * Sets the value of {@link PrometheusInstanceProps#getAuthFreeReadPolicy}
         * @param authFreeReadPolicy Property authFreeReadPolicy: The authentication-free read policy of the Prometheus instance.
         * @return {@code this}
         */
        public Builder authFreeReadPolicy(com.aliyun.ros.cdk.core.IResolvable authFreeReadPolicy) {
            this.authFreeReadPolicy = authFreeReadPolicy;
            return this;
        }

        /**
         * Sets the value of {@link PrometheusInstanceProps#getAuthFreeWritePolicy}
         * @param authFreeWritePolicy Property authFreeWritePolicy: The authentication-free write policy of the Prometheus instance.
         * @return {@code this}
         */
        public Builder authFreeWritePolicy(java.lang.String authFreeWritePolicy) {
            this.authFreeWritePolicy = authFreeWritePolicy;
            return this;
        }

        /**
         * Sets the value of {@link PrometheusInstanceProps#getAuthFreeWritePolicy}
         * @param authFreeWritePolicy Property authFreeWritePolicy: The authentication-free write policy of the Prometheus instance.
         * @return {@code this}
         */
        public Builder authFreeWritePolicy(com.aliyun.ros.cdk.core.IResolvable authFreeWritePolicy) {
            this.authFreeWritePolicy = authFreeWritePolicy;
            return this;
        }

        /**
         * Sets the value of {@link PrometheusInstanceProps#getBasicMetricQueryLimit}
         * @param basicMetricQueryLimit Property basicMetricQueryLimit: The basic metric query limit of the Prometheus instance.
         * @return {@code this}
         */
        public Builder basicMetricQueryLimit(java.lang.Boolean basicMetricQueryLimit) {
            this.basicMetricQueryLimit = basicMetricQueryLimit;
            return this;
        }

        /**
         * Sets the value of {@link PrometheusInstanceProps#getBasicMetricQueryLimit}
         * @param basicMetricQueryLimit Property basicMetricQueryLimit: The basic metric query limit of the Prometheus instance.
         * @return {@code this}
         */
        public Builder basicMetricQueryLimit(com.aliyun.ros.cdk.core.IResolvable basicMetricQueryLimit) {
            this.basicMetricQueryLimit = basicMetricQueryLimit;
            return this;
        }

        /**
         * Sets the value of {@link PrometheusInstanceProps#getEnableAuthFreeRead}
         * @param enableAuthFreeRead Property enableAuthFreeRead: Whether to enable authentication-free read for the Prometheus instance.
         * @return {@code this}
         */
        public Builder enableAuthFreeRead(java.lang.Boolean enableAuthFreeRead) {
            this.enableAuthFreeRead = enableAuthFreeRead;
            return this;
        }

        /**
         * Sets the value of {@link PrometheusInstanceProps#getEnableAuthFreeRead}
         * @param enableAuthFreeRead Property enableAuthFreeRead: Whether to enable authentication-free read for the Prometheus instance.
         * @return {@code this}
         */
        public Builder enableAuthFreeRead(com.aliyun.ros.cdk.core.IResolvable enableAuthFreeRead) {
            this.enableAuthFreeRead = enableAuthFreeRead;
            return this;
        }

        /**
         * Sets the value of {@link PrometheusInstanceProps#getEnableAuthFreeWrite}
         * @param enableAuthFreeWrite Property enableAuthFreeWrite: Whether to enable authentication-free write for the Prometheus instance.
         * @return {@code this}
         */
        public Builder enableAuthFreeWrite(java.lang.Boolean enableAuthFreeWrite) {
            this.enableAuthFreeWrite = enableAuthFreeWrite;
            return this;
        }

        /**
         * Sets the value of {@link PrometheusInstanceProps#getEnableAuthFreeWrite}
         * @param enableAuthFreeWrite Property enableAuthFreeWrite: Whether to enable authentication-free write for the Prometheus instance.
         * @return {@code this}
         */
        public Builder enableAuthFreeWrite(com.aliyun.ros.cdk.core.IResolvable enableAuthFreeWrite) {
            this.enableAuthFreeWrite = enableAuthFreeWrite;
            return this;
        }

        /**
         * Sets the value of {@link PrometheusInstanceProps#getEnableAuthToken}
         * @param enableAuthToken Property enableAuthToken: Whether to enable authentication token for the Prometheus instance.
         * @return {@code this}
         */
        public Builder enableAuthToken(java.lang.Boolean enableAuthToken) {
            this.enableAuthToken = enableAuthToken;
            return this;
        }

        /**
         * Sets the value of {@link PrometheusInstanceProps#getEnableAuthToken}
         * @param enableAuthToken Property enableAuthToken: Whether to enable authentication token for the Prometheus instance.
         * @return {@code this}
         */
        public Builder enableAuthToken(com.aliyun.ros.cdk.core.IResolvable enableAuthToken) {
            this.enableAuthToken = enableAuthToken;
            return this;
        }

        /**
         * Sets the value of {@link PrometheusInstanceProps#getPaymentType}
         * @param paymentType Property paymentType: The payment type of the Prometheus instance.
         * @return {@code this}
         */
        public Builder paymentType(java.lang.String paymentType) {
            this.paymentType = paymentType;
            return this;
        }

        /**
         * Sets the value of {@link PrometheusInstanceProps#getPaymentType}
         * @param paymentType Property paymentType: The payment type of the Prometheus instance.
         * @return {@code this}
         */
        public Builder paymentType(com.aliyun.ros.cdk.core.IResolvable paymentType) {
            this.paymentType = paymentType;
            return this;
        }

        /**
         * Sets the value of {@link PrometheusInstanceProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link PrometheusInstanceProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link PrometheusInstanceProps#getStatus}
         * @param status Property status: The status of the Prometheus instance.
         * @return {@code this}
         */
        public Builder status(java.lang.String status) {
            this.status = status;
            return this;
        }

        /**
         * Sets the value of {@link PrometheusInstanceProps#getStatus}
         * @param status Property status: The status of the Prometheus instance.
         * @return {@code this}
         */
        public Builder status(com.aliyun.ros.cdk.core.IResolvable status) {
            this.status = status;
            return this;
        }

        /**
         * Sets the value of {@link PrometheusInstanceProps#getStorageDuration}
         * @param storageDuration Property storageDuration: The storage duration of the Prometheus instance.
         * @return {@code this}
         */
        public Builder storageDuration(java.lang.Number storageDuration) {
            this.storageDuration = storageDuration;
            return this;
        }

        /**
         * Sets the value of {@link PrometheusInstanceProps#getStorageDuration}
         * @param storageDuration Property storageDuration: The storage duration of the Prometheus instance.
         * @return {@code this}
         */
        public Builder storageDuration(com.aliyun.ros.cdk.core.IResolvable storageDuration) {
            this.storageDuration = storageDuration;
            return this;
        }

        /**
         * Sets the value of {@link PrometheusInstanceProps#getWorkspace}
         * @param workspace Property workspace: The workspace of the Prometheus instance.
         * @return {@code this}
         */
        public Builder workspace(java.lang.String workspace) {
            this.workspace = workspace;
            return this;
        }

        /**
         * Sets the value of {@link PrometheusInstanceProps#getWorkspace}
         * @param workspace Property workspace: The workspace of the Prometheus instance.
         * @return {@code this}
         */
        public Builder workspace(com.aliyun.ros.cdk.core.IResolvable workspace) {
            this.workspace = workspace;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link PrometheusInstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public PrometheusInstanceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link PrometheusInstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PrometheusInstanceProps {
        private final java.lang.Object prometheusInstanceName;
        private final java.lang.Object archiveDuration;
        private final java.lang.Object authFreeReadPolicy;
        private final java.lang.Object authFreeWritePolicy;
        private final java.lang.Object basicMetricQueryLimit;
        private final java.lang.Object enableAuthFreeRead;
        private final java.lang.Object enableAuthFreeWrite;
        private final java.lang.Object enableAuthToken;
        private final java.lang.Object paymentType;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object status;
        private final java.lang.Object storageDuration;
        private final java.lang.Object workspace;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.prometheusInstanceName = software.amazon.jsii.Kernel.get(this, "prometheusInstanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.archiveDuration = software.amazon.jsii.Kernel.get(this, "archiveDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.authFreeReadPolicy = software.amazon.jsii.Kernel.get(this, "authFreeReadPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.authFreeWritePolicy = software.amazon.jsii.Kernel.get(this, "authFreeWritePolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.basicMetricQueryLimit = software.amazon.jsii.Kernel.get(this, "basicMetricQueryLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableAuthFreeRead = software.amazon.jsii.Kernel.get(this, "enableAuthFreeRead", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableAuthFreeWrite = software.amazon.jsii.Kernel.get(this, "enableAuthFreeWrite", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableAuthToken = software.amazon.jsii.Kernel.get(this, "enableAuthToken", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.paymentType = software.amazon.jsii.Kernel.get(this, "paymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.status = software.amazon.jsii.Kernel.get(this, "status", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.storageDuration = software.amazon.jsii.Kernel.get(this, "storageDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workspace = software.amazon.jsii.Kernel.get(this, "workspace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.prometheusInstanceName = java.util.Objects.requireNonNull(builder.prometheusInstanceName, "prometheusInstanceName is required");
            this.archiveDuration = builder.archiveDuration;
            this.authFreeReadPolicy = builder.authFreeReadPolicy;
            this.authFreeWritePolicy = builder.authFreeWritePolicy;
            this.basicMetricQueryLimit = builder.basicMetricQueryLimit;
            this.enableAuthFreeRead = builder.enableAuthFreeRead;
            this.enableAuthFreeWrite = builder.enableAuthFreeWrite;
            this.enableAuthToken = builder.enableAuthToken;
            this.paymentType = builder.paymentType;
            this.resourceGroupId = builder.resourceGroupId;
            this.status = builder.status;
            this.storageDuration = builder.storageDuration;
            this.workspace = builder.workspace;
        }

        @Override
        public final java.lang.Object getPrometheusInstanceName() {
            return this.prometheusInstanceName;
        }

        @Override
        public final java.lang.Object getArchiveDuration() {
            return this.archiveDuration;
        }

        @Override
        public final java.lang.Object getAuthFreeReadPolicy() {
            return this.authFreeReadPolicy;
        }

        @Override
        public final java.lang.Object getAuthFreeWritePolicy() {
            return this.authFreeWritePolicy;
        }

        @Override
        public final java.lang.Object getBasicMetricQueryLimit() {
            return this.basicMetricQueryLimit;
        }

        @Override
        public final java.lang.Object getEnableAuthFreeRead() {
            return this.enableAuthFreeRead;
        }

        @Override
        public final java.lang.Object getEnableAuthFreeWrite() {
            return this.enableAuthFreeWrite;
        }

        @Override
        public final java.lang.Object getEnableAuthToken() {
            return this.enableAuthToken;
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
        public final java.lang.Object getStatus() {
            return this.status;
        }

        @Override
        public final java.lang.Object getStorageDuration() {
            return this.storageDuration;
        }

        @Override
        public final java.lang.Object getWorkspace() {
            return this.workspace;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("prometheusInstanceName", om.valueToTree(this.getPrometheusInstanceName()));
            if (this.getArchiveDuration() != null) {
                data.set("archiveDuration", om.valueToTree(this.getArchiveDuration()));
            }
            if (this.getAuthFreeReadPolicy() != null) {
                data.set("authFreeReadPolicy", om.valueToTree(this.getAuthFreeReadPolicy()));
            }
            if (this.getAuthFreeWritePolicy() != null) {
                data.set("authFreeWritePolicy", om.valueToTree(this.getAuthFreeWritePolicy()));
            }
            if (this.getBasicMetricQueryLimit() != null) {
                data.set("basicMetricQueryLimit", om.valueToTree(this.getBasicMetricQueryLimit()));
            }
            if (this.getEnableAuthFreeRead() != null) {
                data.set("enableAuthFreeRead", om.valueToTree(this.getEnableAuthFreeRead()));
            }
            if (this.getEnableAuthFreeWrite() != null) {
                data.set("enableAuthFreeWrite", om.valueToTree(this.getEnableAuthFreeWrite()));
            }
            if (this.getEnableAuthToken() != null) {
                data.set("enableAuthToken", om.valueToTree(this.getEnableAuthToken()));
            }
            if (this.getPaymentType() != null) {
                data.set("paymentType", om.valueToTree(this.getPaymentType()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getStatus() != null) {
                data.set("status", om.valueToTree(this.getStatus()));
            }
            if (this.getStorageDuration() != null) {
                data.set("storageDuration", om.valueToTree(this.getStorageDuration()));
            }
            if (this.getWorkspace() != null) {
                data.set("workspace", om.valueToTree(this.getWorkspace()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms2.PrometheusInstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            PrometheusInstanceProps.Jsii$Proxy that = (PrometheusInstanceProps.Jsii$Proxy) o;

            if (!prometheusInstanceName.equals(that.prometheusInstanceName)) return false;
            if (this.archiveDuration != null ? !this.archiveDuration.equals(that.archiveDuration) : that.archiveDuration != null) return false;
            if (this.authFreeReadPolicy != null ? !this.authFreeReadPolicy.equals(that.authFreeReadPolicy) : that.authFreeReadPolicy != null) return false;
            if (this.authFreeWritePolicy != null ? !this.authFreeWritePolicy.equals(that.authFreeWritePolicy) : that.authFreeWritePolicy != null) return false;
            if (this.basicMetricQueryLimit != null ? !this.basicMetricQueryLimit.equals(that.basicMetricQueryLimit) : that.basicMetricQueryLimit != null) return false;
            if (this.enableAuthFreeRead != null ? !this.enableAuthFreeRead.equals(that.enableAuthFreeRead) : that.enableAuthFreeRead != null) return false;
            if (this.enableAuthFreeWrite != null ? !this.enableAuthFreeWrite.equals(that.enableAuthFreeWrite) : that.enableAuthFreeWrite != null) return false;
            if (this.enableAuthToken != null ? !this.enableAuthToken.equals(that.enableAuthToken) : that.enableAuthToken != null) return false;
            if (this.paymentType != null ? !this.paymentType.equals(that.paymentType) : that.paymentType != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.status != null ? !this.status.equals(that.status) : that.status != null) return false;
            if (this.storageDuration != null ? !this.storageDuration.equals(that.storageDuration) : that.storageDuration != null) return false;
            return this.workspace != null ? this.workspace.equals(that.workspace) : that.workspace == null;
        }

        @Override
        public final int hashCode() {
            int result = this.prometheusInstanceName.hashCode();
            result = 31 * result + (this.archiveDuration != null ? this.archiveDuration.hashCode() : 0);
            result = 31 * result + (this.authFreeReadPolicy != null ? this.authFreeReadPolicy.hashCode() : 0);
            result = 31 * result + (this.authFreeWritePolicy != null ? this.authFreeWritePolicy.hashCode() : 0);
            result = 31 * result + (this.basicMetricQueryLimit != null ? this.basicMetricQueryLimit.hashCode() : 0);
            result = 31 * result + (this.enableAuthFreeRead != null ? this.enableAuthFreeRead.hashCode() : 0);
            result = 31 * result + (this.enableAuthFreeWrite != null ? this.enableAuthFreeWrite.hashCode() : 0);
            result = 31 * result + (this.enableAuthToken != null ? this.enableAuthToken.hashCode() : 0);
            result = 31 * result + (this.paymentType != null ? this.paymentType.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.status != null ? this.status.hashCode() : 0);
            result = 31 * result + (this.storageDuration != null ? this.storageDuration.hashCode() : 0);
            result = 31 * result + (this.workspace != null ? this.workspace.hashCode() : 0);
            return result;
        }
    }
}
