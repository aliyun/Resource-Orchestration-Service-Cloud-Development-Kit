package com.aliyun.ros.cdk.arms;

/**
 * Properties for defining a <code>RosAlertContactGroup</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-alertcontactgroup
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-12-26T06:30:13.953Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.arms.$Module.class, fqn = "@alicloud/ros-cdk-arms.RosAlertContactGroupProps")
@software.amazon.jsii.Jsii.Proxy(RosAlertContactGroupProps.Jsii$Proxy.class)
public interface RosAlertContactGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getContactGroupName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getContactIds();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProxyUserId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRegionId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosAlertContactGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosAlertContactGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosAlertContactGroupProps> {
        java.lang.Object contactGroupName;
        java.lang.Object contactIds;
        java.lang.Object proxyUserId;
        java.lang.Object regionId;

        /**
         * Sets the value of {@link RosAlertContactGroupProps#getContactGroupName}
         * @param contactGroupName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder contactGroupName(java.lang.String contactGroupName) {
            this.contactGroupName = contactGroupName;
            return this;
        }

        /**
         * Sets the value of {@link RosAlertContactGroupProps#getContactGroupName}
         * @param contactGroupName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder contactGroupName(com.aliyun.ros.cdk.core.IResolvable contactGroupName) {
            this.contactGroupName = contactGroupName;
            return this;
        }

        /**
         * Sets the value of {@link RosAlertContactGroupProps#getContactIds}
         * @param contactIds the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder contactIds(com.aliyun.ros.cdk.core.IResolvable contactIds) {
            this.contactIds = contactIds;
            return this;
        }

        /**
         * Sets the value of {@link RosAlertContactGroupProps#getContactIds}
         * @param contactIds the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder contactIds(java.util.List<? extends java.lang.Object> contactIds) {
            this.contactIds = contactIds;
            return this;
        }

        /**
         * Sets the value of {@link RosAlertContactGroupProps#getProxyUserId}
         * @param proxyUserId the value to be set.
         * @return {@code this}
         */
        public Builder proxyUserId(java.lang.String proxyUserId) {
            this.proxyUserId = proxyUserId;
            return this;
        }

        /**
         * Sets the value of {@link RosAlertContactGroupProps#getProxyUserId}
         * @param proxyUserId the value to be set.
         * @return {@code this}
         */
        public Builder proxyUserId(com.aliyun.ros.cdk.core.IResolvable proxyUserId) {
            this.proxyUserId = proxyUserId;
            return this;
        }

        /**
         * Sets the value of {@link RosAlertContactGroupProps#getRegionId}
         * @param regionId the value to be set.
         * @return {@code this}
         */
        public Builder regionId(java.lang.String regionId) {
            this.regionId = regionId;
            return this;
        }

        /**
         * Sets the value of {@link RosAlertContactGroupProps#getRegionId}
         * @param regionId the value to be set.
         * @return {@code this}
         */
        public Builder regionId(com.aliyun.ros.cdk.core.IResolvable regionId) {
            this.regionId = regionId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosAlertContactGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosAlertContactGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosAlertContactGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosAlertContactGroupProps {
        private final java.lang.Object contactGroupName;
        private final java.lang.Object contactIds;
        private final java.lang.Object proxyUserId;
        private final java.lang.Object regionId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.contactGroupName = software.amazon.jsii.Kernel.get(this, "contactGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.contactIds = software.amazon.jsii.Kernel.get(this, "contactIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.proxyUserId = software.amazon.jsii.Kernel.get(this, "proxyUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.regionId = software.amazon.jsii.Kernel.get(this, "regionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.contactGroupName = java.util.Objects.requireNonNull(builder.contactGroupName, "contactGroupName is required");
            this.contactIds = java.util.Objects.requireNonNull(builder.contactIds, "contactIds is required");
            this.proxyUserId = builder.proxyUserId;
            this.regionId = builder.regionId;
        }

        @Override
        public final java.lang.Object getContactGroupName() {
            return this.contactGroupName;
        }

        @Override
        public final java.lang.Object getContactIds() {
            return this.contactIds;
        }

        @Override
        public final java.lang.Object getProxyUserId() {
            return this.proxyUserId;
        }

        @Override
        public final java.lang.Object getRegionId() {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-arms.RosAlertContactGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosAlertContactGroupProps.Jsii$Proxy that = (RosAlertContactGroupProps.Jsii$Proxy) o;

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
