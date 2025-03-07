package com.aliyun.ros.cdk.ens;

/**
 * Properties for defining a <code>NetworkAclAssociation</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-networkaclassociation
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:06.505Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ens.$Module.class, fqn = "@alicloud/ros-cdk-ens.NetworkAclAssociationProps")
@software.amazon.jsii.Jsii.Proxy(NetworkAclAssociationProps.Jsii$Proxy.class)
public interface NetworkAclAssociationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property networkAclId: The ID of the network ACL.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNetworkAclId();

    /**
     * Property networkIds: The network id which you want to associate the network ACL.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNetworkIds();

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
        java.lang.Object networkIds;

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
         * Sets the value of {@link NetworkAclAssociationProps#getNetworkIds}
         * @param networkIds Property networkIds: The network id which you want to associate the network ACL. This parameter is required.
         * @return {@code this}
         */
        public Builder networkIds(com.aliyun.ros.cdk.core.IResolvable networkIds) {
            this.networkIds = networkIds;
            return this;
        }

        /**
         * Sets the value of {@link NetworkAclAssociationProps#getNetworkIds}
         * @param networkIds Property networkIds: The network id which you want to associate the network ACL. This parameter is required.
         * @return {@code this}
         */
        public Builder networkIds(java.util.List<? extends java.lang.Object> networkIds) {
            this.networkIds = networkIds;
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
        private final java.lang.Object networkIds;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.networkAclId = software.amazon.jsii.Kernel.get(this, "networkAclId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.networkIds = software.amazon.jsii.Kernel.get(this, "networkIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.networkAclId = java.util.Objects.requireNonNull(builder.networkAclId, "networkAclId is required");
            this.networkIds = java.util.Objects.requireNonNull(builder.networkIds, "networkIds is required");
        }

        @Override
        public final java.lang.Object getNetworkAclId() {
            return this.networkAclId;
        }

        @Override
        public final java.lang.Object getNetworkIds() {
            return this.networkIds;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("networkAclId", om.valueToTree(this.getNetworkAclId()));
            data.set("networkIds", om.valueToTree(this.getNetworkIds()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ens.NetworkAclAssociationProps"));
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
            return this.networkIds.equals(that.networkIds);
        }

        @Override
        public final int hashCode() {
            int result = this.networkAclId.hashCode();
            result = 31 * result + (this.networkIds.hashCode());
            return result;
        }
    }
}
