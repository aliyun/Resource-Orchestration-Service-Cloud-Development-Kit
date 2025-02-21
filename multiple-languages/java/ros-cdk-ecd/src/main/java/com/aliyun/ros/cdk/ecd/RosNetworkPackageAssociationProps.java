package com.aliyun.ros.cdk.ecd;

/**
 * Properties for defining a <code>RosNetworkPackageAssociation</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-networkpackageassociation
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:14.923Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecd.$Module.class, fqn = "@alicloud/ros-cdk-ecd.RosNetworkPackageAssociationProps")
@software.amazon.jsii.Jsii.Proxy(RosNetworkPackageAssociationProps.Jsii$Proxy.class)
public interface RosNetworkPackageAssociationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNetworkPackageId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getOfficeSiteId();

    /**
     * @return a {@link Builder} of {@link RosNetworkPackageAssociationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosNetworkPackageAssociationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosNetworkPackageAssociationProps> {
        java.lang.Object networkPackageId;
        java.lang.Object officeSiteId;

        /**
         * Sets the value of {@link RosNetworkPackageAssociationProps#getNetworkPackageId}
         * @param networkPackageId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder networkPackageId(java.lang.String networkPackageId) {
            this.networkPackageId = networkPackageId;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkPackageAssociationProps#getNetworkPackageId}
         * @param networkPackageId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder networkPackageId(com.aliyun.ros.cdk.core.IResolvable networkPackageId) {
            this.networkPackageId = networkPackageId;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkPackageAssociationProps#getOfficeSiteId}
         * @param officeSiteId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder officeSiteId(java.lang.String officeSiteId) {
            this.officeSiteId = officeSiteId;
            return this;
        }

        /**
         * Sets the value of {@link RosNetworkPackageAssociationProps#getOfficeSiteId}
         * @param officeSiteId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder officeSiteId(com.aliyun.ros.cdk.core.IResolvable officeSiteId) {
            this.officeSiteId = officeSiteId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosNetworkPackageAssociationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosNetworkPackageAssociationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosNetworkPackageAssociationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosNetworkPackageAssociationProps {
        private final java.lang.Object networkPackageId;
        private final java.lang.Object officeSiteId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.networkPackageId = software.amazon.jsii.Kernel.get(this, "networkPackageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.officeSiteId = software.amazon.jsii.Kernel.get(this, "officeSiteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.networkPackageId = java.util.Objects.requireNonNull(builder.networkPackageId, "networkPackageId is required");
            this.officeSiteId = java.util.Objects.requireNonNull(builder.officeSiteId, "officeSiteId is required");
        }

        @Override
        public final java.lang.Object getNetworkPackageId() {
            return this.networkPackageId;
        }

        @Override
        public final java.lang.Object getOfficeSiteId() {
            return this.officeSiteId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("networkPackageId", om.valueToTree(this.getNetworkPackageId()));
            data.set("officeSiteId", om.valueToTree(this.getOfficeSiteId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecd.RosNetworkPackageAssociationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosNetworkPackageAssociationProps.Jsii$Proxy that = (RosNetworkPackageAssociationProps.Jsii$Proxy) o;

            if (!networkPackageId.equals(that.networkPackageId)) return false;
            return this.officeSiteId.equals(that.officeSiteId);
        }

        @Override
        public final int hashCode() {
            int result = this.networkPackageId.hashCode();
            result = 31 * result + (this.officeSiteId.hashCode());
            return result;
        }
    }
}
