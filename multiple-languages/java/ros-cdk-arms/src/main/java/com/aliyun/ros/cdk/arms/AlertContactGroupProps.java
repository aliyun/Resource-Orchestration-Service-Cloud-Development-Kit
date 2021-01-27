package com.aliyun.ros.cdk.arms;

/**
 * Properties for defining a `ALIYUN::ARMS::AlertContactGroup`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:33.235Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.arms.$Module.class, fqn = "@alicloud/ros-cdk-arms.AlertContactGroupProps")
@software.amazon.jsii.Jsii.Proxy(AlertContactGroupProps.Jsii$Proxy.class)
public interface AlertContactGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getContactGroupName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getContactIds();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getProxyUserId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getRegionId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link AlertContactGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AlertContactGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AlertContactGroupProps> {
        private java.lang.String contactGroupName;
        private java.lang.Object contactIds;
        private java.lang.String proxyUserId;
        private java.lang.String regionId;

        /**
         * Sets the value of {@link AlertContactGroupProps#getContactGroupName}
         * @param contactGroupName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder contactGroupName(java.lang.String contactGroupName) {
            this.contactGroupName = contactGroupName;
            return this;
        }

        /**
         * Sets the value of {@link AlertContactGroupProps#getContactIds}
         * @param contactIds the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder contactIds(java.util.List<? extends java.lang.Number> contactIds) {
            this.contactIds = contactIds;
            return this;
        }

        /**
         * Sets the value of {@link AlertContactGroupProps#getContactIds}
         * @param contactIds the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder contactIds(com.aliyun.ros.cdk.core.IResolvable contactIds) {
            this.contactIds = contactIds;
            return this;
        }

        /**
         * Sets the value of {@link AlertContactGroupProps#getProxyUserId}
         * @param proxyUserId the value to be set.
         * @return {@code this}
         */
        public Builder proxyUserId(java.lang.String proxyUserId) {
            this.proxyUserId = proxyUserId;
            return this;
        }

        /**
         * Sets the value of {@link AlertContactGroupProps#getRegionId}
         * @param regionId the value to be set.
         * @return {@code this}
         */
        public Builder regionId(java.lang.String regionId) {
            this.regionId = regionId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AlertContactGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AlertContactGroupProps build() {
            return new Jsii$Proxy(contactGroupName, contactIds, proxyUserId, regionId);
        }
    }

    /**
     * An implementation for {@link AlertContactGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AlertContactGroupProps {
        private final java.lang.String contactGroupName;
        private final java.lang.Object contactIds;
        private final java.lang.String proxyUserId;
        private final java.lang.String regionId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.contactGroupName = software.amazon.jsii.Kernel.get(this, "contactGroupName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.contactIds = software.amazon.jsii.Kernel.get(this, "contactIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.proxyUserId = software.amazon.jsii.Kernel.get(this, "proxyUserId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.regionId = software.amazon.jsii.Kernel.get(this, "regionId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String contactGroupName, final java.lang.Object contactIds, final java.lang.String proxyUserId, final java.lang.String regionId) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.contactGroupName = java.util.Objects.requireNonNull(contactGroupName, "contactGroupName is required");
            this.contactIds = java.util.Objects.requireNonNull(contactIds, "contactIds is required");
            this.proxyUserId = proxyUserId;
            this.regionId = regionId;
        }

        @Override
        public final java.lang.String getContactGroupName() {
            return this.contactGroupName;
        }

        @Override
        public final java.lang.Object getContactIds() {
            return this.contactIds;
        }

        @Override
        public final java.lang.String getProxyUserId() {
            return this.proxyUserId;
        }

        @Override
        public final java.lang.String getRegionId() {
            return this.regionId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("contactGroupName", om.valueToTree(this.getContactGroupName()));
            data.set("contactIds", om.valueToTree(this.getContactIds()));
            if (this.getProxyUserId() != null) {
                data.set("proxyUserId", om.valueToTree(this.getProxyUserId()));
            }
            if (this.getRegionId() != null) {
                data.set("regionId", om.valueToTree(this.getRegionId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-arms.AlertContactGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AlertContactGroupProps.Jsii$Proxy that = (AlertContactGroupProps.Jsii$Proxy) o;

            if (!contactGroupName.equals(that.contactGroupName)) return false;
            if (!contactIds.equals(that.contactIds)) return false;
            if (this.proxyUserId != null ? !this.proxyUserId.equals(that.proxyUserId) : that.proxyUserId != null) return false;
            return this.regionId != null ? this.regionId.equals(that.regionId) : that.regionId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.contactGroupName.hashCode();
            result = 31 * result + (this.contactIds.hashCode());
            result = 31 * result + (this.proxyUserId != null ? this.proxyUserId.hashCode() : 0);
            result = 31 * result + (this.regionId != null ? this.regionId.hashCode() : 0);
            return result;
        }
    }
}
