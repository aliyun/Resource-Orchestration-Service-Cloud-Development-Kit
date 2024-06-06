package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>RosVpcPeerConnection</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpcpeerconnection
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-06T03:35:17.954Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosVpcPeerConnectionProps")
@software.amazon.jsii.Jsii.Proxy(RosVpcPeerConnectionProps.Jsii$Proxy.class)
public interface RosVpcPeerConnectionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAcceptingVpcId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAcceptingAliUid() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAcceptingRegionId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeletionForce() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosVpcPeerConnectionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosVpcPeerConnectionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosVpcPeerConnectionProps> {
        java.lang.Object acceptingVpcId;
        java.lang.Object vpcId;
        java.lang.Object acceptingAliUid;
        java.lang.Object acceptingRegionId;
        java.lang.Object deletionForce;
        java.lang.Object description;
        java.lang.Object name;

        /**
         * Sets the value of {@link RosVpcPeerConnectionProps#getAcceptingVpcId}
         * @param acceptingVpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder acceptingVpcId(java.lang.String acceptingVpcId) {
            this.acceptingVpcId = acceptingVpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcPeerConnectionProps#getAcceptingVpcId}
         * @param acceptingVpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder acceptingVpcId(com.aliyun.ros.cdk.core.IResolvable acceptingVpcId) {
            this.acceptingVpcId = acceptingVpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcPeerConnectionProps#getVpcId}
         * @param vpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcPeerConnectionProps#getVpcId}
         * @param vpcId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcPeerConnectionProps#getAcceptingAliUid}
         * @param acceptingAliUid the value to be set.
         * @return {@code this}
         */
        public Builder acceptingAliUid(java.lang.Number acceptingAliUid) {
            this.acceptingAliUid = acceptingAliUid;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcPeerConnectionProps#getAcceptingAliUid}
         * @param acceptingAliUid the value to be set.
         * @return {@code this}
         */
        public Builder acceptingAliUid(com.aliyun.ros.cdk.core.IResolvable acceptingAliUid) {
            this.acceptingAliUid = acceptingAliUid;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcPeerConnectionProps#getAcceptingRegionId}
         * @param acceptingRegionId the value to be set.
         * @return {@code this}
         */
        public Builder acceptingRegionId(java.lang.String acceptingRegionId) {
            this.acceptingRegionId = acceptingRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcPeerConnectionProps#getAcceptingRegionId}
         * @param acceptingRegionId the value to be set.
         * @return {@code this}
         */
        public Builder acceptingRegionId(com.aliyun.ros.cdk.core.IResolvable acceptingRegionId) {
            this.acceptingRegionId = acceptingRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcPeerConnectionProps#getDeletionForce}
         * @param deletionForce the value to be set.
         * @return {@code this}
         */
        public Builder deletionForce(java.lang.Boolean deletionForce) {
            this.deletionForce = deletionForce;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcPeerConnectionProps#getDeletionForce}
         * @param deletionForce the value to be set.
         * @return {@code this}
         */
        public Builder deletionForce(com.aliyun.ros.cdk.core.IResolvable deletionForce) {
            this.deletionForce = deletionForce;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcPeerConnectionProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcPeerConnectionProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcPeerConnectionProps#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosVpcPeerConnectionProps#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosVpcPeerConnectionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosVpcPeerConnectionProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosVpcPeerConnectionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosVpcPeerConnectionProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosVpcPeerConnectionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosVpcPeerConnectionProps.Jsii$Proxy that = (RosVpcPeerConnectionProps.Jsii$Proxy) o;

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
