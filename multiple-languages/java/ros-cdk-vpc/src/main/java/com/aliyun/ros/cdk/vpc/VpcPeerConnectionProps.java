package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a `ALIYUN::VPC::VpcPeerConnection`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.70.0 (build 03c2f6f)", date = "2022-11-04T06:18:44.226Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.VpcPeerConnectionProps")
@software.amazon.jsii.Jsii.Proxy(VpcPeerConnectionProps.Jsii$Proxy.class)
public interface VpcPeerConnectionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property acceptingVpcId: The ID of the acceptor VPC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAcceptingVpcId();

    /**
     * Property vpcId: The ID of the requester VPC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     * Property acceptingAliUid: The ID of the Alibaba Cloud account to which the acceptor VPC belongs.
     * <p>
     * To create a VPC peering connection within your Alibaba Cloud account, enter the ID
     * of your Alibaba Cloud account.
     * To create a VPC peering connection between your Alibaba Cloud account and another
     * Alibaba Cloud account, enter the ID of the peer Alibaba Cloud account.
     * Note If the acceptor VPC belongs to a Resource Access Management (RAM) user, you must set
     * the value of AcceptingAliUid to the ID of the corresponding Alibaba Cloud account.
     * Default current account ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAcceptingAliUid() {
        return null;
    }

    /**
     * Property acceptingRegionId: The region ID of the acceptor VPC of the VPC peering connection that you want to create.
     * <p>
     * To create an intra-region VPC peering connection, enter a region ID that is the same
     * as that of the requester VPC.
     * To create an inter-region VPC peering connection, enter a region ID that is different
     * from that of the requester VPC.
     * Default current region.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAcceptingRegionId() {
        return null;
    }

    /**
     * Property deletionForce: Specifies whether to forcefully delete the VPC peering connection.
     * <p>
     * Valid values:false (default): notrue: yes If you forcefully delete the VPC peering connection, the system deletes the routes that point to the VPC peering connection from the VPC route table.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeletionForce() {
        return null;
    }

    /**
     * Property description: The description of the VPC peering connection.
     * <p>
     * The description must be 2 to 256 characters in length. It must start with a letter
     * but cannot start with http:// or https://.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property name: The name of the VPC peering connection.
     * <p>
     * The name must be 2 to 128 characters in length and can contain digits, underscores
     * (_), and hyphens (-). It must start with a letter.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link VpcPeerConnectionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link VpcPeerConnectionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<VpcPeerConnectionProps> {
        java.lang.Object acceptingVpcId;
        java.lang.Object vpcId;
        java.lang.Object acceptingAliUid;
        java.lang.Object acceptingRegionId;
        java.lang.Object deletionForce;
        java.lang.Object description;
        java.lang.Object name;

        /**
         * Sets the value of {@link VpcPeerConnectionProps#getAcceptingVpcId}
         * @param acceptingVpcId Property acceptingVpcId: The ID of the acceptor VPC. This parameter is required.
         * @return {@code this}
         */
        public Builder acceptingVpcId(java.lang.String acceptingVpcId) {
            this.acceptingVpcId = acceptingVpcId;
            return this;
        }

        /**
         * Sets the value of {@link VpcPeerConnectionProps#getAcceptingVpcId}
         * @param acceptingVpcId Property acceptingVpcId: The ID of the acceptor VPC. This parameter is required.
         * @return {@code this}
         */
        public Builder acceptingVpcId(com.aliyun.ros.cdk.core.IResolvable acceptingVpcId) {
            this.acceptingVpcId = acceptingVpcId;
            return this;
        }

        /**
         * Sets the value of {@link VpcPeerConnectionProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the requester VPC. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link VpcPeerConnectionProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the requester VPC. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link VpcPeerConnectionProps#getAcceptingAliUid}
         * @param acceptingAliUid Property acceptingAliUid: The ID of the Alibaba Cloud account to which the acceptor VPC belongs.
         *                        To create a VPC peering connection within your Alibaba Cloud account, enter the ID
         *                        of your Alibaba Cloud account.
         *                        To create a VPC peering connection between your Alibaba Cloud account and another
         *                        Alibaba Cloud account, enter the ID of the peer Alibaba Cloud account.
         *                        Note If the acceptor VPC belongs to a Resource Access Management (RAM) user, you must set
         *                        the value of AcceptingAliUid to the ID of the corresponding Alibaba Cloud account.
         *                        Default current account ID.
         * @return {@code this}
         */
        public Builder acceptingAliUid(java.lang.Number acceptingAliUid) {
            this.acceptingAliUid = acceptingAliUid;
            return this;
        }

        /**
         * Sets the value of {@link VpcPeerConnectionProps#getAcceptingAliUid}
         * @param acceptingAliUid Property acceptingAliUid: The ID of the Alibaba Cloud account to which the acceptor VPC belongs.
         *                        To create a VPC peering connection within your Alibaba Cloud account, enter the ID
         *                        of your Alibaba Cloud account.
         *                        To create a VPC peering connection between your Alibaba Cloud account and another
         *                        Alibaba Cloud account, enter the ID of the peer Alibaba Cloud account.
         *                        Note If the acceptor VPC belongs to a Resource Access Management (RAM) user, you must set
         *                        the value of AcceptingAliUid to the ID of the corresponding Alibaba Cloud account.
         *                        Default current account ID.
         * @return {@code this}
         */
        public Builder acceptingAliUid(com.aliyun.ros.cdk.core.IResolvable acceptingAliUid) {
            this.acceptingAliUid = acceptingAliUid;
            return this;
        }

        /**
         * Sets the value of {@link VpcPeerConnectionProps#getAcceptingRegionId}
         * @param acceptingRegionId Property acceptingRegionId: The region ID of the acceptor VPC of the VPC peering connection that you want to create.
         *                          To create an intra-region VPC peering connection, enter a region ID that is the same
         *                          as that of the requester VPC.
         *                          To create an inter-region VPC peering connection, enter a region ID that is different
         *                          from that of the requester VPC.
         *                          Default current region.
         * @return {@code this}
         */
        public Builder acceptingRegionId(java.lang.String acceptingRegionId) {
            this.acceptingRegionId = acceptingRegionId;
            return this;
        }

        /**
         * Sets the value of {@link VpcPeerConnectionProps#getAcceptingRegionId}
         * @param acceptingRegionId Property acceptingRegionId: The region ID of the acceptor VPC of the VPC peering connection that you want to create.
         *                          To create an intra-region VPC peering connection, enter a region ID that is the same
         *                          as that of the requester VPC.
         *                          To create an inter-region VPC peering connection, enter a region ID that is different
         *                          from that of the requester VPC.
         *                          Default current region.
         * @return {@code this}
         */
        public Builder acceptingRegionId(com.aliyun.ros.cdk.core.IResolvable acceptingRegionId) {
            this.acceptingRegionId = acceptingRegionId;
            return this;
        }

        /**
         * Sets the value of {@link VpcPeerConnectionProps#getDeletionForce}
         * @param deletionForce Property deletionForce: Specifies whether to forcefully delete the VPC peering connection.
         *                      Valid values:false (default): notrue: yes If you forcefully delete the VPC peering connection, the system deletes the routes that point to the VPC peering connection from the VPC route table.
         * @return {@code this}
         */
        public Builder deletionForce(java.lang.Boolean deletionForce) {
            this.deletionForce = deletionForce;
            return this;
        }

        /**
         * Sets the value of {@link VpcPeerConnectionProps#getDeletionForce}
         * @param deletionForce Property deletionForce: Specifies whether to forcefully delete the VPC peering connection.
         *                      Valid values:false (default): notrue: yes If you forcefully delete the VPC peering connection, the system deletes the routes that point to the VPC peering connection from the VPC route table.
         * @return {@code this}
         */
        public Builder deletionForce(com.aliyun.ros.cdk.core.IResolvable deletionForce) {
            this.deletionForce = deletionForce;
            return this;
        }

        /**
         * Sets the value of {@link VpcPeerConnectionProps#getDescription}
         * @param description Property description: The description of the VPC peering connection.
         *                    The description must be 2 to 256 characters in length. It must start with a letter
         *                    but cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link VpcPeerConnectionProps#getDescription}
         * @param description Property description: The description of the VPC peering connection.
         *                    The description must be 2 to 256 characters in length. It must start with a letter
         *                    but cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link VpcPeerConnectionProps#getName}
         * @param name Property name: The name of the VPC peering connection.
         *             The name must be 2 to 128 characters in length and can contain digits, underscores
         *             (_), and hyphens (-). It must start with a letter.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link VpcPeerConnectionProps#getName}
         * @param name Property name: The name of the VPC peering connection.
         *             The name must be 2 to 128 characters in length and can contain digits, underscores
         *             (_), and hyphens (-). It must start with a letter.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link VpcPeerConnectionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public VpcPeerConnectionProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link VpcPeerConnectionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VpcPeerConnectionProps {
        private final java.lang.Object acceptingVpcId;
        private final java.lang.Object vpcId;
        private final java.lang.Object acceptingAliUid;
        private final java.lang.Object acceptingRegionId;
        private final java.lang.Object deletionForce;
        private final java.lang.Object description;
        private final java.lang.Object name;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.acceptingVpcId = software.amazon.jsii.Kernel.get(this, "acceptingVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.acceptingAliUid = software.amazon.jsii.Kernel.get(this, "acceptingAliUid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.acceptingRegionId = software.amazon.jsii.Kernel.get(this, "acceptingRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deletionForce = software.amazon.jsii.Kernel.get(this, "deletionForce", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.acceptingVpcId = java.util.Objects.requireNonNull(builder.acceptingVpcId, "acceptingVpcId is required");
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.acceptingAliUid = builder.acceptingAliUid;
            this.acceptingRegionId = builder.acceptingRegionId;
            this.deletionForce = builder.deletionForce;
            this.description = builder.description;
            this.name = builder.name;
        }

        @Override
        public final java.lang.Object getAcceptingVpcId() {
            return this.acceptingVpcId;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getAcceptingAliUid() {
            return this.acceptingAliUid;
        }

        @Override
        public final java.lang.Object getAcceptingRegionId() {
            return this.acceptingRegionId;
        }

        @Override
        public final java.lang.Object getDeletionForce() {
            return this.deletionForce;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("acceptingVpcId", om.valueToTree(this.getAcceptingVpcId()));
            data.set("vpcId", om.valueToTree(this.getVpcId()));
            if (this.getAcceptingAliUid() != null) {
                data.set("acceptingAliUid", om.valueToTree(this.getAcceptingAliUid()));
            }
            if (this.getAcceptingRegionId() != null) {
                data.set("acceptingRegionId", om.valueToTree(this.getAcceptingRegionId()));
            }
            if (this.getDeletionForce() != null) {
                data.set("deletionForce", om.valueToTree(this.getDeletionForce()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.VpcPeerConnectionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            VpcPeerConnectionProps.Jsii$Proxy that = (VpcPeerConnectionProps.Jsii$Proxy) o;

            if (!acceptingVpcId.equals(that.acceptingVpcId)) return false;
            if (!vpcId.equals(that.vpcId)) return false;
            if (this.acceptingAliUid != null ? !this.acceptingAliUid.equals(that.acceptingAliUid) : that.acceptingAliUid != null) return false;
            if (this.acceptingRegionId != null ? !this.acceptingRegionId.equals(that.acceptingRegionId) : that.acceptingRegionId != null) return false;
            if (this.deletionForce != null ? !this.deletionForce.equals(that.deletionForce) : that.deletionForce != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            return this.name != null ? this.name.equals(that.name) : that.name == null;
        }

        @Override
        public final int hashCode() {
            int result = this.acceptingVpcId.hashCode();
            result = 31 * result + (this.vpcId.hashCode());
            result = 31 * result + (this.acceptingAliUid != null ? this.acceptingAliUid.hashCode() : 0);
            result = 31 * result + (this.acceptingRegionId != null ? this.acceptingRegionId.hashCode() : 0);
            result = 31 * result + (this.deletionForce != null ? this.deletionForce.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            return result;
        }
    }
}
