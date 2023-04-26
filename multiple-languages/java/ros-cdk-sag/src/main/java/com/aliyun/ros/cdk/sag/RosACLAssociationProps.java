package com.aliyun.ros.cdk.sag;

/**
 * Properties for defining a `ALIYUN::SAG::ACLAssociation`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.80.0 (build bce6a1d)", date = "2023-04-26T01:43:52.051Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sag.$Module.class, fqn = "@alicloud/ros-cdk-sag.RosACLAssociationProps")
@software.amazon.jsii.Jsii.Proxy(RosACLAssociationProps.Jsii$Proxy.class)
public interface RosACLAssociationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAclId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSmartAgId();

    /**
     * @return a {@link Builder} of {@link RosACLAssociationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosACLAssociationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosACLAssociationProps> {
        java.lang.Object aclId;
        java.lang.Object smartAgId;

        /**
         * Sets the value of {@link RosACLAssociationProps#getAclId}
         * @param aclId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder aclId(java.lang.String aclId) {
            this.aclId = aclId;
            return this;
        }

        /**
         * Sets the value of {@link RosACLAssociationProps#getAclId}
         * @param aclId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder aclId(com.aliyun.ros.cdk.core.IResolvable aclId) {
            this.aclId = aclId;
            return this;
        }

        /**
         * Sets the value of {@link RosACLAssociationProps#getSmartAgId}
         * @param smartAgId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder smartAgId(java.lang.String smartAgId) {
            this.smartAgId = smartAgId;
            return this;
        }

        /**
         * Sets the value of {@link RosACLAssociationProps#getSmartAgId}
         * @param smartAgId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder smartAgId(com.aliyun.ros.cdk.core.IResolvable smartAgId) {
            this.smartAgId = smartAgId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosACLAssociationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosACLAssociationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosACLAssociationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosACLAssociationProps {
        private final java.lang.Object aclId;
        private final java.lang.Object smartAgId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.aclId = software.amazon.jsii.Kernel.get(this, "aclId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.smartAgId = software.amazon.jsii.Kernel.get(this, "smartAgId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.aclId = java.util.Objects.requireNonNull(builder.aclId, "aclId is required");
            this.smartAgId = java.util.Objects.requireNonNull(builder.smartAgId, "smartAgId is required");
        }

        @Override
        public final java.lang.Object getAclId() {
            return this.aclId;
        }

        @Override
        public final java.lang.Object getSmartAgId() {
            return this.smartAgId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("aclId", om.valueToTree(this.getAclId()));
            data.set("smartAgId", om.valueToTree(this.getSmartAgId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sag.RosACLAssociationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosACLAssociationProps.Jsii$Proxy that = (RosACLAssociationProps.Jsii$Proxy) o;

            if (!aclId.equals(that.aclId)) return false;
            return this.smartAgId.equals(that.smartAgId);
        }

        @Override
        public final int hashCode() {
            int result = this.aclId.hashCode();
            result = 31 * result + (this.smartAgId.hashCode());
            return result;
        }
    }
}
