package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>ALIYUN::VPC::BgpGroup</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-15T07:33:50.736Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosBgpGroupProps")
@software.amazon.jsii.Jsii.Proxy(RosBgpGroupProps.Jsii$Proxy.class)
public interface RosBgpGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPeerAsn();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRouterId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAuthKey() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIsFakeAsn() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLocalAsn() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosBgpGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosBgpGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosBgpGroupProps> {
        java.lang.Object peerAsn;
        java.lang.Object routerId;
        java.lang.Object authKey;
        java.lang.Object description;
        java.lang.Object isFakeAsn;
        java.lang.Object localAsn;
        java.lang.Object name;

        /**
         * Sets the value of {@link RosBgpGroupProps#getPeerAsn}
         * @param peerAsn the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder peerAsn(java.lang.Number peerAsn) {
            this.peerAsn = peerAsn;
            return this;
        }

        /**
         * Sets the value of {@link RosBgpGroupProps#getPeerAsn}
         * @param peerAsn the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder peerAsn(com.aliyun.ros.cdk.core.IResolvable peerAsn) {
            this.peerAsn = peerAsn;
            return this;
        }

        /**
         * Sets the value of {@link RosBgpGroupProps#getRouterId}
         * @param routerId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder routerId(java.lang.String routerId) {
            this.routerId = routerId;
            return this;
        }

        /**
         * Sets the value of {@link RosBgpGroupProps#getRouterId}
         * @param routerId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder routerId(com.aliyun.ros.cdk.core.IResolvable routerId) {
            this.routerId = routerId;
            return this;
        }

        /**
         * Sets the value of {@link RosBgpGroupProps#getAuthKey}
         * @param authKey the value to be set.
         * @return {@code this}
         */
        public Builder authKey(java.lang.String authKey) {
            this.authKey = authKey;
            return this;
        }

        /**
         * Sets the value of {@link RosBgpGroupProps#getAuthKey}
         * @param authKey the value to be set.
         * @return {@code this}
         */
        public Builder authKey(com.aliyun.ros.cdk.core.IResolvable authKey) {
            this.authKey = authKey;
            return this;
        }

        /**
         * Sets the value of {@link RosBgpGroupProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosBgpGroupProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosBgpGroupProps#getIsFakeAsn}
         * @param isFakeAsn the value to be set.
         * @return {@code this}
         */
        public Builder isFakeAsn(java.lang.Boolean isFakeAsn) {
            this.isFakeAsn = isFakeAsn;
            return this;
        }

        /**
         * Sets the value of {@link RosBgpGroupProps#getIsFakeAsn}
         * @param isFakeAsn the value to be set.
         * @return {@code this}
         */
        public Builder isFakeAsn(com.aliyun.ros.cdk.core.IResolvable isFakeAsn) {
            this.isFakeAsn = isFakeAsn;
            return this;
        }

        /**
         * Sets the value of {@link RosBgpGroupProps#getLocalAsn}
         * @param localAsn the value to be set.
         * @return {@code this}
         */
        public Builder localAsn(java.lang.Number localAsn) {
            this.localAsn = localAsn;
            return this;
        }

        /**
         * Sets the value of {@link RosBgpGroupProps#getLocalAsn}
         * @param localAsn the value to be set.
         * @return {@code this}
         */
        public Builder localAsn(com.aliyun.ros.cdk.core.IResolvable localAsn) {
            this.localAsn = localAsn;
            return this;
        }

        /**
         * Sets the value of {@link RosBgpGroupProps#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosBgpGroupProps#getName}
         * @param name the value to be set.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosBgpGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosBgpGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosBgpGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosBgpGroupProps {
        private final java.lang.Object peerAsn;
        private final java.lang.Object routerId;
        private final java.lang.Object authKey;
        private final java.lang.Object description;
        private final java.lang.Object isFakeAsn;
        private final java.lang.Object localAsn;
        private final java.lang.Object name;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.peerAsn = software.amazon.jsii.Kernel.get(this, "peerAsn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.routerId = software.amazon.jsii.Kernel.get(this, "routerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.authKey = software.amazon.jsii.Kernel.get(this, "authKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.isFakeAsn = software.amazon.jsii.Kernel.get(this, "isFakeAsn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.localAsn = software.amazon.jsii.Kernel.get(this, "localAsn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.peerAsn = java.util.Objects.requireNonNull(builder.peerAsn, "peerAsn is required");
            this.routerId = java.util.Objects.requireNonNull(builder.routerId, "routerId is required");
            this.authKey = builder.authKey;
            this.description = builder.description;
            this.isFakeAsn = builder.isFakeAsn;
            this.localAsn = builder.localAsn;
            this.name = builder.name;
        }

        @Override
        public final java.lang.Object getPeerAsn() {
            return this.peerAsn;
        }

        @Override
        public final java.lang.Object getRouterId() {
            return this.routerId;
        }

        @Override
        public final java.lang.Object getAuthKey() {
            return this.authKey;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getIsFakeAsn() {
            return this.isFakeAsn;
        }

        @Override
        public final java.lang.Object getLocalAsn() {
            return this.localAsn;
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

            data.set("peerAsn", om.valueToTree(this.getPeerAsn()));
            data.set("routerId", om.valueToTree(this.getRouterId()));
            if (this.getAuthKey() != null) {
                data.set("authKey", om.valueToTree(this.getAuthKey()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getIsFakeAsn() != null) {
                data.set("isFakeAsn", om.valueToTree(this.getIsFakeAsn()));
            }
            if (this.getLocalAsn() != null) {
                data.set("localAsn", om.valueToTree(this.getLocalAsn()));
            }
            if (this.getName() != null) {
                data.set("name", om.valueToTree(this.getName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosBgpGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosBgpGroupProps.Jsii$Proxy that = (RosBgpGroupProps.Jsii$Proxy) o;

            if (!peerAsn.equals(that.peerAsn)) return false;
            if (!routerId.equals(that.routerId)) return false;
            if (this.authKey != null ? !this.authKey.equals(that.authKey) : that.authKey != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.isFakeAsn != null ? !this.isFakeAsn.equals(that.isFakeAsn) : that.isFakeAsn != null) return false;
            if (this.localAsn != null ? !this.localAsn.equals(that.localAsn) : that.localAsn != null) return false;
            return this.name != null ? this.name.equals(that.name) : that.name == null;
        }

        @Override
        public final int hashCode() {
            int result = this.peerAsn.hashCode();
            result = 31 * result + (this.routerId.hashCode());
            result = 31 * result + (this.authKey != null ? this.authKey.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.isFakeAsn != null ? this.isFakeAsn.hashCode() : 0);
            result = 31 * result + (this.localAsn != null ? this.localAsn.hashCode() : 0);
            result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
            return result;
        }
    }
}
