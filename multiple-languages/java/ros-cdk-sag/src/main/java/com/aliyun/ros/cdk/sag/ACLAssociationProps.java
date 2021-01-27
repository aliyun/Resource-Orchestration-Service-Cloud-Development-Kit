package com.aliyun.ros.cdk.sag;

/**
 * Properties for defining a `ALIYUN::SAG::ACLAssociation`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.546Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sag.$Module.class, fqn = "@alicloud/ros-cdk-sag.ACLAssociationProps")
@software.amazon.jsii.Jsii.Proxy(ACLAssociationProps.Jsii$Proxy.class)
public interface ACLAssociationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getAclId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getSmartAgId();

    /**
     * @return a {@link Builder} of {@link ACLAssociationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ACLAssociationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ACLAssociationProps> {
        private java.lang.String aclId;
        private java.lang.String smartAgId;

        /**
         * Sets the value of {@link ACLAssociationProps#getAclId}
         * @param aclId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder aclId(java.lang.String aclId) {
            this.aclId = aclId;
            return this;
        }

        /**
         * Sets the value of {@link ACLAssociationProps#getSmartAgId}
         * @param smartAgId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder smartAgId(java.lang.String smartAgId) {
            this.smartAgId = smartAgId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ACLAssociationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ACLAssociationProps build() {
            return new Jsii$Proxy(aclId, smartAgId);
        }
    }

    /**
     * An implementation for {@link ACLAssociationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ACLAssociationProps {
        private final java.lang.String aclId;
        private final java.lang.String smartAgId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.aclId = software.amazon.jsii.Kernel.get(this, "aclId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.smartAgId = software.amazon.jsii.Kernel.get(this, "smartAgId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String aclId, final java.lang.String smartAgId) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.aclId = java.util.Objects.requireNonNull(aclId, "aclId is required");
            this.smartAgId = java.util.Objects.requireNonNull(smartAgId, "smartAgId is required");
        }

        @Override
        public final java.lang.String getAclId() {
            return this.aclId;
        }

        @Override
        public final java.lang.String getSmartAgId() {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-sag.ACLAssociationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ACLAssociationProps.Jsii$Proxy that = (ACLAssociationProps.Jsii$Proxy) o;

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
