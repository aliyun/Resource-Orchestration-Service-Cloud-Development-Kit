package com.aliyun.ros.cdk.hbr;

/**
 * Properties for defining a <code>RosDbVault</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-dbvault
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:07.475Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hbr.$Module.class, fqn = "@alicloud/ros-cdk-hbr.RosDbVaultProps")
@software.amazon.jsii.Jsii.Proxy(RosDbVaultProps.Jsii$Proxy.class)
public interface RosDbVaultProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRetentionDays();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVaultName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVaultRegionId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.hbr.RosDbVault.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosDbVaultProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDbVaultProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDbVaultProps> {
        java.lang.Object retentionDays;
        java.lang.Object vaultName;
        java.lang.Object vaultRegionId;
        java.lang.Object description;
        java.util.List<com.aliyun.ros.cdk.hbr.RosDbVault.TagsProperty> tags;

        /**
         * Sets the value of {@link RosDbVaultProps#getRetentionDays}
         * @param retentionDays the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder retentionDays(java.lang.Number retentionDays) {
            this.retentionDays = retentionDays;
            return this;
        }

        /**
         * Sets the value of {@link RosDbVaultProps#getRetentionDays}
         * @param retentionDays the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder retentionDays(com.aliyun.ros.cdk.core.IResolvable retentionDays) {
            this.retentionDays = retentionDays;
            return this;
        }

        /**
         * Sets the value of {@link RosDbVaultProps#getVaultName}
         * @param vaultName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vaultName(java.lang.String vaultName) {
            this.vaultName = vaultName;
            return this;
        }

        /**
         * Sets the value of {@link RosDbVaultProps#getVaultName}
         * @param vaultName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vaultName(com.aliyun.ros.cdk.core.IResolvable vaultName) {
            this.vaultName = vaultName;
            return this;
        }

        /**
         * Sets the value of {@link RosDbVaultProps#getVaultRegionId}
         * @param vaultRegionId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vaultRegionId(java.lang.String vaultRegionId) {
            this.vaultRegionId = vaultRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosDbVaultProps#getVaultRegionId}
         * @param vaultRegionId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vaultRegionId(com.aliyun.ros.cdk.core.IResolvable vaultRegionId) {
            this.vaultRegionId = vaultRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosDbVaultProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosDbVaultProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosDbVaultProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.hbr.RosDbVault.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.hbr.RosDbVault.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDbVaultProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDbVaultProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDbVaultProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDbVaultProps {
        private final java.lang.Object retentionDays;
        private final java.lang.Object vaultName;
        private final java.lang.Object vaultRegionId;
        private final java.lang.Object description;
        private final java.util.List<com.aliyun.ros.cdk.hbr.RosDbVault.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.retentionDays = software.amazon.jsii.Kernel.get(this, "retentionDays", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vaultName = software.amazon.jsii.Kernel.get(this, "vaultName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vaultRegionId = software.amazon.jsii.Kernel.get(this, "vaultRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.hbr.RosDbVault.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.retentionDays = java.util.Objects.requireNonNull(builder.retentionDays, "retentionDays is required");
            this.vaultName = java.util.Objects.requireNonNull(builder.vaultName, "vaultName is required");
            this.vaultRegionId = java.util.Objects.requireNonNull(builder.vaultRegionId, "vaultRegionId is required");
            this.description = builder.description;
            this.tags = (java.util.List<com.aliyun.ros.cdk.hbr.RosDbVault.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getRetentionDays() {
            return this.retentionDays;
        }

        @Override
        public final java.lang.Object getVaultName() {
            return this.vaultName;
        }

        @Override
        public final java.lang.Object getVaultRegionId() {
            return this.vaultRegionId;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.hbr.RosDbVault.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("retentionDays", om.valueToTree(this.getRetentionDays()));
            data.set("vaultName", om.valueToTree(this.getVaultName()));
            data.set("vaultRegionId", om.valueToTree(this.getVaultRegionId()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-hbr.RosDbVaultProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDbVaultProps.Jsii$Proxy that = (RosDbVaultProps.Jsii$Proxy) o;

            if (!retentionDays.equals(that.retentionDays)) return false;
            if (!vaultName.equals(that.vaultName)) return false;
            if (!vaultRegionId.equals(that.vaultRegionId)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.retentionDays.hashCode();
            result = 31 * result + (this.vaultName.hashCode());
            result = 31 * result + (this.vaultRegionId.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
