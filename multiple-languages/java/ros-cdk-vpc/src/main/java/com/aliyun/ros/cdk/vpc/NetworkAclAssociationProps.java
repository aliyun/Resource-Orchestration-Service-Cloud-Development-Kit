package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a `ALIYUN::VPC::NetworkAclAssociation`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-16T03:59:11.412Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.NetworkAclAssociationProps")
@software.amazon.jsii.Jsii.Proxy(NetworkAclAssociationProps.Jsii$Proxy.class)
public interface NetworkAclAssociationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property networkAclId: The ID of the network ACL.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNetworkAclId();

    /**
     * Property resources: The list of resources that need to be associated with network ACL.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getResources();

    /**
     * @return a {@link Builder} of {@link NetworkAclAssociationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link NetworkAclAssociationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<NetworkAclAssociationProps> {
        java.lang.Object networkAclId;
        java.lang.Object resources;

        /**
         * Sets the value of {@link NetworkAclAssociationProps#getNetworkAclId}
         * @param networkAclId Property networkAclId: The ID of the network ACL. This parameter is required.
         * @return {@code this}
         */
        public Builder networkAclId(java.lang.String networkAclId) {
            this.networkAclId = networkAclId;
            return this;
        }

        /**
         * Sets the value of {@link NetworkAclAssociationProps#getNetworkAclId}
         * @param networkAclId Property networkAclId: The ID of the network ACL. This parameter is required.
         * @return {@code this}
         */
        public Builder networkAclId(com.aliyun.ros.cdk.core.IResolvable networkAclId) {
            this.networkAclId = networkAclId;
            return this;
        }

        /**
         * Sets the value of {@link NetworkAclAssociationProps#getResources}
         * @param resources Property resources: The list of resources that need to be associated with network ACL. This parameter is required.
         * @return {@code this}
         */
        public Builder resources(com.aliyun.ros.cdk.core.IResolvable resources) {
            this.resources = resources;
            return this;
        }

        /**
         * Sets the value of {@link NetworkAclAssociationProps#getResources}
         * @param resources Property resources: The list of resources that need to be associated with network ACL. This parameter is required.
         * @return {@code this}
         */
        public Builder resources(java.util.List<? extends java.lang.Object> resources) {
            this.resources = resources;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link NetworkAclAssociationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public NetworkAclAssociationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link NetworkAclAssociationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements NetworkAclAssociationProps {
        private final java.lang.Object networkAclId;
        private final java.lang.Object resources;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.networkAclId = software.amazon.jsii.Kernel.get(this, "networkAclId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resources = software.amazon.jsii.Kernel.get(this, "resources", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.networkAclId = java.util.Objects.requireNonNull(builder.networkAclId, "networkAclId is required");
            this.resources = java.util.Objects.requireNonNull(builder.resources, "resources is required");
        }

        @Override
        public final java.lang.Object getNetworkAclId() {
            return this.networkAclId;
        }

        @Override
        public final java.lang.Object getResources() {
            return this.resources;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("networkAclId", om.valueToTree(this.getNetworkAclId()));
            data.set("resources", om.valueToTree(this.getResources()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.NetworkAclAssociationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            NetworkAclAssociationProps.Jsii$Proxy that = (NetworkAclAssociationProps.Jsii$Proxy) o;

            if (!networkAclId.equals(that.networkAclId)) return false;
            return this.resources.equals(that.resources);
        }

        @Override
        public final int hashCode() {
            int result = this.networkAclId.hashCode();
            result = 31 * result + (this.resources.hashCode());
            return result;
        }
    }
}
