package com.aliyun.ros.cdk.oos;

/**
 * Properties for defining a <code>RosServiceSettings</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-servicesettings
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:48.944Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oos.$Module.class, fqn = "@alicloud/ros-cdk-oos.RosServiceSettingsProps")
@software.amazon.jsii.Jsii.Proxy(RosServiceSettingsProps.Jsii$Proxy.class)
public interface RosServiceSettingsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeliveryOssBucketName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeliveryOssEnabled() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeliveryOssKeyPrefix() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeliverySlsEnabled() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeliverySlsProjectName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRdcEnterpriseId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosServiceSettingsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosServiceSettingsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosServiceSettingsProps> {
        java.lang.Object deliveryOssBucketName;
        java.lang.Object deliveryOssEnabled;
        java.lang.Object deliveryOssKeyPrefix;
        java.lang.Object deliverySlsEnabled;
        java.lang.Object deliverySlsProjectName;
        java.lang.Object rdcEnterpriseId;

        /**
         * Sets the value of {@link RosServiceSettingsProps#getDeliveryOssBucketName}
         * @param deliveryOssBucketName the value to be set.
         * @return {@code this}
         */
        public Builder deliveryOssBucketName(java.lang.String deliveryOssBucketName) {
            this.deliveryOssBucketName = deliveryOssBucketName;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceSettingsProps#getDeliveryOssBucketName}
         * @param deliveryOssBucketName the value to be set.
         * @return {@code this}
         */
        public Builder deliveryOssBucketName(com.aliyun.ros.cdk.core.IResolvable deliveryOssBucketName) {
            this.deliveryOssBucketName = deliveryOssBucketName;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceSettingsProps#getDeliveryOssEnabled}
         * @param deliveryOssEnabled the value to be set.
         * @return {@code this}
         */
        public Builder deliveryOssEnabled(java.lang.Boolean deliveryOssEnabled) {
            this.deliveryOssEnabled = deliveryOssEnabled;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceSettingsProps#getDeliveryOssEnabled}
         * @param deliveryOssEnabled the value to be set.
         * @return {@code this}
         */
        public Builder deliveryOssEnabled(com.aliyun.ros.cdk.core.IResolvable deliveryOssEnabled) {
            this.deliveryOssEnabled = deliveryOssEnabled;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceSettingsProps#getDeliveryOssKeyPrefix}
         * @param deliveryOssKeyPrefix the value to be set.
         * @return {@code this}
         */
        public Builder deliveryOssKeyPrefix(java.lang.String deliveryOssKeyPrefix) {
            this.deliveryOssKeyPrefix = deliveryOssKeyPrefix;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceSettingsProps#getDeliveryOssKeyPrefix}
         * @param deliveryOssKeyPrefix the value to be set.
         * @return {@code this}
         */
        public Builder deliveryOssKeyPrefix(com.aliyun.ros.cdk.core.IResolvable deliveryOssKeyPrefix) {
            this.deliveryOssKeyPrefix = deliveryOssKeyPrefix;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceSettingsProps#getDeliverySlsEnabled}
         * @param deliverySlsEnabled the value to be set.
         * @return {@code this}
         */
        public Builder deliverySlsEnabled(java.lang.Boolean deliverySlsEnabled) {
            this.deliverySlsEnabled = deliverySlsEnabled;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceSettingsProps#getDeliverySlsEnabled}
         * @param deliverySlsEnabled the value to be set.
         * @return {@code this}
         */
        public Builder deliverySlsEnabled(com.aliyun.ros.cdk.core.IResolvable deliverySlsEnabled) {
            this.deliverySlsEnabled = deliverySlsEnabled;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceSettingsProps#getDeliverySlsProjectName}
         * @param deliverySlsProjectName the value to be set.
         * @return {@code this}
         */
        public Builder deliverySlsProjectName(java.lang.String deliverySlsProjectName) {
            this.deliverySlsProjectName = deliverySlsProjectName;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceSettingsProps#getDeliverySlsProjectName}
         * @param deliverySlsProjectName the value to be set.
         * @return {@code this}
         */
        public Builder deliverySlsProjectName(com.aliyun.ros.cdk.core.IResolvable deliverySlsProjectName) {
            this.deliverySlsProjectName = deliverySlsProjectName;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceSettingsProps#getRdcEnterpriseId}
         * @param rdcEnterpriseId the value to be set.
         * @return {@code this}
         */
        public Builder rdcEnterpriseId(java.lang.String rdcEnterpriseId) {
            this.rdcEnterpriseId = rdcEnterpriseId;
            return this;
        }

        /**
         * Sets the value of {@link RosServiceSettingsProps#getRdcEnterpriseId}
         * @param rdcEnterpriseId the value to be set.
         * @return {@code this}
         */
        public Builder rdcEnterpriseId(com.aliyun.ros.cdk.core.IResolvable rdcEnterpriseId) {
            this.rdcEnterpriseId = rdcEnterpriseId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosServiceSettingsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosServiceSettingsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosServiceSettingsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosServiceSettingsProps {
        private final java.lang.Object deliveryOssBucketName;
        private final java.lang.Object deliveryOssEnabled;
        private final java.lang.Object deliveryOssKeyPrefix;
        private final java.lang.Object deliverySlsEnabled;
        private final java.lang.Object deliverySlsProjectName;
        private final java.lang.Object rdcEnterpriseId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.deliveryOssBucketName = software.amazon.jsii.Kernel.get(this, "deliveryOssBucketName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deliveryOssEnabled = software.amazon.jsii.Kernel.get(this, "deliveryOssEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deliveryOssKeyPrefix = software.amazon.jsii.Kernel.get(this, "deliveryOssKeyPrefix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deliverySlsEnabled = software.amazon.jsii.Kernel.get(this, "deliverySlsEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deliverySlsProjectName = software.amazon.jsii.Kernel.get(this, "deliverySlsProjectName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rdcEnterpriseId = software.amazon.jsii.Kernel.get(this, "rdcEnterpriseId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.deliveryOssBucketName = builder.deliveryOssBucketName;
            this.deliveryOssEnabled = builder.deliveryOssEnabled;
            this.deliveryOssKeyPrefix = builder.deliveryOssKeyPrefix;
            this.deliverySlsEnabled = builder.deliverySlsEnabled;
            this.deliverySlsProjectName = builder.deliverySlsProjectName;
            this.rdcEnterpriseId = builder.rdcEnterpriseId;
        }

        @Override
        public final java.lang.Object getDeliveryOssBucketName() {
            return this.deliveryOssBucketName;
        }

        @Override
        public final java.lang.Object getDeliveryOssEnabled() {
            return this.deliveryOssEnabled;
        }

        @Override
        public final java.lang.Object getDeliveryOssKeyPrefix() {
            return this.deliveryOssKeyPrefix;
        }

        @Override
        public final java.lang.Object getDeliverySlsEnabled() {
            return this.deliverySlsEnabled;
        }

        @Override
        public final java.lang.Object getDeliverySlsProjectName() {
            return this.deliverySlsProjectName;
        }

        @Override
        public final java.lang.Object getRdcEnterpriseId() {
            return this.rdcEnterpriseId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getDeliveryOssBucketName() != null) {
                data.set("deliveryOssBucketName", om.valueToTree(this.getDeliveryOssBucketName()));
            }
            if (this.getDeliveryOssEnabled() != null) {
                data.set("deliveryOssEnabled", om.valueToTree(this.getDeliveryOssEnabled()));
            }
            if (this.getDeliveryOssKeyPrefix() != null) {
                data.set("deliveryOssKeyPrefix", om.valueToTree(this.getDeliveryOssKeyPrefix()));
            }
            if (this.getDeliverySlsEnabled() != null) {
                data.set("deliverySlsEnabled", om.valueToTree(this.getDeliverySlsEnabled()));
            }
            if (this.getDeliverySlsProjectName() != null) {
                data.set("deliverySlsProjectName", om.valueToTree(this.getDeliverySlsProjectName()));
            }
            if (this.getRdcEnterpriseId() != null) {
                data.set("rdcEnterpriseId", om.valueToTree(this.getRdcEnterpriseId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oos.RosServiceSettingsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosServiceSettingsProps.Jsii$Proxy that = (RosServiceSettingsProps.Jsii$Proxy) o;

            if (this.deliveryOssBucketName != null ? !this.deliveryOssBucketName.equals(that.deliveryOssBucketName) : that.deliveryOssBucketName != null) return false;
            if (this.deliveryOssEnabled != null ? !this.deliveryOssEnabled.equals(that.deliveryOssEnabled) : that.deliveryOssEnabled != null) return false;
            if (this.deliveryOssKeyPrefix != null ? !this.deliveryOssKeyPrefix.equals(that.deliveryOssKeyPrefix) : that.deliveryOssKeyPrefix != null) return false;
            if (this.deliverySlsEnabled != null ? !this.deliverySlsEnabled.equals(that.deliverySlsEnabled) : that.deliverySlsEnabled != null) return false;
            if (this.deliverySlsProjectName != null ? !this.deliverySlsProjectName.equals(that.deliverySlsProjectName) : that.deliverySlsProjectName != null) return false;
            return this.rdcEnterpriseId != null ? this.rdcEnterpriseId.equals(that.rdcEnterpriseId) : that.rdcEnterpriseId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.deliveryOssBucketName != null ? this.deliveryOssBucketName.hashCode() : 0;
            result = 31 * result + (this.deliveryOssEnabled != null ? this.deliveryOssEnabled.hashCode() : 0);
            result = 31 * result + (this.deliveryOssKeyPrefix != null ? this.deliveryOssKeyPrefix.hashCode() : 0);
            result = 31 * result + (this.deliverySlsEnabled != null ? this.deliverySlsEnabled.hashCode() : 0);
            result = 31 * result + (this.deliverySlsProjectName != null ? this.deliverySlsProjectName.hashCode() : 0);
            result = 31 * result + (this.rdcEnterpriseId != null ? this.rdcEnterpriseId.hashCode() : 0);
            return result;
        }
    }
}
